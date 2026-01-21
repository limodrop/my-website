export async function GET() {
  return Response.json({
    heroSlides: [
      {
        title: "Premium Chauffeur Service in Oregon",
        subtitle: "Airport, corporate, wine tours, and more.",
        cta: "Book Now"
      },
      {
        title: "On-Time Airport Transportation",
        subtitle: "Flight tracking and professional drivers.",
        cta: "Reserve Your Ride"
      }
    ],
    featuredServices: ["airport-transportation", "corporate-travel", "wine-tours"],
    featuredCities: ["portland", "beaverton"],
    featuredFleet: ["luxury-sedan", "suv"]
  })
}
