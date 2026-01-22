export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data: Record<string, any> = {
    "airport-transportation": {
      id: 1,
      name: "Airport Transportation",
      description: "Reliable airport pickup and drop-off service with real-time flight tracking.",
      image: "/images/services/airport.jpg"
    },
    "corporate-travel": {
      id: 2,
      name: "Corporate Travel",
      description: "Professional transportation for business meetings, conferences, and events.",
      image: "/images/services/corporate.jpg"
    },
    "wine-tours": {
      id: 3,
      name: "Wine Tours",
      description: "Luxury wine tasting tours across Oregon vineyards.",
      image: "/images/services/wine.jpg"
    }
  }

  return Response.json(data[params.slug] || null)
}
