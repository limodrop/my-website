export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data: Record<string, any> = {
    "luxury-sedan": {
      id: 1,
      name: "Luxury Sedan",
      seats: 3,
      description: "Comfortable and stylish sedan for airport and corporate travel.",
      image: "/images/fleet/sedan.jpg"
    },
    "suv": {
      id: 2,
      name: "SUV",
      seats: 6,
      description: "Spacious SUV ideal for families and group travel.",
      image: "/images/fleet/suv.jpg"
    },
    "sprinter-van": {
      id: 3,
      name: "Sprinter Van",
      seats: 14,
      description: "Perfect for wine tours and group events.",
      image: "/images/fleet/sprinter.jpg"
    }
  }

  return Response.json(data[params.slug] || null)
}
