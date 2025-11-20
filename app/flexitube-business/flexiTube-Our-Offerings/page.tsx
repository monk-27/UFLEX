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

export default function Page() {
    return (
        <>
            <SiteHeader />
            <div className="bg-gradient-to-b from-white to-slate-50">
                <DynamicHero image="/images/engineering-banner.jpg" text="FlexiTube Our Offerings" />
                <ReusablePropsCOMMComp
                    image="/images/flexible.jpeg"
                    heading="Our Offerings"
                    introText=""

                    items={[
                        {
       
        title: "METALIKA tubes",
        description: "Tubes with high-shine metallization and holographic features for that premium appeal. We also offer matte and de-metallized options.",
    },
    {
       

        title: "REMIKA tubes",
        description: "Sustainable web, mono-material, lightweight, low-carbon footprint solutions",
    },
    {
        
        title: "GREENIKA tubes",
        description: "PCR tubes with up to 30% PCR in the sleeves. These tubes use PCR developed in-house by us.",
    },
    {
        
        title: "KRAFTIKA tubes",
        description: "Our flexo printing sleeves offer superior print quality, operational ease, and cost-efficiency in flexography printing.",
    },
    {
       

        title: "EARTHIKA tubes",
        description: "Tubes made with biodegradable polymer.",
    },

                    ]}
                />

                <DynamicCarouselModal
                    heading="Featured Products"
                    items={[
                        {
                            id: 1,
                            image: "/images/vol.jpg",
                            title: "Volumetric Cup Filler",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 2,
                            image: "/images/uflexo.jpg",
                            title: "UFlexo Elisa",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 3,
                            image: "/images/vaccum.jpg",
                            title: "Vaccum Brick Pack",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 4,
                            image: "/images/toro.jpg",
                            title: "Toro Slit",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },

                    ]}
                />
                <DynamicCarouselModal
                    heading="New Arrivals"
                    items={[
                        {
                            id: 1,
                            image: "/images/ffs.jpg",
                            title: "FFS High Speed",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 2,
                            image: "/images/ffscollar.jpg",
                            title: "FFS Collar Type SSD",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 3,
                            image: "/images/flow.jpg",
                            title: "Flow Wrap",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 4,
                            image: "/images/weigh.jpg",
                            title: "Weigh Filler",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },

                    ]}
                />
            </div>



            <SiteFooter />

        </>
    )
}
