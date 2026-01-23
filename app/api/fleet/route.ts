export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Luxury Sedan",
      slug: "luxury-sedan",
      seats: 3,
      image: "/images/fleet/sedan.jpg",
      description: "Comfortable and stylish sedan for airport and corporate travel."
    },
    {
      id: 2,
      name: "Black SUV",
      slug: "black-suv",
      seats: 6,
      image: "/images/fleet/suv.jpg",
      description: "Spacious SUV ideal for families and group travel."
    },
    {
      id: 3,
      name: "Executive Van",
      slug: "executive-van",
      seats: 14,
      image: "/images/fleet/van.jpg",
      description: "Perfect for wine tours and group events."
    },
    {
      id: 4,
      name: "Mini Coach",
      slug: "mini-coach",
      seats: 30,
      image: "/images/fleet/mini-coach.jpg",
      description: "Ideal for corporate groups, special events, and large party transportation."
    }
  ])
}
