import Link from "next/link"

export default function AdminHome() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Admin Tools</h2>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">Intelligence & Rules</h3>
        <ul className="space-y-2 ml-4">
          <li>
            <Link href="/admin/rules" className="text-blue-600 underline">
              Rule Editor
            </Link>
          </li>
          <li>
            <Link href="/admin/insights" className="text-blue-600 underline">
              Intelligence Snapshot
            </Link>
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">Content Management</h3>
        <ul className="space-y-2 ml-4">
          <li>
            <Link href="/admin/content/regions" className="text-blue-600 underline">
              Manage Regions
            </Link>
          </li>
          <li>
            <Link href="/admin/content/countries" className="text-blue-600 underline">
              Manage Countries
            </Link>
          </li>
          <li>
            <Link href="/admin/content/cities" className="text-blue-600 underline">
              Manage Cities
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
