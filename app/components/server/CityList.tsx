import { api } from "@/lib/api/apiClient"

export default async function CityList() {
  const cities = await api.getCities()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cities.map(city => (
        <a
          key={city.id}
          href={`/cities/${city.slug}`}
          className="border rounded-lg p-4 hover:shadow-lg transition"
        >
          <img src={city.image} alt={city.name} className="rounded mb-3" />
          <h3 className="text-xl font-semibold">{city.name}</h3>
          <p className="text-gray-600">{city.description}</p>
        </a>
      ))}
    </div>
  )
}
