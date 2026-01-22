import { serverClient } from "@/app/lib/serverClient";
import Hero from "@/app/components/Hero";
import BookingCTA from "@/app/components/BookingCTA";

export default async function HomePage() {
  const homepage = await serverClient.homepage();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero locale="en" />

      {/* Featured Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {homepage.featuredServices.map((service) => (
            <li
              key={service}
              className="p-4 border border-[var(--border)] rounded shadow-sm bg-[var(--surface)]"
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
              className="p-4 border border-[var(--border)] rounded shadow-sm bg-[var(--surface)]"
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
              className="p-4 border border-[var(--border)] rounded shadow-sm bg-[var(--surface)]"
            >
              {vehicle}
            </li>
          ))}
        </ul>
      </section>

      {/* Booking CTA */}
      <BookingCTA locale="en" />
    </div>
  );
}
