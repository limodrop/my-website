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

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const locale = params.lang

  return {
    title: "Oregon Town Car — Worldwide Chauffeur Service",
    description:
      "Premium black car service, airport transfers, corporate travel, and worldwide chauffeur service in 50 U.S. states + 13 countries.",
    alternates: {
      canonical: `https://oregontowncar.com/${locale}`,
      languages: {
        en: "https://oregontowncar.com/en",
        es: "https://oregontowncar.com/es",
        fr: "https://oregontowncar.com/fr",
        ar: "https://oregontowncar.com/ar",
        zh: "https://oregontowncar.com/zh",
      },
    },
    openGraph: {
      title: "Oregon Town Car — Worldwide Chauffeur Service",
      description:
        "Premium black car service, airport transfers, corporate travel, and worldwide chauffeur service.",
      url: `https://oregontowncar.com/${locale}`,
      siteName: "Oregon Town Car",
      type: "website",
      images: [
        {
          url: "https://oregontowncar.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  }
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
      <body className="bg-[#F3F3F3] text-[#1B1B1B]">
        <Navigation locale={params.lang} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={params.lang} />
      </body>
    </html>
  )
}
