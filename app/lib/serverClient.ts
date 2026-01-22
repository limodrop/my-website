// Mock server client for data fetching
export const serverClient = {
  homepage: async () => ({
    heroSlides: [
      {
        title: "Premium Chauffeur Service",
        subtitle: "Experience luxury travel with Oregon Town Car",
        cta: "Book Now",
      },
    ],
    featuredServices: ["Airport Transportation", "Corporate Travel", "Wine Tours"],
    featuredCities: ["Portland", "Beaverton", "Hillsboro"],
    featuredFleet: ["Luxury Sedan", "Premium SUV", "Mercedes Sprinter"],
  }),

  countries: async () => [
    { slug: "usa", name: "United States", cityCount: 50 },
    { slug: "canada", name: "Canada", cityCount: 10 },
    { slug: "uk", name: "United Kingdom", cityCount: 8 },
  ],

  country: async (slug: string) => ({
    name: slug === "usa" ? "United States" : "Canada",
    description: "Premium chauffeur service available in major cities.",
    cities: [
      { slug: "portland", name: "Portland" },
      { slug: "seattle", name: "Seattle" },
      { slug: "vancouver", name: "Vancouver" },
    ],
  }),
};
