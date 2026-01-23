"use client";

import { useState } from "react";
import { Button } from "@/app/ui/buttons/Button";
import { Input } from "@/app/components/Input";
import { TextArea } from "@/app/components/TextArea";

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
      className="rounded-lg p-6 bg-[var(--surface)] border border-[var(--border)] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <Input label="Name" required />
      <Input label="Email" type="email" required />
      <Input label="Pickup City" required />
      <Input label="Dropoff City" required />
      <Input label="Date" type="date" required />
      <Input label="Time" type="time" required />
      
      <div className="md:col-span-2">
        <TextArea label="Notes" rows={3} />
      </div>

      <div className="md:col-span-2 flex justify-end mt-2">
        <Button variant="primary" type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Request a Quote"}
        </Button>
      </div>
    </form>
  );
}
