export async function getLinkingRules() {
  return {
    cityServices: {
      "portland": ["airport-transportation", "corporate-travel", "wine-tours", "special-events"],
      "beaverton": ["airport-transportation", "corporate-travel", "wine-tours"],
      "lake-oswego": ["airport-transportation", "corporate-travel", "special-events"],
      "tigard": ["airport-transportation", "corporate-travel"],
      "hillsboro": ["airport-transportation", "corporate-travel"],
      "vancouver-wa": ["airport-transportation", "corporate-travel", "special-events"],
      "willamette-valley": ["wine-tours", "airport-transportation", "special-events"],
      "salem": ["airport-transportation", "corporate-travel", "wine-tours"],
      "eugene": ["airport-transportation", "corporate-travel"]
    },
    cityFleet: {
      "portland": ["luxury-sedan", "suv", "executive-van"],
      "beaverton": ["luxury-sedan", "suv", "executive-van"],
      "lake-oswego": ["luxury-sedan", "suv"],
      "tigard": ["luxury-sedan", "suv"],
      "hillsboro": ["luxury-sedan", "suv", "executive-van"],
      "vancouver-wa": ["luxury-sedan", "suv", "executive-van"],
      "willamette-valley": ["luxury-sedan", "suv", "executive-van"],
      "salem": ["luxury-sedan", "suv"],
      "eugene": ["luxury-sedan", "suv"]
    },
    serviceFleet: {
      "airport-transportation": ["luxury-sedan", "suv"],
      "corporate-travel": ["luxury-sedan", "suv", "executive-van"],
      "wine-tours": ["luxury-sedan", "suv", "executive-van"],
      "special-events": ["luxury-sedan", "suv"]
    }
  }
}
