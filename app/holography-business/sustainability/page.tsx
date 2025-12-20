"use client"
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className='bg-white'>
            <SiteHeader />
            <div className='bg-white'>
                <section className="relative w-full h-[260px] sm:h-[549px] overflow-hidden">
                    <Image
                        src="/images/sus/sp.png"
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
                        Holography
                    </h2>
                   
                </section>

            </div>
            <SiteFooter />
        </div>
    )
}

export default page
