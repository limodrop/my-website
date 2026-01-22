export interface FleetVehicle {
  slug: string;
  name: string;
  description: string;
  seatingCapacity: number;
  imageUrl: string;
  features: string[];
}

export const fleetVehicles: FleetVehicle[] = [
  {
    slug: "cadillac-escalade",
    name: "Cadillac Escalade",
    description: "Premium full-size luxury SUV with spacious interior and advanced features.",
    seatingCapacity: 6,
    imageUrl: "https://oregontowncar.com/fleet/escalade.jpg",
    features: [
      "Leather seating",
      "Climate control",
      "WiFi available",
      "Premium sound system"
    ]
  },
  {
    slug: "sedan",
    name: "Luxury Sedan",
    description: "Executive sedan perfect for business travel and airport transfers.",
    seatingCapacity: 3,
    imageUrl: "https://oregontowncar.com/fleet/sedan.jpg",
    features: [
      "Leather interior",
      "Climate control",
      "Privacy glass"
    ]
  },
  {
    slug: "suv",
    name: "Premium SUV",
    description: "Spacious SUV ideal for families and group travel.",
    seatingCapacity: 6,
    imageUrl: "https://oregontowncar.com/fleet/suv.jpg",
    features: [
      "Ample luggage space",
      "Third-row seating",
      "Entertainment system"
    ]
  },
  {
    slug: "sprinter",
    name: "Mercedes Sprinter",
    description: "Executive van for larger groups and events.",
    seatingCapacity: 14,
    imageUrl: "https://oregontowncar.com/fleet/sprinter.jpg",
    features: [
      "Group seating",
      "Entertainment system",
      "Climate zones",
      "Luggage capacity"
    ]
  }
];

export function getFleetVehicleBySlug(slug: string): FleetVehicle | undefined {
  return fleetVehicles.find(vehicle => vehicle.slug === slug);
}
