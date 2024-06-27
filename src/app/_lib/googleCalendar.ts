import { google, Auth } from "googleapis";
import fs from "fs";
import path from "path";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

export const calendar = google.calendar("v3");

export const authenticate = (): Auth.GoogleAuth => {
  let credentials;
  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS as string;

  try {
    const filePath = path.resolve(credentialsPath);
    credentials = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.error(
      "Failed to read and parse GOOGLE_APPLICATION_CREDENTIALS file",
      error
    );
    throw new Error(
      "Failed to read and parse GOOGLE_APPLICATION_CREDENTIALS file"
    );
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  return auth;
};
