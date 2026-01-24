import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/app/components/JsonLd';
import { buildLocalBusinessSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Corporate Travel Partners - Executive Transportation | Oregon Town Car',
  description: 'Premium corporate chauffeur service for executives, roadshows, conferences, and business travel. Trusted by Fortune 500 companies and Portland businesses.',
  openGraph: {
    title: 'Corporate Travel Partners - Executive Transportation | Oregon Town Car',
    description: 'Premium corporate chauffeur service for executives and business travel.',
  },
};

export default function CorporatePage() {
  const schemaData = buildLocalBusinessSchema();

  const corporateServices = [
    {
      title: 'Executive Transportation',
      description: 'Premium chauffeur service for C-suite executives, board members, and VIP clients. Discreet, professional, and always on time.',
      icon: '💼',
    },
    {
      title: 'Roadshows & Multi-City Tours',
      description: 'Coordinated transportation for investor roadshows, product launches, and multi-city business tours with seamless logistics.',
      icon: '🗺️',
    },
    {
      title: 'Conference & Convention Support',
      description: 'Airport transfers, venue shuttles, and executive transportation for conferences and trade shows in Portland and beyond.',
      icon: '🎯',
    },
    {
      title: 'Corporate Events & Galas',
      description: 'Transportation for company events, fundraisers, client dinners, and team-building activities.',
      icon: '🎭',
    },
    {
      title: 'Client Entertainment',
      description: 'Impress clients with premium chauffeur service for dinners, golf outings, wine tours, and cultural experiences.',
      icon: '🍷',
    },
    {
      title: 'Airport VIP Service',
      description: 'Meet-and-greet, luggage assistance, and priority check-in coordination for executive travelers at PDX and worldwide airports.',
      icon: '✈️',
    },
  ];

  const industries = [
    'Technology & Software',
    'Finance & Banking',
    'Healthcare & Pharmaceuticals',
    'Legal Services',
    'Real Estate & Development',
    'Manufacturing & Logistics',
    'Consulting & Professional Services',
    'Entertainment & Media',
  ];

  return (
    <>
      <JsonLd data={schemaData} />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <nav className="text-sm text-slate-400 mb-4">
                <Link href="/en" className="hover:text-white">Home</Link>
                {' '}/{' '}
                <Link href="/en/partners" className="hover:text-white">Partners</Link>
                {' '}/{' '}
                <span className="text-white">Corporate</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Corporate Travel Partners
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Premium executive transportation for businesses, conferences, roadshows, and corporate events. Trusted by Fortune 500 companies and Portland&#39;s leading organizations.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Oregon Town Car delivers white-glove corporate chauffeur service designed for executives, business travelers, and companies that demand excellence. From airport transfers to multi-city roadshows, we ensure every detail is flawless.
              </p>
            </div>

            {/* Corporate Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Corporate Transportation Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {corporateServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us for Corporate */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-8 mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Why Businesses Choose Oregon Town Car
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Dedicated Account Management</h3>
                  <p className="text-slate-600">
                    Assigned account representative for streamlined booking, billing, and service coordination.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Corporate Billing & Reporting</h3>
                  <p className="text-slate-600">
                    Monthly invoicing, detailed trip reports, and expense tracking for easy reconciliation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Global Network Access</h3>
                  <p className="text-slate-600">
                    Consistent service in 64+ cities across 13 countries—perfect for traveling executives.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">24/7 Executive Support</h3>
                  <p className="text-slate-600">
                    Round-the-clock dispatch and customer service for last-minute changes and urgent needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Professional Chauffeurs</h3>
                  <p className="text-slate-600">
                    Background-checked, licensed professionals trained in executive service and discretion.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Premium Fleet</h3>
                  <p className="text-slate-600">
                    Late-model luxury sedans and SUVs maintained to the highest standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Industries We Serve
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-slate-200 p-4 text-center hover:border-blue-300 transition-colors"
                  >
                    <p className="text-slate-700 font-medium text-sm">{industry}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Oregon Town Car has been our go-to for executive transportation for the past three years. Their professionalism, reliability, and attention to detail make them an invaluable partner for our business travel needs."
              </blockquote>
              <p className="text-sm text-slate-600 font-semibold">
                — Corporate Travel Manager, Fortune 500 Technology Company
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Elevate Your Corporate Travel?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Contact us for corporate account setup, volume pricing, and dedicated support.
              </p>
              <Link
                href="/en/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Request Corporate Account
              </Link>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Related Services</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/en/services/airport-transportation" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Airport Transportation
                </Link>
                <Link href="/en/services/corporate-travel" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Corporate Travel
                </Link>
                <Link href="/en/worldwide" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Worldwide Service
                </Link>
                <Link href="/en/cities/portland" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Portland Service
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
