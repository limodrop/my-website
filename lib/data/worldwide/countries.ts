export interface WorldwideCountry {
  slug: string;
  name: string;
  citiesCount: number;
  description: string;
  popularCities: string[]; // slugs
}

export const worldwideCountries: WorldwideCountry[] = [
  {
    slug: "usa",
    name: "United States",
    citiesCount: 200,
    description: "Airport transfers, corporate travel, and events nationwide.",
    popularCities: ["new-york", "los-angeles", "chicago", "miami", "san-francisco", "seattle", "boston", "washington-dc"]
  },
  {
    slug: "canada",
    name: "Canada",
    citiesCount: 50,
    description: "Professional chauffeur service across major Canadian cities.",
    popularCities: ["toronto", "vancouver", "montreal", "calgary"]
  },
  {
    slug: "uk",
    name: "United Kingdom",
    citiesCount: 25,
    description: "Premium transportation in London and throughout the UK.",
    popularCities: ["london", "manchester", "edinburgh", "birmingham"]
  },
  {
    slug: "france",
    name: "France",
    citiesCount: 15,
    description: "Luxury chauffeur service in Paris and French cities.",
    popularCities: ["paris", "lyon", "marseille", "nice"]
  },
  {
    slug: "germany",
    name: "Germany",
    citiesCount: 20,
    description: "Executive transportation across German business hubs.",
    popularCities: ["berlin", "munich", "frankfurt", "hamburg"]
  },
  {
    slug: "italy",
    name: "Italy",
    citiesCount: 12,
    description: "Premium service in Rome, Milan, and Italian destinations.",
    popularCities: ["rome", "milan", "venice", "florence"]
  },
  {
    slug: "spain",
    name: "Spain",
    citiesCount: 10,
    description: "Professional chauffeur service in Madrid, Barcelona, and beyond.",
    popularCities: ["madrid", "barcelona", "seville", "valencia"]
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    citiesCount: 8,
    description: "Luxury transportation in Zurich, Geneva, and Swiss cities.",
    popularCities: ["zurich", "geneva", "basel", "bern"]
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    citiesCount: 6,
    description: "Executive car service in Amsterdam and Dutch cities.",
    popularCities: ["amsterdam", "rotterdam", "the-hague"]
  },
  {
    slug: "belgium",
    name: "Belgium",
    citiesCount: 5,
    description: "Premium chauffeur service in Brussels and Belgian cities.",
    popularCities: ["brussels", "antwerp", "bruges"]
  },
  {
    slug: "australia",
    name: "Australia",
    citiesCount: 15,
    description: "Professional transportation across Australian cities.",
    popularCities: ["sydney", "melbourne", "brisbane", "perth"]
  },
  {
    slug: "japan",
    name: "Japan",
    citiesCount: 10,
    description: "Executive service in Tokyo, Osaka, and Japanese cities.",
    popularCities: ["tokyo", "osaka", "kyoto", "nagoya"]
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    citiesCount: 5,
    description: "Luxury chauffeur service in Dubai, Abu Dhabi, and UAE.",
    popularCities: ["dubai", "abu-dhabi", "sharjah"]
  }
];

export function getCountryBySlug(slug: string): WorldwideCountry | undefined {
  return worldwideCountries.find(c => c.slug === slug);
}
