import FleetList from "@/app/components/server/FleetList"

export default function FleetPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Our Fleet</h1>
      <FleetList />
    </div>
  )
}
