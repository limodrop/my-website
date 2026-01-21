import { snapshotAndPushLayout } from "@/lib/layout/deploySnapshot"

export function useDeploy() {
  function deploySite(actor: string = "admin") {
    snapshotAndPushLayout(actor)

    // TODO: Add actual deploy logic here (e.g., trigger CI/CD, publish content)
    console.log("🚀 Deploy triggered by", actor)
  }

  return { deploySite }
}
