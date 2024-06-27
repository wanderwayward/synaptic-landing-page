// src/app/api/test-redirect/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("Test redirection"); // Debug log
  return NextResponse.redirect("https://www.google.com");
}
