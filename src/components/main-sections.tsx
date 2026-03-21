export function WelcomeSection() {
  return (
    <section id="welcome" className="scroll-mt-24 space-y-4">
      <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400">
        01 - 소개
      </h3>
      <h2 className="text-5xl font-semibold text-slate-900 dark:text-slate-100">
        HIGHER는 어떤 동아리인가
      </h2>
      <div className="space-y-4 text-2xl leading-relaxed text-slate-700 dark:text-slate-300">
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
      '자료구조와 알고리즘 핵심 이론을 스터디로 차근히 익히고, 백준 등 여러 플랫폼 문제를 풀며 실전 감각을 키웁니다. ICPC 같은 대회를 함께 준비하고, Codeforces·AtCoder 온라인 라운드도 꾸준히 참여합니다.',
  },
  {
    title: '정기 세미나',
    body:
      '개발 과정에서 바로 도움이 되는 이슈와 노하우를 정기적으로 공유합니다. 신규 부원을 위한 입문 주제부터 코딩 테스트, 인턴십, 협업 툴 활용까지 폭넓게 다룹니다.',
  },
  {
    title: '자유 프로젝트 협업',
    body: '아이디어를 직접 구현하고 팀으로 협업하면서, 실제 서비스 제작에 가까운 경험을 쌓아갑니다.',
  },
] as const

export function ActivitiesSection() {
  return (
    <section id="activities" className="scroll-mt-24 space-y-4">
      <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400">
        02 - 활동
      </h3>
      <h2 className="text-5xl font-semibold text-slate-900 dark:text-slate-100">
        함께하는 프로그램
      </h2>
      <ul className="space-y-6">
        {activities.map(({ title, body }) => (
          <li
            key={title}
            className="list-none"
          >
            <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {title}
            </p>
            <p className="mt-2 text-2xl leading-relaxed text-slate-700 dark:text-slate-300">
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
      <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400">
        03 - 모집
      </h3>
      <h2 className="text-5xl font-semibold text-slate-900 dark:text-slate-100">
        이런 분들과 함께합니다
      </h2>
      <ul className="space-y-2 text-2xl leading-relaxed text-slate-700 dark:text-slate-300">
        {audience.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  )
}
