import { motion } from 'framer-motion'
import { Monitor, Bell, MapPin } from 'lucide-react'

export default function Hero(){
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ x: -40, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">SmartSchool Vision AI</h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">Transform existing school IP cameras into an intelligent safety system. Real-time incident detection, risk scoring, and instant notifications to keep students and staff safe.</p>

            <div className="mt-8 flex gap-4">
              <a href="/dashboard" className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-lg shadow">Try Live Demo</a>
              <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700">Learn More</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-3"><Monitor className="text-primary" /> <div><div className="text-sm font-medium">Real-time</div><div className="text-xs text-slate-500">Live camera analytics</div></div></div>
              <div className="flex items-center gap-3"><Bell className="text-primary" /> <div><div className="text-sm font-medium">Instant Alerts</div><div className="text-xs text-slate-500">Telegram, Push, SMS</div></div></div>
              <div className="flex items-center gap-3"><MapPin className="text-primary" /> <div><div className="text-sm font-medium">Heat Maps</div><div className="text-xs text-slate-500">Crowd & risk visualization</div></div></div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ scale:0.98, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.7 }} className="relative">
          <div className="w-full rounded-2xl overflow-hidden shadow-premium card-gradient">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">Live Feed</div>
                  <div className="text-sm font-medium">Greenwood High — Front Gate</div>
                </div>
                <div className="text-xs text-slate-500">Connected • AI OK</div>
              </div>

              <div className="mt-4 rounded-md bg-slate-800/10 dark:bg-slate-700/40 h-56 flex items-center justify-center">
                <div className="text-slate-500">[Simulated Camera Feed]</div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="p-3 bg-white/60 dark:bg-slate-800 rounded-md">
                  <div className="text-xs text-slate-500">Incidents Today</div>
                  <div className="text-xl font-semibold">6</div>
                </div>
                <div className="p-3 bg-white/60 dark:bg-slate-800 rounded-md">
                  <div className="text-xs text-slate-500">Active Cameras</div>
                  <div className="text-xl font-semibold">4</div>
                </div>
                <div className="p-3 bg-white/60 dark:bg-slate-800 rounded-md">
                  <div className="text-xs text-slate-500">Risk Score</div>
                  <div className="text-xl font-semibold">23%</div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
