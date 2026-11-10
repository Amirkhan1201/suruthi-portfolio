import { motion } from 'framer-motion'

export default function SectionHead({ index, kicker, title }) {
  return (
    <motion.div className="sec-head" initial="hide" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
      <motion.span
        className="sec-kicker mono"
        variants={{ hide: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.6 }}
      >
        <span className="sec-index">{index}</span> {kicker}
      </motion.span>
      <div className="sec-title-mask">
        <motion.h2
          variants={{ hide: { y: '110%' }, show: { y: 0 } }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {title}
        </motion.h2>
      </div>
    </motion.div>
  )
}
