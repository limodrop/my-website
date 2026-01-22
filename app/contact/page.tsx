import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import BookingForm from "@/app/components/BookingForm";

export async function generateMetadata() {
  return {
    title: "Contact Us — Oregon Town Car",
    description:
      "Get in touch with Oregon Town Car for premium chauffeur service. Book your ride today.",
    alternates: {
      canonical: `https://oregontowncar.com/contact`,
    },
  };
}

export default function ContactPage() {
  return (
    <PageShell>
      <Heading level={1}>Contact Us</Heading>
      <Text muted>
        Ready to book your ride? Fill out the form below or reach us directly.
      </Text>

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="
            rounded-lg p-6
            bg-[var(--surface)]
            border border-[var(--border)]
          ">
            <h3 className="font-semibold text-[var(--text)] mb-2">Email</h3>
            <p className="text-[var(--textMuted)]">info@oregontowncar.com</p>
          </div>
          
          <div className="
            rounded-lg p-6
            bg-[var(--surface)]
            border border-[var(--border)]
          ">
            <h3 className="font-semibold text-[var(--text)] mb-2">Phone</h3>
            <p className="text-[var(--textMuted)]">(503) 123-4567</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Book a Ride</h2>
          <BookingForm />
        </div>
      </div>
    </PageShell>
  );
}
