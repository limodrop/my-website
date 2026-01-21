import { api } from "@/lib/api/apiClient"

function HomepageJsonLd({ settings }: { settings: any }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: settings.siteName,
    description: settings.tagline,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://oregontowncar.com",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://oregontowncar.com"}/images/og/homepage.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      addressCountry: "US",
    },
    telephone: "(503) 123-4567",
    openingHours: "Mo-Su 00:00-23:59",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default async function HomePage() {
  const [homepage, blocks, settings] = await Promise.all([
    api.getHomepage(),
    api.getHomepageBlocks(),
    api.getSettings(),
  ])

  return (
    <div>
      <HomepageJsonLd settings={settings} />
      {/* HERO SLIDER */}
      <section className="text-center py-20 bg-gray-100 space-y-10">
        {homepage.heroSlides.map((slide, idx) => (
          <div key={idx}>
            <h1 className="text-5xl font-bold">{slide.title}</h1>
            <p className="text-xl mt-4">{slide.subtitle}</p>
            <a
              href="/booking"
              className="mt-6 inline-block bg-black text-white px-6 py-3 rounded"
            >
              {slide.cta}
            </a>
          </div>
        ))}
      </section>

      {/* BLOCKS */}
      <section className="container mx-auto py-16 space-y-12">
        {blocks.map(block => {
          if (block.type === "text") {
            return (
              <div key={block.id}>
                <h2 className="text-3xl font-bold mb-4">{block.title}</h2>
                <p className="text-gray-700">{block.content}</p>
              </div>
            )
          }

          if (block.type === "image") {
            return (
              <div key={block.id}>
                <img src={block.image} className="rounded mb-3" />
                <p className="text-gray-600">{block.caption}</p>
              </div>
            )
          }

          if (block.type === "cta") {
            return (
              <div key={block.id} className="text-center">
                <a
                  href={block.href}
                  className="bg-black text-white px-6 py-3 rounded"
                >
                  {block.label}
                </a>
              </div>
            )
          }
        })}
      </section>
    </div>
  )
}
