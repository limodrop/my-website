import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { SmartImage } from "@/app/components/SmartImage"

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
    return <div className="max-w-7xl mx-auto px-6 py-12">City not found</div>
  }

  const relevantServices = rules.cityServices[params.slug] || []

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <CityJsonLd city={city} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cities", href: "/cities" },
          { label: city.name, href: `/cities/${city.slug}` },
        ]}
      />

      <h1 className="text-4xl font-semibold text-[var(--text)]">{city.name}</h1>
      
      {city.image && (
        <SmartImage 
          src={city.image} 
          alt={city.name} 
          className="rounded-lg w-full max-w-2xl shadow-sm" 
        />
      )}
      
      <p className="text-lg text-[var(--textMuted)] leading-relaxed">{city.description}</p>

      {relevantServices.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
            Services available in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relevantServices.map((serviceSlug) => {
              const service = services.find((s) => s.slug === serviceSlug)
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
