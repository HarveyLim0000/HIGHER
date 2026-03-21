export function HeroSection() {
  return (
    <section className="-mt-32 pt-40 pb-14 md:-mt-36 md:pt-44 md:pb-20">
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#f8f8fb] px-8 pt-28 pb-44 text-center transition-colors duration-700 dark:bg-[#1f2430] md:px-12 md:pt-32 md:pb-56">
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
          <h1 className="mt-10 text-[clamp(3.4rem,12.5vw,7.2rem)] font-semibold leading-[0.8] tracking-tight text-slate-900 dark:text-slate-100 md:mt-14">
            <span className="block">HIGHER AND</span>
            <span className="block">HIGHER WE GO!</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
            더 높은 곳을 향해 끊임없이 함께 성장하는 곳, 건양대학교 동아리
            하이어입니다.
          </p>
        </div>
      </div>
    </section>
  )
}
