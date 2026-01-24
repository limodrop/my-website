'use client';

import Link from 'next/link';

export function WorldwideCTA() {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Book Your Global Transfer?
        </h2>
        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
          Contact us for premium chauffeur service anywhere in the world. Available 24/7 with professional drivers and luxury vehicles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openQuoteModal'));
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get a Quote
          </button>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
