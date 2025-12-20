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
                        Packaging  Films & PET Resin
                    </h2>
                    <div className="pb-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* LEFT COLUMN */}
                        <div>
                            <h3 className="text-[14px] md:text-[16px] lato-700 text-[#117ABA] mb-4">
                                Single-pellet solution: Pioneering innovation in recyclable packaging.
                            </h3>

                            <p className="text-[14px] md:text-[16px] leading-7 text-[#6D6E71]">
                                Reinforcing our commitment to sustainability, UFlex has introduced a
                                breakthrough FSSAI-compliant single-pellet solution for incorporating
                                recycled PET (rPET) in food and beverage packaging. This innovation
                                combines recycled PET with virgin PET into a single, high-purity pellet,
                                offering excellent mechanical strength, thermal stability, high clarity,
                                and lower acetaldehyde content. Most notably, it is compatible with
                                existing PET manufacturing lines, enabling FMCG brands to transition to
                                sustainable packaging without any additional investment. Aligned with
                                the FSSAI guidelines and the Government of India’s Extended Producer
                                Responsibility (EPR) framework, this solution supports brands in meeting
                                the regulatory requirement of 30% recycled content in Category-1 rigid
                                plastic packaging by FY26. Validated for food safety with approvals from
                                both FSSAI and the USFDA, UFlex’s single-pellet solution sets a new
                                benchmark in food-grade recycled packaging, combining compliance,
                                performance, and environmental responsibility.
                            </p>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-2">
                            <div>
                                <h3 className="text-[14px] md:text-[16px] lato-700 text-[#117ABA] mb-1">
                                    AsclepiusTM: High-performance PCR PET Films
                                </h3>
                                <p className="text-[14px] md:text-[16px] leading-7 text-[#6D6E71]">
                                    These are the range of up to 100% PCR PET films under the brand name
                                    AsclepiusTM which is made by upcycling post-consumer PET plastic bottles
                                    and offers the same attributes as its twin substrate made out of virgin
                                    PET. Asclepius™ has earned the esteemed ‘Kingfisher’ certification from
                                    SCS Global Services, a leading authority in environmental and
                                    sustainability certification.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[14px] md:text-[16px] lato-700 text-[#117ABA] mb-1">
                                    PCR PE Films
                                </h3>
                                <p className="text-[14px] md:text-[16px] leading-7 text-[#6D6E71]">
                                    It is the range of PCR Poly-Ethylene films upcycled from post-consumer
                                    multi-layer mixed plastic waste.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[14px] md:text-[16px] lato-700 text-[#117ABA] mb-1">
                                    Biodegradable Films
                                </h3>
                                <p className="text-[14px] md:text-[16px] leading-7 text-[#6D6E71]">
                                    These super-earth-friendly films using FlexzymeTM technology are
                                    enzyme-based and embody all the qualities of a good packaging film.
                                    Sturdy and flexible, it has the superpower of being biodegradable in a
                                    fixed period. When the packaging made from this film comes in contact
                                    with soil, it begins to degrade into water, carbon, and biomass,
                                    leaving no polluting impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <SiteFooter />
        </div>
    )
}

export default page
