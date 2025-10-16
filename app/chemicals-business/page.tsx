"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <BusinessPage
        title="Chemicals"
        intro="Our inks, adhesives, and coatings are crafted to enhance brand vibrancy, durability, and functionality while ensuring environmental protection."
        caseStudies={[
          {
            title: "Solvent free pigmented white PU adhesive",
            excerpt: "Designed a cost-effective and sustainable adhesive that provides opacity with lamination.",
            content: "Successfully dispersed pigment in SF PU adhesive without impacting lay and wettability.",
          },
          {
            title: "POWERING SUSTAINABLE LABEL PRINTING AT KUMAR LABELS",
            excerpt: "Industry: Label Printing & Packaging — Flexgreen LED inks: 59 MT in FY24-25",
            content: "Kumar Labels required sustainable LED solutions — our inks improved quality and efficiency.",
          },
        ]}
        sustainability={{
          title: "Committed to reducing our carbon footprint",
          text: "Development of water-based inks & adhesives, water & energy conservation, and reduction in hazardous waste generation.",
        }}
      />
      <SiteFooter />
    </>
  )
}
