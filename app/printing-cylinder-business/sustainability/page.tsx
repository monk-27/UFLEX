"use client"
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import React from 'react'
import Image from 'next/image'
import SustainabilityGrid from '@/components/buisness-sustainability'


export const PLANT_FEATURES_SUSTAINABILITY_DATA = [
    {
        image: "/images/sus/p1.png",
        title: "",
        by: "",
        description:
            "Energy efficiency technology at the plant reduces power consumption by nearly 60%, cutting operational and maintenance costs.",
    },
    {
        image: "/images/sus/p2.png",
        title: "",
        by: "",
        description:
            "The reduced sludge from the plant is converted into vermicompost, which serves as organic fertilizer for gardening and farming.",
    },
    {
        image: "/images/sus/p3.png",
        title: "",
        by: "",
        description:
            "Made from high-grade FRP, the plant is durable, lightweight, compact, and portable.",
    },
    {
        image: "/images/sus/p4.png",
        title: "",
        by: "",
        description:
            "The use of special friendly bacteria ensures that the plant is both eco-friendly and completely odourless.",
    },
];



const page = () => {
    return (
        <div className='bg-white'>
            <SiteHeader />
            <div className='bg-white'>
                <section className="relative w-full h-[260px] sm:h-[549px]  overflow-hidden">
                    <Image
                        src="/images/sus/pc.png"
                        alt="Investors Relations"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    {/* <div className="max-w-7xl mx-auto absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
                      Financial Results
                    </h1>
                  </div> */}
                </section>
                <section className="max-w-7xl mx-auto px-4 ">
                    <div className="py-6 text-center">
                        <h2 className="lato-600 text-[20px] sm:text-[28px] text-[#000000] leading-tight">
                            Printing Cylinders
                        </h2>

                        <p className="lato-700 mt-2 text-[18px] sm:text-[24px] text-[#117ABA] leading-tight">
                            Effluent Treatment Plant (ETP)
                        </p>
                    </div>

                    <SustainabilityGrid
                        items={PLANT_FEATURES_SUSTAINABILITY_DATA}
                    //   columns={{ base: 1, sm: 2, lg: 2 }}
                    />
                </section>

            </div>
            <SiteFooter />
        </div>
    )
}

export default page
