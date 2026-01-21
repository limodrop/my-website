export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data: Record<string, any> = {
    "portland": {
      id: 1,
      name: "Portland",
      description: "Premium chauffeur service in Portland, Oregon.",
      image: "/images/cities/portland.jpg"
    },
    "beaverton": {
      id: 2,
      name: "Beaverton",
      description: "Reliable transportation in Beaverton.",
      image: "/images/cities/beaverton.jpg"
    },
    "hillsboro": {
      id: 3,
      name: "Hillsboro",
      description: "Luxury rides in Hillsboro.",
      image: "/images/cities/hillsboro.jpg"
    }
  }

  return Response.json(data[params.slug] || null)
}
