import { useLanguage } from '../contexts/language-context'

const sectionClass =
  'scroll-mt-24 space-y-3 border-t border-slate-200 pt-8 sm:space-y-4 sm:pt-10 dark:border-slate-700'

const chapterClass =
  'text-lg font-medium text-[#6f9cff] sm:text-xl dark:text-[#93b5ff]'

const headingClass =
  'mb-6 text-balance text-3xl font-semibold leading-tight text-slate-900 sm:mb-8 sm:text-4xl md:text-5xl dark:text-slate-100'

const bodyClass =
  'text-base leading-relaxed text-pretty text-slate-700 [word-break:keep-all] sm:text-lg md:text-2xl dark:text-slate-300'

export function WelcomeSection() {
  const { t } = useLanguage()

  return (
    <section id="welcome" className={sectionClass}>
      <h3 className={chapterClass}>{t.welcome.chapter}</h3>
      <h2 className={headingClass}>{t.welcome.title}</h2>
      <div className={`space-y-4 ${bodyClass}`}>
        <p>{t.welcome.body}</p>
      </div>
    </section>
  )
}

export function ActivitiesSection() {
  const { t } = useLanguage()

  return (
    <section id="activities" className={sectionClass}>
      <h3 className={chapterClass}>{t.activities.chapter}</h3>
      <h2 className={headingClass}>{t.activities.title}</h2>
      <ul className="space-y-5 sm:space-y-6">
        {t.activities.items.map((item) => (
          <li key={item.title} className="list-none">
            <p className="text-2xl font-semibold text-balance text-slate-900 sm:text-3xl dark:text-slate-100">
              {item.title}
            </p>
            <p className={`mt-2 ${bodyClass}`}>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function AudienceSection() {
  const { t } = useLanguage()

  return (
    <section id="audience" className={sectionClass}>
      <h3 className={chapterClass}>{t.audience.chapter}</h3>
      <h2 className={headingClass}>{t.audience.title}</h2>
      <ul className="space-y-2 text-base leading-relaxed text-pretty text-slate-700 [word-break:keep-all] sm:text-lg md:text-2xl dark:text-slate-300">
        {t.audience.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  )
}

export function ApplySection() {
  const { t } = useLanguage()

  return (
    <section id="apply" className={sectionClass}>
      <h3 className={chapterClass}>{t.apply.chapter}</h3>
      <h2 className={headingClass}>{t.apply.title}</h2>
      <dl className="space-y-6 sm:space-y-7">
        <div>
          <dt className="text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100">
            {t.apply.periodLabel}
          </dt>
          <dd className={`mt-2 ${bodyClass}`}>{t.apply.period}</dd>
        </div>
        <div>
          <dt className="text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100">
            {t.apply.feeLabel}
          </dt>
          <dd className={`mt-2 ${bodyClass}`}>{t.apply.fee}</dd>
        </div>
        <div>
          <dt className="text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100">
            {t.apply.applyLabel}
          </dt>
          <dd className="mt-2">
            <a
              href={t.apply.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block ${bodyClass} text-[#6f9cff] underline underline-offset-2 transition hover:text-[#5a8aef] dark:text-[#93b5ff] dark:hover:text-[#a8c4ff]`}
            >
              {t.apply.applyLinkText}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100">
            {t.apply.contactLabel}
          </dt>
          <dd className={`mt-2 ${bodyClass}`}>{t.apply.contact}</dd>
        </div>
      </dl>
    </section>
  )
}
