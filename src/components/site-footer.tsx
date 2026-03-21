export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 pt-10 pb-14 dark:border-slate-700">
      <div className="mx-auto max-w-4xl text-left">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium text-accent">HIGHER</span>
          <span className="text-slate-600"> · </span>
          <span className="text-slate-700">건양대학교 알고리즘 · 개발 동아리</span>
        </p>
        <address className="mt-3 not-italic text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          <p className="text-slate-400">동아리방·연락처는 추후 안내 예정입니다.</p>
        </address>
        <p className="mt-6 text-[11px] text-slate-400 dark:text-slate-500">
          Copyright © {new Date().getFullYear()} HIGHER. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
