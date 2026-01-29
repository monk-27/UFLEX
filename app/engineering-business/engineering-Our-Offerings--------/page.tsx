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
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-07180601806.jpg",
        title: "Packaging Machines",
        description: "A range of packaging machines and special purpose machines for wrapping of products of any shape and size and with specialised requirements.",
    },
    {
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-07180611806.jpg",

        title: "Converting Machines",
        description: `UFlex brings the latest innovations in
printing and packaging technology, offering
state-of-the-art solutions such as high-
performance CI Flexo presses, advanced
ELS printing machines, and extrusion
lamination machines. These machines are
designed to enhance both the efficiency
and quality of the final product.`,
    },
    {
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-07180621806.jpg",

        title: "Speciality Products ",
        description: "A range of specialized ancillary products essential for packaging applications.",
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
                        src="/images/sus/es.png"
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
