import { Eyebrow, SectionTitle } from '@/components/section-heading'
import { NavyBackdrop } from '@/components/navy-backdrop'

const tech = ['React & Next.js', 'React Native', 'Node.js', 'Python', 'Cloud Solutions']

const stats = [
  { value: '50+', label: 'Expert developers' },
  { value: '7+', label: 'Years of experience' },
  { value: '200+', label: 'Successful projects' },
  { value: '24/7', label: 'Support available' },
]

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-20 overflow-hidden bg-brand-navy py-24 text-white lg:py-32"
    >
      <NavyBackdrop />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <Eyebrow dark>Who we are</Eyebrow>
          <SectionTitle id="about-title" dark light="Crafting Digital Excellence" bold="Since 2019" />
          <p className="mt-6 text-lg leading-relaxed text-slate-300 text-pretty">
            At Tacdigitals, we&apos;re passionate about transforming innovative ideas into powerful digital
            solutions. Our team of expert developers, designers, and strategists work closely with clients to
            deliver exceptional results.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-300 text-pretty">
            From startups seeking their first MVP to enterprises requiring complex software solutions, we bring
            technical expertise, creative vision, and unwavering commitment to every project.
          </p>
          <h3 className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Technologies we use</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <li key={t} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[15px]">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <dl className="grid grid-cols-2 gap-4 sm:gap-5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-4xl font-light tracking-tight sm:text-6xl">{s.value}</dd>
              <dd aria-hidden="true" className="mt-4 h-1 w-10 rounded-full bg-brand-orange" />
              <dd className="mt-4 text-sm text-slate-300 sm:text-base">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
