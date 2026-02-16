"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import FlexibleComp, { businesses } from "@/components/flexible"


export default function Page() {
  const business = businesses.find(b => b.key === "flexible-packaging")!;

  return (
    <>
      <SiteHeader />
      <FlexibleComp business={business} />
      <SiteFooter />
    </>
  )
}
