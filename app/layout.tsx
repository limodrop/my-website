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
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="p-4 bg-white shadow">
          <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/cities">Cities</Link>
            <Link href="/fleet">Fleet</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/components-demo">Components</Link>
          </nav>
        </header>

        <main className="p-6">{children}</main>

        <footer className="p-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Oregon Town Car
        </footer>
      </body>
    </html>
  )
}
