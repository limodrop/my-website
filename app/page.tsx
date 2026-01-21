import { api } from "@/lib/api/apiClient"

export default async function HomePage() {
  const homepage = await api.getHomepage()
  const blocks = await api.getHomepageBlocks()

  return (
    <div>
      {/* HERO */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold">{homepage.hero.title}</h1>
        <p className="text-xl mt-4">{homepage.hero.subtitle}</p>
        <a
          href="/booking"
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded"
        >
          {homepage.hero.cta}
        </a>
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
