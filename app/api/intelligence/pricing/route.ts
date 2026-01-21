import { NextResponse } from "next/server"
import { pricingEngine } from "@/lib/intel/pricing"
import { PricingContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as PricingContext
    const result = pricingEngine(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
