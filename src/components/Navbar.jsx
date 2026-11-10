import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { profile } from '../data'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <motion.header className="nav" initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
        <div className="nav__pill">
          <a href="#top" className="brand">
            <span className="brand__mark">S</span>
            <span className="brand__name">Suruthi<span className="accent">.</span></span>
          </a>
          <nav className={`nav__links ${open ? 'is-open' : ''}`}>
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
                {active === l.id && <motion.span layoutId="navbg" className="nav__bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span>{l.label}</span>
              </a>
            ))}
          </nav>
          <a href={profile.resume} download className="btn btn--sm btn--accent nav__cta">Resume ↓</a>
          <button className={`nav__toggle ${open ? 'is-open' : ''}`} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span /><span />
          </button>
        </div>
      </motion.header>
    </>
  )
}
