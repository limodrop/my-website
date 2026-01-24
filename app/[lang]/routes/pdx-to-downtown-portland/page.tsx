import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'PDX to Downtown Portland Transportation | 25-35 Minutes | Oregon Town Car',
  description: 'Reliable chauffeur service from Portland Airport (PDX) to Downtown Portland. 12 miles, 25-35 minutes. Fixed pricing, flight tracking, meet & greet service.',
  keywords: 'PDX to downtown Portland, Portland airport to downtown, PDX transportation, Portland airport chauffeur',
};

export default function PDXtoDowntownPage({
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
              <Link href={`/${locale}/routes`} className="hover:text-white">Routes</Link>
              <span>→</span>
              <span>PDX to Downtown Portland</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              PDX Airport to Downtown Portland
            </h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                12 miles
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                25-35 minutes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Route Overview</h2>
            <p className="text-[var(--textMuted)] mb-4">
              The PDX Airport to Downtown Portland route is the most popular transportation corridor in the Portland metro area. 
              Covering approximately 12 miles via I-205 and I-84, this direct route typically takes 25-35 minutes depending on 
              time of day and traffic conditions.
            </p>
            <p className="text-[var(--textMuted)]">
              Downtown Portland is home to most major hotels, corporate offices, and business districts, making this the primary 
              route for business travelers, conference attendees, and visitors staying in the city center.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Why Chauffeur Service is Ideal for This Route</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Skip Parking Costs</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Downtown Portland parking ranges from $25-45/day. Chauffeur service eliminates parking fees entirely—you're dropped at your hotel entrance.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Productivity Time</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Use the 30-minute ride to catch up on emails, prepare for meetings, or relax after your flight—your driver handles navigation and traffic.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Direct Hotel Delivery</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  No shuttles, no waiting for rideshare drivers. Your chauffeur is waiting when you land and takes you directly to your hotel.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Fixed Pricing</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Transparent flat rate regardless of traffic or time—no surge pricing during rush hour or events.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Popular Downtown Portland Destinations</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <ul className="space-y-3 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] font-bold mt-1">→</span>
                  <div><strong className="text-[var(--text)]">Pearl District Hotels:</strong> The Nines, Kimpton Hotel Vintage, AC Hotel</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] font-bold mt-1">→</span>
                  <div><strong className="text-[var(--text)]">Waterfront Area:</strong> Kimpton RiverPlace, The Duniway Portland</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] font-bold mt-1">→</span>
                  <div><strong className="text-[var(--text)]">Pioneer Square Area:</strong> The Heathman Hotel, Hotel deLuxe</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] font-bold mt-1">→</span>
                  <div><strong className="text-[var(--text)]">Convention Center:</strong> Oregon Convention Center (15 min from PDX)</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] font-bold mt-1">→</span>
                  <div><strong className="text-[var(--text)]">Corporate Offices:</strong> Downtown Portland business district</div>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Traffic & Timing Considerations</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-[var(--text)] mb-2">Morning Rush (7:00-9:30 AM)</h4>
                <p className="text-sm text-[var(--textMuted)]">
                  I-84 westbound can slow significantly. Allow 35-40 minutes for airport departures during this window. 
                  For early morning flights, traffic is light (6:00-7:00 AM).
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-[var(--text)] mb-2">Evening Rush (4:00-6:30 PM)</h4>
                <p className="text-sm text-[var(--textMuted)]">
                  Eastbound I-84 from downtown to PDX faces moderate congestion. Plan for 35-40 minutes if departing during peak hours.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-[var(--text)] mb-2">Off-Peak Hours (9:30 AM - 4:00 PM, Evenings)</h4>
                <p className="text-sm text-[var(--textMuted)]">
                  Smooth travel during mid-day and evenings. Typical time: 25-30 minutes. Weekends also see lighter traffic.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">What's Included in Your Chauffeur Service</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Meet & greet at baggage claim</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Flight tracking & delay adjustments</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Luggage assistance</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Complimentary bottled water</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Climate-controlled luxury vehicle</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">All taxes and fees included</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Book PDX to Downtown Portland Transportation
            </h2>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
              Professional chauffeur service with fixed pricing, flight tracking, and guaranteed on-time arrival.
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
