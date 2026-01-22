import Link from "next/link"
import { Button } from "@/app/ui/buttons/Button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-semibold text-[var(--text)] mb-4">404</h1>
      <p className="text-lg text-[var(--textMuted)] mb-8">
        The page you're looking for doesn't exist.
      </p>

      <Button variant="primary" as="a" href="/en">
        Go Home
      </Button>
    </div>
  )
}
