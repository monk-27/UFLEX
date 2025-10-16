"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
  { href: "/careers", label: "Careers" },
  { href: "/press-room", label: "Press Room" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <header className="site-header header-gradient sticky top-0 z-50 text-white shadow-sm py-4">
      {/* Top bar is fixed height; the header itself can grow for the drawer */}
      <div className="site-header__bar w-full flex items-center justify-between px-6 md:px-12">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="UFlex Home">
          <Image
            src="https://uflex.wpdevstudio.site/HTML/assets/images/Uflex-logo.webp"
            alt="UFlex Logo"
            width={180}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Right: Desktop nav (pinned to the right) */}
        <nav className="hidden md:flex items-center gap-10 ml-auto">
          {nav.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "nav-link group relative inline-flex items-center px-1 text-[15px] font-medium tracking-tight outline-none",
                  "text-white/90 hover:text-white",
                  // gradient underline via ::after
                  "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full",
                  "after:bg-[linear-gradient(to_right,#D9E8FF,#A9C7FF,#7FB2FF)] after:rounded-full",
                  "after:transition-transform after:duration-300 after:origin-left",
                  active ? "after:scale-x-100" : "after:scale-x-0 group-hover:after:scale-x-100"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto rounded-md border border-white/25 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Drawer (slides down under the bar) */}
      <motion.div
        id="mobile-nav"
        initial={false}
        animate={open ? { height: "auto", opacity: 1, y: 0 } : { height: 0, opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className={cn(
          "md:hidden overflow-hidden border-t border-white/10",
          "bg-black/10 backdrop-blur-md",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div className="px-6 py-3 space-y-1">
          {nav.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium transition",
                  "text-white/90 hover:bg-white/10 hover:text-white",
                  active && "bg-white/10 text-white"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </motion.div>
    </header>
  )
}
