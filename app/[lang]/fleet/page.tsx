import { serverApi } from "@/lib/api/serverClient"
import { Locale } from "@/lib/i18n/types"
import { FleetCard } from "@/app/ui/cards/FleetCard"
import { getDictionary } from "@/app/i18n"
import { JsonLd } from "@/app/components/seo/JsonLd"
import Link from "next/link"
import type { Product, LocalBusiness, FAQPage, WithContext } from "schema-dts"

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const locale = params.lang

  return {
    title: "Luxury Fleet — Oregon Town Car",
    description:
      "Browse our fleet of luxury sedans, SUVs, Sprinter vans, and executive vehicles for every occasion.",
    alternates: {
      canonical: `https://oregontowncar.com/${locale}/fleet`,
    },
  }
}

export default async function FleetPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const fleet = await serverApi.getFleet()

  // Schema markup for fleet vehicles
  const vehicleSchemas: WithContext<Product>[] = fleet.map((vehicle) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": vehicle.name,
    "description": `Luxury ${vehicle.name} available for chauffeur service in Portland and worldwide`,
    "brand": {
      "@type": "Brand",
      "name": "Oregon Town Car"
    },
    "category": "Luxury Vehicle",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": `https://oregontowncar.com/${locale}/fleet/${vehicle.slug}`,
      "seller": {
        "@type": "Organization",
        "name": "Oregon Town Car"
      }
    }
  }))

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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Fleet",
      "itemListElement": fleet.map((vehicle) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": vehicle.name,
          "url": `https://oregontowncar.com/${locale}/fleet/${vehicle.slug}`
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
        "name": "What vehicles are included in your luxury fleet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our luxury fleet includes executive sedans (Mercedes-Benz S-Class, BMW 7-Series), black SUVs (Cadillac Escalade, Chevrolet Suburban), executive vans (Mercedes-Benz Sprinter), and mini coaches for larger groups. All vehicles are late-model, meticulously maintained, and equipped with premium amenities for your comfort."
        }
      },
      {
        "@type": "Question",
        "name": "How many passengers fit in each vehicle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our luxury sedans accommodate up to 3 passengers comfortably, black SUVs seat up to 6 passengers with luggage space, executive vans hold 10-14 passengers with luggage, and mini coaches can transport groups of 20-30 passengers. We help you select the right vehicle based on your group size and luggage requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Are your vehicles insured and commercially licensed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all vehicles in our fleet carry comprehensive commercial insurance and are fully licensed for passenger transportation. Every chauffeur holds the proper commercial driver certifications, and our vehicles undergo daily safety inspections and regular maintenance to ensure the highest safety standards."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request a specific vehicle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. When booking, you can request a specific vehicle type or even a particular make and model (subject to availability). We recommend booking 48-72 hours in advance for specific vehicle requests, especially during peak travel seasons or for special events."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide child seats or luggage assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, complimentary child safety seats are available upon request when booking (please specify age and weight of children). All our chauffeurs provide full luggage assistance, including loading, unloading, and secure storage. For airport transfers, we ensure ample time for baggage claim and meet you at arrivals with a personalized name sign."
        }
      }
    ]
  }

  return (
    <>
      <JsonLd data={[...vehicleSchemas, businessSchema, faqSchema]} />
      
      <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--text)] mb-3 sm:mb-4">
        {dict.nav.fleet}
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)] mb-6 max-w-2xl">
        Luxury sedans, SUVs, Sprinter vans, and executive vehicles — all driven by professional chauffeurs.
      </p>

      {/* SEO Intro Section */}
      <div className="mb-10 sm:mb-12 max-w-4xl">
        <div className="prose prose-sm sm:prose-base max-w-none text-[var(--textMuted)]">
          <p className="mb-4">
            Our luxury fleet represents the pinnacle of comfort, safety, and professionalism in chauffeur-driven vehicles. Every sedan, black SUV, and executive van is selected for its reliability, refined interior, and ability to deliver a first-class experience whether you're heading to PDX for a business flight or hosting international clients. This isn't just black car service—it's a commitment to excellence that shows in every detail, from the gleaming exterior to the pristine leather seating.
          </p>
          <p className="mb-4">
            Choosing the right vehicle depends on your specific needs. Solo executives and couples prefer our luxury sedans for <Link href={`/${locale}/services/airport-transportation`} className="text-[var(--primary)] hover:underline">airport transportation</Link> and point-to-point travel. Families and small groups select our black luxury SUVs for extra luggage capacity and spacious comfort. Corporate teams and VIP arrivals rely on our executive vans for group <Link href={`/${locale}/services`} className="text-[var(--primary)] hover:underline">corporate travel</Link>, while larger events require our mini coaches to transport entire teams in style.
          </p>
          <p>
            Based in <Link href={`/${locale}/cities/portland`} className="text-[var(--primary)] hover:underline">Portland, Oregon</Link>, our entire fleet is available for local service throughout the metro area and statewide. Through our <Link href={`/${locale}/worldwide`} className="text-[var(--primary)] hover:underline">worldwide chauffeur network</Link>, you can request the same caliber of luxury vehicles in 64+ cities across North America, Europe, Asia, and the Middle East. The same standards travel with you—always.
          </p>
        </div>
      </div>

      {/* Fleet Cards */}
      <div className="grid-responsive mb-12 sm:mb-16">
        {fleet.map((vehicle) => (
          <FleetCard
            key={vehicle.id}
            name={vehicle.name}
            slug={vehicle.slug}
            capacity={vehicle.seats ? `${vehicle.seats} passengers` : undefined}
            image={vehicle.image}
            locale={locale}
          />
        ))}
      </div>

      {/* Vehicle Selection Guide */}
      <section className="mb-12 sm:mb-16 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text)] mb-6">
          Which Vehicle Is Right for Your Ride?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text)] mb-2">Luxury Sedan</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Perfect for solo travelers, executives, and business professionals. Ideal for airport transfers, corporate meetings, and point-to-point service. Seats up to 3 passengers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text)] mb-2">Black SUV</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Best for families, airport travel with luggage, and small groups. Spacious interior with premium comfort. Accommodates up to 6 passengers with ample cargo space.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text)] mb-2">Executive Van</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Designed for corporate groups, VIP arrivals, and executive teams. Premium seating with conference-style amenities. Holds 10-14 passengers with full luggage capacity.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text)] mb-2">Mini Coach</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Perfect for events, conferences, and large group transportation. Spacious seating for 20-30 passengers. Ideal for corporate events, weddings, and wine tours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Strip */}
      <section className="mb-12 sm:mb-16 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-6 text-center">
          Fleet Safety & Quality Standards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-1">Late-Model Vehicles</h3>
            <p className="text-xs text-[var(--textMuted)]">2021+ luxury models only</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-1">Commercial Insurance</h3>
            <p className="text-xs text-[var(--textMuted)]">Full coverage protection</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-1">Licensed Chauffeurs</h3>
            <p className="text-xs text-[var(--textMuted)]">Professional certifications</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-1">Daily Inspections</h3>
            <p className="text-xs text-[var(--textMuted)]">Safety & cleanliness checks</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-1">Executive Service</h3>
            <p className="text-xs text-[var(--textMuted)]">Discreet & professional</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12 sm:mb-16 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text)] mb-6">
          Fleet Questions & Answers
        </h2>
        
        <div className="space-y-4">
          <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <summary className="font-semibold text-[var(--text)] cursor-pointer list-none flex items-center justify-between">
              <span>What vehicles are included in your luxury fleet?</span>
              <svg className="w-5 h-5 text-[var(--textMuted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-sm text-[var(--textMuted)]">
              Our luxury fleet includes executive sedans (Mercedes-Benz S-Class, BMW 7-Series), black SUVs (Cadillac Escalade, Chevrolet Suburban), executive vans (Mercedes-Benz Sprinter), and mini coaches for larger groups. All vehicles are late-model, meticulously maintained, and equipped with premium amenities for your comfort.
            </p>
          </details>

          <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <summary className="font-semibold text-[var(--text)] cursor-pointer list-none flex items-center justify-between">
              <span>How many passengers fit in each vehicle?</span>
              <svg className="w-5 h-5 text-[var(--textMuted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-sm text-[var(--textMuted)]">
              Our luxury sedans accommodate up to 3 passengers comfortably, black SUVs seat up to 6 passengers with luggage space, executive vans hold 10-14 passengers with luggage, and mini coaches can transport groups of 20-30 passengers. We help you select the right vehicle based on your group size and luggage requirements.
            </p>
          </details>

          <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <summary className="font-semibold text-[var(--text)] cursor-pointer list-none flex items-center justify-between">
              <span>Are your vehicles insured and commercially licensed?</span>
              <svg className="w-5 h-5 text-[var(--textMuted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-sm text-[var(--textMuted)]">
              Yes, all vehicles in our fleet carry comprehensive commercial insurance and are fully licensed for passenger transportation. Every chauffeur holds the proper commercial driver certifications, and our vehicles undergo daily safety inspections and regular maintenance to ensure the highest safety standards.
            </p>
          </details>

          <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <summary className="font-semibold text-[var(--text)] cursor-pointer list-none flex items-center justify-between">
              <span>Can I request a specific vehicle?</span>
              <svg className="w-5 h-5 text-[var(--textMuted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-sm text-[var(--textMuted)]">
              Absolutely. When booking, you can request a specific vehicle type or even a particular make and model (subject to availability). We recommend booking 48-72 hours in advance for specific vehicle requests, especially during peak travel seasons or for special events.
            </p>
          </details>

          <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6">
            <summary className="font-semibold text-[var(--text)] cursor-pointer list-none flex items-center justify-between">
              <span>Do you provide child seats or luggage assistance?</span>
              <svg className="w-5 h-5 text-[var(--textMuted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-sm text-[var(--textMuted)]">
              Yes, complimentary child safety seats are available upon request when booking (please specify age and weight of children). All our chauffeurs provide full luggage assistance, including loading, unloading, and secure storage. For airport transfers, we ensure ample time for baggage claim and meet you at arrivals with a personalized name sign.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 rounded-lg p-8 sm:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to Experience Our Luxury Fleet?
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Choose your preferred vehicle and book your chauffeur service today. Available in Portland and worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--primary)] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Book Your Ride
          </Link>
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            View Services
          </Link>
        </div>
      </section>
    </>
  )
}
