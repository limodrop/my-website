// Mock server client for fetching data
// In a real application, this would connect to a CMS or database

export const serverClient = {
  async homepage() {
    return {
      heroSlides: [
        {
          title: "Premium Chauffeur Service",
          subtitle: "Experience luxury travel with professional drivers",
          cta: "Book Now"
        }
      ],
      featuredServices: [
        { slug: "airport-transfer", title: "Airport Transfer", tagline: "Stress-free travel to and from the airport" },
        { slug: "corporate-travel", title: "Corporate Travel", tagline: "Professional transportation for business executives" },
        { slug: "point-to-point", title: "Point to Point", tagline: "Direct transportation anywhere you need to go" }
      ],
      featuredCities: [
        { slug: "portland", name: "Portland", description: "Premium chauffeur service in Portland, OR" },
        { slug: "seattle", name: "Seattle", description: "Luxury transportation in Seattle, WA" },
        { slug: "san-francisco", name: "San Francisco", description: "Executive car service in San Francisco, CA" }
      ],
      featuredFleet: [
        { slug: "mercedes-s-class", name: "Mercedes S-Class", tagline: "The pinnacle of luxury sedans" },
        { slug: "cadillac-escalade", name: "Cadillac Escalade", tagline: "Spacious luxury for groups" },
        { slug: "mercedes-sprinter", name: "Mercedes Sprinter", tagline: "Ultimate group luxury" }
      ]
    };
  },

  async service(slug: string) {
    const services: Record<string, any> = {
      "airport-transfer": {
        title: "Airport Transfer",
        tagline: "Stress-free travel to and from the airport",
        description: "Our professional chauffeurs ensure you arrive on time, every time. We monitor flight schedules and adjust pickup times accordingly.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=600&fit=crop",
        benefits: [
          "Flight monitoring and real-time adjustments",
          "Meet & greet service",
          "Luggage assistance",
          "24/7 availability"
        ]
      },
      "corporate-travel": {
        title: "Corporate Travel",
        tagline: "Professional transportation for business executives",
        description: "Impress clients and ensure executives arrive refreshed and on time. Our corporate service includes amenities and reliability that match your business standards.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=600&fit=crop",
        benefits: [
          "Dedicated account management",
          "Monthly billing options",
          "Premium vehicle selection",
          "Confidentiality guaranteed"
        ]
      },
      "point-to-point": {
        title: "Point to Point",
        tagline: "Direct transportation anywhere you need to go",
        description: "Whether it's a special event, restaurant reservation, or personal errand, we provide seamless point-to-point transportation with style and comfort.",
        image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1200&h=600&fit=crop",
        benefits: [
          "Flexible scheduling",
          "Transparent pricing",
          "Professional drivers",
          "Comfortable vehicles"
        ]
      }
    };

    return services[slug] || {
      title: slug,
      tagline: "Premium chauffeur service",
      description: "Experience the finest in professional transportation.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=600&fit=crop",
      benefits: ["Professional service", "Luxury vehicles", "Experienced drivers"]
    };
  },

  async fleetVehicle(slug: string) {
    const vehicles: Record<string, any> = {
      "mercedes-s-class": {
        name: "Mercedes S-Class",
        tagline: "The pinnacle of luxury sedans",
        description: "The Mercedes S-Class represents the ultimate in automotive luxury and comfort. Perfect for executives and VIP clients who demand the very best.",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&h=600&fit=crop",
        passengers: 3,
        bags: 2,
        useCases: [
          "Executive transportation",
          "Airport transfers",
          "Special occasions",
          "VIP client meetings"
        ]
      },
      "cadillac-escalade": {
        name: "Cadillac Escalade",
        tagline: "Spacious luxury for groups",
        description: "The Escalade combines American luxury with impressive space. Ideal for small groups or families who want to travel together in style and comfort.",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=600&fit=crop",
        passengers: 6,
        bags: 4,
        useCases: [
          "Group transportation",
          "Family travel",
          "Multiple passengers with luggage",
          "Corporate group events"
        ]
      },
      "mercedes-sprinter": {
        name: "Mercedes Sprinter",
        tagline: "Ultimate group luxury",
        description: "Our Mercedes Sprinter vans offer the most space and amenities for larger groups. Perfect for corporate events, weddings, or group outings.",
        image: "https://images.unsplash.com/photo-1562516155-e0c1ee44059b?w=1200&h=600&fit=crop",
        passengers: 14,
        bags: 8,
        useCases: [
          "Corporate events",
          "Wedding parties",
          "Airport group transfers",
          "Wine tours",
          "Sports events"
        ]
      }
    };

    return vehicles[slug] || {
      name: slug,
      tagline: "Premium luxury vehicle",
      description: "Experience comfort and style with our premium fleet.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=600&fit=crop",
      passengers: 4,
      bags: 3,
      useCases: ["Professional transportation", "Airport transfers", "Special events"]
    };
  }
};
