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

export default function Page() {
  return (
    <main className="bg-white">
      <SiteHeader />



      <div className="hero-section relative h-[245px] w-full overflow-hidden bg-white md:w-full md:h-[842px]">
        {/* Background Image Container */}
        <motion.div
          className="absolute top-0 left-0 h-[842px] w-full md:w-full md:h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Desktop Image with Overlay */}
          <div className="relative  h-full w-fullk">
            <Image src="/images/sus-top.png" height={842} width={1470} className="" alt="" />

            {/* <div className="absolute inset-0 bg-white" /> */}
          </div>


        </motion.div>


        {/* Text Content with Staggered Animation */}
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
          {/* Main Commitment Text */}
          <motion.h3
            className="text-[24px] poppins-800 leading-tight sm:text-[28px] md:text-[32px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Sustainability
          </motion.h3>

          {/* Sub Text */}
          <motion.p
            className="mt-2 max-w-2xl text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[18px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-6"
            >
              <button className="flex items-center gap-2 rounded-full border border-white bg-white px-2 py-2 sm:px-6 sm:py-3 text-xs poppins-400 text-black transition-all hover:bg-white hover:text-black sm:text-base">
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
            </motion.div><br className="hidden sm:block" />
            Committed to achieving carbon neutrality by 2035
          </motion.p>

          {/* CTA Button */}

        </motion.div>

        {/* Decorative Elements (Wind Turbine & Moss Ball) */}

      </div>
     

      <MainSustainabilityComp />
      <MainSustainabilityVisionComp />
      <MainSustainabilityCOMMComp />



      <SiteFooter />
    </main>
  )
}
