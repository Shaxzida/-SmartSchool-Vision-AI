import Link from 'next/link'
import { Camera } from '../lib/demoData'

export function CameraCard({ camera }: { camera: Camera }){
  return (
    <Link href={`/cameras/${camera.id}`} className="block p-4 rounded-lg border bg-white/60 dark:bg-slate-800/40 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-500">{camera.location}</div>
          <div className="font-semibold">{camera.name}</div>
        </div>
        <div className={`text-sm ${camera.status==='online' ? 'text-green-500' : 'text-rose-500'}`}>{camera.status}</div>
      </div>
      <div className="mt-3 bg-slate-800/10 rounded h-36 flex items-center justify-center">[Simulated Feed]</div>
    </Link>
  )
}
