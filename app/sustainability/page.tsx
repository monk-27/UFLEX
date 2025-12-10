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
            className="text-[32px] font-medium leading-tight text-white md:text-[48px] lg:text-[56px] lato-500"
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
      <motion.h3
        className="text-center text-[24px] lato-400 text-[#117ABA] md:text-[28px] mb-8"
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
