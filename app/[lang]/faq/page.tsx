import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { buildLocalBusinessSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Chauffeur Service | Oregon Town Car',
  description: 'Common questions about our chauffeur service, airport transportation, pricing, booking, vehicles, and worldwide coverage. Get answers to all your questions.',
  openGraph: {
    title: 'FAQ - Chauffeur Service Questions | Oregon Town Car',
    description: 'Find answers to common questions about our premium chauffeur service.',
  },
};

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const localBusinessSchema = buildLocalBusinessSchema();

  const faqCategories = [
    {
      name: 'Booking & Payments',
      faqs: [
        {
          question: 'How far in advance should I book chauffeur service?',
          answer: 'We recommend booking 24-48 hours in advance for best availability. However, we accept same-day and last-minute bookings when possible. For special events, corporate roadshows, or large groups, booking 1-2 weeks ahead ensures your preferred vehicle and chauffeur.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), corporate accounts with monthly billing, and payment via mobile apps. Corporate clients can set up invoicing with Net-15 or Net-30 terms.',
        },
        {
          question: 'Is there a cancellation fee?',
          answer: 'Cancellations made 24+ hours before pickup are free. Cancellations within 24 hours may incur a fee depending on the booking. No-shows are charged the full fare. We understand plans change—contact us as early as possible for best flexibility.',
        },
        {
          question: 'Do you offer fixed pricing or is it metered?',
          answer: 'All our services use fixed pricing quoted upfront—no surge pricing, no hidden fees, and no meter surprises. You know exactly what you will pay before booking. The only exception is if you add extra stops or extend hourly service beyond the agreed time.',
        },
      ],
    },
    {
      name: 'Airport Transportation',
      faqs: [
        {
          question: 'How does meet-and-greet service work?',
          answer: 'Your chauffeur tracks your flight in real-time and meets you inside the airport at baggage claim with a name sign. They assist with luggage and escort you to the vehicle in the premium pickup zone. No waiting outside or searching for a car.',
        },
        {
          question: 'What happens if my flight is delayed or arrives early?',
          answer: 'We monitor all flights automatically. If your flight is delayed, your chauffeur adjusts pickup time at no extra charge. If you land early, we do our best to accommodate but cannot guarantee immediate pickup for very early arrivals. Flight tracking is included free.',
        },
        {
          question: 'How much wait time is included for airport pickups?',
          answer: 'Domestic flights include 60 minutes of free wait time from landing. International flights include 90 minutes to account for customs and immigration. This allows you to retrieve baggage and clear the airport without rushing or extra charges.',
        },
        {
          question: 'Can the chauffeur help with luggage?',
          answer: 'Absolutely. All chauffeurs assist with loading and unloading luggage, including oversized items like golf clubs, ski equipment, or business materials. If you have extra cargo, let us know when booking so we can provide an appropriately sized vehicle.',
        },
      ],
    },
    {
      name: 'Chauffeur Services',
      faqs: [
        {
          question: 'Are your chauffeurs licensed and background-checked?',
          answer: 'Yes. All chauffeurs are commercially licensed, fully insured, and pass comprehensive background checks. We also provide ongoing training in customer service, defensive driving, and local area knowledge to ensure the highest standards.',
        },
        {
          question: 'Can I request a specific chauffeur?',
          answer: 'Yes, especially for corporate accounts or regular clients. If you have worked with one of our chauffeurs before and prefer them, let us know when booking. We will do our best to assign that chauffeur based on availability.',
        },
        {
          question: 'Do chauffeurs assist with special requests like grocery stops or errands?',
          answer: 'Yes. For hourly service, your chauffeur can accommodate grocery stops, pharmacy pickups, or other errands along your route. Just communicate your needs when booking so we can allocate appropriate time. Point-to-point trips typically do not include extra stops.',
        },
        {
          question: 'What languages do your chauffeurs speak?',
          answer: 'All chauffeurs speak English fluently. For international clients or specific language needs, we can arrange chauffeurs who speak Spanish, French, Mandarin, or other languages with advance notice. Contact us for availability.',
        },
      ],
    },
    {
      name: 'Worldwide Services',
      faqs: [
        {
          question: 'How does worldwide chauffeur service work?',
          answer: 'We partner with vetted chauffeur companies in 64+ cities across 13 countries. You book through Oregon Town Car, and we coordinate with local partners to ensure consistent quality, pricing, and service standards. You get the same level of professionalism anywhere in the world.',
        },
        {
          question: 'Which cities and countries do you serve?',
          answer: 'We serve major cities across the United States, United Kingdom, France, Germany, Spain, Italy, UAE, Australia, Japan, Singapore, Hong Kong, Canada, and Mexico. View our complete list of cities and airports on the Worldwide page.',
        },
        {
          question: 'Is pricing consistent across different cities?',
          answer: 'Pricing varies by city based on local market rates, distance, and demand. However, all quotes are fixed and provided upfront—no surprises. For multi-city itineraries like roadshows, we provide consolidated pricing for easier budgeting.',
        },
        {
          question: 'Can you handle multi-city business travel or roadshows?',
          answer: 'Absolutely. We specialize in coordinating transportation across multiple cities for investor roadshows, sales tours, and executive travel. You get one point of contact, one invoice, and seamless service in every city on your itinerary.',
        },
      ],
    },
    {
      name: 'Vehicles & Amenities',
      faqs: [
        {
          question: 'What types of vehicles are available?',
          answer: 'Our fleet includes luxury sedans (Mercedes S-Class, BMW 7-Series), executive SUVs (Cadillac Escalade, Lincoln Navigator), and sprinter vans for larger groups. All vehicles are late-model (3 years old or newer), immaculately maintained, and equipped with premium amenities.',
        },
        {
          question: 'Do vehicles have Wi-Fi and phone chargers?',
          answer: 'Yes. All vehicles include complimentary Wi-Fi, USB and wireless phone chargers, bottled water, and climate control. Executive sedans and SUVs also offer premium sound systems and privacy partitions upon request.',
        },
        {
          question: 'How many passengers fit in each vehicle type?',
          answer: 'Sedans comfortably seat 3 passengers with luggage. SUVs seat 5-6 passengers with luggage. Sprinter vans accommodate 8-10 passengers or equivalent cargo. For large groups, we can coordinate multiple vehicles departing simultaneously.',
        },
        {
          question: 'Are vehicles wheelchair accessible?',
          answer: 'We can arrange wheelchair-accessible vehicles with advance notice. Please specify accessibility needs when booking so we can provide the appropriate vehicle and ensure a smooth experience.',
        },
      ],
    },
    {
      name: 'Cancellations & Policies',
      faqs: [
        {
          question: 'What is your cancellation policy?',
          answer: 'Free cancellations up to 24 hours before scheduled pickup. Cancellations within 24 hours may incur a fee (typically 50% of fare). No-shows are charged the full amount. For corporate accounts, we offer more flexible policies based on volume.',
        },
        {
          question: 'What happens if I need to change my pickup time or location?',
          answer: 'Changes made more than 2 hours before pickup are free. Last-minute changes (within 2 hours) are accommodated when possible but may incur fees. For flight-related changes, we track automatically at no charge.',
        },
        {
          question: 'Do you offer refunds for service issues?',
          answer: 'Yes. If service does not meet expectations due to our error (late pickup, vehicle issue, unprofessional behavior), we will investigate and offer partial or full refunds as appropriate. Customer satisfaction is our priority.',
        },
        {
          question: 'What happens if the chauffeur is delayed or does not show up?',
          answer: 'In the rare event of a delay, we contact you immediately with updates and ETA. If a chauffeur cannot reach you (mechanical issue, emergency), we dispatch a replacement vehicle immediately at no extra charge. Our on-time rate is 98%+.',
        },
      ],
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap((category) =>
      category.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-slate-300">
                Everything you need to know about our premium chauffeur service
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {category.name}
                </h2>
                <div className="space-y-6">
                  {category.faqs.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-50 border-y border-slate-200 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our team is available 24/7 to answer your questions and help with bookings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/en/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+15035550100"
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Call (503) 555-0100
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
