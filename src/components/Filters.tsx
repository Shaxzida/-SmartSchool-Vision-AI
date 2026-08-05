import { useState } from 'react'

export default function Filters({ children }:{ children?: React.ReactNode }){
  const [open,setOpen] = useState(false)
  return (
    <div className="flex items-center gap-2">
      <button onClick={()=>setOpen(o=>!o)} className="px-3 py-2 border rounded-md">Filters</button>
      {open && <div className="p-3 rounded bg-white/60 dark:bg-slate-800/40 border">{children}</div>}
    </div>
  )
}
