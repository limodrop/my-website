import { ReactNode } from "react"
import { Locale } from "@/lib/i18n/types"

export default function LangLayout({
  children,
  params
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}
