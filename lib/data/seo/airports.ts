// Comprehensive airport data for SEO pages
export interface Airport {
  code: string;
  name: string;
  city: string;
  state?: string;
  country: string;
  lat?: number;
  lng?: number;
  primaryRoutes: string[];
  nearbyCities: string[]; // slugs
  description: string;
  meetGreetInfo: string;
  pickupInstructions: string;
}

export const airports: Airport[] = [
  // Oregon & Washington (Priority 1)
  {
    code: "PDX",
    name: "Portland International Airport",
    city: "Portland",
    state: "OR",
    country: "USA",
    lat: 45.5887,
    lng: -122.5975,
    primaryRoutes: [
      "PDX → Downtown Portland",
      "PDX → Beaverton",
      "PDX → Lake Oswego",
      "PDX → Tigard",
      "PDX → Hillsboro",
      "PDX → Gresham",
      "PDX → Vancouver, WA"
    ],
    nearbyCities: ["portland", "beaverton", "lake-oswego", "tigard", "hillsboro", "gresham", "vancouver-wa"],
    description: "Portland International Airport (PDX) is Oregon's primary airport hub. Our professional chauffeur service provides seamless airport transfers with complimentary flight tracking, meet-and-greet service, and luxury vehicles.",
    meetGreetInfo: "Your chauffeur will meet you in the baggage claim area near carousel 1 with a professional name sign. We monitor all incoming flights in real-time and adjust pickup times automatically for delays or early arrivals.",
    pickupInstructions: "For arrivals: We meet you at baggage claim. For departures: Chauffeur picks you up at your location 2-3 hours before domestic flights, 3-4 hours before international flights. Curbside drop-off at your airline terminal."
  },
  {
    code: "SEA",
    name: "Seattle-Tacoma International Airport",
    city: "Seattle",
    state: "WA",
    country: "USA",
    lat: 47.4502,
    lng: -122.3088,
    primaryRoutes: [
      "SEA → Downtown Seattle",
      "SEA → Bellevue",
      "SEA → Tacoma",
      "SEA → Redmond",
      "SEA → Everett"
    ],
    nearbyCities: ["vancouver-wa"],
    description: "Seattle-Tacoma International Airport (SEA) chauffeur service with luxury transfers throughout the Puget Sound region. Professional meet-and-greet and flight tracking included.",
    meetGreetInfo: "Chauffeur meets you at baggage claim with name sign. Flight monitoring ensures on-time service regardless of delays.",
    pickupInstructions: "Arrivals: Meet at baggage claim. Departures: 2-3 hours before domestic, 3-4 hours before international flights."
  },
  {
    code: "EUG",
    name: "Eugene Airport (Mahlon Sweet Field)",
    city: "Eugene",
    state: "OR",
    country: "USA",
    primaryRoutes: [
      "EUG → Downtown Eugene",
      "EUG → University of Oregon",
      "EUG → Springfield",
      "EUG → Portland (105 miles)"
    ],
    nearbyCities: ["eugene"],
    description: "Eugene Airport chauffeur service for business and leisure travelers. Professional transportation throughout Lane County and to Portland metro area.",
    meetGreetInfo: "Your chauffeur meets you at the baggage claim area with a name sign. Flight tracking included for all arrivals.",
    pickupInstructions: "Small airport with easy navigation. Meet at baggage claim for arrivals. Drop-off at terminal entrance for departures."
  },

  // California (Priority 2)
  {
    code: "LAX",
    name: "Los Angeles International Airport",
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    primaryRoutes: [
      "LAX → Beverly Hills",
      "LAX → Santa Monica",
      "LAX → Downtown LA",
      "LAX → Hollywood",
      "LAX → Malibu",
      "LAX → Orange County"
    ],
    nearbyCities: [],
    description: "Los Angeles International Airport (LAX) premium chauffeur service. Luxury transportation to Beverly Hills, Santa Monica, and throughout Southern California.",
    meetGreetInfo: "Chauffeur meets you at your terminal's baggage claim with professional name sign. VIP terminal service available for private aviation.",
    pickupInstructions: "LAX has heavy traffic. We recommend 3-4 hours before international flights, 2-3 hours for domestic. Meet at baggage claim for arrivals."
  },
  {
    code: "SFO",
    name: "San Francisco International Airport",
    city: "San Francisco",
    state: "CA",
    country: "USA",
    primaryRoutes: [
      "SFO → Downtown San Francisco",
      "SFO → Silicon Valley",
      "SFO → Palo Alto",
      "SFO → San Jose",
      "SFO → Oakland",
      "SFO → Napa Valley"
    ],
    nearbyCities: [],
    description: "San Francisco International Airport chauffeur service with luxury vehicles and professional drivers for Bay Area transportation.",
    meetGreetInfo: "Meet at baggage claim with name sign. Real-time flight tracking for all arrivals.",
    pickupInstructions: "Meet at baggage claim for arrivals. Departure pickups 2-3 hours before domestic, 3-4 hours before international."
  },
  {
    code: "SJC",
    name: "San Jose International Airport (Mineta)",
    city: "San Jose",
    state: "CA",
    country: "USA",
    primaryRoutes: [
      "SJC → Downtown San Jose",
      "SJC → Silicon Valley",
      "SJC → Palo Alto",
      "SJC → Santa Clara",
      "SJC → San Francisco"
    ],
    nearbyCities: [],
    description: "San Jose Airport chauffeur service for Silicon Valley business travelers and tech executives.",
    meetGreetInfo: "Chauffeur meets you at baggage claim with name sign. Flight monitoring for on-time service.",
    pickupInstructions: "Smaller airport with efficient navigation. Meet at baggage claim. Terminal drop-off for departures."
  },
  {
    code: "OAK",
    name: "Oakland International Airport",
    city: "Oakland",
    state: "CA",
    country: "USA",
    primaryRoutes: [
      "OAK → Downtown Oakland",
      "OAK → Berkeley",
      "OAK → San Francisco",
      "OAK → Walnut Creek",
      "OAK → Napa Valley"
    ],
    nearbyCities: [],
    description: "Oakland International Airport professional chauffeur service throughout the East Bay and Northern California.",
    meetGreetInfo: "Meet and greet at baggage claim area. Flight tracking included.",
    pickupInstructions: "Meet at baggage claim for arrivals. Standard departure timing applies."
  },
  {
    code: "SAN",
    name: "San Diego International Airport",
    city: "San Diego",
    state: "CA",
    country: "USA",
    primaryRoutes: [
      "SAN → Downtown San Diego",
      "SAN → La Jolla",
      "SAN → Coronado",
      "SAN → Del Mar",
      "SAN → Carlsbad"
    ],
    nearbyCities: [],
    description: "San Diego Airport luxury chauffeur service for business and leisure travel throughout San Diego County.",
    meetGreetInfo: "Chauffeur meets at baggage claim with professional signage.",
    pickupInstructions: "Convenient downtown airport. Meet at baggage claim for arrivals."
  },

  // Southwest (Priority 3)
  {
    code: "LAS",
    name: "Harry Reid International Airport (Las Vegas)",
    city: "Las Vegas",
    state: "NV",
    country: "USA",
    primaryRoutes: [
      "LAS → Las Vegas Strip",
      "LAS → Downtown Las Vegas",
      "LAS → Henderson",
      "LAS → Summerlin"
    ],
    nearbyCities: [],
    description: "Las Vegas Airport chauffeur service to the Strip, downtown, and throughout Clark County.",
    meetGreetInfo: "Meet at baggage claim with name sign. 24/7 service for all arrivals.",
    pickupInstructions: "High-volume airport. Meet at baggage claim. Early departure recommended for peak times."
  },
  {
    code: "PHX",
    name: "Phoenix Sky Harbor International Airport",
    city: "Phoenix",
    state: "AZ",
    country: "USA",
    primaryRoutes: [
      "PHX → Downtown Phoenix",
      "PHX → Scottsdale",
      "PHX → Tempe",
      "PHX → Mesa",
      "PHX → Chandler"
    ],
    nearbyCities: [],
    description: "Phoenix Sky Harbor chauffeur service throughout the Valley of the Sun.",
    meetGreetInfo: "Chauffeur meets at terminal baggage claim with name sign.",
    pickupInstructions: "Meet at baggage claim. Terminal-specific pickup for departures."
  },
  {
    code: "DEN",
    name: "Denver International Airport",
    city: "Denver",
    state: "CO",
    country: "USA",
    primaryRoutes: [
      "DEN → Downtown Denver",
      "DEN → Boulder",
      "DEN → Aurora",
      "DEN → Colorado Springs"
    ],
    nearbyCities: [],
    description: "Denver International Airport professional chauffeur service to Denver metro and Front Range destinations.",
    meetGreetInfo: "Large airport - chauffeur meets at baggage claim with clear signage.",
    pickupInstructions: "Airport is 25 miles from downtown. Plan accordingly. Meet at baggage claim."
  },

  // Texas (Priority 4)
  {
    code: "DFW",
    name: "Dallas/Fort Worth International Airport",
    city: "Dallas",
    state: "TX",
    country: "USA",
    primaryRoutes: [
      "DFW → Downtown Dallas",
      "DFW → Fort Worth",
      "DFW → Arlington",
      "DFW → Plano",
      "DFW → Irving"
    ],
    nearbyCities: [],
    description: "DFW Airport executive chauffeur service throughout the Dallas-Fort Worth Metroplex.",
    meetGreetInfo: "Meet at your terminal's baggage claim. Specify terminal when booking.",
    pickupInstructions: "Large multi-terminal airport. Confirm terminal for efficient pickup."
  },
  {
    code: "IAH",
    name: "George Bush Intercontinental Airport",
    city: "Houston",
    state: "TX",
    country: "USA",
    primaryRoutes: [
      "IAH → Downtown Houston",
      "IAH → Galleria",
      "IAH → The Woodlands",
      "IAH → Sugar Land"
    ],
    nearbyCities: [],
    description: "Houston IAH Airport chauffeur service for business and leisure travelers.",
    meetGreetInfo: "Chauffeur meets at baggage claim with name sign. Terminal-specific coordination.",
    pickupInstructions: "North of Houston - plan for 30-45 minute drive to downtown."
  },
  {
    code: "AUS",
    name: "Austin-Bergstrom International Airport",
    city: "Austin",
    state: "TX",
    country: "USA",
    primaryRoutes: [
      "AUS → Downtown Austin",
      "AUS → South Congress",
      "AUS → Domain",
      "AUS → Round Rock"
    ],
    nearbyCities: [],
    description: "Austin Airport chauffeur service for tech executives and business travelers.",
    meetGreetInfo: "Meet at baggage claim with professional signage.",
    pickupInstructions: "Growing airport southeast of downtown. Meet at baggage claim."
  },

  // Southeast (Priority 5)
  {
    code: "ATL",
    name: "Hartsfield-Jackson Atlanta International Airport",
    city: "Atlanta",
    state: "GA",
    country: "USA",
    primaryRoutes: [
      "ATL → Downtown Atlanta",
      "ATL → Buckhead",
      "ATL → Midtown",
      "ATL → Sandy Springs"
    ],
    nearbyCities: [],
    description: "Atlanta ATL Airport chauffeur service - world's busiest airport with professional meet-and-greet.",
    meetGreetInfo: "Busiest airport globally. Chauffeur meets at designated baggage carousel.",
    pickupInstructions: "High traffic volume. Allow extra time. Meet at baggage claim."
  },
  {
    code: "MCO",
    name: "Orlando International Airport",
    city: "Orlando",
    state: "FL",
    country: "USA",
    primaryRoutes: [
      "MCO → Disney World",
      "MCO → Universal Orlando",
      "MCO → Downtown Orlando",
      "MCO → Convention Center"
    ],
    nearbyCities: [],
    description: "Orlando Airport luxury chauffeur service to theme parks, resorts, and business destinations.",
    meetGreetInfo: "Meet at baggage claim on main terminal level.",
    pickupInstructions: "Tourist-focused airport. Clear signage for ground transportation."
  },
  {
    code: "MIA",
    name: "Miami International Airport",
    city: "Miami",
    state: "FL",
    country: "USA",
    primaryRoutes: [
      "MIA → South Beach",
      "MIA → Downtown Miami",
      "MIA → Coral Gables",
      "MIA → Fort Lauderdale"
    ],
    nearbyCities: [],
    description: "Miami Airport executive chauffeur service for international business travelers and VIP clients.",
    meetGreetInfo: "International gateway - chauffeur meets at baggage claim with name sign.",
    pickupInstructions: "Heavy international traffic. Meet at baggage claim. Allow extra time for customs."
  },

  // Northeast (Priority 6)
  {
    code: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
    state: "NY",
    country: "USA",
    primaryRoutes: [
      "JFK → Manhattan",
      "JFK → Brooklyn",
      "JFK → Long Island",
      "JFK → Connecticut"
    ],
    nearbyCities: [],
    description: "JFK Airport premium chauffeur service to Manhattan and throughout the tri-state area.",
    meetGreetInfo: "Meet at terminal baggage claim. Specify terminal when booking.",
    pickupInstructions: "Major international hub. Heavy traffic - plan 3-4 hours for international departures."
  },
  {
    code: "LGA",
    name: "LaGuardia Airport",
    city: "New York",
    state: "NY",
    country: "USA",
    primaryRoutes: [
      "LGA → Manhattan",
      "LGA → Queens",
      "LGA → Bronx"
    ],
    nearbyCities: [],
    description: "LaGuardia Airport chauffeur service for domestic travel to/from New York City.",
    meetGreetInfo: "Newly renovated terminals. Meet at baggage claim.",
    pickupInstructions": "Closer to Manhattan than JFK. Meet at baggage claim for arrivals."
  },
  {
    code: "EWR",
    name: "Newark Liberty International Airport",
    city: "Newark",
    state: "NJ",
    country: "USA",
    primaryRoutes: [
      "EWR → Manhattan",
      "EWR → Newark",
      "EWR → Jersey City",
      "EWR → Northern NJ"
    ],
    nearbyCities: [],
    description: "Newark Airport professional chauffeur service to NYC and New Jersey destinations.",
    meetGreetInfo: "Meet at terminal baggage claim. Terminal coordination required.",
    pickupInstructions: "New Jersey airport serving NYC. Meet at baggage claim."
  },
  {
    code: "BOS",
    name: "Boston Logan International Airport",
    city: "Boston",
    state: "MA",
    country: "USA",
    primaryRoutes: [
      "BOS → Downtown Boston",
      "BOS → Cambridge",
      "BOS → Brookline",
      "BOS → Cape Cod"
    ],
    nearbyCities: [],
    description: "Boston Logan Airport chauffeur service throughout Greater Boston and New England.",
    meetGreetInfo: "Meet at terminal baggage claim with name sign.",
    pickupInstructions: "Waterfront airport. Terminal-specific pickup. Meet at baggage claim."
  },
  {
    code: "PHL",
    name: "Philadelphia International Airport",
    city: "Philadelphia",
    state: "PA",
    country: "USA",
    primaryRoutes: [
      "PHL → Center City Philadelphia",
      "PHL → Suburbs",
      "PHL → Delaware",
      "PHL → South Jersey"
    ],
    nearbyCities: [],
    description: "Philadelphia Airport executive transportation throughout the Delaware Valley.",
    meetGreetInfo: "Chauffeur meets at baggage claim with professional signage.",
    pickupInstructions: "Meet at baggage claim. Clear ground transportation signage."
  },
  {
    code: "IAD",
    name: "Washington Dulles International Airport",
    city: "Washington",
    state: "VA",
    country: "USA",
    primaryRoutes: [
      "IAD → Washington DC",
      "IAD → Arlington",
      "IAD → Alexandria",
      "IAD → Tysons Corner"
    ],
    nearbyCities: [],
    description: "Dulles Airport chauffeur service for government officials, diplomats, and business executives in the DC metro area.",
    meetGreetInfo: "International gateway - meet at baggage claim with name sign.",
    pickupInstructions: "Located in Virginia, 26 miles from DC. Plan travel time accordingly."
  },
  {
    code: "DCA",
    name: "Ronald Reagan Washington National Airport",
    city: "Washington",
    state: "DC",
    country: "USA",
    primaryRoutes: [
      "DCA → Downtown DC",
      "DCA → Capitol Hill",
      "DCA → Georgetown",
      "DCA → Arlington"
    ],
    nearbyCities: [],
    description: "Reagan National Airport - closest to downtown DC. Premium chauffeur service for government and business travelers.",
    meetGreetInfo: "Convenient downtown airport. Meet at baggage claim.",
    pickupInstructions: "Close to city center. Meet at baggage claim for efficient transfers."
  },
  {
    code: "BWI",
    name: "Baltimore/Washington International Airport",
    city: "Baltimore",
    state: "MD",
    country: "USA",
    primaryRoutes: [
      "BWI → Baltimore",
      "BWI → Washington DC",
      "BWI → Annapolis",
      "BWI → Columbia"
    ],
    nearbyCities: [],
    description: "BWI Airport chauffeur service between Baltimore and Washington DC corridor.",
    meetGreetInfo: "Meet at baggage claim with name sign. Flight monitoring included.",
    pickupInstructions: "Between Baltimore and DC. Specify destination city when booking."
  },

  // Midwest (Priority 7)
  {
    code: "ORD",
    name: "O'Hare International Airport",
    city: "Chicago",
    state: "IL",
    country: "USA",
    primaryRoutes: [
      "ORD → Downtown Chicago",
      "ORD → Magnificent Mile",
      "ORD → Rosemont",
      "ORD → Naperville"
    ],
    nearbyCities: [],
    description: "O'Hare Airport executive chauffeur service throughout Chicagoland.",
    meetGreetInfo: "Major hub airport. Chauffeur meets at terminal baggage claim.",
    pickupInstructions: "Large multi-terminal airport. Confirm terminal when booking."
  },
  {
    code: "MDW",
    name: "Chicago Midway International Airport",
    city: "Chicago",
    state: "IL",
    country: "USA",
    primaryRoutes: [
      "MDW → Downtown Chicago",
      "MDW → South Side",
      "MDW → Suburbs"
    ],
    nearbyCities: [],
    description: "Midway Airport chauffeur service - closer to downtown Chicago than O'Hare.",
    meetGreetInfo: "Smaller airport. Meet at baggage claim.",
    pickupInstructions: "Closer to city center. Meet at baggage claim for quick transfers."
  },
  {
    code: "DTW",
    name: "Detroit Metropolitan Wayne County Airport",
    city: "Detroit",
    state: "MI",
    country: "USA",
    primaryRoutes: [
      "DTW → Downtown Detroit",
      "DTW → Ann Arbor",
      "DTW → Troy",
      "DTW → Dearborn"
    ],
    nearbyCities: [],
    description: "Detroit Metro Airport professional chauffeur service throughout Metro Detroit.",
    meetGreetInfo: "Delta hub - meet at McNamara or North Terminal baggage claim.",
    pickupInstructions: "Two terminals. Specify terminal when booking."
  },
  {
    code: "MSP",
    name: "Minneapolis-St. Paul International Airport",
    city: "Minneapolis",
    state: "MN",
    country: "USA",
    primaryRoutes: [
      "MSP → Downtown Minneapolis",
      "MSP → St. Paul",
      "MSP → Mall of America",
      "MSP → Bloomington"
    ],
    nearbyCities: [],
    description: "MSP Airport chauffeur service throughout the Twin Cities metro area.",
    meetGreetInfo": "Meet at baggage claim in Terminal 1 or 2. Specify when booking.",
    pickupInstructions: "Twin Cities airport. Terminal coordination required."
  },
  {
    code: "STL",
    name: "St. Louis Lambert International Airport",
    city: "St. Louis",
    state: "MO",
    country: "USA",
    primaryRoutes: [
      "STL → Downtown St. Louis",
      "STL → Clayton",
      "STL → Chesterfield"
    ],
    nearbyCities: [],
    description: "St. Louis Airport executive transportation throughout the Gateway region.",
    meetGreetInfo: "Meet at main terminal baggage claim.",
    pickupInstructions: "Efficient midwest airport. Meet at baggage claim."
  },

  // Additional Major Hubs
  {
    code: "CLT",
    name: "Charlotte Douglas International Airport",
    city: "Charlotte",
    state: "NC",
    country: "USA",
    primaryRoutes: [
      "CLT → Uptown Charlotte",
      "CLT → SouthPark",
      "CLT → Lake Norman"
    ],
    nearbyCities: [],
    description: "Charlotte Airport professional chauffeur service throughout the Charlotte metro area.",
    meetGreetInfo: "American Airlines hub. Meet at baggage claim.",
    pickupInstructions: "Large hub airport. Meet at baggage claim for transfers."
  },
  {
    code: "BNA",
    name: "Nashville International Airport",
    city: "Nashville",
    state: "TN",
    country: "USA",
    primaryRoutes: [
      "BNA → Downtown Nashville",
      "BNA → Music Row",
      "BNA → Franklin",
      "BNA → Brentwood"
    ],
    nearbyCities: [],
    description: "Nashville Airport luxury chauffeur service for music industry and business travelers.",
    meetGreetInfo: "Meet at baggage claim with name sign.",
    pickupInstructions: "Easy airport navigation. Meet at baggage claim."
  },
  {
    code: "RDU",
    name: "Raleigh-Durham International Airport",
    city: "Raleigh",
    state: "NC",
    country: "USA",
    primaryRoutes: [
      "RDU → Raleigh",
      "RDU → Durham",
      "RDU → Chapel Hill",
      "RDU → Research Triangle Park"
    ],
    nearbyCities: [],
    description: "RDU Airport chauffeur service throughout the Research Triangle.",
    meetGreetInfo: "Meet at terminal baggage claim.",
    pickupInstructions: "Between Raleigh and Durham. Specify destination when booking."
  }
];

export async function getAirports() {
  return airports;
}

export async function getAirportByCode(code: string) {
  return airports.find(a => a.code.toUpperCase() === code.toUpperCase()) || null;
}

export async function getAirportsByCountry(country: string) {
  return airports.filter(a => a.country === country);
}

export async function getNearbyAirports(citySlug: string) {
  return airports.filter(a => a.nearbyCities.includes(citySlug));
}
