'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Academy', href: '#academy' },
  { label: 'Store', href: '#store' },
  { label: 'Careers', href: '#careers' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        solid
          ? 'border-b border-slate-200 bg-white/95 text-brand-navy backdrop-blur'
          : 'border-b border-transparent bg-transparent text-white',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" aria-label="Tacdigitals home">
          <Logo inverted={!solid} />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    'text-[15px] font-medium transition-colors',
                    solid ? 'text-slate-600 hover:text-brand-navy' : 'text-slate-300 hover:text-white',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-brand-orange px-5 py-2.5 text-[15px] font-semibold text-brand-navy transition-transform hover:-translate-y-0.5 hover:bg-[#ffb53d] sm:inline-flex"
          >
            Start a project
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-10 items-center justify-center rounded-full lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-slate-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 font-semibold text-brand-navy"
              >
                Start a project
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
