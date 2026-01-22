"use client";

import { useState } from "react";
import { Button } from "@/app/ui/buttons/Button";

export function BookingForm({ locale }: { locale: string }) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Wire to your booking endpoint / external provider
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg p-6 bg-white border border-[#D1D1D1] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div className="flex flex-col gap-1">
        <label className="text-sm text-[#5A5A5A]">Name</label>
        <input
          className="rounded-md px-3 py-2 bg-[#F3F3F3] border border-[#D1D1D1] text-[#1B1B1B] outline-none focus:border-[#0067B8]"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-[#5A5A5A]">Email</label>
        <input
          type="email"
          className="rounded-md px-3 py-2 bg-[#F3F3F3] border border-[#D1D1D1] text-[#1B1B1B] outline-none focus:border-[#0067B8]"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-[#5A5A5A]">Pickup City</label>
        <input
          className="rounded-md px-3 py-2 bg-[#F3F3F3] border border-[#D1D1D1] text-[#1B1B1B] outline-none focus:border-[#0067B8]"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-[#5A5A5A]">Dropoff City</label>
        <input
          className="rounded-md px-3 py-2 bg-[#F3F3F3] border border-[#D1D1D1] text-[#1B1B1B] outline-none focus:border-[#0067B8]"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-[#5A5A5A]">Date</label>
        <input
          type="date"
          className="rounded-md px-3 py-2 bg-[#F3F3F3] border border-[#D1D1D1] text-[#1B1B1B] outline-none focus:border-[#0067B8]"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-[#5A5A5A]">Time</label>
        <input
          type="time"
          className="rounded-md px-3 py-2 bg-[#F3F3F3] border border-[#D1D1D1] text-[#1B1B1B] outline-none focus:border-[#0067B8]"
          required
        />
      </div>

      <div className="flex flex-col gap-1 md:col-span-2">
        <label className="text-sm text-[#5A5A5A]">Notes</label>
        <textarea
          rows={3}
          className="rounded-md px-3 py-2 bg-[#F3F3F3] border border-[#D1D1D1] text-[#1B1B1B] outline-none focus:border-[#0067B8]"
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
