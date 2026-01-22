import { Button } from "@/app/ui/buttons/Button";
import { SmartImage } from "@/app/components/SmartImage";
import { Icons } from "@/app/components/Icons";

export function StaticHero() {
  return (
    <section className="relative w-full mb-10 sm:mb-[var(--space-section)] overflow-hidden rounded-lg">
      <SmartImage
        src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&q=80"
        className="w-full max-w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
        alt="Luxury chauffeur service in Portland"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center">
        <div className="w-full px-4 sm:px-6">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Luxury Chauffeur Service in Portland & Oregon
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 max-w-2xl">
            Airport transfers, corporate travel, wine tours & special events
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <Button
              variant="primary"
              as="a"
              href="https://book.oregontowncar.com"
              className="w-full sm:w-auto !px-8 !py-3 text-base sm:text-lg"
            >
              Book Now
            </Button>
            <Button
              variant="ghost"
              as="a"
              href="/contact"
              className="w-full sm:w-auto border-white text-white hover:bg-white/10 !px-8 !py-3 text-base sm:text-lg"
            >
              Get a Quote
            </Button>
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
