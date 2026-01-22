export interface Country {
  id: string;
  name: string;
  tagline: string;
  seoDescription: string;
  primaryAirports: string[];
}

export const countries: Country[] = [
  {
    id: "united-states",
    name: "United States",
    tagline: "Nationwide luxury travel with local expertise.",
    seoDescription: "Premium chauffeur service across all 50 U.S. states with airport, corporate, and event transportation.",
    primaryAirports: ["JFK", "LGA", "EWR", "LAX", "SFO", "SEA", "PDX", "ORD", "DFW", "MIA"]
  },
  {
    id: "canada",
    name: "Canada",
    tagline: "Professional black car service across Canada's major cities.",
    seoDescription: "Luxury chauffeur service in Toronto, Vancouver, Montreal, and Calgary.",
    primaryAirports: ["YYZ", "YVR", "YUL", "YYC"]
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    tagline: "Executive travel across London and major UK cities.",
    seoDescription: "Premium chauffeur service in London, Manchester, Birmingham, and Edinburgh.",
    primaryAirports: ["LHR", "LGW", "LCY", "MAN"]
  },
  {
    id: "france",
    name: "France",
    tagline: "Luxury chauffeur service in Paris and beyond.",
    seoDescription: "Professional black car service for Paris airports, business districts, and events.",
    primaryAirports: ["CDG", "ORY"]
  }
];
