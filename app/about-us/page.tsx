"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { Timeline } from "@/components/timeline"
import { motion } from "framer-motion"
import Hero from "@/components/about/hero"
import { CompanyInfo } from "@/components/about/company-info"
import { VisionMission } from "@/components/about/vision-mission"
import { GlobalFootprint } from "@/components/about/global-footprint"
import { BoardOfDirectors } from "@/components/about/board-of-directors"
import { KeyManagement } from "@/components/about/key-management"
// import AnimatedTimeline from "@/components/about/journey"
import Image from "next/image";
import { Journey } from "@/components/about/journey"


export default function AboutPage() {
  return (
    <main className="">
      <SiteHeader />

      <section className=" bg-white">
        <Hero />

        <CompanyInfo />
        <VisionMission />

        

        <GlobalFootprint />
        <BoardOfDirectors />
        <KeyManagement />
        <Journey />
        {/* <AnimatedTimeline/> */}
      </section>

      <SiteFooter />
    </main>
  )
}

