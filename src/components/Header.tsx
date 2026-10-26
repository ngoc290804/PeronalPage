import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import { content } from '../content'
import { portfolioConfig as profile } from '../portfolio.config'
import type { Language, SectionId } from '../content'
import Arrow from './Arrow'

export function LanguageSwitch({ language, onChange }: { language: Language; onChange: (language: Language) => void }) {
  return (
    <div className="language-switch" role="group" aria-label={content[language].languageLabel}>
      <button type="button" lang="vi" aria-label="VI — Tiếng Việt" aria-pressed={language === 'vi'} onClick={() => onChange('vi')}>VI</button>
      <span aria-hidden="true">/</span>
      <button type="button" lang="en" aria-label="EN — English" aria-pressed={language === 'en'} onClick={() => onChange('en')}>EN</button>
    </div>
  )
}

export default function Header({ language, onLanguageChange, activeSection }: { language: Language; onLanguageChange: (language: Language) => void; activeSection: SectionId }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const pendingSection = useRef<SectionId | null>(null)
  const reducedMotion = useReducedMotion()
  const copy = content[language]

  useEffect(() => {
    if (!open) return
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const media = window.matchMedia('(min-width: 1100px)')
    const closeOnDesktop = () => { if (media.matches) setOpen(false) }
    window.addEventListener('keydown', closeWithEscape)
    document.addEventListener('pointerdown', closeOutside)
    media.addEventListener('change', closeOnDesktop)
    return () => {
      window.removeEventListener('keydown', closeWithEscape)
      document.removeEventListener('pointerdown', closeOutside)
      media.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  function selectSection(id: SectionId) {
    pendingSection.current = id
    setOpen(false)
  }

  function finishMenuExit() {
    const id = pendingSection.current
    if (!id) return
    pendingSection.current = null
    const destination = document.getElementById(id)
    window.history.pushState({}, '', `#${id}`)
    destination?.focus({ preventScroll: true })
    // Focus first: focusing after scrollIntoView can cancel smooth scrolling in Chromium.
    requestAnimationFrame(() => destination?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' }))
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner shell">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>{profile.name}</a>
        <nav className="desktop-navigation" aria-label={copy.navigationLabel}>
          {copy.navigation.map(item => (
            <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined}>
              {activeSection === item.id && <m.span className="nav-active" layoutId="active-navigation" transition={{ type: 'spring', stiffness: 400, damping: 38 }} />}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch language={language} onChange={onLanguageChange} />
          <button ref={buttonRef} className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" aria-label={open ? copy.closeMenu : copy.openMenu} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>
            <span /><span />
          </button>
        </div>
      </div>
      <AnimatePresence initial={false} onExitComplete={finishMenuExit}>
        {open && (
          <m.div className="mobile-menu-wrap shell" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}>
            <nav id="mobile-navigation" className="mobile-navigation" aria-label={copy.navigationLabel}>
              {copy.navigation.map((item, index) => (
                <m.a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined} onClick={event => { event.preventDefault(); selectSection(item.id) }} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: reducedMotion ? 0 : index * 0.035 }}>
                  <span>{item.label}</span><Arrow />
                </m.a>
              ))}
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
