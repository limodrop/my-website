import { serverApi } from "@/lib/api/serverClient"

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
          <img src={vehicle.image} alt={vehicle.name} className="rounded mb-3" />
          <h3 className="text-xl font-semibold">{vehicle.name}</h3>
          <p className="text-gray-600">{vehicle.description}</p>
        </a>
      ))}
    </div>
  )
}
