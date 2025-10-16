"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <BusinessPage
        title="FlexiTubes"
        intro="Innovative multilayer flexible tube packaging solutions for beauty, personal care, and pharma."
        caseStudies={[
          { title: "Lorem Ipsum", excerpt: "Case overview...", content: "Details..." },
          { title: "Lorem Ipsum", excerpt: "Case overview...", content: "Details..." },
        ]}
        sustainability={{
          title: "Driving Sustainable Growth Through Smarter Packaging Practices",
          text: "From in-house PCR and film production to water-based inks and chemicals — sustainable options from source to shelf.",
        }}
        highlights={[
          {
            title: "Gravure-reverse printed tubes",
            excerpt: "Ultra-HD resolution for vibrant, razor-sharp branding.",
            content: "Photorealistic imagery enhances shelf presence and conversion.",
          },
        ]}
      />
      <SiteFooter />
    </>
  )
}
