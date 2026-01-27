import { NextRequest, NextResponse } from "next/server"
import { fallbackLng, languages } from "./i18n.config"

export function middleware(request: NextRequest) {
  const { pathname, host, protocol } = request.nextUrl;

  // Canonical domain redirect: non-www to www
  if (host === "oregontowncar.com") {
    const url = request.nextUrl.clone();
    url.host = "www.oregontowncar.com";
    // Ensure HTTPS is preserved
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = fallbackLng;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api|.*\\..*).*)"]
}
