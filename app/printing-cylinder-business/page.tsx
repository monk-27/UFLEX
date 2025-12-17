"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import CylComp , { businesses } from "@/components/cylinder"


export default function Page() {
         const business = businesses.find(b => b.key === "printing-cylinders")!;
     
  
  return (
    <>
      <SiteHeader />
      <CylComp business={business}/>
      <SiteFooter />
    </>
  )
}
