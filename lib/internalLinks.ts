import type { City, Country, Service, Fleet } from "@/lib/backend/types";

interface InternalLinksParams {
  cities: City[];
  countries: Country[];
  services: Service[];
  fleet: Fleet[];
}

export interface CityLink {
  city: string;
  country?: string;
  url: string;
}

export interface CountryLink {
  country: string;
  cities: string[];
  url: string;
}

export interface ServiceLink {
  service: string;
  fleet: string[];
}

export interface FleetLink {
  vehicle: string;
  services: string[];
}

export interface InternalLinks {
  cityLinks: CityLink[];
  countryLinks: CountryLink[];
  serviceLinks: ServiceLink[];
  fleetLinks: FleetLink[];
}

export function internalLinks({ cities, countries, services, fleet }: InternalLinksParams): InternalLinks {
  return {
    cityLinks: cities.map((c) => {
      const matchedCountry = countries.find((x) => x.name === c.country);
      return {
        city: c.name,
        country: matchedCountry?.slug,
        url: `/cities/${c.slug}`,
      };
    }),

    countryLinks: countries.map((c) => ({
      country: c.name,
      cities: cities.filter((x) => x.country === c.name).map((x) => x.slug),
      url: `/countries/${c.slug}`,
    })),

    serviceLinks: services.map((s) => ({
      service: s.title,
      fleet: fleet.map((f) => f.slug),
    })),

    fleetLinks: fleet.map((f) => ({
      vehicle: f.name,
      services: services.map((s) => s.slug),
    })),
  };
}
