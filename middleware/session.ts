import { NextRequest, NextResponse } from "next/server"
import { inferSessionProfile } from "@/lib/intel/inferSession"

export function middleware(req: NextRequest) {
  const profile = inferSessionProfile(req)
  const res = NextResponse.next()

  res.cookies.set("session_city", profile.city)
  res.cookies.set("session_service", profile.service)
  res.cookies.set("session_fleet", profile.fleet)
  res.cookies.set("session_lang", profile.lang)
  res.cookies.set("session_intent", profile.intent)
  res.cookies.set("session_source", profile.source)

  return res
}

export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"]
}
