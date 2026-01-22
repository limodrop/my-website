"use client";

import { useEffect, ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    
    // Lock body scroll
    document.body.style.overflow = "hidden";
    
    // Escape key handler
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-sm p-4
      "
      onClick={onClose}
    >
      <div
        className="
          p-4 sm:p-6 rounded-lg shadow-lg
          bg-[var(--surface)]
          border border-[var(--border)]
          max-w-lg w-full
          max-h-[90vh] overflow-y-auto
          fade-in
        "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
