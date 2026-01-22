import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { SmartImage } from "@/app/components/SmartImage"

interface Props {
  params: { slug: string; lang: string }
}

function FleetJsonLd({ vehicle }: { vehicle: any }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: vehicle.name,
    description: vehicle.description,
    image: vehicle.image,
    brand: "Oregon Town Car",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Seats",
        value: vehicle.seats,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export async function generateMetadata({ params }: Props) {
  const [seo, vehicle] = await Promise.all([
    serverApi.getSeo(),
    serverApi.getVehicle(params.slug),
  ])

  if (!vehicle) return { title: "Vehicle not found" }

  return {
    title: `${vehicle.name} | ${seo.title}`,
    description: vehicle.description,
    openGraph: {
      title: vehicle.name,
      description: vehicle.description,
      images: [vehicle.image],
    },
  }
}

export default async function FleetDetailPage({ params }: Props) {
  const [vehicle, services, cities, rules] = await Promise.all([
    serverApi.getVehicle(params.slug),
    serverApi.getServices(),
    serverApi.getCities(),
    serverApi.getLinkingRules(),
  ])

  if (!vehicle) {
    return <div>Vehicle not found</div>
  }

  const relevantServices = rules.serviceFleet
    ? Object.keys(rules.serviceFleet).filter((serviceSlug) =>
        rules.serviceFleet[serviceSlug].includes(params.slug)
      )
    : []

  const relevantCities = rules.cityFleet[params.slug] || []

  return (
    <div className="space-y-8">
      <FleetJsonLd vehicle={vehicle} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Fleet", href: "/fleet" },
          { label: vehicle.name, href: `/fleet/${vehicle.slug}` },
        ]}
      />

      <h1 className="text-4xl font-semibold text-[var(--text)]">{vehicle.name}</h1>
      
      {vehicle.image && (
        <SmartImage 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="rounded-lg w-full max-w-2xl shadow-sm" 
        />
      )}
      
      <p className="text-lg text-[var(--textMuted)] leading-relaxed">{vehicle.description}</p>

      {vehicle.seats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">Capacity</h3>
            <p className="text-[var(--textMuted)]">{vehicle.seats} passengers</p>
          </div>
          {vehicle.features && vehicle.features.length > 0 && (
            <div className="p-6 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">Features</h3>
              <ul className="list-disc ml-6 text-[var(--textMuted)]">
                {vehicle.features.slice(0, 3).map((feature: string, idx: number) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {relevantServices.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
            Ideal for these services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantServices.map((serviceSlug) => {
              const service = services.find((s: any) => s.slug === serviceSlug)
              return service ? (
                <a
                  key={serviceSlug}
                  href={`/services/${serviceSlug}`}
                  className="
                    p-4 rounded-lg
                    bg-[var(--surface)]
                    border border-[var(--border)]
                    hover:border-[var(--primary)]
                    transition
                  "
                >
                  <h3 className="font-medium text-[var(--text)]">{service.name}</h3>
                </a>
              ) : null
            })}
          </div>
        </section>
      )}
    </div>
  )
}
