import { MetadataRoute } from 'next';
import { pdxRoutes } from '@/lib/data/seo-locations';

const baseUrl = 'https://oregontowncar.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return pdxRoutes.map((route) => ({
    url: `${baseUrl}/routes/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route.priority === 'high' ? 0.8 : 0.7,
  }));
}
