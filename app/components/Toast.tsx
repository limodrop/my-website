"use client";

import { useEffect, useState } from "react";

type ToastType = "info" | "success" | "error";

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

export function Toast({ message, type = "info", duration = 3000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(id);
  }, [duration, onClose]);

  if (!visible) return null;

  const colors: Record<ToastType, string> = {
    info: "bg-[var(--surface)] border border-[var(--border)] text-[var(--text)]",
    success: "bg-green-600 text-white border-green-600",
    error: "bg-red-600 text-white border-red-600",
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 px-4 py-3 rounded-md shadow-lg
        ${colors[type]}
        slide-up
        z-50
      `}
    >
      {message}
    </div>
  );
}
