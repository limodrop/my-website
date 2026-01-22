/**
 * JSON-LD structured data utilities for SEO
 */

export interface Organization {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  areaServed: string[];
  sameAs: string[];
}

export interface Service {
  "@type": string;
  name: string;
  description: string;
}

export interface ServiceList {
  "@context": string;
  "@type": string;
  itemListElement: Service[];
}

export interface Vehicle {
  "@context": string;
  "@type": string;
  name: string;
  image: string;
  seatingCapacity: number;
  url: string;
}

export interface Place {
  "@context": string;
  "@type": string;
  name: string;
  address: {
    "@type": string;
    addressLocality: string;
    addressRegion?: string;
    addressCountry: string;
  };
}

/**
 * Generate Organization JSON-LD
 */
export function generateOrganizationSchema(): Organization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Oregon Town Car",
    "url": "https://oregontowncar.com",
    "logo": "https://oregontowncar.com/logo.png",
    "areaServed": [
      "United States",
      "Canada",
      "United Kingdom",
      "France",
      "Germany",
      "UAE",
      "Qatar",
      "Saudi Arabia"
    ],
    "sameAs": []
  };
}

/**
 * Generate Service List JSON-LD
 */
export function generateServiceListSchema(): ServiceList {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Airport Transfers",
        "description": "Premium airport chauffeur service worldwide."
      },
      {
        "@type": "Service",
        "name": "Corporate Travel",
        "description": "Executive black car service for business travel."
      },
      {
        "@type": "Service",
        "name": "Point-to-Point",
        "description": "Luxury transportation between any two locations."
      }
    ]
  };
}

/**
 * Generate Vehicle JSON-LD
 */
export function generateVehicleSchema(
  name: string,
  imageUrl: string,
  seatingCapacity: number,
  vehicleUrl: string
): Vehicle {
  return {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    "name": name,
    "image": imageUrl,
    "seatingCapacity": seatingCapacity,
    "url": vehicleUrl
  };
}

/**
 * Generate City/Place JSON-LD
 */
export function generateCitySchema(
  cityName: string,
  region?: string,
  country: string = "USA"
): Place {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": cityName,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      ...(region && { "addressRegion": region }),
      "addressCountry": country
    }
  };
}

/**
 * Render JSON-LD script tag
 */
export function renderJsonLd(schema: Organization | ServiceList | Vehicle | Place): string {
  return JSON.stringify(schema);
}
