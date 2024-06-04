// src/app/api/calendar-events/route.ts
import { NextRequest, NextResponse } from "next/server";
import { calendar, authenticate } from "@/app/_lib/googleCalendar";
import { calendar_v3 } from "googleapis";
import { GaxiosResponse } from "gaxios";

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

export async function GET(req: NextRequest) {
  try {
    console.log("Authenticating...");
    const auth = await authenticate().getClient();

    // Use the calendar ID here, typically the email address of the owner of the calendar
    const calendarId = "rubenaguirrelizcano@gmail.com"; // Replace with your calendar ID

    console.log("Fetching events...");
    const response: GaxiosResponse<calendar_v3.Schema$Events> =
      await calendar.events.list({
        auth: auth as any,
        calendarId,
        timeMin: new Date().toISOString(), // Fetch events from now onwards
        maxResults: 100,
        singleEvents: true,
        orderBy: "startTime",
      });

    const events = response.data.items || [];

    console.log("Events fetched:", JSON.stringify(events, null, 2));

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
