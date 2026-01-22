import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"

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
    return <div className="container mx-auto py-12">Service not found</div>
  }

  const relevantCities = rules.cityServices[params.slug] || []
  const relevantFleet = rules.serviceFleet[params.slug] || []

  return (
    <div className="container mx-auto py-12 space-y-8">
      <ServiceJsonLd service={service} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <h1 className="text-4xl font-bold">{service.name}</h1>
      <img src={service.image} alt={service.name} className="rounded-lg w-full max-w-2xl" />
      <p className="text-lg">{service.description}</p>

      {relevantCities.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Available in these cities</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relevantCities.map((citySlug) => {
              const city = cities.find((c) => c.slug === citySlug)
              return city ? (
                <li key={citySlug}>
                  <a href={`/cities/${citySlug}`} className="text-blue-600 hover:underline">
                    {city.name}
                  </a>
                </li>
              ) : null
            })}
          </ul>
        </section>
      )}

      {relevantFleet.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recommended vehicles</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relevantFleet.map((vehicleSlug) => {
              const vehicle = fleet.find((v) => v.slug === vehicleSlug)
              return vehicle ? (
                <li key={vehicleSlug} className="border rounded-lg p-4">
                  <a href={`/fleet/${vehicleSlug}`} className="text-blue-600 hover:underline">
                    {vehicle.name}
                  </a>
                </li>
              ) : null
            })}
          </ul>
        </section>
      )}
    </div>
  )
}
