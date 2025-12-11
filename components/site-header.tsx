
"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavItem = {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

const baseNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  // {
  //   href: "/what-we-do",
  //   label: "What We Do",
  //   children: [
  //     { href: "/packaging-films-business", label: "Packaging Films and PET Resin" },
  //     { href: "/chemicals-business", label: "Chemicals" },
  //     { href: "/aseptic-packaging-business", label: "Aseptic Packaging" },
  //     { href: "/flexible-packaging-business", label: "Flexible Packaging" },
  //     { href: "/holography-business", label: "Holography" },
  //     { href: "/engineering-business", label: "Engineering" },
  //     { href: "/printing-cylinder-business", label: "Printing Cylinders" },
  //     { href: "/flexitube-business", label: "Flexible Tubes" },
  //   ],
  // },
  { href: "/business", label: "Our Businesses" },
  { href: "/sustainability", label: "Sustainability" },

  { href: "/investors", label: "Investors" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
  { href: "/careers", label: "Careers" },
  { href: "/press-room", label: "Press\u00A0Room" },
  { href: "/get-in-touch", label: "Get in Touch" }
]

export function SiteHeader() {
  const [open, setOpen] = useState(false) // mobile drawer
  const [hoverMenu, setHoverMenu] = useState<string | null>(null) // desktop hover menu
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null) // which mobile submenu is open
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  const nav = useMemo(() => baseNav, [])

  const closeHoverMenus = () => setHoverMenu(null)

  return (
    <header
      className="site-header bg-[#117ABA] sticky top-0 z-50 text-white shadow-sm py-4"
      onMouseLeave={closeHoverMenus}
    >
      {/* Top bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-0 flex items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="UFlex Home">
          <Image
            src="https://uflex.wpdevstudio.site/HTML/assets/images/Uflex-logo.webp"
            alt="UFlex Logo"
            width={180}
            height={48}
            className="h-12 w-auto"
          // priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 ml-auto relative">
          {nav.map((item) => {
            const active = isActive(item.href)
            const hasChildren = !!item.children?.length
            const isOpen = hoverMenu === item.href

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => hasChildren && setHoverMenu(item.href)}
              >
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "nav-link group relative inline-flex items-center px-1 text-[15px] font-medium tracking-tight outline-none",
                    "text-white/90 hover:text-white",
                    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w/full",
                    "after:bg-[linear-gradient(to_right,#192D4BFF,#7F8692FF,#0F2952FF)] after:rounded-full",
                    "after:transition-transform after:duration-300 after:origin-left",
                    active ? "after:scale-x-100" : "after:scale-x-0 group-hover:after:scale-x-100"
                  )}
                >
                  {item.label}

                  {hasChildren && (

                    <svg
                      className={cn(
                        "h-3.5 w-3.5 ml-2 transition-transform duration-200",
                        isOpen ? "rotate-180" : "rotate-0"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Desktop dropdown */}
                {hasChildren && (
                  <AnimatePresence>
                    {isOpen && (
                      <div
                        // initial={{ opacity: 0, y: -6 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // exit={{ opacity: 0, y: -6 }}
                        // transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-0 top-[calc(100%+12px)] min-w-[280px] rounded-xl border border-white/15 bg-black/30 backdrop-blur-md p-2 shadow-lg"
                        onMouseLeave={() => setHoverMenu(null)}
                      >
                        <ul className="grid grid-cols-1 gap-1">
                          {item.children!.map((child) => {
                            const childActive = isActive(child.href)
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "block rounded-lg px-3 py-2 text-[14px] manrope-400",
                                    "text-white/90 hover:bg-white/10 hover:text-white",
                                    childActive && "bg-white/10 text-white"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto rounded-md border border-white/25 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50"
          onClick={() => {
            setOpen((v) => !v)
            setMobileOpenMenu(null)
          }}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Drawer */}
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
        <div className="px-6 py-3">
          <ul className="space-y-1">
            {nav.map((item) => {
              const active = isActive(item.href)
              const hasChildren = !!item.children?.length
              const isSubOpen = mobileOpenMenu === item.href

              if (hasChildren) {
                // MOBILE: parent label is a real Link; chevron toggles submenu
                return (
                  <li key={item.href} className="rounded-md">
                    <div
                      className={cn(
                        "flex items-stretch justify-between gap-2 rounded-md",
                        active && "bg-white/10"
                      )}
                    >
                      {/* Parent link (left) */}
                      <Link
                        href={item.href}
                        onClick={() => {
                          // navigating closes the drawer & submenus
                          setOpen(false)
                          setMobileOpenMenu(null)
                        }}
                        className={cn(
                          "flex-1 rounded-md px-3 py-2 text-base font-medium transition",
                          "text-white/90 hover:bg-white/10 hover:text-white"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>

                      {/* Chevron toggle (right) */}
                      <button
                        type="button"
                        aria-label={isSubOpen ? `Collapse ${item.label}` : `Expand ${item.label}`}
                        aria-expanded={isSubOpen}
                        aria-controls={`submenu-${item.href}`}
                        onClick={() =>
                          setMobileOpenMenu((prev) => (prev === item.href ? null : item.href))
                        }
                        className={cn(
                          "shrink-0 rounded-md px-3 py-2 text-base font-medium transition",
                          "text-white/90 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <span className={cn("inline-block transition-transform", isSubOpen && "rotate-180")}>
                          ▾
                        </span>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isSubOpen && (
                        <motion.ul
                          id={`submenu-${item.href}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="ml-2 mt-1 overflow-hidden rounded-md border-l border-white/10"
                        >
                          {item.children!.map((child) => {
                            const childActive = isActive(child.href)
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => {
                                    setOpen(false)
                                    setMobileOpenMenu(null)
                                  }}
                                  className={cn(
                                    "block rounded-md px-3 py-2 text-[15px] font-medium",
                                    "text-white/90 hover:bg-white/10 hover:text-white",
                                    childActive && "bg-white/10 text-white"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            )
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                )
              }

              // Regular mobile link
              return (
                <li key={item.href}>
                  <Link
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
                </li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </header>
  )
}
