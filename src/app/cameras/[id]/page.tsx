import PageShell from '../../../components/PageShell'
import { getIncidentsForCamera, cameras } from '../../../lib/demoData'
import Timeline from '../../../components/Timeline'

export default function CameraDetail({ params }:{ params: { id: string } }){
  const cam = cameras.find(c=>c.id===params.id)
  if(!cam) return (<div className="min-h-screen flex items-center justify-center">Camera not found</div>)

  const incidents = getIncidentsForCamera(cam.id)

  return (
    <PageShell>
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden bg-white/60 dark:bg-slate-800/40 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">{cam.location}</div>
                  <div className="text-2xl font-bold">{cam.name}</div>
                </div>
                <div className="text-sm text-green-500">{cam.status}</div>
              </div>

              <div className="mt-4 bg-slate-800/10 h-80 rounded flex items-center justify-center">[Simulated Live Feed]</div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">Recent Incidents</h3>
                <div className="mt-3"><Timeline cameraId={cam.id} /></div>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
              <div className="text-sm text-slate-500">Camera Actions</div>
              <div className="mt-3 grid grid-cols-1 gap-2">
                <button className="py-2 px-3 border rounded">Snapshot</button>
                <button className="py-2 px-3 border rounded">Calibrate</button>
                <button className="py-2 px-3 border rounded">History</button>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
              <div className="text-sm text-slate-500">Device Info</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Model: DemoCam 1.2<br/>IP: 192.168.1.2<br/>Uptime: 12h 32m</div>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  )
}
