import { content } from '../content'
import { portfolioConfig } from '../portfolio.config'
import type { CSSProperties } from 'react'
import type { Language } from '../types'
import Reveal from './Reveal'
import { CategoryIcon, TechnologyIcon, categoryColors, getTechnologyVisual } from './SkillIcon'

export default function Skills({ language }: { language: Language }) {
  return (
    <section id="skills" className="skills-section section-anchor" tabIndex={-1} aria-labelledby="skills-heading">
      <Reveal>
        <div className="section-heading">
          <h2 id="skills-heading">{content[language].skills.title}</h2>
        </div>
        <div className="skills-grid">
          {portfolioConfig.skills.map(group => {
            const category = group.category ?? 'frontend'

            return (
              <div className="skill-group" key={group.title.en} style={{ '--skill-accent': categoryColors[category] } as CSSProperties}>
                <div className="skill-card-heading">
                  <span className="skill-category-icon"><CategoryIcon category={category} /></span>
                  <h3>{group.title[language]}</h3>
                </div>
                <ul className="skill-tags" role="list">
                  {group.items.map(item => {
                    const visual = getTechnologyVisual(item.en, category)
                    return (
                      <li className="skill-tag" key={item.en} style={{ '--technology-color': visual.color } as CSSProperties}>
                        <span className="skill-technology-icon"><TechnologyIcon path={visual.path} category={category} /></span>
                        <span>{item[language]}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
