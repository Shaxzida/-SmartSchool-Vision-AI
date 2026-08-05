import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <main>
      <header className="py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-white shadow-premium">SS</div>
            <div className="text-lg font-semibold">SmartSchool Vision AI</div>
          </div>
          <nav className="flex gap-4 items-center">
            <a href="#features" className="text-slate-600 dark:text-slate-300">Features</a>
            <a href="/dashboard" className="bg-primary text-white px-4 py-2 rounded-md shadow">Launch Demo</a>
          </nav>
        </div>
      </header>

      <Hero />

      <section id="features" className="py-20">
        <div className="container">
          <Features />
        </div>
      </section>

      <Footer />
    </main>
  )
}
