"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import HoloGraphyComp from "@/components/holography"
import { businesses } from "../business/data"
    const business = businesses.find(b => b.key === "holography")!;

export default function Page() {
  return (
    <>
      <SiteHeader />
      <HoloGraphyComp business={business}/>
      <SiteFooter />
    </>
  )
}
