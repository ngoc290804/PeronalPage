import {
  siReact, siTypescript, siHtml5, siTailwindcss, siNodedotjs,
  siSpringboot, siPostgresql, siMysql, siRedis, siGit, siDocker,
  siPostman, siVite,
} from 'simple-icons'
import type { SkillCategory } from '../types'

export const categoryColors: Record<SkillCategory, string> = {
  frontend: '#8AB4FF',
  backend: '#82D9B2',
  databases: '#BEA8F5',
  tools: '#F0BC86',
}

const technologies: Record<string, { path: string; color: string }> = {
  react: { path: siReact.path, color: '#61DAFB' },
  typescript: { path: siTypescript.path, color: '#7EB6F6' },
  'html / css': { path: siHtml5.path, color: '#F49972' },
  'tailwind css': { path: siTailwindcss.path, color: '#69D9EC' },
  'node.js / express': { path: siNodedotjs.path, color: '#94CE7E' },
  'java / spring boot': { path: siSpringboot.path, color: '#A4D677' },
  postgresql: { path: siPostgresql.path, color: '#A0B8EF' },
  mysql: { path: siMysql.path, color: '#8DC9EC' },
  redis: { path: siRedis.path, color: '#FF9295' },
  git: { path: siGit.path, color: '#F59B86' },
  docker: { path: siDocker.path, color: '#80C5F4' },
  postman: { path: siPostman.path, color: '#FFA77E' },
  vite: { path: siVite.path, color: '#C4ACFF' },
}

export function CategoryIcon({ category }: { category: SkillCategory }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {category === 'frontend' && <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />}
      {category === 'backend' && <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01M14 6.5h3M14 17.5h3" /></>}
      {category === 'databases' && <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" /></>}
      {category === 'tools' && <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m7 9 3 3-3 3m6 0h4" /></>}
    </svg>
  )
}

export function getTechnologyVisual(name: string, category: SkillCategory) {
  return technologies[name.trim().toLowerCase()] ?? { path: '', color: categoryColors[category] }
}

export function TechnologyIcon({ path, category }: { path: string; category: SkillCategory }) {
  return path ? (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d={path} /></svg>
  ) : <CategoryIcon category={category} />
}
