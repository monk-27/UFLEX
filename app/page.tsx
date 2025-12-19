"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroVideo } from "@/components/hero-video"
import { motion } from "framer-motion"
import SustainabilityComp from "@/components/sustainability"
import LifeatModules from "@/components/life-at"
import WhatSetsUsApart from "@/components/sets-us-apart"
import BusinessCardsCarousel from "@/components/what-we-do-grid"


export default function HomePage() {
  return (
    <main className="bg-white">
      <SiteHeader />

      <section className="relative">
        <HeroVideo />

      </section>

      <motion.section
        className="max-w-7xl mx-auto w-full px-4 sm:px-0 text-center pt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-[24px] lato-400 text-[#117ABA] md:text-[28px] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          What We Do
        </motion.h3>

        <motion.h2
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-7xl  text-[#5F5F5F] lato-400 py-[2px] text-[14px] leading-tight md:text-[20px] mb-4"
        >
          As India's largest multinational flexible packaging and solutions company,{" "}
          <span className="text-[#5F5F5F] lato-400">
            we take pride in being a completely integrated provider of sustainable packaging products and solutions.
            Discover the world of UFlex and learn more about our offerings across the business.
          </span>
        </motion.h2>
        <motion.h3
          className="text-center text-[14px] lato-400 text-[#117ABA] md:text-[28px] pt-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Our Businesses
        </motion.h3>
        <BusinessCardsCarousel />

      </motion.section>
      <div className="z-10 bg-white pt-6">
        <div className="text-center max-w-7xl mx-auto w-full px-4 sm:px-0 pb-12">
          <h2 className="text-center text-[14px] lato-400 text-[#117ABA] md:text-[28px] ">
            Sustainability
          </h2>
          <span className=" text-[#181818] text-center lato-400  text-[14px] sm:text-[20px] ">
             Embedding sustainability across materials, operations, and value chains
          </span>
        </div>
      </div>
      <SustainabilityComp />

      <div className="">
        <LifeatModules />
        <WhatSetsUsApart />
      </div>

      <SiteFooter />
    </main>
  )
}
