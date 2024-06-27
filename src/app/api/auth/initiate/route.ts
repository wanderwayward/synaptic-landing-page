// src/app/api/auth/initiate/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("Initiate route accessed"); // Debug log
  return new NextResponse("Initiate route is working", { status: 200 });
}
