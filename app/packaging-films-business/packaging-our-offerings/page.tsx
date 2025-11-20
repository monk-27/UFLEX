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
                <DynamicHero image="/images/p1hero.jpg" text="Packaging Our Offerings" />
                <ReusablePropsCOMMComp
                    image="/images/p1.jpg"
                    heading="Packaging Our Offerings"
                    introText=""

                    items={[
                        {
                            title: "Biaxially Oriented Polyethylene Terepthalate (BOPET) films",
                            description: "A type of polyester film made through biaxial orientation,leading to a thin, transparent, and uniform thermoplastic film.",
                        },
                        {
                            title: "Biaxially Oriented Polyethylene (BOPET) films   ",
                            description: "An ideal option for packaging food, beverages, and electronics due to this films' transparency, high rigidity, heat stability, and low cost.",
                        },
                        {
                            title: "Cast Polypropylene (CPP) films ",
                            description: "A film manufactured through a cast extrusion process in which polypropylene resins are melted and extruded into a flat film. ",
                        },
                        {
                            title: "Metalized films",
                            description: "Decorative films and foils are developed with advanced metallization technology, depositing a thin metal layer onto the substrate."
                        },
                        {

                            title: "AlOx-coated films",
                            description: "Films with a transparent aluminium oxide layer that provide strong moisture and gas barriers while keeping the product visible."
                        }, {
                            title: "Speciality films",
                            description: "A range of films that provide value addition for converters by enhancing the quality, performance, and functionality of the final packaging."
                        }
                    ]}
                />

                <DynamicCarouselModal
                    heading="Featured Products"
                    items={[
                        {
                            id: 1,
                            image: "/images/mattle.jpg",
                            title: "Matte Films",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 2,
                            image: "/images/metalized.jpg",
                            title: "Metalizable Films",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 3,
                            image: "/images/co.jpg",
                            title: "Co-extruded Films",
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
                            title: "Antiskid Films",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 2,
                            image: "/images/heat.jpg",
                            title: "Heat Sealabel Films",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 3,
                            image: "/images/isotopic.jpg",
                            title: "Isotropic Films",
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
