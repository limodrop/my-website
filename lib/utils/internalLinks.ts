// Internal linking utilities for SEO and navigation

interface City {
  id: string;
  name: string;
  slug: string;
  country?: string;
}

interface Service {
  id: string;
  name: string;
  slug: string;
}

interface Vehicle {
  id: string;
  name: string;
  slug: string;
}

export function generateInternalLinks({
  cities,
  services,
  fleet,
  locale = "en",
}: {
  cities: City[];
  services: Service[];
  fleet: Vehicle[];
  locale?: string;
}) {
  return {
    // City internal links
    cityLinks: cities.map((city) => ({
      name: city.name,
      slug: city.slug,
      url: `/${locale}/cities/${city.slug}`,
      relatedCities: cities
        .filter((c) => c.country === city.country && c.slug !== city.slug)
        .slice(0, 5)
        .map((c) => ({ name: c.name, url: `/${locale}/cities/${c.slug}` })),
    })),

    // Service internal links
    serviceLinks: services.map((service) => ({
      name: service.name,
      slug: service.slug,
      url: `/${locale}/services/${service.slug}`,
      relatedFleet: fleet.slice(0, 3).map((f) => ({
        name: f.name,
        url: `/${locale}/fleet/${f.slug}`,
      })),
    })),

    // Fleet internal links
    fleetLinks: fleet.map((vehicle) => ({
      name: vehicle.name,
      slug: vehicle.slug,
      url: `/${locale}/fleet/${vehicle.slug}`,
      relatedServices: services.slice(0, 3).map((s) => ({
        name: s.name,
        url: `/${locale}/services/${s.slug}`,
      })),
    })),

    // Breadcrumb generator
    generateBreadcrumbs: (type: string, slug?: string, name?: string) => {
      const breadcrumbs = [{ name: "Home", url: `/${locale}` }];

      if (type === "services") {
        breadcrumbs.push({ name: "Services", url: `/${locale}/services` });
        if (slug && name) {
          breadcrumbs.push({ name, url: `/${locale}/services/${slug}` });
        }
      } else if (type === "fleet") {
        breadcrumbs.push({ name: "Fleet", url: `/${locale}/fleet` });
        if (slug && name) {
          breadcrumbs.push({ name, url: `/${locale}/fleet/${slug}` });
        }
      } else if (type === "cities") {
        breadcrumbs.push({ name: "Cities", url: `/${locale}/cities` });
        if (slug && name) {
          breadcrumbs.push({ name, url: `/${locale}/cities/${slug}` });
        }
      }

      return breadcrumbs;
    },
  };
}

// Helper to get related content for a page
export function getRelatedContent(
  currentSlug: string,
  items: Array<{ slug: string; name: string }>,
  limit = 3
) {
  return items
    .filter((item) => item.slug !== currentSlug)
    .slice(0, limit)
    .map((item) => ({
      name: item.name,
      slug: item.slug,
    }));
}
