// src/app/_lib/googleCalendar.ts
import { google, Auth } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

export const calendar = google.calendar("v3");

export const authenticate = (): Auth.GoogleAuth => {
  const credentials = JSON.parse(
    process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON!
  );

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  return auth;
};
