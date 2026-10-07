import { ArrowRight, GraduationCap, Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Website Development', href: '#services' },
      { label: 'Mobile App Development', href: '#services' },
      { label: 'Custom Software', href: '#services' },
      { label: 'MVP Development', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#about' },
      { label: 'Our work', href: '#work' },
      { label: 'How we work', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Store', href: '#store' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 md:flex-row md:items-end">
          <div className="max-w-md">
            <Logo inverted />
            <p className="mt-5 leading-relaxed text-slate-400">
              Transforming innovative ideas into powerful digital solutions. We build websites, mobile apps, and
              custom software that drive business growth.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <p className="text-2xl">
              <span className="font-light">Ready to </span>
              <span className="font-extrabold">get started?</span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-brand-orange px-6 py-3 font-semibold text-brand-navy md:self-auto"
            >
              Start a project
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{col.title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-slate-300 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Contact</h3>
            <ul className="mt-5 flex flex-col gap-3 text-slate-300">
              <li>
                <a href="mailto:hello@tacdigitals.com" className="flex items-center gap-2 hover:text-white">
                  <Mail className="size-4 text-brand-orange" aria-hidden="true" />
                  hello@tacdigitals.com
                </a>
              </li>
              <li>
                <a href="tel:+2348100823124" className="flex items-center gap-2 hover:text-white">
                  <Phone className="size-4 text-brand-orange" aria-hidden="true" />
                  +234 (810) 082-3124
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-brand-orange" aria-hidden="true" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>

          <a
            id="academy"
            href="#contact"
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-orange text-brand-navy">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <span className="mt-4 font-bold">Tacdigitals Academy</span>
            <span className="mt-1 text-sm leading-relaxed text-slate-400">
              Self-paced courses in web development, AI and design.
            </span>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
              Learn more
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-400 sm:flex-row">
          <p>{`\u00A9 ${new Date().getFullYear()} Tacdigitals. All rights reserved.`}</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
