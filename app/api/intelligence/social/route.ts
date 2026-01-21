import { NextResponse } from "next/server"
import { socialScheduler } from "@/lib/intel/social"
import { SocialContext } from "@/lib/intel/types"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SocialContext
    const result = socialScheduler(body)

    return NextResponse.json({ ok: true, data: result })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
