"use client";

import { Button } from "@/app/ui/buttons/Button";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  return (
    <div className="flex items-center justify-center gap-3 mt-10">
      <Button
        variant="secondary"
        disabled={!canGoPrev}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </Button>

      <span className="text-[var(--textMuted)] font-medium">
        Page {page} of {totalPages}
      </span>

      <Button
        variant="secondary"
        disabled={!canGoNext}
        onClick={() => onChange(page + 1)}
      >
        Next
      </Button>
    </div>
  );
}
