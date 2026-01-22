import { serverClient } from "@/app/lib/serverClient";
import BookButton from "@/components/BookButton";
import Link from "next/link";

export default async function HomePage() {
  const homepage = await serverClient.homepage();
  const allServices = await serverClient.services();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">{homepage.heroSlides[0].title}</h1>
        <p className="text-lg text-gray-700">
          {homepage.heroSlides[0].subtitle}
        </p>

        <BookButton
          location="hero"
          className="inline-block px-6 py-3 bg-black text-white rounded"
        >
          {homepage.heroSlides[0].cta}
        </BookButton>
      </section>

      {/* Featured Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {homepage.featuredServices.map((serviceName) => {
            const service = allServices.find(s => s.name === serviceName);
            return service ? (
              <li key={service.slug} className="p-4 border rounded shadow-sm bg-white space-y-3">
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-block text-blue-600 hover:text-blue-800 hover:underline font-medium"
                >
                  Learn More →
                </Link>
              </li>
            ) : null;
          })}
        </ul>
      </section>

      {/* Featured Cities */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Cities</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {homepage.featuredCities.map((city) => (
            <li
              key={city}
              className="p-4 border rounded shadow-sm bg-white"
            >
              {city}
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Fleet */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Fleet</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {homepage.featuredFleet.map((vehicle) => (
            <li
              key={vehicle}
              className="p-4 border rounded shadow-sm bg-white"
            >
              {vehicle}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
