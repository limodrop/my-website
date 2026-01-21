import { api } from "@/lib/api/apiClient"

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oregontowncar.com"

  const [services, cities, fleet, posts] = await Promise.all([
    api.getServices(),
    api.getCities(),
    api.getFleet(),
    api.getBlogPosts(),
  ])

  const staticRoutes = ["", "/services", "/cities", "/fleet", "/contact", "/promotions"].map(
    path => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
    })
  )

  const serviceRoutes = services.map(s => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const cityRoutes = cities.map(c => ({
    url: `${baseUrl}/cities/${c.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const fleetRoutes = fleet.map(v => ({
    url: `${baseUrl}/fleet/${v.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = posts.map(p => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date().toISOString(),
  }))

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...fleetRoutes, ...blogRoutes]
}
