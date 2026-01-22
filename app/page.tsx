import { serverClient } from "@/app/lib/serverClient";
import Section from "@/app/components/Section";
import ServiceCard from "@/app/components/ServiceCard";
import FleetCard from "@/app/components/FleetCard";
import CityCard from "@/app/components/CityCard";

export default async function HomePage() {
  const homepage = await serverClient.homepage();
  const locale = "en";

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-[var(--text)]">{homepage.heroSlides[0].title}</h1>
        <p className="text-lg text-[var(--textMuted)]">
          {homepage.heroSlides[0].subtitle}
        </p>

        <a
          href="https://book.oregontowncar.com"
          className="inline-block px-6 py-3 bg-black text-white rounded"
        >
          {homepage.heroSlides[0].cta}
        </a>
      </section>

      {/* Featured Services */}
      <Section title="Services">
        <p className="text-[var(--textMuted)] mb-6">
          Explore our premium chauffeur services designed for airport travel, corporate needs,
          and point‑to‑point transportation.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {homepage.featuredServices.map((s) => (
            <ServiceCard key={s.slug} {...s} locale={locale} />
          ))}
        </div>
      </Section>

      {/* Featured Fleet */}
      <Section title="Fleet">
        <p className="text-[var(--textMuted)] mb-6">
          Luxury sedans, SUVs, Sprinters, and executive vehicles — all driven by professionals.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {homepage.featuredFleet.map((f) => (
            <FleetCard key={f.slug} {...f} locale={locale} />
          ))}
        </div>
      </Section>

      {/* Featured Cities */}
      <Section title="Cities">
        <p className="text-[var(--textMuted)] mb-6">
          Chauffeur service in major cities across the U.S. and worldwide.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {homepage.featuredCities.map((c) => (
            <CityCard key={c.slug} {...c} locale={locale} />
          ))}
        </div>
      </Section>
    </div>
  );
}
