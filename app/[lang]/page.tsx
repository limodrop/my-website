import { Locale } from "@/lib/i18n/types"
import { serverApi } from "@/lib/api/serverClient"
import { getDictionary } from "@/app/i18n"
import { HeroSlider } from "@/app/ui/hero/HeroSlider"
import { Section } from "@/app/ui/layout/Section"
import { ServiceCard } from "@/app/ui/cards/ServiceCard"
import { FleetCard } from "@/app/ui/cards/FleetCard"
import { CityCard } from "@/app/ui/cards/CityCard"

export default async function LangHome({
  params
}: {
  params: { lang: Locale }
}) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const [homepage, services, fleet, cities] = await Promise.all([
    serverApi.getHomepage(),
    serverApi.getServices(),
    serverApi.getFleet(),
    serverApi.getCities(),
  ])

  return (
    <>
      <HeroSlider slides={homepage.heroSlides} />

      <Section title={dict.nav.services}>
        <p className="text-lg text-[var(--textMuted)] mb-6">
          Explore our premium chauffeur services designed for airport travel, corporate needs, and point-to-point transportation.
        </p>
        <div className="grid-responsive">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              name={s.name}
              slug={s.slug}
              description={s.description}
              locale={locale}
            />
          ))}
        </div>
      </Section>

      <Section title={dict.nav.fleet}>
        <p className="text-lg text-[var(--textMuted)] mb-6">
          Luxury sedans, SUVs, Sprinter vans, and executive vehicles — all driven by professional chauffeurs.
        </p>
        <div className="grid-responsive">
          {fleet.map((f) => (
            <FleetCard
              key={f.id}
              name={f.name}
              slug={f.slug}
              capacity={f.seats ? `${f.seats} passengers` : undefined}
              locale={locale}
            />
          ))}
        </div>
      </Section>

      <Section title={dict.nav.cities}>
        <p className="text-lg text-[var(--textMuted)] mb-6">
          Chauffeur service in major cities across the U.S. and worldwide.
        </p>
        <div className="grid-responsive">
          {cities.map((c) => (
            <CityCard
              key={c.id}
              name={c.name}
              slug={c.slug}
              locale={locale}
            />
          ))}
        </div>
      </Section>
    </>
  )
}


