export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-slate-100/70 to-slate-200/75 pt-5 pb-7 dark:border-slate-700 dark:bg-gradient-to-b dark:from-[#141a26]/85 dark:to-[#101622]/92">
      <div className="mx-auto flex max-w-4xl items-end justify-between gap-6 text-left">
        <address className="not-italic text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <p className="text-2xl font-medium ">
            HIGHER 
          </p>
          <p className="mt-2">
            Tel :
            {' '}
            <a
              href="tel:01084238751"
              className="underline-offset-2 hover:underline"
            >
              010-8423-8751
            </a>
          </p>
          <p>
            E-mail :
            {' '}
            <a
              href="mailto:darvyna0001@gmail.com"
              className="underline-offset-2 hover:underline"
            >
              darvyna0001@gmail.com
            </a>
          </p>
        </address>
        <p className="text-right text-sm text-slate-600 dark:text-slate-400">
          HIGHER © 2026 All rights reserved
        </p>
      </div>
    </footer>
  )
}
