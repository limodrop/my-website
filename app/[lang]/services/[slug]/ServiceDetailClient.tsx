"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { SmartImage } from "@/app/components/SmartImage";
import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";
import { QuoteModal } from "@/app/components/QuoteModal";

interface ServiceDetailClientProps {
  service: any;
  cities: any[];
  fleet: any[];
  relevantCities: string[];
  relevantFleet: string[];
  content: { overview: string[]; benefits: string[]; reassurance: string[]; };
  slug: string;
}

export function ServiceDetailClient({
  service,
  cities,
  fleet,
  relevantCities,
  relevantFleet,
  content,
  slug
}: ServiceDetailClientProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.name, href: `/services/${service.slug}` },
          ]}
        />

        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)]">
            {service.name}
          </h1>
          <p className="text-lg sm:text-xl text-[var(--textMuted)] max-w-3xl">
            {service.description}
          </p>
          {/* Remove Book Now and Get a Quote buttons for hourly-chauffeur */}
          {slug !== "hourly-chauffeur" && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="primary"
                as="a"
                href="https://accounts.oregontowncar.com/"
                className="w-full sm:w-auto !px-8 !py-3.5 text-base sm:text-lg"
              >
                Book Now
              </Button>
            </div>
          )}
        </div>

        {/* Service Overview */}
        {content.overview.length > 0 && (
          <section className="space-y-4 max-w-3xl">
            {content.overview.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-[var(--textMuted)] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>
        )}

        {/* Key Benefits */}
        {content.benefits.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
              Key Benefits
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {content.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icons.checkCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[var(--text)]">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Recommended Vehicles */}
        {relevantFleet.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
              Recommended Vehicles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantFleet.map((vehicleSlug: string) => {
                const vehicle = fleet.find((v: any) => v.slug === vehicleSlug)
                return vehicle ? (
                  <a
                    key={vehicleSlug}
                    href={`/fleet/${vehicleSlug}`}
                    className="
                      p-5 rounded-lg
                      bg-[var(--surface)]
                      border border-[var(--border)]
                      hover:border-[var(--primary)]
                      hover:shadow-md
                      transition-all duration-200
                    "
                  >
                    <h3 className="font-semibold text-[var(--text)] mb-1">{vehicle.name}</h3>
                    {vehicle.seats && (
                      <p className="text-sm text-[var(--textMuted)]">{vehicle.seats} passengers</p>
                    )}
                  </a>
                ) : null
              })}
            </div>
          </section>
        )}

        {/* Booking Reassurance */}
        {content.reassurance.length > 0 && (
          <section className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {content.reassurance.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icons.checkCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-sm text-[var(--text)]">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Available Cities */}
        {relevantCities.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
              Available in These Cities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relevantCities.map((citySlug: string) => {
                const city = cities.find((c: any) => c.slug === citySlug)
                return city ? (
                  <a
                    key={citySlug}
                    href={`/cities/${citySlug}`}
                    className="
                      p-4 rounded-lg text-center
                      bg-[var(--surface)]
                      border border-[var(--border)]
                      hover:border-[var(--primary)]
                      transition
                    "
                  >
                    <span className="font-medium text-[var(--text)]">{city.name}</span>
                  </a>
                ) : null
              })}
            </div>
          </section>
        )}

        {/* Closing CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg py-10 px-6 sm:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Book?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book your chauffeur-driven ride online in under 60 seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              as="a"
              href="https://accounts.oregontowncar.com/"
              className="w-full sm:w-auto bg-white text-blue-700 hover:bg-white/90 !px-8 !py-3.5 text-base sm:text-lg !font-semibold shadow-md"
            >
              Book Now
            </Button>
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                text-white hover:text-white/90
                font-medium text-base sm:text-lg
                transition-colors
                px-4 py-2
              "
            >
              <Icons.messageCircle className="w-5 h-5" />
              <span>Get a Quote</span>
            </button>
          </div>
        </section>
      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
