import DynamicCarouselModal from '@/components/dynamic-caraousal'
import DynamicHero from '@/components/dynamic-hero'
import ReusablePropsCOMMComp from '@/components/reusableoffering'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import React from 'react'

const Page = () => {
   return (
        <>
            <SiteHeader />
            <div className="bg-gradient-to-b from-white to-slate-50">
                <DynamicHero image="/images/chemicals-banner.jpg" text="Chemicals Our Offerings" />
                <ReusablePropsCOMMComp
                    image="/images/chem.jpeg"
                    heading="Our Offerings"
                    introText=""

                    items={[
                        {
                            title: "Inks",
                            description: "High-performance inks for superior print quality, compliant with global food safety and sustainability standards.",
                        },
                        {
                            title: "Adhesives",
                            description: "A range of adhesives that ensure strong bonding, efficient processing, and compliance with global food safety and sustainability standards.",
                        },
                        {
                            title: "Coatings",
                            description: "A diverse range of coatings that provide visual appeal and meet diverse industry needs while supporting compliance and sustainability.",
                        },
                        {
                            title: "Specialty Chemicals",
                            description: "From functional additives to performance enhancers and process aids, our solutions are designed to meet the evolving demands of modern packaging."
                        },
                        
                    ]}
                />

                <DynamicCarouselModal
                    heading="Featured Products"
                    items={[
                        {
                            id: 1,
                            image: "/images/flexglide.jpg",
                            title: "FLEXGLIDE INK",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 2,
                            image: "/images/Flexglide-NT.jpg",
                            title: "FLEXGLIDE NT INK",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 3,
                            image: "/images/GR-Flexglide.jpg",
                            title: "GR FLEXGLIDE INK",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 4,
                            image: "/images/gr.jpg",
                            title: "GR FLEXGLIDE MONO SOLVENT INK",
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
                            image: "/images/flexlam.jpg",
                            title: "FLEXLAM INK",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 2,
                            image: "/images/flexlamnt.jpg",
                            title: "FLEXLAM NT INK",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 3,
                            image: "/images/Flextrusion.jpg",
                            title: "FLEXTRUSION INK",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 4,
                            image: "/images/flexnt.jpg",
                            title: "FLEXTRUSION NT INK",
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

export default Page
