import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "@/app/_lib/googleCalendar";

export async function GET(req: NextRequest) {
  const oAuth2Client = authenticate();
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/calendar"],
  });
  console.log("Generated auth URL:", authUrl);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="0;url=${authUrl}">
        <title>Redirecting...</title>
      </head>
      <body>
        <p>If you are not redirected, <a href="${authUrl}">click here</a>.</p>
      </body>
    </html>
  `;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
