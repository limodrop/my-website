export async function GET() {
  return Response.json({
    portland: ["airport-transportation", "corporate-travel", "wine-tours"],
    beaverton: ["airport-transportation", "corporate-travel"],
    hillsboro: ["airport-transportation"],
    vancouver: ["airport-transportation", "corporate-travel"]
  })
}
