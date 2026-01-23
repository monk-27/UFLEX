"use client"

import { SiteFooter } from '@/components/site-footer'
import React, { useState } from 'react'
import Image from "next/image";
import { SiteHeader } from '@/components/site-header';


type Year = 2025 | 2024;
type CoverageTab = "Print Media" | "Online Media";
// "Electronic Media" 



type PdfItem = {
  title: string;
  link: string;
};

/* ==========================
   ALL DATA IN ONE PLACE
========================== */

const PRESS_ROOM_DATA = {
  hero: {
    title: "The Press Room",
    image:
      "/images/press/mainpress.png",
  },


   mediaCoverage: {
    tabs: ["Print Media",  "Online Media"] as const,
    years: [2025, 2024] as const,

    data: {
      "Print Media": {
        2025: ["/images/press/pm1.png", "/images/press/pm2.png", "/images/press/pm3.png", "/images/press/pm4.png", "/images/press/pm5.png"],
        2024: ["/images/press/pm1.png", "/images/press/pm2.png"],
      },
      // "Electronic Media": {
      //   2025: ["/images/press/pm1.png", "/images/press/pm2.png", "/images/press/pm3.png"],
      //   2024: ["/images/press/pm1.png"],
      // },
      "Online Media": {
        2025: ["/images/press/pm1.png", "/images/press/pm2.png", "/images/press/pm3.png", "/images/press/pm4.png"],
        2024: ["/images/press/pm1.png", "/images/press/pm2.png"],
      },
    } satisfies Record<CoverageTab, Record<Year, string[]>>,
  },
}

function YearTabs({
  years,
  activeYear,
  onChange,
}: {
  years: readonly Year[];
  activeYear: Year;
  onChange: (y: Year) => void;
}) {
  return (
    <div className="flex gap-2 py-1 mb-2">
      {years.map((y) => (
        <button
          key={y}
          onClick={() => onChange(y)}
          className={[
            "px-10 py-3 text-xs lato-400 transition",
            activeYear === y
              ? "bg-[#F5F5F5]  text-[#555]  border-b-[0.7px] border-b-[#117ABA] "
              : "bg-[#F5F5F5]  text-[#555]",
          ].join(" ")}
        >
          {y}
        </button>
      ))}
    </div>
  );
}

function PdfList({ items }: { items: PdfItem[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 ">
      {items.map((item, i) => (
        <a key={i} href={item.link} target="_blank" className="group block">
          <div className={[
            "w-full flex items-center justify-between px-6 py-4",
            "bg-[#F8F8F8] group-hover:bg-[#EDEDED]",
            "border-b border-white",
          ].join(" ")}>


            <span className="text-[15px] lato-400 text-[#000000] lato-400">{item.title}</span>
            <Image src="/images/pdf.png" alt="PDF" width={18} height={18} />
          </div>
        </a>
      ))}
    </div>
  );
}
const pages = () => {
  const [releaseYear, setReleaseYear] = useState<Year>(2025);
  const [notesYear, setNotesYear] = useState<Year>(2025);

  const [activeCoverageTab, setActiveCoverageTab] =
    useState<CoverageTab>("Print Media");
  const [activeCoverageYear, setActiveCoverageYear] =
    useState<Year>(2025);

  const { hero ,mediaCoverage } =
    PRESS_ROOM_DATA;
    const coverageItems =
      mediaCoverage.data[activeCoverageTab][activeCoverageYear];
  return (
    <div className="bg-white">
      <SiteHeader />

    
        <section className="max-w-7xl mx-auto px-4">
                <h2 className="text-[24px] lato-700 text-[#117ABA] md:text-[42px]  text-center mb-6">
                  Media Coverage
                </h2>
      
                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-6">
                  {mediaCoverage.tabs.map((tab:any) => (
                    <button
                      key={tab}
                      onClick={() => setActiveCoverageTab(tab)}
                      className={[
                        "px-6 py-2 text-sm  transition",
                        "px-10 py-3 text-xs transition",
                        tab === activeCoverageTab
                          ? "bg-[#F5F5F5]  text-[#555]  border-b-[0.7px] border-b-[#117ABA] "
                          : "bg-[#F5F5F5]  text-[#555]"
                      ].join(" ")}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
      
                {/* Year Tabs */}
                <div className="flex justify-center gap-2 mb-8">
                  {mediaCoverage.years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setActiveCoverageYear(year)}
                      className={[
                        "px-5 py-2 text-sm",
                        year === activeCoverageYear
      
                          ? "bg-[#6E6E6E] text-white"
                          : "bg-[#E6E6E6] text-[#666]",
                      ].join(" ")}
                    >
                      {year}
                    </button>
                  ))}
                </div>
      
                {/* Grid */}
      
      
                {coverageItems.length < 5 ? (
                  /* CENTERED LAYOUT */
                  <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-flow-col gap-6">
                      {coverageItems.map((img) => (
                        <div
                          key={img}
                          className="bg-white  h-[180px] w-[220px] flex items-center justify-center overflow-hidden"
                        >
                          <Image
                            src={img}
                            alt="Media Coverage"
                            width={220}
                            height={140}
                            className="object-contain overflow-hidden"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* NORMAL 5-COLUMN GRID */
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {coverageItems.map((img) => (
                      <div
                        key={img}
                        className="bg-white   h-[150px] w-[220px] sm:h-[180px] sm:w-[220px] flex items-center justify-center overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt="Media Coverage"
                          width={220}
                          height={140}
                          className="object-contain overflow-hidden"
                        />
                      </div>
                    ))}
                  </div>
                )}
      
      
      
                <div className="mt-6 text-left py-6">
                  <a
                      
                      className="inline-flex items-center gap-1 lato-700 text-[14px] text-[#117ABA] "
                    >
                                      <div className="underline underline-offset-2">
      
                      View More
                      
                      <span aria-hidden>↗</span>
                </div>
                      </a>
                </div>
      
              </section>
      <SiteFooter />
    </div>
  )
}

export default pages
