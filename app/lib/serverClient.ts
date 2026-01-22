import { cities, getCityBySlug } from "@/lib/data/cities";
import { countries } from "@/lib/data/countries";
import { regions } from "@/lib/data/regions";

interface Homepage {
  heroSlides: Array<{
    title: string;
    subtitle: string;
    cta: string;
  }>;
  featuredServices: string[];
  featuredCities: string[];
  featuredFleet: string[];
}

/**
 * Server-side data client for fetching content
 */
export const serverClient = {
  /**
   * Get homepage content
   */
  homepage: async (): Promise<Homepage> => {
    return {
      heroSlides: [
        {
          title: "Premium Chauffeur Service Worldwide",
          subtitle: "Experience luxury travel with professional chauffeurs in major cities across the globe.",
          cta: "Book Now"
        }
      ],
      featuredServices: [
        "Airport Transfers",
        "Corporate Travel",
        "Point-to-Point"
      ],
      featuredCities: [
        "Portland",
        "Seattle",
        "San Francisco",
        "Los Angeles",
        "New York City"
      ],
      featuredFleet: [
        "Cadillac Escalade",
        "Mercedes S-Class",
        "Chevrolet Suburban"
      ]
    };
  },

  /**
   * Get all countries
   */
  countries: async () => {
    return countries;
  },

  /**
   * Get a specific country by ID
   */
  country: async (id: string) => {
    return countries.find(c => c.id === id);
  },

  /**
   * Get all cities
   */
  cities: async () => {
    return cities;
  },

  /**
   * Get a specific city by slug
   */
  city: async (slug: string) => {
    return getCityBySlug(slug);
  },

  /**
   * Get all regions
   */
  regions: async () => {
    return regions;
  },

  /**
   * Get a specific region by ID
   */
  region: async (id: string) => {
    return regions.find(r => r.id === id);
  }
};
