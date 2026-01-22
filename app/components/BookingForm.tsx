import Button from "@/app/components/Button";

type BookingFormProps = {
  locale?: string;
};

export default function BookingForm({ locale = "en" }: BookingFormProps) {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--text)] mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="
              w-full px-4 py-2 rounded
              bg-[var(--surface)]
              border border-[var(--border)]
              text-[var(--text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
            "
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--text)] mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="
              w-full px-4 py-2 rounded
              bg-[var(--surface)]
              border border-[var(--border)]
              text-[var(--text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
            "
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[var(--text)] mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="
              w-full px-4 py-2 rounded
              bg-[var(--surface)]
              border border-[var(--border)]
              text-[var(--text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
            "
            required
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-[var(--text)] mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="
              w-full px-4 py-2 rounded
              bg-[var(--surface)]
              border border-[var(--border)]
              text-[var(--text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
            "
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="pickup"
          className="block text-sm font-medium text-[var(--text)] mb-2"
        >
          Pickup Location
        </label>
        <input
          type="text"
          id="pickup"
          name="pickup"
          className="
            w-full px-4 py-2 rounded
            bg-[var(--surface)]
            border border-[var(--border)]
            text-[var(--text)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
          "
          required
        />
      </div>

      <div>
        <label
          htmlFor="dropoff"
          className="block text-sm font-medium text-[var(--text)] mb-2"
        >
          Drop-off Location
        </label>
        <input
          type="text"
          id="dropoff"
          name="dropoff"
          className="
            w-full px-4 py-2 rounded
            bg-[var(--surface)]
            border border-[var(--border)]
            text-[var(--text)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
          "
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--text)] mb-2"
        >
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="
            w-full px-4 py-2 rounded
            bg-[var(--surface)]
            border border-[var(--border)]
            text-[var(--text)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
          "
        />
      </div>

      <Button variant="primary" as="button">
        Submit Booking Request
      </Button>
    </form>
  );
}
