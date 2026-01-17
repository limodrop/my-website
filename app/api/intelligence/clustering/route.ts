import { NextResponse } from "next/server"
import { clusteringEngine } from "@/lib/intel/clustering"

export async function GET() {
  const result = clusteringEngine()
  return NextResponse.json({ ok: true, data: result })
}
