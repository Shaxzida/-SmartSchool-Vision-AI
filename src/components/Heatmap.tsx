import { useEffect, useRef } from 'react'

export default function Heatmap(){
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(()=>{
    const canvas = ref.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.scale(dpr, dpr)

    // Generate demo heat points
    const points = Array.from({length: 40}).map(()=>({
      x: Math.random()*w,
      y: Math.random()*h,
      v: Math.random()
    }))

    ctx.clearRect(0,0,w,h)
    points.forEach(p=>{
      const grd = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,60)
      const alpha = 0.15 + p.v*0.45
      grd.addColorStop(0, `rgba(6,182,212,${alpha})`)
      grd.addColorStop(1, `rgba(6,182,212,0)`)
      ctx.fillStyle = grd as any
      ctx.beginPath()
      ctx.arc(p.x,p.y,60,0,Math.PI*2)
      ctx.fill()
    })

  },[])

  return (
    <div className="mt-4 rounded-md overflow-hidden bg-gradient-to-b from-white/60 to-white/30 dark:from-slate-800/40 dark:to-slate-800/20" style={{height:220}}>
      <canvas ref={ref} style={{width:'100%', height:'100%'}} />
    </div>
  )
}
