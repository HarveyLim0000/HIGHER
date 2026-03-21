import { useLanguage } from '../contexts/language-context'
import {
  CLUB_MEMBER_COUNT,
  formatAverageStudentId,
  getDaysSinceFounded,
} from '../lib/club-stats'

export function StatsSection() {
  const { locale, t } = useLanguage()
  const daysSinceFounded = getDaysSinceFounded()

  const stats = [
    {
      value: `${CLUB_MEMBER_COUNT}${t.stats.memberSuffix}`,
      label: t.stats.labelMembers,
    },
    {
      value: formatAverageStudentId(locale),
      label: t.stats.labelAvgId,
    },
    {
      value: `${daysSinceFounded}${t.stats.daySuffix}`,
      label: t.stats.labelAge,
    },
  ] as const

  return (
    <section
      id="stats"
      className="scroll-mt-24 space-y-4 border-t border-slate-200 pt-8 sm:pt-10 dark:border-slate-700"
    >
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-lg font-medium text-[#6f9cff] sm:text-xl dark:text-[#93b5ff]">
          {t.stats.chapter}
        </h3>
        <h2 className="mb-6 text-balance text-3xl font-semibold leading-tight text-slate-900 sm:mb-8 sm:text-4xl md:text-5xl dark:text-slate-100">
          {t.stats.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center border border-slate-200 px-3 py-5 text-center sm:py-6 dark:border-slate-700 dark:bg-[#222834]"
          >
            <p className="text-4xl font-semibold tabular-nums text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-100">
              {value}
            </p>
            <p className="mt-2 text-base leading-snug text-slate-500 sm:text-lg md:text-xl dark:text-slate-400">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
