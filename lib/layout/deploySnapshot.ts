import { getHomepageLayout } from "./homepageLayout"
import { saveLayoutSnapshot } from "./layoutHistory"
import { listLayoutHistory } from "./layoutHistory"
import { pushLayoutToGit } from "./gitSync"

export function snapshotLayoutBeforeDeploy(actor: string = "ci") {
  const layout = getHomepageLayout()
  const label = `Pre-deploy snapshot (${new Date().toLocaleString()})`
  saveLayoutSnapshot(label, layout, actor)
}

export function snapshotAndPushLayout(actor: string = "ci") {
  const layout = getHomepageLayout()
  const label = `Pre-deploy snapshot (${new Date().toLocaleString()})`
  saveLayoutSnapshot(label, layout, actor)
  const last = listLayoutHistory()[0]
  pushLayoutToGit(last.id)
}

