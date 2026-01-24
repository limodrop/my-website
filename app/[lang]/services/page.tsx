import { serverApi } from "@/lib/api/serverClient"
import { Locale } from "@/lib/i18n/types"
import { ServiceCard } from "@/app/ui/cards/ServiceCard"
import { getDictionary } from "@/app/i18n"
import { JsonLd } from "@/app/components/seo/JsonLd"
import { QuoteButton } from "@/app/components/QuoteButton"
import Link from "next/link"
import type { Service, LocalBusiness, FAQPage, WithContext } from "schema-dts"

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const locale = params.lang

  return {
    title: "Chauffeur Services — Oregon Town Car",
    description:
      "Explore premium chauffeur services, airport transfers, corporate travel, and point-to-point rides worldwide.",
    alternates: {
      canonical: `https://oregontowncar.com/${locale}/services`,
    },
  }
}

export default async function ServicesPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const services = await serverApi.getServices()

  // Schema markup
  const serviceSchema: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Premium Chauffeur Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Oregon Town Car",
      "url": "https://oregontowncar.com",
      "telephone": "+1-503-908-1010",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Portland",
        "addressRegion": "OR",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Portland",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "OR",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Country",
        "name": "Worldwide"
      }
    ],
    "serviceType": "Chauffeur Service",
    "description": "Premium chauffeur services including airport transportation, corporate travel, and point-to-point luxury transportation worldwide."
  }

  const businessSchema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LimousineService",
    "name": "Oregon Town Car",
    "url": "https://oregontowncar.com",
    "telephone": "+1-503-908-1010",
    "email": "reservations@oregontowncar.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Portland",
      "addressRegion": "OR",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Portland"
      },
      {
        "@type": "State",
        "name": "Oregon"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chauffeur Services",
      "itemListElement": services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    }
  }

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What chauffeur services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a full range of premium chauffeur services including airport transportation with flight tracking, corporate travel and executive transportation, point-to-point luxury rides, wine tour transportation, special events, and hourly chauffeur services. All services are available in Portland, Oregon and through our worldwide partner network."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide airport transportation and flight tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in airport transportation with complimentary flight tracking and meet-and-greet service. Your chauffeur monitors your flight in real-time and adjusts pickup times automatically for delays or early arrivals, ensuring a seamless experience at PDX and airports worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book chauffeur services for corporate travel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We provide dedicated corporate travel solutions including executive transportation, roadshows, conference shuttles, and client entertainment. Corporate accounts receive priority booking, monthly billing, and access to our global network of vetted chauffeur partners."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer services outside Oregon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, through our worldwide chauffeur network, we provide the same premium service in 64+ cities across 13 countries. Whether you need transportation in New York, London, Dubai, or Tokyo, we coordinate every detail with trusted local partners who meet our quality standards."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard services, we recommend booking 24-48 hours in advance to ensure vehicle availability. For large events, wine tours, or specialized requests, 3-5 days notice is preferred. However, we accept last-minute bookings based on fleet availability and can accommodate same-day requests whenever possible."
        }
      }
    ]
  }

  return (
    <>
      <JsonLd data={[serviceSchema, businessSchema, faqSchema]} />
      
      <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--text)] mb-3 sm:mb-4">
        {dict.nav.services}
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)] mb-6 max-w-2xl">
        Premium chauffeur services designed for airport travel, corporate needs, and point-to-point transportation worldwide.
      </p>

      {/* SEO Intro Section */}
      <div className="mb-10 sm:mb-12 max-w-4xl">
        <div className="prose prose-sm sm:prose-base max-w-none text-[var(--textMuted)]">
          <p className="mb-4">
            Oregon Town Car delivers premium chauffeur services that go beyond simple transportation. Since 2010, we've built our reputation on punctuality, professionalism, and a commitment to excellence that sets us apart in luxury transportation. Whether you're catching a flight at PDX, hosting international clients, or planning a wine tour through the Willamette Valley, our licensed chauffeurs and immaculate black vehicles ensure every journey reflects the quality you expect.
          </p>
          <p className="mb-4">
            Our service portfolio spans airport transportation with complimentary flight tracking, corporate travel solutions for executives and teams, point-to-point luxury rides, special event transportation, and fully customizable hourly chauffeur service. Each category is designed with specific needs in mind—from the business traveler who values reliability to the couple celebrating a milestone occasion.
          </p>
          <p>
            Serving Portland, Oregon as our home base, we've expanded our reach to <Link href={`/${locale}/cities`} className="text-[var(--primary)] hover:underline">major cities across the United States</Link> and <Link href={`/${locale}/worldwide`} className="text-[var(--primary)] hover:underline">64+ destinations worldwide</Link> through our vetted partner network. From Beaverton to Tokyo, the same standards of service, safety, and sophistication travel with you.
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid-responsive mb-12 sm:mb-16">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            slug={service.slug}
            description={service.description}
            locale={locale}
          />
        ))}
      </div>

      {/* Serving Areas Section */}
      <section className="mb-12 sm:mb-16 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text)] mb-4">
          Serving Portland, Oregon & Worldwide
        </h2>
        <p className="text-sm sm:text-base text-[var(--textMuted)] mb-6">
          Our primary service area covers <Link href={`/${locale}/cities/portland`} className="text-[var(--primary)] hover:underline">Portland</Link>, <Link href={`/${locale}/cities/beaverton`} className="text-[var(--primary)] hover:underline">Beaverton</Link>, Lake Oswego, Vancouver, WA, and the entire Willamette Valley wine country. Beyond Oregon, we provide seamless chauffeur service in major U.S. cities including New York, Los Angeles, Chicago, and Miami, as well as <Link href={`/${locale}/worldwide`} className="text-[var(--primary)] hover:underline">international destinations</Link> across Europe, Asia, and the Middle East through our trusted global network. Explore our <Link href={`/${locale}/countries/united-states`} className="text-[var(--primary)] hover:underline">U.S. coverage</Link> or contact us to coordinate service anywhere in the world.
        </p>
      </section>

      {/* Trust Signals */}
      <section className="mb-12 sm:mb-16 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-1">Licensed & Insured</h3>
            <p className="text-xs text-[var(--textMuted)]">Fully certified chauffeurs</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-1">Flight Tracking</h3>
            <p className="text-xs text-[var(--textMuted)]">Real-time meet & greet</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-1">Premium Fleet</h3>
            <p className="text-xs text-[var(--textMuted)]">Immaculate black vehicles</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-1">24/7 Support</h3>
            <p className="text-xs text-[var(--textMuted)]">Always available</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-1">Global Network</h3>
            <p className="text-xs text-[var(--textMuted)]">64+ cities worldwide</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12 sm:mb-16 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text)] mb-6">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <summary className="font-semibold text-[var(--text)] cursor-pointer list-none flex items-center justify-between">
              <span>What chauffeur services do you offer?</span>
              <svg className="w-5 h-5 text-[var(--textMuted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-sm text-[var(--textMuted)]">
              We offer a full range of premium chauffeur services including airport transportation with flight tracking, corporate travel and executive transportation, point-to-point luxury rides, wine tour transportation, special events, and hourly chauffeur services. All services are available in Portland, Oregon and through our worldwide partner network.
            </p>
          </details>

          <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <summary className="font-semibold text-[var(--text)] cursor-pointer list-none flex items-center justify-between">
              <span>Do you provide airport transportation and flight tracking?</span>
              <svg className="w-5 h-5 text-[var(--textMuted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-sm text-[var(--textMuted)]">
              Yes, we specialize in airport transportation with complimentary flight tracking and meet-and-greet service. Your chauffeur monitors your flight in real-time and adjusts pickup times automatically for delays or early arrivals, ensuring a seamless experience at PDX and airports worldwide.
            </p>
          </details>

          <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <summary className="font-semibold text-[var(--text)] cursor-pointer list-none flex items-center justify-between">
              <span>Can I book chauffeur services for corporate travel?</span>
              <svg className="w-5 h-5 text-[var(--textMuted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-sm text-[var(--textMuted)]">
              Absolutely. We provide dedicated corporate travel solutions including executive transportation, roadshows, conference shuttles, and client entertainment. Corporate accounts receive priority booking, monthly billing, and access to our global network of vetted chauffeur partners.
            </p>
          </details>

          <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <summary className="font-semibold text-[var(--text)] cursor-pointer list-none flex items-center justify-between">
              <span>Do you offer services outside Oregon?</span>
              <svg className="w-5 h-5 text-[var(--textMuted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-sm text-[var(--textMuted)]">
              Yes, through our worldwide chauffeur network, we provide the same premium service in 64+ cities across 13 countries. Whether you need transportation in New York, London, Dubai, or Tokyo, we coordinate every detail with trusted local partners who meet our quality standards.
            </p>
          </details>

          <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <summary className="font-semibold text-[var(--text)] cursor-pointer list-none flex items-center justify-between">
              <span>How far in advance should I book?</span>
              <svg className="w-5 h-5 text-[var(--textMuted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-sm text-[var(--textMuted)]">
              For standard services, we recommend booking 24-48 hours in advance to ensure vehicle availability. For large events, wine tours, or specialized requests, 3-5 days notice is preferred. However, we accept last-minute bookings based on fleet availability and can accommodate same-day requests whenever possible.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 rounded-lg p-8 sm:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to Book Your Chauffeur?
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Experience the difference of premium chauffeur service. Available 24/7 in Portland and worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="https://accounts.oregontowncar.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--primary)] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Book Now
          </a>
          <QuoteButton variant="outline" />
        </div>
      </section>
    </>
  )
}
