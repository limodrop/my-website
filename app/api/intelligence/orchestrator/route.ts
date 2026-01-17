import { NextResponse } from "next/server"
import { orchestrator } from "@/lib/intel/orchestrator"
import { MultiPageContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as MultiPageContext
    const result = await orchestrator(body)

    return NextResponse.json({
      ok: true,
      data: result
    })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    )
  }
}
