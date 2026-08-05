import PageShell from '../../components/PageShell'
import CameraGrid from '../../components/CameraGrid'

export default function CamerasIndex(){
  return (
    <PageShell>
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Cameras</h2>
            <div className="text-sm text-slate-500">All connected and simulated cameras</div>
          </div>
          <div>
            <button className="px-4 py-2 bg-primary text-white rounded">Add Camera</button>
          </div>
        </div>

        <div className="mt-6">
          <CameraGrid />
        </div>
      </div>
    </PageShell>
  )
}
