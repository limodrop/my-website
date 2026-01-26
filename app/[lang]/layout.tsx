import { ReactNode } from "react"
import { Locale } from "@/lib/i18n/types"
import { getDictionary } from "@/app/i18n"
import Navigation from "@/app/components/Navigation"
import Footer from "@/app/components/Footer"
import { GlobalQuoteModal } from "@/app/components/GlobalQuoteModal"
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
  const dict = await getDictionary(params.lang);

  // Layout variant: "boxed" (default), "wide", or "full"
  const variant = "boxed";
  const containerClass =
    variant === "boxed"
      ? "max-w-7xl mx-auto px-4 sm:px-6"
      : variant === "wide"
      ? "max-w-screen-xl mx-auto px-4 sm:px-6"
      : "px-4 sm:px-6";

  return (
    <html lang={params.lang}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--text)]">
        <header className="bg-[var(--surface)] border-b border-[var(--border)] sticky top-0 z-30">
          <div className={containerClass}>
            <Navigation locale={params.lang} dict={dict} />
          </div>
        </header>

        <main className={`${containerClass} py-6 sm:py-10 min-h-screen`}>
          {children}
        </main>

        <div className="mt-10 sm:mt-20">
          <div className={containerClass}>
            <Footer locale={params.lang} dict={dict} />
          </div>
        </div>

        {/* Global Quote Modal - accessible from any page */}
        <GlobalQuoteModal locale={params.lang} />
      </body>
    </html>
  )
}
