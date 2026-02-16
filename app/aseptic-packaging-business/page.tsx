"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import AsepticComp, { businesses } from "@/components/aseptic"

export default function Page() {
  const business = businesses.find(b => b.key === "aseptic")!;

  return (
    <>
      <SiteHeader />
      <AsepticComp business={business} />
      <SiteFooter />
    </>
  )
}
