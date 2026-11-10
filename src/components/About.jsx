import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { stats } from '../data'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const t0 = performance.now(), dur = 1600
    let raf
    const f = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      setN(Math.round(value * (1 - Math.pow(1 - p, 4))))
      if (p < 1) raf = requestAnimationFrame(f)
    }
    raf = requestAnimationFrame(f)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])
  return <span ref={ref}>{n.toLocaleString('en-IN')}{n === value && inView ? suffix : ''}</span>
}

function Compare() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  return (
    <Reveal spot className="glass compare">
      <div>
        <span className="mono kicker-sm">// impact</span>
        <h3>Regression went from <span className="strike">2 days</span> to <span className="grad">4.5 hours</span>.</h3>
        <p>Jenkins CI/CD pipelines now run the regression suite on every build with Allure reporting, supporting two production releases every month.</p>
      </div>
      <div className="compare__bars" ref={ref}>
        <div className="bar-row">
          <span className="bar-row__label mono">manual</span>
          <div className="bar-row__track"><span className="bar-row__fill bar-row__fill--slow" style={{ width: inView ? '100%' : 0 }} /></div>
          <span className="bar-row__val">48h</span>
        </div>
        <div className="bar-row">
          <span className="bar-row__label mono">automated</span>
          <div className="bar-row__track"><span className="bar-row__fill bar-row__fill--fast" style={{ width: inView ? '9.4%' : 0 }} /></div>
          <span className="bar-row__val grad">4.5h</span>
        </div>
        <div className="compare__saving mono"><span className="accent">✓</span> ~90% faster feedback</div>
      </div>
    </Reveal>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead index="01" kicker="about" title={<>Quality is not a phase.<br /><span className="grad">It's how I build.</span></>} />
        <div className="about">
          <Reveal className="about__text">
            <p>
              I'm a <b>Software Test Engineer at Property Automate</b>, where I architected the UI and API automation frameworks for
              <b> PropGoto</b>, a prop-tech rental and listing platform, growing coverage to <b>800+ automated tests</b>.
            </p>
            <p>
              My toolkit is <b>Python</b> with <b>Playwright, Selenium WebDriver, Behave BDD</b> and <b>Requests</b>, backed by
              <b> PostgreSQL</b> validation and <b>Jenkins CI/CD</b>. Before this I tested banking products for <b>Ujjivan</b> and
              <b> Citibank</b> at Xerago, and enterprise modules at <b>Ramco Systems</b>.
            </p>
            <p>Right now I'm prototyping <b>AI-assisted test automation</b> with Playwright MCP and the Claude API.</p>
          </Reveal>
          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} spot className="glass stat">
                <div className="stat__value grad"><Counter value={s.value} suffix={s.suffix} /></div>
                <div className="stat__label">{s.label}</div>
                <div className="stat__code mono">{s.code}</div>
              </Reveal>
            ))}
          </div>
        </div>
        <Compare />
      </div>
    </section>
  )
}
