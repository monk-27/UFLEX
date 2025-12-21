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
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05023500235.jpg",
                title: "Aseptic Cartons",

                description: "Our aseptic liquid packaging cartons encompass six layers of protection that keeps the freshness preserved.",
            },
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-05023510235.jpg",
                title: "A SIP",


                description: "India’s first food-grade and moisture-resistant U-shaped paper straw that is 100% recyclable.",
            },
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-05023520235.jpg",
                title: "Filling Machines",


                description: "A range of machines that are at the core of the aseptic beverage production and packaging line.",
            },

            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-05023530235.jpg",
                title: "Asepto Pro",


                description: "Technical assistance, skill enhancement services, quality assurance, performance management, and remote assistance for machines.",
            },

            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-05023540235.jpg",
                title: "Asepto Design",
                description: "The creative powerhouse within Asepto, dedicated to shaping the visual identity of your products.",


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
                        src="/images/sus/as.png"
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
