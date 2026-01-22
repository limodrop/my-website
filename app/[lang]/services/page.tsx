import { serverApi } from "@/lib/api/serverClient"
import { Locale } from "@/lib/i18n/types"
import { ServiceCard } from "@/app/ui/cards/ServiceCard"
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
    <>
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-4">
        {dict.nav.services}
      </h1>
      <p className="text-lg text-[var(--textMuted)] mb-10">
        Premium chauffeur services designed for airport travel, corporate needs, and point-to-point transportation worldwide.
      </p>

      <div className="grid-responsive">
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
    </>
  )
}
