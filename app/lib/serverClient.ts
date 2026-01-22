// Mock serverClient for homepage data
export const serverClient = {
  homepage: async () => {
    return {
      heroSlides: [
        {
          title: "Premium Chauffeur Service",
          subtitle: "Professional transportation across 50 states and 13 countries",
          cta: "Book Now"
        }
      ],
      featuredServices: [
        "Airport Transfers",
        "Corporate Travel",
        "Point-to-Point Rides"
      ],
      featuredCities: [
        "Portland",
        "Seattle",
        "San Francisco"
      ],
      featuredFleet: [
        "Luxury Sedan",
        "SUV",
        "Executive Van"
      ]
    };
  }
};
