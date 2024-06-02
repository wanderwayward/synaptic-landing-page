import { google } from "googleapis";
import path from "path";

const calendar = google.calendar("v3");

const authenticate = () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(
      process.cwd(),
      process.env.GOOGLE_APPLICATION_CREDENTIALS!
    ),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  return auth;
};

export { calendar, authenticate };
