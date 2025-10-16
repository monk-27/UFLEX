"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <BusinessPage
        title="Holography"
        intro="India’s largest, most trusted provider of brand protection and anti-counterfeiting solutions, and an emerging global player."
        caseStudies={[
          {
            title: "Lorem Ipsum",
            excerpt: "Classic case study overview...",
            content: "Details about the case study and approach.",
          },
          { title: "Lorem Ipsum", excerpt: "Classic case study overview...", content: "Additional data and outcomes." },
        ]}
        sustainability={{
          title: "Sustainable holography practices",
          text: "Emissions well below permissible levels; minimal process waste and optimal recycling. Solutions include holographic transfer on paper and board, cold transfer foils, RSC-certified sequins film, and more.",
        }}
        highlights={[
          {
            title: "Digital Stamping Foil",
            excerpt: "High-gloss finish, fine detailing, works on coated/uncoated substrates.",
            content: "Designed for seamless compatibility with all digital presses.",
          },
        ]}
      />
      <SiteFooter />
    </>
  )
}
