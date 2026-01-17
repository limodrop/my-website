import { NextResponse } from "next/server"
import { sitemapPriorityEngine } from "@/lib/intel/sitemapPriority"

export async function GET() {
  const result = sitemapPriorityEngine()
  return NextResponse.json({ ok: true, data: result })
}
