export interface City {
  slug: string;
  name: string;
  tagline: string;
  seoDescription: string;
  primaryUseCases: string[];
  airportCode?: string;
  region?: string;
  country?: string;
}

export const cities: City[] = [
  {
    slug: "portland",
    name: "Portland",
    tagline: "Your trusted chauffeur in Portland and the Pacific Northwest.",
    seoDescription: "Premium black car and airport transfer service in Portland, Oregon.",
    primaryUseCases: [
      "Airport transfers (PDX)",
      "Corporate travel",
      "Wine tours",
      "Hotel transportation"
    ],
    airportCode: "PDX",
    region: "Oregon",
    country: "USA"
  },
  {
    slug: "seattle",
    name: "Seattle",
    tagline: "Executive travel for Seattle's business and tech hubs.",
    seoDescription: "Luxury chauffeur service in Seattle, Bellevue, and Redmond.",
    primaryUseCases: [
      "Airport transfers (SEA)",
      "Corporate meetings",
      "Cruise terminal transfers",
      "Tech campus transportation"
    ],
    airportCode: "SEA",
    region: "Washington",
    country: "USA"
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    tagline: "Premium chauffeur service for Silicon Valley and the Bay Area.",
    seoDescription: "Black car service for SFO, corporate travel, and tech roadshows.",
    primaryUseCases: [
      "Airport transfers (SFO, SJC, OAK)",
      "Investor meetings",
      "Roadshows",
      "Hotel transfers"
    ],
    airportCode: "SFO",
    region: "California",
    country: "USA"
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    tagline: "Luxury travel for business, entertainment, and events.",
    seoDescription: "Professional chauffeur service in Los Angeles, Beverly Hills, and Hollywood.",
    primaryUseCases: [
      "Airport transfers (LAX, BUR)",
      "Entertainment industry travel",
      "Event transportation",
      "Hotel transfers"
    ],
    airportCode: "LAX",
    region: "California",
    country: "USA"
  },
  {
    slug: "new-york-city",
    name: "New York City",
    tagline: "Executive chauffeur service for NYC's fast-paced lifestyle.",
    seoDescription: "Premium black car service in Manhattan, Brooklyn, Queens, and surrounding areas.",
    primaryUseCases: [
      "Airport transfers (JFK, LGA, EWR)",
      "Corporate travel",
      "Financial district meetings",
      "Hotel transportation"
    ],
    airportCode: "JFK",
    region: "New York",
    country: "USA"
  },
  // Existing cities from the codebase
  {
    slug: "beaverton",
    name: "Beaverton",
    tagline: "Professional chauffeur service in Beaverton.",
    seoDescription: "Premium black car service in Beaverton, Oregon.",
    primaryUseCases: [
      "Airport transfers",
      "Corporate travel",
      "Local transportation"
    ],
    region: "Oregon",
    country: "USA"
  },
  {
    slug: "hillsboro",
    name: "Hillsboro",
    tagline: "Executive chauffeur service in Hillsboro.",
    seoDescription: "Luxury black car service in Hillsboro, Oregon.",
    primaryUseCases: [
      "Airport transfers",
      "Corporate meetings",
      "Tech campus transportation"
    ],
    region: "Oregon",
    country: "USA"
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    tagline: "Premium chauffeur service in Vancouver, Washington.",
    seoDescription: "Professional black car service in Vancouver, Washington.",
    primaryUseCases: [
      "Airport transfers",
      "Corporate travel",
      "Cross-border transportation"
    ],
    region: "Washington",
    country: "USA"
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getCitiesByCountry(country: string): City[] {
  return cities.filter(city => city.country === country);
}
