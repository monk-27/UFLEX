"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import EngComp, { businesses } from "@/components/enginnering"

const business = businesses.find(b => b.key === "engineering")!;

export default function Page() {
  return (
    <>
      <SiteHeader />
      <EngComp business={business} />
      <SiteFooter />
    </>
  )
}
