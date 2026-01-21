export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Portland",
      slug: "portland",
      description: "Premium chauffeur service in Portland, Oregon.",
      image: "/images/cities/portland.jpg"
    },
    {
      id: 2,
      name: "Beaverton",
      slug: "beaverton",
      description: "Reliable transportation in Beaverton.",
      image: "/images/cities/beaverton.jpg"
    },
    {
      id: 3,
      name: "Hillsboro",
      slug: "hillsboro",
      description: "Luxury rides in Hillsboro.",
      image: "/images/cities/hillsboro.jpg"
    }
  ])
}
