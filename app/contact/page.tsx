import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import BookingForm from "@/app/components/BookingForm";

export default function ContactPage() {
  return (
    <PageShell>
      <Heading level={1}>Contact Us</Heading>

      <p className="text-[var(--textMuted)] mb-6">
        Reach out for bookings, corporate accounts, or general inquiries.
      </p>

      <BookingForm locale="en" />
    </PageShell>
  );
}

