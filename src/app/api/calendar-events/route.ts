import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { calendar_v3 } from "googleapis";
import { GaxiosResponse } from "gaxios";
import { parseISO } from "date-fns";
import { authenticate } from "@/app/_lib/googleCalendar";
import sgMail from "@sendgrid/mail";
import { v4 as uuidv4 } from "uuid";
import {
  formatReadableDate,
  formatReadableTime,
} from "../../_utils/DateParser"; // Adjust the path to where you save this utility function

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
const SENDGRID_INTERNAL_TEMPLATE_ID = process.env.SENDGRID_INTERNAL_TEMPLATE_ID; // New internal template ID

if (!SENDGRID_API_KEY) {
  throw new Error("SendGrid API key is missing");
}

if (!SENDGRID_TEMPLATE_ID) {
  throw new Error("SendGrid template ID is missing");
}

if (!SENDGRID_INTERNAL_TEMPLATE_ID) {
  throw new Error("SendGrid internal template ID is missing");
}

sgMail.setApiKey(SENDGRID_API_KEY);

async function sendConfirmationEmail(
  email: string,
  name: string,
  date: string,
  time: string,
  googleMeetLink: string
) {
  const msg = {
    to: email,
    from: "marco@synaptic.clinic", // Use the email address or domain you verified with SendGrid
    templateId: SENDGRID_TEMPLATE_ID!,
    dynamic_template_data: {
      name,
      date, // Already formatted date
      time, // Already formatted time
      link: googleMeetLink || "No Google Meet link available", // Provide a fallback value
    },
  };

  await sgMail.send(msg);
}

async function sendInternalNotification(
  email: string,
  name: string,
  date: string,
  time: string,
  googleMeetLink: string,
  phone: string,
  reason: string
) {
  const msg = {
    to: "marco@synaptic.clinic", // Internal email
    from: "marco@synaptic.clinic", // Use the email address or domain you verified with SendGrid
    templateId: SENDGRID_INTERNAL_TEMPLATE_ID!,
    dynamic_template_data: {
      name,
      date, // Already formatted date
      time, // Already formatted time
      link: googleMeetLink || "No Google Meet link available", // Provide a fallback value
      phone,
      reason,
    },
  };

  await sgMail.send(msg);
}

export async function POST(req: NextRequest) {
  try {
    const { summary, start, end, email, phone, reason } = await req.json();
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

    // Format date and time
    const formattedDate = formatReadableDate(start);
    const formattedTime = formatReadableTime(start);

    // Send confirmation email to the user
    await sendConfirmationEmail(
      email,
      summary,
      formattedDate,
      formattedTime,
      googleMeetLink || "No Google Meet link available"
    );

    // Send internal notification email
    await sendInternalNotification(
      email,
      summary,
      formattedDate,
      formattedTime,
      googleMeetLink || "No Google Meet link available",
      phone,
      reason
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

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthenticatedClient();
    const calendar = google.calendar({ version: "v3", auth });

    const calendarId = "marco@synaptic.clinic"; // Replace with your calendar ID
    const now = new Date().toISOString();
    const response = await calendar.events.list({
      calendarId,
      timeMin: now,
      singleEvents: true,
      orderBy: "startTime",
    });

    const events = response.data.items || [];

    return NextResponse.json(events, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching events:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Unknown error occurred" },
      { status: 500 }
    );
  }
}
