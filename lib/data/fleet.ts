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
      slug: "black-suv",
      name: "Black SUV",
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
    },
    {
      slug: "mini-coach",
      name: "Mini Coach",
      make: "Mercedes-Benz",
      model: "Sprinter Coach",
      year: 2024,
      capacity: 30,
      luggage: 20,
      description: "Ideal for corporate groups, special events, and large party transportation.",
      features: ["Spacious seating", "Climate control", "Premium amenities", "Large luggage capacity"],
      image: "/images/fleet/mini-coach.jpg",
      rate: "$150/hour"
    }
  ]
}

export async function getVehicleBySlug(slug: string) {
  const fleet = await getFleet()
  return fleet.find(v => v.slug === slug) || null
}
