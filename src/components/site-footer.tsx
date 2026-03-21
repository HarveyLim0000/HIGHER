import { useLanguage } from '../contexts/language-context'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-slate-100/70 to-slate-200/75 pt-5 pb-7 dark:border-slate-700 dark:bg-gradient-to-b dark:from-[#141a26]/85 dark:to-[#101622]/92">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 text-left sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:px-6">
        <address className="not-italic text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <p className="text-xl font-medium sm:text-2xl">HIGHER</p>
          <p className="mt-2">
            {t.footer.tel}
            {': '}
            <a
              href="tel:01084238751"
              className="underline-offset-2 hover:underline"
            >
              010-8423-8751
            </a>
          </p>
          <p>
            {t.footer.email}
            {': '}
            <a
              href="mailto:darvyna0001@gmail.com"
              className="break-all underline-offset-2 hover:underline"
            >
              darvyna0001@gmail.com
            </a>
          </p>
        </address>
        <p className="w-full text-left text-sm text-slate-600 sm:w-auto sm:text-right dark:text-slate-400">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
