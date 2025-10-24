"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import FlexiComp from "@/components/flexitubes"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <FlexiComp/>
      <SiteFooter />
    </>
  )
}
