import { content } from '../content'
import { portfolioConfig } from '../portfolio.config'
import type { Language } from '../types'
import Reveal from './Reveal'

export default function About({ language }: { language: Language }) {
  const text = portfolioConfig.about[language]
  const terms = [...new Set(portfolioConfig.aboutHighlights?.filter(term => term.trim()) ?? [])]
    .sort((left, right) => right.length - left.length)
  const escapedTerms = terms.map(term => term.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&'))
  const parts = terms.length ? text.split(new RegExp('(' + escapedTerms.join('|') + ')', 'g')) : [text]
  const highlightedTerms = new Set(terms)

  return (
    <section id="about" className="about-section section-anchor" tabIndex={-1} aria-labelledby="about-heading">
      <Reveal className="about-layout">
        <div className="about-intro">
          <h2 id="about-heading">{content[language].about.title}</h2>
          <span className="about-title-rule" aria-hidden="true" />
        </div>
        <div className="about-panel">
          <div className="about-dots about-dots-top" aria-hidden="true" />
          <div className="about-dots about-dots-bottom" aria-hidden="true" />
          <div className="about-card">
            <p>{parts.map((part, index) => highlightedTerms.has(part) ? <strong key={index}>{part}</strong> : part)}</p>
          </div>
          <svg className="about-circuit" width="160" height="90" viewBox="0 0 160 90" fill="none" aria-hidden="true">
            <path d="M8 76h54l26-26h64M42 60h40l28-28h30M108 12v10l12 12h20" stroke="currentColor" strokeWidth="1" />
            <g fill="currentColor"><circle cx="8" cy="76" r="2" /><circle cx="42" cy="60" r="2" /><circle cx="140" cy="32" r="2" /><circle cx="152" cy="50" r="2" /></g>
          </svg>
          <svg className="about-sparkle" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 0c2.7 10.1 5.9 13.3 16 16-10.1 2.7-13.3 5.9-16 16C13.3 21.9 10.1 18.7 0 16 10.1 13.3 13.3 10.1 16 0Z" fill="currentColor" />
          </svg>
        </div>
      </Reveal>
    </section>
  )
}
