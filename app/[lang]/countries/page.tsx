import { serverApi } from "@/lib/api/serverClient"

export default async function CountriesPage() {
  const serviceArea = await serverApi.getServiceArea()

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Countries We Serve</h1>
        <p className="text-xl text-gray-600">Premium chauffeur service across {serviceArea.countries.length} countries worldwide</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceArea.countries.map((country) => (
          <a
            key={country.slug}
            href={`/en/countries/${country.slug}`}
            className="group p-8 border-2 border-gray-200 rounded-xl bg-white hover:border-yellow-600 hover:shadow-xl transition-all"
          >
            <div className="text-5xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-yellow-600 transition">{country.name}</h2>
            <p className="text-gray-600">{country.cities}+ cities available</p>
            <div className="mt-4 text-yellow-600 font-semibold group-hover:underline">
              View Details →
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
