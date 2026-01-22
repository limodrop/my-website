import { getDictionary } from "@/app/i18n";
import { Locale } from "@/lib/i18n/types";
import { PageShell } from "@/app/ui/layout/PageShell";
import BookingForm from "@/app/components/BookingForm";

export default async function ContactPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);

  return (
    <PageShell>
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-4">
        Contact Us
      </h1>

      <p className="text-lg text-[var(--textMuted)] mb-8">
        Reach out for bookings, corporate accounts, or general inquiries.
      </p>

      <div className="max-w-2xl">
        <BookingForm locale={locale} />
      </div>
    </PageShell>
  );
}
