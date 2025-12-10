
// "use client"

// import React from 'react'
// import Image from "next/image";
// import { SiteHeader } from '@/components/site-header';
// import { SiteFooter } from '@/components/site-footer';
// import DownloadCorporateGrid from './download-grid';
// import { corporatePolicies } from '../invdata';

// const page = () => {
//     return (
//         <div>
//             <SiteHeader />

//             <main className="bg-white">

//                 <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

//                     <Image
//                         src="/images/investors/cp.png"
//                         alt="Investors Relations"
//                         fill
//                         className="object-cover w-full h-full"
//                         priority
//                     />

//                     <div className="absolute inset-0 bg-black/40"></div>

//                     <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
//                         <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
//                             Corporate Policies
//                         </h1>


//                     </div>
//                 </section>
//                 <div className="bg-[#EFEFEF]">
//                     <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
//                         <span className="text-black text-xs lato-700 lato-600">
//                             Investors Relations &gt; Corporate Policies
//                         </span>
//                     </div>
//                 </div>
//                 <div className="bg-white max-w-7xl mx-auto px-4 sm:px-0">


//                     <DownloadCorporateGrid items={corporatePolicies} />
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

/* ----------------------------- Types & data ----------------------------- */

type PolicyItem = {
  text: string;
  link: string;
};

const policies: PolicyItem[] = [
  { text: "Nomination and Remuneration Policy", link: "https://www.uflexltd.com/pdf/Policies/Uflex-Nomination-Remuneration-Policy.pdf" },
  { text: "Dividend Distribution Policy", link: "https://www.uflexltd.com/pdf/Policies/UFLEX_Dividend_Distribution_Policy.pdf" },
  { text: "Whistle Blower Policy", link: "https://www.uflexltd.com/pdf/Policies/Uflex-Whistle-Blower-Policy.pdf" },
  { text: "Risk Management Policy", link: "https://www.uflexltd.com/pdf/Policies/Uflex-Risk-Management-Policy.pdf" },
  { text: "Corporate Social Responsibility Policy", link: "https://www.uflexltd.com/pdf/Policies/Uflex-CSR-Policy.pdf" },
  { text: "Board Diversity Policy", link: "https://www.uflexltd.com/pdf/Policies/Uflex-Board-Diversity-Policy.pdf" },
  { text: "Code of Conduct", link: "https://www.uflexltd.com/pdf/Policies/Uflex-CODE-OF-CONDUCT.pdf" },
  { text: "Related Party Transactions Policy", link: "https://www.uflexltd.com/pdf/Policies/Uflex-RELATED-PARTY-TRANSACTIONS-POLICY.pdf" },
  {
    text: "Environment, Health and Safety (EHS) Policy",
    link: "https://www.uflexltd.com/pdf/Policies/Uflex-ehspolicy.pdf",
  },
  {
    text: "Code of Conduct – Insider Trading 2015",
    link: "https://www.uflexltd.com/pdf/Policies/Uflex-code-of-insider-trading-regulation-2015.pdf",
  },
  {
    text: "Terms and Conditions of Appointment of Independent Directors",
    link: "https://www.uflexltd.com/pdf/Policies/UFlex-terms-conditions-of-appointment-of-independent-directors.pdf",
  },
  {
    text: "Criteria For Making Payment To Non-Executive Directors",
    link: "https://www.uflexltd.com/pdf/Policies/Uflex-criteria-for-making-payment-to-non-executive-directors.pdf",
  },
  {
    text: "Policy to Determine Material Events or Information",
    link: "https://www.uflexltd.com/pdf/Policies/Uflex-policy-to-determine-material-events-or-information.pdf",
  },
  {
    text: "Policy on Preservation of Documents",
    link: "https://www.uflexltd.com/pdf/Policies/Uflex-policy-on-preservation-of-documents.pdf",
  },
  {
    text:
      "Code of Practices and Procedures for Fair Disclosure of Unpublished Price Sensitive Information",
    link: "https://www.uflexltd.com/pdf/Policies/Uflex-Fair-Disclosure-Code.pdf",
  },
  {
    text: "Archival Policy",
    link: "https://www.uflexltd.com/pdf/Policies/Uflex-Archival-Policy.pdf",
  },
];

const familiarizationPrograms: PolicyItem[] = [
  { text: "Familiarization Programme - 2024-2025", link: "https://www.uflexltd.com/pdf/Policies/UFlex_FP-Independent-Directors_24-25.pdf" },
  { text: "Familiarization Programme - 2023-2024", link: "https://www.uflexltd.com/pdf/Policies/UFlex_FP-Independent-Directors_23-24.pdf" },
  { text: "Familiarization Programme - 2022-2023", link: "https://www.uflexltd.com/pdf/Policies/UFlex_FP-Independent-Directors_22-23.pdf" },
  { text: "Familiarization Programme - 2021-2022", link: "https://www.uflexltd.com/pdf/Policies/UFlex_FP-Independent-Directors_21-22.pdf" },
  { text: "Familiarization Programme - 2020-2021", link: "https://www.uflexltd.com/pdf/Policies/UFlex_FP-Independent-Directors_20-21.pdf" },
  { text: "Familiarization Programme - 2019-2020", link: "https://www.uflexltd.com/pdf/Policies/Uflex-FP-Independent-Directors-19-20.pdf" },
  { text: "Familiarization Programme - 2018-2019", link: "https://www.uflexltd.com/pdf/Policies/Uflex-FP-Independent-Directors-18-19.pdf" },
  { text: "Familiarization Programme - 2017-2018", link: "https://www.uflexltd.com/pdf/Policies/Uflex-FP-Independent-Directors-17-18.pdf" },
  { text: "Familiarization Programme - 2016-2017", link: "https://www.uflexltd.com/pdf/Policies/Uflex-FP-Independent-Directors-16-17.pdf" },
  {
    text: "Familiarization Programme for Independent Directors",
    link: "https://www.uflexltd.com/pdf/Policies/Uflex-familiarization-program-for-ids.pdf",
  },
];

/* ----------------------------- Page component ----------------------------- */

const Page = () => {
  return (
    <div>
      <SiteHeader />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
          <Image
            src="/images/investors/cp.png"
            alt="Corporate Policies"
            fill
            className="object-cover w-full h-full"
            priority
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
            <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
              Corporate Policies
            </h1>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="bg-[#EFEFEF]">
          <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
            <span className="text-black text-xs lato-600">
              Investors Relations &gt; Corporate Policies
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-4 sm:px-12 md:px-20 lg:px-28 py-8">
          {/* ---------- POLICIES BLOCK (BLUE HEADER) ---------- */}
          <div>
            <div className="w-full bg-[#117ABA] py-3 px-4">
              <h2 className="text-white text-sm sm:text-base lato-700 text-center">
                Policies
              </h2>
            </div>

            <div className="mt-1">
              {policies.map((item, i) => (
                <Link key={i} href={item.link} target="_blank">
                  <div className="w-full bg-[#F7F7F7] py-3 px-4 flex items-center justify-between border-b-[2px] border-white hover:bg-[#ececec] transition">
                    <span className="text-[14px] text-black lato-400">
                      {item.text}
                    </span>

                    <Image
                      src="/images/pdf.png"
                      alt="PDF"
                      width={22}
                      height={22}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ---------- FAMILIARIZATION BLOCK (GREY HEADER) ---------- */}
          <div>
            <div className="w-full bg-[#E3E3E3] py-3 px-4">
              <h2 className="text-[#000000] text-sm sm:text-base lato-400 text-center">
                Familiarization Program for Independent Directors
              </h2>
            </div>

            <div className="mt-1">
              {familiarizationPrograms.map((item, i) => (
                <Link key={i} href={item.link} target="_blank">
                  <div className="w-full bg-[#F7F7F7] py-3 px-4 flex items-center justify-between border-b-[2px] border-white hover:bg-[#ececec] transition">
                    <span className="text-[14px] text-black lato-400">
                      {item.text}
                    </span>

                    <Image
                      src="/images/pdf.png"
                      alt="PDF"
                      width={22}
                      height={22}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Page;

