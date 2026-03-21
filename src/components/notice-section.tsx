import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../contexts/language-context'

function CloseIcon({ className }: { className?: string }) {
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
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export function NoticeSection() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const titleId = useId()

  useEffect(() => {
    if (openIndex === null) {
      return
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenIndex(null)
      }
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [openIndex])

  const openItem =
    openIndex !== null ? t.notice.items[openIndex] : undefined

  return (
    <section
      id="notices"
      className="scroll-mt-24 border-t border-slate-200 pt-8 sm:pt-10 dark:border-slate-700"
    >
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-lg font-medium text-[#6f9cff] sm:text-xl dark:text-[#93b5ff]">
          {t.notice.chapter}
        </h3>
        <p className="mb-6 text-balance text-3xl font-semibold leading-tight text-slate-900 sm:mb-8 sm:text-4xl md:text-5xl dark:text-slate-100">
          {t.notice.title}
        </p>
      </div>
      <ul className="mt-6 space-y-3">
        {t.notice.items.map((item, index) => (
          <li
            key={item.id}
            className="border-b border-slate-200 py-2 text-left text-base leading-relaxed text-pretty text-slate-700 [word-break:keep-all] sm:text-lg md:text-2xl dark:border-slate-700 dark:text-slate-300"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="w-full text-left text-slate-700 underline-offset-2 transition hover:text-accent hover:underline dark:text-slate-300"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>

      {openItem &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
            <button
              type="button"
              className="news-modal-backdrop-enter absolute inset-0 bg-slate-900/45 backdrop-blur-[2px] dark:bg-black/55"
              aria-label={t.notice.modalClose}
              onClick={() => setOpenIndex(null)}
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="news-modal-panel-enter relative z-10 flex max-h-[min(88vh,680px)] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-slate-200 bg-[#f8f8fb] shadow-2xl dark:border-slate-600 dark:bg-[#1e2430] sm:max-h-[min(85vh,640px)] sm:rounded-2xl"
            >
              <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-200 px-5 py-4 dark:border-slate-600">
                <h4
                  id={titleId}
                  className="text-balance pr-2 text-lg font-semibold leading-snug text-slate-900 sm:text-xl dark:text-slate-100"
                >
                  {openItem.title}
                </h4>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-slate-200/80 hover:text-slate-800 dark:hover:bg-slate-700/80 dark:hover:text-slate-100"
                  aria-label={t.notice.modalClose}
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
                <div className="space-y-4 text-base leading-relaxed text-pretty text-slate-700 [word-break:keep-all] sm:text-lg dark:text-slate-300">
                  {openItem.paragraphs.map((paragraph, i) => (
                    <p key={`${openItem.id}-${i}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="shrink-0 border-t border-slate-200 px-5 py-3 dark:border-slate-600">
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="w-full rounded-lg border border-slate-300 bg-white/80 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-500 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:bg-slate-700"
                >
                  {t.notice.modalClose}
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  )
}
