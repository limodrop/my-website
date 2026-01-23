import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";

export function PrimaryCTA() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 rounded-2xl sm:rounded-3xl shadow-2xl py-14 sm:py-20 px-6 sm:px-12 text-center relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6">
              Ready to Book Your Ride?
            </h2>
            <p className="text-lg sm:text-xl text-white/95 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Instant online booking with professional chauffeurs and luxury vehicles — confirmed in under 60 seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button
                variant="primary"
                as="a"
                href="https://book.oregontowncar.com"
                className="w-full sm:w-auto sm:min-w-[280px] bg-white text-blue-700 hover:bg-white/95 !px-12 !py-5 text-lg sm:text-xl !font-bold shadow-xl hover:shadow-2xl transition-all !rounded-xl"
              >
                Book Now
              </Button>
              <a
                href="/contact"
                className="
                  w-full sm:w-auto sm:min-w-[200px]
                  inline-flex items-center justify-center gap-2
                  border-2 border-white/40 hover:border-white/60
                  rounded-xl
                  text-white hover:bg-white/10
                  font-semibold text-base sm:text-lg
                  transition-all
                  px-8 py-4
                "
              >
                <Icons.messageCircle className="w-5 h-5" />
                <span>Get a Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
