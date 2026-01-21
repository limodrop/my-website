import SocialScheduler from "@/components/admin/SocialScheduler"
import ScheduledPostList from "@/components/admin/ScheduledPostList"

export default function SchedulingPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Social & Email Scheduling</h2>
      <SocialScheduler />
      <ScheduledPostList />
    </div>
  )
}
