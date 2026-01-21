import { serverApi } from "@/lib/api/serverClient"

export default async function PromotionsPage() {
  const promotions = await serverApi.getPromotions()

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Current Promotions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.map(promo => (
          <div key={promo.id} className="border rounded-lg p-6 shadow">
            <h3 className="text-2xl font-semibold mb-2">{promo.title}</h3>
            <p className="text-gray-700 mb-3">{promo.description}</p>
            <p className="font-bold">Code: {promo.code}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
