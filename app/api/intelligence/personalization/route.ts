import { NextResponse } from "next/server"
import { personalizationEngine } from "@/lib/intel/personalization"
import { MultiPageContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as MultiPageContext
    const result = personalizationEngine(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
