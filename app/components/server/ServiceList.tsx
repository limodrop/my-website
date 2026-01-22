import { serverApi } from "@/lib/api/serverClient"
import { SmartImage } from "@/app/components/SmartImage"

export default async function ServiceList() {
  const services = await serverApi.getServices()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map(service => (
        <a
          key={service.id}
          href={`/services/${service.slug}`}
          className="border rounded-lg p-4 hover:shadow-lg transition"
        >
          <SmartImage src={service.image} alt={service.name} className="w-full max-w-full rounded mb-3 object-cover" />
          <h3 className="text-xl font-semibold">{service.name}</h3>
          <p className="text-gray-600">{service.description}</p>
        </a>
      ))}
    </div>
  )
}
