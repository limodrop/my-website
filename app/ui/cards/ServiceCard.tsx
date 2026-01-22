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
      className="group p-8 border-2 border-gray-200 rounded-xl bg-white hover:border-yellow-600 hover:shadow-xl transition-all"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition">
        {name}
      </h3>
      {description && (
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      )}
      <div className="mt-4 text-yellow-600 font-semibold group-hover:underline">
        Learn More →
      </div>
    </a>
  )
}
