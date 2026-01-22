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
      className="group p-8 border-2 border-[#D1D1D1] rounded-xl bg-white hover:border-[#0067B8] hover:shadow-xl transition-all"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#1B1B1B] group-hover:text-[#0067B8] transition">
        {name}
      </h3>
      {description && (
        <p className="text-[#5A5A5A] text-sm line-clamp-2">{description}</p>
      )}
      <div className="mt-4 text-[#0067B8] font-semibold group-hover:underline">
        Learn More →
      </div>
    </a>
  )
}
