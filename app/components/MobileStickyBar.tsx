"use client";

import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--surface)] border-t border-[var(--border)] shadow-lg">
      <div className="flex gap-2 p-3">
        <Button
          variant="primary"
          as="a"
          href="https://book.oregontowncar.com"
          className="flex-1 justify-center gap-2"
        >
          <span>Book Now</span>
        </Button>
        <Button
          variant="ghost"
          as="a"
          href="tel:5033537755"
          className="flex-1 justify-center gap-2"
        >
          <Icons.phone className="w-4 h-4" />
          <span>Call</span>
        </Button>
      </div>
    </div>
  );
}
