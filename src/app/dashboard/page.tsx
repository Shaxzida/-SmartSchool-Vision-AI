import { WeeklyIncidents, RiskSpark } from '../components/Analytics'
import dynamic from 'next/dynamic'

const Heatmap = dynamic(() => import('../components/Heatmap'), { ssr:false })

export default function Dashboard(){
  return (
    <div className="min-h-screen py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-xl shadow bg-white/60 dark:bg-slate-800/40">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500">Overview</div>
                <div className="text-2xl font-bold">Greenwood High — Director Dashboard</div>
              </div>
              <div className="text-sm text-slate-500">Updated: {new Date().toLocaleString()}</div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="p-4 rounded-md bg-white/80 dark:bg-slate-900/40">
                <div className="text-xs text-slate-500">Active Cameras</div>
                <div className="text-xl font-semibold">4</div>
              </div>
              <div className="p-4 rounded-md bg-white/80 dark:bg-slate-900/40">
                <div className="text-xs text-slate-500">Incidents Today</div>
                <div className="text-xl font-semibold">7</div>
              </div>
              <div className="p-4 rounded-md bg-white/80 dark:bg-slate-900/40">
                <div className="text-xs text-slate-500">Avg Confidence</div>
                <div className="text-xl font-semibold">78%</div>
              </div>
            </div>

            <div className="mt-6">
              <WeeklyIncidents />
            </div>
          </div>

          <div className="p-6 rounded-xl shadow bg-white/60 dark:bg-slate-800/40">
            <div className="text-sm text-slate-500">Live Camera Monitor</div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-md bg-slate-800/10 h-48 flex items-center justify-center">[Camera Feed 1]</div>
              <div className="rounded-md bg-slate-800/10 h-48 flex items-center justify-center">[Camera Feed 2]</div>
            </div>

            <div className="mt-4">
              <Heatmap />
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <RiskSpark />

          <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
            <div className="text-sm text-slate-500">Live Alerts</div>
            <div className="mt-2 space-y-2">
              {[1,2,3].map(i=> (
                <div key={i} className="p-3 rounded-md bg-white dark:bg-slate-900/40">
                  <div className="text-xs text-slate-500">{new Date().toLocaleTimeString()}</div>
                  <div className="font-medium">Fight detected — Front Gate</div>
                  <div className="text-xs text-slate-500">Confidence: 88%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
            <div className="text-sm text-slate-500">Quick Actions</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <button className="py-2 px-3 bg-primary text-white rounded">Acknowledge</button>
              <button className="py-2 px-3 border rounded">Assign</button>
              <button className="py-2 px-3 border rounded">Export</button>
              <button className="py-2 px-3 border rounded">Open Report</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
