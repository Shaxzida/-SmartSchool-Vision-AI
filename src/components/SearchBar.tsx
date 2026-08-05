import { useState } from 'react'

export default function SearchBar({ placeholder='Search...' }:{ placeholder?: string }){
  const [q,setQ] = useState('')
  return (
    <div className="flex items-center gap-2">
      <input aria-label="Search" value={q} onChange={(e)=>setQ(e.target.value)} placeholder={placeholder} className="px-3 py-2 border rounded-md w-64 bg-white/60 dark:bg-slate-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
    </div>
  )
}
