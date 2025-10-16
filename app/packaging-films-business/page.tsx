"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <BusinessPage
        title="Packaging Films Business"
        intro="UFlex’s Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets."
        caseStudies={[
          {
            title: "Lorem ipsum dolor sit amet, consectetuer",
            excerpt: "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat...",
            content:
              "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
          },
          {
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat...",
            content: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
          },
        ]}
        sustainability={{
          title: "Single-pellet solution: Pioneering innovation in recyclable packaging",
          text: "Reinforcing our commitment to sustainability, UFlex has introduced a breakthrough FSSAI-compliant single-pellet solution for incorporating recycled PET (rPET) in food and beverage packaging.",
          content:
            "This innovation combines recycled PET with virgin PET into a single, high-purity pellet, offering excellent mechanical strength, thermal stability, high clarity, and lower acetaldehyde content.",
        }}
        highlights={[
          {
            title: "F-ETS: One side MST coated transparent BOPET film",
            excerpt:
              "Advanced MST-coated transparent BOPET film engineered for secondary packaging of pharmaceutical tablets and pills.",
            content:
              "Developed using proprietary technology, it serves as a superior alternative with excellent barrier properties.",
          },
          {
            title: "F-MEX-M",
            excerpt:
              "A high-performance metallized BOPET film offering excellent versatility across a wide range of applications.",
            content: "Optical densities ranging from 2.2 to 2.8 provide customizable barrier performance.",
          },
          {
            title: "B-TCM-M: Ultra-thin metallized BOPP film",
            excerpt:
              "Non-heat sealable metallized BOPP film at just 8 microns for sustainable, high-performance applications.",
            content: "Delivers low GSM and high barrier while reducing material consumption.",
          },
        ]}
      />
      <SiteFooter />
    </>
  )
}
