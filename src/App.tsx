import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { LazyMotion, domAnimation } from 'motion/react'
import { content } from './content'
import { portfolioConfig as profile } from './portfolio.config'
import type { Language, SectionId } from './content'
import Header, { LanguageSwitch } from './components/Header'
import Hero from './components/Hero'
import Reveal from './components/Reveal'
import ProjectCard from './components/ProjectCard'
import Arrow from './components/Arrow'
import Skills from './components/Skills'
import About from './components/About'

function readLanguage(): Language {
  return new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'vi'
}

function useActiveSection() {
  const [active, setActive] = useState<SectionId>('home')
  useEffect(() => {
    const ids: SectionId[] = ['home', 'about', 'projects', 'skills', 'contact']
    let scheduled = false
    function update() {
      const threshold = window.innerHeight * 0.32
      let current: SectionId = 'home'
      for (const id of ids) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= threshold) current = id
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = 'contact'
      setActive(previous => previous === current ? previous : current)
      scheduled = false
    }
    const onScroll = () => {
      if (!scheduled) { scheduled = true; requestAnimationFrame(update) }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return active
}

export default function App() {
  const [language, setLanguage] = useState<Language>(readLanguage)
  const languageScrollAnchor = useRef<{ id: SectionId; top: number } | null>(null)
  const activeSection = useActiveSection()
  const copy = content[language]
  const socialLinks = [{ label: 'GitHub', href: profile.contact.github }, { label: 'LinkedIn', href: profile.contact.linkedin }].filter(link => link.href)
  const hasContact = Boolean(profile.contact.email || profile.contact.phone || socialLinks.length)

  useLayoutEffect(() => {
    const anchor = languageScrollAnchor.current
    if (!anchor) return
    languageScrollAnchor.current = null
    const section = document.getElementById(anchor.id)
    if (section) window.scrollBy({ top: section.getBoundingClientRect().top - anchor.top, behavior: 'instant' })
  }, [language])

  useEffect(() => {
    const onPopState = () => setLanguage(readLanguage())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    // Anchor targets are mounted by React, after the browser's initial hash jump.
    const initialHash = window.location.hash
    const id = initialHash.slice(1)
    if (!['home', 'about', 'projects', 'skills', 'contact', 'main'].includes(id)) return
    let cancelled = false
    let frame = 0
    void document.fonts.ready.then(() => {
      frame = requestAnimationFrame(() => {
        if (!cancelled && window.location.hash === initialHash) {
          document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
        }
      })
    })
    return () => { cancelled = true; cancelAnimationFrame(frame) }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = `${profile.name} — ${profile.role}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', profile.seo.description[language])
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', profile.seo.description[language])
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'vi' ? 'vi_VN' : 'en_US')
  }, [language])

  function changeLanguage(next: Language) {
    if (language === next) return
    const section = document.getElementById(activeSection)
    languageScrollAnchor.current = { id: activeSection, top: section?.getBoundingClientRect().top ?? 0 }
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.pushState({}, '', url)
    setLanguage(next)
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <a className="skip-link" href="#main">{copy.skipLink}</a>
      <Header language={language} onLanguageChange={changeLanguage} activeSection={activeSection} />
      <main id="main" className="shell" tabIndex={-1}>
        <Hero language={language} />
        <About language={language} />
        <section id="projects" className="projects-section section-anchor" tabIndex={-1} aria-labelledby="projects-heading">
          <Reveal className="section-heading"><h2 id="projects-heading">{copy.projects.title}</h2><p>{copy.projects.description}</p></Reveal>
          <div>{profile.projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} language={language} />)}</div>
        </section>
        <Skills language={language} />
        <section id="contact" className="contact-section section-anchor" tabIndex={-1} aria-labelledby="contact-heading">
          <Reveal>
            <h2 id="contact-heading">{copy.contact.title}</h2>
            <p>{copy.contact.description}</p>
            <div className="contact-actions flex flex-wrap items-center gap-8">
              {profile.contact.email && <a className="button-primary" href={`mailto:${profile.contact.email}`}>{copy.contact.email}<Arrow diagonal /></a>}
              {profile.contact.phone && <a className="text-link" href={`tel:${profile.contact.phone.replace(/[^\d+]/g, '')}`}>{profile.contact.phone}<Arrow diagonal /></a>}
              {socialLinks.map(link => <a className="text-link" key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<Arrow diagonal /></a>)}
              {!hasContact && <span className="contact-pending">{copy.contact.pending}</span>}
            </div>
            {profile.contact.location[language] && <p className="contact-location">{profile.contact.location[language]}</p>}
          </Reveal>
        </section>
      </main>
      <footer className="site-footer shell">
        <div><a className="footer-name" href="#home">© {new Date().getFullYear()} {profile.name}</a><p>{profile.footer[language]}</p></div>
        <div className="footer-actions"><LanguageSwitch language={language} onChange={changeLanguage} /><a className="back-to-top" href="#home" aria-label={copy.backToTop}><Arrow /></a></div>
      </footer>
    </LazyMotion>
  )
}
