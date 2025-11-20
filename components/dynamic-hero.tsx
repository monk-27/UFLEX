"use client";
import React from 'react'
import Image from 'next/image';

const DynamicHero= ({image,text}:any) => {
  return (
      <header className=" relative w-full bg-white">
        <div className="relative h-[280px] md:h-[520px] lg:h-[280px] w-auto overflow-hidden">
          <Image src={image} alt="hero" fill className="object-cover object-top" priority />
  
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/18 to-transparent" />
        </div>
  
        <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0 ">
            <div className="relative">
              <span className="px-4 text-center inline-block bg-[#117ABA] text-white manrope-400 w-auto h-[40px] sm:h-[59px] text-[20px] sm:text-[36px] shadow-sm translate-y-1/2">
                {text}
              </span>
            </div>
          </div>
        </div>
  
      </header>
    );
}

export default DynamicHero
