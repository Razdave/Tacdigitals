import { Check } from 'lucide-react'

const metrics = [
  { label: 'Revenue', value: '₦4.8M', change: '+12%' },
  { label: 'Orders', value: '1,284', change: '+8%' },
  { label: 'Customers', value: '962', change: '+15%' },
]

function CodeSnippet() {
  return (
    <div className="absolute -right-2 -top-14 z-20 hidden rounded-xl border border-white/10 bg-[#0a0f33] px-4 py-3 font-mono text-[11px] leading-relaxed shadow-2xl shadow-black/40 sm:block lg:-right-6">
      <pre>
        <code>
          <span className="text-brand-orange">await</span>{' '}
          <span className="text-white">tacdigitals.</span>
          <span className="text-sky-300">build</span>
          <span className="text-white">{'({'}</span>
          {'\n  '}
          <span className="text-slate-400">idea:</span>{' '}
          <span className="text-amber-200">{"'your product'"}</span>
          <span className="text-white">,</span>
          {'\n  '}
          <span className="text-slate-400">platforms:</span>{' '}
          <span className="text-white">[</span>
          <span className="text-emerald-300">{"'web'"}</span>
          <span className="text-white">, </span>
          <span className="text-emerald-300">{"'ios'"}</span>
          <span className="text-white">, </span>
          <span className="text-emerald-300">{"'android'"}</span>
          <span className="text-white">],</span>
          {'\n'}
          <span className="text-white">{'})'}</span>
        </code>
      </pre>
    </div>
  )
}

function RevenueChart() {
  return (
    <svg viewBox="0 0 400 110" className="h-28 w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d3a9c" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2d3a9c" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M5 85 C 60 75, 90 80, 130 60 S 190 40, 230 52 S 300 35, 330 28 S 380 15, 395 18 L 395 110 L 5 110 Z"
        fill="url(#area)"
      />
      <path
        d="M5 85 C 60 75, 90 80, 130 60 S 190 40, 230 52 S 300 35, 330 28 S 380 15, 395 18"
        fill="none"
        stroke="#2d3a9c"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M5 98 C 80 92, 160 85, 240 76 S 340 70, 395 52"
        fill="none"
        stroke="#f9a826"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Dashboard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/50">
      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="size-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="flex-1 truncate rounded-md border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-500">
          app.yourbusiness.com/dashboard
        </div>
      </div>

      <div className="flex">
        <aside className="hidden w-28 shrink-0 flex-col gap-4 bg-brand-navy p-4 sm:flex" aria-hidden="true">
          <span className="size-6 rounded-md bg-brand-orange" />
          <span className="mt-6 h-1.5 w-16 rounded-full bg-white/20" />
          <span className="h-1.5 w-12 rounded-full bg-white/70" />
          <span className="h-1.5 w-14 rounded-full bg-white/20" />
          <span className="h-1.5 w-10 rounded-full bg-white/20" />
          <span className="h-1.5 w-12 rounded-full bg-white/20" />
        </aside>

        <div className="min-w-0 flex-1 p-4 text-slate-900">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Overview
              </p>
              <p className="text-sm font-semibold">This month</p>
            </div>
            <span className="rounded-full bg-brand-blue px-2.5 py-1 text-[10px] font-semibold text-white">
              Export
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-slate-200 p-2.5">
                <p className="text-[10px] text-slate-400">{m.label}</p>
                <p className="mt-1 text-sm font-bold">{m.value}</p>
                <p className="text-[10px] font-medium text-emerald-600">{m.change}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 rounded-lg border border-slate-200 p-2">
            <RevenueChart />
          </div>

          <ul className="mt-2 flex flex-col gap-1.5" aria-hidden="true">
            {[true, false, true].map((paid, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5"
              >
                <span className="size-4 rounded-full bg-slate-200" />
                <span className="h-1.5 flex-1 rounded-full bg-slate-200" />
                {paid && (
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
                    Paid
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function DeployedBadge() {
  return (
    <div className="absolute -right-2 bottom-12 z-20 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2 shadow-xl shadow-black/20 sm:-right-4">
      <span className="flex size-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <Check className="size-3.5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-semibold text-slate-900">Deployed</p>
        <p className="text-[10px] text-slate-500">Live in production</p>
      </div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="absolute -bottom-10 -left-4 z-20 hidden w-36 rounded-[1.75rem] border-[5px] border-[#0a0f33] bg-white p-3 shadow-2xl shadow-black/50 sm:block lg:-left-12">
      <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-[#0a0f33]" aria-hidden="true" />
      <p className="text-[8px] text-slate-400">Order #2048</p>
      <p className="text-[11px] font-semibold text-slate-900">On its way</p>
      <div className="mt-2 rounded-lg bg-indigo-50/60 p-1 [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] [background-size:10px_10px]">
        <svg viewBox="0 0 100 70" className="h-16 w-full" aria-hidden="true">
          <path
            d="M10 60 C 25 45, 35 40, 50 35 S 75 32, 90 12"
            fill="none"
            stroke="#2d3a9c"
            strokeWidth="2"
            strokeDasharray="2 4"
            strokeLinecap="round"
          />
          <circle cx="10" cy="60" r="3.5" fill="#2d3a9c" />
          <circle cx="90" cy="12" r="3.5" fill="#f9a826" />
        </svg>
      </div>
      <div className="mt-2 flex gap-1" aria-hidden="true">
        <span className="h-1 flex-1 rounded-full bg-brand-blue" />
        <span className="h-1 flex-1 rounded-full bg-brand-blue" />
        <span className="h-1 flex-1 rounded-full bg-slate-200" />
      </div>
      <span className="mt-2.5 block rounded-full bg-brand-orange py-1.5 text-center text-[9px] font-semibold text-brand-navy">
        Track rider
      </span>
    </div>
  )
}

export function HeroMockup() {
  return (
    <div
      className="relative mx-auto mt-10 w-full max-w-xl lg:mt-0"
      role="img"
      aria-label="Preview of an analytics dashboard, mobile order tracking app, and deployment status built by Tacdigitals"
    >
      <CodeSnippet />
      <Dashboard />
      <DeployedBadge />
      <PhoneMockup />
    </div>
  )
}
