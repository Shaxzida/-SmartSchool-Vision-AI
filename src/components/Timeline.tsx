import { useMemo } from 'react'
import { incidents as allInc } from '../lib/demoData'

export default function Timeline({ cameraId }: { cameraId?: string }){
  const items = useMemo(()=> {
    const list = cameraId ? allInc.filter(i=>i.cameraId===cameraId) : allInc
    return list.sort((a,b)=> +new Date(b.timestamp) - +new Date(a.timestamp)).slice(0,20)
  },[cameraId])

  return (
    <div className="space-y-4">
      {items.map(i=> (
        <div key={i.id} className="p-3 rounded-md border bg-white/60 dark:bg-slate-800/40">
          <div className="flex items-start gap-3">
            <div className="w-12">
              <img src={i.snapshot} className="w-12 h-8 object-cover rounded" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-slate-500">{new Date(i.timestamp).toLocaleString()}</div>
              <div className="font-semibold">{i.type} — Confidence {i.confidence}%</div>
              <div className="text-sm text-slate-500">{i.explanation}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
