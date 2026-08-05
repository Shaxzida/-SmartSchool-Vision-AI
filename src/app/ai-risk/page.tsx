import PageShell from '../components/PageShell'
import { WeeklyIncidents, RiskSpark } from '../components/Analytics'

export default function AIRisk(){
  return (
    <PageShell>
      <div className="container py-10">
        <div className="text-2xl font-bold">AI Risk Score</div>
        <div className="text-sm text-slate-500">Detailed analytics and contributing factors to the campus risk score</div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-lg bg-white/60 dark:bg-slate-800/40">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500">Current Risk</div>
                <div className="text-4xl font-bold">23%</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Trend</div>
                <div className="text-lg font-semibold">+4% (7d)</div>
              </div>
            </div>

            <div className="mt-6"><WeeklyIncidents /></div>
          </div>

          <aside className="space-y-4">
            <RiskSpark />
            <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
              <div className="text-sm text-slate-500">Contributors</div>
              <ul className="mt-2 text-sm space-y-1">
                <li>Playground crowding — 32%</li>
                <li>Unsupervised hallway activity — 21%</li>
                <li>After-school events — 12%</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  )
}
