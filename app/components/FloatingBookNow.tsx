"use client";

import { Button } from "@/app/ui/buttons/Button";

export default function FloatingBookNow({ locale }: { locale: string }) {
  return (
    <div className="fixed bottom-4 right-4 md:hidden z-50">
      <Button
        variant="primary"
        as="a"
        href={`/${locale}/contact`}
        className="shadow-lg"
      >
        Book Now
      </Button>
    </div>
  );
}
