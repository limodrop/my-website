import { NavigationContext, NavigationLayout } from "./types"
import { makeId, now } from "./utils"

export function navigationEngine(ctx: NavigationContext): NavigationLayout {
  const top = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Cities", href: "/cities" },
    { label: "Fleet", href: "/fleet" }
  ]

  const bottom = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book Now", href: "https://book.oregontowncar.com" }
  ]

  return {
    id: makeId("nav"),
    context: ctx,
    top,
    bottom,
    generatedAt: now(),
    source: "rule"
  }
}
