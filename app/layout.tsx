import "./globals.css"
import { ReactNode } from "react"
import Link from "next/link"

export const metadata = {
  title: "Oregon Town Car",
  description: "Premium Chauffeur Service"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="p-4 bg-[var(--surface)] border-b border-[var(--border)]">
          <nav className="flex gap-6 max-w-7xl mx-auto">
            <Link href="/" className="text-[var(--text)] hover:text-[var(--primary)]">Home</Link>
            <Link href="/services" className="text-[var(--text)] hover:text-[var(--primary)]">Services</Link>
            <Link href="/cities" className="text-[var(--text)] hover:text-[var(--primary)]">Cities</Link>
            <Link href="/fleet" className="text-[var(--text)] hover:text-[var(--primary)]">Fleet</Link>
            <Link href="/worldwide" className="text-[var(--text)] hover:text-[var(--primary)]">Worldwide</Link>
            <Link href="/countries" className="text-[var(--text)] hover:text-[var(--primary)]">Countries</Link>
            <Link href="/contact" className="text-[var(--text)] hover:text-[var(--primary)]">Contact</Link>
          </nav>
        </header>

        <main className="p-6">{children}</main>

        <footer className="p-6 text-center text-sm text-[var(--textMuted)] border-t border-[var(--border)]">
          © {new Date().getFullYear()} Oregon Town Car
        </footer>
      </body>
    </html>
  )
}
