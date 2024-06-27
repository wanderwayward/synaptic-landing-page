import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "@/app/_lib/googleCalendar";

export async function GET(req: NextRequest) {
  const oAuth2Client = authenticate();
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/calendar"],
  });
  console.log("Generated auth URL:", authUrl); // Added logging
  return NextResponse.redirect(authUrl);
}
