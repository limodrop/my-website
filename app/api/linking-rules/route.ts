export async function GET() {
  return Response.json({
    cities: {
      portland: ["airport-transportation", "corporate-travel", "wine-tours"],
      beaverton: ["airport-transportation", "corporate-travel"],
      hillsboro: ["airport-transportation"],
      vancouver: ["airport-transportation", "corporate-travel"]
    },

    fleet: {
      "luxury-sedan": ["airport-transportation", "corporate-travel"],
      "suv": ["airport-transportation", "wine-tours", "corporate-travel"],
      "sprinter-van": ["wine-tours", "corporate-travel"]
    },

    services: {
      "airport-transportation": {
        cities: ["portland", "beaverton", "hillsboro", "vancouver"],
        fleet: ["luxury-sedan", "suv"],
      },
      "corporate-travel": {
        cities: ["portland", "beaverton", "vancouver"],
        fleet: ["luxury-sedan", "suv", "sprinter-van"],
      },
      "wine-tours": {
        cities: ["portland"],
        fleet: ["suv", "sprinter-van"],
      },
    },
  })
}
