
"use client"

import React from 'react'
import Image from "next/image";
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const page = () => {
    return (
        <div>
            <SiteHeader />

            <main className="bg-white">

                <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

                    <Image
                        src="/images/investors/ir.png"
                        alt="Investors Relations"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
                            IR Calendar
                        </h1>

                        
                    </div>
                </section>
                <div className="bg-[#EFEFEF]">
                    <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
                        <span className="text-black text-xs lato-700 lato-600">
                            Investors Relations &gt; IR Calendar
                        </span>
                    </div>
                </div>


            </main>
            <SiteFooter />

        </div>
    )
}

export default page
