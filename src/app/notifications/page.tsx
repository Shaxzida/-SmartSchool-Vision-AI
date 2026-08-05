import PageShell from '../components/PageShell'
import NotificationsCenter from '../components/NotificationsCenter'

export default function NotificationsPage(){
  return (
    <PageShell>
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Notifications</h2>
            <div className="text-sm text-slate-500">All alert deliveries and notification history</div>
          </div>
          <div>
            <button className="px-3 py-2 border rounded">Mark all read</button>
          </div>
        </div>

        <div className="mt-6"><NotificationsCenter /></div>
      </div>
    </PageShell>
  )
}
