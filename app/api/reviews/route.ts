export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Michael P.",
      rating: 5,
      text: "Best chauffeur service in Oregon. Highly professional."
    },
    {
      id: 2,
      name: "Laura S.",
      rating: 5,
      text: "Our wine tour was unforgettable. Excellent service."
    },
    {
      id: 3,
      name: "James K.",
      rating: 4,
      text: "Great airport pickup. Smooth and on time."
    }
  ])
}
