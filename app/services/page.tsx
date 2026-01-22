import Link from "next/link"
import { generateServiceListSchema } from "@/lib/seo/jsonld"

export default function ServicesPage() {
  const services = [
    { slug: "airport", name: "Airport Transportation" },
    { slug: "corporate", name: "Corporate Travel" },
    { slug: "wine", name: "Wine Tours" },
    { slug: "long_distance", name: "Long Distance" }
  ]

  const serviceListSchema = generateServiceListSchema();

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListSchema)
        }}
      />

      <h1 className="text-3xl font-bold">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <Link 
            key={s.slug}
            href={`/services/${s.slug}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-600">{s.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
