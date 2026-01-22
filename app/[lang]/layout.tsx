import { ReactNode } from "react"
import { Locale } from "@/lib/i18n/types"
import Navigation from "@/app/components/Navigation"
import Footer from "@/app/components/Footer"
import "../globals.css"

export default function LangLayout({
  children,
  params
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className="bg-gray-50">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
