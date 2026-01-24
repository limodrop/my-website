"use client";

import { useState, useEffect } from "react";
import { QuoteModal } from "./QuoteModal";

interface GlobalQuoteModalProps {
  locale: string;
}

export function GlobalQuoteModal({ locale }: GlobalQuoteModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    // Listen for the custom event from QuoteButton components
    window.addEventListener('openQuoteModal', handleOpenModal);

    return () => {
      window.removeEventListener('openQuoteModal', handleOpenModal);
    };
  }, []);

  return (
    <QuoteModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      locale={locale}
    />
  );
}
