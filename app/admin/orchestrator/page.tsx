import OrchestratorInspector from "@/components/admin/OrchestratorInspector"
import RuleInspector from "@/components/admin/RuleInspector"

export default function OrchestratorPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Orchestrator Debugger</h2>
      <OrchestratorInspector />
      <RuleInspector />
    </div>
  )
}
