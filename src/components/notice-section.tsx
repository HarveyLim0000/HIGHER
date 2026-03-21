import { useLanguage } from '../contexts/language-context'

export function NoticeSection() {
  const { t } = useLanguage()

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
            key={`notice-${index}`}
            className="border-b border-slate-200 py-2 text-left text-base leading-relaxed text-pretty text-slate-700 [word-break:keep-all] sm:text-lg md:text-2xl dark:border-slate-700 dark:text-slate-300"
          >
            <a
              href={item.href}
              className="text-slate-700 underline-offset-2 hover:text-accent hover:underline dark:text-slate-300"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
