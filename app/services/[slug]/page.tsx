interface Props {
  params: { slug: string }
}

export default function ServiceDetailPage({ params }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold capitalize">{params.slug} Service</h1>
      <p className="text-gray-700">
        Detailed information about our {params.slug} service will appear here.
      </p>
    </div>
  )
}
