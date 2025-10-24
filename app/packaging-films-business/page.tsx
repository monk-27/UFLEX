"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import { motion } from "framer-motion"
import AsepticComp from "@/components/aseptic"
import PackageComp from "@/components/packaging"

export default function Page() {
  return (
    <>
        <SiteHeader />

<PackageComp />



        <SiteFooter />

    </>
  )
}
