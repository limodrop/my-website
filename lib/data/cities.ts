export async function getCities() {
  return [
    {
      id: 1,
      slug: "portland",
      name: "Portland",
      state: "Oregon",
      description: "Premium chauffeur service in Portland and surrounding areas.",
      population: "650,000",
      zipCodes: ["97201", "97202", "97203", "97204", "97205"]
    },
    {
      id: 2,
      slug: "beaverton",
      name: "Beaverton",
      state: "Oregon",
      description: "Professional car service serving Beaverton and the west metro area.",
      population: "98,000",
      zipCodes: ["97005", "97006", "97007", "97008"]
    },
    {
      id: 3,
      slug: "lake-oswego",
      name: "Lake Oswego",
      state: "Oregon",
      description: "Luxury chauffeur service in Lake Oswego.",
      population: "40,000",
      zipCodes: ["97034", "97035"]
    },
    {
      id: 4,
      slug: "tigard",
      name: "Tigard",
      state: "Oregon",
      description: "Professional transportation in Tigard.",
      population: "55,000",
      zipCodes: ["97223", "97224"]
    },
    {
      id: 5,
      slug: "hillsboro",
      name: "Hillsboro",
      state: "Oregon",
      description: "Executive car service in Hillsboro and the west metro area.",
      population: "110,000",
      zipCodes: ["97123", "97124"]
    },
    {
      id: 6,
      slug: "vancouver-wa",
      name: "Vancouver",
      state: "Washington",
      description: "Premium chauffeur service in Vancouver, Washington.",
      population: "190,000",
      zipCodes: ["98660", "98661", "98662", "98663", "98664", "98665"]
    },
    {
      id: 7,
      slug: "willamette-valley",
      name: "Willamette Valley",
      state: "Oregon",
      description: "Wine country transportation in Willamette Valley.",
      population: "N/A",
      zipCodes: ["97101", "97115", "97128", "97148"]
    },
    {
      id: 8,
      slug: "salem",
      name: "Salem",
      state: "Oregon",
      description: "Reliable transportation service in Oregon's capital city.",
      population: "175,000",
      zipCodes: ["97301", "97302", "97303", "97304", "97305"]
    },
    {
      id: 9,
      slug: "eugene",
      name: "Eugene",
      state: "Oregon",
      description: "Executive car service in Eugene and Lane County.",
      population: "175,000",
      zipCodes: ["97401", "97402", "97403", "97404", "97405"]
    },
    // Core Portland Metro (HIGH priority)
    {
      id: 10,
      slug: "gresham",
      name: "Gresham",
      state: "Oregon",
      description: "Professional chauffeur service in Gresham and East Portland metro.",
      population: "115,000",
      zipCodes: ["97030", "97080"]
    },
    {
      id: 11,
      slug: "tualatin",
      name: "Tualatin",
      state: "Oregon",
      description: "Premium transportation service in Tualatin and Southwest metro.",
      population: "28,000",
      zipCodes: ["97062"]
    },
    {
      id: 12,
      slug: "wilsonville",
      name: "Wilsonville",
      state: "Oregon",
      description: "Executive car service in Wilsonville and I-5 corridor.",
      population: "26,000",
      zipCodes: ["97070"]
    },
    {
      id: 13,
      slug: "milwaukie",
      name: "Milwaukie",
      state: "Oregon",
      description: "Reliable chauffeur service in Milwaukie and Clackamas County.",
      population: "21,000",
      zipCodes: ["97222", "97267"]
    },
    {
      id: 14,
      slug: "happy-valley",
      name: "Happy Valley",
      state: "Oregon",
      description: "Luxury transportation in Happy Valley and Southeast metro.",
      population: "25,000",
      zipCodes: ["97086"]
    },
    {
      id: 15,
      slug: "clackamas",
      name: "Clackamas",
      state: "Oregon",
      description: "Professional car service in Clackamas and I-205 corridor.",
      population: "8,000",
      zipCodes: ["97015"]
    },
    {
      id: 16,
      slug: "oregon-city",
      name: "Oregon City",
      state: "Oregon",
      description: "Premium chauffeur service in Oregon City and Clackamas County.",
      population: "38,000",
      zipCodes: ["97045"]
    },
    {
      id: 17,
      slug: "west-linn",
      name: "West Linn",
      state: "Oregon",
      description: "Executive transportation in West Linn and surrounding areas.",
      population: "27,000",
      zipCodes: ["97068"]
    },
    // Extended Oregon / Regional
    {
      id: 18,
      slug: "mcminnville",
      name: "McMinnville",
      state: "Oregon",
      description: "Wine country chauffeur service in McMinnville and Yamhill Valley.",
      population: "35,000",
      zipCodes: ["97128"]
    },
    {
      id: 19,
      slug: "newberg",
      name: "Newberg",
      state: "Oregon",
      description: "Premium wine tour transportation in Newberg and Yamhill County.",
      population: "25,000",
      zipCodes: ["97132"]
    },
    {
      id: 20,
      slug: "corvallis",
      name: "Corvallis",
      state: "Oregon",
      description: "Professional chauffeur service in Corvallis and Benton County.",
      population: "60,000",
      zipCodes: ["97330", "97331", "97333"]
    },
    {
      id: 21,
      slug: "bend",
      name: "Bend",
      state: "Oregon",
      description: "Luxury transportation and charter service in Bend and Central Oregon.",
      population: "105,000",
      zipCodes: ["97701", "97702", "97703"]
    },
    {
      id: 22,
      slug: "medford",
      name: "Medford",
      state: "Oregon",
      description: "Executive car service in Medford and Southern Oregon.",
      population: "88,000",
      zipCodes: ["97501", "97502", "97504"]
    },
    {
      id: 23,
      slug: "astoria",
      name: "Astoria",
      state: "Oregon",
      description: "Premium chauffeur service in Astoria and Oregon Coast.",
      population: "10,000",
      zipCodes: ["97103"]
    },
    {
      id: 24,
      slug: "hood-river",
      name: "Hood River",
      state: "Oregon",
      description: "Luxury transportation in Hood River and Columbia River Gorge.",
      population: "8,000",
      zipCodes: ["97031"]
    },
    // Washington side
    {
      id: 25,
      slug: "camas",
      name: "Camas",
      state: "Washington",
      description: "Professional chauffeur service in Camas and East Clark County.",
      population: "27,000",
      zipCodes: ["98607"]
    },
    {
      id: 26,
      slug: "washougal",
      name: "Washougal",
      state: "Washington",
      description: "Executive car service in Washougal and Columbia River area.",
      population: "16,000",
      zipCodes: ["98671"]
    },
    {
      id: 27,
      slug: "battle-ground",
      name: "Battle Ground",
      state: "Washington",
      description: "Premium transportation in Battle Ground and North Clark County.",
      population: "22,000",
      zipCodes: ["98604"]
    },
    {
      id: 28,
      slug: "ridgefield",
      name: "Ridgefield",
      state: "Washington",
      description: "Reliable chauffeur service in Ridgefield and I-5 corridor.",
      population: "11,000",
      zipCodes: ["98642"]
    }
  ]
}

export async function getCityBySlug(slug: string) {
  const cities = await getCities()
  return cities.find(c => c.slug === slug) || null
}
