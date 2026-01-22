export async function GET() {
  return Response.json({
    company: "Oregon Town Car",
    phone: "(503) 123-4567",
    email: "info@oregontowncar.com",
    address: "Portland, Oregon",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Cities", href: "/cities" },
      { label: "Fleet", href: "/fleet" },
      { label: "Contact", href: "/contact" }
    ]
  })
}
