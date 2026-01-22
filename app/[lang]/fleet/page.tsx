import { serverApi } from "@/lib/api/serverClient"
import { Locale } from "@/lib/i18n/types"
import { FleetCard } from "@/app/ui/cards/FleetCard"
import { getDictionary } from "@/app/i18n"

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const locale = params.lang

  return {
    title: "Luxury Fleet — Oregon Town Car",
    description:
      "Browse our fleet of luxury sedans, SUVs, Sprinter vans, and executive vehicles for every occasion.",
    alternates: {
      canonical: `https://oregontowncar.com/${locale}/fleet`,
    },
  }
}

export default async function FleetPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const fleet = await serverApi.getFleet()

  return (
    <>
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-4">
        {dict.nav.fleet}
      </h1>
      <p className="text-lg text-[var(--textMuted)] mb-10">
        Luxury sedans, SUVs, Sprinter vans, and executive vehicles — all driven by professional chauffeurs.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {fleet.map((vehicle) => (
          <FleetCard
            key={vehicle.id}
            name={vehicle.name}
            slug={vehicle.slug}
            capacity={vehicle.seats ? `${vehicle.seats} passengers` : undefined}
            locale={locale}
          />
        ))}
      </div>
    </>
  )
}
