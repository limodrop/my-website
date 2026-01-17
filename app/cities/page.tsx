import Link from "next/link"

export default function CitiesPage() {
  const cities = [
    { slug: "portland", name: "Portland" },
    { slug: "beaverton", name: "Beaverton" },
    { slug: "hillsboro", name: "Hillsboro" },
    { slug: "vancouver", name: "Vancouver" }
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Cities We Serve</h1>

      <ul className="space-y-2">
        {cities.map((c) => (
          <li key={c.slug}>
            <Link href={`/cities/${c.slug}`} className="text-blue-600 underline">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
