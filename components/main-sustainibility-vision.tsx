
// "use client"

// import Image from "next/image"
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// import { useRef, useEffect, useState } from "react"

// /* ============================= Data (edit freely) ============================= */

// type SustainabilityItem = {
//   id: number
//   title: string
//   summary: string

//   imageLink: string
// }

// const DATA: SustainabilityItem[] = [
//   {
//     id: 1,
//     title: "Promoting Mixed Plastic Recycling",
//     summary:
//       "Extensively recycling mixed plastic waste and promoting the use of recycled material",
//     imageLink: "https://uflex.wpdevstudio.site/HTML/assets/images/promoting.jpg",
//   },
//   {
//     id: 2,
//     title: "Advanced Plastic Waste Management",
//     summary:
//       "Tackling plastic waste issue on a long-term basis through the strategic adoption of advanced technologies to revolutionize the management of plastic waste segregation and collection. This system would differentiate plastics from organic materials and other recyclables, allowing the sorted plastics to be directed to UFlex’s recycling facilities",
//     imageLink: "https://uflex.wpdevstudio.site/HTML/assets/images/advanced.jpg",
//   },
//   {
//     id: 3,
//     title: "Comprehensive Waste Management Strategy",
//     summary:
//       "Reducing freshwater intake via recycling, ZLD adoption, and process optimization.",
//     imageLink: "https://uflex.wpdevstudio.site/HTML/assets/images/comprehensive.jpg",
//   },
//   {
//     id: 4,
//     title: "Multi-faceted Water Conservation Strategy",
//     summary:
//       "Option of a multi-faceted approach to water conservation and recycling, which includes implementing zero liquid discharge (ZLD) systems at our manufacturing facilities",
//     imageLink: "https://uflex.wpdevstudio.site/HTML/assets/images/multi-faceted.jpg",
//   },
//   {
//     id: 5,
//     title: "Sustainable Technology Integration",
//     summary:
//       "Integration of environmentally friendly technologies such as renewable energy sources, energy-efficient equipment, and sustainable materials",

//     imageLink: "https://uflex.wpdevstudio.site/HTML/assets/images/sustainabilty-technology.jpg",
//   },
// ]

// /* ============================= Shared UI Bits ============================= */

// const Chevron = ({ open }: { open: boolean }) => (
//   <svg
//     className={`ml-2 h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
//     viewBox="0 0 24 24"
//     fill="none"
//     aria-hidden="true"
//   >
//     <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )

// function DropdownList({
//   items,
//   accentClass = "subheads",
//   buttonClass = "subheads",
// }: {
//   items: SustainabilityItem[]
//   accentClass?: string
//   buttonClass?: string
// }) {
//   const [openId, setOpenId] = useState<number | null>()

//   return (
//     <div className="w-full ">
//       {items.map((item) => {
//         const isOpen = openId === item.id
//         return (
//           <div key={item.id} className="mb-3 rounded-lg border-[2px] bg-white">
//             <button
//               onClick={() => setOpenId(isOpen ? null : item.id)}
//               aria-expanded={isOpen}
//               className="flex w-full items-center justify-between rounded-lg px-5 py-4 text-left font-semibold text-[#1E1E1E]"
//             >
//               <div className="flex items-start gap-2">
//                 {/* <Image
//                   src={item.imageLink}
//                   alt="Mixed Plastic Recycling"
//                   width={40}
//                   height={40}
//                   className="object-contain"
//                 /> */}
//                 <div>
//                   <h3 className="text-gray-600 lato-600 text-lg">
//                     <p className="text-[14px] leading-relaxed opacity-90">{item.title}</p>

//                   </h3>

//                 </div>
//               </div>

//               <Chevron open={isOpen} />
//             </button>

//             <AnimatePresence initial={false}>
//               {isOpen && (
//                 <motion.div
//                   key="content"
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.28, ease: "easeInOut" }}
//                   className="overflow-hidden rounded-b-lg bg-white"
//                 >
//                   <div className="lato-400 px-5 pb-5 pt-1 text-gray-600">



//                     <p className="text-[14px] leading-relaxed opacity-90">{item.summary}</p>

//                   </div>


//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// /* ============================= Desktop ============================= */

// const DesktopSustainabilityComp = () => {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const [overlapPx, setOverlapPx] = useState(0)

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start 80%", "end 20%"], // animate while in view
//   })

//   useEffect(() => {
//     const el = sectionRef.current
//     if (!el) return
//     const ro = new ResizeObserver(() => {
//       const w = el.clientWidth || 0
//       setOverlapPx(w * 0.2) // 20% overlap of container width
//     })
//     ro.observe(el)
//     return () => ro.disconnect()
//   }, [])

//   const halfOverlap = overlapPx / 4
//   const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-120, halfOverlap, halfOverlap])
//   const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [120, -halfOverlap, -halfOverlap])
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])

//   return (
//     <div className="hidden sm:block">
//       <div ref={sectionRef} className="relative mx-auto flex min-h-screen max-w-[90%] items-center justify-center">
//         {/* Left: Text / Dropdown Card */}



//         <motion.div
//           style={{ x: xLeft, opacity }}
//           className="will-change-transform z-0 h-[85vh] w-[65%] overflow-hidden rounded"
//         >
//           <div className="relative h-full w-full">
//             <Image
//               src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image13.jpg"
//               alt="Sustainability"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </motion.div>

//         {/* Right: Image */}
//         <motion.div
//           style={{ x: xRight, opacity }}
//           className="will-change-transform z-10 h-[82vh] w-[70%] overflow-hidden rounded bg-gray-100 text-[#2A2A2A] shadow"
//         >
//           <div className="text-[#117ABA] flex h-[79px] w-full items-center justify-center overflow-hidden rounded text-4xl">
//             <span className=" text-center text-[26px]">UFlex’s sustainability vision </span>
//           </div>

//           <div className="content mx-auto flex w-[85%] flex-col items-stretch p-6">
//                      <p className="text-[16px] mb-2 text-[#333] leading-relaxed">
//            UFlex’s sustainability initiatives are extensive and feature a variety of advanced
//            projects and products, such as:
//          </p>
           
//             <DropdownList items={DATA} />
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   )
// }

// /* ============================= Mobile ============================= */

// const MobileSustainabilityComp = () => {
//   return (
//     <div className="mx-auto block max-w-[90%] flex-col items-center justify-center sm:hidden">
//       <div className="relative h-[40vh] w-full overflow-hidden rounded">
//         <Image
//           src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image13.jpg"
//           alt="Sustainability"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       <div className="text-[#117ABA] mt-4  w-full py-2">
//         <h2 className=" text-[14px]">
//           <span>UFlex’s sustainability vision </span>
//         </h2>
//       </div>

//       <div className="w-full rounded-lg bg-gray-100 p-4 text-[#2A2A2A] shadow-lg">
//                              <p className="text-[16px] mb-2 text-[#333] leading-relaxed">
//            UFlex’s sustainability initiatives are extensive and feature a variety of advanced
//            projects and products, such as:
//          </p>
//         <DropdownList items={DATA} buttonClass="mobsubheads mobbutton" />
//       </div>
//     </div>
//   )
// }

// /* ============================= Main Wrapper ============================= */

// const MainSustainabilityCOMMComp = () => {
//   return (
//     <div className="relative mt-6 mb-12">
//       <DesktopSustainabilityComp />
//       <MobileSustainabilityComp />
//     </div>
//   )
// }

// export default MainSustainabilityCOMMComp

"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

/* ============================= Data ============================= */

type SustainabilityItem = {
  id: number;
  title: string;
  summary: string;
  // imageLink: string;
};

const DATA: SustainabilityItem[] = [
  {
    id: 1,
    title: "Project Plastic Fix",
    summary:
      "UFlex’s global sustainability initiative, ‘Project Plastic Fix’, is designed to develop solutions that keep plastic in the economy and out of the environment.",
    
  },
  {
    id: 2,
    title: "Restoring Biodiversity",
    summary:
      "Beyond our internal operations, we have actively engaged with local communities and stakeholders to implement collaborative water management initiatives.",
    
  },
  {
    id: 3,
    title: "Waste Water Management",
    summary:
      "To ensure efficiency with water consumption and water withdrawal, the company has implemented Effluent Treatment Plants (ETPs) and Sewage Treatment Plants (STPs) in manufacturing plants.",
    
  },
  {
    id: 4,
    title: "Waste Management",
    summary:
      "The company generated a total of 31,172 MT of waste in FY24, which was 1,112 MT lesser than the total waste generated in FY23.",
    
  },
  {
    id: 5,
    title: "Solar Power Initiatives",
    summary:
      "UFlex is constantly innovating to ensure that the company maintains energy-efficient operations. As a testament to this, UFlex has entered into a strategic commitment with a third-party to supply solar power to the company’s Dharwad plant.",
    
    
  },
  {
    id: 6,
    title: "Communities",
    summary:
      "CSR programs that enable livelihoods, education, and health outcomes.",
    
  },
]

/* ============================= Chevron ============================= */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className={`ml-2 h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ============================= Dropdown (measured height + CSS transition) ============================= */

function DropdownList({ items }: { items: SustainabilityItem[] }) {
  const [openId, setOpenId] = useState<number | null>(null);

  // refs for each content block so we can measure (for pixel-perfect height)
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [measuredHeights, setMeasuredHeights] = useState<Record<number, number>>({});

  // measure all items on mount and whenever window resizes (helps first-open)
  useLayoutEffect(() => {
    const measureAll = () => {
      const map: Record<number, number> = {};
      for (const it of items) {
        const el = contentRefs.current[it.id];
        if (el) map[it.id] = el.scrollHeight;
        else map[it.id] = 0;
      }
      setMeasuredHeights(map);
    };

    measureAll();
    window.addEventListener("resize", measureAll);
    return () => window.removeEventListener("resize", measureAll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // also observe changes to each open content so we adjust if inner content changes (images, fonts)
  useEffect(() => {
    const observers: ResizeObserver[] = [];
    for (const it of items) {
      const el = contentRefs.current[it.id];
      if (!el) continue;
      const ro = new ResizeObserver(() => {
        setMeasuredHeights((prev) => ({ ...prev, [it.id]: el.scrollHeight }));
      });
      ro.observe(el);
      observers.push(ro);
    }
    return () => observers.forEach((r) => r.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div className="w-full">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const heightPx = measuredHeights[item.id] ?? 0;

        return (
          <div key={item.id} className="mb-4 rounded">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between rounded bg-white px-6 py-4 text-left font-medium text-[#111] shadow-sm transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                
                <div className="text-[15px] font-semibold text-[#111]">{item.title}</div>
              </div>

              <Chevron open={isOpen} />
            </button>

            {/* animated container using CSS transitions on height + opacity */}
            <div
              aria-hidden={!isOpen}
              style={{
                height: isOpen ? `${heightPx}px` : 0,
                opacity: isOpen ? 1 : 0,
                transition: "height 360ms cubic-bezier(.22,.06,.12,.95), opacity 220ms linear",
                overflow: "hidden",
                willChange: "height, opacity",
                background: "white",
              }}
              className="px-6 pb-4"
            >
              <div
                ref={(el) => {
                  contentRefs.current[item.id] = el;
                }}
                className="py-1"
              >
                <p className="text-[14px] leading-relaxed text-slate-700">{item.summary}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ============================= Main Component (no Framer Motion) ============================= */

export default function SustainabilityShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const colHeightClass = "h-[82vh]";

  return (
    <section ref={sectionRef} className="bg-[#E6E7E7] mx-auto w-full max-w-7xl px-4 py-12 sm:px-4 lg:py-20">
      {/* Desktop layout */}
      <div className="hidden sm:flex gap-8 items-start">
        {/* Left panel: fixed height, internal scroll but scrollbar hidden visually */}
        <div className={`${colHeightClass} w-1/2 bg-[#E6E7E7] p-8 overflow-auto rounded no-scrollbar`}>
          <div className="max-w-[520px]">
            {/* <h3 className="text-[#117ABA] text-[22px] font-extrabold mb-3">UFlex’s sustainability vision</h3>
            <p className="text-[15px] text-slate-700 mb-6">
              UFlex’s sustainability initiatives are extensive and feature a variety of advanced projects and products, such as:
            </p> */}

            <DropdownList items={DATA} />
            <div className="h-6" />
          </div>
        </div>

        {/* Right panel: fixed height, image card unaffected by left scroll */}
        <div className={`${colHeightClass} w-1/2 flex items-center justify-center`}>
          <div className="w-full max-w-[680px]">
            <div className="rounded-lg bg-[#E6E7E7]  overflow-hidden">
              <div className="relative h-[679px] w-full">
                <Image src="/images/susworld.png" alt="sustainability" fill className="object-contain" />
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="sm:hidden">
        <div className="relative h-[44vh] w-full overflow-hidden rounded-lg">
          <Image src="/images/susworld.png" alt="sustainability" fill className="object-cover" />
        </div>

        <div className="mt-4">
          
        </div>

        <div className="mt-4">
          <DropdownList items={DATA} />
        </div>
      </div>

      {/* hide scrollbar visually but keep scrolling functionality */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
