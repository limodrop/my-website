export async function GET() {
  return Response.json({
    bookingUrl: "https://book.oregontowncar.com",
    instructions: "Use our secure booking portal to schedule your ride."
  })
}
