import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'PDX to Tigard Transportation | 25-35 Minutes | Oregon Town Car',
  description: 'Professional chauffeur service from Portland Airport (PDX) to Tigard. 15 miles, 25-35 minutes. Business parks, Bridgeport Village, fixed pricing.',
  keywords: 'PDX to Tigard, Portland airport to Tigard, Tigard chauffeur, Bridgeport Village transportation',
};

export default function PDXtoTigardPage({
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
              <span>PDX to Tigard</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              PDX to Tigard Chauffeur Service
            </h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                15 miles
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
              The PDX Airport to Tigard route covers approximately 15 miles via I-5 and Highway 217, typically taking 
              25-35 minutes depending on traffic. Tigard is a major commercial hub southwest of Portland, home to 
              corporate offices, business parks, and Bridgeport Village shopping center.
            </p>
            <p className="text-[var(--textMuted)]">
              This route serves corporate travelers visiting technology companies, medical professionals attending 
              conferences at area hospitals, and shoppers heading to Bridgeport Village's upscale retail and dining district.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Why Chauffeur Service is Ideal for This Route</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Business Park Access</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Professional arrival for corporate meetings at Tigard business parks. Your chauffeur knows the area and navigates complex office locations efficiently.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Efficient Routing</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  I-5 and Highway 217 intersection can be congested. Our drivers monitor real-time traffic and adjust routes for fastest arrival times.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Shopping Convenience</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Traveling to Bridgeport Village? Our chauffeurs provide luggage-free shopping with secure vehicle storage and flexible pickup times.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Fixed Pricing</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Transparent flat rate from PDX to any Tigard destination—no surge pricing or hidden fees regardless of traffic delays.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Business vs Leisure Use Cases</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Corporate Travel</h3>
              <p className="text-[var(--textMuted)] mb-3">
                Tigard chauffeur service is essential for business travelers visiting:
              </p>
              <ul className="space-y-2 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Business Park Offices</strong> - Meetings at corporate campuses along Highway 217 corridor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Medical Centers</strong> - Tigard Medical Center, specialty clinics, healthcare conferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Technology Companies</strong> - Software consultations, vendor meetings, product demonstrations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Leisure Travel</h3>
              <p className="text-[var(--textMuted)] mb-3">
                Leisure travelers choose Tigard chauffeur service for:
              </p>
              <ul className="space-y-2 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Bridgeport Village</strong> - Upscale shopping, dining, and entertainment complex</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Family Visits</strong> - Stress-free transportation for visiting family in Tigard neighborhoods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Hotel Access</strong> - Embassy Suites Tigard, Courtyard by Marriott, and other Highway 217 hotels</span>
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
                  <span className="text-sm text-[var(--textMuted)]">Professional luggage assistance and handling</span>
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
                  <span className="text-sm text-[var(--textMuted)]">Direct transportation to your Tigard destination</span>
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
                  <span className="text-sm text-amber-600 font-medium">35-45 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  I-5 and Highway 217 experience heavy congestion. Allow extra time for business park arrivals during this window.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[var(--text)]">Midday (9:30 AM - 3:30 PM)</h3>
                  <span className="text-sm text-green-600 font-medium">25-30 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  Optimal travel time. Routes flow smoothly, and business park access is straightforward.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[var(--text)]">Evening Rush Hour (4:00 PM - 6:30 PM)</h3>
                  <span className="text-sm text-amber-600 font-medium">35-45 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  Heavy southbound traffic on I-5. Your chauffeur will monitor conditions and choose optimal routing.
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
                  Professional PDX transfers to all Portland metro destinations.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/services/corporate-travel`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Corporate Transportation</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Executive travel for business meetings and office visits.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/services/hourly-chauffeur`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Hourly Chauffeur</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Flexible service for multi-stop Tigard itineraries.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Book Your Tigard Chauffeur Service</h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Professional airport transportation from PDX to Tigard. Fixed pricing, flight tracking, and luxury vehicles.
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
