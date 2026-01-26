import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'PDX to Hillsboro Transportation | 35-50 Minutes | Oregon Town Car',
  description: 'Professional chauffeur service from Portland Airport (PDX) to Hillsboro. 22 miles, 35-50 minutes. Intel campus access, tech corridor, fixed pricing.',
  keywords: 'PDX to Hillsboro, Portland airport to Hillsboro, Hillsboro chauffeur, Intel transportation, Silicon Forest',
};

export default function PDXtoHillsboroPage({
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
              <span>PDX to Hillsboro</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              PDX to Hillsboro Chauffeur Service
            </h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                22 miles
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                35-50 minutes
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
              The PDX Airport to Hillsboro route covers approximately 22 miles via Highway 26 West (Sunset Highway), typically 
              taking 35-50 minutes depending on traffic. Hillsboro is the heart of Oregon's "Silicon Forest," home to Intel's 
              largest site and dozens of high-tech companies.
            </p>
            <p className="text-[var(--textMuted)]">
              This route is critical for corporate travelers visiting Intel, semiconductor suppliers, cleanroom equipment 
              manufacturers, and technology consulting firms. Hillsboro also hosts conferences, trade shows, and corporate 
              events at the Washington County Fair Complex and nearby venues.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Why Chauffeur Service is Ideal for This Route</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Tech Campus Navigation</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Intel's Hillsboro campuses are sprawling and complex. Our chauffeurs know the campus entrances, visitor protocols, and security procedures.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Highway 26 Expertise</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Highway 26 can be congested during rush hour and weather events. Your driver monitors traffic patterns and adjusts routing in real-time.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Executive Productivity</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Use the 40-minute ride for final presentation prep, email catch-up, or video calls—your chauffeur handles navigation and traffic.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Fixed Pricing</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Transparent flat rate from PDX to any Hillsboro location—no surge pricing during peak hours or weather delays.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Business vs Leisure Use Cases</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Corporate Travel</h3>
              <p className="text-[var(--textMuted)] mb-3">
                Hillsboro chauffeur service is essential for business travelers visiting:
              </p>
              <ul className="space-y-2 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Intel Campuses</strong> - Ronler Acres, Jones Farm, Hawthorn Farm—executive meetings, engineering consultations, supplier reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Tech Companies</strong> - SolarWorld, FEI Company, and dozens of semiconductor/cleanroom equipment firms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Corporate Events</strong> - Trade shows, industry conferences, vendor exhibitions at Hillsboro venues</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Leisure Travel</h3>
              <p className="text-[var(--textMuted)] mb-3">
                Leisure travelers choose Hillsboro chauffeur service for:
              </p>
              <ul className="space-y-2 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Wine Country Access</strong> - Hillsboro is the gateway to Willamette Valley wine tours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Family Visits</strong> - Visiting family in Hillsboro's residential neighborhoods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Hotel Stays</strong> - Embassy Suites Hillsboro, Residence Inn, and corporate hotels along Tanasbourne Drive</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Airport Pickup Details</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <h3 className="font-semibold text-[var(--text)] mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Complimentary meet & greet at baggage claim</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Real-time flight tracking and delay monitoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Professional luggage assistance</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Complimentary bottled water and climate control</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">All taxes, fees, and gratuity included in pricing</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Direct campus or hotel delivery in Hillsboro</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Traffic Patterns & Best Times</h2>
            <div className="space-y-4">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[var(--text)]">Morning Rush Hour (7:00 AM - 9:30 AM)</h3>
                  <span className="text-sm text-amber-600 font-medium">45-60 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  Highway 26 West experiences heavy westbound traffic as Intel employees commute to campuses. Plan for extended travel time.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[var(--text)]">Midday (9:30 AM - 3:30 PM)</h3>
                  <span className="text-sm text-green-600 font-medium">35-40 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  Optimal travel time. Highway 26 flows smoothly, and campus access is efficient.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[var(--text)]">Evening Rush Hour (4:00 PM - 6:30 PM)</h3>
                  <span className="text-sm text-amber-600 font-medium">45-60 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  Heavy eastbound traffic returning to Portland. Consider scheduling meetings to avoid this window if possible.
                </p>
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
                  Professional PDX transfers to all Portland metro tech corridors.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/services/corporate-travel`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Corporate Transportation</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Executive travel for Intel campus visits and tech meetings.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/services/hourly-chauffeur`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Hourly Chauffeur</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Flexible service for multi-campus Hillsboro itineraries.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Book Your Hillsboro Chauffeur Service</h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Professional airport transportation from PDX to Hillsboro. Tech campus access, fixed pricing, and luxury vehicles.
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Book Now
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
