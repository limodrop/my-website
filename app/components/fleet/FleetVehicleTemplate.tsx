"use client";

import { useState } from "react";
import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";
import { QuoteModal } from "@/app/components/QuoteModal";
import { SmartImage } from "@/app/components/SmartImage";

export interface FleetVehicleContent {
  name: string;
  subtitle: string;
  passengers: number;
  luggage: string;
  recommendedFor: string[];
  bestFor: string[];
  features: string[];
  typicalTrips: string[];
  image: string;
}

interface FleetVehicleTemplateProps {
  vehicle: any;
  content: FleetVehicleContent;
  relatedVehicles?: any[];
}

export function FleetVehicleTemplate({ vehicle, content, relatedVehicles = [] }: FleetVehicleTemplateProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-12">
        {/* Hero Section - Split Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)]">
              {content.name}
            </h1>
            
            <p className="text-lg sm:text-xl text-[var(--textMuted)]">
              {content.subtitle}
            </p>

            {/* Specs Row */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Icons.user className="w-5 h-5 text-[var(--primary)]" />
                <span className="text-sm sm:text-base text-[var(--text)] font-medium">
                  {content.passengers} passengers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.briefcase className="w-5 h-5 text-[var(--primary)]" />
                <span className="text-sm sm:text-base text-[var(--text)] font-medium">
                  {content.luggage}
                </span>
              </div>
            </div>

            {/* Recommended For Tags */}
            <div className="flex flex-wrap gap-2">
              {content.recommendedFor.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm font-medium bg-blue-50 text-[var(--primary)] rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                as="a"
                href="https://accounts.oregontowncar.com/"
                className="w-full sm:w-auto !px-8 !py-3.5 text-base sm:text-lg"
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
            <SmartImage
              src={content.image}
              alt={content.name}
              className="w-full h-auto object-contain max-h-[400px]"
            />
          </div>
        </section>

        {/* Best For Section */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Best For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.bestFor.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
              >
                <Icons.checkCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <span className="text-sm sm:text-base text-[var(--text)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features & Comfort */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Features & Comfort
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {content.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
              >
                <Icons.checkCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[var(--text)]">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Typical Trips */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Popular Use Cases
          </h2>
          <div className="space-y-3">
            {content.typicalTrips.map((trip, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
              >
                <Icons.arrow className="w-4 h-4 text-[var(--primary)] flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-[var(--text)]">{trip}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Note */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
            Transparent Pricing
          </h3>
          <ul className="space-y-2 text-sm sm:text-base text-[var(--textMuted)]">
            <li className="flex items-center gap-2">
              <Icons.checkCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
              <span>Fixed, upfront pricing</span>
            </li>
            <li className="flex items-center gap-2">
              <Icons.checkCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
              <span>No surge pricing</span>
            </li>
            <li className="flex items-center gap-2">
              <Icons.checkCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
              <span>Confirm instantly online or request a custom quote</span>
            </li>
          </ul>
        </section>

        {/* Related Vehicles */}
        {relatedVehicles.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
              Other Vehicles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedVehicles.map((relatedVehicle) => (
                <a
                  key={relatedVehicle.slug}
                  href={`/fleet/${relatedVehicle.slug}`}
                  className="
                    p-5 rounded-lg
                    bg-[var(--surface)]
                    border border-[var(--border)]
                    hover:border-[var(--primary)]
                    hover:shadow-md
                    transition-all duration-200
                  "
                >
                  <h3 className="font-semibold text-[var(--text)] mb-2">{relatedVehicle.name}</h3>
                  {relatedVehicle.seats && (
                    <p className="text-sm text-[var(--textMuted)] mb-3">
                      {relatedVehicle.seats} passengers
                    </p>
                  )}
                  <span className="text-sm text-[var(--primary)] font-medium hover:underline">
                    View Details →
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg py-10 px-6 sm:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Reserve the {content.name}?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book instantly online or request a custom quote for your specific needs.
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
