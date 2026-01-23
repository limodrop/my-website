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
    "lake-oswego": {
      id: 3,
      name: "Lake Oswego",
      description: "Luxury chauffeur service in Lake Oswego.",
      image: "/images/cities/lake-oswego.jpg"
    },
    "tigard": {
      id: 4,
      name: "Tigard",
      description: "Professional transportation in Tigard.",
      image: "/images/cities/tigard.jpg"
    },
    "hillsboro": {
      id: 5,
      name: "Hillsboro",
      description: "Luxury rides in Hillsboro.",
      image: "/images/cities/hillsboro.jpg"
    },
    "vancouver-wa": {
      id: 6,
      name: "Vancouver, WA",
      description: "Premium chauffeur service in Vancouver, Washington.",
      image: "/images/cities/vancouver-wa.jpg"
    },
    "willamette-valley": {
      id: 7,
      name: "Willamette Valley",
      description: "Wine country transportation in Willamette Valley.",
      image: "/images/cities/willamette-valley.jpg"
    }
  }

  return Response.json(data[params.slug] || null)
}
