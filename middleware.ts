import { NextRequest, NextResponse } from "next/server"
import { fallbackLng, languages } from "./i18n.config"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = fallbackLng
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api|.*\\..*).*)"]
}
