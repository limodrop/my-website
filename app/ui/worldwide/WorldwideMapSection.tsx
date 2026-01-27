import { Button } from "../buttons/Button"
import { Heading } from "../typography/Heading"
import { Text } from "../typography/Text"

type Country = {
  name: string
  slug: string
  cities?: number
}

type City = {
  name: string
  slug?: string
  country?: string
}

interface WorldwideMapSectionProps {
  countries: Country[]
  cities: City[]
}

export function WorldwideMapSection({ countries, cities }: WorldwideMapSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-black via-blue-900 to-black text-white py-24 px-4 overflow-hidden">
      {/* Abstract world map background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🌍</div>
          <Heading level={2} variant="hero">
            Global Coverage
          </Heading>
          <Text variant="large" className="text-gray-300 max-w-2xl mx-auto">
            Premium chauffeur service across {countries.length} countries and {cities.length}+ major cities
          </Text>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Worldwide Chauffeur Service
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg text-center mb-8">
              Premium airport transfers and city-to-city rides in 200+ cities worldwide. Book with confidence, 24/7.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Countries Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Countries We Serve</h3>
            <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-4">
              {countries.map((country) => (
                <a
                  key={country.slug}
                  href={`/en/countries/${country.slug}`}
                  className="p-4 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition flex justify-between items-center"
                >
                  <span className="font-semibold">{country.name}</span>
                  {country.cities && (
                    <span className="text-sm text-gray-400">{country.cities}+ cities</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Major Cities Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Major Cities</h3>
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-4">
              {cities.map((city, idx) => (
                <div
                  key={city.slug || idx}
                  className="p-4 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition text-center"
                >
                  <div className="text-2xl mb-1">📍</div>
                  <p className="font-semibold text-sm">{city.name}</p>
                  {city.country && (
                    <p className="text-xs text-gray-400 mt-1">{city.country}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary" as="a" href="/en/worldwide">
            View All Service Areas
          </Button>
        </div>
      </div>
    </section>
  )
}
