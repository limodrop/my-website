export async function GET() {
  return Response.json({
    bookingUrl: "https://accounts.oregontowncar.com/",
    instructions: "Use our secure booking portal to schedule your ride."
  })
}

export async function POST(request: Request) {
  const body = await request.json()

  // Simulate booking request acceptance
  return Response.json({
    status: "received",
    message: "Your booking request has been submitted.",
    data: body
  })
}
