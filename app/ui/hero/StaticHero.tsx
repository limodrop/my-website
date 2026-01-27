"use client";

import { useState } from "react";
import { Button } from "@/app/ui/buttons/Button";
import { SmartImage } from "@/app/components/SmartImage";
import { Icons } from "@/app/components/Icons";
import { QuoteModal } from "@/app/components/QuoteModal";

export function StaticHero() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <section className="w-full mb-10 sm:mb-[var(--space-section)]">
        {/* Framed Hero Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden max-w-7xl mx-auto">
          
          {/* Mobile: Stacked Layout | Desktop: 2-Column Grid */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-0">
            
            {/* Left Column - Text Content */}
            <div className="px-6 sm:px-10 lg:px-12 pt-8 sm:pt-12 pb-6 sm:pb-8 lg:py-12 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[var(--text)] mb-2 sm:mb-3 leading-tight">
                Luxury Chauffeur Service<br />
                in Portland, Oregon
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-[var(--textMuted)] leading-relaxed mb-6 lg:mb-8">
                Premium airport transfers, corporate travel, and private chauffeur service
              </p>

              // ...existing code...

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-xs sm:text-sm text-[var(--textMuted)] mb-4">
                <div className="flex items-center gap-1.5">
                  <Icons.checkCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--primary)]" />
                  <span>Instant confirmation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Icons.checkCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--primary)]" />
                  <span>Fixed pricing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Icons.checkCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--primary)]" />
                  <span>Flight tracking</span>
                </div>
              </div>

              {/* Service Area Line */}
              <p className="text-sm text-[var(--textMuted)]">
                Serving Portland, Oregon • PDX • Willamette Valley • Worldwide
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full lg:h-full">
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:h-full overflow-hidden">
                <SmartImage
                  src="/images/hero/chauffeur-service.jpg"
                  alt="Luxury chauffeur vehicle in Portland, Oregon"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover lg:object-[center_20%]"
                  placeholder="empty"
                />
                {/* Subtle dark overlay for image contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
