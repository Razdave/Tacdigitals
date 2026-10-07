import { ArrowRight, Mail } from 'lucide-react'
import { NavyBackdrop } from '@/components/navy-backdrop'

export function CtaBanner() {
  return (
    <section className="bg-white px-6 pt-24 lg:pt-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-navy px-8 py-16 text-center text-white sm:px-16 lg:py-20">
        <NavyBackdrop />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            <span className="font-light">Have an idea? </span>
            <span className="font-extrabold">
              Let&apos;s build it together<span className="text-brand-orange">.</span>
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Free initial consultation, transparent pricing and a team that stays with you after launch.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-4 font-semibold text-brand-navy transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:hello@tacdigitals.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold transition-colors hover:bg-white/5"
            >
              <Mail className="size-4" aria-hidden="true" />
              hello@tacdigitals.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
