// src/app/_lib/googleCalendar.ts
import { google, Auth } from "googleapis";
import path from "path";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

export const calendar = google.calendar("v3");

export const authenticate = (): Auth.GoogleAuth => {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(
      process.cwd(),
      process.env.GOOGLE_APPLICATION_CREDENTIALS!
    ),
    scopes: SCOPES,
  });

  return auth;
};
