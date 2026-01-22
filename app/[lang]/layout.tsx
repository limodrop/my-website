import { ReactNode } from "react"
import { Locale } from "@/lib/i18n/types"
import Navigation from "@/app/components/Navigation"
import Footer from "@/app/components/Footer"
import { getDictionary } from "@/app/i18n"
import "../globals.css"

export default async function LangLayout({
  children,
  params
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)
  
  return (
    <html lang={params.lang}>
      <body className="bg-gray-50">
        <Navigation locale={params.lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={params.lang} dict={dict} />
      </body>
    </html>
  )
}
