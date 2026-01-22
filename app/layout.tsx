import "./globals.css"
import { ReactNode } from "react"
import Link from "next/link"
import { serverClient } from "@/app/lib/serverClient"

export const metadata = {
  title: "Oregon Town Car",
  description: "Premium Chauffeur Service"
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const countries = await serverClient.countries();
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Oregon Town Car",
    "url": "https://oregontowncar.com",
    "sameAs": [],
    "areaServed": countries.map(c => ({
      "@type": "Country",
      "name": c.name
    }))
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="p-4 bg-white shadow">
          <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/cities">Cities</Link>
            <Link href="/countries">Countries</Link>
            <Link href="/worldwide">Worldwide</Link>
            <Link href="/fleet">Fleet</Link>
            <Link href="/contact">Contact</Link>
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
