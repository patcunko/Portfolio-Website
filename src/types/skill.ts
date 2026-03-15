export type SkillCategory = 'Frontend' | 'Backend' | 'Tools' | 'Other'

export interface Skill {
  name: string
  category: SkillCategory
  icon?: string
}
