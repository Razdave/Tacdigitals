import { ArrowRight, Check, Code2, Globe, Rocket, Smartphone } from 'lucide-react'
import { Eyebrow, SectionTitle } from '@/components/section-heading'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    text: 'Custom, responsive websites built with modern technologies for optimal performance and user experience.',
    points: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    text: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    points: ['iOS & Android', 'Cross-Platform', 'UI/UX Design', 'App Store Deploy'],
  },
  {
    icon: Code2,
    title: 'Custom Software',
    text: 'Tailored software solutions designed to streamline your business processes and boost productivity.',
    points: ['Custom Logic', 'Database Design', 'API Integration', 'Cloud Deployment'],
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    text: 'Rapid prototype development for startups to validate ideas and secure funding quickly.',
    points: ['Quick Turnaround', 'Market Validation', 'Scalable Architecture', 'Investor Ready'],
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-20 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <SectionTitle id="services-title" light="Services built for" bold="your growth" />
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600 text-pretty">
            From concept to deployment, we deliver comprehensive digital solutions that transform your
            business and exceed expectations.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text, points }, i) => (
            <li
              key={title}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-navy/5 lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-blue text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-5xl font-extralight text-slate-200 transition-colors group-hover:text-brand-orange/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-brand-navy">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[15px] text-slate-700">
                    <Check className="size-4 shrink-0 text-brand-orange" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 self-start font-semibold text-brand-blue"
              >
                Discuss your project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                <span className="sr-only">about {title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
