"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { ReadMoreModal } from "@/components/read-more-modal"
import { motion } from "framer-motion"
import { StatsRowPro } from "@/components/stats-row-pro"
import MainSustainabilityComp from "@/components/main-sustainibilitycomp"
import MainSustainabilityVisionComp from "@/components/main-sustainibility-vision"
import MainSustainabilityCOMMComp from "@/components/main-sustainability-commitment"
import ReportsGallery from "@/components/main-sustainibility-reports"
import Image from "next/image"
import SustainabilityReportsCarousel from "@/components/main-sustainability-commitment"
import Link from "next/link"
import { useState } from "react"

type SusTabId = "reports" | "materiality" | "assurance"

type SimpleLink = {
  title: string;
  href: string;
};


const sustainabilityReports = [
  // {
  //   title: "Sustainability Report 2024–25",
  //   href: "https://www.uflexltd.com/pdf/Sustainability/UFlex_Sustainability_Report_2024-25.pdf",
  // },
  {
    year: "2024–25",
    // title: "Sustainability Report 2023–24",
    image: "/images/sus/25.png",
    href: "https://www.uflexltd.com/pdf/Sustainability/UFlex_Sustainability_Report_2024-25.pdf",
  },
  {
    year: "2023–24",
    // title: "Sustainability Report 2023–24",
    image: "/images/sus/2024.png",
    href: "https://www.uflexltd.com/pdf/Sustainability/UFlex_Sustainability_Report_2023-24.pdf",
  },
  {
     year: "2022–23",
    // title: "Sustainability Report 2022–23",
    image: "/images/sus/2023.png",
    href: "https://www.uflexltd.com/pdf/Sustainability/UFlex_Sustainability_Report_2022-23.pdf",
  },
  {
    year: "2021–22",
    // title: "Sustainability Report 2021–22",
    image: "/images/sus/2022.png",
    href: "https://www.uflexltd.com/pdf/Sustainability/UFlex_Sustainability_Report_2021-22.pdf",
  },
];


const materialityReports = [
  {
    title: "Materiality Assessment Report – Hungary 2025",
    href: "https://www.uflexltd.com/pdf/Sustainability/MAR/FF_Hungary_2025.pdf",
  },
  {
    title: "Materiality Assessment Report – Poland 2025",
    href: "https://www.uflexltd.com/pdf/Sustainability/MAR/FF_Poland_2025.pdf",
  },
];


const assuranceStatements = [
  {
    title: "Assurance Statement – BRSR 2024–25",
    href: "https://www.uflexltd.com/pdf/Sustainability/AS/UF_BRSR_2024-25.pdf",
  },
  {
    title: "Assurance Statement – CDP 2024–25",
    href: "https://www.uflexltd.com/pdf/Sustainability/AS/UF_CDP_2024-25.pdf",
  },
  {
    title: "Assurance Statement – Sustainability Report 2024–25",
    href: "https://www.uflexltd.com/pdf/Sustainability/AS/UF_SR_2024-25.pdf",
  },
];


const susTabs: { id: SusTabId; label: string }[] = [
  { id: "reports", label: "Sustainability Reports" },
  { id: "materiality", label: "Materiality Assessment Reports" },
  { id: "assurance", label: "Assurance Statements" },
]

export default function Page() {
  const [activeTab, setActiveTab] = useState<SusTabId>("reports")



  // helper - put near the top of the file (above renderRow)

  const renderRow = (item: any, idx: any) => (
    <Link key={idx} href={item.href} target="_blank" className="block">
      <div className="flex items-center justify-between w-full bg-[#F8F8F8] px-6 py-3 text-[14px] text-black border-t border-white">
        <span>{item.title}</span>
        <Image src="/images/pdf.png" alt="PDF" width={20} height={20} />
      </div>
    </Link>
  );


  const currentHeading =
    activeTab === "reports"
      ? "Sustainability Reports"
      : activeTab === "materiality"
        ? "Materiality Assessment Reports"
        : "Assurance Statements"

  const currentList =
    activeTab === "reports"
      ? sustainabilityReports
      : activeTab === "materiality"
        ? materialityReports
        : assuranceStatements

  return (
    <main className="bg-white">
      <SiteHeader />



      <div className="relative h-[500px] w-full overflow-hidden md:h-[842px]">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/sus-top.png"
            alt="Sustainability - Forest and Earth"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Centered Top Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start px-6 pt-12 text-center md:px-20 md:pt-24">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[32px] lato-500 leading-tight text-white md:text-[48px] lg:text-[56px] lato-500"
          >
            Sustainability
          </motion.h1>

          {/* Subtitle */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-3 max-w-4xl text-[18px] leading-snug text-white opacity-95 md:text-[24px] lg:text-[28px] lato-500"
          >
            Committed to achieving carbon neutrality by 2035.
          </motion.h3>


        </div>
        <motion.div
          className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto w-full px-4 sm:px-0 pb-10 text-white md:bottom-45 md:pb-25 "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.3, staggerChildren: 0.3 },
            },
          }}
        >


          <motion.p
            className="text-left max-w-lg mt-12 sm:mt-2  text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[22px]"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Sustainability is embedded at the heart of UFlex’s operations, driving the company to innovate responsibly and create packaging solutions that serve both the business and the environment.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center mt-10"
          >
            <button className="flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm lato-400 text-black transition-all hover:bg-transparent hover:text-white">
              READ MORE
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M8 0L6.585 1.415L11.17 6H0V8H11.17L6.585 12.585L8 14L14 8L8 0Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>


      <MainSustainabilityComp />
      <div className="">

        
        <MainSustainabilityVisionComp />
      </div>
      {/* <SustainabilityReportsCarousel /> */}


      <section className="max-w-7xl mx-auto px-4 sm:px-4 pt-10 pb-12">
        {/* Tab bar */}
        <div className="flex w-fit border-b border-[#d6d6d6] mb-6">
          {susTabs.map((tab) => {
            const active = tab.id === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "relative px-6 py-2 text-sm lato-400",
                  "border border-[#d6d6d6] border-b-0",
                  "first:rounded-t-sm last:rounded-t-sm -mb-[1px]",
                  active ? "bg-white text-black" : "bg-[#F5F5F5] text-[#555]",
                ].join(" ")}
              >
                {tab.label}
                {active && (
                  <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#117ABA]" />
                )}
              </button>
            )
          })}
        </div>

        {/* Blue header */}
        <div className="w-full bg-[#117ABA] py-3 px-4">
          <h2 className="text-white text-sm sm:text-base lato-700 text-center">
            {currentHeading}
          </h2>
        </div>

        {/* List */}
        {/* <div className="bg-white">
          {currentList.map((item, idx) => renderRow(item, idx))}
        </div> */}
        {/* CONTENT */}
{activeTab === "reports" ? (
  /* IMAGE GRID LAYOUT */
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 bg-white py-12">
  {sustainabilityReports.map((item, idx) => (
    <Link
      key={idx}
      href={item.href}
      target="_blank"
      className="flex flex-col items-center group"
    >
      <div className="relative w-full max-w-[280px] h-[380px] bg-white shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
        <Image
          src={item.image}
          alt={`Sustainability Report ${item.year}`}
          fill
          className="object-contain"
        />
      </div>

      <span className="mt-3 lato-700 text-[18px] md:text-[20px] leading-tight text-[#117ABA]">
        {item.year}
      </span>
    </Link>
  ))}
</div>


) : (
  /* DEFAULT LIST FOR OTHER TABS */
  <div className="bg-white">
    {currentList.map((item, idx) => renderRow(item, idx))}
  </div>
)}

      </section>

      <SiteFooter />
    </main>
  )
}
