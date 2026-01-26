import { MetadataRoute } from 'next';
import { worldwideCountries, majorAirports } from '@/lib/data/seo-locations';

const baseUrl = 'https://oregontowncar.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const countryPages = worldwideCountries.map((country) => ({
    url: `${baseUrl}/worldwide/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const cityPages = majorAirports.map((airport) => ({
    url: `${baseUrl}/worldwide/cities/${airport.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...countryPages, ...cityPages];
}
