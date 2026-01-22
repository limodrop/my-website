import { Button } from "@/app/ui/buttons/Button";

export function PrimaryCTA() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--text)] text-white">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Ready for a Premium Experience?
        </h2>
        <p className="text-base sm:text-lg text-white/90 mb-8">
          Book your chauffeur-driven ride today or request a custom quote for your event.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            as="a"
            href="https://book.oregontowncar.com"
            className="w-full sm:w-auto bg-white text-[var(--text)] hover:bg-white/90 !px-8 !py-3 text-base sm:text-lg font-semibold"
          >
            Book a Ride
          </Button>
          <Button
            variant="ghost"
            as="a"
            href="/contact"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10 !px-8 !py-3 text-base sm:text-lg font-semibold"
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
