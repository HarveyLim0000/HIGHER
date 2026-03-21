import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useLanguage } from '../contexts/language-context'

type FontSample = {
  fontFamily: string
  fontWeight: string
  fontStyle: string
  letterSpacing: string
}

/** 컨테이너 너비에 맞는 최대 글자 크기(px). flex·자간으로 늘리지 않음. */
function findFontSizeToFitWidth(
  text: string,
  targetWidthPx: number,
  sample: FontSample,
): number {
  if (targetWidthPx <= 4) {
    return 16
  }
  const el = document.createElement('span')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  el.style.top = '0'
  el.style.whiteSpace = 'nowrap'
  el.style.fontFamily = sample.fontFamily
  el.style.fontWeight = sample.fontWeight
  el.style.fontStyle = sample.fontStyle
  el.style.letterSpacing = sample.letterSpacing
  el.textContent = text
  document.body.appendChild(el)

  let lo = 4
  let hi = 240
  for (let i = 0; i < 28; i++) {
    const mid = (lo + hi) / 2
    el.style.fontSize = `${mid}px`
    const w = el.offsetWidth
    if (w <= targetWidthPx) {
      lo = mid
    } else {
      hi = mid
    }
  }
  document.body.removeChild(el)
  return Math.min(lo, 220)
}

/**
 * 모바일: 세 줄이 같은 가로폭 안에서 글자 크기만 달리해 좌·우 끝이 맞도록 함.
 */
function HeroMobileFitLines() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [sizes, setSizes] = useState<[number, number, number]>([22, 28, 24])

  const texts = useMemo(
    () =>
      [t.hero.taglineA, t.hero.taglineMobileMid, t.hero.taglineMobileLast] as const,
    [t.hero.taglineA, t.hero.taglineMobileMid, t.hero.taglineMobileLast],
  )

  const recalc = useCallback(() => {
    const container = containerRef.current
    if (!container) {
      return
    }
    const w = container.clientWidth
    if (w < 8) {
      return
    }
    const cs = getComputedStyle(container)
    const sample: FontSample = {
      fontFamily: cs.fontFamily,
      fontWeight: cs.fontWeight,
      fontStyle: cs.fontStyle,
      letterSpacing: cs.letterSpacing,
    }
    setSizes([
      findFontSizeToFitWidth(texts[0], w, sample),
      findFontSizeToFitWidth(texts[1], w, sample),
      findFontSizeToFitWidth(texts[2], w, sample),
    ])
  }, [texts])

  useLayoutEffect(() => {
    recalc()
    const raf = requestAnimationFrame(recalc)
    const ro = new ResizeObserver(() => recalc())
    const el = containerRef.current
    if (el) {
      ro.observe(el)
    }
    window.addEventListener('resize', recalc)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('resize', recalc)
    }
  }, [recalc])

  const staggerMs = 220

  return (
    <div ref={containerRef} className="w-full text-left">
      {texts.map((text, i) => (
        <span
          key={`${text}-${i}`}
          className={`hero-line-up block whitespace-nowrap font-semibold leading-[0.92] tracking-tight text-slate-900 dark:text-slate-100 ${
            i > 0 ? 'mt-1' : ''
          }`}
          style={{
            fontSize: `${sizes[i]}px`,
            animationDelay: `${i * staggerMs}ms`,
          }}
        >
          {text}
        </span>
      ))}
    </div>
  )
}

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="-mt-32 pt-36 pb-12 sm:pt-40 md:-mt-36 md:pt-44 md:pb-20">
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-x-hidden bg-[#f8f8fb] px-5 pt-24 pb-36 text-center transition-colors duration-700 dark:bg-[#1f2430] sm:px-8 sm:pt-28 sm:pb-44 md:px-12 md:pt-32 md:pb-56">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[84%] bg-gradient-to-t from-[#6f9cff]/70 via-[#93b5ff]/45 to-transparent dark:from-[#3f67bc]/70 dark:via-[#315291]/45" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[92%] opacity-70 dark:opacity-45"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, rgba(148,163,184,0.3) 0, rgba(148,163,184,0.3) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(to bottom, rgba(148,163,184,0.28) 0, rgba(148,163,184,0.28) 1px, transparent 1px, transparent 28px)',
            maskImage:
              'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.2) 82%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.2) 82%, rgba(0,0,0,0) 100%)',
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[88%] bg-gradient-to-t from-white/55 via-white/15 to-transparent dark:from-[#1f2430]/30 dark:via-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-slate-50 dark:to-[#171b24]" />

        <div className="relative z-10">
          <h1 className="mt-10 font-semibold leading-[0.92] tracking-tight text-slate-900 md:mt-14 md:text-[clamp(3.4rem,12.5vw,7.2rem)] md:leading-[0.8] dark:text-slate-100">
            <div className="mx-auto w-full max-w-[min(100%,21rem)] text-left min-[400px]:max-w-[min(100%,26rem)] md:hidden">
              <HeroMobileFitLines />
            </div>
            <span className="hidden md:block md:text-[clamp(3.4rem,12.5vw,7.2rem)]">
              <span className="hero-line-up block" style={{ animationDelay: '0ms' }}>
                {t.hero.taglineA}
              </span>
              <span
                className="hero-line-up block"
                style={{ animationDelay: '220ms' }}
              >
                {t.hero.taglineB}
              </span>
            </span>
          </h1>
          <p className="hero-subtitle-fade mx-auto mt-5 max-w-[min(100%,36rem)] px-1 text-base leading-relaxed text-pretty text-slate-600 dark:text-slate-300 sm:text-lg md:mt-5 md:max-w-3xl md:text-base">
            <span className="md:hidden">
              {t.hero.subtitleMobileTop}
              <br />
              {t.hero.subtitleMobileBottom}
            </span>
            <span className="hidden md:inline">{t.hero.subtitle}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
