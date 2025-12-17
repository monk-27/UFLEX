
// "use client"

// import React from 'react'
// import Image from "next/image";
// import { SiteHeader } from '@/components/site-header';
// import { SiteFooter } from '@/components/site-footer';

// const page = () => {
//     return (
//         <div>
//             <SiteHeader />

//             <main className="bg-white">

//                 <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

//                     <Image
//                         src="/images/investors/csr.png"
//                         alt="Investors Relations"
//                         fill
//                         className="object-cover w-full h-full"
//                         priority
//                     />

//                     <div className="absolute inset-0 bg-black/40"></div>

//                     <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
//                         <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
//                             CSR
//                         </h1>


//                     </div>
//                 </section>
//                 <div className="bg-[#EFEFEF]">
//                     <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
//                         <span className="text-black text-xs lato-700 lato-600">
//                             Investors Relations &gt; CSR
//                         </span>
//                     </div>
//                 </div>


//             </main>
//             <SiteFooter />

//         </div>
//     )
// }

// export default page
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Breadcrumb from "../breadcrumb";

/* --------------------------- CSR data (JSON) --------------------------- */

type CsrPlanItem = {
  title: string;
  href: string;
};

const csrAnnualActionPlans: CsrPlanItem[] = [
  {
    title: "CSR Annual Action Plan FY2025–26",
    href: "https://www.uflexltd.com/pdf/Policies/UFlex_CSR_AA_Plan_FY2025-26.pdf",
  },
  {
    title: "CSR Annual Action Plan FY2024–25",
    href: "https://www.uflexltd.com/pdf/Policies/UFlex_CSR_AA_Plan_FY2024-25.pdf",
  },
  {
    title: "CSR Annual Action Plan FY2023–24",
    href: "https://www.uflexltd.com/pdf/Policies/UFlex_CSR_AA_Plan_FY2023-24.pdf",
  },
  {
    title: "CSR Annual Action Plan FY2022–23",
    href: "https://www.uflexltd.com/pdf/Policies/UFlex_CSR_AA_Plan_FY2022-23.pdf",
  },
  {
    title: "CSR Annual Action Plan FY2021–22",
    href: "https://www.uflexltd.com/pdf/Policies/UFlex_CSR_AA_Plan_FY2021-22.pdf",
  },
  {
    title: "CSR Annual Action Plan FY2020–21",
    href: "https://www.uflexltd.com/pdf/Policies/UFlex_CSR_AA_Plan_FY2020-21.pdf",
  },
];

/* ------------------------------ Page ------------------------------ */

const CsrPage = () => {
  return (
    <div>
      <SiteHeader />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
          <Image
            src="/images/investors/csr.png"
            alt="Investors Relations"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-7xl mx-auto  absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
            <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
              CSR Annual Action Plan
            </h1>
          </div>
        </section>

        {/* BREADCRUMB */}
        {/* <div className="bg-[#EFEFEF]">
          <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
            <span className="text-black text-xs lato-600">
              Investors Relations &gt; CSR Annual Action Plan
            </span>
          </div>
        </div> */}
        <Breadcrumb
  items={[
    { label: "Investors Relations", href: "/investors" },
    { label: "CSR Annual Action Plan" },
  ]}
/>

        {/* CSR Annual Action Plan table */}
        <section className="max-w-6xl mx-auto px-4 sm:px-12 md:px-20 lg:px-28 py-8">
          {/* Blue header */}
          <div className="w-full bg-[#117ABA] py-3 px-4">
            <h2 className="text-white text-sm sm:text-base lato-700 text-center">
              CSR Annual Action Plan
            </h2>
          </div>

          <div className="bg-white border border-t-0">
            {csrAnnualActionPlans.map((item, idx) => {
              const stripe = idx % 2 === 0 ? "bg-[#F8F8F8]" : "bg-white";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  className="block"
                  rel="noopener noreferrer"
                >
                  <div
                    className={[
                      "w-full flex items-center justify-between px-6 py-4",
                      stripe,
                      "border-t border-white hover:bg-[#efefef] transition-colors"
                    ].join(" ")}
                  >
                    <span className="text-left text-[14px] sm:text-[15px] text-[#000000] lato-400">
                      {item.title}
                    </span>

                    <Image
                      src="/images/pdf.png"
                      alt="PDF"
                      width={22}
                      height={22}
                      className="shrink-0"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default CsrPage;
