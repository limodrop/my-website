import { Locale } from '@/lib/i18n/types';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface HomepageFAQsProps {
  locale: Locale;
}

const faqs: FAQItem[] = [
  {
    question: 'How far in advance should I book chauffeur service?',
    answer: 'We recommend booking at least 24-48 hours in advance for airport transfers to ensure vehicle and chauffeur availability. For corporate events, special occasions, or group transportation, book 3-7 days ahead. However, we accommodate last-minute requests whenever possible—contact us for same-day availability.',
  },
  {
    question: 'Do you track flights for airport pickups?',
    answer: 'Yes, we monitor all flights in real-time for airport transfers. If your flight is delayed, your chauffeur will automatically adjust the pickup time at no extra charge. You don\'t need to notify us of delays—we track them proactively using flight monitoring systems.',
  },
  {
    question: 'Is pricing fixed or does it change based on traffic?',
    answer: 'Airport transfers and point-to-point service use transparent fixed pricing confirmed at booking. Traffic, tolls, and wait time are included in the quoted rate. Hourly chauffeur service is billed at a fixed hourly rate with a minimum booking period, typically 3-4 hours.',
  },
  {
    question: 'What areas do you serve in Portland?',
    answer: 'We serve all of the Portland metro area including downtown Portland, Beaverton, Hillsboro, Lake Oswego, Tigard, Vancouver WA, and surrounding suburbs. We also provide wine country transportation to Willamette Valley, and long-distance transfers to Eugene, Salem, and the Oregon coast.',
  },
  {
    question: 'What types of vehicles are available?',
    answer: 'Our luxury fleet includes Luxury Sedans (2 passengers), Executive SUVs (6 passengers), Executive Vans (14 passengers), and Mini Coaches (27 passengers). All vehicles are late-model, professionally maintained, and equipped with climate control, premium water, and passenger amenities.',
  },
  {
    question: 'Do you offer corporate accounts and billing?',
    answer: 'Yes, we provide dedicated corporate account management for companies with frequent chauffeur needs. Corporate accounts receive centralized billing, travel reporting, priority booking, and consistent service for all employees. Contact us to set up a corporate account.',
  },
  {
    question: 'Can I book chauffeur service for multiple days or events?',
    answer: 'Absolutely. We handle multi-day itineraries, conferences, corporate roadshows, and extended travel. Our hourly chauffeur service is ideal for full-day or multi-day bookings. We can coordinate transportation for groups across multiple vehicles and days.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 24+ hours before pickup receive a full refund. Cancellations within 24 hours may incur a fee depending on vehicle type and booking details. We understand travel plans change—contact us as soon as possible if you need to modify or cancel your reservation.',
  },
];

export function HomepageFAQs({ locale }: HomepageFAQsProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 bg-[var(--surface)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--textMuted)]">
              Common questions about our Portland chauffeur service, booking process, and fleet.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[var(--textMuted)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[var(--textMuted)] mb-4">
              Have more questions? We're here to help.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
