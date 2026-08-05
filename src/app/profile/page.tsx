import PageShell from '../components/PageShell'

export default function ProfilePage(){
  return (
    <PageShell>
      <div className="container py-10">
        <div className="max-w-3xl mx-auto p-6 rounded-lg bg-white/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-4">
            <img src="/avatar.svg" alt="avatar" className="w-20 h-20 rounded-full" />
            <div>
              <div className="text-2xl font-bold">Demo Admin</div>
              <div className="text-sm text-slate-500">admin@smartschool.test</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-500">Full name</label>
              <input className="w-full p-3 border rounded mt-2" defaultValue="Demo Admin" />
            </div>
            <div>
              <label className="text-sm text-slate-500">Email</label>
              <input className="w-full p-3 border rounded mt-2" defaultValue="admin@smartschool.test" />
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 bg-primary text-white rounded">Save</button>
            <button className="px-4 py-2 border rounded">Reset</button>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
