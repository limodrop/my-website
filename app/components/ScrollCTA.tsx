"use client";

import { useEffect, useState } from "react";
import { Button } from "@/app/ui/buttons/Button";

export default function ScrollCTA({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 600) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <Button variant="primary" as="a" href={`/${locale}/contact`}>
        Book Your Ride
      </Button>
    </div>
  );
}
