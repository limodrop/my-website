export async function getHomepageData() {
  return {
    heroSlides: [
      {
        title: "Premium Chauffeur Service in Oregon",
        subtitle: "Airport, corporate, wine tours, and special events",
        image: "/images/hero-1.jpg",
        cta: "Book Now",
        ctaLink: "https://book.oregontowncar.com"
      },
      {
        title: "On-Time Airport Transportation",
        subtitle: "Professional drivers with flight tracking",
        image: "/images/hero-2.jpg",
        cta: "Reserve Your Ride",
        ctaLink: "https://book.oregontowncar.com"
      },
      {
        title: "Luxury Wine Tours",
        subtitle: "Explore Oregon's finest wineries in comfort",
        image: "/images/hero-3.jpg",
        cta: "Plan Your Tour",
        ctaLink: "/services/wine-tours"
      }
    ],
    featuredServices: ["airport-transportation", "corporate-travel", "wine-tours"],
    featuredCities: ["portland", "beaverton", "salem"],
    featuredFleet: ["luxury-sedan", "suv", "executive-van"]
  }
}
