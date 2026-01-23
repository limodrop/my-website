import { getDictionary } from "@/app/i18n";
import { Locale } from "@/lib/i18n/types";
import { QuoteForm } from "@/app/components/QuoteForm";
import { Button } from "@/app/ui/buttons/Button";

export default async function ContactPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--text)] mb-3 sm:mb-4">
        Contact Us
      </h1>

      <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)] mb-3">
        Reach out for bookings, corporate accounts, or general inquiries.
      </p>

      {/* Booking Guidance */}
      <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm sm:text-base text-[var(--text)] font-medium">
          <strong>For the fastest service, please use our online booking system.</strong><br />
          <span className="text-[var(--textMuted)] font-normal">
            This page is best for custom requests, corporate accounts, and special arrangements.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
          <h3 className="text-xl font-semibold text-[var(--text)] mb-4">Office Location</h3>
          <p className="text-[var(--textMuted)]">
            4260 SW 110th Ave<br />
            Beaverton, OR 97005
          </p>
        </div>

        <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
          <h3 className="text-xl font-semibold text-[var(--text)] mb-4">Contact Information</h3>
          <p className="text-[var(--textMuted)] mb-2">
            <strong>Email:</strong> hello@oregontowncar.com
          </p>
          <p className="text-[var(--textMuted)]">
            <strong>Concierge Support:</strong> +1 (503) 353-7755
          </p>
        </div>
      </div>

      {/* Instant Booking CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Book Instantly Online
        </h2>
        <p className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
          Most rides can be booked online in under 60 seconds with instant confirmation.
        </p>
        
        <Button
          variant="primary"
          as="a"
          href="https://accounts.oregontowncar.com/"
          className="bg-white text-blue-700 hover:bg-white/90 !px-8 !py-3.5 text-base sm:text-lg !font-semibold shadow-md mb-3"
        >
          Book Now
        </Button>
        
        <p className="text-sm text-white/80">
          For custom requests, use the form below.
        </p>
      </div>

      {/* Qualification List */}
      <div className="max-w-2xl mb-8">
        <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
          Use this page if you need:
        </h3>
        <ul className="space-y-2 text-[var(--textMuted)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--primary)] mt-1">•</span>
            <span>Corporate or recurring transportation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--primary)] mt-1">•</span>
            <span>VIP / Meet & Greet service</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--primary)] mt-1">•</span>
            <span>Wine tours or custom itineraries</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--primary)] mt-1">•</span>
            <span>Special events or multi-vehicle bookings</span>
          </li>
        </ul>
      </div>

      {/* Custom Quote Form */}
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Custom Quote & Special Requests</h2>
        <QuoteForm locale={locale} />
      </div>
    </>
  );
}
