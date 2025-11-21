import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-rose-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="w-full bg-rose-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-rose-800/80">
          <p>© {new Date().getFullYear()} BloomLove — made with love and petals</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-rose-900">Privacy</a>
            <a href="#" className="hover:text-rose-900">Terms</a>
            <a href="#" className="hover:text-rose-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
