// Server-side client for fetching data from the backend/database
import type { Region, Country, City, Service, Fleet, Homepage } from "@/lib/backend/types";

// Mock data for now - this would connect to your Motoko canister or database
const mockRegions: Region[] = [
  {
    slug: "north-america",
    headline: "Premium Chauffeur Services Across North America",
    subheadline: "Experience luxury transportation in major cities across the US and Canada",
    seoDescription: "Professional chauffeur and town car services throughout North America. Book premium transportation in the USA and Canada."
  },
  {
    slug: "europe",
    headline: "European Luxury Transportation",
    subheadline: "Elite chauffeur services in Europe's finest cities",
    seoDescription: "Premium chauffeur services across Europe. Luxury ground transportation in major European cities."
  }
];

const mockCountries: Country[] = [
  {
    slug: "usa",
    name: "United States",
    tagline: "Coast-to-coast luxury transportation",
    seoDescription: "Premium chauffeur services across the United States. Professional town car and executive transportation in all major US cities.",
    primaryAirports: ["PDX", "SEA", "SFO", "LAX", "JFK"]
  },
  {
    slug: "canada",
    name: "Canada",
    tagline: "Elegant transportation across Canada",
    seoDescription: "Professional chauffeur services throughout Canada. Luxury ground transportation in Toronto, Vancouver, Montreal and more.",
    primaryAirports: ["YVR", "YYZ", "YUL"]
  }
];

const mockCities: City[] = [
  {
    slug: "portland",
    name: "Portland",
    country: "United States",
    tagline: "Portland's Premier Chauffeur Service",
    seoDescription: "Professional chauffeur and town car service in Portland, Oregon. Airport transfers, corporate travel, and special events.",
    primaryUseCases: ["airport", "corporate", "events"]
  },
  {
    slug: "seattle",
    name: "Seattle",
    country: "United States",
    tagline: "Seattle Executive Transportation",
    seoDescription: "Luxury chauffeur service in Seattle, Washington. SEA airport transfers, business travel, and premium ground transportation.",
    primaryUseCases: ["airport", "corporate", "cruise"]
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    country: "Canada",
    tagline: "Vancouver Luxury Car Service",
    seoDescription: "Premium chauffeur service in Vancouver, BC. YVR airport transportation, corporate transfers, and special occasions.",
    primaryUseCases: ["airport", "wine", "corporate"]
  }
];

const mockServices: Service[] = [
  {
    slug: "airport",
    title: "Airport Transportation",
    description: "Professional airport transfers and pickups"
  },
  {
    slug: "corporate",
    title: "Corporate Transportation",
    description: "Executive business travel solutions"
  },
  {
    slug: "wine",
    title: "Wine Tours",
    description: "Luxury wine country excursions"
  }
];

const mockFleet: Fleet[] = [
  {
    slug: "sedan",
    name: "Executive Sedan",
    description: "Luxury sedans for up to 3 passengers"
  },
  {
    slug: "suv",
    name: "Luxury SUV",
    description: "Premium SUVs for up to 6 passengers"
  },
  {
    slug: "sprinter",
    name: "Mercedes Sprinter",
    description: "Executive vans for up to 14 passengers"
  }
];

const mockHomepage: Homepage = {
  heroSlides: [
    {
      title: "Premium Chauffeur Service",
      subtitle: "Experience luxury transportation with Oregon Town Car",
      cta: "Book Now"
    }
  ],
  featuredServices: ["Airport Transportation", "Corporate Travel", "Wine Tours"],
  featuredCities: ["Portland", "Seattle", "Vancouver"],
  featuredFleet: ["Executive Sedan", "Luxury SUV", "Mercedes Sprinter"]
};

// Server client API
export const serverClient = {
  // Regions
  async regions(): Promise<Region[]> {
    return mockRegions;
  },

  async region(slug: string): Promise<Region | undefined> {
    return mockRegions.find(r => r.slug === slug);
  },

  // Countries
  async countries(): Promise<Country[]> {
    return mockCountries;
  },

  async country(slug: string): Promise<Country | undefined> {
    return mockCountries.find(c => c.slug === slug);
  },

  // Cities
  async cities(): Promise<City[]> {
    return mockCities;
  },

  async city(slug: string): Promise<City | undefined> {
    return mockCities.find(c => c.slug === slug);
  },

  // Services
  async services(): Promise<Service[]> {
    return mockServices;
  },

  async service(slug: string): Promise<Service | undefined> {
    return mockServices.find(s => s.slug === slug);
  },

  // Fleet
  async fleet(): Promise<Fleet[]> {
    return mockFleet;
  },

  async vehicle(slug: string): Promise<Fleet | undefined> {
    return mockFleet.find(f => f.slug === slug);
  },

  // Homepage
  async homepage(): Promise<Homepage> {
    return mockHomepage;
  }
};
