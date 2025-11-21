import React from 'react'
import { Heart, Flower2, Sparkles, MessageSquareHeart } from 'lucide-react'

const features = [
  {
    icon: <Flower2 className="h-6 w-6 text-rose-600" />,
    title: 'Build a bouquet',
    desc: 'Pick flowers, colors, and animated flourishes to match your vibe.'
  },
  {
    icon: <MessageSquareHeart className="h-6 w-6 text-rose-600" />,
    title: 'Add a love note',
    desc: 'Write something sweet. We tuck it between the petals for a surprise.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-rose-600" />,
    title: 'Send with sparkle',
    desc: 'Deliver with confetti, ribbons, or gentle petals drifting on screen.'
  },
  {
    icon: <Heart className="h-6 w-6 text-rose-600" />,
    title: 'Reactions that bloom',
    desc: 'Watch hearts and flowers blossom when they open your gift.'
  }
]

export default function Features() {
  return (
    <section id="how" className="relative w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-rose-900 md:text-4xl">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-rose-700/80">A playful flow from picking petals to sending smiles.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-rose-100 bg-rose-50 p-5 shadow-sm transition hover:shadow-md">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-rose-100">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-rose-900">{f.title}</h3>
              <p className="mt-1 text-sm text-rose-700/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
