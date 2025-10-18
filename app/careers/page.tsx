"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { GradientButton } from "@/components/gradient-button"
import Link from "next/link"
import { motion } from "framer-motion"
import Careers from "@/components/careers"
import Philosopy from "@/components/philosopy"
import LearnStatus from "@/components/learn"

export default function Page() {
  return (
    <main className="bg-white">
      <SiteHeader />
      <Careers/>
      <Philosopy/>
      <LearnStatus/>

      

      <SiteFooter />
    </main>
  )
}

