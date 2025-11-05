

"use client";

import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Hero from "@/components/about/hero";
import CompanyInfo from "@/components/about/company-info";
import VisionMission from "@/components/about/vision-mission";
import GlobalFootprint from "@/components/about/global-footprint";
import KeyManagement from "@/components/about/key-management";
import Journey from "@/components/about/journey";

// 👇 Dynamically import Swiper-based components
const BoardOfDirectors = dynamic(() => import("@/components/about/board-of-directors"), {
  ssr: false,
  loading: () => null,
});
const BodMob = dynamic(() => import("@/components/about/bod-mob"), {
  ssr: false,
  loading: () => null,
});

export default function AboutPage() {
  return (
    <main className="">
      <SiteHeader />
      <section className="bg-white">
        <Hero />
         <CompanyInfo />
         <VisionMission />
         <GlobalFootprint />
         <div className="hidden md:block">
          <BoardOfDirectors />
        </div>
        <div className="block sm:hidden space-y-4">
          <BodMob />
        </div>
        {/*

        

        <KeyManagement />
        <Journey /> */}
      </section>
      <SiteFooter />
    </main>
  );
}
