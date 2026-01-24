import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { buildLocalBusinessSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Partner Network | Oregon Town Car',
  description: 'Trusted partnerships with Portland\'s finest hotels, event venues, and corporate travel providers. Premium chauffeur service for guests and clients.',
  openGraph: {
    title: 'Partner Network | Oregon Town Car',
    description: 'Trusted partnerships with Portland\'s finest hotels, event venues, and corporate travel providers.',
  },
};

export default function PartnersPage() {
  const schemaData = buildLocalBusinessSchema();

  const partnerCategories = [
    {
      title: 'Hotel Partners',
      description: 'Recommended luxury hotels and accommodations throughout Portland and the surrounding areas.',
      href: '/en/partners/hotels',
      icon: '🏨',
    },
    {
      title: 'Event Venues',
      description: 'Premier wedding venues, convention centers, and corporate event spaces we serve.',
      href: '/en/partners/venues',
      icon: '🎭',
    },
    {
      title: 'Corporate Travel',
      description: 'Executive transportation solutions for corporate clients, roadshows, and conferences.',
      href: '/en/partners/corporate',
      icon: '💼',
    },
  ];

  return (
    <>
      <JsonLd data={schemaData} />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Partner Network
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Oregon Town Car collaborates with Portland&#39;s finest hotels, event venues, and corporate travel providers to deliver seamless, premium chauffeur service.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Partner Categories Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {partnerCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group bg-white rounded-lg shadow-lg border border-slate-200 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                    Explore →
                  </div>
                </Link>
              ))}
            </div>

            {/* Partnership Benefits */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Why Partner with Oregon Town Car?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Premium Service Guarantee</h3>
                  <p className="text-slate-600">
                    Your guests and clients receive white-glove treatment with professional chauffeurs, immaculate vehicles, and on-time performance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">24/7 Availability</h3>
                  <p className="text-slate-600">
                    Round-the-clock dispatch and customer support ensures your clients are always taken care of, regardless of flight delays or schedule changes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Seamless Coordination</h3>
                  <p className="text-slate-600">
                    Direct concierge and event coordinator support for streamlined booking and real-time updates.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Worldwide Network</h3>
                  <p className="text-slate-600">
                    Consistent service across 64+ cities in 13 countries—perfect for traveling executives and destination events.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <p className="text-sm text-slate-700">
                <strong>Partnership Disclaimer:</strong> Unless explicitly stated, Oregon Town Car is not formally affiliated with the hotels, venues, or organizations listed on these pages. Properties are listed for guest convenience and represent locations we frequently serve with excellence. For formal partnership inquiries, please{' '}
                <Link href="/en/contact" className="text-blue-600 hover:underline font-semibold">
                  contact us
                </Link>.
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-12">
              <h2 className="text-3xl font-bold mb-4">
                Interested in Partnership?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                We&#39;re always looking to collaborate with premium properties and event organizers.
              </p>
              <Link
                href="/en/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
