import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-rose-50 to-pink-50">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-300/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-pink-300/30 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 pt-10 text-center">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-rose-700 ring-1 ring-rose-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-lg">🌸</span>
          Share love in bloom
        </motion.span>

        <motion.h1
          className="mt-2 text-balance text-4xl font-extrabold leading-tight text-rose-900 sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Send playful, digital flower bouquets
          <br className="hidden sm:block" />
          to the people you love
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg text-rose-700/80 md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A fun little way to brighten someone’s day with animated blossoms, sweet notes, and a sprinkle of magic.
        </motion.p>

        <motion.div
          className="mt-4 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-white shadow-lg shadow-rose-600/30 transition hover:scale-[1.02] hover:bg-rose-700 active:scale-100"
          >
            Download the app
            <span className="transition-transform group-hover:translate-x-0.5">➜</span>
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-5 py-3 text-rose-700 ring-1 ring-rose-200 backdrop-blur transition hover:bg-white"
          >
            Try a bouquet
            <span>💐</span>
          </a>
        </motion.div>
      </div>

      {/* Spline 3D Animation */}
      <div className="relative z-0 mx-auto mt-8 h-[380px] w-full max-w-5xl px-4 sm:h-[460px] md:h-[520px]">
        <div className="absolute inset-0 overflow-hidden rounded-3xl ring-1 ring-rose-200/60">
          <Spline scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient overlay for contrast - doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-50/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
