export async function getLinkingRules() {
  return {
    cityServices: {
      "portland": ["airport-transportation", "corporate-travel", "wine-tours", "special-events"],
      "beaverton": ["airport-transportation", "corporate-travel", "wine-tours"],
      "salem": ["airport-transportation", "corporate-travel", "wine-tours"],
      "eugene": ["airport-transportation", "corporate-travel"]
    },
    cityFleet: {
      "portland": ["luxury-sedan", "suv", "executive-van"],
      "beaverton": ["luxury-sedan", "suv", "executive-van"],
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
