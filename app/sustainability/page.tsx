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

export default function Page() {
  return (
    <main className="bg-white">
      <SiteHeader />
      
<ReportsGallery/>
<MainSustainabilityComp/>
<MainSustainabilityVisionComp/>
<MainSustainabilityCOMMComp/>

     

      <SiteFooter />
    </main>
  )
}
