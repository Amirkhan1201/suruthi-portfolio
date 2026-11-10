import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const steps = ['Collecting tests', 'Launching browser', 'Running UI suite', 'Validating APIs', 'All checks passed']

export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const t0 = performance.now(), dur = 1700
    let raf
    const f = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      setPct(Math.round(100 * (1 - Math.pow(1 - p, 2))))
      if (p < 1) raf = requestAnimationFrame(f)
      else setTimeout(onDone, 350)
    }
    raf = requestAnimationFrame(f)
    return () => cancelAnimationFrame(raf)
  }, [onDone])
  const step = steps[Math.min(steps.length - 1, Math.floor((pct / 100) * steps.length))]
  return (
    <motion.div className="preloader" exit={{ y: '-100%' }} transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}>
      <div className="preloader__inner">
        <div className="preloader__pct">{pct}<span>%</span></div>
        <div className="preloader__bar"><span style={{ width: `${pct}%` }} /></div>
        <div className="preloader__step mono">
          <span className={pct === 100 ? 'ok' : ''}>{pct === 100 ? '✓' : '›'}</span> {step}
        </div>
      </div>
    </motion.div>
  )
}
