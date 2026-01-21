import { NextResponse } from "next/server"
import { AnalyticsEvent } from "@/lib/analytics/types"
import { trackEvent } from "@/lib/analytics/track"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as AnalyticsEvent
    trackEvent(body)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
