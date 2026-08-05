import PageShell from '../components/PageShell'

export default function ReportsPage(){
  return (
    <PageShell>
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Reports</h2>
            <div className="text-sm text-slate-500">Export incident reports, statistics, and compliance logs</div>
          </div>
          <div>
            <button className="px-3 py-2 bg-primary text-white rounded">New Report</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
            <div className="text-sm text-slate-500">Weekly</div>
            <div className="mt-3">[Download PDF]</div>
          </div>

          <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
            <div className="text-sm text-slate-500">Custom</div>
            <div className="mt-3">[Filters & Export]</div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
