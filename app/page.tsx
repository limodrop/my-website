import { serverClient } from "@/app/lib/serverClient";
import { CTAButton } from "@/components/ui/CTAButton";

export default async function HomePage() {
  const homepage = await serverClient.homepage();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">{homepage.heroSlides[0].title}</h1>
        <p className="text-lg text-gray-700">
          {homepage.heroSlides[0].subtitle}
        </p>

        <CTAButton
          href="https://book.oregontowncar.com"
          location="hero"
          locale="en"
        >
          {homepage.heroSlides[0].cta}
        </CTAButton>
      </section>

      {/* Featured Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {homepage.featuredServices.map((service) => (
            <li
              key={service}
              className="p-4 border rounded shadow-sm bg-white"
            >
              {service}
            </li>
          ))}
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
