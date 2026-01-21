import CityList from "@/app/components/server/CityList"

export default function CitiesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Cities We Serve</h1>
      <CityList />
    </div>
  )
}
