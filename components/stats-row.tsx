"use client"
import { motion, useMotionValue, animate } from "framer-motion"
import { useEffect } from "react"

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const mv = useMotionValue(0)
  useEffect(() => {
    const controls = animate(mv, to, { duration: 1.2, ease: "easeOut" })
    return () => controls.stop()
  }, [to, mv])
  return (
    <span>
      {Math.round(mv.get())}
      {suffix}
    </span>
  )
}

export function StatsRow() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="stat-card"
      >
        <div className="stat-value">
          <Counter to={150} suffix="+" />
        </div>
        <div className="stat-label">Countries with our presence</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="stat-card"
      >
        <div className="stat-value">
          <Counter to={9} />
        </div>
        <div className="stat-label">Global manufacturing locations</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="stat-card"
      >
        <div className="stat-value">
          <Counter to={2035} />
        </div>
        <div className="stat-label">Committed to carbon neutrality</div>
      </motion.div>
    </div>
  )
}
