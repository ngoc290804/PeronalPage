export type Language = 'vi' | 'en'
export type SectionId = 'home' | 'about' | 'projects' | 'skills' | 'contact'
export type LocalizedText = Record<Language, string>
export type SkillCategory = 'frontend' | 'backend' | 'databases' | 'tools'

export interface Project {
  id: string
  image: string
  smallImage?: string
  width: number
  height: number
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  sample: boolean
  copy: Record<Language, { title: string; description: string; role: string; alt: string }>
}

export interface PortfolioConfig {
  name: string
  role: string
  headline: LocalizedText
  about: LocalizedText
  aboutHighlights?: string[]
  contact: { email: string; phone: string; github: string; linkedin: string; location: LocalizedText }
  skills: { title: LocalizedText; category?: SkillCategory; items: LocalizedText[] }[]
  projects: Project[]
  footer: LocalizedText
  seo: { description: LocalizedText; siteUrl: string; image: string }
}
