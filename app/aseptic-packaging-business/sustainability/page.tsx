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
                        src="/images/sus/as.png"
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
                        Aseptic Packaging
                    </h2>
                    <section className="max-w-5xl mx-auto px-4 pt-4 pb-8 ">
      <div className="text-center text-gray-600 space-y-6">
        
        {/* Intro paragraph */}
        <p className="lato-700 text-[16px] leading-7">
          At Asepto, sustainability isn't just a commitment; it's a driving
          force behind innovation. Asepto brings a sustainable solution to the
          pressing concern of aseptic cartons reaching landfills. With proper
          extraction and assimilation, Asepto paves the way for a circular
          economy.
        </p>

        {/* Sub-heading */}
        <p className="lato-700 text-[16px] text-gray-700">
          Enzymatic Delamination Technology (EDT)
        </p>

        {/* Description */}
        <p className="lato-700 text-[16px] leading-7">
          EDT is Asepto’s sustainable solution to reprocess aseptic cartons and
          reintegrate them into the circular economy. Through EDT, valuable
          materials like aluminium, polymers, and paper pulp are separated and
          recovered. This significantly reduces the environmental footprint
          associated with carton disposal.
        </p>

      </div>
    </section>
                  
                </section>

            </div>
            <SiteFooter />
        </div>
    )
}

export default page
