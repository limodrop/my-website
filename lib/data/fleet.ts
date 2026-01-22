export async function getFleet() {
  return [
    {
      slug: "luxury-sedan",
      name: "Luxury Sedan",
      make: "Mercedes-Benz",
      model: "S-Class",
      year: 2024,
      capacity: 3,
      luggage: 3,
      description: "The pinnacle of luxury and comfort for executive travel.",
      features: ["Leather interior", "Climate control", "Premium sound system", "Wi-Fi"],
      image: "/images/fleet/sedan.jpg",
      rate: "$85/hour"
    },
    {
      slug: "suv",
      name: "Luxury SUV",
      make: "Cadillac",
      model: "Escalade",
      year: 2024,
      capacity: 6,
      luggage: 6,
      description: "Spacious and elegant for group transportation.",
      features: ["Third-row seating", "Ample cargo space", "Premium amenities", "Entertainment system"],
      image: "/images/fleet/suv.jpg",
      rate: "$95/hour"
    },
    {
      slug: "executive-van",
      name: "Executive Van",
      make: "Mercedes-Benz",
      model: "Sprinter",
      year: 2024,
      capacity: 14,
      luggage: 12,
      description: "Perfect for corporate events and group outings.",
      features: ["Conference seating", "Wi-Fi", "USB charging ports", "Climate zones"],
      image: "/images/fleet/van.jpg",
      rate: "$120/hour"
    }
  ]
}

export async function getVehicleBySlug(slug: string) {
  const fleet = await getFleet()
  return fleet.find(v => v.slug === slug) || null
}
