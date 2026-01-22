import { regions, countries, cities, services, vehicles, homepage, Region, Country, City, Service, Vehicle } from "./data";

export const serverClient = {
  homepage: async () => {
    return homepage;
  },

  regions: async (): Promise<Region[]> => {
    return regions;
  },

  region: async (slug: string): Promise<Region | undefined> => {
    return regions.find(r => r.slug === slug);
  },

  countries: async (): Promise<Country[]> => {
    return countries;
  },

  country: async (slug: string): Promise<Country | undefined> => {
    return countries.find(c => c.slug === slug);
  },

  cities: async (): Promise<City[]> => {
    return cities;
  },

  city: async (slug: string): Promise<City | undefined> => {
    return cities.find(c => c.slug === slug);
  },

  services: async (): Promise<Service[]> => {
    return services;
  },

  service: async (slug: string): Promise<Service | undefined> => {
    return services.find(s => s.slug === slug);
  },

  vehicles: async (): Promise<Vehicle[]> => {
    return vehicles;
  },

  vehicle: async (slug: string): Promise<Vehicle | undefined> => {
    return vehicles.find(v => v.slug === slug);
  }
};
