"use client";

import { useState } from "react";
import Button from "@/app/components/Button";

export default function BookingForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // wire to your booking endpoint / external provider
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-lg p-6
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-sm
        grid grid-cols-1 md:grid-cols-2 gap-4
      "
    >
      <div className="flex flex-col gap-1">
        <label className="text-sm text-[var(--textMuted)]">Name</label>
        <input
          className="
            rounded-md px-3 py-2
            bg-[var(--background)]
            border border-[var(--border)]
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-[var(--textMuted)]">Email</label>
        <input
          type="email"
          className="
            rounded-md px-3 py-2
            bg-[var(--background)]
            border border-[var(--border)]
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-[var(--textMuted)]">Pickup City</label>
        <input
          className="
            rounded-md px-3 py-2
            bg-[var(--background)]
            border border-[var(--border)]
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-[var(--textMuted)]">Dropoff City</label>
        <input
          className="
            rounded-md px-3 py-2
            bg-[var(--background)]
            border border-[var(--border)]
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-[var(--textMuted)]">Date</label>
        <input
          type="date"
          className="
            rounded-md px-3 py-2
            bg-[var(--background)]
            border border-[var(--border)]
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-[var(--textMuted)]">Time</label>
        <input
          type="time"
          className="
            rounded-md px-3 py-2
            bg-[var(--background)]
            border border-[var(--border)]
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
          required
        />
      </div>

      <div className="flex flex-col gap-1 md:col-span-2">
        <label className="text-sm text-[var(--textMuted)]">Notes</label>
        <textarea
          rows={3}
          className="
            rounded-md px-3 py-2
            bg-[var(--background)]
            border border-[var(--border)]
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
        />
      </div>

      <div className="md:col-span-2 flex justify-end mt-2">
        <Button variant="primary" type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Request Booking"}
        </Button>
      </div>
    </form>
  );
}
