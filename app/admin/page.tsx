import Link from "next/link"

export default function AdminHome() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Admin Tools</h2>

      <ul className="space-y-2">
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
    </div>
  )
}
