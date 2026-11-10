import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="section section--tight">
      <div className="container">
        <SectionHead index="04" kicker="education" title={<>Foundations in <span className="grad">IT & Mathematics.</span></>} />
        <div className="edu">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1} spot className="glass edu__card">
              <span className="edu__period mono">{e.period}</span>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
              <span className="edu__big">{i === 0 ? 'M.Sc' : 'B.Sc'}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
