import { serverApi } from "@/lib/api/serverClient"
import { Locale } from "@/lib/i18n/types"
import { CityCard } from "@/app/ui/cards/CityCard"
import { PageShell } from "@/app/ui/layout/PageShell"
import { getDictionary } from "@/app/i18n"

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const locale = params.lang

  return {
    title: "Cities We Serve — Oregon Town Car",
    description:
      "Find premium chauffeur service in major cities across the U.S. and worldwide.",
    alternates: {
      canonical: `https://oregontowncar.com/${locale}/cities`,
    },
  }
}

export default async function CitiesPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const cities = await serverApi.getCities()

  return (
    <PageShell>
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-4">
        {dict.nav.cities}
      </h1>
      <p className="text-lg text-[var(--textMuted)] mb-10">
        Find premium chauffeur service in major cities across the U.S. and worldwide.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <CityCard
            key={city.id}
            name={city.name}
            slug={city.slug}
            locale={locale}
          />
        ))}
      </div>
    </PageShell>
  )
}
