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
  const service = await api.getService(params.slug)

  if (!service) return <div>Service not found</div>

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
    </div>
  )
}
