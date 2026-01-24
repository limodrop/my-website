import Link from 'next/link';
import { JsonLd } from './JsonLd';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale?: string;
}

export function Breadcrumb({ items, locale = 'en' }: BreadcrumbProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://oregontowncar.com';
  
  // Build BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema as any} />
      <div className="border-b border-border bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {index > 0 && <span className="text-text-tertiary">/</span>}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-text-primary font-medium">{item.label}</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
