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
      name: "Hourly Chauffeur",
      slug: "hourly-chauffeur",
      description: "Flexible by-the-hour service for meetings, tours, and events.",
      image: "/images/services/hourly.jpg"
    },
    {
      id: 4,
      name: "Wine Tours",
      slug: "wine-tours",
      description: "Luxury wine tasting tours across Oregon vineyards.",
      image: "/images/services/wine.jpg"
    },
    {
      id: 5,
      name: "VIP Arrival Service",
      slug: "vip-arrival",
      description: "Meet & greet, guided arrivals, luxury pickup",
      image: "/images/services/vip-arrival.jpg"
    },
    {
      id: 6,
      name: "Special Events",
      slug: "special-events",
      description: "Elegant transportation for weddings and special occasions.",
      image: "/images/services/special-events.jpg"
    }
  ])
}
