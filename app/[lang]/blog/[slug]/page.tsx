import { getPostBySlug } from "@/lib/blog/posts"
import { Locale } from "@/lib/i18n/types"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const langs = ["en", "es", "fr", "ar", "zh"]
  const slugs = ["portland-airport-winter", "beaverton-wine-summer"]

  return langs.flatMap((lang) =>
    slugs.map((slug) => ({ lang, slug }))
  )
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
