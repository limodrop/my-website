import { serverApi } from "@/lib/api/serverClient"
import { notFound } from "next/navigation"
import { PageShell } from "@/app/ui/layout/PageShell"
import BookingCTA from "@/app/components/BookingCTA"

interface Props {
  params: { slug: string; lang: string }
}

export default async function CountryDetailPage({ params }: Props) {
  const [serviceArea, services] = await Promise.all([
    serverApi.getServiceArea(),
    serverApi.getServices(),
  ])

  const country = serviceArea.countries.find((c) => c.slug === params.slug)
  if (!country) notFound()

  return (
    <PageShell>
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-4">
        {country.name}
      </h1>
      <p className="text-lg text-[var(--textMuted)] mb-8">
        Premium chauffeur service across {country.cities}+ cities
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
          Services Available in {country.name}
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="
                p-6 rounded-lg
                bg-[var(--surface)]
                border border-[var(--border)]
                hover:border-[var(--primary)]
                transition shadow-sm
              "
            >
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-[var(--textMuted)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BookingCTA locale={params.lang} />
    </PageShell>
  )
}
