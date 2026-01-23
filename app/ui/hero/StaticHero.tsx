import { Button } from "@/app/ui/buttons/Button";
import { SmartImage } from "@/app/components/SmartImage";
import { Icons } from "@/app/components/Icons";

export function StaticHero() {
  return (
    <section className="relative w-full mb-10 sm:mb-[var(--space-section)] overflow-hidden rounded-lg">
      <SmartImage
        src="/images/hero/chauffeur-service.jpg"
        className="w-full max-w-full h-[500px] sm:h-[550px] lg:h-[600px] object-cover"
        alt="Luxury chauffeur vehicle in Portland, Oregon"
      />

      {/* Dark overlay - stronger on mobile for premium clarity */}
      <div className="absolute inset-0 bg-black/80 sm:bg-black/70 lg:bg-black/65"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto">
          {/* Main Headline - EXACT per specification */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Luxury Chauffeur Service
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white/95 mb-5 sm:mb-6">
            Portland, Oregon
          </h2>

          {/* Subheadline - concise and clear */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl">
            Premium airport transfers, corporate travel, and private chauffeur service
          </p>

          {/* CTAs - mobile-first, clean hierarchy */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-md">
            <Button
              variant="primary"
              as="a"
              href="https://book.oregontowncar.com"
              className="w-full sm:w-auto !px-10 !py-4 text-lg font-semibold shadow-xl"
            >
              Book Now
            </Button>
            <a
              href="/contact"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                text-white hover:text-white/90
                font-medium text-base
                transition-all
                px-6 py-2
                underline underline-offset-4 decoration-2
              "
            >
              <span>Get a Quote →</span>
            </a>
          </div>

          {/* Support bullets - max 3, clean spacing */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 text-sm sm:text-base text-white/85 max-w-2xl">
            <div className="flex items-center gap-2">
              <Icons.checkCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>Instant confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.checkCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>Fixed pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.checkCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>Flight tracking included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
