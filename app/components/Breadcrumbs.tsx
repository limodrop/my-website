import Link from "next/link";

export default function Breadcrumbs({ 
  items, 
  locale = "en" 
}: { 
  items: Array<{ label: string; href?: string }>;
  locale?: string;
}) {
  return (
    <nav className="text-sm text-[var(--textMuted)] mb-6">
      {items.map((item, i) => (
        <span key={i}>
          {item.href ? (
            <Link
              href={`/${locale}${item.href}`}
              className="hover:text-[var(--primary)]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text)]">{item.label}</span>
          )}

          {i < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
}
