import { NextResponse } from "next/server"
import { rankingEngine } from "@/lib/intel/ranking"

export async function GET() {
  const result = rankingEngine()
  return NextResponse.json({ ok: true, data: result })
}
