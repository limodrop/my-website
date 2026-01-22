export async function getServices() {
  return [
    {
      slug: "airport-transportation",
      name: "Airport Transportation",
      description: "Professional airport transfers with flight tracking and meet-and-greet service.",
      icon: "✈️",
      price: "From $85",
      features: ["Flight tracking", "Meet and greet", "Luggage assistance", "24/7 availability"]
    },
    {
      slug: "corporate-travel",
      name: "Corporate Travel",
      description: "Executive transportation for business meetings, conferences, and events.",
      icon: "💼",
      price: "From $95",
      features: ["Professional drivers", "Wi-Fi available", "Flexible scheduling", "Account billing"]
    },
    {
      slug: "wine-tours",
      name: "Wine Tours",
      description: "Luxury wine country tours through Oregon's premier vineyards.",
      icon: "🍷",
      price: "From $150",
      features: ["Custom itineraries", "Knowledgeable drivers", "All-day service", "Group rates"]
    },
    {
      slug: "special-events",
      name: "Special Events",
      description: "Elegant transportation for weddings, proms, and special occasions.",
      icon: "🎉",
      price: "From $120",
      features: ["Red carpet service", "Champagne available", "Photo stops", "Flexible hours"]
    }
  ]
}

export async function getServiceBySlug(slug: string) {
  const services = await getServices()
  return services.find(s => s.slug === slug) || null
}
