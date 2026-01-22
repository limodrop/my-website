import { serverClient } from "@/app/lib/serverClient";
import Link from "next/link";

export default async function CountriesPage() {
  const countries = await serverClient.countries();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Countries We Serve</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {countries.map((country) => (
          <Link 
            key={country.slug}
            href={`/countries/${country.slug}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{country.name}</h2>
            <p className="text-lg text-gray-700 mb-4">{country.tagline}</p>
            <p className="text-sm text-gray-600">{country.seoDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
