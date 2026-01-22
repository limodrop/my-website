import { serverApi } from "@/lib/api/serverClient"
import { notFound } from "next/navigation"

interface Props {
  params: { slug: string; lang: string }
}

export default async function CountryDetailPage({ params }: Props) {
  const [serviceArea, services] = await Promise.all([
    serverApi.getServiceArea(),
    serverApi.getServices(),
  ])

  const country = serviceArea.countries.find((c) => c.slug === params.slug)
  if (!country) notFound()

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="bg-gradient-to-br from-black via-blue-900 to-black text-white py-24 px-4">
        <div className="container mx-auto text-center space-y-6">
          <div className="text-6xl mb-4">🌐</div>
          <h1 className="text-5xl md:text-6xl font-bold">{country.name}</h1>
          <p className="text-2xl text-gray-300">
            Premium chauffeur service across {country.cities}+ cities
          </p>
        </div>
      </section>

      {/* AVAILABLE SERVICES */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Services Available in {country.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="p-6 border-2 border-gray-200 rounded-xl bg-white hover:border-yellow-600 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">
                {idx === 0 && "✈️"}
                {idx === 1 && "💼"}
                {idx === 2 && "🍷"}
                {idx === 3 && "🎉"}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-16 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Book Service in {country.name}</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Available 24/7 with premium vehicles and professional chauffeurs
          </p>
          <a
            href="https://book.oregontowncar.com"
            className="inline-block px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition"
          >
            📍 Book Now
          </a>
        </div>
      </section>
    </div>
  )
}
