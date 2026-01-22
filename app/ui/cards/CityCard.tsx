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
      className="group p-6 border-2 border-gray-200 rounded-xl bg-white hover:border-yellow-600 hover:shadow-lg transition-all text-center"
    >
      <div className="text-3xl mb-3">📍</div>
      <h3 className="text-lg font-bold group-hover:text-yellow-600 transition">
        {name}
      </h3>
      {country && (
        <p className="text-sm text-gray-600 mt-1">{country}</p>
      )}
      <div className="mt-3 text-yellow-600 font-semibold text-sm group-hover:underline">
        View City →
      </div>
    </a>
  )
}
