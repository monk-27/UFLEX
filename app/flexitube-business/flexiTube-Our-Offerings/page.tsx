"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import { motion } from "framer-motion"
import AsepticComp from "@/components/aseptic"
import PackageComp from "@/components/packaging"
import ReusablePropsCOMMComp from "@/components/reusableoffering"
import DynamicHero from "@/components/dynamic-hero"
import DynamicCarouselModal from "@/components/dynamic-caraousal"
import SustainabilityTabs, { TabConfig } from "@/components/offeringstab"

import Image from "next/image"
import OfferingsTabs from "@/components/offeringstab"


const TAB_DATA = [
    {
        id: "offerings",
        label: "Our Offerings",
        items: [
      {
    image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-12332103321.jpg",
    title: "METALIKA tubes",
    description: "Tubes with high-shine metallization and holographic features for that premium appeal. We also offer matte and de-metallized options.",
  },
  {
    image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-12332113321.jpg",

    title: "REMIKA tubes",
    description: "Sustainable web, mono-material, lightweight, low-carbon footprint solutions",
  },
  {
    image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-12332123321.jpg",

    title: "GREENIKA tubes",
    description: "PCR tubes with up to 30% PCR in the sleeves. These tubes use PCR developed in-house by us.",
  },
  {
    image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-12332133321.jpg",

    title: "KRAFTIKA tubes",
    description: "Our flexo printing sleeves offer superior print quality, operational ease, and cost-efficiency in flexography printing.",
  },
  {
    image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-12332143321.jpg",

    title: "EARTHIKA tubes",
    description: "Tubes made with biodegradable polymer.",
  },
        ],
    },
    {
        id: "featured",
        label: "Featured Products",
        items: [

        ],
    },
    {
        id: "new",
        label: "New Arrivals",
        items: [

        ],
    },
] satisfies TabConfig[];


export default function Page() {
    return (
        <>
            <SiteHeader />
            <div className="bg-gradient-to-b from-white to-slate-50">
                <section className="relative w-full h-[260px] sm:h-[549px] overflow-hidden">
                    <Image
                        src="/images/flexible.jpeg"
                        alt="Investors Relations"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/40" />


                </section>


                <OfferingsTabs tabs={TAB_DATA} />
            </div>



            <SiteFooter />

        </>
    )
}
