interface Props {
  params: { slug: string }
}

export default function CityDetailPage({ params }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold capitalize">{params.slug}</h1>
      <p className="text-gray-700">
        Information about chauffeur services in {params.slug} will appear here.
      </p>
    </div>
  )
}
