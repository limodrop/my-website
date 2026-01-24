import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { buildLocalBusinessSchema, buildArticleSchema } from '@/lib/seo/schema';
import ContextualFAQ from '@/app/components/seo/ContextualFAQ';

export const metadata: Metadata = {
  title: 'Airport Transportation Guide - PDX Chauffeur Service | Oregon Town Car',
  description: 'Complete guide to Portland airport chauffeur service: meet-and-greet, flight tracking, luggage handling, and why chauffeur service beats rideshare for business travelers.',
  openGraph: {
    title: 'Airport Transportation Guide - PDX Chauffeur Service | Oregon Town Car',
    description: 'Everything you need to know about professional airport chauffeur service at PDX.',
  },
};

export default function AirportTransportationGuidePage() {
  const schemaData = buildLocalBusinessSchema();
  const articleSchema = buildArticleSchema({
    title: 'The Complete Airport Transportation Guide',
    description: 'Everything you need to know about professional chauffeur service at Portland International Airport (PDX) and beyond.',
    datePublished: '2026-01-23',
    url: 'https://oregontowncar.com/en/guides/airport-transportation',
    keywords: ['airport transportation', 'PDX chauffeur service', 'meet and greet', 'business travel', 'chauffeur vs rideshare'],
  });

  const faqs = [
    {
      question: 'How does meet-and-greet service work at PDX?',
      answer: 'Your chauffeur monitors your flight in real-time and meets you in the baggage claim area with a name sign. They assist with luggage and escort you to the vehicle in the premium pickup zone.',
    },
    {
      question: 'What happens if my flight is delayed?',
      answer: 'We track your flight automatically and adjust pickup time accordingly. There is no extra charge for flight delays—your chauffeur will be there when you land.',
    },
    {
      question: 'Is airport chauffeur service worth it compared to rideshare?',
      answer: 'For business travelers, absolutely. You get guaranteed on-time pickup, professional service, fixed pricing with no surge, flight tracking, and a dedicated chauffeur—not shared rides or driver roulette.',
    },
    {
      question: 'Can the chauffeur help with multiple bags or special luggage?',
      answer: 'Yes. Our chauffeurs assist with all luggage including oversized items, golf clubs, ski equipment, and business materials. SUVs are available for larger groups or extra cargo.',
    },
  ];

  return (
    <>
      <JsonLd data={schemaData} />
      <JsonLd data={articleSchema} />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <nav className="text-sm text-slate-400 mb-4">
                <Link href="/en" className="hover:text-white">Home</Link>
                {' '}/{' '}
                <span className="text-white">Guides</span>
                {' '}/{' '}
                <span className="text-white">Airport Transportation</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Complete Airport Transportation Guide
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Everything you need to know about professional chauffeur service at Portland International Airport (PDX) and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Airport transportation sets the tone for your entire trip. Whether you are arriving for a business meeting, departing for an international flight, or picking up important clients, the right chauffeur service makes all the difference. This guide covers everything from meet-and-greet protocols to why professional chauffeur service outperforms rideshare for business travelers.
              </p>
            </section>

            {/* Meet and Greet Explained */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                How Professional Meet-and-Greet Works
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Meet-and-greet service is the hallmark of premium airport transportation. Here is exactly what happens when you book chauffeur service with Oregon Town Car:
              </p>
              
              <div className="bg-slate-50 rounded-lg border border-slate-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Step-by-Step Process</h3>
                <ol className="space-y-4 text-slate-700">
                  <li>
                    <strong>Flight Monitoring:</strong> We track your flight from departure to landing in real-time using live airline data. If your flight is delayed or arrives early, we adjust automatically.
                  </li>
                  <li>
                    <strong>Chauffeur Positioning:</strong> Your chauffeur arrives at the airport 15-20 minutes before your scheduled landing time and parks in the designated chauffeur holding area.
                  </li>
                  <li>
                    <strong>Baggage Claim Meeting:</strong> After you land and clear the gate, your chauffeur meets you in the baggage claim area holding a professional name sign with your name or company logo.
                  </li>
                  <li>
                    <strong>Luggage Assistance:</strong> The chauffeur helps retrieve your bags from the carousel and carries them to the vehicle—no struggling with heavy suitcases.
                  </li>
                  <li>
                    <strong>Premium Pickup Zone:</strong> You walk directly to the designated chauffeur pickup area where your vehicle is waiting curbside, clean and climate-controlled.
                  </li>
                  <li>
                    <strong>Departure:</strong> Your chauffeur loads luggage, confirms your destination, and departs immediately—no waiting for other passengers or making detours.
                  </li>
                </ol>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                This is a world apart from standing in rideshare lines, waiting 15 minutes for a driver to find you, or discovering surge pricing after a long flight. Meet-and-greet means you walk off the plane and into a vehicle within minutes.
              </p>
            </section>

            {/* Chauffeur vs Rideshare */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Chauffeur Service vs Rideshare: The Business Traveler Perspective
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Rideshare apps like Uber and Lyft serve a purpose for casual trips. But for business travel, client pickups, or important meetings, professional chauffeur service is non-negotiable. Here is why:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-slate-300">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Feature</th>
                      <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Professional Chauffeur</th>
                      <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Rideshare App</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Flight Tracking</td>
                      <td className="border border-slate-300 p-3 bg-green-50">✓ Automatic, no extra charge</td>
                      <td className="border border-slate-300 p-3 bg-red-50">✗ You must notify driver manually</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Meet-and-Greet</td>
                      <td className="border border-slate-300 p-3 bg-green-50">✓ Chauffeur meets you inside</td>
                      <td className="border border-slate-300 p-3 bg-red-50">✗ You find driver outside</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Pricing</td>
                      <td className="border border-slate-300 p-3 bg-green-50">✓ Fixed rate, no surge</td>
                      <td className="border border-slate-300 p-3 bg-red-50">✗ Surge pricing during peak times</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Wait Time</td>
                      <td className="border border-slate-300 p-3 bg-green-50">✓ Up to 60 min free for flights</td>
                      <td className="border border-slate-300 p-3 bg-red-50">✗ Charges start immediately</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Luggage Help</td>
                      <td className="border border-slate-300 p-3 bg-green-50">✓ Chauffeur carries bags</td>
                      <td className="border border-slate-300 p-3 bg-red-50">✗ You load your own bags</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Vehicle Condition</td>
                      <td className="border border-slate-300 p-3 bg-green-50">✓ Late-model luxury sedan/SUV</td>
                      <td className="border border-slate-300 p-3 bg-red-50">✗ Varies wildly by driver</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Professionalism</td>
                      <td className="border border-slate-300 p-3 bg-green-50">✓ Licensed, background-checked</td>
                      <td className="border border-slate-300 p-3 bg-red-50">✗ Inconsistent driver quality</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                For a $20-30 difference in cost, you eliminate uncertainty, save 15-20 minutes of waiting, and arrive at your destination relaxed instead of stressed. When you are on a business trip or picking up an important client, that peace of mind is priceless.
              </p>
            </section>

            {/* Luggage Handling */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Luggage Handling and Special Cargo
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                One of the most underrated benefits of professional chauffeur service is expert luggage handling. Our chauffeurs are trained to assist with:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
                <li>Standard checked bags and carry-ons</li>
                <li>Oversized luggage (golf clubs, ski equipment, bicycles)</li>
                <li>Fragile items (musical instruments, artwork, electronics)</li>
                <li>Business materials (presentation equipment, product samples)</li>
                <li>Multiple bags for families or extended trips</li>
              </ul>

              <p className="text-slate-700 leading-relaxed mb-4">
                If you have more luggage than a standard sedan can accommodate, we recommend booking an SUV or larger vehicle when making your reservation. Our fleet includes:
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <ul className="space-y-3 text-slate-700">
                  <li>
                    <strong>Luxury Sedans:</strong> Ideal for 1-3 passengers with standard luggage (2-3 large bags + carry-ons)
                  </li>
                  <li>
                    <strong>Executive SUVs:</strong> Perfect for families or groups with extra cargo (4-5 large bags + equipment)
                  </li>
                  <li>
                    <strong>Sprinter Vans:</strong> Best for large groups or extensive luggage (8-10 passengers or equivalent cargo)
                  </li>
                </ul>
              </div>
            </section>

            {/* Business Traveler Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Pro Tips for Business Travelers
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                After thousands of airport transfers for executives and corporate clients, we have identified the best practices for stress-free business travel:
              </p>

              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. Book Airport Service in Advance</h3>
                  <p className="text-slate-700 text-sm">
                    While we accept last-minute bookings, advance reservations (24-48 hours) guarantee vehicle availability, allow us to confirm your flight details, and ensure your preferred chauffeur is assigned if you have worked with us before.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. Provide Flight Information</h3>
                  <p className="text-slate-700 text-sm">
                    Always include your airline and flight number when booking. This allows us to track delays, gate changes, and early arrivals automatically. You never have to call us with updates—we are already monitoring.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">3. Use Hourly Service for Multi-Stop Itineraries</h3>
                  <p className="text-slate-700 text-sm">
                    If you have a packed schedule with multiple meetings, client visits, or site tours, book hourly chauffeur service instead of individual point-to-point trips. It is more cost-effective and eliminates downtime between stops.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">4. Schedule Extra Time for International Flights</h3>
                  <p className="text-slate-700 text-sm">
                    For departures on international flights, we recommend pickup 3 hours before departure (vs 2 hours for domestic). This accounts for longer check-in processes and TSA Pre-check is not always available for international travel.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">5. Set Up a Corporate Account</h3>
                  <p className="text-slate-700 text-sm">
                    Frequent business travelers benefit from corporate accounts with monthly billing, detailed trip reports, and dedicated account management. No more expense receipts for every trip—just one consolidated invoice.
                  </p>
                </div>
              </div>
            </section>

            {/* Airport Links */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Airports We Serve Worldwide
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                While we are based in Portland and specialize in PDX airport transportation, Oregon Town Car provides chauffeur service at 37+ major airports worldwide through our trusted affiliate network:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Link href="/en/worldwide/airports/pdx" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="font-bold text-slate-900 mb-1">Portland PDX</div>
                  <div className="text-sm text-slate-600">Portland, Oregon</div>
                </Link>
                <Link href="/en/worldwide/airports/lax" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="font-bold text-slate-900 mb-1">Los Angeles LAX</div>
                  <div className="text-sm text-slate-600">Los Angeles, California</div>
                </Link>
                <Link href="/en/worldwide/airports/jfk" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="font-bold text-slate-900 mb-1">New York JFK</div>
                  <div className="text-sm text-slate-600">New York City, New York</div>
                </Link>
                <Link href="/en/worldwide/airports/lhr" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="font-bold text-slate-900 mb-1">London Heathrow</div>
                  <div className="text-sm text-slate-600">London, United Kingdom</div>
                </Link>
                <Link href="/en/worldwide/airports/cdg" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="font-bold text-slate-900 mb-1">Paris CDG</div>
                  <div className="text-sm text-slate-600">Paris, France</div>
                </Link>
                <Link href="/en/worldwide/airports/dxb" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="font-bold text-slate-900 mb-1">Dubai DXB</div>
                  <div className="text-sm text-slate-600">Dubai, UAE</div>
                </Link>
              </div>

              <Link href="/en/worldwide/airports" className="inline-block text-blue-600 hover:underline font-semibold">
                View All 37+ Airports →
              </Link>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Conclusion: Why Airport Chauffeur Service Matters
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Airport transportation is not just about getting from Point A to Point B—it is about starting and ending your trip with professionalism, reliability, and zero stress. Whether you are a business traveler with back-to-back meetings, a family heading on vacation, or a company hosting important clients, the right chauffeur service sets the tone for success.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Oregon Town Car delivers white-glove airport service at PDX and 37+ airports worldwide. Fixed pricing, flight tracking, meet-and-greet, and professional chauffeurs—every time.
              </p>

              <div className="text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready for Stress-Free Airport Transportation?
                </h3>
                <Link
                  href="/en/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Book Your Airport Transfer
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <ContextualFAQ faqs={faqs} title="Airport Transportation FAQs" />

            {/* Related Links */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/en/services/airport-transportation" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Airport Service
                </Link>
                <Link href="/en/worldwide/airports/pdx" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  PDX Airport
                </Link>
                <Link href="/en/services/corporate-travel" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Corporate Travel
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
