// "use client"

// import Image from "next/image"
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// import { useRef, useEffect, useState } from "react"

// /* ============================= Data (edit freely) ============================= */

// type SustainabilityItem = {
//   id: number
//   title: string
//   summary: string
//   expandedText: string
//   buttonText: string
//   buttonLink: string
// }

// const DATA: SustainabilityItem[] = [
//   {
//     id: 1,
//     title: "Project Plastic Fix",
//     summary:
//       "UFlex’s global sustainability initiative designed to keep plastic in the economy and out of the environment.",
//     expandedText:
//       "Paste your detailed description here… Outline goals, pilots, geographies, technology stack, partnerships, impact metrics, and 12–24 month roadmap.",
//     buttonText: "Read More",
//     buttonLink: "/project-plastic-fix",
//   },
//   {
//     id: 2,
//     title: "Restoring Biodiversity",
//     summary:
//       "Programs focused on restoring ecosystems and protecting habitats across operating regions.",
//     expandedText:
//       "Paste full copy… Reforestation drives, native species support, community participation models, and third-party audits.",
//     buttonText: "Learn More",
//     buttonLink: "/restoring-biodiversity",
//   },
//   {
//     id: 3,
//     title: "Waste Water Management",
//     summary:
//       "Reducing freshwater intake via recycling, ZLD adoption, and process optimization.",
//     expandedText:
//       "Paste full copy… Plant-level targets, ETP upgrades, monitoring cadence, compliance benchmarks, and year-on-year outcomes.",
//     buttonText: "Know More",
//     buttonLink: "/waste-water-management",
//   },
//   {
//     id: 4,
//     title: "Solar Power Initiatives",
//     summary:
//       "Scaling on-site and off-site renewables to decarbonize electricity consumption.",
//     expandedText:
//       "Paste full copy… Installed capacity, PPAs, storage pilots, grid mix impact, and projected CO₂e reductions.",
//     buttonText: "Explore",
//     buttonLink: "/solar-power",
//   },
//   {
//     id: 5,
//     title: "Communities",
//     summary:
//       "CSR programs that enable livelihoods, education, and health outcomes.",
//     expandedText:
//       "Paste full copy… Multi-year commitments, NGO partners, measurement framework, and SDG alignment.",
//     buttonText: "Discover",
//     buttonLink: "/communities",
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
//   buttonClass = "",
// }: {
//   items: SustainabilityItem[]
//   accentClass?: string
//   buttonClass?: string
// }) {
//   const [openId, setOpenId] = useState<number | null>()

//   return (
//     <div className="w-full">
//       {items.map((item) => {
//         const isOpen = openId === item.id
//         return (
//           <div key={item.id} className="mb-3 rounded-lg border-[2px] bg-white">
//             <button
//               onClick={() => setOpenId(isOpen ? null : item.id)}
//               aria-expanded={isOpen}
//               className="flex w-full items-center justify-between rounded-lg px-5 py-4 text-left font-semibold text-[#1E1E1E]"
//             >
//               <div>
//                   <h3 className="text-gray-600 manrope-600 text-lg">
//                     <p className="text-[14px] leading-relaxed opacity-90">{item.title}</p>

//                   </h3>

//                 </div>
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
//                   <div className="px-5 pb-5 pt-1 text-[#2A2A2A]">
//                     <div className="manrope-400 px-5 pb-5 pt-1 text-gray-600">



//                     <p className="text-[14px] leading-relaxed opacity-90">{item.summary}</p>

//                   </div>
//                   <div className="mt-4 inline-block rounded-xl px-2 py-2 text-green-900">
// <a
//                       href={item.buttonLink}
//                       className={` border-[2px] border-[#117ABA]  bg-[#117ABA]  text-sm mt-4 inline-block rounded-xl px-2 py-2 text-white`}
//                     >
//                       {item.buttonText}
//                     </a>
//                   </div>

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
//           className="will-change-transform z-10 h-[75vh] w-[70%] overflow-hidden rounded bg-gray-100 text-[#2A2A2A] shadow"
//         >
//           <div className="text-[#117ABA] flex h-[79px] w-full items-center justify-center overflow-hidden rounded text-4xl">
//             <span className=" text-center text-[26px]">UFlex's Commitment to a Circular Economy</span>
//           </div>

//           <div className="content mx-auto flex w-[85%] flex-col items-stretch p-6">
//             <DropdownList items={DATA} />
//           </div>
//         </motion.div>

//         {/* Right: Image */}
//         <motion.div
//           style={{ x: xRight, opacity }}
//           className="will-change-transform z-0 h-[80vh] w-[65%] overflow-hidden rounded"
//         >
//           <div className="relative h-full w-full">
//             <Image
//               src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/corporate_image54.jpg"
//               alt="Sustainability"
//               fill
//               className="object-cover"
//               priority
//             />
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
//           src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/corporate_image54.jpg"
//           alt="Sustainability"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       <div className="text-[#117ABA] mt-4  w-full py-2">
//         <h2 className=" text-[14px]">
//           <span>UFlex's Commitment to a Circular Economy</span>
//         </h2>
//       </div>

//       <div className="w-full rounded-lg bg-gray-100 p-4 text-[#2A2A2A] shadow-lg">
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


// components/SustainabilityReportsCarousel.tsx

// "use client"

// import { SiteHeader } from "@/components/site-header"
// import { SiteFooter } from "@/components/site-footer"
// import { AnimatedSection } from "@/components/animated-section"
// import Link from "next/link"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { useRef } from "react"

// type Item = {
//   href: string
//   title: string
//   image?: string
//   blurb?: string
//   desc?: string
// }

// const items: Item[] = [
//   {
//     title: "Packaging Films",
//     href: "/packaging-films-business",
//     desc: "High-performance BOPET/BOPP films for diverse applications.",
//     image: "/images/flex.jpeg"
//     // image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Packaging-Films-Business-faq-icon21.svg",
//   },
//   {
//     title: "Flexible Packaging",
//     href: "/flexible-packaging-business",
//     desc: "Custom structures for brand impact and efficiency.",
//     image: "/images/flexible.png"

//     // image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Flexible-Packaging-Business-faq-icon36.svg",
//   },
//   {
//     title: "Aseptic Packaging",
//     href: "/aseptic-packaging-business",
//     desc: "Safe, shelf-stable solutions with extended freshness.",
//     image: "/images/aseptic.png"

//     // image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Aseptic-Packaging-Business-faq-icon56.svg",
//   },
//   {
//     title: "Chemicals",
//     href: "/chemicals-business",
//     desc: "Speciality chemicals powering packaging performance.",
//     image: "/images/chem.jpeg"
//     // image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Chemicals-Business-faq-icon20.svg",
//   },
//   {
//     title: "Holography",
//     href: "/holography-business",
//     desc: "Security and decorative holographic solutions.",
//     image: "/images/holographys.png"

//     // image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Holography-Business-faq-icon47.svg",
//   },
//   {
//     title: "Engineering",
//     href: "/engineering-business",
//     desc: "Turnkey packaging machinery and systems.",
//     image: "/images/engg.png"

//     // image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Engineering-Business-faq-icon45.svg",
//   },
//   {
//     title: "Printing Cylinders",
//     href: "/printing-cylinder-business",
//     desc: "Precision cylinders for consistent print quality.",
//     image: "/images/cyls.png"
//     // image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Printing-Cylinder-Business-faq-icon03.svg",
//   },
//   {
//     title: "FlexiTubes",
//     href: "/flexitube-business",
//     desc: "Durable, brandable tubes for personal care and more.",
//     image: "/images/flexible.jpeg"

//     // image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/FlexiTube-Business-faq-icon59.svg",
//   },
// ]

// // Same palette you used for Board/Key Management
// const cardColors = [
//   // { border: "border-green-400", bg: "bg-green-50/70", title: "text-green-700", ring: "ring-green-200", tint: "bg-green-100/70" },
//   // { border: "border-blue-400", bg: "bg-blue-50/70", title: "text-blue-700", ring: "ring-blue-200", tint: "bg-blue-100/70" },
//   // { border: "border-pink-400", bg: "bg-pink-50/70", title: "text-pink-700", ring: "ring-pink-200", tint: "bg-pink-100/70" },
//   // { border: "border-purple-400", bg: "bg-purple-50/70", title: "text-purple-700", ring: "ring-purple-200", tint: "bg-purple-100/70" },
//   // { border: "border-yellow-400", bg: "bg-yellow-50/70", title: "text-yellow-700", ring: "ring-yellow-200", tint: "bg-yellow-100/70" },
//   // { border: "border-cyan-400", bg: "bg-cyan-50/70", title: "text-cyan-700", ring: "ring-cyan-200", tint: "bg-cyan-100/70" },
//   // { border: "border-orange-400", bg: "bg-orange-50/70", title: "text-orange-700", ring: "ring-orange-200", tint: "bg-orange-100/70" },
//   // { border: "border-red-400", bg: "bg-red-50/70", title: "text-red-700", ring: "ring-red-200", tint: "bg-red-100/70" },
//   // { border: "border-indigo-400", bg: "bg-indigo-50/70", title: "text-indigo-700", ring: "ring-indigo-200", tint: "bg-indigo-100/70" },
//   { border: "border-gray-200", bg: "bg-gray-100", title: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-[#117ABA]", textOnTint: "text-green-900" },

// ]

// export default function WhatWeDoPage() {
//   const stripRef = useRef<HTMLDivElement | null>(null)

//   const scrollStrip = (dir: "left" | "right") => {
//     const n = stripRef.current
//     if (!n) return
//     const delta = n.clientWidth * 0.8
//     n.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" })
//   }

//   return (
//     <main className="min-h-screen bg-white">
//       <SiteHeader />

//       {/* HERO */}
//       <section className="bg-gradient-to-b from-white to-slate-50">
//         <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
//           <div>
//             <motion.h1
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl"
//             >
//               What We Do
//             </motion.h1>
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.05 }}
//               className="manrope-400 mt-5 space-y-4 text-slate-700"
//             >
//               <p>
//                 We operate across the entire packaging value chain, offering unmatched integration and scale. Our
//                 capabilities span PET and rPET resins, packaging films, converting, aseptic packaging, inks and
//                 adhesives, holography, printing cylinders, printing and packaging machinery.
//               </p>
//               <p>
//                 We are the only Indian company offering both standalone components and fully integrated flexible
//                 packaging solutions—from design and engineering to advanced printing and machinery—delivering true
//                 end-to-end capabilities.
//               </p>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-blue-400 shadow ring-4 ring-blue-200"
//           >
//             <Image
//               src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/What-We-Do01.jpg"
//               alt="UFlex capabilities across the value chain"
//               fill
//               className="object-cover"
//               priority
//             />
//             {/* subtle overlay gradient for readability */}
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
//           </motion.div>
//         </div>
//       </section>

//       {/* FEATURED STRIP (like your screenshot with arrows) */}
//       <section aria-labelledby="featured" className="relative">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6">
//           <h2 id="featured" className="text-center text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl">
//             Our Expansion
//           </h2>


//         </div>
//       </section>

//       {/* ALL CATEGORIES GRID */}
//       <AnimatedSection>
//         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {items.map((it, idx) => {
//               const c = cardColors[idx % cardColors.length]
//               return (
//                 <motion.div
//                   key={it.href}
//                   initial={{ opacity: 0, y: 14 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.05 }}
//                   className={`group relative overflow-hidden rounded-2xl border-2 ${c.border} ${c.bg} p-0 shadow transition`}
//                 >
//                   <Link href={it.href} className="block focus:outline-none">
//                     <div className="relative h-44 w-full overflow-hidden">
//                       <Image
//                         src={it.image ?? "/images/whatwedo/placeholder.jpg"}
//                         alt={it.title}
//                         fill
//                         className="rounded-b-none object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
//                     </div>

//                     <div className="space-y-2 p-5">
//                       <h3 className="text-lg manrope-800 text-gray-900">{it.title}</h3>
//                       <p className={`manrope-400 text-sm text-slate-700`}>
//                         {it.desc}
//                       </p>
//                       <span
//                         className={`inline-flex items-center text-sm manrope-700 ${c.title} hover:underline underline-offset-4`}
//                       >
//                         Learn more →
//                       </span>
//                     </div>
//                   </Link>

//                   {/* subtle color band on bottom to match theme */}
//                   <div className={`h-1 w-full ${c.tint}`} />
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </AnimatedSection>

//       <SiteFooter />

//       {/* Utilities */}
//       <style jsx global>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </main>
//   )
// }
"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Slider, { Settings as SlickSettings } from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/* ------------------------------- THEME ------------------------------- */
const BRAND = {
  primary: "#117ABA",
  dark: "#0B3C7D",
  text: "#117ABA",
};

export type InvestorCard = {
  title: string;
  desc?: string;
  img: string;
  href?: string;
};

type ArrowProps = { onClick?: () => void; disabled?: boolean; direction: "left" | "right" };

/* ------------------------------- ARROW -------------------------------- */
function Arrow({ onClick, disabled, direction }: ArrowProps) {
  return (
    <button
      aria-label={direction === "left" ? "Previous" : "Next"}
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[45px] h-[45px] rounded-full bg-black text-white transition-all duration-200 ${direction === "left" ? "-left-12" : "-right-12"
        } ${disabled ? "opacity-40 pointer-events-none" : "opacity-100"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        {direction === "left" ? (
          <>
            {/* horizontal shaft */}
            <path d="M16 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* chevron head pointing left */}
            <path d="M12 16L8 12L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            {/* horizontal shaft */}
            <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* chevron head pointing right */}
            <path d="M12 8L16 12L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    </button>



  );
}

/* ---------------------------- INVESTOR SLIDER -------------------------- */
function InvestorSlider({ items, heading, id }: { items: InvestorCard[]; heading: string; id: string }) {
  const sliderRef = useRef<Slider | null>(null);

  const settings: SlickSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      arrows: true,
      prevArrow: <Arrow direction="left" />,
      nextArrow: <Arrow direction="right" />,
      responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    }),
    []
  );

  return (
    <section aria-labelledby={`${id}-heading`} className=" px-4 sm:px-6 lg:px-0 py-10">
      <h2 id={`${id}-heading`} className="text-center text-[24px] manrope-700 text-[#117ABA] md:text-[42px] mb-12">
        {heading}
      </h2>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {items.map((card, idx) => (
            <div className="px-2 sm:px-3" key={`${card.title}-${idx}`}>
              <article className="relative overflow-hidden rounded-sm shadow-sm ring-1 ring-slate-200 h-full bg-white">
                <div className="relative">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      priority={idx < 2}
                    />
                  </div>

                  <div className="p-4 md:p-5">
                    <h3 className="text-center text-[#117ABA] text-sm manrope-600 text-[16px]">{card.title}</h3>

                  </div>
                  <div className="text-gray-400 manrope-400 text-right items-end">
                    <button className="">
                      Download {">>"}
                    </button>
                  </div>

                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        /* dots spacing and shape */
        .slick-dots {
          margin-top: 18px;
          display: flex !important;
          justify-content: center;
          gap: 8px;
          padding: 0;
          margin-top: 24px;
        }
        .slick-dots li button:before {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background-color: #D1D5DB;
          opacity: 0.6;
        }
           .slick-dots {
  
    margin-top: 24px; /* adjust as needed */
    position: static !important; /* ensures it stays below slides */
  }
        .slick-dots li.slick-active button:before {
          background-color: ${BRAND.primary};
          opacity: 1;
          transform: scale(1.12);
        }

        /* show our custom arrows (we place them via prevArrow/nextArrow) */
        .slick-prev,
        .slick-next {
          display: none !important;
        }

        /* ensure slides stretch height */
        .slick-track {
          display: flex;
          align-items: stretch;
        }
        .slick-slide > div {
          height: 100%;
          display: flex;
        }
      `}</style>
    </section>
  );
}

/* -------------------------------- HERO/BANNER -------------------------- */
/*
  Updated: pill (Investors) is positioned so it sits half on the banner image
  and half below the banner (matches the screenshot). The pill is placed
  outside the overflow-hidden image wrapper by using an absolutely positioned
  container anchored to the banner's bottom and translated by 50% vertically.
*/


/* --------------------------------- PAGE -------------------------------- */
export default function WhatWeDoPage() {
  const investorRelations: any[] = [
    {
      title: "2023-24",
      href: "/packaging-films-business",
      desc: "High-performance BOPET/BOPP films for diverse applications.",
      img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/2023-2418.jpg"
      // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Packaging-Films-Business-faq-icon21.svg",
    },
    {
      title: "2022-23",
      href: "/flexible-packaging-business",
      desc: "Custom structures for brand impact and efficiency.",
      img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/2022-2341.jpg"

      // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Flexible-Packaging-Business-faq-icon36.svg",
    },
    {
      title: "2021-22",
      href: "/aseptic-packaging-business",
      desc: "Safe, shelf-stable solutions with extended freshness.",
      img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/2021-2200.jpg"

      // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Aseptic-Packaging-Business-faq-icon56.svg",
    },
    

  ]

  // const policiesDocs: InvestorCard[] = [
  //   { title: "Unpaid / Unclaimed Dividend", subtitle: "Check & claim.", image: "/images/policy1.png", href: "#" },
  //   { title: "Transfer of shares to IEPF", subtitle: "Process & status.", image: "/images/policy2.png", href: "#" },
  //   { title: "Registrar", subtitle: "RTA contact.", image: "/images/policy3.png", href: "#" },
  //   { title: "Compliance Report", subtitle: "Statutory disclosures.", image: "/images/policy4.png", href: "#" },
  //   { title: "Registrar", subtitle: "RTA contact.", image: "/images/policy3.png", href: "#" },

  // ];

  return (

    <main className="bg-gradient-to-b from-white to-slate-50">


      {/* Sliders */}
      <InvestorSlider id="investor-relations" heading="Sustainability Reports" items={investorRelations} />
      {/* <InvestorSlider id="policies" heading="Policies, announcements and other documents" items={policiesDocs} /> */}

      <div className="h-16" />
      {/* global tweaks for slick */}
      <style jsx global>{`
        .slick-slide > div { display: block; }
        .slick-list { border-radius: 0.75rem; }
        .slick-arrow { transition: transform .15s ease; }
        .slick-arrow:hover { transform: translateY(-50%) scale(1.05); }

        /* show the slider's prev/next wrappers (we're rendering our own arrows via prevArrow/nextArrow props) */
        .slick-slider .slick-prev, .slick-slider .slick-next { display: block !important; }
      `}</style>
    </main>
  );
}
