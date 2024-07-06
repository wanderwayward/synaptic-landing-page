import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { calendar_v3 } from "googleapis";
import { GaxiosResponse } from "gaxios";
import { parseISO } from "date-fns";
import { authenticate } from "@/app/_lib/googleCalendar";
import sgMail from "@sendgrid/mail";
import { v4 as uuidv4 } from "uuid";
import { formatReadableDate } from "../../_utils/DateParser";

interface GoogleApiError {
  error: {
    errors: Array<{
      domain: string;
      reason: string;
      message: string;
      locationType?: string;
      location?: string;
    }>;
    code: number;
    message: string;
  };
}

async function getAuthenticatedClient() {
  const oAuth2Client = authenticate();
  return oAuth2Client;
}

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_TEMPLATE_ID = process.env.SENDGRID_TEMPLATE_ID;

if (!SENDGRID_API_KEY) {
  throw new Error("SendGrid API key is missing");
}

if (!SENDGRID_TEMPLATE_ID) {
  throw new Error("SendGrid template ID is missing");
}

sgMail.setApiKey(SENDGRID_API_KEY);

async function sendConfirmationEmail(
  email: string,
  name: string,
  date: string,
  googleMeetLink: string
) {
  const msg = {
    to: email,
    from: "your-email@example.com", // Use the email address or domain you verified with SendGrid
    templateId: SENDGRID_TEMPLATE_ID!,
    dynamic_template_data: {
      name,
      date: formatReadableDate(date), // Format the date to a readable format
      link: googleMeetLink || "No Google Meet link available", // Provide a fallback value
    },
  };

  await sgMail.send(msg);
}

export async function POST(req: NextRequest) {
  try {
    const { summary, start, end, email } = await req.json();
    const auth = await getAuthenticatedClient();
    const calendar = google.calendar({ version: "v3", auth });

    const calendarId = "marco@synaptic.clinic"; // Replace with your calendar ID

    const startDate = parseISO(start);
    const endDate = parseISO(end);

    const startUTC = startDate.toISOString();
    const endUTC = endDate.toISOString();

    console.log("Server-side: Received start:", start, "end:", end);
    console.log("Server-side: Parsed startUTC:", startUTC, "endUTC:", endUTC);

    const response: GaxiosResponse<calendar_v3.Schema$Event> =
      await calendar.events.insert({
        calendarId,
        requestBody: {
          summary,
          start: { dateTime: startUTC, timeZone: "UTC" }, // Store in UTC
          end: { dateTime: endUTC, timeZone: "UTC" }, // Store in UTC
          attendees: [{ email }],
          conferenceData: {
            createRequest: {
              requestId: uuidv4(), // Generate a unique request ID
              conferenceSolutionKey: { type: "hangoutsMeet" },
            },
          },
        },
        conferenceDataVersion: 1,
      });

    const googleMeetLink = response.data.conferenceData?.entryPoints?.find(
      (entryPoint) => entryPoint.entryPointType === "video"
    )?.uri;

    console.log("Google Meet link:", googleMeetLink);

    // Send confirmation email
    await sendConfirmationEmail(
      email,
      summary,
      start,
      googleMeetLink || "No Google Meet link available"
    );

    return NextResponse.json(
      {
        summary,
        start: startUTC,
        end: endUTC,
        email,
        googleMeetLink,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating event:", error);
    const err = error as GoogleApiError;
    return NextResponse.json(
      { error: err.error.message },
      { status: err.error.code || 500 }
    );
  }
}
