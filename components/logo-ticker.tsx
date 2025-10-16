"use client"
import { motion } from "framer-motion"

const logos = ["Consumer Goods", "Beverage", "Food", "Pharma", "Personal Care", "Retail", "Industrial"]

export function LogoTicker() {
  return (
    <div className="overflow-hidden border rounded" style={{ borderColor: "var(--border)" }}>
      <motion.div
        className="flex gap-10 whitespace-nowrap px-6 py-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {[...logos, ...logos].map((l, i) => (
          <span key={i} className="text-sm text-foreground/70">
            {l}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
