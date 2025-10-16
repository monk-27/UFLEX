"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useEffect, useState } from "react"

/* ============================= Data (edit freely) ============================= */

type SustainabilityItem = {
  id: number
  title: string
  summary: string
  expandedText: string
  buttonText: string
  buttonLink: string
}

const DATA: SustainabilityItem[] = [
  {
    id: 1,
    title: "Project Plastic Fix",
    summary:
      "UFlex’s global sustainability initiative designed to keep plastic in the economy and out of the environment.",
    expandedText:
      "Paste your detailed description here… Outline goals, pilots, geographies, technology stack, partnerships, impact metrics, and 12–24 month roadmap.",
    buttonText: "Read More",
    buttonLink: "/project-plastic-fix",
  },
  {
    id: 2,
    title: "Restoring Biodiversity",
    summary:
      "Programs focused on restoring ecosystems and protecting habitats across operating regions.",
    expandedText:
      "Paste full copy… Reforestation drives, native species support, community participation models, and third-party audits.",
    buttonText: "Learn More",
    buttonLink: "/restoring-biodiversity",
  },
  {
    id: 3,
    title: "Waste Water Management",
    summary:
      "Reducing freshwater intake via recycling, ZLD adoption, and process optimization.",
    expandedText:
      "Paste full copy… Plant-level targets, ETP upgrades, monitoring cadence, compliance benchmarks, and year-on-year outcomes.",
    buttonText: "Know More",
    buttonLink: "/waste-water-management",
  },
  {
    id: 4,
    title: "Solar Power Initiatives",
    summary:
      "Scaling on-site and off-site renewables to decarbonize electricity consumption.",
    expandedText:
      "Paste full copy… Installed capacity, PPAs, storage pilots, grid mix impact, and projected CO₂e reductions.",
    buttonText: "Explore",
    buttonLink: "/solar-power",
  },
  {
    id: 5,
    title: "Communities",
    summary:
      "CSR programs that enable livelihoods, education, and health outcomes.",
    expandedText:
      "Paste full copy… Multi-year commitments, NGO partners, measurement framework, and SDG alignment.",
    buttonText: "Discover",
    buttonLink: "/communities",
  },
]

/* ============================= Shared UI Bits ============================= */

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`ml-2 h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function DropdownList({
  items,
  accentClass = "subheads",
  buttonClass = "",
}: {
  items: SustainabilityItem[]
  accentClass?: string
  buttonClass?: string
}) {
  const [openId, setOpenId] = useState<number | null>()

  return (
    <div className="w-full">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className="mb-3 rounded-lg border-[2px] border-[#86EFAC]  bg-[#DCFCE7]">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between rounded-lg px-5 py-4 text-left font-semibold text-[#1E1E1E]"
            >
              <div>
                  <h3 className="text-[#156534] poppins-600 text-lg">
                    <p className="text-[14px] leading-relaxed opacity-90">{item.title}</p>

                  </h3>

                </div>
              <Chevron open={isOpen} />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden rounded-b-lg bg-white"
                >
                  <div className="px-5 pb-5 pt-1 text-[#2A2A2A]">
                    <div className="poppins-400 px-5 pb-5 pt-1 text-[#156534]">



                    <p className="text-[14px] leading-relaxed opacity-90">{item.summary}</p>

                  </div>
                  <div className="mt-4 inline-block rounded-xl px-2 py-2 text-green-900">
<a
                      href={item.buttonLink}
                      className={` border-[2px] border-[#86EFAC]  bg-[#DCFCE7] text-sm mt-4 inline-block rounded-xl px-2 py-2 text-green-900`}
                    >
                      {item.buttonText}
                    </a>
                  </div>
                    
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

/* ============================= Desktop ============================= */

const DesktopSustainabilityComp = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [overlapPx, setOverlapPx] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"], // animate while in view
  })

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth || 0
      setOverlapPx(w * 0.2) // 20% overlap of container width
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const halfOverlap = overlapPx / 4
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-120, halfOverlap, halfOverlap])
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [120, -halfOverlap, -halfOverlap])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])

  return (
    <div className="hidden sm:block">
      <div ref={sectionRef} className="relative mx-auto flex min-h-screen max-w-[90%] items-center justify-center">
        {/* Left: Text / Dropdown Card */}
        <motion.div
          style={{ x: xLeft, opacity }}
          className="will-change-transform z-10 h-[75vh] w-[70%] overflow-hidden rounded bg-white text-[#2A2A2A] shadow"
        >
          <div className="subheads flex h-[79px] w-full items-center justify-center overflow-hidden rounded text-4xl">
            <span className="subheadtext text-center text-[26px]">UFlex's Commitment to a Circular Economy</span>
          </div>

          <div className="content mx-auto flex w-[85%] flex-col items-stretch p-6">
            <DropdownList items={DATA} />
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          style={{ x: xRight, opacity }}
          className="will-change-transform z-0 h-[80vh] w-[65%] overflow-hidden rounded"
        >
          <div className="relative h-full w-full">
            <Image
              src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/corporate_image54.jpg"
              alt="Sustainability"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/* ============================= Mobile ============================= */

const MobileSustainabilityComp = () => {
  return (
    <div className="mx-auto block max-w-[90%] flex-col items-center justify-center sm:hidden">
      <div className="relative h-[40vh] w-full overflow-hidden rounded">
        <Image
          src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/corporate_image54.jpg"
          alt="Sustainability"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mobsubheads mt-4  w-full py-2">
        <h2 className="subheadtext text-[14px]">
          <span>UFlex's Commitment to a Circular Economy</span>
        </h2>
      </div>

      <div className="w-full rounded-lg bg-white p-4 text-[#2A2A2A] shadow-lg">
        <DropdownList items={DATA} buttonClass="mobsubheads mobbutton" />
      </div>
    </div>
  )
}

/* ============================= Main Wrapper ============================= */

const MainSustainabilityCOMMComp = () => {
  return (
    <div className="relative mt-6 mb-12">
      <DesktopSustainabilityComp />
      <MobileSustainabilityComp />
    </div>
  )
}

export default MainSustainabilityCOMMComp
