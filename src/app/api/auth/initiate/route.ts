// src/app/api/auth/initiate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "@/app/_lib/googleCalendar";

export async function GET(req: NextRequest) {
  console.log("Initiating OAuth2 flow"); // Debug log
  const oAuth2Client = authenticate();
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline", // Necessary to get a refresh token
    scope: ["https://www.googleapis.com/auth/calendar"],
  });

  console.log("Generated auth URL:", authUrl); // Debug log

  return NextResponse.redirect(authUrl); // Redirect to Google's OAuth2 consent page
}
