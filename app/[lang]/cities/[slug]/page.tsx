import { serverApi } from "@/lib/api/serverClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { CityPageTemplate } from "@/app/components/cities/CityPageTemplate"
import { cityContent } from "@/lib/data/cityContent"

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
  const city = await serverApi.getCity(params.slug);

  if (!city) return { title: "City not found" }

  const content = cityContent[params.slug];
  const stateLabel = content?.state || "Oregon";

  return {
    title: `${city.name} Chauffeur Service | Oregon Town Car`,
    description: content?.subtitle || `Professional chauffeur service in ${city.name}, ${stateLabel} for airport transfers, corporate travel, and special events.`,
    openGraph: {
      title: `${city.name} Chauffeur Service`,
      description: content?.subtitle || city.description,
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
    return <div>City not found</div>
  }

  const relevantServices = (rules.cityServices as any)[params.slug] || []
  const content = cityContent[params.slug]

  if (!content) {
    return <div>City content not found</div>
  }

  return (
    <>
      <CityJsonLd city={city} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cities", href: "/cities" },
          { label: city.name, href: `/cities/${city.slug}` },
        ]}
      />
      <CityPageTemplate
        city={city}
        services={services}
        relevantServices={relevantServices}
        content={content}
      />
    </>
  )
}
