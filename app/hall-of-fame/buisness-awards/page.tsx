"use client";

import AutoMarquee from '@/components/autoslider'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import LeadershipAwards from '@/components/spotlight'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const page = () => {
    return (
        <div className='bg-white'>
            <SiteHeader />
            <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
                      <Image
                        src="/images/awards/awardsmain.png"
                        alt="Investors Relations"
                        fill
                        className="object-cover w-full h-full"
                        priority
                      />
            
                      <div className="absolute inset-0 bg-black/40" />
            
                      <div className="max-w-7xl mx-auto absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
                           Corporate, HR & Sustainability Awards
                        </h1>
                      </div>
                    </section>
            <section className="relative ">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-0">

                    <LeadershipAwards />



                </div>
            </section>
            <SiteFooter />
        </div>


    )
}

export default page
