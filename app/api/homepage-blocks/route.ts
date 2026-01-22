export async function GET() {
  return Response.json([
    {
      id: 1,
      type: "text",
      title: "Why Choose Oregon Town Car",
      content: "Professional drivers, luxury vehicles, and reliable service."
    },
    {
      id: 2,
      type: "image",
      image: "/images/homepage/comfort.jpg",
      caption: "Ride in comfort and style."
    },
    {
      id: 3,
      type: "cta",
      label: "Book Your Ride",
      href: "/booking"
    }
  ])
}
