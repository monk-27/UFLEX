"use client"

import { motion } from "framer-motion"

export function Timeline({
  items,
  title = "Our Journey",
}: {
  title?: string
  items: { year: string; text: string }[]
}) {
  return (
    <section className="section section-y">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-balance mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <div className="relative pl-6 md:pl-10">
        <div
          className="absolute left-2 md:left-4 top-0 bottom-0 w-[3px] bg-[color:var(--brand-accent)]/60 rounded-full"
          aria-hidden="true"
        />
        <ul className="space-y-8">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
            >
              <span className="absolute -left-1.5 md:-left-0.5 top-1.5 h-3 w-3 rounded-full bg-[color:var(--brand-primary)] ring-4 ring-[color:var(--brand-accent)]/30" />
              <div className="bg-card border rounded-md p-4">
                <p className="text-xs font-semibold text-[color:var(--brand-primary)]">{item.year}</p>
                <p className="mt-1 leading-relaxed text-pretty">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
