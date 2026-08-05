import { incidents as allInc } from '../lib/demoData'

export default function NotificationsCenter(){
  const recent = allInc.slice(0,20)
  return (
    <div className="space-y-3">
      {recent.map(n=> (
        <div key={n.id} className="p-3 rounded-md border bg-white/60 dark:bg-slate-800/40 flex items-start gap-3">
          <div className="w-12">
            <img src={n.snapshot} className="w-12 h-8 object-cover rounded" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-slate-500">{new Date(n.timestamp).toLocaleString()}</div>
            <div className="font-semibold">{n.type} — {n.confidence}%</div>
            <div className="text-sm text-slate-500">Camera: {n.cameraId}</div>
          </div>
          <div className="text-sm text-primary">View</div>
        </div>
      ))}
    </div>
  )
}
