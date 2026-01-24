import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { buildLocalBusinessSchema } from '@/lib/seo/schema';
import { defaultLocale } from '@/lib/i18n/locales';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://oregontowncar.com';
  
  return {
    title: 'Transportation Resources & Guides | Oregon Town Car',
    description: 'Expert guides on airport transportation, chauffeur services, wine tours, and corporate travel. Learn how to plan your luxury transportation.',
    alternates: {
      canonical: `${baseUrl}/${defaultLocale}/resources`,
      languages: {
        'en': `${baseUrl}/en/resources`,
        'x-default': `${baseUrl}/en/resources`,
      },
    },
  };
}

const articles = [
  {
    title: 'Best Way to Get From PDX Airport to Downtown Portland',
    slug: 'pdx-airport-to-downtown-portland',
    excerpt: 'Compare your options for getting from Portland International Airport to downtown Portland. Learn why professional chauffeur service beats rideshare and taxis for comfort, reliability, and value.',
    category: 'Airport Transportation',
    readTime: '5 min read',
    relatedPages: [
      { label: 'PDX Airport Service', href: '/en/worldwide/airports/pdx' },
      { label: 'Portland Chauffeur Service', href: '/en/worldwide/cities/portland' },
      { label: 'Airport Transportation', href: '/en/services/airport-transportation' },
    ],
  },
  {
    title: 'Chauffeur Service vs Rideshare for Business Travel',
    slug: 'chauffeur-vs-rideshare-business-travel',
    excerpt: 'Discover why executive travelers choose professional chauffeur service over rideshare apps. Compare cost, reliability, professionalism, and productivity benefits.',
    category: 'Corporate Travel',
    readTime: '6 min read',
    relatedPages: [
      { label: 'Corporate Travel Services', href: '/en/services/corporate-travel' },
      { label: 'Executive Transportation', href: '/en/services/executive-transportation' },
      { label: 'Worldwide Business Travel', href: '/en/worldwide' },
    ],
  },
  {
    title: 'How Worldwide Chauffeur Services Work',
    slug: 'how-worldwide-chauffeur-services-work',
    excerpt: 'Planning international travel? Learn how our worldwide chauffeur network ensures consistent luxury service in 64+ cities across 13 countries.',
    category: 'Worldwide Services',
    readTime: '7 min read',
    relatedPages: [
      { label: 'Worldwide Coverage', href: '/en/worldwide' },
      { label: 'International Cities', href: '/en/worldwide/cities' },
      { label: 'Major Airports', href: '/en/worldwide/airports' },
    ],
  },
  {
    title: 'Wine Tour Transportation in Willamette Valley',
    slug: 'willamette-valley-wine-tour-transportation',
    excerpt: 'Plan the perfect Willamette Valley wine tour with professional chauffeur service. Learn about top wineries, tasting routes, and why designated driver service is essential.',
    category: 'Wine Tours',
    readTime: '8 min read',
    relatedPages: [
      { label: 'Wine Tour Services', href: '/en/services/wine-tours' },
      { label: 'Willamette Valley Tours', href: '/en/cities/portland' },
      { label: 'Special Occasions', href: '/en/services/special-events' },
    ],
  },
];

export default function ResourcesPage() {
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <div className="bg-gradient-to-b from-surface to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Transportation Resources & Guides
            </h1>
            <p className="text-xl text-text-secondary">
              Expert insights on airport transportation, chauffeur services, wine tours, and corporate travel. 
              Plan your luxury transportation with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group p-8 rounded-lg border border-border bg-surface hover:border-primary hover:shadow-lg transition-all duration-200"
              >
                <div className="mb-4">
                  <span className="text-sm font-semibold text-primary">
                    {article.category}
                  </span>
                  <span className="text-sm text-text-tertiary ml-3">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-text-secondary mb-2">Related Pages:</p>
                  <div className="flex flex-wrap gap-2">
                    {article.relatedPages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        href={page.href}
                        className="text-xs px-3 py-1 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-surface border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              More Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/en/faq"
                className="p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-md transition-all text-center"
              >
                <h3 className="text-lg font-semibold mb-2">FAQs</h3>
                <p className="text-sm text-text-secondary">
                  Common questions about booking, services, and policies
                </p>
              </Link>
              <Link
                href="/en/worldwide"
                className="p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-md transition-all text-center"
              >
                <h3 className="text-lg font-semibold mb-2">Worldwide Coverage</h3>
                <p className="text-sm text-text-secondary">
                  Explore our network of 64+ cities across 13 countries
                </p>
              </Link>
              <Link
                href="/en/contact"
                className="p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-md transition-all text-center"
              >
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-sm text-text-secondary">
                  Get personalized assistance for your transportation needs
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Book Your Transportation?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Experience the difference of professional chauffeur service with Oregon Town Car.
          </p>
          <Link
            href="/en"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Book Online Now
          </Link>
        </div>
      </div>
    </div>
  );
}
