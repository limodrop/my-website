import { MetadataRoute } from 'next';
import { allCities } from '@/lib/data/seo-locations';

const baseUrl = 'https://oregontowncar.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return allCities.map((city) => ({
    url: `${baseUrl}/cities/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
}
