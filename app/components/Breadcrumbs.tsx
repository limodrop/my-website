import Link from "next/link"

type Crumb = { label: string; href?: string }

interface BreadcrumbsProps {
  items: Crumb[]
  locale?: string
}

export function Breadcrumbs({ items, locale }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-[var(--textMuted)] mb-6">
      {items.map((item, i) => (
        <span key={i}>
          {item.href ? (
            <Link
              href={locale ? `/${locale}${item.href}` : item.href}
              className="hover:text-[var(--primary)] transition"
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
  )
}
