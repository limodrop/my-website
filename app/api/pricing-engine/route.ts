export async function GET() {
  return Response.json({
    baseRates: {
      sedan: 75,
      suv: 95,
      sprinter: 150
    },
    perMile: {
      sedan: 3.5,
      suv: 4.0,
      sprinter: 5.5
    },
    perHour: {
      sedan: 65,
      suv: 85,
      sprinter: 120
    }
  })
}
