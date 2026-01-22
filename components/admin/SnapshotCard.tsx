"use client"

interface Props {
  label: string
  data: any
}

export default function SnapshotCard({ label, data }: Props) {
  return (
    <div className="p-4 bg-white rounded shadow text-sm">
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <pre className="overflow-x-auto whitespace-pre-wrap text-xs text-gray-800">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
