import Link from "next/link"
import { serverClient } from "@/app/lib/serverClient"

export default async function CitiesPage() {
  const cities = await serverClient.cities();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Cities We Serve</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((city) => (
          <Link 
            key={city.slug}
            href={`/cities/${city.slug}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{city.name}</h2>
            <p className="text-gray-600 text-sm mb-3">{city.tagline}</p>
            {city.airportCode && (
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {city.airportCode}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
