import { api } from "@/lib/api/apiClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"

interface Props {
  params: { slug: string }
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
    api.getSEO(),
    api.getService(params.slug),
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
    api.getService(params.slug),
    api.getCities(),
    api.getFleet(),
    api.getLinkingRules(),
  ])

  if (!service) return <div>Service not found</div>

  const rule = rules.services[params.slug]
  const serviceCities = rule ? cities.filter(c => rule.cities.includes(c.slug)) : []
  const serviceFleet = rule ? fleet.filter(v => rule.fleet.includes(v.slug)) : []

  return (
    <div className="container mx-auto py-12">
      <ServiceJsonLd service={service} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />
      <img src={service.image} className="rounded mb-6" />
      <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
      <p className="text-gray-700 text-lg">{service.description}</p>

      {serviceCities.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-4">Available In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCities.map(c => (
              <a key={c.id} href={`/cities/${c.slug}`} className="text-blue-600 hover:underline">
                {c.name}
              </a>
            ))}
          </div>
        </>
      )}

      {serviceFleet.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-4">Available Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceFleet.map(v => (
              <a key={v.id} href={`/fleet/${v.slug}`} className="border rounded p-4 hover:shadow-lg transition">
                <h3 className="font-semibold">{v.name}</h3>
                <p className="text-gray-600 text-sm">{v.description}</p>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
