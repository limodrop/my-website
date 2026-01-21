import { api } from "@/lib/api/apiClient"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"

interface Props {
  params: { slug: string }
}

function ArticleJsonLd({ post }: { post: any }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.image,
    author: {
      "@type": "Organization",
      name: "Oregon Town Car",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export async function generateMetadata({ params }: Props) {
  const [seo, post] = await Promise.all([
    api.getSEO(),
    api.getBlogPost(params.slug),
  ])

  if (!post) return { title: "Post not found" }

  return {
    title: `${post.title} | ${seo.title}`,
    description: seo.description,
    openGraph: {
      title: post.title,
      images: [post.image],
      type: "article",
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await api.getBlogPost(params.slug)

  if (!post) return <div>Post not found</div>

  return (
    <div className="container mx-auto py-12">
      <ArticleJsonLd post={post} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <img src={post.image} className="rounded mb-6" />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-700 text-lg prose max-w-none">
        {post.content}
      </div>
    </div>
  )
}
