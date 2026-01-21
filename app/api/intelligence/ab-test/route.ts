import { NextResponse } from "next/server"
import { abTestEngine } from "@/lib/intel/abTest"
import { ABTestContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ABTestContext
    const result = abTestEngine(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
