import { serverClient } from "@/app/lib/serverClient";

export default async function sitemap() {
  const locales = ["en", "es", "fr", "ar", "zh"];

  const [services, fleet, cities, countries] = await Promise.all([
    serverClient.services(),
    serverClient.fleet(),
    serverClient.cities(),
    serverClient.countries(),
  ]);

  const urls = [];

  // Add homepage for each locale
  for (const locale of locales) {
    urls.push({ 
      url: `https://oregontowncar.com/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0
    });

    // Add services for each locale
    services.forEach((s) =>
      urls.push({ 
        url: `https://oregontowncar.com/${locale}/services/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8
      })
    );

    // Add fleet for each locale
    fleet.forEach((f) =>
      urls.push({ 
        url: `https://oregontowncar.com/${locale}/fleet/${f.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7
      })
    );

    // Add cities for each locale
    cities.forEach((c) =>
      urls.push({ 
        url: `https://oregontowncar.com/${locale}/cities/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9
      })
    );

    // Add countries for each locale
    countries.forEach((c) =>
      urls.push({ 
        url: `https://oregontowncar.com/${locale}/countries/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85
      })
    );
  }

  return urls;
}
