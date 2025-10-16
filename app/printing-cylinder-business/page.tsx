"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <BusinessPage
        title="Printing Cylinders"
        intro="World-class cylinders through stringent quality control: steel base, copper plating, surface finishing, digital engraving, chrome plating, and final proof printing."
        caseStudies={[
          { title: "Lorem Ipsum", excerpt: "Case overview...", content: "Details..." },
          { title: "Lorem Ipsum", excerpt: "Case overview...", content: "Details..." },
        ]}
        sustainability={{
          title: "Acting today for a sustainable tomorrow",
          text: "Energy-efficient technologies, eco-friendly processes, and responsible waste management.",
        }}
        highlights={[
          {
            title: "Holographic effect on leatherettes",
            excerpt: "Enhanced aesthetics for decor, handbags, car seat covers, and more.",
            content: "Steel embossed cylinders deliver premium effects and durability.",
          },
        ]}
      />
      <SiteFooter />
    </>
  )
}
