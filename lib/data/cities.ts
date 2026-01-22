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
