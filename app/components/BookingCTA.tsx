import Button from "@/app/components/Button";

type BookingCTAProps = {
  locale?: string;
};

export default function BookingCTA({ locale = "en" }: BookingCTAProps) {
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

      <Button variant="primary" as="a" href={`/contact`}>
        Book Now
      </Button>
    </div>
  );
}
