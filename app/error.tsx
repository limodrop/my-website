"use client";

import { Button } from "@/app/ui/buttons/Button";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl font-semibold text-[var(--text)] mb-4">
        Something went wrong
      </h1>

      <p className="text-[var(--textMuted)] mb-6 max-w-md">
        An unexpected error occurred. Don't worry, you can try again or return to the homepage.
      </p>

      {process.env.NODE_ENV === "development" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg max-w-2xl text-left">
          <p className="text-sm font-mono text-red-800">{error.message}</p>
        </div>
      )}

      <div className="flex gap-3">
        <Button variant="secondary" as="a" href="/">
          Go Home
        </Button>
        <Button variant="primary" onClick={reset}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
