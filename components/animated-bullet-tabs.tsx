"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type Tab = { href: string; label: string }

export function AnimatedBulletTabs({
  items,
  className,
}: {
  items: Tab[]
  className?: string
}) {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className={cn("relative flex items-center gap-2", className)}>
      {items.map((t) => {
        const active = pathname === t.href
        return (
          <div key={t.href} className="relative">
            <Link
              href={t.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-nav-active text-nav-onActive shadow-sm font-extrabold"
                  : "bg-transparent text-foreground/90 hover:text-foreground font-bold",
              )}
            >
              <span className="relative mr-2 inline-block h-2 w-5">
                <AnimatePresence initial={false} mode="wait">
                  {active ? (
                    <motion.span
                      key="bullet"
                      layoutId="header-bullet"
                      className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full nav-bullet "
                      initial={{ x: -10, opacity: 0.6, scale: 0.8 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ x: 10, opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.25 }}
                    />
                  ) : (
                    <motion.span
                      key={`ghost-${t.href}`}
                      className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-foreground/25"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.25 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence initial={false} mode="wait">
                  {active && (
                    <motion.span
                      key={`trail-${t.href}`}
                      className="absolute left-2 top-1/2 w-3 -translate-y-1/2 nav-trail"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 0.9, width: 12 }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ type: "tween", duration: 0.22 }}
                    />
                  )}
                </AnimatePresence>
              </span>
              <span className="text-pretty">{t.label}</span>
            </Link>
          </div>
        )
      })}
    </nav>
  )
}
