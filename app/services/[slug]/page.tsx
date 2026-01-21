import { api } from "@/lib/api/apiClient"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const seo = await api.getSEO()
  const service = await api.getService(params.slug)

  return {
    title: `${service?.name} | ${seo.title}`,
    description: service?.description || seo.description,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = await api.getService(params.slug)

  if (!service) return <div>Service not found</div>

  return (
    <div className="container mx-auto py-12">
      <img src={service.image} className="rounded mb-6" />
      <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
      <p className="text-gray-700 text-lg">{service.description}</p>
    </div>
  )
}
