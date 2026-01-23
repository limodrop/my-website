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
      name: "Lake Oswego",
      slug: "lake-oswego",
      description: "Luxury chauffeur service in Lake Oswego.",
      image: "/images/cities/lake-oswego.jpg"
    },
    {
      id: 4,
      name: "Tigard",
      slug: "tigard",
      description: "Professional transportation in Tigard.",
      image: "/images/cities/tigard.jpg"
    },
    {
      id: 5,
      name: "Hillsboro",
      slug: "hillsboro",
      description: "Luxury rides in Hillsboro.",
      image: "/images/cities/hillsboro.jpg"
    },
    {
      id: 6,
      name: "Vancouver, WA",
      slug: "vancouver-wa",
      description: "Premium chauffeur service in Vancouver, Washington.",
      image: "/images/cities/vancouver-wa.jpg"
    },
    {
      id: 7,
      name: "Willamette Valley",
      slug: "willamette-valley",
      description: "Wine country transportation in Willamette Valley.",
      image: "/images/cities/willamette-valley.jpg"
    }
  ])
}
