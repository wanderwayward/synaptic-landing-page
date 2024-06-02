import { NextApiRequest, NextApiResponse } from "next";
import { calendar, authenticate } from "../../_lib/googleCalendar";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const auth = authenticate();
  const calendarId = "primary";

  try {
    const response = await calendar.events.list({
      auth,
      calendarId,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });

    res.status(200).json(response.data.items);
  } catch (error: unknown) {
    const err = error as GoogleApiError;
    res.status(err.error.code || 500).json({ error: err.error.message });
  }
}
