import Link from "next/link"
import { fleetVehicles } from "@/lib/data/fleet"

export default function FleetPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Our Fleet</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fleetVehicles.map((vehicle) => (
          <Link 
            key={vehicle.slug}
            href={`/fleet/${vehicle.slug}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{vehicle.name}</h2>
            <p className="text-gray-600 text-sm mb-3">{vehicle.description}</p>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              Seats {vehicle.seatingCapacity}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
