import {
  ActivitiesSection,
  AudienceSection,
  WelcomeSection,
} from './components/main-sections'
import { HeroSection } from './components/hero-section'
import { NoticeSection } from './components/notice-section'
import { SiteFooter } from './components/site-footer'
import { SiteHeader } from './components/site-header'
import { StatsSection } from './components/stats-section'

function App() {
  return (
    <div className="min-h-svh bg-slate-50 text-slate-900 transition-colors duration-700 dark:bg-[#171b24] dark:text-slate-100">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-2 md:px-8">
        <HeroSection />
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[radial-gradient(circle,_rgba(100,116,139,0.16)_1px,_transparent_1px)] bg-[length:44px_44px] dark:bg-[radial-gradient(circle,_rgba(148,163,184,0.16)_1px,_transparent_1px)]">
          <div className="mx-auto max-w-5xl space-y-24 px-10 py-10 md:space-y-28 md:px-12 md:py-12">
            <WelcomeSection />
            <ActivitiesSection />
            <AudienceSection />
            <NoticeSection />
            <StatsSection />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
