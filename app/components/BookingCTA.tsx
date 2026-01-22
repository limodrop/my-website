import Link from "next/link";

export default function BookingCTA({ locale }: { locale: string }) {
  return (
    <div
      className="
        w-full py-6 px-6 mt-16 rounded-lg
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-sm text-center
      "
    >
      <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
        Ready to book your ride?
      </h3>

      <p className="text-[var(--textMuted)] mb-4">
        Professional chauffeurs. Premium vehicles. Worldwide coverage.
      </p>

      <Link
        href={`/${locale}/contact`}
        className="
          inline-block px-6 py-3 rounded-lg
          bg-[var(--primary)] text-white
          hover:opacity-90 transition font-semibold
        "
      >
        Book Now
      </Link>
    </div>
  );
}
