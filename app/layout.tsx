import "./globals.css"
import { ReactNode } from "react"
import Navigation from "@/components/navigation/Navigation"
import Footer from "@/components/navigation/Footer"
import { dictionaries } from "@/lib/dictionaries"

export const metadata = {
  title: "Oregon Town Car",
  description: "Premium Chauffeur Service"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // Default to English locale
  const dict = dictionaries.en;

  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--background)] text-[var(--text)]">
        <Navigation locale="en" dict={dict} />

        {/* Main content area - min height ensures footer stays at bottom */}
        <main className="min-h-[calc(100vh-200px)]">{children}</main>

        <Footer dict={dict} />
      </body>
    </html>
  )
}
