import { NextResponse } from "next/server"
import { bookingIntentEngine } from "@/lib/intel/bookingIntent"
import { BookingIntentContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as BookingIntentContext
    const result = bookingIntentEngine(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
