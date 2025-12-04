
"use client"

import React from 'react'
import Image from "next/image";
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ImpactStats } from './impactstat';
import { ESGSection } from './esgsection';
import DownloadCorporateGrid from '../corporate-policies/download-grid';
import { annualReports } from '../invdata';
import { AnnualReportsSection } from './download-grid';

const page = () => {
    return (
        <div className='bg-white'>
            <SiteHeader />

            <main className="bg-white">

                <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

                    <Image
                        src="/images/investors/esg.png"
                        alt="Investors Relations"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
                            ESG
                        </h1>


                    </div>
                </section>

                <div className="bg-[#EFEFEF]">
                    <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
                        <span className="text-black text-xs lato-700 lato-600">
                            Investors Relations &gt; ESG
                        </span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <p className="lato-400 text-[16px] leading-relaxed  text-[#6B6B6B] text-left mt-6">
                        We are a global climate-conscious leader driving the shift to a Circular Economy and a greener future. By accelerating sustainability goals, reducing carbon emissions, and embracing digital innovation, we expand practices that minimize our footprint while setting new industry benchmarks worldwide. Our growth is rooted in the sustainable development of communities, giving back through the stewardship of natural and human capital. Guided by integrity, fairness, and transparency, our governance ensures accountability and ethical business conduct, fostering openness and long-term progress. Anchored in our belief—“Clean and Green is Profitable and Sustainable”—we remain committed to building a better tomorrow and leading the industry toward lasting, responsible growth.
                    </p>
                </div>
            </main>
            <div className='bg-white max-w-7xl mx-auto px-4 sm:px-0'>
                <ImpactStats />

                
            </div>
            <ESGSection />

             <div className="bg-white max-w-7xl mx-auto px-4 sm:px-0">
            
            
                                <AnnualReportsSection reports={annualReports} />
                            </div>
            <SiteFooter />

        </div>
    )
}

export default page
