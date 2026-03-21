import { useEffect, useState } from 'react'

const navItems = {
  ko: [
    { label: '소개', href: '#welcome' },
    { label: '활동', href: '#activities' },
    { label: '지원', href: '#audience' },
    { label: '공지', href: '#notices' },
  ],
  en: [
    { label: 'About', href: '#welcome' },
    { label: 'Activities', href: '#activities' },
    { label: 'Apply', href: '#audience' },
    { label: 'Notice', href: '#notices' },
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

export function SiteHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const shouldUseDark = saved === 'dark'

    setIsDarkMode(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-[#f8f8fb]/45 backdrop-blur-lg transition-colors duration-700 dark:bg-[#171b24]/20 dark:backdrop-blur-xl">
      <div className="mx-auto grid max-w-5xl grid-cols-[1fr_auto_1fr] items-center px-5 py-2.5 md:px-6 md:py-3.5">
        <a
          href="/"
          className="justify-self-start text-4xl font-bold leading-none text-slate-900 no-underline md:text-5xl dark:text-slate-100"
          aria-label="HIGHER 홈"
        >
          <span className="self-center tracking-wide md:tracking-wider">
            HIGHER
          </span>
        </a>
        <nav className="flex items-center justify-center gap-x-5 text-base font-medium text-slate-700 md:gap-x-8 md:text-lg dark:text-slate-300">
          {navItems[isEnglish ? 'en' : 'ko'].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="shrink-0 text-slate-700 no-underline transition hover:text-accent dark:text-slate-300"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-self-end gap-1.5">
          <button
            type="button"
            className="rounded-md p-1 text-slate-700 transition hover:text-accent dark:text-slate-300"
            aria-label={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 md:h-7 md:w-7" />
            ) : (
              <MoonIcon className="h-6 w-6 md:h-7 md:w-7" />
            )}
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-1 text-slate-700 no-underline transition hover:text-accent dark:text-slate-300"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-6 w-6 md:h-7 md:w-7" />
          </a>
          <button
            type="button"
            className="rounded-md px-3.5 py-2 text-[17px] font-semibold leading-none text-slate-700 transition hover:text-accent dark:text-slate-300"
            onClick={() => setIsEnglish((prev) => !prev)}
            aria-label="영어/한국어 전환"
          >
            {isEnglish ? 'EN' : 'KR'}
          </button>
        </div>
      </div>
    </header>
  )
}
