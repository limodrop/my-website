import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'Chauffeur Service in Germany | Airport Transportation | Oregon Town Car',
  description: 'Professional chauffeur service available in major German cities. Airport transfers, corporate travel, and executive transportation in Frankfurt and throughout Germany.',
  keywords: 'Germany chauffeur service, German airport transportation, Frankfurt chauffeur, corporate travel Germany',
};

const majorCities = [
  { name: 'Frankfurt (FRA)', slug: 'frankfurt-fra', description: 'Executive chauffeur service for Frankfurt Airport and business districts' },
];

export default function GermanyPage({
  params
}: {
  params: { lang: Locale }
}) {
  const locale = params.lang;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-slate-300 mb-4">
              <Link href={`/${locale}/worldwide`} className="hover:text-white">Worldwide</Link>
              <span>→</span>
              <span>Germany</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Chauffeur Service in Germany
            </h1>
            <p className="text-lg text-slate-200">
              Professional airport transfers and executive transportation in Frankfurt and throughout Germany. 
              The same premium service you trust, now available across Germany.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Germany Chauffeur Availability</h2>
            <p className="text-[var(--textMuted)] mb-4">
              Oregon Town Car partners with vetted professional chauffeur services across Germany to provide 
              seamless airport transfers, corporate travel, and executive transportation. Whether you're traveling to 
              Frankfurt for financial meetings, trade shows, or international conferences, 
              our German partner network delivers consistent, reliable service.
            </p>
            <p className="text-[var(--textMuted)]">
              All partner chauffeurs are licensed, insured, and trained to the highest German standards. You'll experience the 
              same white-glove service, professional communication, and luxury vehicles no matter where you travel in Germany.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Airport Meet & Greet Service</h2>
            <p className="text-[var(--textMuted)] mb-6">
              Every German airport transfer includes complimentary meet & greet service. Your chauffeur will:
            </p>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Track your flight in real-time and adjust pickup for delays</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Meet you at arrivals with a professional name sign</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Assist with luggage and escort you to the vehicle</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Provide direct transportation to your hotel or business address</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Corporate & VIP Travel Focus</h2>
            <p className="text-[var(--textMuted)] mb-6">
              Our German chauffeur network specializes in serving business travelers, corporate executives, and VIP clients who require:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">Executive Airport Transfers</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Seamless arrivals and departures for C-suite travelers at Frankfurt Airport and other major German hubs. Professional chauffeurs ensure you're on time for 
                  flights and meetings with discreet, reliable service.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">Trade Show & Conference Travel</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Coordinate chauffeur service for major trade shows like IAA, Frankfurt Book Fair, and international conferences. 
                  Consistent service across German cities.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">Corporate Account Management</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Dedicated account support for companies with frequent German travel needs. Centralized billing, travel reporting, 
                  and priority booking for corporate clients.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">Multi-City Business Tours</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Group transportation for roadshows and executive tours. From solo executive transfers to 
                  mini coach service for teams.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">German Cities We Serve</h2>
            <div className="space-y-4">
              {majorCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${locale}/worldwide/cities/${city.slug}`}
                  className="block bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--primary)] transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)]">
                        {city.name}
                      </h3>
                      <p className="text-sm text-[var(--textMuted)]">
                        {city.description}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Booking German Chauffeur Service</h2>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold mb-3">1</div>
                  <h3 className="font-semibold text-[var(--text)] mb-2">Select Your City</h3>
                  <p className="text-sm text-[var(--textMuted)]">
                    Choose from our German cities above. Each city page provides service details, airport coverage, and local information.
                  </p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold mb-3">2</div>
                  <h3 className="font-semibold text-[var(--text)] mb-2">Submit Travel Details</h3>
                  <p className="text-sm text-[var(--textMuted)]">
                    Provide your flight information, pickup/drop-off addresses, and any special requests via our contact form.
                  </p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold mb-3">3</div>
                  <h3 className="font-semibold text-[var(--text)] mb-2">Receive Confirmation</h3>
                  <p className="text-sm text-[var(--textMuted)]">
                    Get instant pricing and booking confirmation. Chauffeur contact details sent 24 hours before pickup.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link 
                href={`/${locale}/services/airport-transportation`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Airport Transportation</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Professional airport transfers in Portland and worldwide.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/services/corporate-travel`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Corporate Travel</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Executive transportation for business travelers.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/worldwide`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Worldwide Coverage</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  View all international destinations and services.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">View all →</span>
              </Link>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Book German Chauffeur Service</h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Professional transportation in Frankfurt and throughout Germany. Airport transfers, corporate travel, and executive service.
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Request Service
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
