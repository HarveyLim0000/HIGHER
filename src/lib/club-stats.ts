/** 창립일 (로컬 자정 기준). 연도는 실제 창립 연도로 맞춰 주세요. */
export const CLUB_FOUNDED_AT = new Date(2026, 2, 18)

/** 수동 입력: 부원 수가 바뀌면 여기도 함께 수정 */
export const CLUB_MEMBER_COUNT = 10

/**
 * 수동 입력: 전체 부원 학번을 더한 총합
 * 평균 학번은 `총합 ÷ 동아리 인원`으로 화면에 표시됩니다.
 */
export const CLUB_STUDENT_ID_TOTAL_SUM = 252

export function getDaysSinceFounded(now = new Date()): number {
  const start = new Date(
    CLUB_FOUNDED_AT.getFullYear(),
    CLUB_FOUNDED_AT.getMonth(),
    CLUB_FOUNDED_AT.getDate(),
  )
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const diffMs = end.getTime() - start.getTime()
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  return Math.max(0, days)
}

import type { Locale } from '../i18n/messages'

/** 학번 총합을 인원으로 나눈 값을 표시용 문자열로 만듭니다. */
export function formatAverageStudentId(locale: Locale = 'ko'): string {
  if (CLUB_MEMBER_COUNT <= 0) {
    return '—'
  }
  const avg = CLUB_STUDENT_ID_TOTAL_SUM / CLUB_MEMBER_COUNT
  const text = Number.isInteger(avg)
    ? String(avg)
    : (Math.round(avg * 10) / 10).toFixed(1)
  return locale === 'ko' ? `${text}번` : text
}
