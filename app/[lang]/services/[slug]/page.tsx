import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { SmartImage } from "@/app/components/SmartImage"
import { Button } from "@/app/ui/buttons/Button"
import { Icons } from "@/app/components/Icons"

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
    title: `${service.name} | ${seo.title}`,
    description: service.description,
    openGraph: {
      title: service.name,
      description: service.description,
      images: [service.image],
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

  const relevantCities = rules.cityServices[params.slug] || []
  const relevantFleet = rules.serviceFleet[params.slug] || []
  const content = serviceContent[params.slug] || { overview: [], benefits: [], reassurance: [] }

  return (
    <div className="space-y-12">
      <ServiceJsonLd service={service} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />

      {/* Hero Section */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)]">
          {service.name}
        </h1>
        <p className="text-lg sm:text-xl text-[var(--textMuted)] max-w-3xl">
          {service.description}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button
            variant="primary"
            as="a"
            href="https://book.oregontowncar.com"
            className="w-full sm:w-auto !px-8 !py-3.5 text-base sm:text-lg"
          >
            Book Now
          </Button>
          <Button
            variant="ghost"
            as="a"
            href="/contact"
            className="w-full sm:w-auto !px-8 !py-3.5 text-base sm:text-lg"
          >
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Service Overview */}
      {content.overview.length > 0 && (
        <section className="space-y-4 max-w-3xl">
          {content.overview.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg text-[var(--textMuted)] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {/* Key Benefits */}
      {content.benefits.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Key Benefits
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {content.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <Icons.checkCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[var(--text)]">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Recommended Vehicles */}
      {relevantFleet.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Recommended Vehicles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantFleet.map((vehicleSlug: string) => {
              const vehicle = fleet.find((v: any) => v.slug === vehicleSlug)
              return vehicle ? (
                <a
                  key={vehicleSlug}
                  href={`/fleet/${vehicleSlug}`}
                  className="
                    p-5 rounded-lg
                    bg-[var(--surface)]
                    border border-[var(--border)]
                    hover:border-[var(--primary)]
                    hover:shadow-md
                    transition-all duration-200
                  "
                >
                  <h3 className="font-semibold text-[var(--text)] mb-1">{vehicle.name}</h3>
                  {vehicle.seats && (
                    <p className="text-sm text-[var(--textMuted)]">{vehicle.seats} passengers</p>
                  )}
                </a>
              ) : null
            })}
          </div>
        </section>
      )}

      {/* Booking Reassurance */}
      {content.reassurance.length > 0 && (
        <section className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {content.reassurance.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icons.checkCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                <span className="text-sm text-[var(--text)]">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Available Cities */}
      {relevantCities.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Available in These Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {relevantCities.map((citySlug: string) => {
              const city = cities.find((c: any) => c.slug === citySlug)
              return city ? (
                <a
                  key={citySlug}
                  href={`/cities/${citySlug}`}
                  className="
                    p-4 rounded-lg text-center
                    bg-[var(--surface)]
                    border border-[var(--border)]
                    hover:border-[var(--primary)]
                    transition
                  "
                >
                  <span className="font-medium text-[var(--text)]">{city.name}</span>
                </a>
              ) : null
            })}
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg py-10 px-6 sm:px-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to Book?
        </h2>
        <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Book your chauffeur-driven ride online in under 60 seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            as="a"
            href="https://book.oregontowncar.com"
            className="w-full sm:w-auto bg-white text-blue-700 hover:bg-white/90 !px-8 !py-3.5 text-base sm:text-lg !font-semibold shadow-md"
          >
            Book Now
          </Button>
          <a
            href="/contact"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              text-white hover:text-white/90
              font-medium text-base sm:text-lg
              transition-colors
              px-4 py-2
            "
          >
            <Icons.messageCircle className="w-5 h-5" />
            <span>Get a Quote</span>
          </a>
        </div>
      </section>
    </div>
  )
}
