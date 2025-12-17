

"use client"
import React from 'react'
import Image from "next/image";
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';
import { InvestorCardsGrid } from './investor-card';
import { investorCards } from '@/app/investors/invdata';

const InvestorsPage = () => {
  return (
    <main className="bg-white">

      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

        <Image
          src="/images/investors/hero.png"
          alt="Investors Relations"
          fill
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-w-7xl mx-auto  absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Investors Relations
          </h1>

          <div className="space-y-2">
            <a
            href='/investors/annual-report'
            target='self'
              className="text-white text-sm sm:text-base md:text-lg underline-offset-8 underline decoration-[#CF2328] hover:text-gray-200 transition"
            >
              Annual Report 2024–25
            </a>


            
          </div>
        </div>
      </section>

      <InvestorCardsGrid cards={investorCards} />

    </main>

  )
}

export default InvestorsPage


