import { worldwideCountries } from '@/lib/data/worldwide/countries';
import { worldwideCities, getCityBySlug, getCitiesByCountry } from '@/lib/data/worldwide/cities';
import { worldwideAirports, getAirportsByCountry } from '@/lib/data/worldwide/airports';

interface RelatedLinks {
  countries?: Array<{ name: string; slug: string }>;
  cities?: Array<{ name: string; slug: string; country: string }>;
  airports?: Array<{ code: string; name: string; city: string }>;
  services?: Array<{ name: string; slug: string }>;
}

const CORE_SERVICES = [
  { name: 'Airport Transfers', slug: 'airport-transfers' },
  { name: 'Corporate Travel', slug: 'corporate-travel' },
  { name: 'Special Events', slug: 'special-events' },
  { name: 'Wine Tours', slug: 'wine-tours' },
];

export function getRelatedLinksForCountry(countrySlug: string): RelatedLinks {
  const cities = getCitiesByCountry(countrySlug);
  const airports = getAirportsByCountry(countrySlug);

  return {
    cities: cities.slice(0, 12).map((c) => ({
      name: c.name,
      slug: c.slug,
      country: c.country,
    })),
    airports: airports.slice(0, 8).map((a) => ({
      code: a.code,
      name: a.name,
      city: a.city,
    })),
    services: CORE_SERVICES.slice(0, 4),
  };
}

export function getRelatedLinksForCity(citySlug: string): RelatedLinks {
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  // Get related cities (same country, excluding current)
  const relatedCities = worldwideCities
    .filter(c => c.countrySlug === city.countrySlug && c.slug !== citySlug)
    .slice(0, 6);

  // Get airports for this city
  const cityAirports = city.airports
    .map(code => worldwideAirports.find(a => a.code === code))
    .filter(Boolean)
    .slice(0, 3);

  return {
    countries: [
      {
        name: city.country,
        slug: city.countrySlug,
      },
    ],
    cities: relatedCities.map(c => ({
      name: c.name,
      slug: c.slug,
      country: c.country,
    })),
    airports: cityAirports.map(a => ({
      code: a!.code,
      name: a!.name,
      city: a!.city,
    })),
    services: CORE_SERVICES,
  };
}

export function getRelatedLinksForAirport(airportCode: string): RelatedLinks {
  const airport = worldwideAirports.find(a => a.code === airportCode.toUpperCase());
  if (!airport) return {};

  // Get city page for this airport
  const city = worldwideCities.find(c => 
    c.airports.includes(airport.code) || c.name === airport.city
  );

  // Get related airports (same country)
  const relatedAirports = worldwideAirports
    .filter(a => a.countrySlug === airport.countrySlug && a.code !== airport.code)
    .slice(0, 4);

  // Get nearby cities (same country)
  const nearbyCities = worldwideCities
    .filter(c => c.countrySlug === airport.countrySlug)
    .slice(0, 4);

  return {
    countries: [
      {
        name: airport.country,
        slug: airport.countrySlug,
      },
    ],
    cities: city ? [
      {
        name: city.name,
        slug: city.slug,
        country: city.country,
      },
      ...nearbyCities.filter(c => c.slug !== city.slug).slice(0, 3).map(c => ({
        name: c.name,
        slug: c.slug,
        country: c.country,
      })),
    ] : nearbyCities.slice(0, 4).map(c => ({
      name: c.name,
      slug: c.slug,
      country: c.country,
    })),
    airports: relatedAirports.map(a => ({
      code: a.code,
      name: a.name,
      city: a.city,
    })),
    services: CORE_SERVICES.filter(s => 
      s.slug === 'airport-transfers' || s.slug === 'corporate-travel'
    ),
  };
}

export function getRelatedLinksForWorldwide(): RelatedLinks {
  return {
    countries: worldwideCountries.slice(0, 13).map(c => ({
      name: c.name,
      slug: c.slug,
    })),
    cities: worldwideCities.slice(0, 20).map(c => ({
      name: c.name,
      slug: c.slug,
      country: c.country,
    })),
    airports: worldwideAirports.slice(0, 16).map(a => ({
      code: a.code,
      name: a.name,
      city: a.city,
    })),
  };
}
