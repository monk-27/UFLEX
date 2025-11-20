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
                <DynamicHero image="/images/asepto-banner.jpg" text=" Aseptic Our Offerings" />
                <ReusablePropsCOMMComp
                    image="/images/aseptic.png"
                    heading="Our Offerings"
                    introText=""

                    items={[
                        {
        title: "Aseptic Cartons",

        description: "Our aseptic liquid packaging cartons encompass six layers of protection that keeps the freshness preserved.",
    },
    {
        title: "A SIP",


        description: "India’s first food-grade and moisture-resistant U-shaped paper straw that is 100% recyclable.",
    },
    {
        title: "Filling Machines",


        description: "A range of machines that are at the core of the aseptic beverage production and packaging line.",
    },

    {
        title: "Asepto Pro",


        description: "Technical assistance, skill enhancement services, quality assurance, performance management, and remote assistance for machines.",
    },

    {
        title: "Asepto Design",

        description: "The creative powerhouse within Asepto, dedicated to shaping the visual identity of your products.",
    },
                        
                    ]}
                />

                <DynamicCarouselModal
                    heading="Featured Products"
                    items={[
                        {
                            id: 1,
                            image: "/images/care.jpg",
                            title: "Care Pro",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 2,
                            image: "/images/max.jpg",
                            title: "Max Pro",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 3,
                            image: "/images/sip.jpg",
                            title: "A SIP 125 mm",
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
                            image: "/images/pillow.jpg",
                            title: "Pillow",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 2,
                            image: "/images/curve.jpg",
                            title: "Curve",
                            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        },
                        {
                            id: 3,
                            image: "/images/spectra.jpg",
                            title: "Spectra",
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
