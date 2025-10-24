"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import FlexibleComp from "@/components/flexible"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <FlexibleComp/>
      <SiteFooter />
    </>
  )
}
