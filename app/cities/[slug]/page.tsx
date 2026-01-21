import { api } from "@/lib/api/apiClient"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const seo = await api.getSEO()
  const city = await api.getCity(params.slug)

  return {
    title: `${city?.name} | ${seo.title}`,
    description: city?.description || seo.description,
  }
}

export default async function CityDetailPage({ params }: Props) {
  const city = await api.getCity(params.slug)

  if (!city) return <div>City not found</div>

  return (
    <div className="container mx-auto py-12">
      <img src={city.image} className="rounded mb-6" />
      <h1 className="text-4xl font-bold mb-4">{city.name}</h1>
      <p className="text-gray-700 text-lg">{city.description}</p>
    </div>
  )
}
