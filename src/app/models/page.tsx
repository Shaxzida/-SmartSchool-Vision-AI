import PageShell from '../components/PageShell'

export default function Models(){
  const models = [
    { name: 'YOLOv11 (dev)', status: 'Ready' },
    { name: 'RT-DETR (beta)', status: 'Training' },
    { name: 'PoseNet (mp)', status: 'Ready' }
  ]

  return (
    <PageShell>
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">AI Models</h2>
            <div className="text-sm text-slate-500">Manage detection models, versions, and deployments</div>
          </div>
          <div>
            <button className="px-4 py-2 bg-primary text-white rounded">Upload Model</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((m,idx)=> (
            <div key={idx} className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm text-slate-500">v1.0</div>
                </div>
                <div className="text-sm">{m.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
