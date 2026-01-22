export async function GET() {
  return Response.json({
    baseCity: "Portland",
    radiusMiles: 60,
    includedCities: [
      "Portland",
      "Beaverton",
      "Hillsboro",
      "Tigard",
      "Lake Oswego",
      "Vancouver, WA"
    ]
  })
}
