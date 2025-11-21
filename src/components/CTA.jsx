import React from 'react'

export default function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-rose-600 to-pink-600 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to send a bouquet?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/90">Download the app and start crafting playful, heartfelt bouquets in seconds.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="rounded-xl bg-white px-5 py-3 font-medium text-rose-700 shadow-lg shadow-white/20 transition hover:scale-[1.02] active:scale-100">App Store</a>
          <a href="#" className="rounded-xl border border-white/30 bg-transparent px-5 py-3 font-medium text-white/95 backdrop-blur transition hover:border-white/60">Google Play</a>
        </div>
      </div>
    </section>
  )
}
