import "./globals.css"
import { ReactNode } from "react"
import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "Oregon Town Car",
  description: "Premium Chauffeur Service"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navigation />
        <main className="px-6 py-8 max-w-7xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
