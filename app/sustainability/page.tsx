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

      {/* <ReportsGallery/> */}
      <Image src="/images/sus-top.png" height={979} width={1469} className="" alt="" />

      {/* --- Carbon Neutrality Cards --- */}
<section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
  <h2 className="text-center text-[18px] sm:text-[20px] text-gray-800 mb-6">
    Committed to achieving carbon neutrality by 2035
  </h2>

  {/* mobile: 1 column, laptop+: 2 columns with gap */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    {/* Card 1 */}
    <article className="rounded-xl bg-gray-50 shadow-sm ring-1 ring-black/5 p-4 sm:p-5 flex items-start gap-4">
      <div className="relative shrink-0 w-[160px] h-[120px] sm:w-[180px] sm:h-[130px] md:w-[220px] md:h-[150px]">
        <Image
          // src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
          src="/images/sus1.png"

          alt="Sustainability"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="pt-1">
        <h3 className="text-[15px] sm:text-base font-semibold text-gray-800">
          Sustainability and environmental
        </h3>
        <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-gray-600">
          Stewardship are at the forefront of our business practices.
        </p>
      </div>
    </article>

    {/* Card 2 */}
    <article className="rounded-xl bg-gray-50 shadow-sm ring-1 ring-black/5 p-4 sm:p-5 flex items-start gap-4">
      <div className="relative shrink-0 w-[160px] h-[120px] sm:w-[180px] sm:h-[130px] md:w-[220px] md:h-[150px]">
        <Image
          src="/images/sus1.png"
          alt="Business strategies"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="pt-1">
        <h3 className="text-[15px] sm:text-base font-semibold text-gray-800">
          Our business strategies
        </h3>
        <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-gray-600">
          Align with our ESG vision, and we consistently strive to deliver
          innovative and responsible packaging solutions.
        </p>
      </div>
    </article>
  </div>
</section>

      <MainSustainabilityComp />
      <MainSustainabilityVisionComp />
      <MainSustainabilityCOMMComp />



      <SiteFooter />
    </main>
  )
}
