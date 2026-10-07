import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { Eyebrow, SectionTitle } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'

const channels = [
  { icon: Mail, label: 'Email us', value: 'hello@tacdigitals.com', href: 'mailto:hello@tacdigitals.com' },
  { icon: Phone, label: 'Call us', value: '+234 (810) 082-3124', href: 'tel:+2348100823124' },
  { icon: MapPin, label: 'Visit us', value: 'Lagos, Nigeria' },
]

const reasons = [
  'Free initial consultation',
  'Transparent pricing structure',
  '24/7 dedicated support',
  'Money-back guarantee',
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Contact us</Eyebrow>
          <SectionTitle id="contact-title" light="Let's start" bold="your project" />
          <p className="mt-5 text-lg leading-relaxed text-slate-600 text-pretty">
            Ready to transform your ideas into reality? Get in touch with our team and let&apos;s discuss how we
            can help you achieve your digital goals.
          </p>

          <ul className="mt-10 flex flex-col gap-3">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="flex size-12 items-center justify-center rounded-xl bg-indigo-50 text-brand-blue">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-500">{label}</span>
                    <span className="block font-bold text-brand-navy">{value}</span>
                  </span>
                </>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-colors hover:border-brand-blue/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="mt-8 rounded-2xl bg-indigo-50 p-6">
            <h3 className="font-bold text-brand-navy">Why work with us</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-2 text-[15px] text-slate-700">
                  <CheckCircle2 className="size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
