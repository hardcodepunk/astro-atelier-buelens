import React, { useEffect, useRef, useState } from "react"

export type WorkItem = {
  id: string | number
  title: string
  image: string
  href: string
  alt?: string
}

type Props = {
  items: WorkItem[]
  autoMs?: number
}

export default function FullscreenWorkSlider({ items, autoMs = 4000 }: Props) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const next = () => setIndex(i => (i + 1) % items.length)
  const prev = () => setIndex(i => (i - 1 + items.length) % items.length)

  // Autoplay
  useEffect(() => {
    if (items.length <= 1) return
    const id = window.setInterval(() => next(), autoMs)
    return () => clearInterval(id)
  }, [autoMs, items.length])

  // Swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev()
    touchStartX.current = null
  }

  const active = items[index]

  return (
    <section className="bg-white text-black py-16 px-6 md:px-10">
      <div
        className="relative mx-auto w-full max-w-6xl aspect-16/7 overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Image */}
        <img
          key={active.id}
          src={active.image}
          alt={active.alt || active.title}
          className="w-full h-full object-cover object-center"
        />

        {/* Title + button at bottom center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
          <h2 className="text-lg md:text-2xl font-light tracking-tight mb-3 drop-shadow">{active.title}</h2>
          <a
            href={active.href}
            className="inline-block rounded-full border border-white/60 hover:border-white transition px-8 py-2 text-xs uppercase tracking-widest bg-white/10 backdrop-blur-sm"
          >
            View
          </a>
        </div>

        {/* Soft gradient for readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20  pointer-events-none" />
      </div>

      {/* Thumbnails */}
      <div className="mt-10 flex justify-center gap-6 md:gap-8 flex-wrap">
        {items.map((it, i) => {
          const activeThumb = i === index
          return (
            <button key={it.id} onClick={() => setIndex(i)} className="flex flex-col items-center group">
              <div
                className={`overflow-hidden border transition-all duration-300 ${
                  activeThumb ? "border-black" : "border-transparent group-hover:border-black/30"
                }`}
              >
                <img src={it.image} alt={it.alt || it.title} className="w-20 h-14 md:w-28 md:h-20 object-cover" />
              </div>
              <span
                className={`mt-2 text-[10px] md:text-xs uppercase tracking-widest ${
                  activeThumb ? "text-black" : "text-neutral-500 group-hover:text-black/70"
                }`}
              >
                {it.title}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
