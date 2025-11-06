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
        className="mx-auto max-w-7xl px-6 text-center sm:px-0 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-[24px] manrope-700 text-[#117ABA] md:text-[42px] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          What We Do
        </motion.h3>

        <motion.h2
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[#5F5F5F] manrope-400 py-[2px] text-[18px] leading-tight md:text-[20px] mb-4"
        >
          As India's largest multinational flexible packaging and solutions company,{" "}
          <span className="text-[#5F5F5F] manrope-400">
            we take pride in being a completely integrated provider of sustainable packaging products and solutions.
            Discover the world of UFlex and learn more about our offerings across the business.
          </span>
        </motion.h2>
        <motion.h3
          className="text-center text-[14px] manrope-700 text-[#117ABA] md:text-[26px] mb-2 pt-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Our Businesses
        </motion.h3>
        <BusinessCardsCarousel />

      </motion.section>
      <SustainabilityComp />

      <div className="mt-12">
        <LifeatModules />
        <WhatSetsUsApart />
      </div>

      <SiteFooter />
    </main>
  )
}
