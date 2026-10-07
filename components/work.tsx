import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Eyebrow, SectionTitle } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Project = {
  id: string
  name: string
  initials: string
  category: string
  headline: string
  description: string
  built: string[]
  tags: string[]
  url?: string
  image: string
  theme: {
    card: string
    text: string
    muted: string
    badge: string
    check: string
    tag: string
    button: string
  }
}

const projects: Project[] = [
  {
    id: 'examsaver',
    name: 'ExamSaver',
    initials: 'ES',
    category: 'EdTech · AI',
    headline: 'AI that turns lecture notes into flashcards, quizzes and summaries.',
    description:
      'Students upload PDFs, photos of textbook pages, pasted text or voice recordings, and ExamSaver builds their study material in seconds.',
    built: [
      'AI generation of flashcards, MCQs and summaries from PDFs, images, text and voice',
      'Spaced-repetition flashcards and instantly scored practice quizzes',
      'Real-time quiz battles and club competitions with live leaderboards',
      'Voice notes transcribed straight into study material',
    ],
    tags: ['Web app', 'Android', 'iOS', 'Flutter', 'Next.js', 'Generative AI'],
    url: 'https://examsaverapp.com',
    image: '/work/examsaver.png',
    theme: {
      card: 'bg-[#2a1f7a]',
      text: 'text-white',
      muted: 'text-indigo-200',
      badge: 'bg-teal-400 text-[#2a1f7a]',
      check: 'bg-teal-400/20 text-teal-300',
      tag: 'border-white/20 text-indigo-100',
      button: 'bg-teal-400 text-[#1b1450] hover:bg-teal-300',
    },
  },
  {
    id: 'fasdex',
    name: 'Fasdex',
    initials: 'F',
    category: 'Food delivery · Logistics',
    headline: 'Food delivery for Calabar, tracked live from kitchen to door.',
    description:
      'Fasdex connects customers, local restaurants and delivery riders on one platform. Customers order in seconds and follow their rider on the map, restaurants manage incoming orders, and riders deliver and get paid.',
    built: [
      'Customer, restaurant and rider apps, plus an admin portal to run it all',
      "Live GPS tracking that shares the rider's location during each delivery",
      'Paystack payments, and bank payouts for riders',
      'Rider ID verification and push notifications',
    ],
    tags: ['Web app', 'Android', 'iOS', 'Supabase', 'Paystack', 'Firebase'],
    url: 'https://fasdex.ng',
    image: '/work/fasdex.png',
    theme: {
      card: 'bg-[#fff1e3]',
      text: 'text-brand-navy',
      muted: 'text-slate-600',
      badge: 'bg-orange-500 text-white',
      check: 'bg-orange-500/15 text-orange-600',
      tag: 'border-orange-200 text-slate-700',
      button: 'bg-orange-500 text-white hover:bg-orange-600',
    },
  },
  {
    id: 'kolejswap',
    name: 'KolejSwap',
    initials: 'KS',
    category: 'Marketplace · Fintech',
    headline: "Nigeria's campus marketplace, with escrow payments built in.",
    description:
      'University students buy, sell and swap textbooks, laptops and hostel essentials with verified students on 50+ campuses. Every payment is held until the buyer confirms delivery.',
    built: [
      'Marketplace with listings by category and university',
      'NIN identity verification for every student',
      'Escrow checkout with Paystack: sellers are paid when buyers confirm',
      'Buyer-to-seller chat to agree prices and campus meetups',
    ],
    tags: ['Web app', 'Mobile app', 'Next.js', 'Flutter', 'Paystack'],
    url: 'https://kolejswap.com',
    image: '/work/kolejswap.png',
    theme: {
      card: 'bg-[#0f5a32]',
      text: 'text-white',
      muted: 'text-emerald-100',
      badge: 'bg-white text-[#0f5a32]',
      check: 'bg-brand-orange/20 text-brand-orange',
      tag: 'border-white/20 text-emerald-50',
      button: 'bg-white text-[#0f5a32] hover:bg-emerald-50',
    },
  },
  {
    id: 'eleosgate',
    name: 'Eleos Gate',
    initials: 'EG',
    category: 'Retail · Pharmacy',
    headline: 'An offline-first point of sale for a busy pharmacy counter.',
    description:
      'Eleos Gate runs the counter and the stockroom at Eleosgate Pharmacy. It works fully offline, with optional cloud backup, so sales keep going when the internet doesn\u2019t.',
    built: [
      'Fast checkout: search or scan a barcode, build the cart, take cash or transfer and print a receipt',
      'Inventory with cost and selling prices, reorder levels and expiry dates',
      'Low-stock, expiring and expired filters so nothing is missed',
      'Sales history, a daily revenue dashboard, and PIN login with a lock screen for shared counters',
    ],
    tags: ['Web app', 'Works offline', 'Next.js', 'Supabase'],
    image: '/work/eleosgate.png',
    theme: {
      card: 'bg-[#e9f6ea]',
      text: 'text-brand-navy',
      muted: 'text-slate-600',
      badge: 'bg-[#14532d] text-white',
      check: 'bg-emerald-600/15 text-emerald-700',
      tag: 'border-emerald-200 text-slate-700',
      button: 'bg-[#14532d] text-white hover:bg-[#166534]',
    },
  },
]

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-20 bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>Our work</Eyebrow>
            <SectionTitle id="work-title" light="Products we've" bold="designed and built" />
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600 text-pretty">
            From AI study apps and food delivery to campus marketplaces and pharmacy systems, here is some of
            what our team has designed and built for the web, Android and iOS.
          </p>
        </div>

        <nav aria-label="Projects" className="mt-12 flex flex-wrap gap-2">
          {projects.map((p) => (
            <a
              key={p.id}
              href={`#project-${p.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-blue/40"
            >
              <span
                className={cn('flex size-5 items-center justify-center rounded text-[9px] font-bold', p.theme.badge)}
                aria-hidden="true"
              >
                {p.initials}
              </span>
              {p.name}
            </a>
          ))}
        </nav>

        <ol className="mt-8 flex flex-col gap-8">
          {projects.map((p, i) => (
            <li key={p.id} id={`project-${p.id}`} className="scroll-mt-24">
              <article
                className={cn(
                  'grid items-center gap-10 overflow-hidden rounded-3xl p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14',
                  p.theme.card,
                  p.theme.text,
                )}
              >
                <div className={cn(i % 2 === 1 && 'lg:order-2')}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          'flex size-11 items-center justify-center rounded-xl text-sm font-extrabold',
                          p.theme.badge,
                        )}
                        aria-hidden="true"
                      >
                        {p.initials}
                      </span>
                      <div>
                        <p className={cn('text-[11px] font-bold uppercase tracking-[0.18em]', p.theme.muted)}>
                          {p.category}
                        </p>
                        <h3 className="text-2xl font-extrabold tracking-tight">{p.name}</h3>
                      </div>
                    </div>
                    <span className={cn('text-sm font-medium tabular-nums', p.theme.muted)}>
                      {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="mt-8 text-2xl font-semibold leading-snug tracking-tight text-balance sm:text-3xl">
                    {p.headline}
                  </p>
                  <p className={cn('mt-4 leading-relaxed text-pretty', p.theme.muted)}>{p.description}</p>

                  <h4 className={cn('mt-8 text-xs font-bold uppercase tracking-[0.18em]', p.theme.muted)}>
                    What we built
                  </h4>
                  <ul className="mt-4 flex flex-col gap-3">
                    {p.built.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] leading-relaxed">
                        <span
                          className={cn(
                            'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                            p.theme.check,
                          )}
                        >
                          <Check className="size-3" aria-hidden="true" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-8 flex flex-wrap gap-2" aria-label="Platforms and stack">
                    {p.tags.map((t) => (
                      <li key={t} className={cn('rounded-full border px-3 py-1 text-xs font-medium', p.theme.tag)}>
                        {t}
                      </li>
                    ))}
                  </ul>

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors',
                        p.theme.button,
                      )}
                    >
                      Visit {p.url.replace('https://', '')}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  )}
                </div>

                <div className={cn('relative aspect-[4/3] overflow-hidden rounded-2xl', i % 2 === 1 && 'lg:order-1')}>
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`${p.name} product screens`}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                  />
                </div>
              </article>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-navy"
          >
            See all our work
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <p className="text-sm text-slate-500">7 more projects, including Kairos, PharmaCare, IHESRI</p>
        </div>
      </div>
    </section>
  )
}
