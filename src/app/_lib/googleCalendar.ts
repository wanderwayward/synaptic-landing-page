// src/app/_lib/googleCalendar.ts
import { google, Auth } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const requiredEnvVars = [
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "GOOGLE_REDIRECT_URI",
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} is missing`);
  }
});

export const authenticate = (): Auth.OAuth2Client => {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  // Set credentials if available
  if (process.env.GOOGLE_REFRESH_TOKEN) {
    oAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });
  }

  return oAuth2Client;
};

export const storeToken = (refreshToken: string) => {
  // Store the refresh token in a secure place
  console.log("Storing refresh token in environment variable"); // Debug log
  process.env.GOOGLE_REFRESH_TOKEN = refreshToken;
};
