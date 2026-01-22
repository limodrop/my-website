export async function getHomepageData() {
  return {
    heroSlides: [
      {
        title: "Premium Chauffeur Service in Oregon",
        subtitle: "Airport, corporate, wine tours, and special events",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
        cta: "Book Now",
        ctaLink: "https://book.oregontowncar.com"
      },
      {
        title: "On-Time Airport Transportation",
        subtitle: "Professional drivers with flight tracking",
        image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1200&q=80",
        cta: "Reserve Your Ride",
        ctaLink: "https://book.oregontowncar.com"
      },
      {
        title: "Luxury Wine Tours",
        subtitle: "Explore Oregon's finest wineries in comfort",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80",
        cta: "Plan Your Tour",
        ctaLink: "/services/wine-tours"
      }
    ],
    featuredServices: ["airport-transportation", "corporate-travel", "wine-tours"],
    featuredCities: ["portland", "beaverton", "salem"],
    featuredFleet: ["luxury-sedan", "suv", "executive-van"]
  }
}
