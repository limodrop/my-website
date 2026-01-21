import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import { serverApi } from "@/lib/api/serverClient"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await serverApi.getSettings()

  return (
    <html lang="en">
      <body
        style={{
          "--primary": settings.primaryColor,
          "--secondary": settings.secondaryColor,
        } as React.CSSProperties}
        className="bg-white text-gray-900"
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
