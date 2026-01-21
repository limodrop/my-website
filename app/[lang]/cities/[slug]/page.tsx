import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"

interface Props {
  params: { slug: string; lang: string }
}

function CityJsonLd({ city }: { city: any }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${city.name} Chauffeur Service`,
    description: city.description,
    areaServed: city.name,
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
  const [seo, city] = await Promise.all([
    serverApi.getSeo(),
    serverApi.getCity(params.slug),
  ])

  if (!city) return { title: "City not found" }

  return {
    title: `${city.name} | ${seo.title}`,
    description: city.description,
    openGraph: {
      title: city.name,
      description: city.description,
      images: [city.image],
    },
  }
}

export default async function CityDetailPage({ params }: Props) {
  const [city, services, rules] = await Promise.all([
    serverApi.getCity(params.slug),
    serverApi.getServices(),
    serverApi.getLinkingRules(),
  ])

  if (!city) {
    return <div className="container mx-auto py-12">City not found</div>
  }

  const relevantServices = rules.cityServices[params.slug] || []

  return (
    <div className="container mx-auto py-12 space-y-8">
      <CityJsonLd city={city} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cities", href: "/cities" },
          { label: city.name, href: `/cities/${city.slug}` },
        ]}
      />

      <h1 className="text-4xl font-bold">{city.name}</h1>
      <img src={city.image} alt={city.name} className="rounded-lg w-full max-w-2xl" />
      <p className="text-lg">{city.description}</p>

      {relevantServices.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Services available in {city.name}</h2>
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
