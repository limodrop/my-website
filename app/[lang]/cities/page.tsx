import { serverApi } from "@/lib/api/serverClient"
import { getDictionary } from "@/app/i18n"
import { Locale } from "@/lib/i18n/types"
import { Section } from "@/app/ui/layout/Section"
import { CityCard } from "@/app/ui/cards/CityCard"

export default async function CitiesPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const cities = await serverApi.getCities()

  return (
    <div>
      <Section 
        title={dict.pages.cities.title}
        subtitle={dict.pages.cities.subtitle}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </div>
  )
}
