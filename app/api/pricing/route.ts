export async function GET() {
  return Response.json([
    {
      id: 1,
      service: "Airport Transportation",
      baseRate: 75,
      perMile: 3.5
    },
    {
      id: 2,
      service: "Corporate Travel",
      baseRate: 95,
      perMile: 4.0
    },
    {
      id: 3,
      service: "Wine Tours",
      baseRate: 120,
      perHour: 65
    }
  ])
}
