export async function GET() {
  return Response.json([
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Cities", href: "/cities" },
    { label: "Fleet", href: "/fleet" },
    { label: "Contact", href: "/contact" }
  ])
}
