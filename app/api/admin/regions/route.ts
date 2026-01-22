import { NextResponse } from "next/server";
import { serverClient } from "@/app/lib/serverClient";

export async function GET() {
  const regions = await serverClient.regions();
  return NextResponse.json(regions);
}

export async function POST(req: Request) {
  const body = await req.json();
  
  // In a real implementation, this would update the backend/database
  // For now, we just return success
  return NextResponse.json({ success: true, data: body });
}
