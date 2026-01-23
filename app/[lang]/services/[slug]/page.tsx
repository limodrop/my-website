import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { SmartImage } from "@/app/components/SmartImage"
import { Button } from "@/app/ui/buttons/Button"
import { Icons } from "@/app/components/Icons"
import { ServiceDetailClient } from "./ServiceDetailClient"

interface Props {
  params: { slug: string; lang: string }
}

// Service-specific content
const serviceContent: Record<string, {
  overview: string[];
  benefits: string[];
  reassurance: string[];
}> = {
  "airport-transportation": {
    overview: [
      "Professional airport transportation designed for executives, families, and travelers who value punctuality and comfort. We track your flight in real-time and adjust pickup times automatically.",
      "No surge pricing. No waiting. No stress. Just reliable, luxury transportation when you need it most."
    ],
    benefits: [
      "Flight tracking for early or delayed arrivals",
      "Professional meet-and-greet service",
      "Fixed pricing — no surge",
      "On-time guarantee",
      "Licensed & insured chauffeurs",
      "Luggage assistance included"
    ],
    reassurance: [
      "Instant online booking",
      "Fixed pricing",
      "No waiting on the phone",
      "Professional chauffeur service (not rideshare)"
    ]
  },
  "corporate-travel": {
    overview: [
      "Executive transportation for business professionals who require discretion, punctuality, and consistent service. Ideal for meetings, conferences, roadshows, and client transport.",
      "Our chauffeurs understand the importance of timeliness and professionalism. Same vehicle, same driver when possible — so you can focus on your business, not logistics."
    ],
    benefits: [
      "Executive-level service",
      "Punctual, discreet chauffeurs",
      "Consistent vehicles for repeat bookings",
      "Flexible scheduling",
      "Wi-Fi and charging available",
      "Account billing options"
    ],
    reassurance: [
      "Instant online booking",
      "Fixed pricing",
      "Professional chauffeur service",
      "Trusted by local businesses"
    ]
  },
  "wine-tours": {
    overview: [
      "Luxury wine country tours through Oregon's Willamette Valley and beyond. Custom itineraries designed around your preferences — no rushing, no driving, just a premium experience.",
      "Our chauffeurs know the region and can recommend wineries based on your taste. Relax, enjoy the scenery, and let us handle the details."
    ],
    benefits: [
      "Custom itineraries",
      "No rushing, no driving",
      "Local knowledge and recommendations",
      "Private luxury experience",
      "All-day service",
      "Group rates available"
    ],
    reassurance: [
      "Instant online booking",
      "Fixed pricing",
      "Experienced local drivers",
      "Premium vehicles only"
    ]
  },
  "special-events": {
    overview: [
      "Elegant transportation for life's important moments — weddings, concerts, anniversaries, proms, and celebrations. We coordinate timing, ensure immaculate vehicles, and provide stress-free arrivals and departures.",
      "Whether it's a grand entrance or a quiet exit, we make sure transportation is one thing you don't have to worry about."
    ],
    benefits: [
      "Weddings, concerts, anniversaries",
      "Coordinated timing",
      "Immaculate vehicles",
      "Stress-free arrivals & departures",
      "Red carpet service available",
      "Flexible hours for your schedule"
    ],
    reassurance: [
      "Instant online booking",
      "Fixed pricing",
      "Professional chauffeur service",
      "Perfect for special moments"
    ]
  },
  "vip-arrival": {
    overview: [
      "VIP arrival service provides personal meet-and-greet, guided airport navigation, luggage assistance, and luxury chauffeur pickup — from terminal to destination.",
      "Skip the taxi line. Avoid the confusion. Arrive like a VIP with our white-glove concierge service."
    ],
    benefits: [
      "Personal meet-and-greet at gate",
      "Guided airport navigation",
      "Luggage assistance",
      "Luxury chauffeur pickup",
      "Time-saving and discreet",
      "Perfect for executives and special guests"
    ],
    reassurance: [
      "Instant online booking",
      "Fixed pricing",
      "Professional concierge service",
      "Licensed & insured"
    ]
  }
}

function ServiceJsonLd({ service }: { service: any }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    areaServed: "Oregon",
    provider: {
      "@type": "LocalBusiness",
      name: "Oregon Town Car",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export async function generateMetadata({ params }: Props) {
  const [seo, service] = await Promise.all([
    serverApi.getSeo(),
    serverApi.getService(params.slug),
  ])

  if (!service) return { title: "Service not found" }

  return {
    title: `${service.name} | ${seo.defaultTitle}`,
    description: service.description,
    openGraph: {
      title: service.name,
      description: service.description,
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const [service, cities, fleet, rules] = await Promise.all([
    serverApi.getService(params.slug),
    serverApi.getCities(),
    serverApi.getFleet(),
    serverApi.getLinkingRules(),
  ])

  if (!service) {
    return <div>Service not found</div>
  }

  const relevantCities = (rules.cityServices as any)[params.slug] || []
  const relevantFleet = (rules.serviceFleet as any)[params.slug] || []
  const content = serviceContent[params.slug] || { overview: [], benefits: [], reassurance: [] }

  return (
    <>
      <ServiceJsonLd service={service} />
      <ServiceDetailClient
        service={service}
        cities={cities}
        fleet={fleet}
        relevantCities={relevantCities}
        relevantFleet={relevantFleet}
        content={content}
        slug={params.slug}
      />
    </>
  )
}
