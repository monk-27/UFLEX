"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Stat = { value: string; label: string }

export function StatsRowPro({
  stats,
  className,
}: {
  stats: Stat[]
  className?: string
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-3", className)}>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="rounded-2xl border bg-card px-6 py-5 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: i * 0.05, duration: 0.35, ease: "easeOut" }}
        >
          <div className="text-3xl font-extrabold tracking-tight" style={{ color: "var(--brand-primary)" }}>
            {s.value}
          </div>
          <div className="mt-1 text-muted-foreground">{s.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
