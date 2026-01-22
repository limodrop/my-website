import { serverApi } from "@/lib/api/serverClient"
import { Locale } from "@/lib/i18n/types"
import { Section } from "@/app/ui/layout/Section"
import { FleetCard } from "@/app/ui/cards/FleetCard"
import { PageShell } from "@/app/ui/layout/PageShell"
import { getDictionary } from "@/app/i18n"

export default async function FleetPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const fleet = await serverApi.getFleet()

  return (
    <PageShell>
      <Section title={dict.nav.fleet}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </Section>
    </PageShell>
  )
}
