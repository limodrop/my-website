interface FleetCardProps {
  name: string
  slug: string
  capacity?: string
  luggage?: string
  icon?: string
  locale: string
}

export function FleetCard({ name, slug, capacity, luggage, icon = "🚗", locale }: FleetCardProps) {
  return (
    <a
      href={`/${locale}/fleet/${slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
    >
      <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-6xl">
        {icon}
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-bold group-hover:text-yellow-600 transition">
          {name}
        </h3>
        {capacity && (
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Capacity:</span> {capacity}
          </p>
        )}
        {luggage && (
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Luggage:</span> {luggage}
          </p>
        )}
        <div className="pt-2 text-yellow-600 font-semibold group-hover:underline">
          View Vehicle →
        </div>
      </div>
    </a>
  )
}
