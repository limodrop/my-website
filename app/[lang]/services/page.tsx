import { serverApi } from "@/lib/api/serverClient"
import { Locale } from "@/lib/i18n/types"
import { Section } from "@/app/ui/layout/Section"
import { ServiceCard } from "@/app/ui/cards/ServiceCard"
import { PageShell } from "@/app/ui/layout/PageShell"
import { getDictionary } from "@/app/i18n"

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const locale = params.lang

  return {
    title: "Chauffeur Services — Oregon Town Car",
    description:
      "Explore premium chauffeur services, airport transfers, corporate travel, and point-to-point rides worldwide.",
    alternates: {
      canonical: `https://oregontowncar.com/${locale}/services`,
    },
  }
}

export default async function ServicesPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const services = await serverApi.getServices()

  return (
    <PageShell>
      <Section title={dict.nav.services}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              slug={service.slug}
              description={service.description}
              locale={locale}
            />
          ))}
        </div>
      </Section>
    </PageShell>
  )
}
