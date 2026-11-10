import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { skills } from '../data'

const icons = {
  'Programming': '{ }', 'UI Automation': '▣', 'BDD & Frameworks': '≡', 'API Testing': '⇄', 'Database': '◫',
  'CI/CD & Tools': '↻', 'AI in QA': '✦', 'System Design': '◇', 'QA Practices': '✓',
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead index="03" kicker="skills" title={<>The toolkit<span className="grad"> behind the green builds.</span></>} />
        <div className="bento">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 0.08} spot className={`glass skill skill--${i} ${s.highlight ? 'skill--hl' : ''}`}>
              <div className="skill__top">
                <span className="skill__icon mono">{icons[s.group]}</span>
                {s.highlight && <span className="live"><span className="pill__dot" /> Exploring</span>}
              </div>
              <h4>{s.group}</h4>
              <div className="chips">{s.items.map((it) => <span key={it} className="chip">{it}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
