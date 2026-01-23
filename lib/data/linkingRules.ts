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
      "eugene": ["airport-transportation", "corporate-travel"],
      // Core Portland Metro
      "gresham": ["airport-transportation", "corporate-travel"],
      "tualatin": ["airport-transportation", "corporate-travel", "wine-tours"],
      "wilsonville": ["airport-transportation", "corporate-travel"],
      "milwaukie": ["airport-transportation", "corporate-travel", "special-events"],
      "happy-valley": ["airport-transportation", "corporate-travel"],
      "clackamas": ["airport-transportation", "corporate-travel"],
      "oregon-city": ["airport-transportation", "corporate-travel"],
      "west-linn": ["airport-transportation", "corporate-travel", "special-events"],
      // Extended Oregon / Regional
      "mcminnville": ["wine-tours", "airport-transportation", "special-events"],
      "newberg": ["wine-tours", "airport-transportation", "special-events"],
      "corvallis": ["airport-transportation", "corporate-travel"],
      "bend": ["airport-transportation", "corporate-travel", "special-events"],
      "medford": ["airport-transportation", "wine-tours", "corporate-travel"],
      "astoria": ["airport-transportation", "special-events"],
      "hood-river": ["airport-transportation", "wine-tours", "special-events"],
      // Washington side
      "camas": ["airport-transportation", "corporate-travel"],
      "washougal": ["airport-transportation", "corporate-travel"],
      "battle-ground": ["airport-transportation", "corporate-travel"],
      "ridgefield": ["airport-transportation", "corporate-travel"]
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
      "eugene": ["luxury-sedan", "suv"],
      "gresham": ["luxury-sedan", "suv"],
      "tualatin": ["luxury-sedan", "suv", "executive-van"],
      "wilsonville": ["luxury-sedan", "suv"],
      "milwaukie": ["luxury-sedan", "suv"],
      "happy-valley": ["luxury-sedan", "suv"],
      "clackamas": ["luxury-sedan", "suv"],
      "oregon-city": ["luxury-sedan", "suv"],
      "west-linn": ["luxury-sedan", "suv"],
      "mcminnville": ["luxury-sedan", "suv", "executive-van"],
      "newberg": ["luxury-sedan", "suv", "executive-van"],
      "corvallis": ["luxury-sedan", "suv"],
      "bend": ["luxury-sedan", "suv", "executive-van"],
      "medford": ["luxury-sedan", "suv"],
      "astoria": ["luxury-sedan", "suv"],
      "hood-river": ["luxury-sedan", "suv"],
      "camas": ["luxury-sedan", "suv"],
      "washougal": ["luxury-sedan", "suv"],
      "battle-ground": ["luxury-sedan", "suv"],
      "ridgefield": ["luxury-sedan", "suv"]
    },
    serviceFleet: {
      "airport-transportation": ["luxury-sedan", "suv"],
      "corporate-travel": ["luxury-sedan", "suv", "executive-van"],
      "wine-tours": ["luxury-sedan", "suv", "executive-van"],
      "special-events": ["luxury-sedan", "suv"]
    }
  }
}
