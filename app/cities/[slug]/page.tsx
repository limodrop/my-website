import { api } from "@/lib/api/apiClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const [seo, city] = await Promise.all([
    api.getSEO(),
    api.getCity(params.slug),
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
  const [city, services, cityServicesMap] = await Promise.all([
    api.getCity(params.slug),
    api.getServices(),
    api.getCityServices(),
  ])

  if (!city) return <div>City not found</div>

  const serviceSlugs = cityServicesMap[params.slug] || []
  const cityServices = services.filter(s => serviceSlugs.includes(s.slug))

  return (
    <div className="container mx-auto py-12">
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
