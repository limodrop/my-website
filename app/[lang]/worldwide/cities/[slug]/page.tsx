import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug, worldwideCities } from '@/lib/data/worldwide/cities';
import { getAirportsByCity } from '@/lib/data/worldwide/airports';
import { WorldwideCTA } from '@/app/components/worldwide/WorldwideCTA';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { RelatedLinks } from '@/app/components/seo/RelatedLinks';
import { Breadcrumb } from '@/app/components/seo/Breadcrumb';
import { buildLocalBusinessSchema, buildCityServiceSchema } from '@/lib/seo/schema';
import { getRelatedLinksForCity } from '@/lib/seo/internalLinks';
import { defaultLocale } from '@/lib/i18n/locales';

type Props = {
  params: { slug: string; lang: string };
};

export async function generateStaticParams() {
  return worldwideCities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.slug);

  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://oregontowncar.com';

  return {
    title: `Chauffeur Service in ${city.name} | Oregon Town Car`,
    description: city.description,
    alternates: {
      canonical: `${baseUrl}/${defaultLocale}/worldwide/cities/${params.slug}`,
      languages: {
        'en': `${baseUrl}/en/worldwide/cities/${params.slug}`,
        'x-default': `${baseUrl}/en/worldwide/cities/${params.slug}`,
      },
    },
  };
}

export default function WorldwideCityPage({ params }: Props) {
  const city = getCityBySlug(params.slug);

  if (!city) {
    notFound();
  }

  const cityAirports = getAirportsByCity(city.name);
  const relatedLinks = getRelatedLinksForCity(params.slug);
  const localBusinessSchema = buildLocalBusinessSchema();
  const serviceSchema = buildCityServiceSchema({
    cityName: city.name,
    region: city.country,
    description: city.description,
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://oregontowncar.com'}/en/worldwide/cities/${params.slug}`,
    serviceTypes: ['Airport Transfer', 'Corporate Travel', 'Special Events', 'Wine Tours'],
  });

  const breadcrumbItems = [
    { label: 'Home', href: '/en' },
    { label: 'Worldwide', href: '/en/worldwide' },
    { label: 'Cities', href: '/en/worldwide' },
    { label: city.name },
  ];

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <JsonLd data={[localBusinessSchema, serviceSchema]} />
      
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <div className="bg-gradient-to-b from-surface to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Chauffeur Service in {city.name}
              </h1>
            </div>
            <p className="text-lg text-text-secondary mb-6">
              {city.country}
            </p>
            <p className="text-xl text-text-secondary">
              {city.description}
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl font-bold mb-8">Our Services in {city.name}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-border bg-surface">
            <h3 className="text-xl font-semibold mb-3">Airport Transfers</h3>
            <p className="text-text-secondary mb-4">
              Professional meet and greet service at all {city.name} airports. Flight monitoring, complimentary wait time, and door-to-door service.
            </p>
            <ul className="space-y-2">
              {cityAirports.length > 0 ? (
                cityAirports.map((airport) => (
                  <li key={airport.code} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">
                      <Link 
                        href={`/en/worldwide/airports/${airport.code.toLowerCase()}`}
                        className="hover:text-primary transition-colors"
                      >
                        {airport.code} - {airport.name}
                      </Link>
                    </span>
                  </li>
                ))
              ) : (
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-sm">All major airports in {city.name}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-surface">
            <h3 className="text-xl font-semibold mb-3">Corporate Travel</h3>
            <p className="text-text-secondary mb-4">
              Executive transportation for business meetings, conferences, and corporate events throughout {city.name}.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Professional chauffeurs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Luxury vehicles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">24/7 availability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Corporate billing</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-surface">
            <h3 className="text-xl font-semibold mb-3">Special Events</h3>
            <p className="text-text-secondary mb-4">
              Premium chauffeur service for weddings, galas, concerts, and special occasions in {city.name}.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Weddings & celebrations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Concert & sports events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Private tours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Multi-day arrangements</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-surface">
            <h3 className="text-xl font-semibold mb-3">Point-to-Point Service</h3>
            <p className="text-text-secondary mb-4">
              Reliable transportation for all your travel needs in {city.name} and surrounding areas.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Hotel transfers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Restaurant reservations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Sightseeing tours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Shopping excursions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Popular Routes */}
      {city.popularRoutes && city.popularRoutes.length > 0 && (
        <div className="bg-surface border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-3xl font-bold mb-8">Popular Routes in {city.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.popularRoutes.map((route, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border bg-background hover:border-primary transition-colors"
                >
                  <p className="font-medium">{route}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <WorldwideCTA />

      {/* Related Links */}
      <RelatedLinks
        countries={relatedLinks.countries}
        cities={relatedLinks.cities}
        airports={relatedLinks.airports}
        services={relatedLinks.services}
        locale="en"
      />
    </div>
  );
}
