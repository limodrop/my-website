import { Button } from "@/app/ui/buttons/Button";
import { SmartImage } from "@/app/components/SmartImage";
import { Icons } from "@/app/components/Icons";

export function StaticHero() {
  return (
    <section className="w-full mb-10 sm:mb-[var(--space-section)]">
      {/* Framed Hero Container */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden max-w-6xl mx-auto">
        
        {/* Top Section - Text Only (No Image) */}
        <div className="px-6 sm:px-10 lg:px-12 pt-8 sm:pt-12 pb-6 sm:pb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-2 sm:mb-3 leading-tight max-w-3xl">
            Luxury Chauffeur Service<br />
            in Portland, Oregon
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-[var(--textMuted)] leading-relaxed max-w-2xl">
            Premium airport transfers, corporate travel, and private chauffeur service
          </p>
        </div>

        {/* Middle Section - Image Only */}
        <div className="relative w-full">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
            <SmartImage
              src="/images/hero/chauffeur-service.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Luxury chauffeur vehicle in Portland, Oregon"
            />
            {/* Subtle dark overlay for image contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
          </div>
        </div>

        {/* Bottom Section - CTA + Trust */}
        <div className="px-6 sm:px-10 lg:px-12 py-8 sm:py-10">
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button
              variant="primary"
              as="a"
              href="https://book.oregontowncar.com"
              className="w-full sm:w-auto !px-10 !py-4 text-base sm:text-lg font-semibold"
            >
              Book Now
            </Button>
            <a
              href="/contact"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                text-[var(--primary)] hover:text-[var(--primaryHover)]
                font-medium text-base sm:text-lg
                transition-colors
                px-4 py-2
              "
            >
              <span>Get a Quote</span>
              <Icons.arrow className="w-4 h-4" />
            </a>
          </div>

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
            Serving Portland, Oregon • PDX • Willamette Valley
          </p>
        </div>
      </div>
    </section>
  );
}
