import { serverApi } from "@/lib/api/serverClient"
import { Locale } from "@/lib/i18n/types"
import { getDictionary } from "@/app/i18n"
import { CityGroups } from "@/app/components/cities/CityGroups"

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const locale = params.lang

  return {
    title: "Cities We Serve — Oregon Town Car",
    description:
      "Premium chauffeur service in Portland metro, Willamette Valley, and cities across Oregon and Washington.",
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
    <>
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text)] mb-3 sm:mb-4">
          {dict.nav.cities}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-[var(--textMuted)] max-w-3xl">
          Premium chauffeur service in Portland metro, Willamette Valley, and cities across Oregon and Washington. 
          Professional drivers, luxury vehicles, and transparent pricing in every location we serve.
        </p>
      </div>

      <CityGroups cities={cities} locale={locale} />
    </>
  )
}
