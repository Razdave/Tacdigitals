export function NavyBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(45,58,156,0.55),transparent_55%)]" />
      <div className="absolute -left-1/4 top-0 h-[160%] w-1/3 -rotate-[30deg] bg-gradient-to-b from-white/[0.04] to-transparent" />
      <div className="absolute left-[20%] top-0 h-[160%] w-1/4 -rotate-[30deg] bg-gradient-to-b from-white/[0.03] to-transparent" />
      <div className="absolute -top-20 left-[55%] h-[160%] w-1/3 -rotate-[30deg] bg-gradient-to-b from-[#3b4bc0]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
    </div>
  )
}
