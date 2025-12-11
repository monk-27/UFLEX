
// "use client"

// import React from 'react'
// import Image from "next/image";
// import { SiteHeader } from '@/components/site-header';
// import { SiteFooter } from '@/components/site-footer';
// import { InvestorAccordion } from './accordian';
// import { investorAccordionItems } from '../invdata';

// const page = () => {
//     return (
//         <div>
//             <SiteHeader />

//             <main className="bg-white">

//                 <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

//                     <Image
//                         src="/images/investors/si.png"
//                         alt="Investors Relations"
//                         fill
//                         className="object-cover w-full h-full"
//                         priority
//                     />

//                     <div className="absolute inset-0 bg-black/40"></div>

//                     <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
//                         <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
//                             Shareholder's Information
//                         </h1>


//                     </div>
//                 </section>
//                 <div className="bg-[#EFEFEF]">
//                     <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
//                         <span className="text-black text-xs lato-700 lato-600">
//                             Investors Relations &gt;  Shareholder's Information
//                         </span>
//                     </div>
//                 </div>
//                 <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 py-10">
//                     <InvestorAccordion items={investorAccordionItems} />
//                 </section>
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

const communicationList = [
    { text: "30 Sep 2025: Transcript of the 36th Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2025/UFLEX_TRANSCRIPT_36AGM.pdf" },
    { text: "25 Jul 2025: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2025/SIGNED_UFLEX_NSEBSE_ADVT_25JUL25.pdf" },
    { text: "17 Jul 2025: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2025/SIGNED_UFLEX_NSEBSE_ADVT_17JUl25.pdf" },
    { text: "15 Jul 2025: Notice of 36th Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2025/UFlex_Notice_for_AGM2025.pdf" },
    { text: "10 Jul 2025: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2025/SIGNED_UFLEX_NSEBSE_ADVT_10JUl25.pdf" },
    { text: "07 Jul 2025: Communication for Deduction of Tax on Dividend for FY 2024-25", link: "https://www.uflexltd.com/pdf/SC/2025/UFLEX_2025_TDS_LETTER.pdf" },
    { text: "17 Jun 2025: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2025/SIGNED_UFLEX_NSEBSE_ADVT_17JUN25.pdf" },
    { text: "28 May 2025: Application Cum Undertaking of Unpaid Unclaimed Dividend", link: "https://www.uflexltd.com/pdf/SC/2025/UFlex_Application_Cum_Undertaking.pdf" },
    { text: "25 Sep 2024: Transcript of the 35th Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2024/UFLEX_TRANSCRIPT_35AGM.pdf" },
    { text: "28 Aug 2024: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2024/SIGNED_UFLEX_NSEBSE_ADVT_28AUG24.pdf" },
    { text: "27 Aug 2024: Notice of 35th Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2024/UFlex_Notice_for_AGM2024.pdf" },
    { text: "21 Aug 2024: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2024/SIGNED_UFLEX_NSEBSE_ADVT_21AUG24.pdf" },
    { text: "12 Aug 2024: Communication for Deduction of Tax on Dividend for FY 2023-24", link: "https://www.uflexltd.com/pdf/SC/2024/UFLEX_2024_TDS_LETTER.pdf" },
    { text: "03 Jun 2024: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2024/SIGNED_UFLEX_NSEBSE_ADVRT_01JUN24.pdf" },
    { text: "09 Jan 2024: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2024/SIGNED_UFLEX_NSEBSE_PBADVT_09JAN24.pdf" },
    { text: "08 Jan 2024: Notice of Postal Ballot", link: "https://www.uflexltd.com/pdf/SC/2024/UFlex_Notice_of_Postal_Ballot_Jan24.pdf" },
    { text: "19 Oct 2023: Transcript of 34th Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2023/UFLEX_TRANSCRIPT_34thAGM_23AUG23.pdf" },
    { text: "28 Jul 2023: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2023/SIGNED_UFLEXNSEBSE_ADVT28JUL23.pdf" },
    { text: "27 Jul 2023: Notice of 34th Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2023/UFLEX_NOTICE_FOR_AGM.pdf" },
    { text: "26 Jul 2023: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2023/UFlex_AGM_Newspaper_Advertisement.pdf" },
    { text: "26 Jun 2023: Communication for Deduction of Tax on Dividend for FY 2022-23", link: "https://www.uflexltd.com/pdf/SC/2023/UFLEX_2023_TDS_LETTER.pdf" },
    { text: "01 Jun 2023: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2023/SIGNED_UFLEX_NSEBSE_ADVT_1JUN23.pdf" },
    { text: "30 May 2023: Application Cum Undertaking of Unpaid Unclaimed Dividend", link: "https://www.uflexltd.com/pdf/SC/2023/UFlex_Application_Cum_Undertaking.pdf" },
    { text: "30 May 2023: Reminder Letters to Shareholders (Unpaid/Unclaimed Dividend & Shares Liable to Transfer to IEPF)", link: "https://www.uflexltd.com/pdf/SC/2023/UFlex_UNP_DIV_Letter.pdf" },
    { text: "30 May 2023: Sebi Circular March 16,2023 Circular Mandatory Furnishing of PAN, KYC Details and Nomination by holders of Physical SecuritiesUFlex Shareholders Communication", link: "https://www.uflexltd.com/pdf/SC/2023/UFlex_Sebi_Circular_March162023.pdf" },
    { text: "06 Apr 2023: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2023/SIGNED_UFLEX_NSEBSE_PBCORG_06APR23.pdf" },
    { text: "04 Apr 2023: Corrigendum to Postal Ballot Notice 14th February 2023", link: "https://www.uflexltd.com/pdf/SC/2023/SIGNED_UFLEX_NSEBSE_04APR2023.pdf" },
    { text: "20 Mar 2023: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2023/SIGNED_NSEBSE_PBADVERTISEMENT_19MAR2023.pdf" },
    { text: "18 Mar 2023: Notice of Postal ballot", link: "https://www.uflexltd.com/pdf/SC/2023/SIGNED_UFLEX_NSEBSE_PBNOTICE_18MAR2023.pdf" },
    { text: "19 Sep 2022: Transcript of 33rd Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2022/UFlex_33rd_AGM_Transcript.pdf" },
    { text: "13 Aug 2022: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2022/UFLEX_NSEBSE_ADVT_13AUG22.pdf" },
    { text: "12 Aug 2022: Notice of 33rd Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2022/UFlex_AGM_NOTICE.pdf" },
    { text: "22 Jul 2022: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2022/UFLEX_ADVT_NSEBSE_22JUL2022.pdf" },
    { text: "02 Jul 2022: Communication for Deduction of Tax on Dividend For FY 2021-2022", link: "https://www.uflexltd.com/pdf/SC/2022/UFlex_Communication_TDS_FY21-22.pdf" },
    { text: "23 Feb 2022: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2022/UFLEX_NSEBSE_ADVERTISEMENT_23FEB2022.pdf" },
    { text: "23 Feb 2022: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2022/UFLEX_NSEBSE_ADVERTISEMENT_23FEB2022.pdf" },
    { text: "29 Dec 2021: Mandatory furnishing of PAN, KYC details and Nomination by   holders of physical securitiesUFlex Shareholders Communication", link: "https://www.uflexltd.com/pdf/SC/2021/UFlex_Mandotry_KYC_Letter.pdf" },
    { text: "01 Oct 2021: Transcript of 32nd Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2021/UFLEX_32nd_AGM_Transcript.pdf" },
    { text: "04 Sep 2021: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2021/UFLEX_BSENSE_AGMADVT_04SEP2021.pdf" },
    { text: "02 Sep 2021: Notice of 32nd Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2021/UFLEX_Notice_32nd_AGM_2021.pdf" },
    { text: "31 Aug 2021: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2021/UFLEX_NSEBSE_NEWSADVT_31AUG2021.pdf" },
    { text: "30 Jul 2021: Communication for Deduction of Tax on Dividend For FY 2020-2021", link: "https://www.uflexltd.com/pdf/SC/2021/UFLEX_Communication_TDS_FY20-21.pdf" },
    { text: "29 Sep 2020: Transcript of 31st Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2020/UFLEX_Transcripts_31stAGM_17SEP2020.pdf" },
    { text: "26 Aug 2020: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2020/UFLEX_NSEBSE_ADVT_26AUG2020.pdf" },
    { text: "23 Aug 2020: Newspaper Publication", link: "https://www.uflexltd.com/pdf/SC/2020/UFLEX_NSEBSE_ADVT_23AUG2020.pdf" },
    { text: "Notice of 31st Annual General Meeting", link: "https://www.uflexltd.com/pdf/SC/2020/UFlex_Notice_31st_AGM_2020.pdf" },
    { text: "Communication for deduction of Tax on Dividend for FY 2019-20", link: "https://www.uflexltd.com/pdf/SC/2020/UFlex_Communication_TDS_FY19_20.pdf" }
];

export default function Page() {
    return (
        <div>
            <SiteHeader />

            <main className="bg-white">

                {/* --- HERO SECTION --- */}
                <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
                    <Image src="/images/investors/si.png" alt="Shareholder's Information" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700">
                            Shareholder's Information
                        </h1>
                    </div>
                </section>

                {/* --- BREADCRUMB --- */}
                {/* <div className="bg-[#EFEFEF] border-b border-[#d6d6d6]">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
                        <span className="text-black text-xs lato-600">
                            Investors Relations &gt; Shareholders Information
                        </span>
                    </div>
                </div> */}
                <Breadcrumb
                                          items={[
                                            { label: "Investors Relations", href: "/investors" },
                                            { label: "Shareholders Information" },
                                          ]}
                                        />

                {/* --- RED BUTTONS --- */}
                <div className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 pb-2">
                        <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
                            <Link href="#" className="bg-[#CF3438] text-white text-xs lato-700 px-4 py-2 text-center">KYC FORMS</Link>
                            <Link href="#" className="bg-[#CF3438] text-white text-xs lato-700 px-4 py-2 text-center sm:whitespace-nowrap">
                                LOGIN TO THE ONLINE DISPUTE RESOLUTION PORTAL (ODR)
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- COMMUNICATION LIST --- */}
                <section className="max-w-6xl mx-auto px-4 sm:px-12 md:px-20 lg:px-28 py-8">

                    {/* BLUE HEADER */}
                    <div className="w-full bg-[#117ABA] py-3 px-6">
                        <h2 className="text-white text-sm sm:text-[16px] lato-400 text-center">
                            Shareholders Communication Details
                        </h2>
                    </div>

                    {/* LIST */}
                    <div className="mt-1">
                        {communicationList.map((item, i) => (
                            <Link key={i} href={item.link} target="_blank">
                                <div className="w-full bg-[#F7F7F7] py-3 px-6 flex items-center justify-between border-b-[2px] border-white hover:bg-[#ececec] transition">

                                    <span className="text-[14px] text-black lato-400">{item.text}</span>

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
                </section>
            </main>

            <SiteFooter />
        </div>
    );
}
