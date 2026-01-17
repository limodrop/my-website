import Link from "next/link"

export default function FleetPage() {
  const fleet = [
    { slug: "sedan", name: "Luxury Sedan" },
    { slug: "suv", name: "Premium SUV" },
    { slug: "sprinter", name: "Mercedes Sprinter" }
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Our Fleet</h1>

      <ul className="space-y-2">
        {fleet.map((f) => (
          <li key={f.slug}>
            <Link href={`/fleet/${f.slug}`} className="text-blue-600 underline">
              {f.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
