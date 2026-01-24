import { Metadata } from 'next';
import Link from 'next/link';
import { worldwideCountries } from '@/lib/data/worldwide/countries';
import { worldwideCities } from '@/lib/data/worldwide/cities';
import { worldwideAirports } from '@/lib/data/worldwide/airports';
import { WorldwideCTA } from '@/app/components/worldwide/WorldwideCTA';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { RelatedLinks } from '@/app/components/seo/RelatedLinks';
import { ContextualFAQ, buildFAQSchema } from '@/app/components/seo/ContextualFAQ';
import { buildLocalBusinessSchema, buildWorldwideServiceSchema } from '@/lib/seo/schema';
import { getRelatedLinksForWorldwide } from '@/lib/seo/internalLinks';
import { defaultLocale } from '@/lib/i18n/locales';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://oregontowncar.com';
  
  return {
    title: 'Worldwide Chauffeur Service | Oregon Town Car',
    description: 'Professional chauffeur service in major cities worldwide. Airport transfers, corporate travel, and luxury transportation globally.',
    alternates: {
      canonical: `${baseUrl}/${defaultLocale}/worldwide`,
      languages: {
        'en': `${baseUrl}/en/worldwide`,
        'x-default': `${baseUrl}/en/worldwide`,
      },
    },
  };
}

export default async function WorldwidePage() {
  const relatedLinks = getRelatedLinksForWorldwide();
  const localBusinessSchema = buildLocalBusinessSchema();
  const serviceSchema = buildWorldwideServiceSchema();
  
  const worldwideFAQs = [
    {
      question: 'How does worldwide chauffeur service work?',
      answer: 'We partner with vetted professional chauffeur companies in cities worldwide. When you book, we coordinate with our trusted partners to ensure the same premium service standards you expect from Oregon Town Car.',
    },
    {
      question: 'Which cities and countries do you serve?',
      answer: 'We serve 64+ major cities across 13 countries, including all major business and travel destinations in North America, Europe, Middle East, and Asia. View our worldwide coverage for the complete list of cities and airports.',
    },
    {
      question: 'Is pricing consistent worldwide?',
      answer: 'Pricing varies by location based on local market rates, vehicle availability, and distance. You will receive a transparent quote before booking with no hidden fees.',
    },
    {
      question: 'Can I book multi-city itineraries?',
      answer: 'Yes, we can coordinate transportation across multiple cities and countries for complex travel itineraries. Contact our concierge team for custom multi-destination arrangements.',
    },
  ];

  const faqSchema = buildFAQSchema(worldwideFAQs) as any;
  
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <JsonLd data={[localBusinessSchema, serviceSchema, faqSchema]} />
      
      {/* Hero */}
      <div className="bg-gradient-to-b from-surface to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Global Chauffeur Service
            </h1>
            <p className="text-xl text-text-secondary mb-6">
              Professional chauffeur service in major cities worldwide. From airport transfers to corporate travel, 
              we provide premium transportation wherever you need us.
            </p>
            <p className="text-lg text-text-secondary">
              We coordinate with vetted professional chauffeur partners globally to deliver consistent luxury standards, 
              reliable service, and the same premium experience you expect—no matter which city you're visiting.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Your City</h3>
              <p className="text-sm text-text-secondary">Select from our extensive network of cities worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Request a Quote</h3>
              <p className="text-sm text-text-secondary">Get instant pricing for your specific route and needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Book Online</h3>
              <p className="text-sm text-text-secondary">Secure your reservation with our easy booking system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enjoy Your Ride</h3>
              <p className="text-sm text-text-secondary">Meet your professional chauffeur and travel in comfort</p>
            </div>
          </div>
        </div>
      </div>

      {/* Countries */}
      <div className="bg-surface border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Countries We Serve</h2>
          <p className="text-lg text-text-secondary mb-12 max-w-3xl">
            Premium chauffeur service across {worldwideCountries.length} countries with local expertise and global standards.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {worldwideCountries.map((country) => (
              <Link
                key={country.slug}
                href={`/en/countries/${country.slug}`}
                className="group p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {country.name}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {country.citiesCount} cities available
                </p>
                <p className="text-sm text-text-tertiary line-clamp-2">
                  {country.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Major Cities */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Major Cities</h2>
        <p className="text-lg text-text-secondary mb-12 max-w-3xl">
          Professional transportation in the world's most important business and travel destinations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {worldwideCities.slice(0, 16).map((city) => (
            <Link
              key={city.slug}
              href={`/en/worldwide/cities/${city.slug}`}
              className="group p-6 rounded-lg border border-border bg-surface hover:border-primary hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {city.name}
              </h3>
              <p className="text-sm text-text-secondary mb-3">{city.country}</p>
              <p className="text-sm text-text-tertiary line-clamp-2">
                {city.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-text-secondary">
            + {worldwideCities.length - 16} more cities available worldwide
          </p>
        </div>
      </div>

      {/* International Airports */}
      <div className="bg-surface border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">International Airport Hubs</h2>
          <p className="text-lg text-text-secondary mb-12 max-w-3xl">
            Professional meet and greet service at major airports worldwide with flight monitoring and complimentary wait time.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {worldwideAirports.slice(0, 12).map((airport) => (
              <Link
                key={airport.code}
                href={`/en/worldwide/airports/${airport.code.toLowerCase()}`}
                className="group p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {airport.code}
                    </h3>
                    <p className="text-sm text-text-secondary">{airport.city}, {airport.country}</p>
                  </div>
                </div>
                <p className="text-sm font-medium mb-2">{airport.name}</p>
                <p className="text-sm text-text-tertiary line-clamp-2">
                  {airport.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-text-secondary">
              + {worldwideAirports.length - 12} more international airports
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <WorldwideCTA />

      {/* FAQs */}
      <ContextualFAQ faqs={worldwideFAQs} />

      {/* Related Links */}
      <RelatedLinks
        countries={relatedLinks.countries}
        cities={relatedLinks.cities}
        airports={relatedLinks.airports}
        locale="en"
      />
    </div>
  );
}
