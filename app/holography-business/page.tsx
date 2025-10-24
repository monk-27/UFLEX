"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import HoloGraphyComp from "@/components/holography"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <HoloGraphyComp/>
      <SiteFooter />
    </>
  )
}
