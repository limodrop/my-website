import { api } from "@/lib/api/apiClient"

export default async function Navigation() {
  const items = await api.getNavigation()

  return (
    <nav className="w-full py-4 bg-white shadow">
      <div className="container mx-auto flex gap-6">
        {items.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="text-gray-800 hover:text-black font-medium"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
