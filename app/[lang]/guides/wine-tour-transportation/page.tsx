import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { buildLocalBusinessSchema, buildArticleSchema } from '@/lib/seo/schema';
import ContextualFAQ from '@/app/components/seo/ContextualFAQ';

export const metadata: Metadata = {
  title: 'Wine Tour Transportation Guide - Willamette Valley Tours | Oregon Town Car',
  description: 'Complete guide to Willamette Valley wine tour transportation: best wineries, tour planning, designated driver benefits, and why chauffeur service beats driving yourself.',
  openGraph: {
    title: 'Wine Tour Transportation Guide - Willamette Valley Tours | Oregon Town Car',
    description: 'Everything you need to know about professional wine tour chauffeur service in Oregon wine country.',
  },
};

export default function WineTourTransportationGuidePage() {
  const schemaData = buildLocalBusinessSchema();
  const articleSchema = buildArticleSchema({
    title: 'The Wine Tour Transportation Guide',
    description: 'Everything you need to know about Willamette Valley wine tours: best wineries, tour planning, and why professional chauffeur service transforms the experience.',
    datePublished: '2026-01-23',
    url: 'https://oregontowncar.com/en/guides/wine-tour-transportation',
    keywords: ['wine tour transportation', 'Willamette Valley', 'Oregon wine country', 'designated driver', 'chauffeur service'],
  });

  const faqs = [
    {
      question: 'How long is a typical Willamette Valley wine tour?',
      answer: 'Most wine tours are either half-day (4-5 hours, 2-3 wineries) or full-day (7-8 hours, 4-5 wineries). We recommend full-day tours to experience the region without rushing.',
    },
    {
      question: 'Can the chauffeur recommend wineries or do we choose?',
      answer: 'Both options work. You can provide a list of specific wineries you want to visit, or we can recommend top estates based on your preferences (Pinot Noir, sparkling wines, food pairings, etc.).',
    },
    {
      question: 'What is included in wine tour chauffeur service?',
      answer: 'Service includes a dedicated chauffeur and luxury vehicle for the duration, route planning, coordination with wineries for tastings, and safe transportation between all stops. Tasting fees and meals are separate.',
    },
    {
      question: 'Can we bring a picnic or stop for lunch during the tour?',
      answer: 'Absolutely. Many guests pack picnic lunches to enjoy at wineries with picnic areas. We can also recommend restaurants in wine country for a sit-down meal.',
    },
  ];

  const topWineries = [
    {
      name: 'Ponzi Vineyards',
      specialty: 'Pinot Noir & Chardonnay',
      description: 'Pioneering Willamette Valley winery with 50+ years of winemaking excellence. Tasting room and vineyard tours available.',
    },
    {
      name: 'Domaine Drouhin Oregon',
      specialty: 'Burgundian-Style Pinot Noir',
      description: 'French-owned estate producing world-class Pinot Noir. Stunning hilltop views and elegant tasting experience.',
    },
    {
      name: 'Sokol Blosser',
      specialty: 'Sustainable Wines & Food Pairings',
      description: 'Certified sustainable winery with farm-to-table food menu and expansive tasting room.',
    },
    {
      name: 'Argyle Winery',
      specialty: 'Sparkling Wines',
      description: 'Oregon\'s premier sparkling wine producer. Perfect for celebrations and those who prefer bubbles.',
    },
    {
      name: 'Stoller Family Estate',
      specialty: 'Pinot Noir & Estate Wines',
      description: 'One of the largest contiguous vineyards in Oregon. Beautiful architecture and generous tasting pours.',
    },
    {
      name: 'Adelsheim Vineyard',
      specialty: 'Pinot Noir & Chardonnay',
      description: 'Historic winery with consistently high-rated wines and intimate tasting room.',
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
                <span className="text-white">Wine Tour Transportation</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Wine Tour Transportation Guide
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Everything you need to know about Willamette Valley wine tours: best wineries, tour planning, and why professional chauffeur service transforms the experience.
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
                Oregon&#39;s Willamette Valley is one of the world&#39;s premier wine regions, known for exceptional Pinot Noir, Chardonnay, and sparkling wines. With over 700 wineries spread across rolling hills just 45 minutes from Portland, wine country beckons locals and visitors alike. But there is one golden rule for enjoying wine tours: never drive yourself.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This guide covers everything from planning the perfect itinerary to why professional chauffeur service is the only sensible way to experience Willamette Valley wine country.
              </p>
            </section>

            {/* Why You Need a Chauffeur */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Chauffeur Service is Essential for Wine Tours
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                It may seem obvious, but it is worth stating: drinking wine and driving do not mix. Here is why professional chauffeur service is not just recommended—it is mandatory for a safe and enjoyable wine country experience.
              </p>

              <div className="bg-red-50 border border-red-300 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-red-900 mb-3">Safety First: Oregon&#39;s Strict DUI Laws</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  Oregon has some of the strictest DUI laws in the nation:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>BAC limit of 0.08% (just 1-2 glasses of wine can exceed this)</li>
                  <li>First offense penalties include fines up to $10,000 and license suspension</li>
                  <li>Zero tolerance for drivers under 21 (0.00% BAC limit)</li>
                  <li>Increased patrols in wine country during peak season (May-October)</li>
                </ul>
                <p className="text-slate-700 text-sm mt-3 font-semibold">
                  Even one tasting can put you over the legal limit. A chauffeur eliminates risk entirely.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-6 mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Beyond Safety: The Experience Advantage</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Safety aside, chauffeur service dramatically improves your wine tour experience:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li>
                    <strong>Taste Without Worry:</strong> Enjoy every pour without calculating your BAC or designating a driver who misses the fun.
                  </li>
                  <li>
                    <strong>Expert Route Planning:</strong> Chauffeurs know the best routes through wine country, avoiding traffic and ensuring you hit all your stops on schedule.
                  </li>
                  <li>
                    <strong>Local Knowledge:</strong> Professional chauffeurs can recommend wineries based on your preferences, suggest food pairings, and share insider tips.
                  </li>
                  <li>
                    <strong>No Navigation Stress:</strong> Wineries are spread across rural roads with spotty cell service. Let your chauffeur handle the logistics while you relax.
                  </li>
                  <li>
                    <strong>Luxury Transportation:</strong> Arrive at each winery in a premium vehicle, enhancing the upscale experience.
                  </li>
                </ul>
              </div>
            </section>

            {/* Planning Your Wine Tour */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                How to Plan the Perfect Willamette Valley Wine Tour
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                With 700+ wineries to choose from, planning can feel overwhelming. Here is a step-by-step approach to creating an unforgettable wine country experience:
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Step 1: Decide on Half-Day or Full-Day</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Most wine tours fall into two categories:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>
                      <strong>Half-Day (4-5 hours):</strong> Visit 2-3 wineries. Perfect for beginners, casual tastings, or those with limited time. Typically departs 10am or 1pm.
                    </li>
                    <li>
                      <strong>Full-Day (7-8 hours):</strong> Visit 4-5 wineries with lunch. Allows for deeper exploration, vineyard walks, and a relaxed pace. Departs 10am-11am, returns by 6pm.
                    </li>
                  </ul>
                  <p className="text-slate-700 text-sm mt-3">
                    We recommend full-day tours to truly experience the region without feeling rushed.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Step 2: Choose Your Wine Style</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Willamette Valley is famous for Pinot Noir, but different wineries specialize in different styles:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>
                      <strong>Classic Pinot Noir:</strong> Ponzi, Domaine Drouhin, Adelsheim (elegant, Burgundian-style wines)
                    </li>
                    <li>
                      <strong>Sparkling Wines:</strong> Argyle, Sokol Blosser (perfect for celebrations)
                    </li>
                    <li>
                      <strong>Chardonnay & Whites:</strong> Stoller, Sokol Blosser (crisp, food-friendly whites)
                    </li>
                    <li>
                      <strong>Sustainable/Organic:</strong> Sokol Blosser, Stoller (certified sustainable vineyards)
                    </li>
                    <li>
                      <strong>Big Estates with Views:</strong> Domaine Drouhin, Stoller (stunning architecture and vistas)
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Step 3: Book Tasting Reservations</h3>
                  <p className="text-slate-700 leading-relaxed text-sm mb-3">
                    Many top wineries require advance reservations, especially on weekends and during harvest season (September-October). Book tastings 1-2 weeks ahead for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                    <li>Domaine Drouhin Oregon (reservations required)</li>
                    <li>Ponzi Vineyards (recommended for groups of 4+)</li>
                    <li>Stoller Family Estate (required for tours)</li>
                  </ul>
                  <p className="text-slate-700 text-sm mt-3">
                    Your chauffeur can help coordinate timing, but you must book and pay for tastings separately.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Step 4: Plan for Lunch</h3>
                  <p className="text-slate-700 leading-relaxed text-sm mb-3">
                    For full-day tours, you will need a lunch break. Options include:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>
                      <strong>Winery Restaurants:</strong> Sokol Blosser, Ponzi (farm-to-table menus paired with wines)
                    </li>
                    <li>
                      <strong>Picnic at a Winery:</strong> Many estates allow picnics on their grounds. Bring cheese, charcuterie, and bread.
                    </li>
                    <li>
                      <strong>Nearby Restaurants:</strong> Dundee and Newberg have excellent options (Red Hills Market, Jory Restaurant)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Top Wineries */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Top Wineries to Visit in Willamette Valley
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                With hundreds of options, here are our top recommendations for first-time visitors and wine enthusiasts:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {topWineries.map((winery, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {winery.name}
                    </h3>
                    <div className="text-sm text-blue-600 font-semibold mb-3">
                      {winery.specialty}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {winery.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 text-sm mt-6 italic">
                Note: This is just a starting point. Willamette Valley has 700+ wineries, each with unique character. Your chauffeur can help customize your route based on preferences.
              </p>
            </section>

            {/* What to Bring */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What to Bring on a Wine Tour
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <ul className="space-y-2 text-slate-700">
                  <li>
                    <strong>Water:</strong> Stay hydrated between tastings to pace yourself and prevent headaches.
                  </li>
                  <li>
                    <strong>Sunscreen & Sunglasses:</strong> Many tastings occur outdoors on patios or in vineyards.
                  </li>
                  <li>
                    <strong>Comfortable Shoes:</strong> Vineyards have gravel paths and uneven terrain. Skip the heels.
                  </li>
                  <li>
                    <strong>Jacket or Sweater:</strong> Wine country can be 10-15°F cooler than Portland, especially in mornings.
                  </li>
                  <li>
                    <strong>Snacks:</strong> Crackers, cheese, or nuts help absorb alcohol and keep energy up.
                  </li>
                  <li>
                    <strong>Cooler (Optional):</strong> If you plan to buy bottles, some chauffeurs provide coolers. Ask when booking.
                  </li>
                  <li>
                    <strong>Cash/Credit Card:</strong> Tasting fees range from $20-50 per person. Many waive fees with bottle purchases.
                  </li>
                </ul>
              </div>
            </section>

            {/* Best Time to Visit */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Best Time of Year for Wine Tours
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Willamette Valley wine tours are incredible year-round, but each season offers a unique experience:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Spring (April-May)</h3>
                  <p className="text-slate-700 text-sm">
                    Vineyards come alive with budding vines and wildflowers. Smaller crowds and mild weather. Perfect for scenic photography.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Summer (June-August)</h3>
                  <p className="text-slate-700 text-sm">
                    Peak season with warm weather and long daylight hours. Busy on weekends, but vibrant atmosphere. Book reservations early.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Fall (September-October)</h3>
                  <p className="text-slate-700 text-sm">
                    Harvest season is magical—watch grapes being picked and crushed. Gorgeous fall foliage. Most romantic time to visit, but also the busiest.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Winter (November-March)</h3>
                  <p className="text-slate-700 text-sm">
                    Quiet and intimate with cozy tasting rooms and fireplaces. Many wineries offer special winter releases. Bring layers and embrace the rain.
                  </p>
                </div>
              </div>
            </section>

            {/* Sample Itinerary */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Sample Full-Day Wine Tour Itinerary
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Here is a classic full-day Willamette Valley wine tour itinerary:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                <div className="space-y-4 text-slate-700">
                  <div>
                    <strong>10:00am:</strong> Pickup at your Portland hotel or residence
                  </div>
                  <div>
                    <strong>10:45am:</strong> Arrive at Ponzi Vineyards (Pinot Noir & Chardonnay tasting)
                  </div>
                  <div>
                    <strong>12:00pm:</strong> Domaine Drouhin Oregon (Burgundian-style Pinot Noir, hilltop views)
                  </div>
                  <div>
                    <strong>1:15pm:</strong> Lunch at Sokol Blosser (farm-to-table food with wine pairings)
                  </div>
                  <div>
                    <strong>2:45pm:</strong> Argyle Winery (sparkling wine tasting)
                  </div>
                  <div>
                    <strong>4:00pm:</strong> Stoller Family Estate (estate Pinot Noir, vineyard walk)
                  </div>
                  <div>
                    <strong>5:30pm:</strong> Depart wine country for Portland
                  </div>
                  <div>
                    <strong>6:15pm:</strong> Return to hotel
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 italic">
                  This is just one example. Your chauffeur will customize the route based on your preferences and reservation times.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Conclusion: Enjoy Wine Country Responsibly and Luxuriously
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Willamette Valley is a world-class wine destination just minutes from Portland. But the only responsible way to experience it is with a professional chauffeur. You eliminate DUI risk, maximize enjoyment, and arrive at each winery relaxed and ready to taste.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Oregon Town Car specializes in Willamette Valley wine tours with expert route planning, luxury vehicles, and chauffeurs who know wine country inside and out. Whether you are celebrating a special occasion, entertaining clients, or simply love great wine, we make the experience effortless.
              </p>

              <div className="text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Explore Oregon Wine Country?
                </h3>
                <Link
                  href="/en/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Book Your Wine Tour
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <ContextualFAQ faqs={faqs} title="Wine Tour FAQs" />

            {/* Related Links */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/en/services/wine-tours" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Wine Tours
                </Link>
                <Link href="/en/cities/portland" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Portland Service
                </Link>
                <Link href="/en/services/special-events" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Special Events
                </Link>
                <Link href="/en/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors">
                  Book Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
