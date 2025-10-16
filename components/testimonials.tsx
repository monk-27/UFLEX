"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const items = [
  {
    quote: "UFlex delivered exceptional film quality and on-time supply across markets.",
    author: "Global FMCG Partner",
    role: "Procurement Lead",
  },
  {
    quote: "Their innovation pipeline helped us reduce material usage and improve shelf appeal.",
    author: "Beverage Brand",
    role: "Packaging Engineering",
  },
  {
    quote: "Reliable, scalable, and truly collaborative—exactly what we needed.",
    author: "Regional Confectionery",
    role: "Operations Director",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % items.length)
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  return (
    <div className="card-elevated p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">What partners say</h3>
        <div className="flex gap-2">
          <button className="px-2 py-1 text-sm border rounded" onClick={prev} style={{ borderColor: "var(--border)" }}>
            Prev
          </button>
          <button className="px-2 py-1 text-sm border rounded" onClick={next} style={{ borderColor: "var(--border)" }}>
            Next
          </button>
        </div>
      </div>
      <div className="relative min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="text-balance"
          >
            <p className="text-base leading-relaxed">“{items[index].quote}”</p>
            <footer className="mt-3 text-sm text-foreground/70">
              — {items[index].author}, {items[index].role}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </div>
  )
}
