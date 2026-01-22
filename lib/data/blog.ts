export async function getBlogPosts() {
  return [
    {
      slug: "top-wine-regions-oregon",
      title: "Top Wine Regions to Visit in Oregon",
      excerpt: "Discover the best wineries and wine country destinations in Oregon with our guided tours.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Wine Tours",
      image: "/images/blog/wine-regions.jpg"
    },
    {
      slug: "airport-travel-tips",
      title: "5 Tips for Stress-Free Airport Travel",
      excerpt: "Make your airport transportation smooth and worry-free with these expert tips.",
      author: "Mike Davis",
      date: "2024-01-10",
      category: "Travel Tips",
      image: "/images/blog/airport-tips.jpg"
    },
    {
      slug: "corporate-transportation-benefits",
      title: "Benefits of Professional Corporate Transportation",
      excerpt: "Why businesses choose chauffeur services for executive travel and client meetings.",
      author: "Jennifer Lee",
      date: "2024-01-05",
      category: "Business Travel",
      image: "/images/blog/corporate.jpg"
    }
  ]
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getBlogPosts()
  const post = posts.find(p => p.slug === slug)
  
  if (!post) return null
  
  return {
    ...post,
    content: `Full content for ${post.title}...`,
    tags: ["transportation", "oregon", "travel"],
    relatedPosts: posts.filter(p => p.slug !== slug).slice(0, 3)
  }
}
