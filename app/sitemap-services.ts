import { MetadataRoute } from 'next';
import { servicePages } from '@/lib/data/seo-locations';

const baseUrl = 'https://oregontowncar.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return servicePages.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
}
