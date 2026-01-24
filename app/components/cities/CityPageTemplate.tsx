"use client";

import { useState } from "react";
import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";
import { QuoteModal } from "@/app/components/QuoteModal";

export interface CityContent {
  name: string;
  state?: string; // "Oregon" or "WA"
  subtitle: string;
  overview: string[];
  neighborhoods: string[];
  popularRoutes: string[];
  serviceHighlight?: string;
}

interface CityPageTemplateProps {
  city: any;
  services: any[];
  relevantServices: string[];
  content: CityContent;
}

export function CityPageTemplate({ city, services, relevantServices, content }: CityPageTemplateProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const stateLabel = content.state || "Oregon";

  return (
    <>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)]">
            Chauffeur Service in {content.name}, {stateLabel}
          </h1>
          
          <p className="text-lg sm:text-xl text-[var(--textMuted)] max-w-3xl">
            {content.subtitle}
          </p>

          {/* CTAs */}
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

          {/* Quick Benefits */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
            <div className="flex items-center gap-2">
              <Icons.checkCircle className="w-5 h-5 text-[var(--primary)]" />
              <span className="text-sm sm:text-base text-[var(--text)] font-medium">Fixed pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.checkCircle className="w-5 h-5 text-[var(--primary)]" />
              <span className="text-sm sm:text-base text-[var(--text)] font-medium">Professional chauffeurs</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.checkCircle className="w-5 h-5 text-[var(--primary)]" />
              <span className="text-sm sm:text-base text-[var(--text)] font-medium">On-time guarantee</span>
            </div>
          </div>
        </section>

        {/* Services Available */}
        {relevantServices.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
              Services Available in {content.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relevantServices.map((serviceSlug) => {
                const service = services.find((s) => s.slug === serviceSlug)
                return service ? (
                  <a
                    key={serviceSlug}
                    href={`/services/${serviceSlug}`}
                    className="
                      p-5 rounded-lg
                      bg-[var(--surface)]
                      border border-[var(--border)]
                      hover:border-[var(--primary)]
                      hover:shadow-md
                      transition-all duration-200
                    "
                  >
                    <h3 className="font-semibold text-[var(--text)] mb-1">{service.name}</h3>
                    <p className="text-sm text-[var(--textMuted)]">{service.description}</p>
                  </a>
                ) : null
              })}
            </div>
          </section>
        )}

        {/* City Overview Content */}
        <section className="space-y-4 max-w-3xl">
          {content.overview.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg text-[var(--textMuted)] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Popular Routes */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Popular Routes from {content.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {content.popularRoutes.map((route, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
              >
                <Icons.arrow className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                <span className="text-sm sm:text-base text-[var(--text)]">{route}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Local Highlights / Neighborhoods */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Areas We Serve in {content.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {content.neighborhoods.map((neighborhood, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
              >
                <Icons.location className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                <span className="text-sm text-[var(--text)]">{neighborhood}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg py-10 px-6 sm:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Book in {content.name}?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Experience premium chauffeur service with instant booking and professional drivers.
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
