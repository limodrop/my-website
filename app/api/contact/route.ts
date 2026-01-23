export async function GET() {
  return Response.json({
    phone: "(503) 123-4567",
    email: "hello@oregontowncar.com",
    address: "Portland, Oregon",
    hours: "24/7 Service Available"
  })
}
