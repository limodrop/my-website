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
      className="
        block rounded-lg overflow-hidden
        border border-[#D1D1D1]
        bg-white
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md hover:border-[#0067B8]
      "
    >
      <div className="h-48 bg-gradient-to-br from-[#0067B8] to-[#005A9E] flex items-center justify-center text-6xl">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-[#1B1B1B]">
          {name}
        </h3>
        {capacity && (
          <p className="text-sm text-[#5A5A5A] mb-1">
            {capacity}
          </p>
        )}
        {luggage && (
          <p className="text-sm text-[#5A5A5A]">
            {luggage}
          </p>
        )}
        <div className="mt-4 text-[#0067B8] font-semibold text-sm">
          View Vehicle →
        </div>
      </div>
    </a>
  )
}
