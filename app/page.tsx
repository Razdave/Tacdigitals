import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { NavyBackdrop } from '@/components/navy-backdrop'
import { FeatureStrip } from '@/components/feature-strip'
import { Services } from '@/components/services'
import { Work } from '@/components/work'
import { About } from '@/components/about'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { CtaBanner } from '@/components/cta-banner'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { ChatWidget } from '@/components/chat-widget'

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <div className="relative overflow-hidden bg-brand-navy pt-20 text-white">
          <NavyBackdrop />
          <div className="relative">
            <Hero />
          </div>
        </div>
        <FeatureStrip />
        <Services />
        <Work />
        <About />
        <Process />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <SiteFooter />
      <ChatWidget />
    </div>
  )
}
