"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import EngComp from "@/components/enginnering"
import { businesses } from "../business/data"
    const business = businesses.find(b => b.key === "engineering")!;

export default function Page() {
  return (
    <>
      <SiteHeader />
      <EngComp business={business}/>
      <SiteFooter />
    </>
  )
}
