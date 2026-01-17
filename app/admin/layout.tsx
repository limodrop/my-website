import { ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </header>

      <main className="p-6">{children}</main>
    </div>
  )
}
