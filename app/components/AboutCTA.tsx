"use client";

import { Icons } from "@/app/components/Icons";

interface AboutCTAProps {
  locale: string;
}

export function AboutCTA({ locale }: AboutCTAProps) {
  const handleQuoteClick = () => {
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <div className="py-12 sm:py-16 px-6 sm:px-10 rounded-lg bg-[var(--primary)] text-white text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4">
        Ready to book your ride?
      </h2>
      <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
        Professional chauffeurs. Premium vehicles. Worldwide coverage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://accounts.oregontowncar.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center gap-2
            px-6 sm:px-8 py-3 sm:py-4
            bg-white text-[var(--primary)]
            rounded-lg font-semibold
            hover:bg-gray-100
            transition-all duration-200
            min-w-[200px] sm:min-w-[220px]
          "
        >
          Book Now
          <Icons.arrow className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <button
          onClick={handleQuoteClick}
          className="
            inline-flex items-center justify-center gap-2
            px-6 sm:px-8 py-3 sm:py-4
            bg-transparent text-white
            border-2 border-white
            rounded-lg font-semibold
            hover:bg-white hover:text-[var(--primary)]
            transition-all duration-200
            min-w-[200px] sm:min-w-[220px]
          "
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
}
