"use client";

import { useState } from "react";
import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";
import { QuoteModal } from "@/app/components/QuoteModal";

export function PrimaryCTA() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg py-10 px-6 sm:px-10 text-center">
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
