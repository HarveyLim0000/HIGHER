export function WelcomeSection() {
  return (
    <section id="welcome" className="scroll-mt-24 space-y-4">
      <h2 className="text-5xl font-semibold text-slate-900 dark:text-slate-100">
        소개
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          우리는 화려한 시작점이나 뛰어난 배경을 가진 사람들만 모인 곳이 아니라,
          각자의 위치에서 출발해 함께 논리적 사고의 정수인 알고리즘을 통해 문제 해결
          능력을 키워나가는 것을 목표로 합니다.
        </p>
      </div>
    </section>
  )
}

const activities = [
  {
    title: '알고리즘 세미나',
    body:
      '체계적인 스터디를 통해 자료구조, 알고리즘 이론을 마스터하고, 백준 등 다양한 플랫폼에서 문제 해결 능력을 기릅니다. 국내외 경진대회(ICPC 등) 참가를 목표로 함께 성장합니다. Codeforces와 AtCoder 등 인터넷 대회에도 참여합니다.',
  },
  {
    title: '정기 세미나',
    body:
      '개발 관련 이슈나 노하우 등을 공유하는 세미나입니다. HIGHER 신규회원을 위한 개발 입문 세미나와 코딩 테스트, 인턴십, 개발툴 등 다양한 주제를 다루고 있습니다.',
  },
  {
    title: '자유 프로젝트 협업',
    body: '생각을 현실로 직접 만들며 실전 경험을 쌓습니다.',
  },
] as const

export function ActivitiesSection() {
  return (
    <section id="activities" className="scroll-mt-24 space-y-5">
      <h2 className="text-5xl font-semibold text-slate-900 dark:text-slate-100">
        주요 활동
      </h2>
      <ul className="space-y-7">
        {activities.map(({ title, body }) => (
          <li key={title} className="list-none">
            <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
              <span className="mr-1.5">-</span>
              {title}
            </p>
            <p className="mt-2 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const audience = [
  '함께 배우고 성장하며, 사람들과 활발히 교류하고 싶은 분',
  'HIGHER의 일원으로 ICPC 참가를 목표로 도전하실 분',
  '노베이스라도 시작할 용기가 있는 분',
  '커피를 조금 많이 좋아하는 분 ☕',
] as const

export function AudienceSection() {
  return (
    <section id="audience" className="scroll-mt-24 space-y-4">
      <h2 className="text-5xl font-semibold text-slate-900 dark:text-slate-100">
        이런 분들을 기다립니다
      </h2>
      <ul className="space-y-2 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        {audience.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  )
}
