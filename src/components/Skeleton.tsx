export default function Skeleton({ className = '' }: { className?: string }){
  return (
    <div className={`animate-pulse bg-slate-200/60 dark:bg-slate-700/60 ${className}`} />
  )
}
