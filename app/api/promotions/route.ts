export async function GET() {
  return Response.json([
    {
      id: 1,
      title: "Winter Special",
      description: "10% off all airport rides this winter.",
      code: "WINTER10"
    },
    {
      id: 2,
      title: "Wine Tour Discount",
      description: "Save $25 on any wine tour package.",
      code: "WINE25"
    }
  ])
}
