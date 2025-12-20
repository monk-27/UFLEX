"use client"
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import React from 'react'
import Image from 'next/image'
import SustainabilityGrid from '@/components/buisness-sustainability'


export const SUSTAINABILITY_GRID_DATA = [
  {
    image: "/images/sus/c1.png",
    title: "Green Products UFlex Limited – Chemicals",
    by: "",
    description:
      "Business is committed to developing adhesives and inks that reduce environmental footprint across sourcing, manufacturing, and distribution. With eco-friendly products in the market, the company supports global packaging industries in adopting sustainable solutions. Green product sales increased by 30%, making up 32% of total sales in FY 2022–23.",
  },
  {
    image: "/images/sus/c2.png",
    title: "Water Conservation",
    by: "",
    description:
      "Both manufacturing sites manage water consumption efficiently. The Noida unit was recognized by FICCI as the best in Chemicals and Petrochemicals for water efficiency in 2022.",
  },
  {
    image: "/images/sus/c3.png",
    title: "Water Positive Status",
    by: "",
    description:
      "UFlex focuses on replenishing groundwater through rainwater harvesting, with a developed capacity of 87,000 KL per year. This includes rejuvenation of three ponds in Jewar tehsil, Gautam Budh Nagar district, Uttar Pradesh.",
  },
  {
    image: "/images/sus/c4.png",
    title: "Zero Liquid Discharge (ZLD)",
    by: "",
    description:
      "The Noida unit is a zero discharge site. Wastewater from industrial and domestic use is treated via ETP and STP, then recycled through a ZLD plant. Recycled water accounts for 25% of total site consumption and is reused in utilities.",
  },
  {
    image: "/images/sus/c5.png",
    title: "Reduction of Specific Waste Generation",
    by: "",
    description:
      "UFlex optimizes processes to minimize hazardous and non-hazardous waste. Waste is disposed of in eco-friendly ways, promoting circular economy through authorized reuse, reprocessing, and recycling. Achieved a 26% reduction in specific waste over five years.",
  },
  {
    image: "/images/sus/c6.png",
    title: "Energy Conservation",
    by: "",
    description:
      "The Chemicals business reduced specific energy consumption by 23% since FY 2016–17. This was achieved through energy-efficient technologies and development of less energy-intensive products via R&D.",
  },
];

const page = () => {
    return (
        <div className='bg-white'>
            <SiteHeader />
            <div className='bg-white'>
                <section className="relative w-full h-[260px] sm:h-[549px]  overflow-hidden">
                    <Image
                        src="/images/sus/sc.png"
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
                    <h2 className='py-6 text-center text-[20px] sm:text-[28px] text-[#000000]'>
                        Chemicals
                    </h2>
                  <SustainabilityGrid
  items={SUSTAINABILITY_GRID_DATA}
/>
                </section>

            </div>
            <SiteFooter />
        </div>
    )
}

export default page
