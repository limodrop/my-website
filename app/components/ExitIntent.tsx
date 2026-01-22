"use client";

import { useEffect, useState } from "react";
import { Button } from "@/app/ui/buttons/Button";
import { theme } from "@/app/ui/theme";

export default function ExitIntent({ locale }: { locale: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY < 10) setShow(true);
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
      onClick={() => setShow(false)}
    >
      <div
        className="p-8 rounded-lg text-center"
        style={{
          backgroundColor: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`,
          boxShadow: theme.shadow.card,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4">
          Leaving already?
        </h3>

        <p className="mb-6" style={{ color: theme.colors.textMuted }}>
          Book your chauffeur now and travel in comfort.
        </p>

        <Button variant="primary" as="a" href={`/${locale}/contact`}>
          Book Now
        </Button>
      </div>
    </div>
  );
}
