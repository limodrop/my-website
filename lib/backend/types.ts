// TypeScript types matching the Motoko backend schema

export interface Region {
  slug: string;
  headline: string;
  subheadline: string;
  seoDescription: string;
}

export interface Country {
  slug: string;
  name: string;
  tagline: string;
  seoDescription: string;
  primaryAirports: string[];
}

export interface City {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  seoDescription: string;
  primaryUseCases: string[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
}

export interface Fleet {
  slug: string;
  name: string;
  description: string;
}

export interface Homepage {
  heroSlides: Array<{
    title: string;
    subtitle: string;
    cta: string;
  }>;
  featuredServices: string[];
  featuredCities: string[];
  featuredFleet: string[];
}
