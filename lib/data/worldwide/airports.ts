export interface WorldwideAirport {
  code: string;
  name: string;
  city: string;
  country: string;
  countrySlug: string;
  description: string;
  commonRoutes: string[];
  meetGreetInfo: string;
}

export const worldwideAirports: WorldwideAirport[] = [
  {
    code: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
    country: "USA",
    countrySlug: "usa",
    description: "Professional meet and greet service at JFK Airport. Chauffeur-driven transfers throughout NYC and tri-state area.",
    commonRoutes: [
      "JFK → Manhattan Hotels",
      "JFK → Brooklyn",
      "JFK → Queens",
      "JFK → Long Island",
      "JFK → Connecticut",
      "JFK → New Jersey"
    ],
    meetGreetInfo: "Our chauffeur will meet you in the arrivals hall with a name sign. We monitor all flights for delays and provide complimentary wait time."
  },
  {
    code: "LAX",
    name: "Los Angeles International Airport",
    city: "Los Angeles",
    country: "USA",
    countrySlug: "usa",
    description: "Premium LAX airport chauffeur service. Luxury transportation to Beverly Hills, Santa Monica, and all of Southern California.",
    commonRoutes: [
      "LAX → Beverly Hills",
      "LAX → Santa Monica",
      "LAX → Downtown LA",
      "LAX → Hollywood",
      "LAX → Malibu",
      "LAX → Orange County"
    ],
    meetGreetInfo: "Meet and greet at baggage claim with name sign. Flight monitoring included. VIP terminal service available."
  },
  {
    code: "ORD",
    name: "O'Hare International Airport",
    city: "Chicago",
    country: "USA",
    countrySlug: "usa",
    description: "Executive chauffeur service at O'Hare Airport. Professional transfers to downtown Chicago and suburbs.",
    commonRoutes: [
      "ORD → Downtown Chicago",
      "ORD → Magnificent Mile",
      "ORD → Naperville",
      "ORD → Schaumburg",
      "ORD → Oak Brook",
      "ORD → Evanston"
    ],
    meetGreetInfo: "Chauffeur meets you at arrivals with name sign. Real-time flight tracking and complimentary wait time for delays."
  },
  {
    code: "LHR",
    name: "London Heathrow Airport",
    city: "London",
    country: "United Kingdom",
    countrySlug: "uk",
    description: "Luxury chauffeur service at Heathrow Airport. Premium transfers to Central London and Home Counties.",
    commonRoutes: [
      "Heathrow → Central London",
      "Heathrow → Mayfair",
      "Heathrow → City of London",
      "Heathrow → Canary Wharf",
      "Heathrow → Windsor",
      "Heathrow → Oxford"
    ],
    meetGreetInfo: "Professional meet and greet in arrivals hall. Flight monitoring and complimentary wait time included."
  },
  {
    code: "CDG",
    name: "Paris Charles de Gaulle Airport",
    city: "Paris",
    country: "France",
    countrySlug: "france",
    description: "Executive car service at CDG Airport. Chauffeur-driven transfers to Paris and Île-de-France.",
    commonRoutes: [
      "CDG → Paris Centre",
      "CDG → Champs-Élysées",
      "CDG → La Défense",
      "CDG → Versailles",
      "CDG → Disneyland Paris",
      "CDG → Orly Airport"
    ],
    meetGreetInfo: "Chauffeur meets you at terminal arrivals with name sign. Flight tracking and wait time included."
  },
  {
    code: "FRA",
    name: "Frankfurt Airport",
    city: "Frankfurt",
    country: "Germany",
    countrySlug: "germany",
    description: "Professional chauffeur service at Frankfurt Airport. Executive transfers to financial district and beyond.",
    commonRoutes: [
      "FRA → Frankfurt City",
      "FRA → Financial District",
      "FRA → Messe Frankfurt",
      "FRA → Heidelberg",
      "FRA → Wiesbaden",
      "FRA → Mainz"
    ],
    meetGreetInfo: "Meet and greet service in arrivals area. Flight monitoring and complimentary wait time provided."
  },
  {
    code: "FCO",
    name: "Rome Fiumicino Airport",
    city: "Rome",
    country: "Italy",
    countrySlug: "italy",
    description: "Luxury chauffeur service at Fiumicino Airport. Premium transfers to Rome city center and Vatican.",
    commonRoutes: [
      "FCO → Rome Centre",
      "FCO → Vatican",
      "FCO → Colosseum area",
      "FCO → EUR District",
      "FCO → Civitavecchia Port",
      "FCO → Tivoli"
    ],
    meetGreetInfo: "Professional chauffeur meets you in arrivals hall with name sign. Flight tracking included."
  },
  {
    code: "MAD",
    name: "Madrid Barajas Airport",
    city: "Madrid",
    country: "Spain",
    countrySlug: "spain",
    description: "Executive car service at Barajas Airport. Chauffeur-driven transfers throughout Madrid and region.",
    commonRoutes: [
      "MAD → Madrid Centre",
      "MAD → Salamanca District",
      "MAD → AZCA Business Area",
      "MAD → IFEMA",
      "MAD → Toledo",
      "MAD → Segovia"
    ],
    meetGreetInfo: "Meet and greet at terminal arrivals. Flight monitoring and wait time included in service."
  },
  {
    code: "SYD",
    name: "Sydney Kingsford Smith Airport",
    city: "Sydney",
    country: "Australia",
    countrySlug: "australia",
    description: "Premium chauffeur service at Sydney Airport. Professional transfers to CBD and greater Sydney.",
    commonRoutes: [
      "SYD → Sydney CBD",
      "SYD → Circular Quay",
      "SYD → North Sydney",
      "SYD → Bondi Beach",
      "SYD → Parramatta",
      "SYD → Newcastle"
    ],
    meetGreetInfo: "Chauffeur meets you in arrivals area with name sign. Flight tracking and complimentary wait time."
  },
  {
    code: "NRT",
    name: "Tokyo Narita International Airport",
    city: "Tokyo",
    country: "Japan",
    countrySlug: "japan",
    description: "Luxury chauffeur service at Narita Airport. Executive transfers to Tokyo and surrounding areas.",
    commonRoutes: [
      "NRT → Tokyo Centre",
      "NRT → Marunouchi",
      "NRT → Roppongi",
      "NRT → Shibuya",
      "NRT → Yokohama",
      "NRT → Haneda Airport"
    ],
    meetGreetInfo: "Professional meet and greet in arrivals hall. Flight monitoring and wait time included."
  },
  {
    code: "DXB",
    name: "Dubai International Airport",
    city: "Dubai",
    country: "United Arab Emirates",
    countrySlug: "uae",
    description: "Premium chauffeur service at Dubai Airport. Luxury transfers throughout Dubai and UAE.",
    commonRoutes: [
      "DXB → Dubai Marina",
      "DXB → Downtown Dubai",
      "DXB → Palm Jumeirah",
      "DXB → Business Bay",
      "DXB → Abu Dhabi",
      "DXB → Sharjah"
    ],
    meetGreetInfo: "VIP meet and greet service at arrivals. Flight tracking and complimentary wait time provided."
  },
  // Additional major airports
  {
    code: "LGA",
    name: "LaGuardia Airport",
    city: "New York",
    country: "USA",
    countrySlug: "usa",
    description: "Professional chauffeur service at LaGuardia Airport. Quick transfers to Manhattan and NYC.",
    commonRoutes: [
      "LGA → Manhattan",
      "LGA → Queens",
      "LGA → Brooklyn",
      "LGA → JFK Airport",
      "LGA → Newark",
      "LGA → Long Island"
    ],
    meetGreetInfo: "Meet and greet at baggage claim. Flight tracking and wait time included."
  },
  {
    code: "EWR",
    name: "Newark Liberty International Airport",
    city: "New York/Newark",
    country: "USA",
    countrySlug: "usa",
    description: "Executive car service at Newark Airport. Premium transfers to NYC and New Jersey.",
    commonRoutes: [
      "EWR → Manhattan",
      "EWR → Downtown Newark",
      "EWR → Jersey City",
      "EWR → JFK Airport",
      "EWR → Philadelphia",
      "EWR → Princeton"
    ],
    meetGreetInfo: "Professional meet and greet in arrivals area. Flight monitoring included."
  },
  {
    code: "SFO",
    name: "San Francisco International Airport",
    city: "San Francisco",
    country: "USA",
    countrySlug: "usa",
    description: "Luxury chauffeur service at SFO Airport. Executive transfers to SF and Silicon Valley.",
    commonRoutes: [
      "SFO → Downtown SF",
      "SFO → Financial District",
      "SFO → Palo Alto",
      "SFO → San Jose",
      "SFO → Oakland",
      "SFO → Napa Valley"
    ],
    meetGreetInfo: "Chauffeur meets you at baggage claim with name sign. Flight tracking included."
  },
  {
    code: "MIA",
    name: "Miami International Airport",
    city: "Miami",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service at Miami Airport. Luxury transfers to South Beach and South Florida.",
    commonRoutes: [
      "MIA → South Beach",
      "MIA → Brickell",
      "MIA → Miami Beach",
      "MIA → Fort Lauderdale",
      "MIA → Cruise Port",
      "MIA → Key West"
    ],
    meetGreetInfo: "Meet and greet at arrivals. Flight monitoring and complimentary wait time."
  },
  {
    code: "SEA",
    name: "Seattle-Tacoma International Airport",
    city: "Seattle",
    country: "USA",
    countrySlug: "usa",
    description: "Executive chauffeur service at SEA-TAC Airport. Professional transfers throughout Seattle.",
    commonRoutes: [
      "SEA → Downtown Seattle",
      "SEA → Bellevue",
      "SEA → Redmond",
      "SEA → Tacoma",
      "SEA → Cruise Terminal",
      "SEA → Microsoft Campus"
    ],
    meetGreetInfo: "Professional meet and greet in arrivals hall. Flight tracking included."
  },
  {
    code: "BOS",
    name: "Boston Logan International Airport",
    city: "Boston",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service at Logan Airport. Executive transfers to Boston and New England.",
    commonRoutes: [
      "BOS → Downtown Boston",
      "BOS → Cambridge",
      "BOS → Back Bay",
      "BOS → Financial District",
      "BOS → Harvard MIT",
      "BOS → Cape Cod"
    ],
    meetGreetInfo: "Chauffeur meets you at terminal arrivals with name sign. Flight monitoring provided."
  },
  {
    code: "BOS",
    name: "Boston Logan International Airport",
    city: "Boston",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service at Logan Airport. Executive transfers to Boston and New England.",
    commonRoutes: [
      "BOS → Downtown Boston",
      "BOS → Cambridge",
      "BOS → Back Bay",
      "BOS → Financial District",
      "BOS → Harvard MIT",
      "BOS → Cape Cod"
    ],
    meetGreetInfo: "Chauffeur meets you at terminal arrivals with name sign. Flight monitoring provided."
  },
  {
    code: "ATL",
    name: "Hartsfield-Jackson Atlanta International Airport",
    city: "Atlanta",
    country: "USA",
    countrySlug: "usa",
    description: "Executive chauffeur service at ATL Airport. Professional transfers throughout Atlanta metro area.",
    commonRoutes: [
      "ATL → Downtown Atlanta",
      "ATL → Buckhead",
      "ATL → Midtown",
      "ATL → Perimeter",
      "ATL → Convention Center",
      "ATL → Regional Georgia"
    ],
    meetGreetInfo: "Meet and greet in arrivals area with name sign. Flight monitoring and wait time included."
  },
  {
    code: "DFW",
    name: "Dallas/Fort Worth International Airport",
    city: "Dallas",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service at DFW Airport. Luxury transfers to Dallas, Fort Worth, and surrounding areas.",
    commonRoutes: [
      "DFW → Downtown Dallas",
      "DFW → Fort Worth",
      "DFW → Uptown Dallas",
      "DFW → Plano",
      "DFW → Arlington",
      "DFW → Love Field"
    ],
    meetGreetInfo: "Professional meet and greet at terminal arrivals. Flight tracking and complimentary wait time."
  },
  {
    code: "DEN",
    name: "Denver International Airport",
    city: "Denver",
    country: "USA",
    countrySlug: "usa",
    description: "Executive car service at Denver Airport. Professional transfers to downtown Denver and ski resorts.",
    commonRoutes: [
      "DEN → Downtown Denver",
      "DEN → LoDo District",
      "DEN → Tech Center",
      "DEN → Boulder",
      "DEN → Ski Resorts",
      "DEN → Colorado Springs"
    ],
    meetGreetInfo: "Chauffeur meets you at baggage claim with name sign. Flight monitoring included."
  },
  {
    code: "PHX",
    name: "Phoenix Sky Harbor International Airport",
    city: "Phoenix",
    country: "USA",
    countrySlug: "usa",
    description: "Luxury chauffeur service at Phoenix Airport. Premium transfers throughout Valley of the Sun.",
    commonRoutes: [
      "PHX → Downtown Phoenix",
      "PHX → Scottsdale",
      "PHX → Tempe",
      "PHX → Mesa",
      "PHX → Camelback Corridor",
      "PHX → Golf Resorts"
    ],
    meetGreetInfo: "Meet and greet at terminal arrivals. Flight tracking and wait time provided."
  },
  {
    code: "LAS",
    name: "Harry Reid International Airport (Las Vegas)",
    city: "Las Vegas",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service at Las Vegas Airport. Luxury transfers to Strip hotels and convention centers.",
    commonRoutes: [
      "LAS → Las Vegas Strip",
      "LAS → Downtown Vegas",
      "LAS → Convention Center",
      "LAS → Henderson",
      "LAS → Summerlin",
      "LAS → Casino Hotels"
    ],
    meetGreetInfo: "Professional meet and greet at baggage claim. Flight monitoring and complimentary wait time."
  },
  {
    code: "SAN",
    name: "San Diego International Airport",
    city: "San Diego",
    country: "USA",
    countrySlug: "usa",
    description: "Executive chauffeur service at San Diego Airport. Premium transfers throughout Southern California.",
    commonRoutes: [
      "SAN → Downtown San Diego",
      "SAN → La Jolla",
      "SAN → Gaslamp Quarter",
      "SAN → Coronado",
      "SAN → Del Mar",
      "SAN → Carlsbad"
    ],
    meetGreetInfo: "Chauffeur meets you at terminal arrivals with name sign. Flight tracking included."
  },
  {
    code: "TPA",
    name: "Tampa International Airport",
    city: "Tampa",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service at Tampa Airport. Professional transfers throughout Tampa Bay area.",
    commonRoutes: [
      "TPA → Downtown Tampa",
      "TPA → St. Petersburg",
      "TPA → Clearwater",
      "TPA → Westshore",
      "TPA → Cruise Port",
      "TPA → Beach Hotels"
    ],
    meetGreetInfo: "Meet and greet in arrivals area. Flight monitoring and wait time included."
  },
  {
    code: "MCO",
    name: "Orlando International Airport",
    city: "Orlando",
    country: "USA",
    countrySlug: "usa",
    description: "Executive car service at Orlando Airport. Luxury transfers to theme parks, hotels, and convention center.",
    commonRoutes: [
      "MCO → International Drive",
      "MCO → Disney World",
      "MCO → Universal Studios",
      "MCO → Convention Center",
      "MCO → Downtown Orlando",
      "MCO → Kissimmee"
    ],
    meetGreetInfo: "Professional meet and greet at terminal arrivals. Flight tracking and complimentary wait time."
  },
  {
    code: "SJC",
    name: "Norman Y. Mineta San Jose International Airport",
    city: "San Jose",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service at San Jose Airport. Executive transfers to Silicon Valley and Bay Area.",
    commonRoutes: [
      "SJC → Downtown San Jose",
      "SJC → Palo Alto",
      "SJC → Santa Clara",
      "SJC → Mountain View",
      "SJC → San Francisco",
      "SJC → Tech Campuses"
    ],
    meetGreetInfo: "Chauffeur meets you at baggage claim with name sign. Flight monitoring provided."
  },
  {
    code: "OAK",
    name: "Oakland International Airport",
    city: "Oakland",
    country: "USA",
    countrySlug: "usa",
    description: "Executive chauffeur service at Oakland Airport. Professional transfers to East Bay and San Francisco.",
    commonRoutes: [
      "OAK → Downtown Oakland",
      "OAK → San Francisco",
      "OAK → Berkeley",
      "OAK → Jack London Square",
      "OAK → Walnut Creek",
      "OAK → Silicon Valley"
    ],
    meetGreetInfo: "Meet and greet at terminal arrivals. Flight tracking and wait time included."
  },
  {
    code: "IAD",
    name: "Washington Dulles International Airport",
    city: "Washington DC",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service at Dulles Airport. Luxury transfers to DC, Virginia, and Maryland.",
    commonRoutes: [
      "IAD → Downtown DC",
      "IAD → Georgetown",
      "IAD → Arlington",
      "IAD → Reston",
      "IAD → Tysons Corner",
      "IAD → Capitol Hill"
    ],
    meetGreetInfo: "Professional meet and greet in arrivals hall. Flight monitoring and complimentary wait time."
  },
  {
    code: "DCA",
    name: "Ronald Reagan Washington National Airport",
    city: "Washington DC",
    country: "USA",
    countrySlug: "usa",
    description: "Executive car service at Reagan Airport. Premium transfers to downtown DC and surrounding areas.",
    commonRoutes: [
      "DCA → Downtown DC",
      "DCA → Capitol Hill",
      "DCA → Pentagon",
      "DCA → Alexandria",
      "DCA → Georgetown",
      "DCA → Embassy Row"
    ],
    meetGreetInfo: "Chauffeur meets you at baggage claim with name sign. Flight tracking included."
  },
  {
    code: "YYZ",
    name: "Toronto Pearson International Airport",
    city: "Toronto",
    country: "Canada",
    countrySlug: "canada",
    description: "Professional chauffeur service at Pearson Airport. Executive transfers to Toronto and GTA.",
    commonRoutes: [
      "YYZ → Downtown Toronto",
      "YYZ → Financial District",
      "YYZ → Mississauga",
      "YYZ → Markham",
      "YYZ → Niagara Falls",
      "YYZ → Hamilton"
    ],
    meetGreetInfo: "Meet and greet in arrivals area. Flight tracking and wait time included."
  },
  {
    code: "YVR",
    name: "Vancouver International Airport",
    city: "Vancouver",
    country: "Canada",
    countrySlug: "canada",
    description: "Luxury chauffeur service at Vancouver Airport. Premium transfers throughout BC.",
    commonRoutes: [
      "YVR → Downtown Vancouver",
      "YVR → Richmond",
      "YVR → Burnaby",
      "YVR → Surrey",
      "YVR → Whistler",
      "YVR → Victoria Ferry"
    ],
    meetGreetInfo: "Professional meet and greet at arrivals. Flight monitoring included."
  },
  {
    code: "LGW",
    name: "London Gatwick Airport",
    city: "London",
    country: "United Kingdom",
    countrySlug: "uk",
    description: "Executive car service at Gatwick Airport. Chauffeur-driven transfers to London and South England.",
    commonRoutes: [
      "LGW → Central London",
      "LGW → Brighton",
      "LGW → Heathrow Airport",
      "LGW → Canary Wharf",
      "LGW → Windsor",
      "LGW → Southampton"
    ],
    meetGreetInfo: "Chauffeur meets you in arrivals hall. Flight tracking and wait time provided."
  },
  {
    code: "AMS",
    name: "Amsterdam Schiphol Airport",
    city: "Amsterdam",
    country: "Netherlands",
    countrySlug: "netherlands",
    description: "Luxury chauffeur service at Schiphol Airport. Executive transfers throughout Netherlands.",
    commonRoutes: [
      "AMS → Amsterdam Centre",
      "AMS → Zuidas Business",
      "AMS → Rotterdam",
      "AMS → The Hague",
      "AMS → Utrecht",
      "AMS → Brussels"
    ],
    meetGreetInfo: "Professional meet and greet in arrivals plaza. Flight monitoring included."
  },
  {
    code: "ZRH",
    name: "Zurich Airport",
    city: "Zurich",
    country: "Switzerland",
    countrySlug: "switzerland",
    description: "Premium chauffeur service at Zurich Airport. Luxury transfers throughout Switzerland.",
    commonRoutes: [
      "ZRH → Zurich City",
      "ZRH → Financial District",
      "ZRH → Geneva",
      "ZRH → Lucerne",
      "ZRH → St. Moritz",
      "ZRH → Davos"
    ],
    meetGreetInfo: "Meet and greet at arrivals hall. Flight tracking and complimentary wait time."
  },
  {
    code: "MUC",
    name: "Munich Airport",
    city: "Munich",
    country: "Germany",
    countrySlug: "germany",
    description: "Executive chauffeur service at Munich Airport. Professional transfers throughout Bavaria.",
    commonRoutes: [
      "MUC → Munich City",
      "MUC → BMW Headquarters",
      "MUC → Messe München",
      "MUC → Garmisch",
      "MUC → Salzburg",
      "MUC → Nuremberg"
    ],
    meetGreetInfo: "Professional meet and greet in arrivals area. Flight monitoring provided."
  },
  {
    code: "BCN",
    name: "Barcelona El Prat Airport",
    city: "Barcelona",
    country: "Spain",
    countrySlug: "spain",
    description: "Luxury chauffeur service at Barcelona Airport. Premium transfers throughout Catalonia.",
    commonRoutes: [
      "BCN → Barcelona Centre",
      "BCN → Gothic Quarter",
      "BCN → 22@ District",
      "BCN → Cruise Port",
      "BCN → Sitges",
      "BCN → Costa Brava"
    ],
    meetGreetInfo: "Chauffeur meets you at terminal arrivals. Flight tracking and wait time included."
  },
  {
    code: "MXP",
    name: "Milan Malpensa Airport",
    city: "Milan",
    country: "Italy",
    countrySlug: "italy",
    description: "Executive car service at Malpensa Airport. Chauffeur-driven transfers to Milan and Northern Italy.",
    commonRoutes: [
      "MXP → Milan Centre",
      "MXP → Fashion District",
      "MXP → Lake Como",
      "MXP → Monza",
      "MXP → Turin",
      "MXP → Swiss Border"
    ],
    meetGreetInfo: "Professional meet and greet in arrivals hall. Flight monitoring included."
  },
  {
    code: "HND",
    name: "Tokyo Haneda Airport",
    city: "Tokyo",
    country: "Japan",
    countrySlug: "japan",
    description: "Premium chauffeur service at Haneda Airport. Luxury transfers to Tokyo city center and surrounding areas.",
    commonRoutes: [
      "HND → Tokyo Centre",
      "HND → Shibuya",
      "HND → Shinjuku",
      "HND → Roppongi",
      "HND → Marunouchi",
      "HND → Yokohama"
    ],
    meetGreetInfo: "Professional meet and greet in arrivals hall. Flight monitoring and complimentary wait time."
  },
  {
    code: "AUH",
    name: "Abu Dhabi International Airport",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    countrySlug: "uae",
    description: "Executive chauffeur service at Abu Dhabi Airport. Premium transfers throughout UAE capital.",
    commonRoutes: [
      "AUH → Abu Dhabi City",
      "AUH → Yas Island",
      "AUH → Saadiyat Island",
      "AUH → Dubai",
      "AUH → Business District",
      "AUH → Hotels"
    ],
    meetGreetInfo: "VIP meet and greet service at arrivals. Flight tracking and wait time provided."
  },
  {
    code: "MEL",
    name: "Melbourne Airport (Tullamarine)",
    city: "Melbourne",
    country: "Australia",
    countrySlug: "australia",
    description: "Premium chauffeur service at Melbourne Airport. Executive transfers to Melbourne CBD and Victoria.",
    commonRoutes: [
      "MEL → Melbourne CBD",
      "MEL → Docklands",
      "MEL → St Kilda",
      "MEL → South Yarra",
      "MEL → Business District",
      "MEL → Regional Victoria"
    ],
    meetGreetInfo: "Professional meet and greet in arrivals area. Flight monitoring and complimentary wait time."
  }
];

export function getAirportByCode(code: string): WorldwideAirport | undefined {
  return worldwideAirports.find(a => a.code === code);
}

export function getAirportsByCountry(countrySlug: string): WorldwideAirport[] {
  return worldwideAirports.filter(a => a.countrySlug === countrySlug);
}

export function getAirportsByCity(cityName: string): WorldwideAirport[] {
  return worldwideAirports.filter(a => a.city === cityName || a.city.includes(cityName));
}
