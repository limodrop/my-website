import { serverClient } from "@/app/lib/serverClient";
import Link from "next/link";

export default async function CitiesPage() {
  const cities = await serverClient.cities();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Cities We Serve</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/cities/${city.slug}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{city.name}</h2>
            <p className="text-lg text-gray-700">{city.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
