import PriceMessageEditor from "@/components/admin/PriceMessageEditor"
import PriceMessageList from "@/components/admin/PriceMessageList"

export default function PriceMessagingPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Price Messaging Rules</h2>
      <PriceMessageEditor />
      <PriceMessageList />
    </div>
  )
}
