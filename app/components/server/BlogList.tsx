import { serverApi } from "@/lib/api/serverClient"
import { SmartImage } from "@/app/components/SmartImage"

export default async function BlogList() {
  const posts = await serverApi.getBlogPosts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map(post => (
        <a
          key={post.id}
          href={`/blog/${post.slug}`}
          className="border rounded-lg p-4 hover:shadow-lg transition"
        >
          <SmartImage src={post.image} alt={post.title} className="rounded mb-3" />
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-gray-600">{post.excerpt}</p>
        </a>
      ))}
    </div>
  )
}
