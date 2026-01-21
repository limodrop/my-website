import { api } from "@/lib/api/apiClient"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const seo = await api.getSEO()
  const vehicle = await api.getVehicle(params.slug)

  return {
    title: `${vehicle?.name} | ${seo.title}`,
    description: vehicle?.description || seo.description,
  }
}

export default async function FleetDetailPage({ params }: Props) {
  const vehicle = await api.getVehicle(params.slug)

  if (!vehicle) return <div>Vehicle not found</div>

  return (
    <div className="container mx-auto py-12">
      <img src={vehicle.image} className="rounded mb-6" />
      <h1 className="text-4xl font-bold mb-4">{vehicle.name}</h1>
      <p className="text-gray-700 text-lg">{vehicle.description}</p>
      <p className="text-gray-600 mt-2">Seats: {vehicle.seats}</p>
    </div>
  )
}
