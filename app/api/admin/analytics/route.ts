import { getRecentEvents } from "@/lib/analytics/track"

export async function GET() {
  const data = getRecentEvents()
  return Response.json({ ok: true, data })
}
