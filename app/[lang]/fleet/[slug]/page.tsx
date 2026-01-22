import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"

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
    return <div className="container mx-auto py-12">Vehicle not found</div>
  }

  const relevantServices = rules.serviceFleet
    ? Object.keys(rules.serviceFleet).filter((serviceSlug) =>
        rules.serviceFleet[serviceSlug].includes(params.slug)
      )
    : []

  const relevantCities = rules.cityFleet[params.slug] || []

  return (
    <div className="container mx-auto py-12 space-y-8">
      <FleetJsonLd vehicle={vehicle} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Fleet", href: "/fleet" },
          { label: vehicle.name, href: `/fleet/${vehicle.slug}` },
        ]}
      />

      <h1 className="text-4xl font-bold">{vehicle.name}</h1>
      <img src={vehicle.image} alt={vehicle.name} className="rounded-lg w-full max-w-2xl" />
      <p className="text-lg">{vehicle.description}</p>

      {vehicle.features && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            {vehicle.features.map((feature: string, idx: number) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {relevantServices.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ideal for these services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relevantServices.map((serviceSlug) => {
              const service = services.find((s) => s.slug === serviceSlug)
              return service ? (
                <li key={serviceSlug} className="border rounded-lg p-4">
                  <a href={`/services/${serviceSlug}`} className="text-blue-600 hover:underline">
                    {service.name}
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
