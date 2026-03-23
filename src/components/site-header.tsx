import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { useLanguage } from '../contexts/language-context'

function scrollToSection(href: string) {
  if (!href.startsWith('#')) {
    return
  }
  const id = href.slice(1)
  const el = document.getElementById(id)
  if (!el) {
    return
  }
  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
  window.history.replaceState(null, '', href)
}

function handleInPageNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith('#')) {
    return
  }
  event.preventDefault()
  scrollToSection(href)
}

const GITHUB_PROFILE_URL = 'https://github.com/HarveyLim0000'

const navItems = {
  ko: [
    { label: '소개', href: '#welcome' },
    { label: '활동', href: '#activities' },
    { label: '소식', href: '#notices' },
    { label: '지원', href: '#apply' },
  ],
  en: [
    { label: 'About', href: '#welcome' },
    { label: 'Activities', href: '#activities' },
    { label: 'News', href: '#notices' },
    { label: 'Apply', href: '#apply' },
  ],
} as const

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.43 7.9 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.01-2 0-.36-.12-.6-.26-.72-3.22-.36-3.9-1.55-3.9-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.31 1.2-3.12-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.8 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.59.23 2.77.11 3.06.75.81 1.2 1.85 1.2 3.12 0 4.45-2.7 5.44-5.29 5.73.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A10.48 10.48 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function MenuToggleIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  )
}

export function SiteHeader() {
  const { locale, toggleLocale, t } = useLanguage()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const shouldUseDark = saved === 'dark'

    setIsDarkMode(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      return
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  const closeMenu = () => setMenuOpen(false)

  const items = navItems[locale === 'en' ? 'en' : 'ko']

  const linkClass =
    'shrink-0 rounded-md px-1 py-1 text-slate-700 no-underline transition hover:text-accent dark:text-slate-300'

  const renderNavLink = (
    { label, href }: (typeof items)[number],
    onAfter?: () => void,
  ) => {
    const isExternal = href.startsWith('http')
    return (
      <a
        key={label}
        href={href}
        className={
          onAfter
            ? `${linkClass} block w-full py-3 text-left text-lg`
            : linkClass
        }
        {...(isExternal
          ? {
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {})}
        onClick={(e) => {
          if (href.startsWith('#')) {
            handleInPageNavClick(e, href)
          }
          onAfter?.()
        }}
      >
        {label}
      </a>
    )
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-[#f8f8fb]/45 backdrop-blur-lg transition-colors duration-700 dark:bg-[#171b24]/20 dark:backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-0 md:px-6 md:py-3.5">
        <a
          href="/"
          className="text-3xl font-bold leading-none text-slate-900 no-underline sm:text-4xl md:justify-self-start md:text-5xl dark:text-slate-100"
          aria-label={t.header.homeAria}
          onClick={closeMenu}
        >
          <span className="tracking-wide md:tracking-wider">HIGHER</span>
        </a>
        <nav
          aria-label={t.header.menuNavLabel}
          className="hidden items-center justify-center gap-x-5 text-base font-medium text-slate-700 md:flex md:gap-x-8 md:text-lg dark:text-slate-300"
        >
          {items.map((item) => renderNavLink(item))}
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-1.5 md:justify-self-end">
          <button
            type="button"
            className="rounded-md p-1 text-slate-700 transition hover:text-accent dark:text-slate-300"
            aria-label={
              isDarkMode ? t.header.themeToLight : t.header.themeToDark
            }
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 md:h-7 md:w-7" />
            ) : (
              <MoonIcon className="h-6 w-6 md:h-7 md:w-7" />
            )}
          </button>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-1 text-slate-700 no-underline transition hover:text-accent dark:text-slate-300"
            aria-label={t.header.githubProfileAria}
          >
            <GitHubIcon className="h-6 w-6 md:h-7 md:w-7" />
          </a>
          <button
            type="button"
            className="rounded-md px-2.5 py-2 text-base font-semibold leading-none text-slate-700 transition hover:text-accent sm:px-3.5 sm:text-[17px] dark:text-slate-300"
            onClick={toggleLocale}
            aria-label={t.header.toggleLang}
          >
            {locale === 'en' ? 'EN' : 'KR'}
          </button>
          <button
            type="button"
            className="rounded-md p-1.5 text-slate-700 transition hover:text-accent md:hidden dark:text-slate-300"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? t.header.menuClose : t.header.menuOpen}
          >
            <MenuToggleIcon
              open={menuOpen}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            tabIndex={-1}
            className="mobile-nav-backdrop-enter fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-[2px] md:hidden dark:bg-black/40"
            aria-hidden
            onClick={closeMenu}
          />
          <div
            id="mobile-nav-panel"
            className="mobile-nav-panel-enter absolute left-0 right-0 top-full z-50 border-b border-slate-200/90 bg-[#f8f8fb]/95 shadow-lg backdrop-blur-xl dark:border-slate-700/90 dark:bg-[#171b24]/95 md:hidden"
          >
            <nav
              aria-label={t.header.menuNavLabel}
              className="mx-auto flex max-w-5xl flex-col px-4 py-2 pb-5"
            >
              {items.map((item) => renderNavLink(item, closeMenu))}
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
