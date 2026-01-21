import { messages } from "@/lib/i18n/messages"
import { Locale } from "@/lib/i18n/types"
import { serverApi } from "@/lib/api/serverClient"

export default async function LangHome({
  params
}: {
  params: { lang: Locale }
}) {
  const t = messages[params.lang]
  const homepage = await serverApi.getHomepage()

  return (
    <div className="space-y-12">
      {/* HERO SECTION */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold">{homepage.heroSlides[0].title}</h1>
        <p className="text-xl mt-4 text-gray-700">
          {homepage.heroSlides[0].subtitle}
        </p>
        <a
          href={homepage.heroSlides[0].ctaLink || "https://book.oregontowncar.com"}
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          {homepage.heroSlides[0].cta}
        </a>
      </section>

      {/* FEATURED SERVICES */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Featured Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homepage.featuredServices.map((service) => (
            <li
              key={service}
              className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </li>
          ))}
        </ul>
      </section>

      {/* FEATURED CITIES */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Popular Cities We Serve</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homepage.featuredCities.map((city) => (
            <li
              key={city}
              className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{city}</h3>
            </li>
          ))}
        </ul>
      </section>

      {/* FEATURED FLEET */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Featured Fleet</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homepage.featuredFleet.map((vehicle) => (
            <li
              key={vehicle}
              className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{vehicle}</h3>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
