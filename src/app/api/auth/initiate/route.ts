// src/app/api/auth/initiate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "@/app/_lib/googleCalendar";

export async function GET(req: NextRequest) {
  const oAuth2Client = authenticate();
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline", // Necessary to get a refresh token
    scope: ["https://www.googleapis.com/auth/calendar"],
  });

  return NextResponse.redirect(authUrl); // Redirect to Google's OAuth2 consent page
}
