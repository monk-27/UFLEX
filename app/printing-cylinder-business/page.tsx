"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import CylComp from "@/components/cylinder"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <CylComp/>
      <SiteFooter />
    </>
  )
}
