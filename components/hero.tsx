import { ArrowRight } from 'lucide-react'
import { HeroMockup } from '@/components/hero-mockup'

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-20">
      <div>
        <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white">
          <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          Premium Software Solutions
        </p>

        <h1 className="mt-8 text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          <span className="font-light">Build </span>
          <span className="font-extrabold">Premium</span>
          <br />
          <span className="font-extrabold">
            Software<span className="text-brand-orange">.</span>
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300 text-pretty">
          We transform innovative ideas into powerful digital solutions. From elegant websites to
          sophisticated mobile apps, we craft experiences that inspire and perform.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-4 text-base font-semibold text-brand-navy transition-transform hover:-translate-y-0.5 hover:bg-[#ffb53d]"
          >
            Start a project
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
          >
            Explore our services
          </a>
        </div>

        <dl className="mt-14 grid max-w-xl grid-cols-3 border-t border-white/10 pt-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={i > 0 ? 'border-l border-white/10 pl-4 sm:pl-6' : 'pr-4'}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-extrabold tracking-tight sm:text-4xl">{stat.value}</dd>
              <dd className="mt-1 text-sm text-slate-400 sm:text-[15px]">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <HeroMockup />
    </section>
  )
}
