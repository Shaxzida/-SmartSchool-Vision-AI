import PageShell from '../components/PageShell'

export default function Schools(){
  return (
    <PageShell>
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">School Management</h2>
            <div className="text-sm text-slate-500">Manage schools, administrators and camera fleets</div>
          </div>
          <div>
            <button className="px-4 py-2 bg-primary text-white rounded">Add School</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
            <div className="font-semibold">Greenwood High</div>
            <div className="text-sm text-slate-500">Cameras: 4 — Admins: 2</div>
          </div>

          <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
            <div className="font-semibold">Riverside Prep</div>
            <div className="text-sm text-slate-500">Cameras: 8 — Admins: 3</div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
