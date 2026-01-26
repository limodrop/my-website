import { FleetVehicleContent } from "@/app/components/fleet/FleetVehicleTemplate";

export const fleetVehicleContent: Record<string, FleetVehicleContent> = {
  "luxury-sedan": {
    name: "Luxury Sedan",
    subtitle: "Executive comfort for airport & corporate travel",
    passengers: 2,
    luggage: "2 large bags",
    recommendedFor: ["Airport", "Corporate", "Executive Travel"],
    bestFor: [
      "Airport transfers",
      "Corporate travel",
      "Executive meetings",
      "Date night / special events",
      "Business dinners",
      "Solo or couple luxury travel"
    ],
    features: [
      "Premium leather seating",
      "Climate control",
      "Privacy glass",
      "Professional chauffeur",
      "Flight tracking included",
      "Fixed pricing",
      "Spacious trunk",
      "USB charging ports",
      "Quiet, smooth ride",
      "Complimentary bottled water",
      "On-time guarantee",
      "Ideal for business travel",
      "Luxury interior finishes",
      "Ample legroom"
    ],
    typicalTrips: [
      "PDX Airport → Downtown Portland hotels",
      "Corporate meetings & executive travel",
      "Special events & date nights",
      "Professional client transportation",
      "Airport departures with luggage"
    ],
    image: "/images/fleet/sedan.jpg"
  },
  "black-suv": {
    name: "Black SUV",
    subtitle: "Spacious luxury for groups & families",
    passengers: 6,
    luggage: "6 large bags",
    recommendedFor: ["Groups", "Families", "Airport", "Corporate Teams"],
    bestFor: [
      "Airport group transfers",
      "Corporate teams",
      "Families with luggage",
      "Ski trips & outdoor adventures",
      "Wine tours",
      "Special events"
    ],
    features: [
      "Spacious cabin for 6 passengers",
      "Premium leather seating",
      "Smooth, comfortable ride",
      "Extra cargo space",
      "Climate control",
      "Privacy glass",
      "Professional chauffeur",
      "Flight tracking",
      "Fixed pricing",
      "USB charging ports",
      "Perfect for luggage-heavy trips",
      "On-time guarantee"
    ],
    typicalTrips: [
      "PDX Airport → Portland (group pickups)",
      "Corporate team transportation",
      "Family airport transfers with luggage",
      "Willamette Valley wine tours",
      "Weddings & special events"
    ],
    image: "/images/fleet/suv.jpg"
  },
  "executive-van": {
    name: "Executive Van",
    subtitle: "Professional group transport for up to 14 passengers",
    passengers: 14,
    luggage: "14 large bags",
    recommendedFor: ["Large Groups", "Events", "Conferences", "Weddings"],
    bestFor: [
      "Group airport transfers",
      "Wedding transportation",
      "Corporate conferences",
      "Sports teams & events",
      "Wine country group tours",
      "Airport shuttles"
    ],
    features: [
      "High-capacity seating for 14",
      "Comfortable, spacious interior",
      "Professional group transport",
      "Multiple luggage compartments",
      "Climate control",
      "Professional chauffeur",
      "Fixed group pricing",
      "Coordinated timing",
      "USB charging available",
      "Perfect for events",
      "On-time guarantee",
      "Group-friendly boarding"
    ],
    typicalTrips: [
      "Group airport transfers to/from PDX",
      "Wedding party transportation",
      "Corporate conference shuttles",
      "Willamette Valley wine tours (groups)",
      "Special events & celebrations"
    ],
    image: "/images/fleet/van.jpg"
  },
  "mini-coach": {
    name: "Mini Coach",
    subtitle: "Premium shuttle for groups of 20-27 passengers",
    passengers: 27,
    luggage: "20 large bags",
    recommendedFor: ["Large Groups", "Shuttles", "Corporate Events", "Weddings"],
    bestFor: [
      "Large group airport transfers",
      "Corporate event shuttles",
      "Wedding guest transportation",
      "Conference & convention shuttles",
      "Stadium & concert events",
      "Large wine tour groups"
    ],
    features: [
      "High-capacity seating (20-30 passengers)",
      "Spacious, comfortable interior",
      "Professional coach-style seating",
      "Large luggage capacity",
      "Climate control",
      "Professional driver",
      "Fixed group pricing",
      "Coordinated timing & logistics",
      "Perfect for large events",
      "On-time guarantee",
      "Group-friendly boarding",
      "Ideal for shuttles"
    ],
    typicalTrips: [
      "Large group PDX airport transfers",
      "Corporate conference shuttles",
      "Wedding guest transportation",
      "Stadium & concert events",
      "Large wine country group tours"
    ],
    image: "/images/fleet/mini-coach.jpg"
  }
};
