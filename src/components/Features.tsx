import { motion } from 'framer-motion'

const features = [
  { title: 'Fight Detection', desc: 'Detect fights and violent interactions in live video.' },
  { title: 'Fall Detection', desc: 'Auto-detect slips and falls in real time.' },
  { title: 'Unauthorized Person', desc: 'Identify unknown persons in restricted areas.' },
  { title: 'Smoke & Fire', desc: 'Early smoke detection connected to alerts.' },
  { title: 'Heat Maps', desc: 'Visualize density and risk across campus.' },
  { title: 'Incident Reports', desc: 'Auto-generated reports with screenshots.' }
]

export default function Features(){
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">AI-driven Safety Features</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">A comprehensive suite of detections and analytics tailor-made for schools.</p>
      </div>

      <motion.div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.15 }}>
        {features.map((f,i)=> (
          <div key={i} className="p-6 rounded-xl border dark:border-slate-700 bg-white/60 dark:bg-slate-800/40">
            <div className="text-lg font-semibold">{f.title}</div>
            <div className="mt-2 text-sm text-slate-500">{f.desc}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
