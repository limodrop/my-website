export async function GET() {
  return Response.json({
    cities: {
      portland: ["airport-transportation", "corporate-travel", "wine-tours"],
      beaverton: ["airport-transportation", "corporate-travel"],
      "lake-oswego": ["airport-transportation", "corporate-travel"],
      tigard: ["airport-transportation", "corporate-travel"],
      hillsboro: ["airport-transportation", "corporate-travel"],
      "vancouver-wa": ["airport-transportation", "corporate-travel"],
      "willamette-valley": ["wine-tours", "airport-transportation"]
    },

    fleet: {
      "luxury-sedan": ["airport-transportation", "corporate-travel"],
      "suv": ["airport-transportation", "wine-tours", "corporate-travel"],
      "sprinter-van": ["wine-tours", "corporate-travel"]
    },

    services: {
      "airport-transportation": {
        cities: ["portland", "beaverton", "lake-oswego", "tigard", "hillsboro", "vancouver-wa", "willamette-valley"],
        fleet: ["luxury-sedan", "suv"],
      },
      "corporate-travel": {
        cities: ["portland", "beaverton", "lake-oswego", "tigard", "hillsboro", "vancouver-wa"],
        fleet: ["luxury-sedan", "suv", "sprinter-van"],
      },
      "wine-tours": {
        cities: ["portland", "willamette-valley"],
        fleet: ["suv", "sprinter-van"],
      },
    },
  })
}
