// Mock server client for homepage data
export const serverClient = {
  homepage: async () => {
    return {
      heroSlides: [
        {
          title: "Premium Chauffeur Service",
          subtitle: "Experience luxury transportation with Oregon Town Car",
          cta: "Book Now",
        },
      ],
      featuredServices: [
        "Airport Transfer",
        "Corporate Travel",
        "Special Events",
      ],
      featuredCities: [
        "Portland",
        "Eugene",
        "Salem",
      ],
      featuredFleet: [
        "Luxury Sedan",
        "Executive SUV",
        "Sprinter Van",
      ],
    };
  },
};
