export async function GET() {
  return Response.json({
    hero: {
      title: "Premium Chauffeur Service in Oregon",
      subtitle: "Airport, corporate, wine tours, and more.",
      cta: "Book Now"
    },
    featuredServices: ["airport-transportation", "corporate-travel", "wine-tours"],
    featuredCities: ["portland", "beaverton"],
    featuredFleet: ["luxury-sedan", "suv"]
  })
}
