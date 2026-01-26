/**
 * Internal Linking Reinforcement
 * 
 * Programmatically generates contextual internal links to strengthen SEO
 */

import { 
  allCities, 
  pdxRoutes, 
  servicePages, 
  worldwideCountries,
  getCityBySlug,
  getRelatedRoutesForCity,
  getNearbyCities 
} from '@/lib/data/seo-locations';

export interface InternalLink {
  text: string;
  href: string;
  rel?: string;
  priority: 'high' | 'medium' | 'low';
}

/**
 * Get related service links for a city page
 */
export function getServiceLinksForCity(citySlug: string): InternalLink[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];

  const links: InternalLink[] = [];

  // Always link to airport transportation
  links.push({
    text: 'Airport Transportation',
    href: '/services/airport-transportation',
    priority: 'high',
  });

  // If in portland-metro, link to corporate travel
  if (city.region === 'portland-metro') {
    links.push({
      text: 'Corporate Travel',
      href: '/services/corporate-travel',
      priority: 'high',
    });

    links.push({
      text: 'Hourly Chauffeur Service',
      href: '/services/hourly-chauffeur',
      priority: 'medium',
    });
  }

  // If in wine country region, link to wine tours
  if (city.slug.includes('willamette') || city.slug.includes('dundee') || city.slug.includes('yamhill')) {
    links.push({
      text: 'Wine Tour Transportation',
      href: '/services/wine-tours',
      priority: 'high',
    });
  }

  return links;
}

/**
 * Get related route links for a city page
 */
export function getRouteLinksForCity(citySlug: string): InternalLink[] {
  const routes = getRelatedRoutesForCity(citySlug);
  
  return routes.map(route => ({
    text: `PDX to ${route.to.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
    href: `/routes/${route.slug}`,
    priority: route.priority as 'high' | 'medium' | 'low',
  }));
}

/**
 * Get nearby city links
 */
export function getNearbyCityLinks(citySlug: string): InternalLink[] {
  const nearbyCities = getNearbyCities(citySlug);
  
  return nearbyCities.map(city => ({
    text: `${city.name}, ${city.state}`,
    href: `/cities/${city.slug}`,
    priority: 'medium',
  }));
}

/**
 * Get fleet links for a route page
 */
export function getFleetLinksForRoute(): InternalLink[] {
  return [
    {
      text: 'Luxury Sedan',
      href: '/fleet/luxury-sedan',
      priority: 'medium',
    },
    {
      text: 'Executive SUV',
      href: '/fleet/executive-suv',
      priority: 'medium',
    },
  ];
}

/**
 * Get service links for a route page
 */
export function getServiceLinksForRoute(): InternalLink[] {
  return [
    {
      text: 'Airport Transportation',
      href: '/services/airport-transportation',
      priority: 'high',
    },
    {
      text: 'VIP Arrival Service',
      href: '/services/vip-arrival',
      priority: 'medium',
    },
  ];
}

/**
 * Get core service links for worldwide pages
 */
export function getCoreServiceLinksForWorldwide(): InternalLink[] {
  return [
    {
      text: 'Airport Transportation',
      href: '/services/airport-transportation',
      priority: 'high',
    },
    {
      text: 'VIP Arrival Service',
      href: '/services/vip-arrival',
      priority: 'high',
    },
    {
      text: 'Corporate Travel',
      href: '/services/corporate-travel',
      priority: 'medium',
    },
  ];
}

/**
 * Get related country links for a worldwide city page
 */
export function getRelatedCountryLink(citySlug: string): InternalLink | null {
  // Map city slugs to country slugs
  const cityToCountry: Record<string, string> = {
    'new-york-jfk': 'united-states',
    'los-angeles-lax': 'united-states',
    'san-francisco-sfo': 'united-states',
    'chicago-ord': 'united-states',
    'miami-mia': 'united-states',
    'toronto-yyz': 'canada',
    'vancouver-yvr': 'canada',
    'montreal-yul': 'canada',
    'london-lhr': 'united-kingdom',
    'frankfurt-fra': 'germany',
    'paris-cdg': 'france',
    'dubai-dxb': 'uae',
    'abu-dhabi-auh': 'uae',
    'tokyo-nrt': 'japan',
  };

  const countrySlug = cityToCountry[citySlug];
  if (!countrySlug) return null;

  const country = worldwideCountries.find(c => c.slug === countrySlug);
  if (!country) return null;

  return {
    text: `All ${country.name} Locations`,
    href: `/worldwide/${country.slug}`,
    priority: 'medium',
  };
}

/**
 * Get related city links for a country page
 */
export function getCityLinksForCountry(countrySlug: string): InternalLink[] {
  const country = worldwideCountries.find(c => c.slug === countrySlug);
  if (!country) return [];

  return country.cities.map(citySlug => {
    const cityName = citySlug
      .split('-')
      .slice(0, -1) // Remove airport code
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return {
      text: cityName,
      href: `/worldwide/cities/${citySlug}`,
      priority: 'high',
    };
  });
}

/**
 * Generate contextual internal links for any page type
 */
export function getContextualLinks(pageType: 'city' | 'route' | 'service' | 'worldwide-country' | 'worldwide-city', slug: string): InternalLink[] {
  switch (pageType) {
    case 'city':
      return [
        ...getServiceLinksForCity(slug),
        ...getRouteLinksForCity(slug),
        ...getNearbyCityLinks(slug),
      ];

    case 'route':
      return [
        ...getServiceLinksForRoute(),
        ...getFleetLinksForRoute(),
      ];

    case 'service':
      // Services can link to popular routes
      return pdxRoutes
        .filter(r => r.priority === 'high')
        .slice(0, 3)
        .map(route => ({
          text: route.description,
          href: `/routes/${route.slug}`,
          priority: 'medium' as const,
        }));

    case 'worldwide-country':
      return [
        ...getCoreServiceLinksForWorldwide(),
        ...getCityLinksForCountry(slug),
      ];

    case 'worldwide-city':
      const countryLink = getRelatedCountryLink(slug);
      return [
        ...getCoreServiceLinksForWorldwide(),
        ...(countryLink ? [countryLink] : []),
      ];

    default:
      return [];
  }
}

/**
 * Render internal links as HTML (for React components)
 */
export function renderInternalLinks(links: InternalLink[]): string {
  return links
    .map(link => `<a href="${link.href}" ${link.rel ? `rel="${link.rel}"` : ''}>${link.text}</a>`)
    .join(', ');
}

/**
 * Get breadcrumb links for SEO
 */
export function getBreadcrumbs(pageType: string, slug: string): InternalLink[] {
  const breadcrumbs: InternalLink[] = [
    { text: 'Home', href: '/', priority: 'high' },
  ];

  switch (pageType) {
    case 'city':
      breadcrumbs.push({ text: 'Cities', href: '/cities', priority: 'medium' });
      const city = getCityBySlug(slug);
      if (city) {
        breadcrumbs.push({ text: `${city.name}, ${city.state}`, href: `/cities/${slug}`, priority: 'high' });
      }
      break;

    case 'route':
      breadcrumbs.push({ text: 'Routes', href: '/routes', priority: 'medium' });
      const route = pdxRoutes.find(r => r.slug === slug);
      if (route) {
        breadcrumbs.push({ text: route.description, href: `/routes/${slug}`, priority: 'high' });
      }
      break;

    case 'service':
      breadcrumbs.push({ text: 'Services', href: '/services', priority: 'medium' });
      break;

    case 'worldwide-country':
      breadcrumbs.push({ text: 'Worldwide', href: '/worldwide', priority: 'medium' });
      const country = worldwideCountries.find(c => c.slug === slug);
      if (country) {
        breadcrumbs.push({ text: country.name, href: `/worldwide/${slug}`, priority: 'high' });
      }
      break;

    case 'worldwide-city':
      breadcrumbs.push({ text: 'Worldwide', href: '/worldwide', priority: 'medium' });
      breadcrumbs.push({ text: 'Cities', href: '/worldwide', priority: 'medium' });
      break;
  }

  return breadcrumbs;
}
