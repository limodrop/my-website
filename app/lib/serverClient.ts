import { readFileSync } from "fs"
import { join } from "path"

// TypeScript interfaces for backend data
export interface Region {
  slug: string
  headline: string
  subheadline: string
  seoDescription: string
}

export interface Country {
  slug: string
  name: string
  tagline: string
  seoDescription: string
  primaryAirports: string[]
}

export interface City {
  slug: string
  name: string
  country: string
  tagline: string
  seoDescription: string
  primaryUseCases: string[]
}

// Homepage data interface (existing)
export interface Homepage {
  heroSlides: Array<{
    title: string
    subtitle: string
    cta: string
  }>
  featuredServices: string[]
  featuredCities: string[]
  featuredFleet: string[]
}

class ServerClient {
  private dataPath: string
  private regionsCache: Region[] | null = null
  private countriesCache: Country[] | null = null
  private citiesCache: City[] | null = null

  constructor() {
    // Path to data directory relative to project root
    this.dataPath = join(process.cwd(), "data")
  }

  // Load regions data
  regions(): Region[] {
    if (!this.regionsCache) {
      const filePath = join(this.dataPath, "regions.json")
      const data = readFileSync(filePath, "utf8")
      this.regionsCache = JSON.parse(data)
    }
    return this.regionsCache
  }

  // Get a single region by slug
  region(slug: string): Region | undefined {
    return this.regions().find((r) => r.slug === slug)
  }

  // Load countries data
  countries(): Country[] {
    if (!this.countriesCache) {
      const filePath = join(this.dataPath, "countries.json")
      const data = readFileSync(filePath, "utf8")
      this.countriesCache = JSON.parse(data)
    }
    return this.countriesCache
  }

  // Get a single country by slug
  country(slug: string): Country | undefined {
    return this.countries().find((c) => c.slug === slug)
  }

  // Load cities data
  cities(): City[] {
    if (!this.citiesCache) {
      const filePath = join(this.dataPath, "cities.json")
      const data = readFileSync(filePath, "utf8")
      this.citiesCache = JSON.parse(data)
    }
    return this.citiesCache
  }

  // Get a single city by slug
  city(slug: string): City | undefined {
    return this.cities().find((c) => c.slug === slug)
  }

  // Get cities by country
  citiesByCountry(countryName: string): City[] {
    return this.cities().filter((c) => c.country === countryName)
  }

  // Homepage data (existing implementation)
  async homepage(): Promise<Homepage> {
    return {
      heroSlides: [
        {
          title: "Premium Chauffeur Service",
          subtitle: "Professional transportation for business and leisure",
          cta: "Book Now"
        }
      ],
      featuredServices: [
        "Airport Transfers",
        "Corporate Travel",
        "Wine Tours"
      ],
      featuredCities: ["Portland", "Seattle", "San Francisco"],
      featuredFleet: [
        "Executive Sedan",
        "Luxury SUV",
        "Executive Van"
      ]
    }
  }
}

// Export singleton instance
export const serverClient = new ServerClient()
