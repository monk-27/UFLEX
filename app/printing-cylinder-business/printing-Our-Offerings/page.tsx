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
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05492704927.jpg",
        title: "Gravure Cylinders",
        description: `UFlex manufactures high-precision gravure, printing, coating, and special-purpose cylinders for diverse applications.`,
    },
    {
        image: "",

        title: "Printing Cylinders",
        description: `With advanced technology and skilled manpower, UFlex Cylinders business have earned the reputation of being a trusted manufacturer of rotogravure (gravure) cylinders for packaging and other industries. Whether printing for the first time or using re-engraved cylinders, UFlex ensures consistent sharpness, contrast, and gamma levels, preserving the brand identity.`,
    },
    {
        image: "",

        title: "Coating cylinders",
        description: `UFlex is widely recognized for its expertise in manufacturing special-purpose cylinders designed for various coating applications. These include anilox coating, specialty coating, hot melt coating (high GSM), lamination coating, lacquer coating, and low GSM coating cylinders. Each cylinder is meticulously crafted to meet the specific requirements of these processes, ensuring precision and high-quality results across different industries.
`,
    },

    {
        image: "",

        title: "Special purpose cylinders",
        description: `UFlex specializes in producing special-purpose cylinders, including embossing cylinders created through laser engraving. These cylinders are designed for a variety of applications, such as wooden laminates, wallpaper designs, gift wrappers, and greeting cards. Each cylinder is crafted with precision to deliver detailed and intricate designs, catering to the unique needs of these decorative and functional products.
`,
    },
    {
        image: "",

        title: "CTP Flexo Plates",
        description: `The advanced flexo plate manufacturing setup, featuring laser imaging with 5080 DPI, sets a new standard for high-definition flexographic plates. 
`,
    },
    {
        image: "",

        title: "Flexo Printing Sleeves",
        description: `UFlex’s flexo printing sleeves provide superior print quality, operational ease and cost-efficiency in flexography printing.  
`,
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
                        src="/images/sus/pc.png"
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
