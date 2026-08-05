"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, Globe, Menu, X, User, ChevronDown, Search } from 'lucide-react'

type NavItem = { href: string; label: string }

const NAV: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/#features', label: 'Features' },
  { href: '/#tech', label: 'AI Technology' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/live', label: 'Live' },
  { href: '/incidents', label: 'Incidents' }
]

export default function Navbar(){
  const pathname = usePathname() || '/'
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    try { return (localStorage.getItem('ss_theme') as 'light'|'dark') || 'light' } catch { return 'light' }
  })
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<'en'|'uz'|'ru'>('en')

  useEffect(()=>{
    // Apply theme class
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try{ localStorage.setItem('ss_theme', theme) }catch{}
  },[theme])

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  useEffect(()=>{
    try{ const l = (navigator.language || 'en').slice(0,2) as any; if(['en','uz','ru'].includes(l)) setLang(l) }catch{}
  },[])

  function toggleTheme(){ setTheme(t=> t === 'dark' ? 'light' : 'dark') }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-xl' : ''}`} aria-hidden={false}>
      <div className={`backdrop-blur header-glass border-b ${scrolled ? 'border-slate-200/60 dark:border-slate-800/60' : 'border-transparent'} `}>
        <div className="container py-3">
          <nav className="flex items-center justify-between" role="navigation" aria-label="Main navigation">

            {/* left - logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                <img src="/logo.svg" alt="SmartSchool Vision AI" className="w-10 h-10" />
                <span className="hidden sm:inline-block font-semibold text-slate-900 dark:text-slate-100">SmartSchool Vision AI</span>
              </Link>
            </div>

            {/* center - links (desktop) */}
            <div className="hidden md:flex items-center gap-6">
              {NAV.map((n)=>{
                const active = (n.href === '/' ? pathname === '/' : pathname.startsWith(n.href.replace('#','')))
                return (
                  <Link key={n.href} href={n.href} className={`relative px-2 py-1 text-sm rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${active ? 'text-primary font-semibold' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`} aria-current={active ? 'page' : undefined}>
                    {n.label}
                    {active && <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-primary rounded" />}
                  </Link>
                )
              })}
            </div>

            {/* right - actions */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-3">
                <button aria-label="Search" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <Search size={16} />
                </button>

                <button aria-label="Notifications" className="relative p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <Bell size={16} />
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
                </button>

                <div>
                  <label htmlFor="lang" className="sr-only">Language</label>
                  <select id="lang" value={lang} onChange={(e)=>setLang(e.target.value as any)} className="text-sm p-2 rounded-md bg-transparent border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    <option value="en">English</option>
                    <option value="uz">O'zbek</option>
                    <option value="ru">Русский</option>
                  </select>
                </div>

                <button onClick={toggleTheme} aria-label="Toggle color theme" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>

                <div className="flex items-center gap-2">
                  <img src="/avatar-placeholder.png" alt="User avatar" className="w-8 h-8 rounded-full object-cover" />
                  <ChevronDown size={14} />
                </div>

                <Link href="/request-demo" className="ml-2 inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md shadow hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">Request Demo</Link>
              </div>

              {/* mobile menu button */}
              <div className="md:hidden">
                <button onClick={()=>setMobileOpen(true)} aria-label="Open menu" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile slide-over */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200/50 dark:border-slate-800/50">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="logo" className="w-8 h-8" />
                <div className="font-semibold">SmartSchool</div>
              </div>
              <button onClick={()=>setMobileOpen(false)} aria-label="Close menu" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <X size={20} />
              </button>
            </div>

            <div className="px-4 py-2">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV.map(n=> (
                  <Link key={n.href} href={n.href} onClick={()=>setMobileOpen(false)} className={`block p-3 rounded-md ${pathname.startsWith(n.href.replace('#','')) ? 'bg-slate-100 dark:bg-slate-800 font-semibold' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                    {n.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4">
                <button className="w-full px-4 py-3 bg-primary text-white rounded-md">Request Demo</button>
              </div>

              <div className="mt-4 border-t border-slate-100 dark:border-slate-800/40 pt-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <img src="/avatar-placeholder.png" alt="avatar" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-medium">Demo Admin</div>
                    <div className="text-xs text-slate-500">admin@smartschool.test</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}


function MoonIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  )
}

function SunIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M21 12v.01"></path>
      <path d="M3 12v.01"></path>
      <path d="M12 3v.01"></path>
      <path d="M12 21v.01"></path>
      <path d="M4.22 4.22v.01"></path>
      <path d="M19.78 19.78v.01"></path>
      <path d="M4.22 19.78v.01"></path>
      <path d="M19.78 4.22v.01"></path>
    </svg>
  )
}
