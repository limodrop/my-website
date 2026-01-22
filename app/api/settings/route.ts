export async function GET() {
  return Response.json({
    siteName: "Oregon Town Car",
    tagline: "Premium Chauffeur Service in Oregon",
    primaryColor: "#0A3A63",
    secondaryColor: "#D4AF37",
    bookingUrl: "https://book.oregontowncar.com"
  })
}
