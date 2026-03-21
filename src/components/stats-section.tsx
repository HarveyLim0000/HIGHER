const stats = [
  { value: '—', label: '등록 인원' },
  { value: '—', label: '동아리 평균 학번' },
  { value: '—', label: '동아리 나이' },
] as const

export function StatsSection() {
  return (
    <section id="stats" className="scroll-mt-24 space-y-5 border-t border-slate-200 pt-10 dark:border-slate-700">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          한눈으로 보는 HIGHER
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">최근 소식</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center border border-slate-200 px-3 py-6 text-center dark:border-slate-700 dark:bg-[#222834]"
          >
            <p className="text-3xl font-semibold tabular-nums text-slate-900 dark:text-slate-100">
              {value}
            </p>
            <p className="mt-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
              {label}
            </p>
          </div>
        ))}
      </div>
      <p className="text-right text-[11px] leading-relaxed text-slate-400 dark:text-slate-500 md:text-xs">
        *현 날짜 기준 수치이며, 정리되는 대로 반영됩니다.
      </p>
    </section>
  )
}
