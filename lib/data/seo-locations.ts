/**
 * SEO Locations Config
 * 
 * Single source of truth for programmatic page generation.
 * Use this data to dynamically generate city pages, route pages, and location-based content.
 */

export interface City {
  slug: string;
  name: string;
  state: string;
  airport?: string;
  region: 'portland-metro' | 'oregon' | 'washington' | 'international';
  distance?: string; // from PDX
  driveTime?: string; // from PDX
}

export interface Route {
  slug: string;
  from: string; // typically "pdx"
  to: string; // city slug
  distance: string;
  timeRange: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  slug: string;
}

export interface Country {
  slug: string;
  name: string;
  cities: string[]; // city slugs
}

/**
 * Portland Metro & Oregon Cities
 */
export const portlandMetroCities: City[] = [
  {
    slug: 'portland',
    name: 'Portland',
    state: 'OR',
    airport: 'PDX',
    region: 'portland-metro',
  },
  {
    slug: 'beaverton',
    name: 'Beaverton',
    state: 'OR',
    region: 'portland-metro',
    distance: '18 miles',
    driveTime: '30-40 min',
  },
  {
    slug: 'lake-oswego',
    name: 'Lake Oswego',
    state: 'OR',
    region: 'portland-metro',
    distance: '20 miles',
    driveTime: '35-45 min',
  },
  {
    slug: 'tigard',
    name: 'Tigard',
    state: 'OR',
    region: 'portland-metro',
    distance: '15 miles',
    driveTime: '25-35 min',
  },
  {
    slug: 'hillsboro',
    name: 'Hillsboro',
    state: 'OR',
    region: 'portland-metro',
    distance: '22 miles',
    driveTime: '35-50 min',
  },
  {
    slug: 'gresham',
    name: 'Gresham',
    state: 'OR',
    region: 'portland-metro',
    distance: '15 miles',
    driveTime: '25-35 min',
  },
  {
    slug: 'vancouver-wa',
    name: 'Vancouver',
    state: 'WA',
    region: 'washington',
    distance: '18 miles',
    driveTime: '30-45 min',
  },
];

/**
 * Oregon Regional Cities
 */
export const oregonRegionalCities: City[] = [
  {
    slug: 'salem',
    name: 'Salem',
    state: 'OR',
    region: 'oregon',
    distance: '47 miles',
    driveTime: '60-75 min',
  },
  {
    slug: 'eugene',
    name: 'Eugene',
    state: 'OR',
    region: 'oregon',
    distance: '110 miles',
    driveTime: '120-150 min',
  },
  {
    slug: 'bend',
    name: 'Bend',
    state: 'OR',
    region: 'oregon',
    distance: '160 miles',
    driveTime: '180-210 min',
  },
];

/**
 * Wine Country Regions
 */
export const wineCountryRegions: City[] = [
  {
    slug: 'willamette-valley',
    name: 'Willamette Valley',
    state: 'OR',
    region: 'oregon',
    distance: '40-60 miles',
    driveTime: '60-90 min',
  },
  {
    slug: 'dundee-hills',
    name: 'Dundee Hills',
    state: 'OR',
    region: 'oregon',
    distance: '40 miles',
    driveTime: '60 min',
  },
  {
    slug: 'yamhill-carlton',
    name: 'Yamhill-Carlton',
    state: 'OR',
    region: 'oregon',
    distance: '50 miles',
    driveTime: '70 min',
  },
];

/**
 * All Cities Combined
 */
export const allCities: City[] = [
  ...portlandMetroCities,
  ...oregonRegionalCities,
  ...wineCountryRegions,
];

/**
 * PDX Route Pages
 */
export const pdxRoutes: Route[] = [
  {
    slug: 'pdx-to-downtown-portland',
    from: 'pdx',
    to: 'downtown-portland',
    distance: '12 miles',
    timeRange: '25-35 min',
    description: 'Most popular route for business travelers and hotel guests',
    priority: 'high',
  },
  {
    slug: 'pdx-to-beaverton',
    from: 'pdx',
    to: 'beaverton',
    distance: '18 miles',
    timeRange: '30-40 min',
    description: 'Direct access to Nike, Intel, and corporate offices',
    priority: 'high',
  },
  {
    slug: 'pdx-to-lake-oswego',
    from: 'pdx',
    to: 'lake-oswego',
    distance: '20 miles',
    timeRange: '35-45 min',
    description: 'Residential area and upscale shopping district',
    priority: 'medium',
  },
  {
    slug: 'pdx-to-tigard',
    from: 'pdx',
    to: 'tigard',
    distance: '15 miles',
    timeRange: '25-35 min',
    description: 'Business parks and Bridgeport Village shopping',
    priority: 'medium',
  },
  {
    slug: 'pdx-to-hillsboro',
    from: 'pdx',
    to: 'hillsboro',
    distance: '22 miles',
    timeRange: '35-50 min',
    description: 'Intel campus and Silicon Forest tech corridor',
    priority: 'high',
  },
  {
    slug: 'pdx-to-vancouver-wa',
    from: 'pdx',
    to: 'vancouver-wa',
    distance: '18 miles',
    timeRange: '30-45 min',
    description: 'Cross-border service to Washington State',
    priority: 'medium',
  },
  {
    slug: 'pdx-to-willamette-valley',
    from: 'pdx',
    to: 'willamette-valley',
    distance: '40-60 miles',
    timeRange: '60-90 min',
    description: 'Wine country tours and vineyard transportation',
    priority: 'high',
  },
];

/**
 * Major Airports (for worldwide pages)
 */
export const majorAirports: Airport[] = [
  // United States
  { code: 'PDX', name: 'Portland International Airport', city: 'Portland', country: 'USA', slug: 'portland-pdx' },
  { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', country: 'USA', slug: 'new-york-jfk' },
  { code: 'LGA', name: 'LaGuardia Airport', city: 'New York', country: 'USA', slug: 'new-york-lga' },
  { code: 'EWR', name: 'Newark Liberty International Airport', city: 'New York', country: 'USA', slug: 'new-york-ewr' },
  { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles', country: 'USA', slug: 'los-angeles-lax' },
  { code: 'SFO', name: 'San Francisco International Airport', city: 'San Francisco', country: 'USA', slug: 'san-francisco-sfo' },
  { code: 'ORD', name: "O'Hare International Airport", city: 'Chicago', country: 'USA', slug: 'chicago-ord' },
  { code: 'MIA', name: 'Miami International Airport', city: 'Miami', country: 'USA', slug: 'miami-mia' },
  
  // Canada
  { code: 'YYZ', name: 'Toronto Pearson International Airport', city: 'Toronto', country: 'Canada', slug: 'toronto-yyz' },
  { code: 'YVR', name: 'Vancouver International Airport', city: 'Vancouver', country: 'Canada', slug: 'vancouver-yvr' },
  { code: 'YUL', name: 'Montreal-Pierre Elliott Trudeau International Airport', city: 'Montreal', country: 'Canada', slug: 'montreal-yul' },
  
  // Europe
  { code: 'LHR', name: 'London Heathrow Airport', city: 'London', country: 'United Kingdom', slug: 'london-lhr' },
  { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany', slug: 'frankfurt-fra' },
  { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France', slug: 'paris-cdg' },
  
  // Middle East
  { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE', slug: 'dubai-dxb' },
  { code: 'AUH', name: 'Abu Dhabi International Airport', city: 'Abu Dhabi', country: 'UAE', slug: 'abu-dhabi-auh' },
  
  // Asia
  { code: 'NRT', name: 'Narita International Airport', city: 'Tokyo', country: 'Japan', slug: 'tokyo-nrt' },
];

/**
 * Countries for Worldwide Pages
 */
export const worldwideCountries: Country[] = [
  {
    slug: 'united-states',
    name: 'United States',
    cities: ['new-york-jfk', 'los-angeles-lax', 'san-francisco-sfo', 'chicago-ord', 'miami-mia'],
  },
  {
    slug: 'canada',
    name: 'Canada',
    cities: ['toronto-yyz', 'vancouver-yvr', 'montreal-yul'],
  },
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    cities: ['london-lhr'],
  },
  {
    slug: 'germany',
    name: 'Germany',
    cities: ['frankfurt-fra'],
  },
  {
    slug: 'france',
    name: 'France',
    cities: ['paris-cdg'],
  },
  {
    slug: 'uae',
    name: 'United Arab Emirates',
    cities: ['dubai-dxb', 'abu-dhabi-auh'],
  },
  {
    slug: 'japan',
    name: 'Japan',
    cities: ['tokyo-nrt'],
  },
];

/**
 * Service Slugs
 */
export const servicePages = [
  'airport-transportation',
  'corporate-travel',
  'hourly-chauffeur',
  'wine-tours',
  'vip-arrival',
  'special-events',
];

/**
 * Fleet Slugs
 */
export const fleetVehicles = [
  'luxury-sedan',
  'executive-suv',
  'executive-van',
  'mini-coach',
];

/**
 * Helper Functions
 */

/**
 * Get city by slug
 */
export function getCityBySlug(slug: string): City | undefined {
  return allCities.find(city => city.slug === slug);
}

/**
 * Get route by slug
 */
export function getRouteBySlug(slug: string): Route | undefined {
  return pdxRoutes.find(route => route.slug === slug);
}

/**
 * Get airport by code
 */
export function getAirportByCode(code: string): Airport | undefined {
  return majorAirports.find(airport => airport.code === code);
}

/**
 * Get country by slug
 */
export function getCountryBySlug(slug: string): Country | undefined {
  return worldwideCountries.find(country => country.slug === slug);
}

/**
 * Get related routes for a city (routes that go to that city)
 */
export function getRelatedRoutesForCity(citySlug: string): Route[] {
  return pdxRoutes.filter(route => route.to === citySlug);
}

/**
 * Get nearby cities for a given city (within same region)
 */
export function getNearbyCities(citySlug: string): City[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];
  
  return allCities.filter(c => 
    c.slug !== citySlug && 
    c.region === city.region
  ).slice(0, 5);
}
