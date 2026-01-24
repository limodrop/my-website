import { Thing, WithContext } from 'schema-dts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://oregontowncar.com';
const LOGO_URL = `${SITE_URL}/images/logo.png`;

export function buildLocalBusinessSchema(): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness' as const,
    name: 'Oregon Town Car',
    url: SITE_URL,
    logo: LOGO_URL,
    image: `${SITE_URL}/images/hero-fleet.jpg`,
    telephone: '+1-503-555-0100',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Portland',
      addressRegion: 'OR',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'Place', name: 'Portland, OR' },
      { '@type': 'Place', name: 'Beaverton, OR' },
      { '@type': 'Place', name: 'Lake Oswego, OR' },
      { '@type': 'Place', name: 'Tigard, OR' },
      { '@type': 'Place', name: 'Hillsboro, OR' },
      { '@type': 'Place', name: 'Vancouver, WA' },
      { '@type': 'Place', name: 'Willamette Valley, OR' },
    ],
    priceRange: '$$$',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-503-555-0100',
      contactType: 'reservations',
      availableLanguage: ['English'],
    } as any,
  };
}

export function buildServiceSchema(params: {
  name: string;
  description: string;
  url: string;
  areaServed: string | { name: string; type?: string };
  serviceType?: string[];
}): WithContext<Thing> {
  const areaServedObj = typeof params.areaServed === 'string'
    ? { '@type': 'Place' as const, name: params.areaServed }
    : { '@type': (params.areaServed.type as any) || 'Place' as const, name: params.areaServed.name };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    provider: {
      '@type': 'Organization',
      name: 'Oregon Town Car',
      url: SITE_URL,
    },
    areaServed: areaServedObj,
    serviceType: params.serviceType || ['Chauffeur Service', 'Airport Transfer', 'Corporate Travel'],
    url: params.url,
  };
}

export function buildAirportServiceSchema(params: {
  airportCode: string;
  airportName: string;
  city: string;
  country: string;
  url: string;
}): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${params.airportCode} Airport Chauffeur Service`,
    description: `Professional meet and greet chauffeur service at ${params.airportName}`,
    serviceType: 'Airport Transfer',
    provider: {
      '@type': 'Organization',
      name: 'Oregon Town Car',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Place',
      name: `${params.city}, ${params.country}`,
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: params.url,
    },
    url: params.url,
  } as any;
}

export function buildCityServiceSchema(params: {
  cityName: string;
  region: string;
  description: string;
  url: string;
  serviceTypes?: string[];
}): WithContext<Thing> {
  return buildServiceSchema({
    name: `Chauffeur Service in ${params.cityName}`,
    description: params.description,
    url: params.url,
    areaServed: `${params.cityName}, ${params.region}`,
    serviceType: params.serviceTypes || [
      'Airport Transfer',
      'Corporate Travel',
      'Special Events',
      'Wine Tours',
      'City Tours',
    ],
  });
}

export function buildCountryServiceSchema(params: {
  countryName: string;
  description: string;
  url: string;
}): WithContext<Thing> {
  return buildServiceSchema({
    name: `Chauffeur Service in ${params.countryName}`,
    description: params.description,
    url: params.url,
    areaServed: { name: params.countryName, type: 'Country' },
  });
}

export function buildWorldwideServiceSchema(): WithContext<Thing> {
  return buildServiceSchema({
    name: 'Worldwide Chauffeur Service',
    description: 'Professional chauffeur service in major cities worldwide with vetted partners and luxury standards',
    url: `${SITE_URL}/en/worldwide`,
    areaServed: 'Worldwide',
    serviceType: [
      'International Airport Transfer',
      'Global Corporate Travel',
      'Worldwide Chauffeur Service',
    ],
  });
}

// Legacy functions for backwards compatibility
export function generateServiceSchema({
  lang,
  city,
  service,
  url
}: {
  lang: string
  city: string
  service: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service} service in ${city}`,
    "areaServed": city,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Oregon Town Car",
      "url": "https://oregontowncar.com",
      "areaServed": city,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": "OR",
        "addressCountry": "US"
      }
    },
    "serviceType": service,
    "inLanguage": lang,
    "url": url
  }
}

export function generateLocalBusinessSchema({
  lang,
  city,
  url
}: {
  lang: string
  city: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oregon Town Car",
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "OR",
      "addressCountry": "US"
    },
    "areaServed": city,
    "inLanguage": lang
  }
}

export function generateArticleSchema({
  lang,
  title,
  date,
  url
}: {
  lang: string
  title: string
  date: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "datePublished": date,
    "author": {
      "@type": "Organization",
      "name": "Oregon Town Car"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Oregon Town Car"
    },
    "inLanguage": lang,
    "url": url
  }
}
