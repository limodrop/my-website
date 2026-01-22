import { serverApi } from "@/lib/api/serverClient"
import { Locale } from "@/lib/i18n/types"
import { Section } from "@/app/ui/layout/Section"
import { ServiceCard } from "@/app/ui/cards/ServiceCard"

export default async function ServicesPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang
  const services = await serverApi.getServices()
  const serviceIcons = ["✈️", "💼", "🍷", "🎉", "🚗", "🏨"]

  return (
    <div>
      <Section 
        title="Our Premium Services"
        subtitle="Luxury transportation tailored to your needs"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              slug={service.slug}
              description={service.description}
              icon={serviceIcons[idx % serviceIcons.length]}
              locale={locale}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}
