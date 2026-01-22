import { getPostBySlug, getAllPosts } from "@/lib/blog/posts"
import { Locale } from "@/lib/i18n/types"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const allPosts = getAllPosts()
  
  return allPosts.map((post) => ({
    lang: post.lang,
    slug: post.slug,
  }))
}

export default function BlogPostPage({
  params
}: {
  params: { lang: Locale; slug: string }
}) {
  const post = getPostBySlug(params.slug, params.lang)

  if (!post) return notFound()

  return (
    <article className="prose max-w-3xl">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(post.date).toLocaleDateString()} — {post.city} — {post.lang.toUpperCase()}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
