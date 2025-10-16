"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <BusinessPage
        title="Flexible Packaging"
        intro="We offer a comprehensive range of products, including flexible laminates, pre-formed pouches, Flexo-printed rolls and bags, WPP bags, electron beam and Cast n Cure, pharmaceutical packaging, FlexiTubes, hygiene films, Flexfresh™ MAP, and big bags."
        caseStudies={[
          {
            title: "Lorem Ipsum",
            excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            content: "It has been the industry’s standard dummy text ever since the 1500s...",
          },
          {
            title: "Lorem Ipsum",
            excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            content: "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
        ]}
        sustainability={{
          title: "Driving Sustainable Growth Through Smarter Packaging Practices",
          text: "UFlex invests in advanced technologies that consume less energy per ton of flexible packaging, recycling all in-house production waste to reduce landfill pressure.",
        }}
      />
      <SiteFooter />
    </>
  )
}
