import { Button } from "@/app/ui/buttons/Button";
import { SmartImage } from "@/app/components/SmartImage";
import { Icons } from "@/app/components/Icons";

export function StaticHero() {
  return (
    <section className="relative w-full mb-10 sm:mb-[var(--space-section)] overflow-hidden rounded-lg">
      <SmartImage
        src="/images/hero/chauffeur-service.jpg"
        className="w-full max-w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
        alt="Professional chauffeur opening luxury car door for client in Portland"
      />

      {/* Left-to-right gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-4 sm:px-6">
          {/* Main Headline with intentional line break */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Luxury Chauffeur Service<br />
            in Portland & Oregon
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 max-w-2xl">
            Airport transfers, corporate travel, wine tours & special events
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <div className="flex flex-col gap-1.5">
              <Button
                variant="primary"
                as="a"
                href="https://book.oregontowncar.com"
                className="w-full sm:w-auto !px-8 !py-3.5 text-base sm:text-lg"
              >
                Book Now
              </Button>
              <span className="text-white/70 text-xs text-center sm:text-left">Book online in under 60 seconds</span>
            </div>
            <a
              href="/contact"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                text-white/90 hover:text-white
                font-medium text-base sm:text-lg
                transition-colors
                px-8 py-3.5
              "
            >
              <span>Get a Quote</span>
              <Icons.arrow className="w-4 h-4" />
            </a>
          </div>

          {/* Booking Reassurance */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/80 mb-3">
            <div className="flex items-center gap-1.5">
              <Icons.checkCircle className="w-3.5 h-3.5" />
              <span>Instant confirmation</span>
            </div>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-1.5">
              <Icons.checkCircle className="w-3.5 h-3.5" />
              <span>Fixed pricing</span>
            </div>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-1.5">
              <Icons.checkCircle className="w-3.5 h-3.5" />
              <span>Flight tracking included</span>
            </div>
          </div>

          {/* Support Line */}
          <p className="text-sm sm:text-base text-white/80 mb-3">
            Serving Portland • PDX • Willamette Valley
          </p>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Icons.shield className="w-4 h-4" />
              <span>Licensed & Insured</span>
            </div>
            <span className="text-white/50">•</span>
            <div className="flex items-center gap-2">
              <Icons.user className="w-4 h-4" />
              <span>Professional Chauffeurs</span>
            </div>
            <span className="text-white/50">•</span>
            <div className="flex items-center gap-2">
              <Icons.clock className="w-4 h-4" />
              <span>On‑Time Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
