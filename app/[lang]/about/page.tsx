import { getDictionary } from "@/app/i18n";
import { Locale } from "@/lib/i18n/types";
import BookingCTA from "@/app/components/BookingCTA";

export default async function AboutPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);

  return (
    <>
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-4">
        About Oregon Town Car
      </h1>

      <p className="text-lg text-[var(--textMuted)] mb-8">
        Premium chauffeur service built on reliability, professionalism, and global reach.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="
            p-6 rounded-lg
            bg-[var(--surface)]
            border border-[var(--border)]
            shadow-sm
          "
        >
          <h3 className="text-2xl font-semibold text-[var(--text)] mb-3">Our Mission</h3>
          <p className="text-[var(--textMuted)] leading-relaxed">
            To deliver world-class transportation with a focus on safety, comfort, and
            exceptional service — whether you're traveling across town or across the world.
          </p>
        </div>

        <div
          className="
            p-6 rounded-lg
            bg-[var(--surface)]
            border border-[var(--border)]
            shadow-sm
          "
        >
          <h3 className="text-2xl font-semibold text-[var(--text)] mb-3">Our Network</h3>
          <p className="text-[var(--textMuted)] leading-relaxed">
            We operate in 50 U.S. states and 13 countries, partnering with vetted
            professional chauffeurs to ensure consistent quality everywhere you travel.
          </p>
        </div>
      </div>

      <BookingCTA locale={locale} />
    </>
  );
}
