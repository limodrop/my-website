import { NextResponse } from "next/server"
import { nbaEngine } from "@/lib/intel/nba"
import { NBAContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as NBAContext
    const result = nbaEngine(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
