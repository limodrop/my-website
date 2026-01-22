"use client";

import { useState } from "react";
import { Modal } from "@/app/components/Modal";
import { Toast } from "@/app/components/Toast";
import { SmartImage } from "@/app/components/SmartImage";
import { Button } from "@/app/ui/buttons/Button";
import { Input } from "@/app/components/Input";

export function UIShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"info" | "success" | "error">("info");

  return (
    <div className="container py-12 space-y-12">
      {/* Modal Demo */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Modal System</h2>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>

        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <h3 className="text-xl font-semibold text-[var(--text)] mb-4">Example Modal</h3>
          <p className="text-[var(--textMuted)] mb-6">
            This is a premium, accessible modal with escape-to-close and click-outside-to-close.
          </p>
          <div className="flex gap-3 justify-end">
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Confirm
            </Button>
          </div>
        </Modal>
      </section>

      {/* Toast Demo */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Toast Notifications</h2>
        <div className="flex gap-3 flex-wrap">
          <Button
            variant="primary"
            onClick={() => {
              setToastType("info");
              setShowToast(true);
            }}
          >
            Show Info Toast
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setToastType("success");
              setShowToast(true);
            }}
          >
            Show Success Toast
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setToastType("error");
              setShowToast(true);
            }}
          >
            Show Error Toast
          </Button>
        </div>

        {showToast && (
          <Toast
            message={
              toastType === "success"
                ? "Booking confirmed successfully!"
                : toastType === "error"
                ? "Something went wrong. Please try again."
                : "Processing your request..."
            }
            type={toastType}
            onClose={() => setShowToast(false)}
          />
        )}
      </section>

      {/* Smart Image Demo */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Smart Image Loading</h2>
        <SmartImage
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800"
          alt="Luxury vehicle"
          className="rounded-lg h-64"
        />
      </section>
    </div>
  );
}
