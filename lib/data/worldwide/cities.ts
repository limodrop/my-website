export interface WorldwideCity {
  slug: string;
  name: string;
  country: string;
  countrySlug: string;
  description: string;
  airports: string[]; // airport codes
  popularRoutes: string[];
}

export const worldwideCities: WorldwideCity[] = [
  // USA
  {
    slug: "new-york",
    name: "New York",
    country: "USA",
    countrySlug: "usa",
    description: "Professional chauffeur service throughout Manhattan, Brooklyn, Queens, and the tri-state area. Airport transfers to JFK, LaGuardia, and Newark.",
    airports: ["JFK", "LGA", "EWR"],
    popularRoutes: [
      "Manhattan → JFK Airport",
      "JFK → Manhattan Hotels",
      "Corporate meetings Manhattan",
      "NYC → Hamptons",
      "LaGuardia → Downtown",
      "Newark Airport → Manhattan"
    ]
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    country: "USA",
    countrySlug: "usa",
    description: "Luxury transportation across LA, Beverly Hills, Santa Monica, and Southern California. LAX airport service and entertainment industry transportation.",
    airports: ["LAX", "BUR", "SNA"],
    popularRoutes: [
      "LAX → Beverly Hills",
      "LAX → Downtown LA",
      "Hollywood events",
      "Santa Monica → LAX",
      "Corporate travel LA",
      "Malibu wine tours"
    ]
  },
  {
    slug: "chicago",
    name: "Chicago",
    country: "USA",
    countrySlug: "usa",
    description: "Executive chauffeur service in downtown Chicago, suburbs, and throughout Chicagoland. O'Hare and Midway airport transfers.",
    airports: ["ORD", "MDW"],
    popularRoutes: [
      "O'Hare → Downtown Chicago",
      "Chicago → Naperville",
      "Corporate Loop meetings",
      "Midway Airport service",
      "Conferences McCormick Place",
      "North Shore transportation"
    ]
  },
  {
    slug: "miami",
    name: "Miami",
    country: "USA",
    countrySlug: "usa",
    description: "Premium transportation in Miami, South Beach, Brickell, and South Florida. Miami International Airport service and cruise port transfers.",
    airports: ["MIA", "FLL"],
    popularRoutes: [
      "MIA → South Beach",
      "Miami → Fort Lauderdale",
      "Cruise Port transfers",
      "Brickell corporate travel",
      "Miami Beach events",
      "Fort Lauderdale Airport"
    ]
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    country: "USA",
    countrySlug: "usa",
    description: "Professional chauffeur service in San Francisco, Silicon Valley, and Bay Area. SFO airport transfers and tech industry transportation.",
    airports: ["SFO", "OAK", "SJC"],
    popularRoutes: [
      "SFO → Downtown SF",
      "San Francisco → Palo Alto",
      "Silicon Valley corporate",
      "Oakland Airport service",
      "Napa Valley wine tours",
      "San Jose tech campuses"
    ]
  },
  {
    slug: "seattle",
    name: "Seattle",
    country: "USA",
    countrySlug: "usa",
    description: "Executive car service in Seattle, Bellevue, and Puget Sound region. SEA-TAC airport service and tech company transportation.",
    airports: ["SEA"],
    popularRoutes: [
      "SEA-TAC → Downtown Seattle",
      "Seattle → Bellevue",
      "Amazon campus transportation",
      "Microsoft Redmond",
      "Corporate travel Seattle",
      "Cruise terminal transfers"
    ]
  },
  {
    slug: "boston",
    name: "Boston",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service in Boston, Cambridge, and Greater Boston area. Logan Airport transfers and university transportation.",
    airports: ["BOS"],
    popularRoutes: [
      "Logan → Downtown Boston",
      "Boston → Cambridge",
      "Harvard MIT transportation",
      "Financial District meetings",
      "Cape Cod transfers",
      "Corporate Back Bay"
    ]
  },
  {
    slug: "washington-dc",
    name: "Washington DC",
    country: "USA",
    countrySlug: "usa",
    description: "Executive transportation in DC, Virginia, and Maryland. Reagan, Dulles, and BWI airport service. Government and corporate travel.",
    airports: ["DCA", "IAD", "BWI"],
    popularRoutes: [
      "Dulles → Downtown DC",
      "Reagan Airport transfers",
      "Capitol Hill meetings",
      "Pentagon Virginia",
      "BWI → DC",
      "Embassy transportation"
    ]
  },
  {
    slug: "san-diego",
    name: "San Diego",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service in San Diego and Southern California. Airport transfers, corporate travel, and coastal destinations.",
    airports: ["SAN"],
    popularRoutes: [
      "SAN → Downtown San Diego",
      "La Jolla transfers",
      "Corporate Gaslamp Quarter",
      "Tijuana border crossings",
      "Business meetings downtown",
      "Hotel transfers"
    ]
  },
  {
    slug: "dallas",
    name: "Dallas",
    country: "USA",
    countrySlug: "usa",
    description: "Executive car service in Dallas-Fort Worth metroplex. DFW Airport and corporate transportation for oil, tech, and finance sectors.",
    airports: ["DFW", "DAL"],
    popularRoutes: [
      "DFW → Downtown Dallas",
      "Dallas → Fort Worth",
      "Corporate Uptown",
      "Business District transfers",
      "Love Field Airport",
      "Regional DFW"
    ]
  },
  {
    slug: "houston",
    name: "Houston",
    country: "USA",
    countrySlug: "usa",
    description: "Professional chauffeur service in Houston and Gulf Coast. Airport transfers and energy sector executive transportation.",
    airports: ["IAH", "HOU"],
    popularRoutes: [
      "IAH → Downtown Houston",
      "Energy Corridor corporate",
      "Medical Center transfers",
      "Galleria business district",
      "Hobby Airport service",
      "Port of Houston"
    ]
  },
  {
    slug: "austin",
    name: "Austin",
    country: "USA",
    countrySlug: "usa",
    description: "Luxury transportation in Austin tech hub. Airport service and corporate travel for tech industry and events.",
    airports: ["AUS"],
    popularRoutes: [
      "AUS → Downtown Austin",
      "Tech campus transfers",
      "6th Street events",
      "Corporate Domain",
      "University of Texas",
      "Hill Country wine tours"
    ]
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    country: "USA",
    countrySlug: "usa",
    description: "Executive chauffeur service in Atlanta and Georgia. Hartsfield-Jackson Airport and corporate transportation.",
    airports: ["ATL"],
    popularRoutes: [
      "ATL → Downtown Atlanta",
      "Buckhead corporate",
      "Midtown business district",
      "Corporate Perimeter",
      "Convention Center",
      "Regional Georgia"
    ]
  },
  {
    slug: "denver",
    name: "Denver",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service in Denver and Colorado. Airport transfers and corporate travel with mountain resort connections.",
    airports: ["DEN"],
    popularRoutes: [
      "DEN → Downtown Denver",
      "Ski resort transfers",
      "Corporate LoDo",
      "Tech Center business",
      "Boulder connections",
      "Mountain destinations"
    ]
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    country: "USA",
    countrySlug: "usa",
    description: "Executive car service in Phoenix and Arizona. Sky Harbor Airport and corporate transportation throughout Valley.",
    airports: ["PHX"],
    popularRoutes: [
      "PHX → Downtown Phoenix",
      "Scottsdale transfers",
      "Corporate Camelback",
      "Tempe business district",
      "Mesa corporate travel",
      "Golf resort shuttles"
    ]
  },
  {
    slug: "las-vegas",
    name: "Las Vegas",
    country: "USA",
    countrySlug: "usa",
    description: "Luxury chauffeur service on the Las Vegas Strip. Airport transfers, conventions, and entertainment transportation.",
    airports: ["LAS"],
    popularRoutes: [
      "LAS → Las Vegas Strip",
      "Convention Center McCarran",
      "Casino hotel transfers",
      "Corporate meetings",
      "Show and event transport",
      "Henderson business district"
    ]
  },
  {
    slug: "orlando",
    name: "Orlando",
    country: "USA",
    countrySlug: "usa",
    description: "Professional chauffeur service in Orlando and Central Florida. Airport transfers, theme parks, and convention transportation.",
    airports: ["MCO"],
    popularRoutes: [
      "MCO → International Drive",
      "Theme park transfers",
      "Convention Center",
      "Disney World resorts",
      "Universal Studios",
      "Downtown Orlando corporate"
    ]
  },
  {
    slug: "tampa",
    name: "Tampa",
    country: "USA",
    countrySlug: "usa",
    description: "Executive car service in Tampa Bay and West Florida. Airport transfers and corporate transportation.",
    airports: ["TPA"],
    popularRoutes: [
      "TPA → Downtown Tampa",
      "St. Petersburg transfers",
      "Corporate Westshore",
      "Clearwater Beach",
      "Cruise port Tampa",
      "Business meetings downtown"
    ]
  },
  {
    slug: "san-jose",
    name: "San Jose",
    country: "USA",
    countrySlug: "usa",
    description: "Premium chauffeur service in San Jose and Silicon Valley. Airport transfers and tech industry transportation.",
    airports: ["SJC", "SFO"],
    popularRoutes: [
      "SJC → Downtown San Jose",
      "Tech campus shuttles",
      "Corporate meetings",
      "San Francisco connections",
      "Santa Clara Valley",
      "Innovation district"
    ]
  },
  {
    slug: "oakland",
    name: "Oakland",
    country: "USA",
    countrySlug: "usa",
    description: "Executive transportation in Oakland and East Bay. Airport service and corporate travel to San Francisco Bay Area.",
    airports: ["OAK", "SFO"],
    popularRoutes: [
      "OAK → Downtown Oakland",
      "San Francisco connections",
      "Corporate Jack London Square",
      "Berkeley transfers",
      "Business district",
      "Bay Area regional"
    ]
  },
  // Canada
  {
    slug: "toronto",
    name: "Toronto",
    country: "Canada",
    countrySlug: "canada",
    description: "Professional chauffeur service in Toronto, GTA, and Ontario. Pearson Airport transfers and corporate transportation.",
    airports: ["YYZ"],
    popularRoutes: [
      "Pearson → Downtown Toronto",
      "Toronto corporate travel",
      "Financial District meetings",
      "Mississauga transfers",
      "Niagara Falls tours",
      "Airport hotel shuttles"
    ]
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    country: "Canada",
    countrySlug: "canada",
    description: "Luxury transportation in Vancouver, BC, and Lower Mainland. YVR airport service and scenic transfers.",
    airports: ["YVR"],
    popularRoutes: [
      "YVR → Downtown Vancouver",
      "Vancouver corporate",
      "Whistler transfers",
      "Richmond service",
      "Cruise terminal",
      "Business meetings downtown"
    ]
  },
  {
    slug: "montreal",
    name: "Montreal",
    country: "Canada",
    countrySlug: "canada",
    description: "Executive car service in Montreal and Quebec. Trudeau Airport transfers and bilingual chauffeur service.",
    airports: ["YUL"],
    popularRoutes: [
      "Trudeau → Downtown Montreal",
      "Old Montreal events",
      "Corporate Ville-Marie",
      "Quebec City transfers",
      "Business travel Montreal",
      "Convention Center"
    ]
  },
  {
    slug: "calgary",
    name: "Calgary",
    country: "Canada",
    countrySlug: "calgary",
    description: "Professional chauffeur service in Calgary and Alberta. Airport transfers and energy sector transportation.",
    airports: ["YYC"],
    popularRoutes: [
      "Calgary Airport → Downtown",
      "Corporate Calgary",
      "Banff transfers",
      "Energy industry travel",
      "Business meetings downtown",
      "Hotel transfers"
    ]
  },
  // UK
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    countrySlug: "uk",
    description: "Premium chauffeur service throughout London and Home Counties. Heathrow, Gatwick, and City Airport transfers.",
    airports: ["LHR", "LGW", "LCY", "STN", "LTN"],
    popularRoutes: [
      "Heathrow → Central London",
      "Gatwick Airport transfers",
      "City business travel",
      "West End events",
      "Canary Wharf corporate",
      "Airport hotel shuttles"
    ]
  },
  {
    slug: "manchester",
    name: "Manchester",
    country: "United Kingdom",
    countrySlug: "uk",
    description: "Executive transportation in Manchester and Northwest England. Manchester Airport service and regional travel.",
    airports: ["MAN"],
    popularRoutes: [
      "Manchester Airport → City Centre",
      "Business travel Manchester",
      "Liverpool transfers",
      "Corporate MediaCityUK",
      "Regional meetings",
      "Hotel airport transfers"
    ]
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    country: "United Kingdom",
    countrySlug: "uk",
    description: "Luxury chauffeur service in Edinburgh and Scotland. Airport transfers and historic city transportation.",
    airports: ["EDI"],
    popularRoutes: [
      "Edinburgh Airport → City Centre",
      "Old Town New Town",
      "Business travel Edinburgh",
      "Glasgow transfers",
      "Corporate meetings",
      "Festival transportation"
    ]
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    country: "United Kingdom",
    countrySlug: "uk",
    description: "Professional car service in Birmingham and West Midlands. Airport transfers and regional corporate travel.",
    airports: ["BHX"],
    popularRoutes: [
      "Birmingham Airport → City Centre",
      "Corporate Birmingham",
      "NEC Convention Centre",
      "Regional business travel",
      "Stratford-upon-Avon",
      "Airport hotel shuttles"
    ]
  },
  // France
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    countrySlug: "france",
    description: "Luxury chauffeur service throughout Paris and Île-de-France. CDG and Orly airport transfers.",
    airports: ["CDG", "ORY", "BVA"],
    popularRoutes: [
      "Charles de Gaulle → Paris Centre",
      "Orly Airport transfers",
      "Champs-Élysées events",
      "Business La Défense",
      "Versailles tours",
      "Disneyland transfers"
    ]
  },
  {
    slug: "lyon",
    name: "Lyon",
    country: "France",
    countrySlug: "france",
    description: "Executive car service in Lyon and Rhône-Alpes region. Airport transfers and corporate travel.",
    airports: ["LYS"],
    popularRoutes: [
      "Lyon Airport → City Centre",
      "Business travel Lyon",
      "Part-Dieu corporate",
      "Regional transfers",
      "Wine region tours",
      "Geneva connections"
    ]
  },
  {
    slug: "marseille",
    name: "Marseille",
    country: "France",
    countrySlug: "france",
    description: "Premium chauffeur service in Marseille and Provence. Airport and cruise port transfers.",
    airports: ["MRS"],
    popularRoutes: [
      "Marseille Airport → City",
      "Cruise port transfers",
      "Aix-en-Provence",
      "Côte d'Azur travel",
      "Business meetings",
      "Regional Provence"
    ]
  },
  {
    slug: "nice",
    name: "Nice",
    country: "France",
    countrySlug: "france",
    description: "Luxury transportation on the French Riviera. Nice Airport and Côte d'Azur chauffeur service.",
    airports: ["NCE"],
    popularRoutes: [
      "Nice Airport → Promenade",
      "Monaco transfers",
      "Cannes events",
      "Saint-Tropez travel",
      "French Riviera tours",
      "Airport hotel shuttles"
    ]
  },
  // Germany
  {
    slug: "berlin",
    name: "Berlin",
    country: "Germany",
    countrySlug: "germany",
    description: "Professional chauffeur service in Berlin and Brandenburg. Airport transfers and government/corporate travel.",
    airports: ["BER", "TXL", "SXF"],
    popularRoutes: [
      "Berlin Airport → City Centre",
      "Government district travel",
      "Corporate Potsdamer Platz",
      "Messe Berlin conventions",
      "Business meetings",
      "Regional Brandenburg"
    ]
  },
  {
    slug: "munich",
    name: "Munich",
    country: "Germany",
    countrySlug: "germany",
    description: "Executive car service in Munich and Bavaria. Airport transfers and corporate transportation.",
    airports: ["MUC"],
    popularRoutes: [
      "Munich Airport → City Centre",
      "Corporate Munich",
      "BMW headquarters",
      "Trade fair Messe München",
      "Alps transfers",
      "Business travel Bavaria"
    ]
  },
  {
    slug: "frankfurt",
    name: "Frankfurt",
    country: "Germany",
    countrySlug: "germany",
    description: "Premium chauffeur service in Frankfurt financial district. Airport and business travel hub.",
    airports: ["FRA"],
    popularRoutes: [
      "Frankfurt Airport → City",
      "Financial district meetings",
      "Trade fair Messe",
      "Corporate transportation",
      "Regional connections",
      "Business hotels"
    ]
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    country: "Germany",
    countrySlug: "germany",
    description: "Luxury transportation in Hamburg and Northern Germany. Airport transfers and port city travel.",
    airports: ["HAM"],
    popularRoutes: [
      "Hamburg Airport → City Centre",
      "Port business travel",
      "Corporate HafenCity",
      "Regional Northern Germany",
      "Business meetings",
      "Trade fair transportation"
    ]
  },
  // Italy
  {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    countrySlug: "italy",
    description: "Premium chauffeur service in Rome and Lazio region. Fiumicino Airport and historic city transfers.",
    airports: ["FCO", "CIA"],
    popularRoutes: [
      "Fiumicino → Rome Centre",
      "Vatican events",
      "Business EUR district",
      "Historic centre tours",
      "Cruise port Civitavecchia",
      "Airport hotel shuttles"
    ]
  },
  {
    slug: "milan",
    name: "Milan",
    country: "Italy",
    countrySlug: "italy",
    description: "Executive car service in Milan fashion and business capital. Malpensa and Linate airport transfers.",
    airports: ["MXP", "LIN", "BGY"],
    popularRoutes: [
      "Malpensa → Milan Centre",
      "Fashion district events",
      "Corporate Porta Nuova",
      "Trade fair Rho",
      "Lake Como transfers",
      "Business travel Milan"
    ]
  },
  {
    slug: "venice",
    name: "Venice",
    country: "Italy",
    countrySlug: "italy",
    description: "Luxury chauffeur service to Venice mainland and regional travel. Airport and cruise port transfers.",
    airports: ["VCE"],
    popularRoutes: [
      "Venice Airport → Piazzale Roma",
      "Cruise terminal transfers",
      "Mainland Mestre hotels",
      "Regional Veneto",
      "Verona connections",
      "Business travel Venice"
    ]
  },
  {
    slug: "florence",
    name: "Florence",
    country: "Italy",
    countrySlug: "italy",
    description: "Premium transportation in Florence and Tuscany. Airport transfers and wine country tours.",
    airports: ["FLR", "PSA"],
    popularRoutes: [
      "Florence Airport → City Centre",
      "Pisa Airport transfers",
      "Tuscany wine tours",
      "Regional Chianti",
      "Business meetings Florence",
      "Art events"
    ]
  },
  // Spain
  {
    slug: "madrid",
    name: "Madrid",
    country: "Spain",
    countrySlug: "spain",
    description: "Executive chauffeur service in Madrid and central Spain. Barajas Airport and corporate travel.",
    airports: ["MAD"],
    popularRoutes: [
      "Barajas → Madrid Centre",
      "Business district AZCA",
      "Corporate meetings",
      "Regional Castilla",
      "IFEMA trade fair",
      "Hotel transfers"
    ]
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    country: "Spain",
    countrySlug: "spain",
    description: "Luxury transportation in Barcelona and Catalonia. El Prat Airport and Mediterranean travel.",
    airports: ["BCN"],
    popularRoutes: [
      "El Prat → Barcelona Centre",
      "Gothic Quarter events",
      "Corporate 22@ district",
      "Cruise port transfers",
      "Business travel Barcelona",
      "Coastal transfers"
    ]
  },
  {
    slug: "seville",
    name: "Seville",
    country: "Spain",
    countrySlug: "spain",
    description: "Premium chauffeur service in Seville and Andalusia. Airport and regional transfers.",
    airports: ["SVQ"],
    popularRoutes: [
      "Seville Airport → City Centre",
      "Business travel Seville",
      "Regional Andalusia",
      "Córdoba transfers",
      "Corporate meetings",
      "Cultural events"
    ]
  },
  {
    slug: "valencia",
    name: "Valencia",
    country: "Spain",
    countrySlug: "spain",
    description: "Executive car service in Valencia and Mediterranean coast. Airport and port transfers.",
    airports: ["VLC"],
    popularRoutes: [
      "Valencia Airport → City",
      "Port business travel",
      "Corporate Ciudad de las Artes",
      "Beach transfers",
      "Business meetings",
      "Regional connections"
    ]
  },
  // Switzerland
  {
    slug: "zurich",
    name: "Zurich",
    country: "Switzerland",
    countrySlug: "switzerland",
    description: "Luxury chauffeur service in Zurich financial district. Airport and corporate travel.",
    airports: ["ZRH"],
    popularRoutes: [
      "Zurich Airport → City Centre",
      "Financial district meetings",
      "Corporate Zurich West",
      "Davos WEF transfers",
      "Business travel",
      "Alpine resorts"
    ]
  },
  {
    slug: "geneva",
    name: "Geneva",
    country: "Switzerland",
    countrySlug: "switzerland",
    description: "Executive car service in Geneva international hub. Airport and diplomatic travel.",
    airports: ["GVA"],
    popularRoutes: [
      "Geneva Airport → City Centre",
      "UN diplomatic travel",
      "Corporate meetings",
      "CERN transfers",
      "Alpine ski resorts",
      "Cross-border France"
    ]
  },
  {
    slug: "basel",
    name: "Basel",
    country: "Switzerland",
    countrySlug: "switzerland",
    description: "Premium chauffeur service in Basel tri-border region. Airport and pharmaceutical industry travel.",
    airports: ["BSL"],
    popularRoutes: [
      "Basel Airport → City",
      "Pharma corporate travel",
      "Business meetings Basel",
      "Cross-border Germany France",
      "Trade fair Messe",
      "Regional connections"
    ]
  },
  {
    slug: "bern",
    name: "Bern",
    country: "Switzerland",
    countrySlug: "switzerland",
    description: "Executive transportation in Swiss capital. Government and corporate travel.",
    airports: ["BRN"],
    popularRoutes: [
      "Bern Airport → City Centre",
      "Government district travel",
      "Corporate meetings",
      "Zurich connections",
      "Regional Switzerland",
      "Business travel"
    ]
  },
  // Netherlands
  {
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    countrySlug: "netherlands",
    description: "Luxury chauffeur service in Amsterdam and Holland. Schiphol Airport and business travel.",
    airports: ["AMS"],
    popularRoutes: [
      "Schiphol → Amsterdam Centre",
      "Canal district events",
      "Corporate Zuidas",
      "RAI convention center",
      "Business meetings",
      "Regional Holland"
    ]
  },
  {
    slug: "rotterdam",
    name: "Rotterdam",
    country: "Netherlands",
    countrySlug: "netherlands",
    description: "Executive car service in Rotterdam port city. Airport and corporate travel.",
    airports: ["RTM"],
    popularRoutes: [
      "Rotterdam Airport → City",
      "Port business travel",
      "Corporate meetings",
      "Amsterdam connections",
      "Ahoy events",
      "Business Rotterdam"
    ]
  },
  {
    slug: "the-hague",
    name: "The Hague",
    country: "Netherlands",
    countrySlug: "netherlands",
    description: "Premium chauffeur service in The Hague government seat. Diplomatic and corporate travel.",
    airports: ["RTM"],
    popularRoutes: [
      "The Hague city transfers",
      "Government district",
      "International Court travel",
      "Scheveningen beach",
      "Corporate meetings",
      "Amsterdam airport connections"
    ]
  },
  // Belgium
  {
    slug: "brussels",
    name: "Brussels",
    country: "Belgium",
    countrySlug: "belgium",
    description: "Executive chauffeur service in Brussels EU capital. Zaventem Airport and diplomatic travel.",
    airports: ["BRU"],
    popularRoutes: [
      "Zaventem → Brussels Centre",
      "EU institutions travel",
      "NATO headquarters",
      "Corporate meetings",
      "Business district",
      "Regional Belgium"
    ]
  },
  {
    slug: "antwerp",
    name: "Antwerp",
    country: "Belgium",
    countrySlug: "belgium",
    description: "Luxury transportation in Antwerp port and diamond district. Airport and business travel.",
    airports: ["ANR"],
    popularRoutes: [
      "Antwerp Airport → City",
      "Diamond district business",
      "Port corporate travel",
      "Brussels connections",
      "Business meetings",
      "Regional transfers"
    ]
  },
  {
    slug: "bruges",
    name: "Bruges",
    country: "Belgium",
    countrySlug: "belgium",
    description: "Premium chauffeur service in historic Bruges. Airport transfers and regional travel.",
    airports: ["OST"],
    popularRoutes: [
      "Bruges city transfers",
      "Brussels Airport connections",
      "Historic centre events",
      "Regional Belgium",
      "Business meetings",
      "Cultural transportation"
    ]
  },
  // Australia
  {
    slug: "sydney",
    name: "Sydney",
    country: "Australia",
    countrySlug: "australia",
    description: "Professional chauffeur service in Sydney and NSW. Kingsford Smith Airport and harbour city travel.",
    airports: ["SYD"],
    popularRoutes: [
      "Sydney Airport → CBD",
      "Harbour Bridge area",
      "Business meetings Sydney",
      "Bondi Beach transfers",
      "Corporate North Sydney",
      "Regional NSW"
    ]
  },
  {
    slug: "melbourne",
    name: "Melbourne",
    country: "Australia",
    countrySlug: "australia",
    description: "Executive car service in Melbourne and Victoria. Tullamarine Airport and business travel.",
    airports: ["MEL"],
    popularRoutes: [
      "Melbourne Airport → CBD",
      "Business district meetings",
      "Corporate Docklands",
      "Sports events MCG",
      "Regional Victoria",
      "Great Ocean Road"
    ]
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    country: "Australia",
    countrySlug: "australia",
    description: "Premium chauffeur service in Brisbane and Queensland. Airport and corporate travel.",
    airports: ["BNE"],
    popularRoutes: [
      "Brisbane Airport → City",
      "Business travel Brisbane",
      "Corporate meetings CBD",
      "Gold Coast transfers",
      "Regional Queensland",
      "Convention center"
    ]
  },
  {
    slug: "perth",
    name: "Perth",
    country: "Australia",
    countrySlug: "australia",
    description: "Executive transportation in Perth and Western Australia. Airport and resource sector travel.",
    airports: ["PER"],
    popularRoutes: [
      "Perth Airport → City",
      "Business district meetings",
      "Corporate Perth CBD",
      "Mining industry travel",
      "Regional WA",
      "Fremantle transfers"
    ]
  },
  // Japan
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    countrySlug: "japan",
    description: "Luxury chauffeur service in Tokyo metropolitan area. Narita and Haneda airport transfers.",
    airports: ["NRT", "HND"],
    popularRoutes: [
      "Narita → Tokyo Centre",
      "Haneda Airport transfers",
      "Business Marunouchi",
      "Corporate Roppongi",
      "Hotel transfers Tokyo",
      "Mount Fuji tours"
    ]
  },
  {
    slug: "osaka",
    name: "Osaka",
    country: "Japan",
    countrySlug: "japan",
    description: "Executive car service in Osaka and Kansai region. Kansai Airport and business travel.",
    airports: ["KIX", "ITM"],
    popularRoutes: [
      "Kansai Airport → Osaka",
      "Business district Umeda",
      "Corporate meetings",
      "Kyoto connections",
      "Namba entertainment",
      "Regional Kansai"
    ]
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    countrySlug: "japan",
    description: "Premium chauffeur service in historic Kyoto. Airport connections and cultural travel.",
    airports: ["ITM"],
    popularRoutes: [
      "Kyoto city transfers",
      "Osaka Airport connections",
      "Temple district tours",
      "Business meetings Kyoto",
      "Cultural events",
      "Regional transfers"
    ]
  },
  {
    slug: "nagoya",
    name: "Nagoya",
    country: "Japan",
    countrySlug: "japan",
    description: "Executive transportation in Nagoya industrial hub. Chubu Airport and corporate travel.",
    airports: ["NGO"],
    popularRoutes: [
      "Chubu Airport → Nagoya",
      "Corporate meetings",
      "Business district Sakae",
      "Toyota City transfers",
      "Manufacturing industry",
      "Regional Tokai"
    ]
  },
  // UAE
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    countrySlug: "uae",
    description: "Luxury chauffeur service in Dubai. Dubai International Airport and premium travel.",
    airports: ["DXB", "DWC"],
    popularRoutes: [
      "DXB → Dubai Marina",
      "Downtown Dubai",
      "Business Bay corporate",
      "Palm Jumeirah hotels",
      "Abu Dhabi transfers",
      "DIFC meetings"
    ]
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    country: "United Arab Emirates",
    countrySlug: "uae",
    description: "Executive car service in Abu Dhabi UAE capital. Airport and government/corporate travel.",
    airports: ["AUH"],
    popularRoutes: [
      "Abu Dhabi Airport → City",
      "Corporate island",
      "Government district",
      "Dubai connections",
      "Business meetings",
      "Hotel transfers"
    ]
  },
  {
    slug: "sharjah",
    name: "Sharjah",
    country: "United Arab Emirates",
    countrySlug: "uae",
    description: "Premium chauffeur service in Sharjah and Northern Emirates. Airport and regional travel.",
    airports: ["SHJ"],
    popularRoutes: [
      "Sharjah Airport → City",
      "Dubai connections",
      "Business travel Sharjah",
      "Regional Northern Emirates",
      "Corporate meetings",
      "Cultural district"
    ]
  }
];

export function getCityBySlug(slug: string): WorldwideCity | undefined {
  return worldwideCities.find(c => c.slug === slug);
}

export function getCitiesByCountry(countrySlug: string): WorldwideCity[] {
  return worldwideCities.filter(c => c.countrySlug === countrySlug);
}
