import { NextResponse } from "next/server"
import { decayEngine } from "@/lib/intel/decay"
import { ContentDecayContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContentDecayContext
    const result = decayEngine(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
