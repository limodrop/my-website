import { ReactNode } from "react"
import { Locale } from "@/lib/i18n/types"
import Navigation from "@/app/components/Navigation"
import Footer from "@/app/components/Footer"
import "../globals.css"

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "es" },
    { lang: "fr" },
    { lang: "ar" },
    { lang: "zh" },
  ]
}

export default async function LangLayout({
  children,
  params
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className="bg-black text-white">
        <Navigation locale={params.lang} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={params.lang} />
      </body>
    </html>
  )
}
