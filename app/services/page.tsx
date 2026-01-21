import ServiceList from "@/app/components/server/ServiceList"

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <ServiceList />
    </div>
  )
}
