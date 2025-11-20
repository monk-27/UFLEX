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
                <DynamicHero image="/images/flexible-pack.jpg" text="Flexible Our Offerings" />
                <ReusablePropsCOMMComp
                    image="/images/flexible.png"
                    heading="Our Offerings"
                    introText=""

                    items={[
                        {

                            title: "Flexible Laminates",
                            description: "Our range of flexible laminates are made from various combinations of plastic, aluminum, and paper to suit diverse packaging needs.",
                        },
                        {


                            title: "Pre-formed pouches",
                            description: "Our wide array of flexible pouches designed to cater to diverse product categories and packaging needs across industries.",
                        },
                        {


                            title: "FlexFreshTM – Active & Modified Atmosphere Packaging (AMAP)",
                            description: "A breakthrough innovation designed to extend the shelf life of perishable goods such as fresh vegetables, fruits, and flowers.",
                        },
                        {


                            title: "Flexo printed rolls and bags",
                            description: "High-quality printed bags, in multiple formats, that protect products while delivering superior print clarity and shelf appeal.",
                        },
                        {

                            title: "Laminated Woven Poly Propylene (WPP) bags",
                            description: "Bags with high strength, durability, and superior printability, ideal for a variety of industrial and consumer applications.",
                        },
                        {

                            title: "Electron beam and Cast n Cure",
                            description: "Advanced e-beam and Cast n Cure print finishing solutions that boost packaging appeal, performance, and brand value.",
                        },
                        {

                            title: "Pharmaceutical Packaging",
                            description: "High-performance pharmaceutical packaging materials tailored to diverse dosage forms and global regulations.",
                        },

                        {

                            title: "Hygiene Films",
                            description: "High-performance films, made with advanced processes, ensure hygiene, safety, and quality to meet the personal care industry's critical needs.",
                        },

                        {

                            title: "Premium shower-proof bag",
                            description: "An advanced packaging solution tailored for the building materials industry, combining durability, safety, and high-performance design.",
                        },

                        {

                            title: "ZipouchR",
                            description: "Versatile reclosable and reusable pouches, crafted from premium laminated films to meet modern food storage needs.",
                        },

                        {


                            title: "Injection Moulding Products",
                            description: "Precision-engineered injection moulded plastic packaging components, designed to meet the diverse requirements of the packaging industry.",
                        },
                    ]}
                />

                <DynamicCarouselModal
                    heading="Featured Products"
                    items={[
                        {
                            id: 1,
                            image: "/images/mattle.jpg",
                            title: "Lorem Ipsum1",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 2,
                            image: "/images/metalized.jpg",
                            title: "Lorem Ipsum1",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 3,
                            image: "/images/co.jpg",
                            title: "Lorem Ipsum1",
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
                            image: "/images/anti.jpg",
                            title: "Lorem Ipsum1",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 2,
                            image: "/images/heat.jpg",
                            title: "Lorem Ipsum1",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 3,
                            image: "/images/isotopic.jpg",
                            title: "Lorem Ipsum1",
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
