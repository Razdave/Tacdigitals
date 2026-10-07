import { ArrowRight } from 'lucide-react'
import { Eyebrow, SectionTitle } from '@/components/section-heading'

const steps = [
  {
    title: 'Discover',
    text: 'We learn your goals, users and constraints, then agree the scope, timeline and a clear quote.',
  },
  { title: 'Design', text: 'We map the user journeys and design the interface. You approve it before we build.' },
  { title: 'Build', text: 'We develop in short cycles and show you working software as we go.' },
  {
    title: 'Launch & support',
    text: 'We test, deploy and monitor, then keep improving your product after launch.',
  },
]

export function Process() {
  return (
    <section aria-labelledby="process-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <SectionTitle id="process-title" light="From idea" bold="to launch" />
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              A simple, transparent process that keeps you in control at every step.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start rounded-full bg-brand-orange px-6 py-3.5 font-semibold text-brand-navy transition-transform hover:-translate-y-0.5 lg:self-auto"
          >
            Start a project
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <span className="flex size-12 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 text-xl font-bold text-brand-navy">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
