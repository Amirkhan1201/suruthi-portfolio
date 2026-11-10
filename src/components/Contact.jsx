import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { profile } from '../data'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const send = () => {
    setStatus('sending')
    setTimeout(() => {
      setStatus('done')
      setTimeout(() => { window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Opportunity for Suruthi S — SDET')}` }, 900)
    }, 600)
  }

  return (
    <section id="contact" className="section contact-sec">
      <div className="hero__bg"><div className="blob blob--3" /></div>
      <div className="container">
        <Reveal className="contact__hero">
          <span className="sec-kicker mono"><span className="sec-index">05</span> contact</span>
          <h2 className="contact__title">Let's ship <span className="grad">bug-free</span><br />software together.</h2>
          <a href={`mailto:${profile.email}`} className="contact__mail">{profile.email} <span className="arrow">↗</span></a>
        </Reveal>

        <div className="contact">
          <Reveal className="contact__list">
            <a href={profile.phoneHref} className="glass contact__item"><span className="mono">phone</span><b>{profile.phone}</b></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="glass contact__item"><span className="mono">linkedin</span><b>{profile.linkedinLabel} ↗</b></a>
            <div className="glass contact__item"><span className="mono">location</span><b>{profile.location}</b></div>
            <a href={profile.resume} download className="glass contact__item"><span className="mono">resume</span><b>Download PDF ↓</b></a>
          </Reveal>

          <Reveal delay={0.1} spot className="glass api">
            <div className="api__head">
              <span className="method">POST</span>
              <span className="mono">/api/hire/suruthi</span>
              <span className="api__dots"><i /><i /><i /></span>
            </div>
            <pre className="mono">{`{
  `}<span className="k">"role"</span>: <span className="s">"SDET"</span>{`,
  `}<span className="k">"stack"</span>: [<span className="s">"Playwright"</span>, <span className="s">"Selenium"</span>, <span className="s">"Behave"</span>]{`,
  `}<span className="k">"experience_years"</span>: <span className="n">4</span>{`,
  `}<span className="k">"location"</span>: <span className="s">"Chennai"</span>{`
}`}</pre>
            <div className="api__foot">
              <button className="btn btn--accent" onClick={send} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send request →'}
              </button>
              <AnimatePresence>
                {status === 'done' && (
                  <motion.span className="api__resp mono" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                    <b>201 Created</b> · opening mail…
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
