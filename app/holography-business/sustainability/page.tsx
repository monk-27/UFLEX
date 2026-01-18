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
                        src="/images/sus/hs.png"
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

                    <section className="max-w-7xl mx-auto px-4 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* ================= LEFT TEXT ================= */}
        <div className="lato-700 space-y-4 text-[16px] leading-7 text-black">
          <p>
            In the process of providing the best fraud-preventive infallible
            seals of full-proof product security, we ensure that all emissions
            are well below the permissible levels. We continuously strive for
            minimum process waste generation and optimally recycle the same.
          </p>

          <p>
            We have many solutions of sustainability segment- holographic
            transfer on paper and board, cold transfer foils, recycled RSC
            certified sequins film, cast and cure holographic films among many
            other.
          </p>
        </div>

        {/* ================= RIGHT IMAGES ================= */}
        <div className="w-full">
          
          {/* Desktop / Tablet */}
          <div className="hidden md:grid grid-cols-[1fr_1fr] gap-1">
            
            {/* Left stacked images */}
            <div className="grid grid-rows-2 ">
              <div className="relative h-[327px] rounded-t-sm overflow-hidden">
                <Image
                  src="/images/sus/hs1.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[327px]  overflow-hidden">
                <Image
                  src="/images/sus/hs2.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right tall image */}
            <div className="relative h-[665px]  rounded-b-sm overflow-hidden">
              <Image
                src="/images/sus/hs3.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="grid md:hidden gap-4 mt-6">
            <div className="relative h-[220px] rounded-lg overflow-hidden">
              <Image src="/images/sus/hs1.png" alt="" fill className="object-cover" />
            </div>

            <div className="relative h-[220px] rounded-lg overflow-hidden">
              <Image src="/images/sus/hs2.png" alt="" fill className="object-cover" />
            </div>

            <div className="relative h-[260px] rounded-lg overflow-hidden">
              <Image src="/images/sus/hs3.png" alt="" fill className="object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
                   
                </section>

            </div>
            <SiteFooter />
        </div>
    )
}

export default page
