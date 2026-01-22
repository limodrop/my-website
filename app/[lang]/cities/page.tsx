import { serverApi } from "@/lib/api/serverClient"
import { Locale } from "@/lib/i18n/types"
import { Section } from "@/app/ui/layout/Section"
import { CityCard } from "@/app/ui/cards/CityCard"
import { PageShell } from "@/app/ui/layout/PageShell"
import { getDictionary } from "@/app/i18n"

export default async function CitiesPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const cities = await serverApi.getCities()

  return (
    <PageShell>
      <Section title={dict.nav.cities}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <CityCard
              key={city.id}
              name={city.name}
              slug={city.slug}
              locale={locale}
            />
          ))}
        </div>
      </Section>
    </PageShell>
  )
}
