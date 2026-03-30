import type { Locale } from '../i18n/messages'

export const CLUB_FOUNDED_AT = new Date(2026, 2, 18)

export const CLUB_MEMBER_COUNT = 15

export const CLUB_STUDENT_ID_TOTAL_SUM = 372

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
