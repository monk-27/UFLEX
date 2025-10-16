"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

type Item = { href: string; label: string }

export function AnimatedTabs({ items }: { items: Item[] }) {
  const pathname = usePathname()
  return (
    <nav aria-label="Primary" className="flex items-center gap-1 relative">
      {items.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className="nav-pill text-sm text-foreground/80 hover:text-foreground relative"
          >
            {active && (
              <>
                <motion.span
                  layoutId="nav-bullet"
                  className="nav-bullet absolute -top-1 -right-1"
                  transition={{ type: "spring", stiffness: 1200, damping: 22, mass: 0.25 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.span
                  layoutId="nav-trail"
                  className="nav-trail absolute -bottom-1 left-1 right-1"
                  transition={{ type: "spring", stiffness: 900, damping: 26, mass: 0.28 }}
                />
                <motion.span
                  key={pathname} // retrigger spark on route change
                  className="nav-spark"
                  initial={{ scaleX: 0, opacity: 0.0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
                />
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "color-mix(in oklab, var(--brand-accent) 28%, transparent)" }}
                  transition={{ type: "spring", stiffness: 700, damping: 32 }}
                />
              </>
            )}
            <span className="relative z-10">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
