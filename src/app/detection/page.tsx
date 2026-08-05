import PageShell from '../components/PageShell'
import IncidentFeed from '../components/IncidentFeed'
import Filters from '../components/Filters'
import SearchBar from '../components/SearchBar'

export default function Detection(){
  return (
    <PageShell>
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Incident Detection Stream</h2>
            <div className="text-sm text-slate-500">Real-time simulated detections with confidence and screenshots</div>
          </div>
          <div className="flex items-center gap-3">
            <SearchBar placeholder="Search incidents, cameras..." />
            <Filters>Type<br/><select className="mt-1 p-2 border rounded"><option>All</option></select></Filters>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <IncidentFeed />
          </div>
          <aside>
            <div className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
              <h3 className="font-semibold">Live Controls</h3>
              <div className="mt-3 text-sm text-slate-500">Replay, Pause, Sensitivity</div>
              <div className="mt-3 grid grid-cols-1 gap-2">
                <button className="py-2 px-3 border rounded">Pause</button>
                <button className="py-2 px-3 border rounded">Replay Last 5</button>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
              <h3 className="font-semibold">Filters</h3>
              <div className="mt-3 text-sm text-slate-500">Confidence: 50%+</div>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  )
}
