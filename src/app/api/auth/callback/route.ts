// src/app/api/auth/callback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { authenticate, storeToken } from "@/app/_lib/googleCalendar";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.redirect("/error"); // Handle the error case
  }

  const oAuth2Client = authenticate();

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    if (tokens.refresh_token) {
      console.log("Storing refresh token:", tokens.refresh_token); // Debug log
      storeToken(tokens.refresh_token); // Store the refresh token securely
    } else {
      console.error("No refresh token received");
      return NextResponse.redirect("/error"); // Handle the error case
    }

    return NextResponse.redirect("/success"); // Redirect to a success page or handle tokens
  } catch (error) {
    console.error("Error retrieving access token", error);
    return NextResponse.redirect("/error"); // Handle the error case
  }
}
