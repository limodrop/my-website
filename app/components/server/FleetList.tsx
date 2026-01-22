import { serverApi } from "@/lib/api/serverClient"
import { SmartImage } from "@/app/components/SmartImage"

export default async function FleetList() {
  const fleet = await serverApi.getFleet()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {fleet.map(vehicle => (
        <a
          key={vehicle.id}
          href={`/fleet/${vehicle.slug}`}
          className="border rounded-lg p-4 hover:shadow-lg transition"
        >
          <SmartImage src={vehicle.image} alt={vehicle.name} className="w-full max-w-full rounded mb-3 object-cover" />
          <h3 className="text-xl font-semibold">{vehicle.name}</h3>
          <p className="text-gray-600">{vehicle.description}</p>
        </a>
      ))}
    </div>
  )
}
