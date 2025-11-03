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
        className="mx-auto max-w-6xl px-6 text-center sm:px-0 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-[24px]  poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          What We Do
        </motion.h3>

        <motion.h2
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-800 poppins-700 py-[2px] text-[18px] leading-tight md:text-[20px] mb-4"
        >
          As India's largest multinational flexible packaging and solutions company,{" "}
          <span className="text-gray-800 poppins-400">
            we take pride in being a completely integrated provider of sustainable packaging products and solutions.
            Discover the world of UFlex and learn more about our offerings across the business.
          </span>
        </motion.h2>

        <BusinessCardsCarousel />
      </motion.section>

      <div className="mt-12">
        <LifeatModules />
        <WhatSetsUsApart />
      </div>
        <SustainabilityComp />

      <SiteFooter />
    </main>
  )
}
