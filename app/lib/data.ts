// Data for regions, countries, and cities

export interface Region {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  seoDescription: string;
}

export interface Country {
  slug: string;
  name: string;
  region: string;
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
  name: string;
  description: string;
  areaServed: string;
}

export interface Vehicle {
  slug: string;
  name: string;
  image: string;
  seatingCapacity: number;
  description: string;
}

export const regions: Region[] = [
  {
    slug: "united-states",
    name: "United States",
    headline: "Premium Chauffeur Service Across America",
    subheadline: "Experience luxury ground transportation in major U.S. cities with Oregon Town Car's professional chauffeur service.",
    seoDescription: "Oregon Town Car provides premium chauffeur and town car services across the United States, serving major metropolitan areas with luxury vehicles and professional drivers."
  },
  {
    slug: "canada",
    name: "Canada",
    headline: "Elite Transportation Throughout Canada",
    subheadline: "Reliable luxury chauffeur service across Canadian cities, from coast to coast.",
    seoDescription: "Professional town car and chauffeur services available throughout Canada, offering premium transportation solutions for business and leisure travelers."
  },
  {
    slug: "europe",
    name: "Europe",
    headline: "European Luxury Ground Transportation",
    subheadline: "Seamless chauffeur service across Europe's major cities and destinations.",
    seoDescription: "Oregon Town Car partners with premium chauffeur services across Europe to provide consistent luxury ground transportation throughout the continent."
  },
  {
    slug: "middle-east",
    name: "Middle East",
    headline: "Premium Chauffeur Service in the Middle East",
    subheadline: "Experience world-class ground transportation across the Middle East's most prominent cities.",
    seoDescription: "Luxury chauffeur and town car services available in major Middle Eastern cities, providing premium transportation for business executives and discerning travelers."
  }
];

export const countries: Country[] = [
  {
    slug: "united-states",
    name: "United States",
    region: "united-states",
    tagline: "America's Premier Luxury Ground Transportation Provider",
    seoDescription: "Oregon Town Car offers premium chauffeur services throughout the United States, serving business travelers and luxury clients with professional drivers and immaculate vehicles.",
    primaryAirports: ["PDX - Portland International", "SEA - Seattle-Tacoma", "SFO - San Francisco", "LAX - Los Angeles", "ORD - Chicago O'Hare", "JFK - New York JFK"]
  },
  {
    slug: "canada",
    name: "Canada",
    region: "canada",
    tagline: "Exceptional Chauffeur Service Coast to Coast",
    seoDescription: "Professional town car and chauffeur services across Canada, from Vancouver to Toronto, providing luxury ground transportation for all occasions.",
    primaryAirports: ["YVR - Vancouver", "YYZ - Toronto Pearson", "YUL - Montreal Trudeau", "YYC - Calgary"]
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    region: "europe",
    tagline: "Distinguished Ground Transportation Throughout the UK",
    seoDescription: "Premium chauffeur services in London, Manchester, Edinburgh and across the United Kingdom, offering executive transportation and airport transfers.",
    primaryAirports: ["LHR - London Heathrow", "LGW - London Gatwick", "MAN - Manchester", "EDI - Edinburgh"]
  },
  {
    slug: "france",
    name: "France",
    region: "europe",
    tagline: "Elegance and Sophistication in French Transportation",
    seoDescription: "Luxury chauffeur services in Paris and throughout France, providing premium ground transportation for business and leisure.",
    primaryAirports: ["CDG - Paris Charles de Gaulle", "ORY - Paris Orly", "NCE - Nice"]
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    region: "middle-east",
    tagline: "World-Class Luxury Transportation in the UAE",
    seoDescription: "Premium chauffeur services in Dubai, Abu Dhabi and across the UAE, offering executive transportation with the highest standards of service.",
    primaryAirports: ["DXB - Dubai International", "AUH - Abu Dhabi International"]
  }
];

export const cities: City[] = [
  {
    slug: "portland",
    name: "Portland",
    country: "united-states",
    tagline: "Portland's Most Trusted Luxury Chauffeur Service",
    seoDescription: "Oregon Town Car provides premium chauffeur and town car services in Portland, Oregon, including airport transfers, corporate travel, wine tours, and special events.",
    primaryUseCases: [
      "Airport transfers to/from PDX",
      "Corporate roadshows and business meetings",
      "Wine country tours",
      "Special events and weddings",
      "Executive daily transportation"
    ]
  },
  {
    slug: "beaverton",
    name: "Beaverton",
    country: "united-states",
    tagline: "Premium Transportation for Beaverton's Business Community",
    seoDescription: "Reliable luxury chauffeur service in Beaverton, OR, serving corporate clients, tech campuses, and airport transportation needs.",
    primaryUseCases: [
      "Corporate campus transfers",
      "Airport transportation",
      "Business meetings and events",
      "Executive transportation"
    ]
  },
  {
    slug: "hillsboro",
    name: "Hillsboro",
    country: "united-states",
    tagline: "Executive Transportation in Oregon's Silicon Forest",
    seoDescription: "Professional chauffeur service for Hillsboro's tech industry, offering corporate transportation and airport transfers.",
    primaryUseCases: [
      "Tech campus transportation",
      "Airport transfers to PDX",
      "Corporate events",
      "Business travel"
    ]
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    country: "united-states",
    tagline: "Luxury Ground Transportation in Vancouver, WA",
    seoDescription: "Premium town car service for Vancouver, Washington, providing airport transfers, corporate travel, and special event transportation.",
    primaryUseCases: [
      "Airport transfers",
      "Corporate transportation",
      "Special events",
      "Business meetings"
    ]
  }
];

export const services: Service[] = [
  {
    slug: "airport",
    name: "Airport Transportation",
    description: "Professional airport transfer service with flight monitoring, meet and greet, and luggage assistance. Never miss a flight with our reliable, punctual service.",
    areaServed: "United States"
  },
  {
    slug: "corporate",
    name: "Corporate Travel",
    description: "Executive transportation for business professionals, including roadshows, client meetings, and daily commutes. Discretion and professionalism guaranteed.",
    areaServed: "United States"
  },
  {
    slug: "wine",
    name: "Wine Tours",
    description: "Explore Oregon's renowned wine country in comfort and style. Customized tours of Willamette Valley wineries with a knowledgeable chauffeur.",
    areaServed: "Oregon, United States"
  },
  {
    slug: "vip-arrival",
    name: "VIP Arrival Service",
    description: "Premium meet and greet service for VIP guests and executives. Red carpet treatment with dedicated concierge, luggage handling, and expedited customs assistance.",
    areaServed: "United States"
  },
  {
    slug: "long_distance",
    name: "Long Distance",
    description: "Comfortable long-distance chauffeur service for extended journeys. Perfect for multi-city business trips or leisure travel throughout the Pacific Northwest.",
    areaServed: "Pacific Northwest"
  }
];

export const vehicles: Vehicle[] = [
  {
    slug: "sedan",
    name: "Luxury Sedan",
    image: "/images/sedan.jpg",
    seatingCapacity: 3,
    description: "Premium sedans including Mercedes S-Class and BMW 7-Series for sophisticated transportation."
  },
  {
    slug: "suv",
    name: "Premium SUV",
    image: "/images/suv.jpg",
    seatingCapacity: 6,
    description: "Spacious luxury SUVs like Cadillac Escalade and Mercedes GLS for comfort and style."
  },
  {
    slug: "sprinter",
    name: "Mercedes Sprinter",
    image: "/images/sprinter.jpg",
    seatingCapacity: 14,
    description: "Executive Mercedes Sprinter vans perfect for group transportation and corporate events."
  }
];

export const homepage = {
  heroSlides: [
    {
      title: "Premium Chauffeur Service",
      subtitle: "Experience luxury ground transportation with Oregon Town Car's professional drivers and immaculate fleet.",
      cta: "Book Your Ride"
    }
  ],
  featuredServices: ["Airport Transportation", "Corporate Travel", "Wine Tours"],
  featuredCities: ["Portland", "Beaverton", "Hillsboro", "Vancouver"],
  featuredFleet: ["Luxury Sedan", "Premium SUV", "Mercedes Sprinter"]
};
