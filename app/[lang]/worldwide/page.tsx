import { serverApi } from "@/lib/api/serverClient"

export default async function WorldwidePage() {
  const serviceArea = await serverApi.getServiceArea()

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-black via-blue-900 to-black text-white py-24 px-4">
        <div className="container mx-auto text-center space-y-6">
          <div className="text-6xl mb-4">🌍</div>
          <h1 className="text-5xl md:text-6xl font-bold">Global Coverage</h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
            Premium chauffeur service across {serviceArea.countries.length} countries
          </p>
        </div>
      </section>

      {/* COUNTRIES GRID */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Countries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceArea.countries.map((country) => (
            <a
              key={country.slug}
              href={`/en/countries/${country.slug}`}
              className="group p-6 border-2 border-gray-200 rounded-xl bg-white hover:border-yellow-600 hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-yellow-600 transition">
                    {country.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{country.cities}+ cities</p>
                </div>
                <div className="text-3xl">🌐</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* MAJOR CITIES */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Major Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceArea.majorCities.map((city) => (
              <div
                key={city}
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition text-center"
              >
                <div className="text-2xl mb-2">📍</div>
                <p className="font-semibold">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL AIRPORTS */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">International Airport Hubs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {serviceArea.internationalAirports.map((airport) => (
            <div
              key={airport}
              className="p-4 border rounded-lg bg-white hover:border-yellow-600 hover:shadow-lg transition text-center"
            >
              <div className="text-3xl mb-2">✈️</div>
              <p className="font-bold text-lg">{airport}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-16 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Book Worldwide?</h2>
          <p className="text-xl max-w-2xl mx-auto">
            {serviceArea.specialNotes}
          </p>
          <a
            href="https://accounts.oregontowncar.com/"
            className="inline-block px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition shadow-lg"
          >
            📍 Book Now - Any Location
          </a>
        </div>
      </section>
    </div>
  )
}
