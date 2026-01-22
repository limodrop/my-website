import { getDictionary } from "@/app/i18n";
import { Locale } from "@/lib/i18n/types";
import { BookingForm } from "@/app/components/BookingForm";

export default async function ContactPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--text)] mb-3 sm:mb-4">
        Contact Us
      </h1>

      <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)] mb-6 sm:mb-8">
        Reach out for bookings, corporate accounts, or general inquiries.
      </p>

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
            <strong>Phone:</strong> +1 (503) 353-7755
          </p>
        </div>
      </div>

      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Request a Quote</h2>
        <BookingForm locale={locale} />
      </div>
    </>
  );
}
