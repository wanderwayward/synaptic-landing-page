// src/app/api/calendar-events/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { calendar_v3 } from "googleapis";
import { GaxiosResponse } from "gaxios";
import { parseISO } from "date-fns";
import { authenticate } from "@/app/_lib/googleCalendar";

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
  // Retrieve the stored tokens and set them here
  const tokens = {
    /* your stored tokens */
  };
  oAuth2Client.setCredentials(tokens);
  return oAuth2Client;
}

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthenticatedClient();

    const calendar = google.calendar({ version: "v3", auth });

    const calendarId = "marco@synaptic.clinic"; // Replace with your calendar ID

    const response: GaxiosResponse<calendar_v3.Schema$Events> =
      await calendar.events.list({
        calendarId,
        timeMin: new Date().toISOString(), // Fetch events from now onwards
        maxResults: 100,
        singleEvents: true,
        orderBy: "startTime",
      });

    const events = response.data.items || [];
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error);
    const err = error as GoogleApiError;
    return NextResponse.json(
      { error: err.error.message },
      { status: err.error.code || 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { summary, start, end, email } = await req.json();
    const auth = await getAuthenticatedClient();

    const calendar = google.calendar({ version: "v3", auth });

    const calendarId = "your_calendar_id";

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
              requestId: "sample123", // A unique ID for the conference
              conferenceSolutionKey: { type: "hangoutsMeet" },
            },
          },
        },
        conferenceDataVersion: 1,
      });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Error creating event:", error);
    const err = error as GoogleApiError;
    return NextResponse.json(
      { error: err.error.message },
      { status: err.error.code || 500 }
    );
  }
}
