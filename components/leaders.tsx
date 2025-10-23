"use client"

import Image from "next/image"
import { useEffect, useId, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

/* =========================
   Shared color palette (same scheme as BoD / Key Mgmt)
========================= */
const cardColors = [
  { border: "border-green-400",  bg: "bg-green-50",  title: "text-green-700",  ring: "ring-green-200",  tint: "bg-green-100"  },
  { border: "border-blue-400",   bg: "bg-blue-50",   title: "text-blue-700",   ring: "ring-blue-200",   tint: "bg-blue-100"   },
  { border: "border-pink-400",   bg: "bg-pink-50",   title: "text-pink-700",   ring: "ring-pink-200",   tint: "bg-pink-100"   },
  { border: "border-purple-400", bg: "bg-purple-50", title: "text-purple-700", ring: "ring-purple-200", tint: "bg-purple-100" },
  { border: "border-yellow-400", bg: "bg-yellow-50", title: "text-yellow-700", ring: "ring-yellow-200", tint: "bg-yellow-100" },
  { border: "border-cyan-400",   bg: "bg-cyan-50",   title: "text-cyan-700",   ring: "ring-cyan-200",   tint: "bg-cyan-100"   },
  { border: "border-orange-400", bg: "bg-orange-50", title: "text-orange-700", ring: "ring-orange-200", tint: "bg-orange-100" },
  { border: "border-red-400",    bg: "bg-red-50",    title: "text-red-700",    ring: "ring-red-200",    tint: "bg-red-100"    },
  { border: "border-indigo-400", bg: "bg-indigo-50", title: "text-indigo-700", ring: "ring-indigo-200", tint: "bg-indigo-100" },
] as const

/* =========================
   Types & Data
========================= */
type AwardCard = {
  title: string
  byline: string
  description: string
  image: string
}

type TabKey =
  | "packaging-films"
  | "flexible-packaging"
  | "chemicals"
  | "aseptic-packaging"
  | "holography"
  | "engineering"

const TABS: { key: TabKey; label: string }[] = [
  { key: "packaging-films", label: "Packaging Films" },
  { key: "flexible-packaging", label: "Flexible Packaging" },
  { key: "aseptic-packaging", label: "Aseptic Packaging" },
  { key: "chemicals", label: "Chemicals" },
  { key: "holography", label: "Holography" },
  { key: "engineering", label: "Engineering" },
]

// Populate the 3 tabs with data now; others start empty (you’ll add later)
const AWARDS: Record<TabKey, AwardCard[]> = {
  "packaging-films": [
    {
      title: "35th Packaging Innovation Awards 2024",
      byline: "By Dow",
      description:
        "UFlex’s PET Film for cold blister formation was selected as one of the finalists at the 35th Packaging Innovation Awards 2024 by Dow.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/35th-Packaging-Innovation-Awards-202404.jpg",
    },
    {
      title: "Sustainability of the Year & Product of the Year",
      byline: "By AIMCAL Awards 2021",
      description:
        "UFlex’s F-ISB Cold Forming Metalized BOPET film for Blister Packaging received the Sustainability of the Year award and our Non-woven block bottom re-closable bags for rice packaging, received the Product of the Year award at the AIMCAL Awards 2021.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Sustainability-of-the-Year-&-Product-of-the-Year08.jpg",
    },
  ],
  "flexible-packaging": [
    {
      title: "INDIASTAR 2024 awards",
      byline: "By Indian Institute of Packaging",
      description:
        "UFlex was recognised for its excellence in packaging at the recent INDIASTAR 2024 Awards , where it bagged four awards.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/INDIASTAR-2024-awards03.jpeg",
    },
    {
      title: "Winner – Sustainable Packaging Challenge",
      byline: "At PACK.Nxt 2024",
      description:
        "At the 2nd edition of PACK.Nxt 2024, a premier event for smart, active, and sustainable packaging innovations, UFlex was named a winner of the Sustainable Packaging Challenge.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Winner-%E2%80%93-Sustainable-Packaging-Challenge37.jpeg",
    },
    {
      title: "Silver Award – Technical Innovation",
      byline: "By FPA",
      description:
        "Flex Films USA won the Silver Award - Technical Innovation at the Flexible Packaging Achievement Awards 2023, organized by the FPA, for its F-UHB-M Ultra High Barrier & High Metal Bond Metallized Polyester Film for aluminum foil replacement.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Silver-Award-%E2%80%93-Technical-Innovation56.jpg",
    },
  ],
  chemicals: [
    {
      title: "Water Champion Award",
      byline: "Presented by CII Northern Region",
      description:
        "UFlex’s Chemicals business has been honoured with the \"Water Champion Award\" at the 4th CII NR Green Practices Awards held recently. UFlex’s Chemicals business has been honoured with the \"Water Champion Award\" at the 4th CII NR Green Practices Awards held recently.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Water-Champion-Award41.jpg",
    },
    {
      title: "President’s Award for Sustainability",
      byline: "SIES SOP Star Awards 2025",
      description:
        "UFlex’s chemicals business won the prestigious President’s Award for Sustainability and two awards in the packaging Materials & Components category at the SIES SOP Star Awards 2025",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/President%E2%80%99s-Award-for-Sustainability02.jpeg",
    },
    {
      title: "Energy Champion Award",
      byline: "Presented by CII Northern Region",
      description:
        "UFlex’s Chemicals business received the Energy Champion Award at the 3rd edition of the CII Northern Region’s Green Practices Award for Industries for its commitment to sustainability and energy efficiency.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Energy-Champion-Award31.jpeg",
    },
  ],
  "aseptic-packaging": [],
  holography: [],
  engineering: [],
}

/* =========================
   Component
========================= */
export default function BusinessAwards() {
  const [active, setActive] = useState<TabKey>("packaging-films")
  const tablistId = useId()
  const activeIndex = useMemo(() => TABS.findIndex(t => t.key === active), [active])

  // keyboard support for tabs
  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const current = TABS.findIndex(t => t.key === active)
    if (e.key === "ArrowRight") {
      const next = (current + 1) % TABS.length
      setActive(TABS[next].key)
    } else if (e.key === "ArrowLeft") {
      const prev = (current - 1 + TABS.length) % TABS.length
      setActive(TABS[prev].key)
    }
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-[#243B6B] sm:text-4xl">
          Business Awards
        </h2>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Business Award Categories"
          className="relative mx-auto mb-8 flex w-full max-w-5xl items-end justify-between gap-3 overflow-x-auto border-b border-slate-200 pb-2"
          id={tablistId}
        >
          {TABS.map((t, i) => {
            const isActive = t.key === active
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${t.key}`}
                id={`tab-${t.key}`}
                onClick={() => setActive(t.key)}
                onKeyDown={onKeyDown}
                className={`relative whitespace-nowrap px-2 pb-2 text-[15px] font-semibold transition ${
                  isActive ? "text-[#243B6B]" : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {t.label}
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute -bottom-[1px] left-0 right-0 h-[3px] rounded-full bg-[#5B7BB6]"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {AWARDS[active].length > 0 ? (
                AWARDS[active].map((card, idx) => {
                  const c = cardColors[idx % cardColors.length]
                  return (
                    <article
                      key={card.title + idx}
                      className={`group overflow-hidden rounded-2xl border-2 ${c.border} ${c.bg} shadow transition`}
                    >
                      {/* Image */}
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-slate-900/10" />
                      </div>

                      {/* Body */}
                      <div className="space-y-3 p-5">
                        <h3 className="text-lg font-extrabold text-[#365072]">{card.title}</h3>
                        <p className="text-[13.5px] font-semibold text-slate-900">{card.byline}</p>
                        <p className="line-clamp-6 text-[14px] leading-6 text-slate-700">{card.description}</p>
                      </div>

                      {/* Footer strip to match theme */}
                      <div className={`h-1 w-full ${c.tint}`} />
                    </article>
                  )
                })
              ) : (
                <div className="col-span-full rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-600">
                  Data coming soon for <span className="font-semibold">{TABS.find(t => t.key === active)?.label}</span>.
                </div>
              )}
            </div>

            {/* View More */}
            {AWARDS[active].length > 0 && (
              <div className="mt-8 flex justify-center">
                <button className="inline-flex items-center gap-1 rounded-full bg-[#2C4270] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#243B6B]">
                  View More <ChevronRight size={16} />
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* tiny util: line clamp for descriptions */}
      <style jsx>{`
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
