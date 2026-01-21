import { api } from "@/lib/api/apiClient"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const seo = await api.getSEO()
  const post = await api.getBlogPost(params.slug)

  return {
    title: `${post?.title} | ${seo.title}`,
    description: seo.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await api.getBlogPost(params.slug)

  if (!post) return <div>Post not found</div>

  return (
    <div className="container mx-auto py-12">
      <img src={post.image} className="rounded mb-6" />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-700 text-lg prose max-w-none">
        {post.content}
      </div>
    </div>
  )
}
