export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Sarah M.",
      text: "Amazing service! My airport pickup was smooth and on time."
    },
    {
      id: 2,
      name: "David R.",
      text: "Professional drivers and clean vehicles. Highly recommended."
    },
    {
      id: 3,
      name: "Emily T.",
      text: "Our wine tour was perfect. Will book again!"
    }
  ])
}
