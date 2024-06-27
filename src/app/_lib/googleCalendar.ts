import { google, Auth } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

export const calendar = google.calendar("v3");

const requiredEnvVars = [
  "GOOGLE_TYPE",
  "GOOGLE_PROJECT_ID",
  "GOOGLE_PRIVATE_KEY_ID",
  "GOOGLE_PRIVATE_KEY",
  "GOOGLE_CLIENT_EMAIL",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_AUTH_URI",
  "GOOGLE_TOKEN_URI",
  "GOOGLE_AUTH_PROVIDER_X509_CERT_URL",
  "GOOGLE_CLIENT_X509_CERT_URL",
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} is missing`);
  }
});

export const authenticate = (): Auth.GoogleAuth => {
  const credentials = {
    type: process.env.GOOGLE_TYPE!,
    project_id: process.env.GOOGLE_PROJECT_ID!,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID!,
    private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    client_email: process.env.GOOGLE_CLIENT_EMAIL!,
    client_id: process.env.GOOGLE_CLIENT_ID!,
    auth_uri: process.env.GOOGLE_AUTH_URI!,
    token_uri: process.env.GOOGLE_TOKEN_URI!,
    auth_provider_x509_cert_url:
      process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL!,
    client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL!,
  };

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  return auth;
};
