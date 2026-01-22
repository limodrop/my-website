import { serverClient } from "@/app/lib/serverClient";

export default async function HomePage() {
  const homepage = await serverClient.homepage();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6 py-12">
        <h1 className="text-4xl font-bold text-[var(--text)]">{homepage.heroSlides[0].title}</h1>
        <p className="text-lg text-[var(--textMuted)]">
          {homepage.heroSlides[0].subtitle}
        </p>

        <a
          href="https://book.oregontowncar.com"
          className="inline-block px-6 py-3 bg-[var(--text)] text-[var(--surface)] rounded hover:opacity-90 transition-opacity"
        >
          {homepage.heroSlides[0].cta}
        </a>
      </section>

      {/* Featured Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">Featured Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {homepage.featuredServices.map((service) => (
            <li
              key={service}
              className="p-4 border rounded shadow-sm bg-[var(--surface)] border-[var(--border)]"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Cities */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">Popular Cities</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {homepage.featuredCities.map((city) => (
            <li
              key={city}
              className="p-4 border rounded shadow-sm bg-[var(--surface)] border-[var(--border)]"
            >
              {city}
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Fleet */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">Featured Fleet</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {homepage.featuredFleet.map((vehicle) => (
            <li
              key={vehicle}
              className="p-4 border rounded shadow-sm bg-[var(--surface)] border-[var(--border)]"
            >
              {vehicle}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
