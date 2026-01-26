import type { MetadataRoute } from "next";

/**
 * Main sitemap index
 * References all sub-sitemaps for better crawl efficiency
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oregontowncar.com";

  return [
    {
      url: `${baseUrl}/sitemap-core.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-services.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-cities.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-routes.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-worldwide.xml`,
      lastModified: new Date(),
    },
  ];
}
