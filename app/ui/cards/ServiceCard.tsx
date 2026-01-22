interface ServiceCardProps {
  name: string
  slug: string
  description?: string
  icon?: string
  locale: string
}

export function ServiceCard({ name, slug, description, icon = "✈️", locale }: ServiceCardProps) {
  return (
    <a
      href={`/${locale}/services/${slug}`}
      className="
        block rounded-lg overflow-hidden
        border border-[#D1D1D1]
        bg-white
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md hover:border-[#0067B8]
      "
    >
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-[#1B1B1B]">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-[#5A5A5A] line-clamp-2">
            {description}
          </p>
        )}
        <div className="mt-4 text-[#0067B8] font-semibold text-sm">
          Learn More →
        </div>
      </div>
    </a>
  )
}
