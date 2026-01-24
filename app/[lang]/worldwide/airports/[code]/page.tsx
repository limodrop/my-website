import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAirportByCode, worldwideAirports } from '@/lib/data/worldwide/airports';
import { WorldwideCTA } from '@/app/components/worldwide/WorldwideCTA';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { RelatedLinks } from '@/app/components/seo/RelatedLinks';
import { Breadcrumb } from '@/app/components/seo/Breadcrumb';
import { ContextualFAQ, buildFAQSchema } from '@/app/components/seo/ContextualFAQ';
import { buildLocalBusinessSchema, buildAirportServiceSchema } from '@/lib/seo/schema';
import { getRelatedLinksForAirport } from '@/lib/seo/internalLinks';
import { defaultLocale } from '@/lib/i18n/locales';

type Props = {
  params: { code: string; lang: string };
};

export async function generateStaticParams() {
  return worldwideAirports.map((airport) => ({
    code: airport.code.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const airport = getAirportByCode(params.code.toUpperCase());

  if (!airport) {
    return {
      title: 'Airport Not Found',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://oregontowncar.com';

  return {
    title: `${airport.code} Airport Chauffeur Service | Oregon Town Car`,
    description: airport.description,
    alternates: {
      canonical: `${baseUrl}/${defaultLocale}/worldwide/airports/${params.code.toLowerCase()}`,
      languages: {
        'en': `${baseUrl}/en/worldwide/airports/${params.code.toLowerCase()}`,
        'x-default': `${baseUrl}/en/worldwide/airports/${params.code.toLowerCase()}`,
      },
    },
  };
}

export default function WorldwideAirportPage({ params }: Props) {
  const airport = getAirportByCode(params.code.toUpperCase());

  if (!airport) {
    notFound();
  }

  const relatedLinks = getRelatedLinksForAirport(params.code.toUpperCase());
  const localBusinessSchema = buildLocalBusinessSchema();
  const serviceSchema = buildAirportServiceSchema({
    airportCode: airport.code,
    airportName: airport.name,
    city: airport.city,
    country: airport.country,
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://oregontowncar.com'}/en/worldwide/airports/${params.code.toLowerCase()}`,
  });

  const airportFAQs = [
    {
      question: 'Do you provide meet and greet service at airports?',
      answer: 'Yes, all airport pickups include complimentary meet and greet service. Your chauffeur will track your flight and meet you in the arrivals area with a name sign.',
    },
    {
      question: 'Is flight tracking included?',
      answer: 'Yes, we monitor all flights in real-time. If your flight is delayed or arrives early, your chauffeur will adjust pickup time accordingly at no extra charge.',
    },
    {
      question: 'How much wait time is included for airport pickups?',
      answer: 'We include 60 minutes complimentary wait time for domestic flights and 90 minutes for international flights, starting from actual landing time.',
    },
  ];

  const faqSchema = buildFAQSchema(airportFAQs) as any;

  const breadcrumbItems = [
    { label: 'Home', href: '/en' },
    { label: 'Worldwide', href: '/en/worldwide' },
    { label: 'Airports', href: '/en/worldwide' },
    { label: airport.code },
  ];

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <JsonLd data={[localBusinessSchema, serviceSchema, faqSchema]} />
      
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <div className="bg-gradient-to-b from-surface to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {airport.code} Airport Chauffeur Service
            </h1>
            <p className="text-lg text-text-secondary mb-6">
              {airport.name}
            </p>
            <p className="text-xl text-text-secondary">
              {airport.description}
            </p>
          </div>
        </div>
      </div>

      {/* Meet & Greet */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Professional Meet & Greet Service</h2>
          <div className="p-8 rounded-lg border border-border bg-surface mb-12">
            <p className="text-lg mb-6">
              {airport.meetGreetInfo}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Chauffeur meets you in arrivals hall</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Personalized name sign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Real-time flight monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Complimentary wait time for delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Luggage assistance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Premium Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Luxury vehicle fleet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Professional uniformed chauffeurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Bottled water & amenities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Wi-Fi available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Routes */}
          <h2 className="text-3xl font-bold mb-6">Common Routes from {airport.code}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {airport.commonRoutes.map((route, index) => (
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

      {/* How It Works */}
      <div className="bg-surface border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">How Airport Pickup Works</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Book Online</h3>
              <p className="text-sm text-text-secondary">
                Provide your flight details and destination when booking
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">We Monitor Your Flight</h3>
              <p className="text-sm text-text-secondary">
                Real-time tracking ensures your chauffeur is there when you land
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Meet & Go</h3>
              <p className="text-sm text-text-secondary">
                Look for your name sign in arrivals and head to your luxury vehicle
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <WorldwideCTA />

      {/* FAQs */}
      <ContextualFAQ 
        faqs={airportFAQs}
        title={`${airport.code} Airport Transportation FAQs`}
      />

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
