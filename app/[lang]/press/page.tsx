import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { buildLocalBusinessSchema, buildOrganizationSchema, buildPersonSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Press & Media Kit | Oregon Town Car',
  description: 'Press information for Oregon Town Car. Brand description, founder bio, service overview, and media contact for journalists and bloggers.',
  openGraph: {
    title: 'Press & Media Kit | Oregon Town Car',
    description: 'Press information and media resources for Oregon Town Car chauffeur service.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PressPage() {
  const schemaData = buildLocalBusinessSchema();
  const organizationSchema = buildOrganizationSchema();
  const founderSchema = buildPersonSchema({
    name: 'Ali Al-Abbas',
    jobTitle: 'Founder & CEO',
    description: 'Ali Al-Abbas founded Oregon Town Car with a philosophy focused on seamless, professional, and stress-free transportation. Under his leadership, Oregon Town Car has grown from a local Portland chauffeur service to a worldwide network spanning 13 countries.',
    url: 'https://oregontowncar.com/en/press',
  });

  return (
    <>
      <JsonLd data={schemaData} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={founderSchema} />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Press & Media Kit
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Media resources and press information for Oregon Town Car chauffeur service.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Company Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Company Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Oregon Town Car is a premium chauffeur service based in Portland, Oregon, providing luxury ground transportation for executives, business travelers, and discerning clients worldwide. Founded by Ali Al-Abbas, the company has built a reputation for white-glove service, professional chauffeurs, and unwavering commitment to reliability.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Specializing in airport transfers, corporate travel, wine tours, and special events, Oregon Town Car serves Portland and the surrounding region while also offering seamless chauffeur service in 64+ cities across 13 countries through a trusted affiliate network.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  What sets Oregon Town Car apart is its focus on the details that matter: flight tracking with automatic adjustments, meet-and-greet service at baggage claim, fixed pricing with no surge charges, and chauffeurs who understand that time is the most valuable commodity for business travelers.
                </p>
              </div>
            </section>

            {/* Key Services */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Key Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Airport Transportation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Professional meet-and-greet service at Portland International Airport (PDX) and 37+ airports worldwide. Flight tracking, luggage assistance, and guaranteed on-time pickup.
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Corporate Travel</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Executive transportation for business travelers, roadshows, conferences, and corporate events. Monthly billing, dedicated account management, and priority booking.
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Wine Tours</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Full-day and half-day Willamette Valley wine tours with expert route planning, winery coordination, and safe transportation through Oregon wine country.
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Worldwide Service</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Consistent chauffeur service in 64+ cities across 13 countries through vetted affiliate partners. Same quality and reliability anywhere in the world.
                  </p>
                </div>
              </div>
            </section>

            {/* Founder Bio */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Founder & CEO
              </h2>
              <div className="bg-slate-50 rounded-lg border border-slate-200 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ali Al-Abbas
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ali Al-Abbas founded Oregon Town Car with a simple philosophy: transportation should be seamless, professional, and stress-free. With a background in hospitality and luxury service, Ali recognized that business travelers and discerning clients deserved better than the inconsistency of rideshare apps and the impersonal nature of traditional taxi services.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Under his leadership, Oregon Town Car has grown from a local Portland chauffeur service to a worldwide network spanning 13 countries. The company&#39;s commitment to fixed pricing, professional chauffeurs, and white-glove service has made it the preferred choice for executives, corporations, and travelers who value reliability.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Ali&#39;s vision extends beyond transportation—he believes that how you arrive at a destination sets the tone for the entire experience. Whether it is a business meeting, a wedding, or a wine tour, Oregon Town Car ensures every journey begins and ends with excellence.
                </p>
              </div>
            </section>

            {/* By the Numbers */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                By the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">64+</div>
                  <div className="text-sm text-slate-700 font-medium">Cities Served Worldwide</div>
                </div>
                <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">13</div>
                  <div className="text-sm text-slate-700 font-medium">Countries Covered</div>
                </div>
                <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">37+</div>
                  <div className="text-sm text-slate-700 font-medium">Airports Served</div>
                </div>
                <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-slate-700 font-medium">Customer Support</div>
                </div>
              </div>
            </section>

            {/* Core Values */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Core Values & Differentiators
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Reliability First</h3>
                  <p className="text-slate-600 text-sm">
                    Flight tracking, on-time pickups, and backup vehicles ensure clients never miss a meeting or flight.
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Fixed Pricing, No Surge</h3>
                  <p className="text-slate-600 text-sm">
                    Transparent quotes with no hidden fees or surge pricing—clients know exactly what they will pay.
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Professional Chauffeurs</h3>
                  <p className="text-slate-600 text-sm">
                    All chauffeurs are background-checked, commercially licensed, and trained in white-glove service.
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Premium Fleet</h3>
                  <p className="text-slate-600 text-sm">
                    Late-model luxury sedans and SUVs maintained to immaculate standards.
                  </p>
                </div>
              </div>
            </section>

            {/* Media Contact */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Media & Press Contact
              </h2>
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8">
                <p className="text-slate-300 mb-6">
                  For press inquiries, interview requests, or additional information, please contact:
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email</div>
                    <a href="mailto:press@oregontowncar.com" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
                      press@oregontowncar.com
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Phone</div>
                    <a href="tel:+15035550100" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
                      +1 (503) 555-0100
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Website</div>
                    <a href="https://oregontowncar.com" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
                      oregontowncar.com
                    </a>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mt-6">
                  We typically respond to media inquiries within 24 hours.
                </p>
              </div>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Additional Resources
              </h2>
              <div className="bg-white rounded-lg border border-slate-200 p-8">
                <p className="text-slate-700 mb-6">
                  For more information about Oregon Town Car services, please visit:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/en" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                    Home
                  </Link>
                  <Link href="/en/services" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                    Services
                  </Link>
                  <Link href="/en/worldwide" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                    Worldwide Coverage
                  </Link>
                  <Link href="/en/partners" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                    Partner Network
                  </Link>
                  <Link href="/en/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
