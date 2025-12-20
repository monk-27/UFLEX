"use client"
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import React from 'react'
import Image from 'next/image'
import SustainabilityGrid from '@/components/buisness-sustainability'
export const SUSTAINABILITY_GRID_DATA = [
  {
    image: "",
    title: "Pioneering Sustainable Food Packaging",
    by: "",
    description:
      "UFlex is proud to be the first Indian company approved by the USFDA for using recycled polyethylene (rPE), polyethylene terephthalate (rPET), and polypropylene (rPP) in food packaging—marking a major milestone in sustainable packaging innovation.",
  },
  {
    image: "",
    title: "Launch of 100% Compostable Garbage Bag",
    by: "",
    description:
      "Friendly product is entirely plastic-free and designed to decompose naturally without leaving harmful residues. Offered as individually packed bags instead of roll-on packs, it ensures better convenience and hygiene. Available in three sizes—small, medium, and large—it provides a practical and sustainable solution for environmentally conscious consumers.",
  },
  {
    image: "",
    title: "Investment in Next-Gen Packaging Solutions",
    by: "",
    description:
      "These initiatives are further strengthened by UFlex’s early investments in mono-material, biodegradable, and recyclable packaging solutions, reinforcing its role as a responsible leader in the global packaging industry.",
  },
];

const page = () => {
    return (
        <div className='bg-white'>
            <SiteHeader />
            <div className='bg-white'>
                <section className="relative w-full h-[260px] sm:h-[549px] overflow-hidden">
                    <Image
                        src="/images/sus/fp.png"
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
                    <h2 className='py-6 text-center lato-700 text-[20px] sm:text-[28px] text-[#000000] leading-tight'>
                        Flexible Packaging
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
