import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCountryBySlug, worldwideCountries } from '@/lib/data/worldwide/countries';
import { getCitiesByCountry } from '@/lib/data/worldwide/cities';
import { WorldwideCTA } from '@/app/components/worldwide/WorldwideCTA';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { RelatedLinks } from '@/app/components/seo/RelatedLinks';
import { buildLocalBusinessSchema, buildCountryServiceSchema } from '@/lib/seo/schema';
import { getRelatedLinksForCountry } from '@/lib/seo/internalLinks';
import { defaultLocale } from '@/lib/i18n/locales';

interface Props {
  params: { slug: string; lang: string };
}

export async function generateStaticParams() {
  return worldwideCountries.map((country) => ({
    slug: country.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = getCountryBySlug(params.slug);

  if (!country) {
    return {
      title: 'Country Not Found',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://oregontowncar.com';

  return {
    title: `Chauffeur Service in ${country.name} | Oregon Town Car`,
    description: country.description,
    alternates: {
      canonical: `${baseUrl}/${defaultLocale}/countries/${params.slug}`,
      languages: {
        'en': `${baseUrl}/en/countries/${params.slug}`,
        'x-default': `${baseUrl}/en/countries/${params.slug}`,
      },
    },
  };
}

export default async function CountryDetailPage({ params }: Props) {
  const country = getCountryBySlug(params.slug);

  if (!country) {
    notFound();
  }

  const countryCities = getCitiesByCountry(params.slug);
  const relatedLinks = getRelatedLinksForCountry(params.slug);
  const localBusinessSchema = buildLocalBusinessSchema();
  const serviceSchema = buildCountryServiceSchema({
    countryName: country.name,
    description: country.description,
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://oregontowncar.com'}/en/countries/${params.slug}`,
  });

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <JsonLd data={[localBusinessSchema, serviceSchema]} />
      
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/en" className="text-text-secondary hover:text-primary">
              Home
            </Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/en/worldwide" className="text-text-secondary hover:text-primary">
              Worldwide
            </Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/en/countries" className="text-text-secondary hover:text-primary">
              Countries
            </Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-text-primary font-medium">{country.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-b from-surface to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Chauffeur Service in {country.name}
            </h1>
            <p className="text-xl text-text-secondary mb-4">
              {country.description}
            </p>
            <p className="text-lg text-text-secondary">
              Professional transportation across {country.citiesCount} cities with local expertise and global standards.
            </p>
          </div>
        </div>
      </div>

      {/* Popular Cities */}
      {countryCities.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl font-bold mb-4">Cities We Serve in {country.name}</h2>
          <p className="text-lg text-text-secondary mb-12">
            Professional chauffeur service in major cities throughout {country.name}.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {countryCities.map((city) => (
              <Link
                key={city.slug}
                href={`/en/worldwide/cities/${city.slug}`}
                className="group p-6 rounded-lg border border-border bg-surface hover:border-primary hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {city.airports.length > 0 && `${city.airports.length} airport${city.airports.length > 1 ? 's' : ''} served`}
                </p>
                <p className="text-sm text-text-tertiary line-clamp-2">
                  {city.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Services */}
      <div className="bg-surface border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl font-bold mb-12">Our Services in {country.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-border bg-background">
              <h3 className="text-xl font-semibold mb-3">Airport Transfers</h3>
              <p className="text-text-secondary">
                Professional meet and greet service at all major airports in {country.name}. Flight monitoring, 
                complimentary wait time, and luxury vehicles.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background">
              <h3 className="text-xl font-semibold mb-3">Corporate Travel</h3>
              <p className="text-text-secondary">
                Executive chauffeur service for business meetings, conferences, and corporate events. 
                Professional drivers and premium vehicles.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background">
              <h3 className="text-xl font-semibold mb-3">Special Events</h3>
              <p className="text-text-secondary">
                Luxury transportation for weddings, galas, concerts, and private occasions. 
                Tailored service for your special moments.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background">
              <h3 className="text-xl font-semibold mb-3">City Transfers</h3>
              <p className="text-text-secondary">
                Point-to-point transportation throughout {country.name}. Reliable service for hotels, 
                restaurants, and all destinations.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background">
              <h3 className="text-xl font-semibold mb-3">Multi-Day Services</h3>
              <p className="text-text-secondary">
                Dedicated chauffeur service for tours, business trips, and extended travel. 
                Flexible arrangements to meet your needs.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background">
              <h3 className="text-xl font-semibold mb-3">VIP Concierge</h3>
              <p className="text-text-secondary">
                Premium concierge service including reservations, planning, and personalized assistance 
                throughout your journey in {country.name}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Experienced, vetted chauffeurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Professional appearance and conduct</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Local knowledge and expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Luxury Fleet</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Premium sedans and SUVs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Immaculately maintained vehicles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Complimentary amenities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Wi-Fi and charging ports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <WorldwideCTA />

      {/* Related Links */}
      <RelatedLinks
        cities={relatedLinks.cities}
        airports={relatedLinks.airports}
        services={relatedLinks.services}
        locale="en"
      />
    </div>
  );
}

