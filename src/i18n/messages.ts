export type Locale = 'ko' | 'en'

export const messages = {
  ko: {
    meta: {
      documentTitle: 'HIGHER — 건양대학교 알고리즘·개발 동아리',
    },
    header: {
      homeAria: 'HIGHER 홈',
      themeToLight: '라이트 모드로 전환',
      themeToDark: '다크 모드로 전환',
      toggleLang: '영어/한국어 전환',
      menuOpen: '메뉴 열기',
      menuClose: '메뉴 닫기',
      menuNavLabel: '페이지 섹션',
    },
    hero: {
      taglineA: 'HIGHER AND',
      taglineB: 'HIGHER WE GO!',
      taglineMobileMid: 'HIGHER',
      taglineMobileLast: 'WE GO',
      subtitleMobileTop: '더 높은 곳을 향해 끊임없이 함께 성장하는 곳',
      subtitleMobileBottom: '건양대학교 알고리즘 문제 해결 동아리 하이어입니다',
      subtitle:
        '더 높은 곳을 향해 끊임없이 함께 성장하는 곳, 건양대학교 동아리 하이어입니다.',
    },
    welcome: {
      chapter: '01 - 소개',
      title: 'HIGHER는 어떤 동아리인가',
      body:
        '우리는 화려한 시작점이나 뛰어난 배경을 가진 사람들만 모인 곳이 아니라, 각자의 위치에서 출발해 함께 논리적 사고의 정수인 알고리즘을 통해 문제 해결 능력을 키워나가는 것을 목표로 합니다.',
    },
    activities: {
      chapter: '02 - 활동',
      title: '함께하는 프로그램',
      items: [
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
          body:
            '아이디어를 직접 구현하고 팀으로 협업하면서, 실제 서비스 제작에 가까운 경험을 쌓아갑니다.',
        },
      ],
    },
    audience: {
      chapter: '03 - 모집',
      title: '이런 분들과 함께합니다',
      lines: [
        '함께 배우고 성장하며, 사람들과 활발히 교류하고 싶은 분',
        'HIGHER의 일원으로 ICPC를 목표로 도전하실 분',
        '커피를 조금 많이 좋아하는 분 ☕',
        '노베이스라도 시작할 용기가 있는 분',
      ],
    },
    notice: {
      chapter: '04 - 공지',
      title: '공지',
      items: [
        {
          title: '3월 ?일(?) - 첫 번째 활동 일정 안내',
          href: '#',
        },
        {
          title: '3월 22일(일) - 동아리 웹페이지 런칭 관련 안내',
          href: '#',
        },
        {
          title: '3월 22일(일) - 1기 신입 부원 모집 안내',
          href: '#',
        },
      ],
    },
    stats: {
      chapter: '05 - 통계',
      title: '한눈으로 보는 HIGHER',
      labelMembers: '동아리 인원',
      labelAvgId: '평균 학번',
      labelAge: '동아리 나이',
      memberSuffix: '명',
      daySuffix: '일',
    },
    apply: {
      chapter: '06 - 지원',
      title: 'HIGHER와 함께하고싶다면?',
      periodLabel: '모집 기간',
      period:
        '신입회원은 상시 모집중이며 건양대학교 학생이면 누구나 가입할 수 있습니다.',
      feeLabel: '회비',
      fee: '존재하지 않고 노트북과 충전기만 준비해주세요.',
      applyLabel: '지원',
      applyUrl: 'https://forms.gle/5bVkj7Tre2jQXb777',
      applyLinkText: '가입 신청서',
      contactLabel: '문의사항',
      contact: 'HIGHER 회장 임도현(010-8423-8751)',
    },
    footer: {
      tel: 'Tel',
      email: 'E-mail',
      copyright: 'HIGHER © 2026 All rights reserved',
    },
  },
  en: {
    meta: {
      documentTitle: 'HIGHER — Algorithm & Development Club at Konyang University',
    },
    header: {
      homeAria: 'HIGHER home',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      toggleLang: 'Switch language (English / Korean)',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      menuNavLabel: 'Page sections',
    },
    hero: {
      taglineA: 'HIGHER AND',
      taglineB: 'HIGHER WE GO!',
      taglineMobileMid: 'HIGHER',
      taglineMobileLast: 'WE GO',
      subtitleMobileTop:
        'We grow together, always reaching higher.',
      subtitleMobileBottom:
        'HIGHER is Konyang University’s algorithmic problem-solving club.',
      subtitle:
        'We grow together, always reaching higher. HIGHER is Konyang University’s club for students who want to keep climbing.',
    },
    welcome: {
      chapter: '01 - About',
      title: 'What is HIGHER?',
      body:
        'We’re not a club only for people with a perfect résumé or a head start. We start from where each of us is, and grow together—using algorithms, the core of logical thinking, to sharpen real problem-solving skills.',
    },
    activities: {
      chapter: '02 - Programs',
      title: 'What we do',
      items: [
        {
          title: 'Algorithm seminars',
          body:
            'We study data structures and algorithms in a structured way, practice on Baekjoon and other platforms, and prepare for contests like the ICPC. We also join Codeforces and AtCoder rounds on a regular basis.',
        },
        {
          title: 'Tech & dev seminars',
          body:
            'We share practical tips and lessons from real development work—everything from onboarding topics for new members to coding interviews, internships, and collaboration tools.',
        },
        {
          title: 'Collaborative projects',
          body:
            'Teams turn ideas into working software together, getting hands-on experience close to shipping a real product.',
        },
      ],
    },
    audience: {
      chapter: '03 - Who we’re for',
      title: 'We’d love to meet you if…',
      lines: [
        'You want to learn, grow, and connect with people along the way.',
        'You want to aim for the ICPC as part of HIGHER.',
        'You love coffee—maybe a little too much. ☕',
        'You’re a beginner, but you’re ready to take the first step.',
      ],
    },
    notice: {
      chapter: '04 - Notices',
      title: 'Notices',
      items: [
        {
          title: 'Mar TBD — First activity schedule (TBA)',
          href: '#',
        },
        {
          title: 'Sun, Mar 22 — Club website launch',
          href: '#',
        },
        {
          title: 'Sun, Mar 22 — New member recruitment',
          href: '#',
        },
      ],
    },
    stats: {
      chapter: '05 - Stats',
      title: 'HIGHER at a glance',
      labelMembers: 'Members',
      labelAvgId: 'Avg. student ID',
      labelAge: 'Club age',
      memberSuffix: '',
      daySuffix: ' days',
    },
    apply: {
      chapter: '06 - Apply',
      title: 'Want to join HIGHER?',
      periodLabel: 'Recruitment period',
      period:
        'New members are always welcome. Any Konyang University student can join.',
      feeLabel: 'Fee',
      fee: 'No membership fee—just bring your laptop and charger.',
      applyLabel: 'Apply',
      applyUrl: 'https://forms.gle/5bVkj7Tre2jQXb777',
      applyLinkText: 'Open the application form',
      contactLabel: 'Contact',
      contact: 'President Lim Do-hyun (010-8423-8751)',
    },
    footer: {
      tel: 'Tel',
      email: 'E-mail',
      copyright: 'HIGHER © 2026 All rights reserved',
    },
  },
} as const
