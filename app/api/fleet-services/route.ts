export async function GET() {
  return Response.json({
    "luxury-sedan": ["airport-transportation", "corporate-travel"],
    "suv": ["airport-transportation", "wine-tours", "corporate-travel"],
    "sprinter-van": ["wine-tours", "corporate-travel"]
  })
}
