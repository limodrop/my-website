import { Button } from "@/app/ui/buttons/Button";
import { theme } from "@/app/ui/theme";

export default function BookingBanner({ locale }: { locale: string }) {
  return (
    <div
      className="w-full py-4 px-6 text-center"
      style={{
        backgroundColor: "#E6F0FA",
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <span className="mr-4 font-medium" style={{ color: theme.colors.text }}>
        Need a ride? Book your chauffeur now.
      </span>

      <Button
        variant="primary"
        as="a"
        href={`/${locale}/contact`}
      >
        Book Now
      </Button>
    </div>
  );
}
