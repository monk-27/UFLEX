"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import { motion } from "framer-motion"
import AsepticComp from "@/components/aseptic"

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <SiteHeader />





        <SiteFooter />

      </main>
    </>
  )
}
