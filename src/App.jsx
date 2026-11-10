import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import { profile } from './data'

const YEAR = new Date().getFullYear()

function CursorGlow() {
  useEffect(() => {
    const el = document.getElementById('cursor-glow')
    const move = (e) => { el.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)` }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return <div id="cursor-glow" aria-hidden="true" />
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    try { return !sessionStorage.getItem('preloaded') } catch { return true }
  })
  const done = useCallback(() => {
    try { sessionStorage.setItem('preloaded', '1') } catch { /* storage unavailable */ }
    setLoading(false)
  }, [])

  useEffect(() => { document.body.style.overflow = loading ? 'hidden' : '' }, [loading])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Preloader key="pre" onDone={done} />}</AnimatePresence>
      <CursorGlow />
      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero ready={!loading} />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>© {YEAR} {profile.name}. Designed & tested with care.</span>
          <span className="mono accent">$ exit 0 — all checks passed</span>
        </div>
      </footer>
    </MotionConfig>
  )
}
