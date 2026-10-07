'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

const fieldClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] text-brand-navy placeholder:text-slate-400 outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10'

function Label({ htmlFor, children, required }: { htmlFor: string; children: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-brand-navy">
      {children}
      {required && (
        <span className="text-red-500" aria-hidden="true">
          {' *'}
        </span>
      )}
    </label>
  )
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 p-10 text-center shadow-xl shadow-brand-navy/5"
      >
        <CheckCircle2 className="size-14 text-emerald-500" aria-hidden="true" />
        <h3 className="mt-6 text-2xl font-bold text-brand-navy">Message sent</h3>
        <p className="mt-3 max-w-sm text-slate-600">{state.message}</p>
      </div>
    )
  }

  const err = state.errors ?? {}

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-navy/5 sm:p-10"
    >
      <h3 className="text-2xl font-bold tracking-tight text-brand-navy">Tell us about your project</h3>
      <p className="mt-1 text-slate-500">Share a few details and our team will get back to you.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>
            Full name
          </Label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="e.g. Ada Okafor"
            aria-invalid={!!err.name}
            aria-describedby={err.name ? 'name-error' : undefined}
            className={cn(fieldClass, err.name && 'border-red-400')}
          />
          {err.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-600">
              {err.name}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="email" required>
            Email address
          </Label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!err.email}
            aria-describedby={err.email ? 'email-error' : undefined}
            className={cn(fieldClass, err.email && 'border-red-400')}
          />
          {err.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-600">
              {err.email}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="company">Company name</Label>
          <input id="company" name="company" autoComplete="organization" placeholder="Optional" className={fieldClass} />
        </div>
        <div>
          <Label htmlFor="type">Project type</Label>
          <select id="type" name="type" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            <option>Website Development</option>
            <option>Mobile App Development</option>
            <option>Custom Software</option>
            <option>MVP Development</option>
            <option>Consultation</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional, e.g. 0803 123 4567"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="details" required>
            Project details
          </Label>
          <textarea
            id="details"
            name="details"
            rows={5}
            required
            placeholder="Tell us about your project goals, timeline, and estimated budget"
            aria-invalid={!!err.details}
            aria-describedby={err.details ? 'details-error' : undefined}
            className={cn(fieldClass, 'resize-y', err.details && 'border-red-400')}
          />
          {err.details && (
            <p id="details-error" className="mt-1.5 text-sm text-red-600">
              {err.details}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-4 font-semibold text-white transition-colors hover:bg-brand-navy disabled:opacity-70"
      >
        {pending ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        {pending ? 'Sending...' : 'Send message'}
      </button>
      {state.status === 'error' && (
        <p role="alert" className="mt-3 text-center text-sm text-red-600">
          {state.message}
        </p>
      )}
    </form>
  )
}
