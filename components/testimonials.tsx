'use client'

import { useState } from 'react'
import { Pause, Play, Quote } from 'lucide-react'
import { Eyebrow, SectionTitle } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote:
      'Tacdigitals transformed our entire business. The new platform not only looks amazing but performs incredibly well. Our sales have tripled since launch!',
    name: 'Sarah Johnson',
    role: 'CEO, TechStyle Fashion (USA)',
    initials: 'SJ',
  },
  {
    quote:
      'Their team delivered our mobile app ahead of schedule and exceeded our expectations. Communication was seamless throughout the whole process.',
    name: 'David Lee',
    role: 'CTO, MapleTech (Canada)',
    initials: 'DL',
  },
  {
    quote:
      'We loved the transparent process and the results speak for themselves. Highly recommended for any business looking to scale up digitally.',
    name: 'Emily Carter',
    role: 'Marketing Director, BrightStart',
    initials: 'EC',
  },
]

const loop = [...testimonials, ...testimonials]

export function Testimonials() {
  const [paused, setPaused] = useState(false)

  return (
    <section aria-labelledby="testimonials-title" className="overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Testimonials</Eyebrow>
          <SectionTitle id="testimonials-title" light="What our" bold="clients say" />
          <p className="mt-4 text-slate-500">Press pause to stop the cards and read.</p>
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-blue sm:self-auto"
        >
          {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
          {paused ? 'Play' : 'Pause'}
        </button>
      </div>

      <div className="mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul
          className={cn(
            'flex w-max gap-6 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none',
            paused && '[animation-play-state:paused]',
          )}
        >
          {loop.map((t, i) => (
            <li
              key={`${t.name}-${i}`}
              aria-hidden={i >= testimonials.length}
              className="flex w-[340px] shrink-0 flex-col rounded-3xl border border-slate-200 bg-white p-8 sm:w-[400px]"
            >
              <Quote className="size-8 text-brand-orange" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 leading-relaxed text-slate-700">
                {`\u201C${t.quote}\u201D`}
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="font-bold text-brand-navy">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
