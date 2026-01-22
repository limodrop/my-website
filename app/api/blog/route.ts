export async function GET() {
  return Response.json([
    {
      id: 1,
      title: "Top 5 Oregon Wine Tour Destinations",
      slug: "oregon-wine-tour-destinations",
      excerpt: "Explore the best vineyards and wineries across Oregon.",
      image: "/images/blog/wine-tour.jpg"
    },
    {
      id: 2,
      title: "Why Choose a Chauffeur for Corporate Travel",
      slug: "corporate-travel-benefits",
      excerpt: "Professional transportation makes a difference.",
      image: "/images/blog/corporate.jpg"
    }
  ])
}
