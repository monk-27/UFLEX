
// "use client"
// import Image from "next/image"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef, useEffect, useState } from "react"

// const DesktopSustainabilityComp = () => {
//     const sectionRef = useRef<HTMLDivElement>(null)
//     const [overlapPx, setOverlapPx] = useState(0)

//     // Animate only while THIS section is in view
//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start 80%", "end 20%"], // start near entering, end near leaving
//     })

//     // Measure container width → 20% overlap (each card moves half of that)
//     useEffect(() => {
//         const el = sectionRef.current
//         if (!el) return

//         const ro = new ResizeObserver(() => {
//             const w = el.clientWidth || 0
//             setOverlapPx(w * 0.2) // 20% of container width
//         })
//         ro.observe(el)
//         return () => ro.disconnect()
//     }, [])

//     // Each card moves by half the overlap into the other
//     const halfOverlap = overlapPx / 4

//     // Keyframes:
//     // 0   -> subtle fly-in from sides
//     // 0.5 -> reached mid viewport: overlap locked (±halfOverlap)
//     // 1   -> stay overlapped
//     const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-120, halfOverlap, halfOverlap])
//     const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [120, -halfOverlap, -halfOverlap])
//     const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])

//     return (
//         <div className="hidden sm:block">
//             <div ref={sectionRef} className="relative mx-auto flex min-h-screen max-w-[90%] items-center justify-center">
//                 {/* Text Card (on top) */}
//                 <motion.div
//                     style={{ x: xLeft, opacity }}
//                     className="will-change-transform z-10 h-[85vh] w-[70%] rounded bg-white text-[#2A2A2A] shadow"
//                 >
//                     <div className="subheads flex h-[79px] w-full items-center justify-center overflow-hidden rounded text-4xl">
//                         <span className="subheadtext text-center text-[26px]">Sustainability</span>
//                     </div>
//                     <div className="content mx-auto flex w-[80%] flex-col items-center p-8">
//                         <p className="headstext poppins-400 xxl:text-[24px] mb-6 text-center text-[14px] leading-relaxed">
//                             Empowering a Greener Tomorrow, Today
//                             <br />
//                             Sustainability is embedded at the heart of UFlex’s operations, driving the company to innovate responsibly and create packaging solutions that serve both the business and the environment.
//                             <br />
//                             As a global leader in flexible packaging, UFlex recognizes its pivotal role in shaping a circular economy and reducing the ecological footprint of the packaging industry.
//                             <br />
//                             As a responsible corporate citizen, UFlex's business is rapidly innovating to accelerate the shift from the current "take-make-dispose" model often referred to as "linear economy" to "circular economy" model. As the company increasingly embraces circular economy principles and prioritize responsible plastic waste management & EPR compliance, the company stands committed to not only mitigate environmental footprint but also contribute to a positive social impact. At UFlex this holistic and forward-thinking approach is not just a strategic choice but a fundamental bedrock towards creating a more sustainable and resilient economy.
//                             <br />
//                             UFlex is committed to environmental sustainability through innovative practices and responsible resource management. The company's initiatives, including the development of a scope 3 GHG inventory and efficient waste management strategies, highlight the company's dedication to reducing its ecological footprint. By embracing circular economy principles and fostering partnerships for sustainable sourcing and recycling, UFlex aims to minimize our environmental impact while creating economic value. UFlex remains focused on driving positive change for the planet and the communities it serves.
//                         </p>

//                         <button className="subheads px-10 py-2 text-white transition-colors rounded-3xl">View Details</button>
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     style={{ x: xRight, opacity }}
//                     className="will-change-transform z-0 h-[90vh] w-[65%] overflow-hidden rounded"
//                 >
//                     <div className="relative h-full w-full">
//                         <Image
//                             src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image49.webp"
//                             alt="Sustainability"
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }

// const MobileSustainabilityComp = () => {
//     return (
//         <div className="mx-auto block max-w-[90%] flex-col items-center justify-center sm:hidden">
//             <div className="relative h-[40vh] w-full">
//                 <Image
//                     src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image49.webp"
//                     alt="Sustainability"
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//             </div>
//             <div className="mobsubheads h-[48.419px] w-full py-2">
//                 <h2 className="subheadtext mb-4 text-[24px]">
//                     <span>Sustainability</span>
//                 </h2>
//             </div>
//             <div className="w-full rounded-lg bg-white p-6 text-[#2A2A2A] shadow-lg">
//                 <div className="text-center">
//                     <p className="headstext poppins-600 xxl:text-[24px] mb-6 text-center text-[14px]">
//                             Empowering a Greener Tomorrow, Today
//                             <br />
//                             Sustainability is embedded at the heart of UFlex’s operations, driving the company to innovate responsibly and create packaging solutions that serve both the business and the environment.
//                             <br />
//                             As a global leader in flexible packaging, UFlex recognizes its pivotal role in shaping a circular economy and reducing the ecological footprint of the packaging industry.
//                             <br />
//                             As a responsible corporate citizen, UFlex's business is rapidly innovating to accelerate the shift from the current "take-make-dispose" model often referred to as "linear economy" to "circular economy" model. As the company increasingly embraces circular economy principles and prioritize responsible plastic waste management & EPR compliance, the company stands committed to not only mitigate environmental footprint but also contribute to a positive social impact. At UFlex this holistic and forward-thinking approach is not just a strategic choice but a fundamental bedrock towards creating a more sustainable and resilient economy.
//                             <br />
//                             UFlex is committed to environmental sustainability through innovative practices and responsible resource management. The company's initiatives, including the development of a scope 3 GHG inventory and efficient waste management strategies, highlight the company's dedication to reducing its ecological footprint. By embracing circular economy principles and fostering partnerships for sustainable sourcing and recycling, UFlex aims to minimize our environmental impact while creating economic value. UFlex remains focused on driving positive change for the planet and the communities it serves.
//                         </p>
//                     <button className="mobsubheads mobbutton rounded-sm px-10 py-3 transition-colors rounded-3xl">
//                         View Details
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const MainSustainabilityComp = () => {
//     return (
//         <div className="relative mt-6 mb-12">
//             <DesktopSustainabilityComp />
//             <MobileSustainabilityComp />
//         </div>
//     )
// }

// export default MainSustainabilityComp

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
    title: "Sustainability at the Core",
    summary:
      "Empowering a Greener Tomorrow, Today. Sustainability is embedded at the heart of UFlex’s operations to innovate responsibly and create packaging solutions that serve both business and the environment.",
    expandedText:
      "Empowering a Greener Tomorrow, Today. Sustainability is embedded at the heart of UFlex’s operations, driving the company to innovate responsibly and create packaging solutions that serve both the business and the environment.",
    buttonText: "Read More",
    buttonLink: "/sustainability/core"
  },
  {
    id: 2,
    title: "Leadership in the Circular Economy",
    summary:
      "As a global leader in flexible packaging, UFlex recognizes its pivotal role in shaping a circular economy and reducing the industry’s ecological footprint.",
    expandedText:
      "As a global leader in flexible packaging, UFlex recognizes its pivotal role in shaping a circular economy and reducing the ecological footprint of the packaging industry.",
    buttonText: "Read More",
    buttonLink: "/sustainability/circular-leadership"
  },
  {
    id: 3,
    title: "From Linear to Circular: EPR & Waste Responsibility",
    summary:
      "UFlex is rapidly innovating to accelerate the shift from a take-make-dispose linear model to a circular economy, prioritizing responsible plastic waste management and EPR compliance.",
    expandedText:
      "As a responsible corporate citizen, UFlex's business is rapidly innovating to accelerate the shift from the current \"take-make-dispose\" model often referred to as \"linear economy\" to \"circular economy\" model. As the company increasingly embraces circular economy principles and prioritize responsible plastic waste management & EPR compliance, the company stands committed to not only mitigate environmental footprint but also contribute to a positive social impact. At UFlex this holistic and forward-thinking approach is not just a strategic choice but a fundamental bedrock towards creating a more sustainable and resilient economy.",
    buttonText: "Read More",
    buttonLink: "/sustainability/linear-to-circular"
  },
  {
    id: 4,
    title: "Resource Stewardship & Scope 3 Accounting",
    summary:
      "UFlex advances environmental sustainability through innovative practices, responsible resource management, and a comprehensive Scope 3 GHG inventory alongside efficient waste strategies.",
    expandedText:
      "UFlex is committed to environmental sustainability through innovative practices and responsible resource management. The company's initiatives, including the development of a scope 3 GHG inventory and efficient waste management strategies, highlight the company's dedication to reducing its ecological footprint.",
    buttonText: "Read More",
    buttonLink: "/sustainability/resource-stewardship"
  },
  {
    id: 5,
    title: "Partnerships, Recycling & Community Impact",
    summary:
      "By embracing circular principles and fostering partnerships for sustainable sourcing and recycling, UFlex aims to minimize impact, create economic value, and drive positive change for communities.",
    expandedText:
      "By embracing circular economy principles and fostering partnerships for sustainable sourcing and recycling, UFlex aims to minimize our environmental impact while creating economic value. UFlex remains focused on driving positive change for the planet and the communities it serves.",
    buttonText: "Read More",
    buttonLink: "/sustainability/partnerships-impact"
  }
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
  buttonClass = "subheads",
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



                    <p className="text-[14px] leading-relaxed opacity-90">{item.expandedText}</p>

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
          className="will-change-transform z-10 h-[85vh] w-[70%] overflow-hidden rounded bg-white text-[#2A2A2A] shadow"
        >
          <div className="subheads flex h-[79px] w-full items-center justify-center overflow-hidden rounded text-4xl">
            <span className="subheadtext text-center text-[26px]">Sustainability</span>
          </div>

          <div className="content mx-auto flex w-[85%] flex-col items-stretch p-6">
            <DropdownList items={DATA} />
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          style={{ x: xRight, opacity }}
          className="will-change-transform z-0 h-[90vh] w-[65%] overflow-hidden rounded"
        >
          <div className="relative h-full w-full">
            <Image
              src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/banner39.jpg"
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
          src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/banner39.jpg"
          alt="Sustainability"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mobsubheads mt-4  w-full py-2">
        <h2 className="subheadtext text-[14px]">
          <span>Sustainability</span>
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
