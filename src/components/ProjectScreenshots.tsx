'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'

type ProjectScreenshotsProps = {
  images: string[]
  title: string
}

export default function ProjectScreenshots({ images, title }: ProjectScreenshotsProps) {
  const [index, setIndex] = useState(0)
  const count = images.length
  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + count) % count)
    },
    [count]
  )

  if (count === 0) return null

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex h-48 w-full transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        role="region"
        aria-roledescription="carousel"
        aria-label={`Скриншоты: ${title}`}
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-48 min-w-full shrink-0">
            <Image
              src={src}
              alt={`${title} — скриншот ${i + 1} из ${count}`}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
            aria-label="Предыдущий скриншот"
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
            aria-label="Следующий скриншот"
          >
            <ChevronRightIcon />
          </button>
          <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-pink-400' : 'w-1.5 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Скриншот ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
