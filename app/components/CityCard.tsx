import Link from "next/link";

interface CityCardProps {
  slug: string;
  name: string;
  description?: string;
  locale: string;
}

export default function CityCard({ slug, name, description, locale }: CityCardProps) {
  return (
    <Link 
      href={`/${locale}/cities/${slug}`}
      className="
        block p-6 rounded-lg
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-sm
        hover:shadow-md
        transition-all duration-200
        hover:-translate-y-1
      "
    >
      <h3 className="text-xl font-bold text-[var(--text)] mb-2">{name}</h3>
      {description && (
        <p className="text-[var(--textMuted)]">{description}</p>
      )}
    </Link>
  );
}
