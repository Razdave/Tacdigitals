'use client'

import { useState } from 'react'
import { MessageCircle, Sparkles, X } from 'lucide-react'

export function ChatWidget() {
  const [open, setOpen] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {open && (
        <div
          role="dialog"
          aria-labelledby="chat-widget-title"
          className="w-[calc(100vw-3rem)] max-w-xs overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/40 animate-in fade-in slide-in-from-bottom-4"
        >
          <div className="flex items-center gap-3 bg-brand-blue px-4 py-4">
            <span className="flex size-10 items-center justify-center rounded-full bg-white/15 text-white">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <p id="chat-widget-title" className="text-sm font-semibold text-white">
                Tolu from Tacdigitals
              </p>
              <p className="flex items-center gap-1.5 text-xs text-white/75">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Online now
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="self-start rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="size-4" aria-hidden="true" />
              <span className="sr-only">Close chat</span>
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm leading-relaxed text-slate-700">
              {"Hi! 👋 Need help launching your dream app or website? I'm Tolu, your project specialist. Let's discuss your ideas!"}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <button
                type="button"
                className="flex-1 rounded-lg bg-brand-blue py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#24307f]"
              >
                Chat Now
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg px-5 py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex size-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-xl shadow-black/40 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="sr-only">{open ? 'Hide chat' : 'Open chat'}</span>
      </button>
    </div>
  )
}
