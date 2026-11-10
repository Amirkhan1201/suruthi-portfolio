import { useRef } from 'react'

/* Card whose border + background glow follows the mouse */
export default function Spotlight({ as: Tag = 'div', className = '', children, ref: outerRef, ...rest }) {
  const ref = useRef(null)
  const setRef = (node) => {
    ref.current = node
    if (typeof outerRef === 'function') outerRef(node)
    else if (outerRef) outerRef.current = node
  }
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Tag ref={setRef} onMouseMove={onMove} className={`spot ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
