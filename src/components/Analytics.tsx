import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const data = Array.from({length: 7}).map((_,i)=>({
  day: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i],
  incidents: Math.floor(2 + Math.random()*10),
  risk: Math.floor(10 + Math.random()*60)
}))

export function WeeklyIncidents(){
  return (
    <div className="p-4 bg-white/60 dark:bg-slate-800/40 rounded-lg">
      <div className="text-sm text-slate-500">This Week — Incidents</div>
      <div className="h-36">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 6, right: 6, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorInc" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.2}/>
                <stop offset="100%" stopColor="#2563EB" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <YAxis hide />
            <Tooltip />
            <Area type="monotone" dataKey="incidents" stroke="#2563EB" fillOpacity={1} fill="url(#colorInc)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export function RiskSpark(){
  const rdata = Array.from({length: 12}).map((_,i)=>({ t: i, val: Math.floor(10 + Math.random()*70) }))
  return (
    <div className="p-4 bg-white/60 dark:bg-slate-800/40 rounded-lg">
      <div className="text-sm text-slate-500">AI Risk Score</div>
      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rdata}>
            <Line type="monotone" dataKey="val" stroke="#06B6D4" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 text-xl font-semibold">23% <span className="text-sm text-slate-500">current</span></div>
    </div>
  )
}
