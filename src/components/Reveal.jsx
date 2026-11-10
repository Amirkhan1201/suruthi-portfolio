import { motion } from 'framer-motion'
import Spotlight from './Spotlight'

const MotionSpot = motion.create(Spotlight)

export default function Reveal({ children, delay = 0, y = 28, className = '', spot = false }) {
  const Comp = spot ? MotionSpot : motion.div
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Comp>
  )
}
