import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"

interface Props {
  params: { slug: string }
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
  const [vehicle, services, rules] = await Promise.all([
    serverApi.getVehicle(params.slug),
    serverApi.getServices(),
    serverApi.getLinkingRules(),
  ])

  if (!vehicle) return <div>Vehicle not found</div>

  const serviceSlugs = rules.fleet[params.slug] || []
  const vehicleServices = services.filter(s => serviceSlugs.includes(s.slug))

  return (
    <div className="container mx-auto py-12">
      <FleetJsonLd vehicle={vehicle} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Fleet", href: "/fleet" },
          { label: vehicle.name },
        ]}
      />
      <img src={vehicle.image} className="rounded mb-6" />
      <h1 className="text-4xl font-bold mb-4">{vehicle.name}</h1>
      <p className="text-gray-700 text-lg mb-4">{vehicle.description}</p>
      <p className="text-gray-600">Seats: {vehicle.seats}</p>

      {vehicleServices.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-4">Ideal For</h2>
          <ul className="list-disc list-inside space-y-1">
            {vehicleServices.map(s => (
              <li key={s.id}>
                <a href={`/services/${s.slug}`} className="text-blue-600 hover:underline">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
