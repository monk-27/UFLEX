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

export default function Page() {
  return (
    <main className="bg-white">
      <SiteHeader />



      <div className="hero-section relative h-[245px] w-full overflow-hidden bg-white md:h-[842px]">
        {/* Background Image Container */}
        <motion.div
          className="absolute inset-0"  // This ensures full coverage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Fixed: Use object-cover, fill parent, remove fixed width */}
          <Image
            src="/images/sus-top.png"
            fill
            className="object-cover object-center"
            alt="Sustainability"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end px-5 pb-16 text-left text-white sm:px-20 md:bottom-20 md:pb-20 md:pl-20"
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
          <motion.h3
            className="text-[24px] font-extrabold leading-tight sm:text-[28px] md:text-[32px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Sustainability
          </motion.h3>

          <motion.span
            className="mt-2 max-w-2xl text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[18px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Committed to achieving carbon neutrality by 2035
            <br className="hidden sm:block" />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-6 inline-block"
            >
              <button className="flex items-center gap-2 rounded-full border border-white bg-white px-2 py-2 text-xs font-normal text-black transition-all hover:bg-transparent hover:text-white sm:px-6 sm:py-3 sm:text-base">
                SEE MORE
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
          </motion.span>
        </motion.div>
      </div>


      <MainSustainabilityComp />
      <motion.h3
          className="text-center text-[24px] manrope-700 text-[#117ABA] md:text-[42px] mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          UFlex's Commitment to a Circular Economy
        </motion.h3>
      <MainSustainabilityVisionComp />
      <SustainabilityReportsCarousel />




      <SiteFooter />
    </main>
  )
}
