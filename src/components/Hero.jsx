import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { profile, roles } from '../data'

function useTyped(words) {
  const [text, setText] = useState('')
  useEffect(() => {
    let w = 0, c = 0, del = false, t
    const tick = () => {
      const word = words[w]
      setText(word.slice(0, c))
      if (!del && c < word.length) c++
      else if (!del) { del = true; t = setTimeout(tick, 1600); return }
      else if (c > 0) c--
      else { del = false; w = (w + 1) % words.length }
      t = setTimeout(tick, del ? 35 : 80)
    }
    t = setTimeout(tick, 900)
    return () => clearTimeout(t)
  }, [words])
  return text
}

const checks = ['ui_flows_playwright', 'rest_api_contracts', 'bdd_gateway_workflows', 'postgres_integrity', 'release_sign_off']

function RunCard() {
  const [done, setDone] = useState(0)
  useEffect(() => {
    let i = 0
    const id = setInterval(() => { i = i >= checks.length + 3 ? 0 : i + 1; setDone(Math.min(i, checks.length)) }, 650)
    return () => clearInterval(id)
  }, [])
  const passed = done === checks.length
  return (
    <div className="glass run-card">
      <div className="run-card__head">
        <span className="mono">regression_suite</span>
        <span className={`chip-status ${passed ? 'is-pass' : ''}`}>{passed ? 'PASSED' : 'RUNNING'}</span>
      </div>
      <div className="run-card__bar"><span style={{ width: `${(done / checks.length) * 100}%` }} /></div>
      <ul>
        {checks.map((c, i) => (
          <li key={c} className={i < done ? 'is-done' : ''}>
            <span className="tick">{i < done ? '✓' : '○'}</span><span className="mono">test_{c}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const orbit = ['Playwright', 'Selenium', 'Python', 'Jenkins', 'Postman', 'PostgreSQL', 'Behave', 'Appium']

const nameLetters = 'Suruthi'.split('')

export default function Hero({ ready }) {
  const typed = useTyped(roles)
  const mx = useMotionValue(0), my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 15 }), sy = useSpring(my, { stiffness: 60, damping: 15 })
  const photoX = useTransform(sx, (v) => v * 18), photoY = useTransform(sy, (v) => v * 12)
  const ringX = useTransform(sx, (v) => v * -10), ringY = useTransform(sy, (v) => v * -8)
  const cardX = useTransform(sx, (v) => v * 30), cardY = useTransform(sy, (v) => v * 22)

  const onMove = (e) => {
    mx.set(e.clientX / window.innerWidth - 0.5)
    my.set(e.clientY / window.innerHeight - 0.5)
  }

  const anim = ready ? 'show' : 'hide'

  return (
    <section className="hero" id="top" onMouseMove={onMove}>
      <div className="hero__bg">
        <div className="blob blob--1" /><div className="blob blob--2" /><div className="grid-lines" />
      </div>

      <div className="container hero__grid">
        <div className="hero__text">
          <motion.div className="pill" initial={{ opacity: 0, y: 12 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            <span className="pill__dot" /> Available for SDET roles · {profile.location}
          </motion.div>

          <h1 className="hero__name" aria-label="Suruthi S">
            <span className="hero__word">
              {nameLetters.map((l, i) => (
                <span key={i} className="mask">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={ready ? { y: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                  >{l}</motion.span>
                </span>
              ))}
            </span>
            <span className="mask">
              <motion.span className="grad" initial={{ y: '110%' }} animate={ready ? { y: 0 } : {}} transition={{ delay: 0.6, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}>S.</motion.span>
            </span>
          </h1>

          <motion.p className="hero__role" initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}>
            <span className="mono accent">&gt;</span> <span className="mono">{typed}</span><span className="caret" />
          </motion.p>

          <motion.p className="hero__lede" initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 }}>
            I build test automation frameworks from scratch and own quality end to end — from test planning to release sign-off — for
            <b> prop-tech, banking</b> and <b>enterprise</b> products.
          </motion.p>

          <motion.div className="hero__cta" initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.0 }}>
            <a href="#contact" className="btn btn--accent">Hire me <span className="arrow">→</span></a>
            <a href={profile.resume} download className="btn btn--ghost">Download CV</a>
          </motion.div>

          <motion.div className="hero__mini" initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 1.15 }}>
            <div><b>~4</b><span>Years</span></div>
            <div><b>800+</b><span>Automated tests</span></div>
            <div><b>55</b><span>APIs automated</span></div>
          </motion.div>
        </div>

        <div className="hero__visual">
          <motion.div className="ring" style={{ x: ringX, y: ringY }} initial={{ scale: 0.6, opacity: 0 }} animate={ready ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.3, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}>
            <div className="ring__conic" />
            <div className="ring__inner" />
            <div className="orbit">
              {orbit.map((t, i) => (
                <span key={t} className="orbit__item" style={{ '--i': i, '--n': orbit.length }}>
                  <span className="orbit__chip">{t}</span>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.img
            src="/suruthi-cutout.webp"
            alt="Suruthi S"
            className="hero__photo"
            style={{ x: photoX, y: photoY }}
            initial={{ opacity: 0, y: 60 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          />

          <motion.div className="hero__card" style={{ x: cardX, y: cardY }} initial={{ opacity: 0, x: -40 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 1.2, duration: 0.8 }}>
            <RunCard />
          </motion.div>

          <motion.div className="glass hero__badge" initial={{ opacity: 0, scale: 0.8 }} animate={ready ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1.4, type: 'spring' }}>
            <span className="hero__badge-big grad">2d → 4.5h</span>
            <span>regression time</span>
          </motion.div>
        </div>
      </div>

      <motion.a href="#about" className="scroll-cue mono" initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 1.6 }}>
        <span className="scroll-cue__line" /> scroll
      </motion.a>
    </section>
  )
}
