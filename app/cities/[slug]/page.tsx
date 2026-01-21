import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"

interface Props {
  params: { slug: string }
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

  if (!city) return <div>City not found</div>

  const serviceSlugs = rules.cities[params.slug] || []
  const cityServices = services.filter(s => serviceSlugs.includes(s.slug))

  return (
    <div className="container mx-auto py-12">
      <CityJsonLd city={city} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cities", href: "/cities" },
          { label: city.name },
        ]}
      />
      <img src={city.image} className="rounded mb-6" />
      <h1 className="text-4xl font-bold mb-4">{city.name}</h1>
      <p className="text-gray-700 text-lg">{city.description}</p>

      {cityServices.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-4">Services in {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityServices.map(s => (
              <a key={s.id} href={`/services/${s.slug}`} className="border rounded p-4 hover:shadow-lg transition">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
