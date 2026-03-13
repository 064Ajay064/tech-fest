export interface ScheduleItem {
  id: string
  category: string
  title: string
  description: string
  time: string
  location: string
  icon: string
  badge?: string
  mentors?: string[]
  prizePool?: string
  teams?: string
}

export type Day = 'DAY 01' | 'DAY 02'
