import React from 'react'

export default function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-rose-600 text-white shadow-lg shadow-rose-600/30">💐</div>
          <span className="text-lg font-semibold text-rose-900">BloomLove</span>
        </a>

        <nav className="hidden items-center gap-6 text-rose-900/80 md:flex">
          <a className="hover:text-rose-900" href="#how">How it works</a>
          <a className="hover:text-rose-900" href="#">Pricing</a>
          <a className="hover:text-rose-900" href="#">Support</a>
        </nav>

        <a href="#" className="rounded-xl bg-rose-600 px-4 py-2 text-white shadow-md shadow-rose-600/30 transition hover:scale-[1.02] active:scale-100">Get the app</a>
      </div>
    </header>
  )
}
