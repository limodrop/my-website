import RuleEditor from "@/components/admin/RuleEditor"
import RuleList from "@/components/admin/RuleList"

export default function RuleEditorPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Rule Editor</h2>
      <RuleEditor />
      <RuleList />
    </div>
  )
}
