"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import ChemicalsComp from "@/components/chemicals"
import { businesses } from "../business/data"

export default function Page() {
  const business = businesses.find(b => b.key === "chemicals")!;
  
  return (
    <>
      <SiteHeader />
     <ChemicalsComp business={business}/>
      <SiteFooter />
    </>
  )
}
