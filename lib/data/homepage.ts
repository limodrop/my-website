export async function getHomepageData() {
  return {
    heroSlides: [
      {
        title: "Premium Chauffeur Service in Oregon",
        subtitle: "Airport, corporate, wine tours, and special events",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80",
        cta: "Book Now",
        ctaLink: "https://book.oregontowncar.com"
      },
      {
        title: "On-Time Airport Transportation",
        subtitle: "Professional drivers with flight tracking",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80",
        cta: "Reserve Your Ride",
        ctaLink: "https://book.oregontowncar.com"
      },
      {
        title: "Luxury Wine Tours",
        subtitle: "Explore Oregon's finest wineries in comfort",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80",
        cta: "Plan Your Tour",
        ctaLink: "/services/wine-tours"
      }
    ],
    featuredServices: ["airport-transportation", "corporate-travel", "wine-tours"],
    featuredCities: ["portland", "beaverton", "salem"],
    featuredFleet: ["luxury-sedan", "suv", "executive-van"]
  }
}
