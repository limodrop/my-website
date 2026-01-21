import { NextResponse } from "next/server"
import { priceMessagingEngine } from "@/lib/intel/priceMessaging"
import { PriceMessagingContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as PriceMessagingContext
    const result = priceMessagingEngine(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
