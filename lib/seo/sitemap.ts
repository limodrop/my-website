import { BlogPost } from "@/lib/blog/types"
import { cities } from "@/lib/coverage/cities"

const SUPPORTED_LANGS = ["en", "es", "fr"]
const BASE_URL = "https://oregontowncar.com"

const STATIC_PATHS = [
  "/",
  "/services",
  "/cities",
  "/fleet",
  "/contact",
  "/privacy",
  "/blog",
  "/coverage"
]

const SERVICES = ["airport", "corporate", "wine", "wedding", "hourly", "leisure"]

const mockBlogPosts: BlogPost[] = [
  {
    slug: "portland-airport-winter",
    lang: "en",
    city: "Portland",
    service: "airport",
    season: "winter",
    title: "Winter Travel Tips for PDX Airport",
    date: "2026-01-10",
    html: ""
  },
  {
    slug: "beaverton-wine-summer",
    lang: "es",
    city: "Beaverton",
    service: "wine",
    season: "summer",
    title: "Tour de vinos en Beaverton este verano",
    date: "2026-06-15",
    html: ""
  }
]

export function generateSitemapXml(): string {
  const urls: string[] = []

  // Static pages
  for (const path of STATIC_PATHS) {
    for (const lang of SUPPORTED_LANGS) {
      const url = `${BASE_URL}/${lang}${path}`
      const alternates = SUPPORTED_LANGS.map((alt) => {
        return `<xhtml:link rel="alternate" hreflang="${alt}" href="${BASE_URL}/${alt}${path}" />`
      }).join("")
      urls.push(`<url><loc>${url}</loc>${alternates}</url>`)
    }
  }

  // City pages
  for (const city of cities) {
    for (const lang of SUPPORTED_LANGS) {
      const path = `/cities/${city.slug}`
      const url = `${BASE_URL}/${lang}${path}`
      const alternates = SUPPORTED_LANGS.map((alt) => {
        return `<xhtml:link rel="alternate" hreflang="${alt}" href="${BASE_URL}/${alt}${path}" />`
      }).join("")
      urls.push(`<url><loc>${url}</loc>${alternates}</url>`)
    }
  }

  // Service pages
  for (const service of SERVICES) {
    for (const lang of SUPPORTED_LANGS) {
      const path = `/services/${service}`
      const url = `${BASE_URL}/${lang}${path}`
      const alternates = SUPPORTED_LANGS.map((alt) => {
        return `<xhtml:link rel="alternate" hreflang="${alt}" href="${BASE_URL}/${alt}${path}" />`
      }).join("")
      urls.push(`<url><loc>${url}</loc>${alternates}</url>`)
    }
  }

  // Blog posts
  for (const post of mockBlogPosts) {
    const path = `/blog/${post.slug}`
    const url = `${BASE_URL}/${post.lang}${path}`
    const alternates = mockBlogPosts
      .filter((p) => p.slug === post.slug)
      .map((p) => {
        return `<xhtml:link rel="alternate" hreflang="${p.lang}" href="${BASE_URL}/${p.lang}/blog/${p.slug}" />`
      })
      .join("")
    urls.push(`<url><loc>${url}</loc>${alternates}</url>`)
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${urls.join("\n")}
  </urlset>`
}
