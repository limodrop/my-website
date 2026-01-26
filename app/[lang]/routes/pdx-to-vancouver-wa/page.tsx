import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'PDX to Vancouver WA Transportation | 30-45 Minutes | Oregon Town Car',
  description: 'Professional chauffeur service from Portland Airport (PDX) to Vancouver, WA. 18 miles, 30-45 minutes. Cross-border service, business travel, fixed pricing.',
  keywords: 'PDX to Vancouver WA, Portland airport to Vancouver Washington, Vancouver chauffeur, cross-border transportation',
};

export default function PDXtoVancouverWAPage({
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
              <span>PDX to Vancouver, WA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              PDX to Vancouver, WA Chauffeur Service
            </h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                18 miles
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                30-45 minutes
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
              The PDX Airport to Vancouver, WA route covers approximately 18 miles via I-205 North, crossing the Columbia River 
              from Oregon into Washington State. This cross-border route typically takes 30-45 minutes depending on bridge 
              traffic and time of day.
            </p>
            <p className="text-[var(--textMuted)]">
              Vancouver, WA is a major suburb of the Portland metro area, located just across the Columbia River. Many travelers 
              choose Vancouver for its tax advantages (no Washington state income tax), corporate offices, and convenient access 
              to both Portland and Washington destinations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Why Chauffeur Service is Ideal for This Route</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Bridge Navigation</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  I-205 Glenn Jackson Bridge can be congested during peak hours. Our chauffeurs monitor real-time traffic and know alternate routes via I-5.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Cross-Border Expertise</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Seamless service between Oregon and Washington—your chauffeur handles the logistics while you focus on your trip.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Corporate Convenience</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Ideal for business travelers visiting Vancouver's corporate offices, data centers, and distribution facilities.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Fixed Pricing</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Transparent flat rate from PDX to any Vancouver, WA address—no surge pricing or bridge toll surprises.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Business vs Leisure Use Cases</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Corporate Travel</h3>
              <p className="text-[var(--textMuted)] mb-3">
                Vancouver, WA chauffeur service is essential for business travelers visiting:
              </p>
              <ul className="space-y-2 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Corporate Offices</strong> - Fisher Investments, SEH America, and other Fortune 500 company offices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Distribution Centers</strong> - Amazon, Walmart, and logistics facilities in Vancouver industrial parks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Healthcare Facilities</strong> - PeaceHealth Southwest Medical Center, specialty clinics, conferences</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Leisure Travel</h3>
              <p className="text-[var(--textMuted)] mb-3">
                Leisure travelers choose Vancouver chauffeur service for:
              </p>
              <ul className="space-y-2 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Tax-Free Shopping</strong> - Vancouver Mall and retail centers (no Oregon sales tax, no Washington income tax)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Family Visits</strong> - Visiting family in Vancouver neighborhoods without rental car hassle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Hotel Access</strong> - Hilton Vancouver, Heathman Lodge, and waterfront hotels</span>
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
                  <span className="text-sm text-[var(--textMuted)]">All taxes, fees, and bridge tolls included</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Direct transportation to your Vancouver, WA destination</span>
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
                  <span className="text-sm text-amber-600 font-medium">40-50 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  I-205 Glenn Jackson Bridge experiences heavy southbound traffic (Washington to Oregon commuters). Northbound is typically clear.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[var(--text)]">Midday (9:30 AM - 3:30 PM)</h3>
                  <span className="text-sm text-green-600 font-medium">30-35 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  Optimal travel time. Bridge traffic flows smoothly, and Vancouver access is straightforward.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[var(--text)]">Evening Rush Hour (4:00 PM - 6:30 PM)</h3>
                  <span className="text-sm text-amber-600 font-medium">40-55 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  Heavy northbound traffic (Oregon to Washington commuters). I-205 Bridge can be congested—your chauffeur will monitor conditions.
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
                  Professional PDX transfers to Oregon and Washington destinations.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/services/corporate-travel`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Corporate Transportation</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Executive travel for cross-border business meetings.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/services/hourly-chauffeur`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Hourly Chauffeur</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Flexible service for multi-stop Vancouver itineraries.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Book Your Vancouver, WA Chauffeur Service</h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Professional cross-border transportation from PDX to Vancouver, WA. Fixed pricing, flight tracking, and luxury vehicles.
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
