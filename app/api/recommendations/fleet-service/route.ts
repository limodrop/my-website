import { NextResponse } from "next/server"
import { fleetServiceEngine } from "@/lib/intel/fleetService"
import { FleetServiceMatchContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as FleetServiceMatchContext
    const result = fleetServiceEngine(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
