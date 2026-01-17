import { NextResponse } from "next/server"
import { crossPageEngine } from "@/lib/intel/crossPage"
import { CrossPageContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CrossPageContext
    const result = crossPageEngine(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
