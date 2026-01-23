export async function getCities() {
  return [
    {
      slug: "portland",
      name: "Portland",
      state: "Oregon",
      description: "Premium chauffeur service in Portland and surrounding areas.",
      population: "650,000",
      zipCodes: ["97201", "97202", "97203", "97204", "97205"]
    },
    {
      slug: "beaverton",
      name: "Beaverton",
      state: "Oregon",
      description: "Professional car service serving Beaverton and the west metro area.",
      population: "98,000",
      zipCodes: ["97005", "97006", "97007", "97008"]
    },
    {
      slug: "lake-oswego",
      name: "Lake Oswego",
      state: "Oregon",
      description: "Luxury chauffeur service in Lake Oswego.",
      population: "40,000",
      zipCodes: ["97034", "97035"]
    },
    {
      slug: "tigard",
      name: "Tigard",
      state: "Oregon",
      description: "Professional transportation in Tigard.",
      population: "55,000",
      zipCodes: ["97223", "97224"]
    },
    {
      slug: "hillsboro",
      name: "Hillsboro",
      state: "Oregon",
      description: "Executive car service in Hillsboro and the west metro area.",
      population: "110,000",
      zipCodes: ["97123", "97124"]
    },
    {
      slug: "vancouver-wa",
      name: "Vancouver",
      state: "Washington",
      description: "Premium chauffeur service in Vancouver, Washington.",
      population: "190,000",
      zipCodes: ["98660", "98661", "98662", "98663", "98664", "98665"]
    },
    {
      slug: "willamette-valley",
      name: "Willamette Valley",
      state: "Oregon",
      description: "Wine country transportation in Willamette Valley.",
      population: "N/A",
      zipCodes: ["97101", "97115", "97128", "97148"]
    },
    {
      slug: "salem",
      name: "Salem",
      state: "Oregon",
      description: "Reliable transportation service in Oregon's capital city.",
      population: "175,000",
      zipCodes: ["97301", "97302", "97303", "97304", "97305"]
    },
    {
      slug: "eugene",
      name: "Eugene",
      state: "Oregon",
      description: "Executive car service in Eugene and Lane County.",
      population: "175,000",
      zipCodes: ["97401", "97402", "97403", "97404", "97405"]
    }
  ]
}

export async function getCityBySlug(slug: string) {
  const cities = await getCities()
  return cities.find(c => c.slug === slug) || null
}
