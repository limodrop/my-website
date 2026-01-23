"use client";

import { useEffect, useRef } from "react";
import { Icons } from "@/app/components/Icons";
import { QuoteForm } from "@/app/components/QuoteForm";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: string;
}

export function QuoteModal({ isOpen, onClose, locale }: QuoteModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const handleSuccess = () => {
    // Show success message and close modal after brief delay
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4"
      style={{ zIndex: 9999 }}
    >
      <div 
        className="bg-[var(--surface)] w-full sm:max-w-3xl sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[var(--surface)] border-b border-[var(--border)] p-4 sm:p-6 flex items-center justify-between z-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text)]">
            Get a Custom Quote
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[var(--background)] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <Icons.x className="w-5 h-5 text-[var(--textMuted)]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <p className="text-sm sm:text-base text-[var(--textMuted)] mb-6">
            Fill out the form below and we'll get back to you with a custom quote within a few hours.
          </p>

          <QuoteForm locale={locale} onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
}
