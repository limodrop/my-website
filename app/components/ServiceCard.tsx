import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  title: string;
  tagline?: string;
  locale: string;
}

export default function ServiceCard({ slug, title, tagline, locale }: ServiceCardProps) {
  return (
    <Link 
      href={`/${locale}/services/${slug}`}
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
      <h3 className="text-xl font-bold text-[var(--text)] mb-2">{title}</h3>
      {tagline && (
        <p className="text-[var(--textMuted)]">{tagline}</p>
      )}
    </Link>
  );
}
