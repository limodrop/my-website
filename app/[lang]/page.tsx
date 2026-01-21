import { messages } from "@/lib/i18n/messages"
import { Locale } from "@/lib/i18n/types"
import { serverApi } from "@/lib/api/serverClient"

export default async function LangHome({
  params
}: {
  params: { lang: Locale }
}) {
  const t = messages[params.lang]
  const [homepage, serviceArea, promotions] = await Promise.all([
    serverApi.getHomepage(),
    serverApi.getServiceArea(),
    serverApi.getPromotions(),
  ])

  return (
    <div className="space-y-0">
      {/* CINEMATIC HERO SECTION */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-32 px-4">
        <div className="container mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-yellow-600 text-black text-sm font-semibold rounded-full mb-4">
            ✨ Premium Worldwide Service
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Premium Chauffeur Service
            <span className="block text-yellow-500 mt-2">Worldwide</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
            Serving 50 U.S. States + 13 Countries
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {homepage.heroSlides[0].subtitle}
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://book.oregontowncar.com"
              className="inline-block px-8 py-4 bg-yellow-600 text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transition shadow-lg"
            >
              📍 Book Worldwide
            </a>
            <a
              href="/en/worldwide"
              className="inline-block px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-lg hover:bg-white/20 transition backdrop-blur border border-white/20"
            >
              🌍 View Coverage
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-500">{serviceArea.countries.length}</div>
              <div className="text-sm text-gray-400 mt-1">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500">50</div>
              <div className="text-sm text-gray-400 mt-1">U.S. States</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500">{serviceArea.majorCities.length}+</div>
              <div className="text-sm text-gray-400 mt-1">Major Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500">24/7</div>
              <div className="text-sm text-gray-400 mt-1">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONS BANNER */}
      {promotions.length > 0 && (
        <section className="bg-yellow-600 text-black py-4 px-4">
          <div className="container mx-auto text-center">
            <p className="text-lg font-semibold">
              🎉 {promotions[0].title} - {promotions[0].description}
            </p>
          </div>
        </section>
      )}

      {/* FEATURED SERVICES */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Premium Services</h2>
          <p className="text-gray-600 text-lg">Luxury transportation tailored to your needs</p>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homepage.featuredServices.map((service, idx) => (
            <li
              key={service}
              className="group p-8 border-2 border-gray-200 rounded-xl bg-white hover:border-yellow-600 hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">
                {idx === 0 && "✈️"}
                {idx === 1 && "💼"}
                {idx === 2 && "🍷"}
                {idx === 3 && "🎉"}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition">{service}</h3>
              <p className="text-gray-600 text-sm">Premium service worldwide</p>
            </li>
          ))}
        </ul>
      </section>

      {/* FEATURED FLEET */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Premium Fleet</h2>
            <p className="text-gray-600 text-lg">Luxury vehicles for every occasion</p>
          </div>
          
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homepage.featuredFleet.map((vehicle, idx) => (
              <li
                key={vehicle}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-6xl">
                  {idx === 0 && "🚗"}
                  {idx === 1 && "🚙"}
                  {idx === 2 && "🚐"}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-600 transition">{vehicle}</h3>
                  <p className="text-gray-600">Available worldwide</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED CITIES */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Global Coverage</h2>
          <p className="text-gray-600 text-lg">We serve major cities worldwide</p>
        </div>
        
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {homepage.featuredCities.map((city) => (
            <li
              key={city}
              className="p-4 border rounded-lg bg-white hover:border-yellow-600 hover:shadow-lg transition text-center"
            >
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold">{city}</h3>
            </li>
          ))}
        </ul>
        
        <div className="text-center mt-8">
          <a
            href="/en/worldwide"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            View All Locations →
          </a>
        </div>
      </section>

      {/* WORLDWIDE SERVICE PREVIEW */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-16 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Serving Clients Worldwide</h2>
          <p className="text-xl max-w-2xl mx-auto">
            From Portland to Paris, Tokyo to Dubai - premium chauffeur service wherever you need us.
          </p>
          <div className="flex gap-4 justify-center flex-wrap text-sm font-semibold">
            {serviceArea.countries.slice(0, 6).map((country) => (
              <span key={country.slug} className="px-4 py-2 bg-black/10 rounded-full">
                {country.name}
              </span>
            ))}
          </div>
          <a
            href="/en/worldwide"
            className="inline-block px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition mt-4"
          >
            Explore Global Coverage
          </a>
        </div>
      </section>
    </div>
  )
}

