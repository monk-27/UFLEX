"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import FlexiComp , { businesses }from "@/components/flexitubes"


export default function Page() {
  const business = businesses.find(b => b.key === "flexible-tubes")!;
  return (
    <>
      <SiteHeader />
      <FlexiComp business={business}/>
      <SiteFooter />
    </>
  )
}
