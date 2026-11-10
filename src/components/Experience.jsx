import { useRef } from 'react'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { experience } from '../data'

function Job({ job, idx }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  return (
    <div className="job" ref={ref}>
      <div className="job__marker">
        <motion.span className="job__dot" initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ type: 'spring', stiffness: 300, damping: 15 }} />
        <span className="job__num mono">0{idx + 1}</span>
      </div>
      <Reveal spot className="glass job__card">
        <div className="job__head">
          <div>
            <h3>{job.company}</h3>
            <p className="job__title">{job.title}</p>
          </div>
          <div className="job__right">
            {job.current && <span className="live"><span className="pill__dot" /> Current</span>}
            <span className="job__period mono">{job.period}</span>
          </div>
        </div>
        <ul className="job__points">
          {job.points.map((p, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -14 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}>
              <motion.span className="check" initial={{ scale: 0, rotate: -90 }} animate={inView ? { scale: 1, rotate: 0 } : {}} transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 400, damping: 16 }}>✓</motion.span>
              <span>{p}</span>
            </motion.li>
          ))}
        </ul>
        <div className="job__foot">
          <div className="tags">{job.tags.map((t) => <span key={t} className="tag mono">{t}</span>)}</div>
          <span className="mono job__result">{job.points.length} passed · 0 failed</span>
        </div>
      </Reveal>
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead index="02" kicker="experience" title={<>Three teams.<br /><span className="grad">Zero shortcuts.</span></>} />
        <div className="timeline" ref={ref}>
          <div className="timeline__line"><motion.span style={{ scaleY }} /></div>
          {experience.map((j, i) => <Job key={j.company} job={j} idx={i} />)}
        </div>
      </div>
    </section>
  )
}
