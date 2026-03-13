// Workshop types
export interface Workshop {
  id: string
  title: string
  instructor: string
  date: string
  time: string
  description: string
  category: string
  image?: string
  capacity: number
  registered: number
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  prerequisites?: string[]
  tags: string[]
}