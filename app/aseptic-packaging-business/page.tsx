"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <BusinessPage
        title="Aseptic Packaging"
        intro="Asepto, the aseptic packaging brand of UFlex, is the world’s fastest-growing aseptic packaging company, proudly serving over 200 clients across 40+ countries."
        caseStudies={[
          {
            title: "Lorem Ipsum",
            excerpt: "Standard dummy text used since the 1500s...",
            content: "A galley of type was scrambled to make a type specimen book...",
          },
          {
            title: "Lorem Ipsum",
            excerpt: "Standard dummy text used since the 1500s...",
            content: "Ever since the 1500s, when an unknown printer took a galley of type...",
          },
        ]}
        sustainability={{
          title: "Circular economy via Enzymatic Delamination Technology (EDT)",
          text: "EDT separates and recovers aluminium, polymers, and paper pulp, significantly reducing environmental footprint.",
        }}
        highlights={[
          {
            title: "India’s First Aseptic Carton Package",
            excerpt: "Featuring 5% certified recycled polymers, setting a new benchmark in sustainable packaging.",
            content: "First paper-based beverage carton producer in India to use recycled plastic content.",
          },
        ]}
      />
      <SiteFooter />
    </>
  )
}
