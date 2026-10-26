import { content } from '../content'
import type { Language, Project } from '../content'
import Arrow from './Arrow'
import Reveal from './Reveal'

export default function ProjectCard({ project, index, language }: { project: Project; index: number; language: Language }) {
  const copy = project.copy[language]
  const labels = content[language].projects
  return (
    <Reveal className={`project-row ${index % 2 ? 'project-reversed' : ''}`}>
      <div className="project-image-frame">
        <picture>
          {project.smallImage && <source srcSet={`${project.smallImage} 640w, ${project.image} ${project.width}w`} sizes="(max-width: 767px) calc(100vw - 48px), 48vw" />}
          <img src={project.image} width={project.width} height={project.height} alt={copy.alt} loading="lazy" decoding="async" />
        </picture>
      </div>
      <div className="project-copy">
        <p className="project-index"><span>{String(index + 1).padStart(2, '0')}</span><span aria-hidden="true">/</span>{project.sample && <span>{labels.sample}</span>}</p>
        <h3>{copy.title}</h3>
        <p className="project-description">{copy.description}</p>
        <p className="project-role">{copy.role}</p>
        <p className="project-technologies">{project.technologies.join(' · ')}</p>
        {(project.demoUrl || project.githubUrl) && (
          <div className="project-links flex flex-wrap items-center gap-8">
            {project.demoUrl && <a className="text-link accent-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">{labels.demo}<Arrow diagonal /></a>}
            {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">{labels.source}<Arrow diagonal /></a>}
          </div>
        )}
      </div>
    </Reveal>
  )
}
