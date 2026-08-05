import dynamic from 'next/dynamic'
import PageShell from '../components/PageShell'

const Heatmap = dynamic(()=>import('../components/Heatmap'), { ssr:false })

export default function HeatmapPage(){
  return (
    <PageShell>
      <div className="container py-10">
        <div className="text-2xl font-bold">Interactive Heat Map</div>
        <div className="text-sm text-slate-500">Click hotspots to view incidents and play back camera feeds</div>

        <div className="mt-6 p-4 rounded-lg bg-white/60 dark:bg-slate-800/40">
          <Heatmap />
        </div>
      </div>
    </PageShell>
  )
}
