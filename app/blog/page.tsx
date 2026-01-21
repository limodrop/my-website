import BlogList from "@/app/components/server/BlogList"

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <BlogList />
    </div>
  )
}
