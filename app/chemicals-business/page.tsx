"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import ChemicalsComp from "@/components/chemicals"

export default function Page() {
  return (
    <>
      <SiteHeader />
     <ChemicalsComp/>
      <SiteFooter />
    </>
  )
}
