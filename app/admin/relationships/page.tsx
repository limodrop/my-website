import LinkingRules from "@/components/admin/LinkingRules"
import ClusterEditor from "@/components/admin/ClusterEditor"

export default function RelationshipsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Content Relationships</h2>
      <LinkingRules />
      <ClusterEditor />
    </div>
  )
}
