export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}
