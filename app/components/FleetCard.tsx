import Link from "next/link";

interface FleetCardProps {
  slug: string;
  name: string;
  tagline?: string;
  locale: string;
}

export default function FleetCard({ slug, name, tagline, locale }: FleetCardProps) {
  return (
    <Link 
      href={`/${locale}/fleet/${slug}`}
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
      {tagline && (
        <p className="text-[var(--textMuted)]">{tagline}</p>
      )}
    </Link>
  );
}
