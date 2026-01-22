import { serverClient } from "@/app/lib/serverClient";
import Link from "next/link";

export default async function FleetPage() {
  const vehicles = await serverClient.vehicles();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Our Fleet</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <Link
            key={vehicle.slug}
            href={`/fleet/${vehicle.slug}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{vehicle.name}</h2>
            <p className="text-sm text-gray-600 mb-2">Seats {vehicle.seatingCapacity} passengers</p>
            <p className="text-gray-700">{vehicle.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
