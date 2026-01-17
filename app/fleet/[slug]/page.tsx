interface Props {
  params: { slug: string }
}

export default function FleetDetailPage({ params }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold capitalize">{params.slug}</h1>
      <p className="text-gray-700">
        Details about our {params.slug} vehicles will appear here.
      </p>
    </div>
  )
}
