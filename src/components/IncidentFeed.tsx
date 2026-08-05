import { incidents } from '../lib/demoData'

export default function IncidentFeed(){
  const recent = incidents.slice(0,12)
  return (
    <div className="space-y-3">
      {recent.map(i=> (
        <div key={i.id} className="flex items-center gap-3 p-3 rounded-md border bg-white/60 dark:bg-slate-800/40">
          <img src={i.snapshot} className="w-20 h-14 object-cover rounded" />
          <div className="flex-1">
            <div className="text-sm text-slate-500">{new Date(i.timestamp).toLocaleString()}</div>
            <div className="font-semibold">{i.type}</div>
            <div className="text-xs text-slate-500">Confidence: {i.confidence}%</div>
          </div>
          <div>
            <a href={`/incidents/${i.id}`} className="text-primary text-sm">View</a>
          </div>
        </div>
      ))}
    </div>
  )
}
