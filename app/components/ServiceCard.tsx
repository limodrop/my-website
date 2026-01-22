import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  name: string;
  description?: string;
  locale: string;
}

export default function ServiceCard({ slug, name, description, locale }: ServiceCardProps) {
  return (
    <Link
      href={`/${locale}/services/${slug}`}
      className="
        block p-6 rounded-lg
        bg-white dark:bg-[var(--surface)]
        border border-gray-200 dark:border-[var(--border)]
        hover:border-[var(--primary)]
        transition-all
        shadow-sm hover:shadow-md
      "
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {description}
        </p>
      )}
    </Link>
  );
}
