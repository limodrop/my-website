import { Locale } from "@/lib/i18n/types"
import { serverApi } from "@/lib/api/serverClient"
import { getDictionary } from "@/app/i18n"
import { HeroSlider } from "@/app/ui/hero/HeroSlider"
import { Section } from "@/app/ui/layout/Section"
import { ServiceCard } from "@/app/ui/cards/ServiceCard"
import { FleetCard } from "@/app/ui/cards/FleetCard"
import { CityCard } from "@/app/ui/cards/CityCard"
import { PageShell } from "@/app/ui/layout/PageShell"

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
    <PageShell>
      <HeroSlider slides={homepage.heroSlides} />

      <Section title={dict.nav.services}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </PageShell>
  )
}


