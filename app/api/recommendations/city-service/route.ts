import { NextResponse } from "next/server"
import { cityServiceEngine } from "@/lib/intel/cityService"
import { CityServiceMatchContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CityServiceMatchContext
    const result = cityServiceEngine(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
