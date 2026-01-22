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
      className="group p-6 border-2 border-[#D1D1D1] rounded-xl bg-white hover:border-[#0067B8] hover:shadow-lg transition-all text-center"
    >
      <div className="text-3xl mb-3">📍</div>
      <h3 className="text-lg font-bold text-[#1B1B1B] group-hover:text-[#0067B8] transition">
        {name}
      </h3>
      {country && (
        <p className="text-sm text-[#5A5A5A] mt-1">{country}</p>
      )}
      <div className="mt-3 text-[#0067B8] font-semibold text-sm group-hover:underline">
        View City →
      </div>
    </a>
  )
}
