import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'By-the-Hour Chauffeur Service in Portland, Oregon | Oregon Town Car',
  description: 'Flexible hourly chauffeur service in Portland. Perfect for meetings, events, roadshows, and city touring. Professional drivers, luxury fleet, transparent pricing.',
  keywords: 'hourly chauffeur Portland, chauffeur by the hour, hourly car service, Portland hourly driver, executive hourly service',
};

// FAQ Schema
function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum booking for hourly chauffeur service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum booking is 2 hours. You can reserve a chauffeur for as long as you need—whether it's a few hours for meetings or a full day of touring."
        }
      },
      {
        "@type": "Question",
        "name": "Can I make multiple stops during my hourly reservation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! One of the main advantages of hourly chauffeur service is complete flexibility. You can make as many stops as you'd like, change destinations on the fly, and adjust your itinerary as needed during your reserved time."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I need more time than I originally booked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can extend your reservation at the same hourly rate, subject to chauffeur availability. We recommend booking extra time upfront if you're unsure, as same-day extensions aren't always guaranteed during peak periods."
        }
      },
      {
        "@type": "Question",
        "name": "Is gratuity included in the hourly rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gratuity is not included in the hourly rate. Tips are appreciated for exceptional service and are typically 15-20% of the total fare."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book an hourly chauffeur for a wine tour in Willamette Valley?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Hourly chauffeur service is perfect for wine country tours. Your chauffeur will wait at each winery while you enjoy tastings, and you can customize your route and timing throughout the day."
        }
      },
      {
        "@type": "Question",
        "name": "What types of vehicles are available for hourly service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer luxury sedans for 1-3 passengers, SUVs for 4-6 passengers, and executive vans for larger groups. All vehicles are late-model, immaculately maintained, and equipped with premium amenities."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer hourly chauffeur service outside of Portland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our hourly chauffeur service is available throughout the Portland metro area and surrounding regions including Oregon wine country, the coast, and Columbia River Gorge. Contact us for service area confirmation and pricing."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book hourly chauffeur service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking at least 24-48 hours in advance to ensure vehicle and chauffeur availability, especially for weekends and peak seasons. Same-day bookings may be available depending on fleet capacity."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

export default function HourlyChauffeurPage({
  params
}: {
  params: { lang: Locale }
}) {
  const locale = params.lang;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <FAQSchema />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              By-the-Hour Chauffeur Service in Portland, Oregon
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-8">
              Flexible hourly chauffeur service for meetings, events, roadshows, and city touring. 
              Your dedicated driver and luxury vehicle, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}`}
                className="inline-block px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-colors"
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
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* What is Hourly Chauffeur Service */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              What is By-the-Hour Chauffeur Service?
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--textMuted)]">
              <p className="mb-4">
                Our by-the-hour chauffeur service provides you with a dedicated professional driver and luxury vehicle 
                for as long as you need. Instead of booking individual trips, you reserve a chauffeur for a set number 
                of hours, giving you complete flexibility to make multiple stops, change plans on the fly, and focus on 
                what matters most—your business or experience.
              </p>
              <p>
                Whether you're hosting VIP clients, managing a packed schedule of meetings across Portland, or exploring 
                Oregon's wine country at your own pace, hourly chauffeur service offers the convenience, professionalism, 
                and comfort of a full-time personal driver without the commitment.
              </p>
            </div>
          </section>

          {/* Ideal Use Cases */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              Perfect For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Business Meetings & Roadshows</h3>
                <p className="text-[var(--textMuted)]">
                  Navigate multiple client meetings, office visits, or investor presentations across Portland and 
                  surrounding areas without worrying about parking, traffic, or logistics.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Corporate Events & Conferences</h3>
                <p className="text-[var(--textMuted)]">
                  Transport executives between hotels, convention centers, and evening events. Your chauffeur waits 
                  on-site, ready to move when you are.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Wine Country Tours</h3>
                <p className="text-[var(--textMuted)]">
                  Explore Willamette Valley wineries at your own pace. Taste, relax, and enjoy—your driver handles 
                  navigation and ensures a safe, comfortable journey.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">City Tours & Sightseeing</h3>
                <p className="text-[var(--textMuted)]">
                  Discover Portland's best attractions, neighborhoods, and hidden gems with a knowledgeable local 
                  chauffeur who can recommend stops tailored to your interests.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Special Occasions</h3>
                <p className="text-[var(--textMuted)]">
                  Weddings, anniversaries, and milestone celebrations deserve VIP treatment. Enjoy door-to-door service 
                  for restaurant hopping, venue visits, or photo tours.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Shopping & Errands</h3>
                <p className="text-[var(--textMuted)]">
                  Luxury shopping trips, vendor visits, or running high-priority errands—your chauffeur loads packages, 
                  manages timing, and keeps you on schedule.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              How It Works
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Choose Your Hours</h3>
                  <p className="text-[var(--textMuted)]">
                    Book a minimum of 2 hours up to a full day (or longer). You pay only for the time you reserve, 
                    with transparent hourly rates and no hidden fees.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Select Your Vehicle</h3>
                  <p className="text-[var(--textMuted)]">
                    Choose from our fleet of luxury sedans, SUVs, or executive vans based on your group size and 
                    comfort preferences. All vehicles are late-model and immaculately maintained.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Meet Your Chauffeur</h3>
                  <p className="text-[var(--textMuted)]">
                    Your professional chauffeur arrives on time, dressed in business attire, ready to provide 
                    courteous, discreet service. They'll assist with doors, luggage, and route planning.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Travel on Your Schedule</h3>
                  <p className="text-[var(--textMuted)]">
                    Your chauffeur waits while you attend meetings, events, or tours. Change destinations, add stops, 
                    or adjust timing as needed—you're in control.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              What's Included
            </h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Professional licensed chauffeur</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Late-model luxury vehicle</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Complimentary bottled water</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Climate-controlled comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Door-to-door service</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Flexible itinerary adjustments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">Meet & greet service</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text)]">All taxes and fees included</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              Fixed Hourly Pricing
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-[var(--text)] mb-4">
                <strong>Transparent rates with no surprises:</strong> Our hourly chauffeur service features straightforward 
                pricing based on vehicle type and duration. No surge pricing, no hidden fees, no meter running.
              </p>
              <p className="text-[var(--textMuted)]">
                Minimum booking: 2 hours. Rates include vehicle, chauffeur, fuel, and all standard fees. 
                Contact us for a personalized quote based on your specific needs.
              </p>
            </div>
            <div className="text-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-colors"
              >
                Request an Hourly Quote
              </Link>
            </div>
          </section>

          {/* Why Choose Oregon Town Car */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              Why Choose Oregon Town Car for Hourly Service
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Professional Chauffeurs</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Licensed, insured, and extensively trained drivers with local knowledge and impeccable service standards
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Luxury Fleet</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Immaculate late-model sedans, SUVs, and vans equipped with premium amenities for your comfort
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Fixed Pricing</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Transparent hourly rates with no surge pricing or hidden fees—know exactly what you'll pay upfront
                </p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href={`/${locale}/services/airport-transportation`}
                className="block bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Airport Transportation</h3>
                <p className="text-sm text-[var(--textMuted)] mb-4">
                  Reliable PDX pickup and drop-off service
                </p>
                <span className="text-[var(--primary)] font-medium">Learn More →</span>
              </Link>

              <Link
                href={`/${locale}/services/corporate-transportation`}
                className="block bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Corporate Transportation</h3>
                <p className="text-sm text-[var(--textMuted)] mb-4">
                  Executive travel solutions for businesses
                </p>
                <span className="text-[var(--primary)] font-medium">Learn More →</span>
              </Link>

              <Link
                href={`/${locale}/services/wine-tours`}
                className="block bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Wine Country Tours</h3>
                <p className="text-sm text-[var(--textMuted)] mb-4">
                  Explore Willamette Valley wineries in luxury
                </p>
                <span className="text-[var(--primary)] font-medium">Learn More →</span>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  What is the minimum booking for hourly chauffeur service?
                </h3>
                <p className="text-[var(--textMuted)]">
                  The minimum booking is 2 hours. You can reserve a chauffeur for as long as you need—whether 
                  it's a few hours for meetings or a full day of touring.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  Can I make multiple stops during my hourly reservation?
                </h3>
                <p className="text-[var(--textMuted)]">
                  Yes! One of the main advantages of hourly chauffeur service is complete flexibility. You can make 
                  as many stops as you'd like, change destinations on the fly, and adjust your itinerary as needed 
                  during your reserved time.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  What happens if I need more time than I originally booked?
                </h3>
                <p className="text-[var(--textMuted)]">
                  You can extend your reservation at the same hourly rate, subject to chauffeur availability. We 
                  recommend booking extra time upfront if you're unsure, as same-day extensions aren't always 
                  guaranteed during peak periods.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  Is gratuity included in the hourly rate?
                </h3>
                <p className="text-[var(--textMuted)]">
                  Gratuity is not included in the hourly rate. Tips are appreciated for exceptional service and 
                  are typically 15-20% of the total fare.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  Can I book an hourly chauffeur for a wine tour in Willamette Valley?
                </h3>
                <p className="text-[var(--textMuted)]">
                  Absolutely! Hourly chauffeur service is perfect for wine country tours. Your chauffeur will wait 
                  at each winery while you enjoy tastings, and you can customize your route and timing throughout 
                  the day.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  What types of vehicles are available for hourly service?
                </h3>
                <p className="text-[var(--textMuted)]">
                  We offer luxury sedans for 1-3 passengers, SUVs for 4-6 passengers, and executive vans for larger 
                  groups. All vehicles are late-model, immaculately maintained, and equipped with premium amenities.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  Do you offer hourly chauffeur service outside of Portland?
                </h3>
                <p className="text-[var(--textMuted)]">
                  Yes, our hourly chauffeur service is available throughout the Portland metro area and surrounding 
                  regions including Oregon wine country, the coast, and Columbia River Gorge. Contact us for service 
                  area confirmation and pricing.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  How far in advance should I book hourly chauffeur service?
                </h3>
                <p className="text-[var(--textMuted)]">
                  We recommend booking at least 24-48 hours in advance to ensure vehicle and chauffeur availability, 
                  especially for weekends and peak seasons. Same-day bookings may be available depending on fleet 
                  capacity.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Book Your Hourly Chauffeur?
            </h2>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
              Reserve your professional driver and luxury vehicle for the hours you need. 
              Flexible, reliable, and always on time.
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
                Contact Us
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
