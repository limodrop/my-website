import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { SmartImage } from "@/app/components/SmartImage"

interface Props {
  params: { slug: string; lang: string }
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

  return (
    <div className="space-y-8">
      <ServiceJsonLd service={service} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <h1 className="text-4xl font-semibold text-[var(--text)]">{service.name}</h1>
      
      {service.image && (
        <SmartImage 
          src={service.image} 
          alt={service.name} 
          className="rounded-lg w-full max-w-2xl shadow-sm" 
        />
      )}
      
      <p className="text-lg text-[var(--textMuted)] leading-relaxed">{service.description}</p>

      {relevantCities.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
            Available in these cities
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

      {relevantFleet.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
            Recommended vehicles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantFleet.map((vehicleSlug: string) => {
              const vehicle = fleet.find((v: any) => v.slug === vehicleSlug)
              return vehicle ? (
                <a
                  key={vehicleSlug}
                  href={`/fleet/${vehicleSlug}`}
                  className="
                    p-4 rounded-lg
                    bg-[var(--surface)]
                    border border-[var(--border)]
                    hover:border-[var(--primary)]
                    transition
                  "
                >
                  <h3 className="font-medium text-[var(--text)]">{vehicle.name}</h3>
                </a>
              ) : null
            })}
          </div>
        </section>
      )}
    </div>
  )
}
