import Link from "next/link"

export default function ServicesPage() {
  const services = [
    { slug: "airport", name: "Airport Transportation" },
    { slug: "corporate", name: "Corporate Travel" },
    { slug: "wine", name: "Wine Tours" },
    { slug: "long_distance", name: "Long Distance" }
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Our Services</h1>

      <ul className="space-y-2">
        {services.map((s) => (
          <li key={s.slug}>
            <Link href={`/services/${s.slug}`} className="text-blue-600 underline">
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
