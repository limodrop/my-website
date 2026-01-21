import ExperimentEditor from "@/components/admin/ExperimentEditor"
import ExperimentList from "@/components/admin/ExperimentList"

export default function ExperimentsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">A/B Test Manager</h2>
      <ExperimentEditor />
      <ExperimentList />
    </div>
  )
}
