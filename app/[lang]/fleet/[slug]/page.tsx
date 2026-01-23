import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { FleetVehicleTemplate } from "@/app/components/fleet/FleetVehicleTemplate"
import { fleetVehicleContent } from "@/lib/data/fleetVehicleContent"

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
  const vehicle = await serverApi.getVehicle(params.slug);

  if (!vehicle) return { title: "Vehicle not found" }

  const content = fleetVehicleContent[params.slug];

  return {
    title: `${vehicle.name} | Oregon Town Car Fleet`,
    description: content?.subtitle || `Professional ${vehicle.name.toLowerCase()} chauffeur service for airport transfers, corporate travel, and special events.`,
    openGraph: {
      title: `${vehicle.name} Chauffeur Service`,
      description: content?.subtitle || vehicle.description,
    },
  }
}

export default async function FleetDetailPage({ params }: Props) {
  const [vehicle, allVehicles] = await Promise.all([
    serverApi.getVehicle(params.slug),
    serverApi.getFleet(),
  ])

  if (!vehicle) {
    return <div>Vehicle not found</div>
  }

  const content = fleetVehicleContent[params.slug];

  if (!content) {
    return <div>Vehicle content not found</div>
  }

  // Get 2-3 related vehicles (excluding current one)
  const relatedVehicles = allVehicles
    .filter((v: any) => v.slug !== params.slug)
    .slice(0, 3);

  return (
    <>
      <FleetJsonLd vehicle={vehicle} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Fleet", href: "/fleet" },
          { label: vehicle.name, href: `/fleet/${vehicle.slug}` },
        ]}
      />
      <FleetVehicleTemplate
        vehicle={vehicle}
        content={content}
        relatedVehicles={relatedVehicles}
      />
    </>
  )
}
