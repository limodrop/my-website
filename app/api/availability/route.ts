export async function GET() {
  return Response.json({
    available: true,
    message: "We currently have vehicles available for booking."
  })
}
