// src/app/api/auth/callback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "@/app/_lib/googleCalendar";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.redirect("/error"); // Handle the error case
  }

  const oAuth2Client = authenticate();

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    // Store the tokens in a secure place, e.g., a database or encrypted storage
    return NextResponse.redirect("/success"); // Redirect to a success page or handle tokens
  } catch (error) {
    console.error("Error retrieving access token", error);
    return NextResponse.redirect("/error"); // Handle the error case
  }
}
