export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string | 'Present'
  location: string
  bullets: string[]
}
