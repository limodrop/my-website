import { serverApi } from "@/lib/api/serverClient";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ["en", "es", "fr", "ar", "zh"];
  const baseUrl = "https://oregontowncar.com";

  const [services, fleet, cities] = await Promise.all([
    serverApi.getServices(),
    serverApi.getFleet(),
    serverApi.getCities(),
  ]);

  const urls: MetadataRoute.Sitemap = [];

  // Homepage for each locale
  for (const locale of locales) {
    urls.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    });

    // Services
    urls.push({
      url: `${baseUrl}/${locale}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });

    services.forEach((s) => {
      urls.push({
        url: `${baseUrl}/${locale}/services/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });

    // Fleet
    urls.push({
      url: `${baseUrl}/${locale}/fleet`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });

    fleet.forEach((f) => {
      urls.push({
        url: `${baseUrl}/${locale}/fleet/${f.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });

    // Cities
    urls.push({
      url: `${baseUrl}/${locale}/cities`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });

    cities.forEach((c) => {
      urls.push({
        url: `${baseUrl}/${locale}/cities/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });

    // Contact
    urls.push({
      url: `${baseUrl}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return urls;
}
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const cityRoutes = cities.map(c => ({
    url: `${baseUrl}/cities/${c.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const fleetRoutes = fleet.map(v => ({
    url: `${baseUrl}/fleet/${v.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = posts.map(p => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date().toISOString(),
  }))

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...fleetRoutes, ...blogRoutes]
}
