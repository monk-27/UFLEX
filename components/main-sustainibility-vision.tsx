// "use client"

// import Image from "next/image"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef, useEffect, useState } from "react"

// const DesktopSustainabilityComp = () => {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const [overlapPx, setOverlapPx] = useState(0)

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start 80%", "end 20%"],
//   })

//   useEffect(() => {
//     const el = sectionRef.current

"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useEffect, useState } from "react"

/* ============================= Data (edit freely) ============================= */

type SustainabilityItem = {
  id: number
  title: string
  summary: string

  imageLink: string
}

const DATA: SustainabilityItem[] = [
  {
    id: 1,
    title: "Promoting Mixed Plastic Recycling",
    summary:
      "Extensively recycling mixed plastic waste and promoting the use of recycled material",
    imageLink: "https://uflex.wpdevstudio.site/HTML/assets/images/promoting.jpg",
  },
  {
    id: 2,
    title: "Advanced Plastic Waste Management",
    summary:
      "Tackling plastic waste issue on a long-term basis through the strategic adoption of advanced technologies to revolutionize the management of plastic waste segregation and collection. This system would differentiate plastics from organic materials and other recyclables, allowing the sorted plastics to be directed to UFlex’s recycling facilities",
    imageLink: "https://uflex.wpdevstudio.site/HTML/assets/images/advanced.jpg",
  },
  {
    id: 3,
    title: "Comprehensive Waste Management Strategy",
    summary:
      "Reducing freshwater intake via recycling, ZLD adoption, and process optimization.",
    imageLink: "https://uflex.wpdevstudio.site/HTML/assets/images/comprehensive.jpg",
  },
  {
    id: 4,
    title: "Multi-faceted Water Conservation Strategy",
    summary:
      "Option of a multi-faceted approach to water conservation and recycling, which includes implementing zero liquid discharge (ZLD) systems at our manufacturing facilities",
    imageLink: "https://uflex.wpdevstudio.site/HTML/assets/images/multi-faceted.jpg",
  },
  {
    id: 5,
    title: "Sustainable Technology Integration",
    summary:
      "Integration of environmentally friendly technologies such as renewable energy sources, energy-efficient equipment, and sustainable materials",

    imageLink: "https://uflex.wpdevstudio.site/HTML/assets/images/sustainabilty-technology.jpg",
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
  buttonClass = "subheads",
}: {
  items: SustainabilityItem[]
  accentClass?: string
  buttonClass?: string
}) {
  const [openId, setOpenId] = useState<number | null>()

  return (
    <div className="w-full ">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className="mb-3 rounded-lg border-[2px] bg-white">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between rounded-lg px-5 py-4 text-left font-semibold text-[#1E1E1E]"
            >
              <div className="flex items-start gap-2">
                {/* <Image
                  src={item.imageLink}
                  alt="Mixed Plastic Recycling"
                  width={40}
                  height={40}
                  className="object-contain"
                /> */}
                <div>
                  <h3 className="text-gray-600 poppins-600 text-lg">
                    <p className="text-[14px] leading-relaxed opacity-90">{item.title}</p>

                  </h3>

                </div>
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
                  <div className="poppins-400 px-5 pb-5 pt-1 text-gray-600">



                    <p className="text-[14px] leading-relaxed opacity-90">{item.summary}</p>

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
          className="will-change-transform z-0 h-[85vh] w-[65%] overflow-hidden rounded"
        >
          <div className="relative h-full w-full">
            <Image
              src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image13.jpg"
              alt="Sustainability"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          style={{ x: xRight, opacity }}
          className="will-change-transform z-10 h-[82vh] w-[70%] overflow-hidden rounded bg-gray-100 text-[#2A2A2A] shadow"
        >
          <div className="text-[#117ABA] flex h-[79px] w-full items-center justify-center overflow-hidden rounded text-4xl">
            <span className=" text-center text-[26px]">UFlex’s sustainability vision </span>
          </div>

          <div className="content mx-auto flex w-[85%] flex-col items-stretch p-6">
                     <p className="text-[16px] mb-2 text-[#333] leading-relaxed">
           UFlex’s sustainability initiatives are extensive and feature a variety of advanced
           projects and products, such as:
         </p>
           
            <DropdownList items={DATA} />
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
          src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image13.jpg"
          alt="Sustainability"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="text-[#117ABA] mt-4  w-full py-2">
        <h2 className=" text-[14px]">
          <span>UFlex’s sustainability vision </span>
        </h2>
      </div>

      <div className="w-full rounded-lg bg-gray-100 p-4 text-[#2A2A2A] shadow-lg">
                             <p className="text-[16px] mb-2 text-[#333] leading-relaxed">
           UFlex’s sustainability initiatives are extensive and feature a variety of advanced
           projects and products, such as:
         </p>
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
