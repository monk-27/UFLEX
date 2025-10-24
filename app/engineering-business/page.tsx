"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import EngComp from "@/components/enginnering"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <EngComp/>
      <SiteFooter />
    </>
  )
}
