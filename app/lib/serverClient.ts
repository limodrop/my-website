// Mock server client - replace with actual implementation
export const serverClient = {
  async homepage() {
    return {
      heroSlides: [
        {
          title: "Premium Chauffeur Service",
          subtitle: "Professional airport transfers and corporate travel",
          cta: "Book Now",
        },
      ],
      featuredServices: ["Airport Transportation", "Corporate Travel", "Wine Tours"],
      featuredCities: ["Portland", "Seattle", "San Francisco"],
      featuredFleet: ["Luxury Sedan", "Premium SUV", "Mercedes Sprinter"],
    };
  },

  async services() {
    return [
      { slug: "airport", name: "Airport Transportation", description: "Professional airport transfers" },
      { slug: "corporate", name: "Corporate Travel", description: "Executive business transportation" },
      { slug: "wine", name: "Wine Tours", description: "Premium wine country tours" },
      { slug: "long_distance", name: "Long Distance", description: "Comfortable long-distance travel" },
    ];
  },

  async fleet() {
    return [
      { slug: "sedan", name: "Luxury Sedan", description: "Premium executive sedans" },
      { slug: "suv", name: "Premium SUV", description: "Spacious luxury SUVs" },
      { slug: "sprinter", name: "Mercedes Sprinter", description: "Group transportation" },
    ];
  },

  async city(slug: string) {
    return {
      slug,
      name: slug.charAt(0).toUpperCase() + slug.slice(1),
      tagline: `Premium chauffeur services in ${slug}`,
      image: `https://via.placeholder.com/1200x600?text=${slug}`,
      primaryUseCases: [
        "Airport transfers",
        "Corporate transportation",
        "Special events",
        "Wine tours",
      ],
      seoDescription: `Experience professional chauffeur services in ${slug}. We provide premium airport transfers, corporate travel, and point-to-point transportation throughout the region.`,
    };
  },

  async country(slug: string) {
    return {
      slug,
      name: slug === "usa" ? "United States" : slug.charAt(0).toUpperCase() + slug.slice(1),
      tagline: `Professional chauffeur services across ${slug}`,
      primaryAirports: ["PDX", "SEA", "SFO", "LAX"],
      cities: [
        { slug: "portland", name: "Portland" },
        { slug: "seattle", name: "Seattle" },
        { slug: "san-francisco", name: "San Francisco" },
      ],
      seoDescription: `Leading chauffeur service provider in ${slug}. We serve major cities and airports with our fleet of luxury vehicles and professional drivers.`,
    };
  },
};
