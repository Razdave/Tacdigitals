import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={cn(
        'flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]',
        dark ? 'text-slate-200' : 'text-brand-blue',
      )}
    >
      <span className="size-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionTitle({
  light,
  bold,
  dark = false,
  id,
}: {
  light: string
  bold: string
  dark?: boolean
  id?: string
}) {
  return (
    <h2
      id={id}
      className={cn(
        'mt-5 text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl',
        dark ? 'text-white' : 'text-brand-navy',
      )}
    >
      <span className="font-light">{light} </span>
      <span className="font-extrabold">{bold}</span>
    </h2>
  )
}
