import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'Portland Airport Routes & Transportation Times | Oregon Town Car',
  description: 'Explore common routes from PDX Airport to Portland destinations. Estimated travel times, distance, and chauffeur service information for reliable transportation.',
  keywords: 'PDX to Portland, Portland airport routes, PDX transportation times, airport to downtown Portland, PDX to Beaverton',
};

export default function RoutesIndexPage({
  params
}: {
  params: { lang: Locale }
}) {
  const locale = params.lang;

  const routes = [
    {
      slug: 'pdx-to-downtown-portland',
      title: 'PDX to Downtown Portland',
      distance: '12 miles',
      time: '25-35 min',
      description: 'Most popular route for business travelers and hotel guests'
    },
    {
      slug: 'pdx-to-beaverton',
      title: 'PDX to Beaverton',
      distance: '18 miles',
      time: '30-40 min',
      description: 'Direct access to Nike, Intel, and corporate offices'
    },
    {
      slug: 'pdx-to-lake-oswego',
      title: 'PDX to Lake Oswego',
      distance: '20 miles',
      time: '35-45 min',
      description: 'Residential area and upscale shopping district'
    },
    {
      slug: 'pdx-to-willamette-valley',
      title: 'PDX to Willamette Valley',
      distance: '40-60 miles',
      time: '60-90 min',
      description: 'Wine country tours and vineyard transportation'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Portland Airport Routes & Travel Times
            </h1>
            <p className="text-lg sm:text-xl text-slate-200">
              Explore common routes from PDX Airport to key Portland-area destinations with estimated 
              travel times and professional chauffeur service details.
            </p>
          </div>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {routes.map((route) => (
              <Link
                key={route.slug}
                href={`/${locale}/routes/${route.slug}`}
                className="block bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--primary)] hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-bold text-[var(--text)]">{route.title}</h2>
                  <span className="text-[var(--primary)] text-2xl">→</span>
                </div>
                <div className="flex gap-4 mb-3 text-sm text-[var(--textMuted)]">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    {route.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {route.time}
                  </span>
                </div>
                <p className="text-sm text-[var(--textMuted)] mb-4">{route.description}</p>
                <span className="text-[var(--primary)] font-medium text-sm">View Route Details →</span>
              </Link>
            ))}
          </div>

          {/* Why Professional Chauffeur Service */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 text-center">
              Why Choose Professional Chauffeur Service for These Routes
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Flight Tracking</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Automatic pickup adjustments for flight delays—no need to call or update your reservation
                </p>
              </div>

              <div className="text-center p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Fixed Pricing</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Transparent flat rates for each route—no surge pricing or metered fares
                </p>
              </div>

              <div className="text-center p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Luxury Comfort</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Late-model sedans and SUVs with premium amenities for a first-class travel experience
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Need Transportation for Any of These Routes?
            </h2>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
              Book professional chauffeur service with fixed pricing, flight tracking, and guaranteed on-time arrival.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}`}
                className="inline-block px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Book Now
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
