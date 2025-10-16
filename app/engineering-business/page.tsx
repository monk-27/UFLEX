"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <BusinessPage
        title="Engineering"
        intro="A leading manufacturer specializing in top-tier packaging, printing, and allied machines, catering to diverse needs across industries."
        caseStudies={[
          { title: "Lorem Ipsum", excerpt: "Case overview...", content: "Detailed description..." },
          { title: "Lorem Ipsum", excerpt: "Case overview...", content: "Detailed description..." },
        ]}
        sustainability={{
          title: "Environmental responsibility",
          text: "Initiatives focused on water conservation, waste management, and enhancing biodiversity surrounding our facilities.",
        }}
        highlights={[
          {
            title: "Double Head Coating-1650",
            excerpt: "Coating machines up to 2500mm web widths with various application methods.",
            content: "Gravure and kiss coating support; high precision and throughput.",
          },
        ]}
      />
      <SiteFooter />
    </>
  )
}
