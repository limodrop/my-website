import Link from "next/link";
import Button from "@/app/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-semibold text-[var(--text)] mb-4">404</h1>
      <p className="text-[var(--textMuted)] mb-8">
        The page you're looking for doesn't exist.
      </p>

      <Link href="/en">
        <Button variant="primary">Go Home</Button>
      </Link>
    </div>
  );
}
