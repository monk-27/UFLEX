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
        image: "/images/holography/h1.png",
        title: "Security Paper Labels & Tax Stamps",
        description: "",
    },
    {
        image: "/images/holography/h2.png",
        title: "Security Documents",
        description: "",
    },
    {
        image: "/images/holography/h3.png",
    title: "Textile Application Films for: Sequins ,Hot Melt ,Glitter Powder",

        description: "",
    },
    {
        image: "/images/holography/h4.png",
        title: "Wide Web Holographic Films",
        description: "",
    },
    {
        image: "/images/holography/h5.png",
        title: "Transfer Holographic Metallized Paper & Paperboard",
        description: "",
    },
    {
        image: "/images/holography/h6.png",
        title: "Stamping Foils",
        description: "",
    },
    {
        image: "/images/holography/h7.png",
        title: "Advanced Security Holograms",
        description: "",
    },




]
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
                        src="/images/sus/hs.png"
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
