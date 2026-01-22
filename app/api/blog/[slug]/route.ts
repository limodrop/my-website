export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data: Record<string, any> = {
    "oregon-wine-tour-destinations": {
      id: 1,
      title: "Top 5 Oregon Wine Tour Destinations",
      content: "Oregon offers some of the most beautiful vineyards...",
      image: "/images/blog/wine-tour.jpg"
    },
    "corporate-travel-benefits": {
      id: 2,
      title: "Why Choose a Chauffeur for Corporate Travel",
      content: "Corporate travel requires reliability and professionalism...",
      image: "/images/blog/corporate.jpg"
    }
  }

  return Response.json(data[params.slug] || null)
}
