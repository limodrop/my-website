// Mock server client for homepage data
export const serverClient = {
  async homepage() {
    return {
      heroSlides: [
        {
          title: "Premium Chauffeur Service",
          subtitle: "Experience luxury transportation with professional drivers worldwide",
          cta: "Book Now"
        }
      ],
      featuredServices: [
        "Airport Transfers",
        "Corporate Travel",
        "City Tours"
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
