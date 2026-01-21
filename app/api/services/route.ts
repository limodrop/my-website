export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Airport Transportation",
      slug: "airport-transportation",
      description: "Reliable airport pickup and drop-off service.",
      image: "/images/services/airport.jpg"
    },
    {
      id: 2,
      name: "Corporate Travel",
      slug: "corporate-travel",
      description: "Professional transportation for business meetings and events.",
      image: "/images/services/corporate.jpg"
    },
    {
      id: 3,
      name: "Wine Tours",
      slug: "wine-tours",
      description: "Luxury wine tasting tours across Oregon vineyards.",
      image: "/images/services/wine.jpg"
    }
  ])
}
