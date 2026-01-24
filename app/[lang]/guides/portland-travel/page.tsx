import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'Portland Travel Guide & Chauffeur Transportation Tips | Oregon Town Car',
  description: 'Complete Portland travel guide for business travelers. PDX airport tips, wine country access, hotel transportation, and executive car service recommendations.',
  keywords: 'Portland travel guide, PDX airport transportation, Portland business travel, Willamette Valley wine tours, Portland chauffeur tips',
};

export default function PortlandTravelGuidePage({
  params
}: {
  params: { lang: Locale }
}) {
  const locale = params.lang;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Portland Travel Guide & Chauffeur Tips
            </h1>
            <p className="text-lg sm:text-xl text-slate-200">
              Essential transportation insights for business travelers, visitors, and locals exploring Portland 
              and the Willamette Valley with professional chauffeur service.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Getting from PDX to Downtown */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              Getting from PDX Airport to Downtown Portland
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--textMuted)]">
              <p className="mb-4">
                Portland International Airport (PDX) is located approximately 12 miles northeast of downtown Portland, 
                making it one of the closest major airports to a city center in the United States. While this proximity 
                is convenient, choosing the right transportation option can significantly impact your travel experience.
              </p>
              
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3 mt-8">Transportation Options Compared</h3>
              
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Option</th>
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Time</th>
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Cost</th>
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4"><strong>Private Chauffeur</strong></td>
                      <td className="p-4">25-35 min</td>
                      <td className="p-4">$85-120</td>
                      <td className="p-4">Executives, groups, comfort</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4"><strong>Rideshare (Uber/Lyft)</strong></td>
                      <td className="p-4">25-40 min</td>
                      <td className="p-4">$35-70 (surge)</td>
                      <td className="p-4">Solo budget travelers</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4"><strong>Taxi</strong></td>
                      <td className="p-4">25-35 min</td>
                      <td className="p-4">$40-60</td>
                      <td className="p-4">Immediate availability</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4"><strong>MAX Light Rail</strong></td>
                      <td className="p-4">40-50 min</td>
                      <td className="p-4">$2.50</td>
                      <td className="p-4">Budget-conscious, no luggage</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-[var(--text)] mb-2">💼 Professional Traveler Tip</h4>
                <p className="text-[var(--text)] mb-0">
                  For business travelers, <Link href={`/${locale}/services/airport-transportation`} className="text-[var(--primary)] hover:underline">private chauffeur service</Link> offers 
                  the best value when you factor in reliability, comfort, and productivity. Pre-book to avoid rideshare surge 
                  pricing during peak hours (early morning, evening rush, and major events).
                </p>
              </div>
            </div>
          </section>

          {/* Business Travel Best Practices */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              Best Transportation Options for Business Travelers
            </h2>
            
            <div className="space-y-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Executive Airport Transfers</h3>
                <p className="text-[var(--textMuted)] mb-4">
                  Arriving for an important meeting or conference? Professional chauffeur service ensures you start on the right foot:
                </p>
                <ul className="space-y-2 text-[var(--textMuted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Flight tracking:</strong> Your driver monitors delays and adjusts pickup automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Meet & greet:</strong> Chauffeur waits at baggage claim with name sign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Luggage assistance:</strong> Door-to-door service with no stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Wi-Fi & workspace:</strong> Catch up on emails during the ride</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Multi-Stop Corporate Itineraries</h3>
                <p className="text-[var(--textMuted)] mb-4">
                  Visiting multiple offices, client sites, or investor meetings? <Link href={`/${locale}/services/hourly-chauffeur`} className="text-[var(--primary)] hover:underline">By-the-hour chauffeur service</Link> keeps 
                  you on schedule:
                </p>
                <ul className="space-y-2 text-[var(--textMuted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>No parking hassles at each location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Your driver waits on-site between appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Flexible schedule changes accommodated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Local knowledge for fastest routes and backup options</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Conference & Event Transportation</h3>
                <p className="text-[var(--textMuted)] mb-4">
                  Attending a conference at the Oregon Convention Center or corporate event? Coordinate group transport:
                </p>
                <ul className="space-y-2 text-[var(--textMuted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Executive vans:</strong> Transport teams of 10-14 in one luxury vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Reliable scheduling:</strong> Ensure all attendees arrive together and on time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Evening event return:</strong> Safe transport after networking dinners and receptions</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Wine Country Access */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              Wine Country Access: Willamette Valley Transportation
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--textMuted)]">
              <p className="mb-4">
                Oregon's Willamette Valley is home to over 700 wineries, making it one of the premier wine regions in the world. 
                Located 30-60 miles southwest of Portland, the valley offers world-class Pinot Noir and stunning vineyard landscapes.
              </p>

              <h3 className="text-xl font-semibold text-[var(--text)] mb-3 mt-8">Why Use a Chauffeur for Wine Tours</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                  <h4 className="font-semibold text-[var(--text)] mb-2">🍷 Safety & Responsibility</h4>
                  <p className="text-sm text-[var(--textMuted)]">
                    Enjoy tastings without worrying about driving. Your professional chauffeur ensures safe, comfortable 
                    transport throughout the day.
                  </p>
                </div>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                  <h4 className="font-semibold text-[var(--text)] mb-2">🗺️ Local Expertise</h4>
                  <p className="text-sm text-[var(--textMuted)]">
                    Drivers know the best routes, hidden gem wineries, and can recommend stops based on your preferences 
                    (Pinot Noir, Chardonnay, natural wines, etc.).
                  </p>
                </div>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                  <h4 className="font-semibold text-[var(--text)] mb-2">⏰ Flexible Itinerary</h4>
                  <p className="text-sm text-[var(--textMuted)]">
                    Spend more time at your favorite winery or skip one that doesn't fit. <Link href={`/${locale}/services/hourly-chauffeur`} className="text-[var(--primary)] hover:underline">Hourly service</Link> adapts 
                    to your pace.
                  </p>
                </div>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                  <h4 className="font-semibold text-[var(--text)] mb-2">🎁 Luggage & Purchases</h4>
                  <p className="text-sm text-[var(--textMuted)]">
                    Your chauffeur stores wine purchases safely and manages climate control to protect your bottles during transport.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-[var(--text)] mb-2">🍇 Popular Wine Tour Routes</h4>
                <ul className="space-y-2 text-[var(--text)]">
                  <li><strong>Dundee Hills:</strong> 40 min from Portland • Home to iconic Pinot Noir producers</li>
                  <li><strong>Yamhill-Carlton:</strong> 50 min from Portland • Boutique wineries and scenic vineyards</li>
                  <li><strong>Chehalem Mountains:</strong> 35 min from Portland • Diverse microclimates and varietals</li>
                  <li><strong>McMinnville:</strong> 60 min from Portland • Historic downtown and wine culture hub</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hotel & Event Transportation */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              Hotel & Event Transportation Tips
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Top Business Hotels in Portland</h3>
                <p className="text-[var(--textMuted)] mb-4">
                  Most executive travelers stay in downtown Portland or near the airport. Here's what to know:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4">
                    <h4 className="font-semibold text-[var(--text)] mb-2">Downtown Hotels</h4>
                    <ul className="text-sm text-[var(--textMuted)] space-y-1">
                      <li>• The Nines (luxury)</li>
                      <li>• Hotel deLuxe</li>
                      <li>• Kimpton RiverPlace Hotel</li>
                      <li>• The Heathman Hotel</li>
                    </ul>
                    <p className="text-xs text-[var(--textMuted)] mt-2">
                      💡 25-35 min from PDX via chauffeur
                    </p>
                  </div>
                  <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4">
                    <h4 className="font-semibold text-[var(--text)] mb-2">Airport Area Hotels</h4>
                    <ul className="text-sm text-[var(--textMuted)] space-y-1">
                      <li>• Aloft Portland Airport</li>
                      <li>• Embassy Suites Portland Airport</li>
                      <li>• Courtyard Portland Airport</li>
                    </ul>
                    <p className="text-xs text-[var(--textMuted)] mt-2">
                      💡 5-10 min from PDX via chauffeur
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Event & Venue Transportation</h3>
                <p className="text-[var(--textMuted)] mb-4">
                  Portland's top event venues benefit from professional chauffeur coordination:
                </p>
                <ul className="space-y-3 text-[var(--textMuted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] font-bold">→</span>
                    <div>
                      <strong className="text-[var(--text)]">Oregon Convention Center:</strong> Large conferences and trade shows. 
                      Pre-arrange <Link href={`/${locale}/services/corporate-transportation`} className="text-[var(--primary)] hover:underline">group transportation</Link> to avoid parking fees ($30/day).
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] font-bold">→</span>
                    <div>
                      <strong className="text-[var(--text)]">Moda Center:</strong> Concerts and sporting events. Evening chauffeur service 
                      ensures safe return to hotel after events.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] font-bold">→</span>
                    <div>
                      <strong className="text-[var(--text)]">Providence Park:</strong> Timbers soccer games and special events. 
                      Avoid downtown traffic with drop-off coordination.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] font-bold">→</span>
                    <div>
                      <strong className="text-[var(--text)]">Pearl District Venues:</strong> Boutique event spaces and galleries. 
                      Chauffeur navigates narrow streets and limited parking.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Portland Traffic & Timing */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              Portland Traffic Patterns & Timing Recommendations
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--textMuted)]">
              <p className="mb-4">
                Portland traffic is generally moderate compared to other major West Coast cities, but rush hours 
                can add significant time to trips. Plan accordingly:
              </p>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-[var(--text)] mb-4">Peak Traffic Times to Avoid</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-[var(--text)] mb-2">Morning Rush</h5>
                    <p className="text-sm text-[var(--textMuted)] mb-2">7:00 AM - 9:30 AM (weekdays)</p>
                    <p className="text-xs text-[var(--textMuted)]">
                      I-5, I-84, and Highway 26 see heavy congestion. Allow extra 15-20 minutes for airport trips.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[var(--text)] mb-2">Evening Rush</h5>
                    <p className="text-sm text-[var(--textMuted)] mb-2">4:00 PM - 6:30 PM (weekdays)</p>
                    <p className="text-xs text-[var(--textMuted)]">
                      Outbound routes particularly slow. Downtown to suburbs can take 45+ minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-[var(--text)] mb-2">✈️ Airport Timing Recommendations</h4>
                <ul className="space-y-2 text-[var(--text)]">
                  <li><strong>Domestic flights:</strong> Depart hotel 90-120 min before flight (2 hours during rush hour)</li>
                  <li><strong>International flights:</strong> Depart hotel 2.5-3 hours before flight</li>
                  <li><strong>Early morning flights (before 7 AM):</strong> Traffic is light; 60-75 min is sufficient</li>
                  <li><strong>Weekend travel:</strong> Generally faster; allow 75-90 min for domestic flights</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Booking Tips */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              Professional Chauffeur Service Booking Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">✓ Book in Advance</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Reserve 24-48 hours ahead for guaranteed vehicle availability, especially during conferences, 
                  conventions, or peak travel seasons (summer, holidays).
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">✓ Provide Flight Details</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Share your flight number for automatic tracking. Your chauffeur adjusts pickup time if your 
                  flight is delayed—no need to call or text.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">✓ Specify Vehicle Preferences</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Choose sedan for 1-2 passengers, SUV for families/groups, or executive van for corporate teams. 
                  Indicate luggage quantity for proper vehicle sizing.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">✓ Request Fixed Pricing</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Ask for flat-rate quotes for airport transfers and point-to-point trips. This eliminates surprise 
                  charges and simplifies expense reporting.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Experience Portland in Comfort?
            </h2>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
              Professional chauffeur service for airport transfers, corporate travel, wine tours, and special events throughout Portland and Oregon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/services/airport-transportation`}
                className="inline-block px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Book Airport Transfer
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
