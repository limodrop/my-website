import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";
import { COMPANY_PHONE_FORMATTED } from "@/lib/config/constants";

export function PrimaryCTA() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg py-10 px-6 sm:px-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Ready to Book or Need Help?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-2 max-w-2xl mx-auto">
              Book your chauffeur-driven ride or speak with our concierge for a custom request.
            </p>
            <p className="text-sm text-white/70 mb-8">Instant online booking — fastest way to reserve your ride</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                as="a"
                href="https://book.oregontowncar.com"
                className="w-full sm:w-auto bg-[#1f5188] text-[#F2F6FB] hover:bg-[#17406D] hover:text-white focus:ring-2 focus:ring-[#8FB6E3] !px-8 !py-3.5 !rounded-[12px] text-base sm:text-lg !font-semibold shadow-md tracking-[0.2px]"
              >
                Book Now
              </Button>
              <a
                href="/contact"
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
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-white/90 text-sm">
              <Icons.phone className="w-4 h-4" />
              <span>Need help?</span>
              <a
                href={`tel:${COMPANY_PHONE_FORMATTED.replace(/[^0-9]/g, '')}`}
                className="font-semibold hover:text-white transition-colors"
              >
                Call Concierge {COMPANY_PHONE_FORMATTED}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
