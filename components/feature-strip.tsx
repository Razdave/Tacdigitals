import { Headphones, Receipt, ShieldCheck, Zap } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Agile delivery', text: 'Fast, iterative development with regular updates.' },
  { icon: ShieldCheck, title: 'Quality assured', text: 'Rigorous testing before anything goes live.' },
  { icon: Receipt, title: 'Transparent pricing', text: 'Clear quotes with no hidden costs.' },
  { icon: Headphones, title: 'Ongoing support', text: 'Support and maintenance after launch.' },
]

export function FeatureStrip() {
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-7xl px-6">
      <ul className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-brand-navy/10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }, i) => (
          <li
            key={title}
            className={`flex items-start gap-4 p-6 ${i > 0 ? 'border-t border-slate-200 sm:border-t-0' : ''} ${
              i % 2 === 1 ? 'sm:border-l' : ''
            } ${i >= 2 ? 'sm:border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''} border-slate-200`}
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-brand-blue">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-bold text-brand-navy">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
