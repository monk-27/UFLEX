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
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05512105121.jpg",
        title: "Inks",
        // dynamiclink:"/packaging-films-business/packaging-our-offerings"

        description: "High-performance inks for superior print quality, compliant with global food safety and sustainability standards.",
    },
    {
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-05512115121.jpg",
        title: "Adhesives",

        description: "A range of adhesives that ensure strong bonding, efficient processing, and compliance with global food safety and sustainability standards.",
    },
    {
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-05512125121.jpg",
        title: "Coatings",

        description: "A diverse range of coatings that provide visual appeal and meet diverse industry needs while supporting compliance and sustainability.",
    },

    {
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-05512135121.jpg",
        title: "Specialty Chemicals ",

        description: "From functional additives to performance enhancers and process aids, our solutions are designed to meet the evolving demands of modern packaging.",
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
                        src="/images/sus/sc.png"
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
