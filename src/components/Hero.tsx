import { m, useReducedMotion } from 'motion/react'
import { content } from '../content'
import { portfolioConfig as profile } from '../portfolio.config'
import type { Language } from '../content'
import Arrow from './Arrow'

export default function Hero({ language }: { language: Language }) {
  const copy = content[language]
  const reduced = useReducedMotion()
  const entrance = (delay: number) => ({ initial: reduced ? false as const : { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } })

  return (
    <section id="home" className="hero section-anchor" tabIndex={-1} aria-labelledby="hero-heading">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-copy">
          <m.h1 id="hero-heading" {...entrance(0)}>
            <span className="hero-greeting">{copy.greeting}</span>
            <span>{copy.introduction} <span className="name-highlight">{profile.name}.</span></span>
          </m.h1>
          <m.p className="hero-description" {...entrance(0.1)}><span className="hero-role">{profile.role}</span>{profile.headline[language]}</m.p>
          <m.div className="hero-actions flex items-center flex-wrap gap-8" {...entrance(0.18)}>
            <a className="button-primary" href="#projects">{copy.viewProjects}<Arrow /></a>
            <a className="text-link" href="#contact">{copy.contactLink}<Arrow diagonal /></a>
          </m.div>
        </div>
        <m.div className="code-art" aria-hidden="true" {...entrance(0.12)}>
          <div className="code-art-float">
            <div className="code-frame frame-back"><span /><span /></div>
            <div className="code-frame frame-front"><span /><span /></div>
            <div className="brace-pair"><span>{'{'}</span><span>{'}'}</span></div>
          </div>
        </m.div>
      </div>
      <span className="mobile-code" aria-hidden="true">{'{ }'}</span>
    </section>
  )
}
