interface CityCardProps {
  name: string
  slug: string
  country?: string
  locale: string
}

export function CityCard({ name, slug, country, locale }: CityCardProps) {
  return (
    <a
      href={`/${locale}/cities/${slug}`}
      className="
        block rounded-lg overflow-hidden
        border border-[#D1D1D1]
        bg-white
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md hover:border-[#0067B8]
        text-center
      "
    >
      <div className="p-6">
        <div className="text-3xl mb-3">📍</div>
        <h3 className="text-lg font-semibold text-[#1B1B1B]">
          {name}
        </h3>
        {country && (
          <p className="text-sm text-[#5A5A5A] mt-1">{country}</p>
        )}
        <div className="mt-3 text-[#0067B8] font-semibold text-sm">
          View City →
        </div>
      </div>
    </a>
  )
}
