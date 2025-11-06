

"use client";

import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Hero from "@/components/about/hero";
import CompanyInfo from "@/components/about/company-info";
import VisionMission from "@/components/about/vision-mission";
import GlobalFootprint from "@/components/about/global-footprint";
import KeyManagement from "@/components/about/key-management";
import Journey from "@/components/about/journey";
import { motion } from "framer-motion";
import Image from "next/image";

// 👇 Dynamically import Swiper-based components
const BoardOfDirectors = dynamic(() => import("@/components/about/board-of-directors"), {
  ssr: false,
  loading: () => null,
});
const BodMob = dynamic(() => import("@/components/about/bod-mob"), {
  ssr: false,
  loading: () => null,
});

export default function AboutPage() {
  return (
    <main className="">
      <SiteHeader />
      <section className="bg-white">
        <Hero />
        <CompanyInfo />
        <VisionMission />
        <GlobalFootprint />
        <div className="">
          <BoardOfDirectors />
        </div>
        {/* <div className="block sm:hidden space-y-4">
          <BodMob />
        </div> */}
        

        

        <KeyManagement />
        <Journey /> 
         <div className="relative h-[570px] w-full overflow-hidden mt-[30px] px-4 py-0 text-center sm:mt-8  sm:py-10 md:px-12 md:h-[580px]">
            {/* Background Image - Full Bleed */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/corp.png"
                fill
                className="object-cover object-center"
                alt="Sustainability"
                priority
                sizes="100vw"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1 }}
            ></motion.div>


            {/* Header Bar */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-white py-4 md:py-6">
              <div className="mx-auto max-w-7xl px-5 md:px-20">
                <h2 className="text-center text-[24px]  manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl mb-12">
                  Corporate Presentation
                </h2>
              </div>
            </div>

            {/* Text Content */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end px-5 pb-16 text-white md:bottom-20 md:pb-20 md:pl-20"
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
                className="text-left max-w-lg text-[20px] manrope-500 leading-tight sm:text-[28px] md:text-[32px]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                Committed to achieving carbon neutrality by 2035
              </motion.h3>

              {/* <motion.p
          className="mt-2 max-w-2xl text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[18px]"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Sustainability and environmental stewardship are
          <br className="hidden sm:block" />
          at the forefront of our business practices.
        </motion.p> */}

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="mt-6"
              >
                <button className="flex items-center gap-2 rounded-md  bg-[#CE2027] px-6 py-3 text-sm font-medium text-white transition-all ">
                  Download
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
      </section>
      <SiteFooter />
    </main>
  );
}
