const notices = [
  {
    title: '공지 제목을 여기에 입력하세요',
    count: 0,
    href: '#',
  },
  {
    title: '부원 모집 안내 (예시)',
    count: 0,
    href: '#',
  },
  {
    title: '활동 일정 안내 (예시)',
    count: 0,
    href: '#',
  },
] as const

export function NoticeSection() {
  return (
    <section
      id="notices"
      className="scroll-mt-24 border-t border-slate-200 pt-10 dark:border-slate-700"
    >
      <div className="space-y-1">
        <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400">
          04 - 공지
        </h3>
        <p className="text-5xl font-semibold text-slate-900 dark:text-slate-100">공지</p>
        <p className="text-xl text-slate-500 dark:text-slate-400">최근 안내 사항</p>
      </div>
      <ul className="mt-6 space-y-3">
        {notices.map(({ title, count, href }) => (
          <li
            key={title}
            className="border-b border-slate-200 py-2 text-left text-2xl text-slate-700 dark:border-slate-700 dark:text-slate-300"
          >
            <a
              href={href}
              className="leading-relaxed text-slate-700 dark:text-slate-300 underline-offset-2 hover:text-accent hover:underline"
            >
              {title}{' '}
              {count > 0 && (
                <span className="whitespace-nowrap text-slate-600 dark:text-slate-400">
                  [{count}]
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
