import { cn } from '@/lib/utils'

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span
        className={cn(
          'flex size-8 items-center justify-center rounded-sm text-xl font-extrabold leading-none',
          inverted ? 'bg-white text-brand-navy' : 'bg-brand-navy text-white',
        )}
      >
        T
      </span>
      <span className="text-xl tracking-tight">
        <span className="font-medium">TAC</span>
        <span className="font-extrabold">DIGITALS</span>
      </span>
    </span>
  )
}
