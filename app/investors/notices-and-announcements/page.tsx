
// "use client"

// import React from 'react'
// import Image from "next/image";
// import { SiteHeader } from '@/components/site-header';
// import { SiteFooter } from '@/components/site-footer';
// import { InvestorAccordion } from '../shareholders-information/accordian';
// import { investorAccordionItems, pressReleaseAccordionItems } from '../invdata';

// const page = () => {
//     return (
//         <div>
//             <SiteHeader />

//             <main className="bg-white">

//                 <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

//                     <Image
//                         src="/images/investors/na.png"
//                         alt="Investors Relations"
//                         fill
//                         className="object-cover w-full h-full"
//                         priority
//                     />

//                     <div className="absolute inset-0 bg-black/40"></div>

//                     <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
//                         <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
//                             Notices and Announcements
//                         </h1>


//                     </div>
//                 </section>

//                 <div className="bg-[#EFEFEF]">
//                     <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
//                         <span className="text-black text-xs lato-700 lato-600">
//                             Investors Relations &gt;  Notices and Announcements
//                         </span>
//                     </div>
//                 </div>

//                 <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 py-10">
//                     <InvestorAccordion items={pressReleaseAccordionItems} />
//                 </section>


//             </main>
//             <SiteFooter />

//         </div>
//     )
// }

// export default page
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Calendar } from "lucide-react";

/* -------------------------- Tabs & data types -------------------------- */

type TabId =
    | "announcements"
    | "shareholding-pattern"
    | "unpaid-dividend"
    | "transfer-to-iepF"
    | "registrar"
    | "governance-structure"
    | "grievance-redressal"
    | "kmp-contacts"
    | "credit-ratings"
    | "annual-return"
    | "business-responsibility"
    | "secretarial-compliance"
    | "memorandum-articles";

type Tab = {
    id: TabId;
    label: string;
    header: string; // text inside the blue bar
};

type DocItem = {
    text: string;
    link: string;
};
type AnnouncementGroup = {
    date: string;
    items: DocItem[];
};
/* ----------------------------- Tab metadata ---------------------------- */

const tabs: Tab[] = [
    { id: "announcements", label: "Announcements", header: "Announcements" },
    {
        id: "shareholding-pattern",
        label: "Shareholding pattern",
        header: "Shareholding pattern",
    },
    {
        id: "unpaid-dividend",
        label: "Unpaid / unclaimed dividend",
        header: "Unpaid / unclaimed dividend",
    },
    {
        id: "transfer-to-iepF",
        label: "Transfer of shares to IEPF",
        header: "Transfer of shares to IEPF",
    },
    { id: "registrar", label: "Registrar", header: "Registrar" },
    {
        id: "governance-structure",
        label: "Governance structure",
        header: "Governance structure",
    },
    {
        id: "grievance-redressal",
        label: "Grievance redressal",
        header: "Grievance redressal",
    },
    {
        id: "kmp-contacts",
        label: "Contact details of KMPs",
        header: "Contact details of KMPs",
    },
    { id: "credit-ratings", label: "Credit ratings", header: "Credit ratings" },
    {
        id: "annual-return",
        label: "Extract of annual return",
        header: "Extract of annual return",
    },
    {
        id: "business-responsibility",
        label: "Business responsibility report",
        header: "Business responsibility report",
    },
    {
        id: "secretarial-compliance",
        label: "Secretarial compliance report",
        header: "Secretarial compliance report",
    },
    {
        id: "memorandum-articles",
        label: "Memorandum & Articles of Association",
        header: "Memorandum & Articles of Association",
    },
];



const tabItems: Record<TabId, AnnouncementGroup[]> = {
    announcements: [
        {
            date: "08/12/2025",
            items: [
                {
                    text: "Updates on Schedule of Analyst/Institutional Investor meet under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 – Investor Presentation",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_INVP_08DEC25.pdf",
                },
            ],
        },
        {
            date: "02/12/2025",
            items: [
                {
                    text: "Intimation of Schedule of Analyst/Institutional Investor Meet under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/",
                },
            ],
        },
        {
            date: "28/11/2025",
            items: [
                {
                    text: "Intimation in respect of re-affirmation of Credit Ratings under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_CRISILCR_28NOV25.pdf",
                },
            ],
        },
        {
            date: "21/11/2025",
            items: [
                {
                    text: "Intimation under Regulation 30 read with Schedule III of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_ESG_21NOV25.pdf",
                },
            ],
        },
        {
            date: "20/11/2025",
            items: [
                {
                    text: "Transcript of the earnings conference call conducted on November 14, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AMTRANSCRIPT_14NOV25.pdf",
                },
            ],
        },
        {
            date: "16/11/2025",
            items: [
                {
                    text: "Revised Earnings Presentation",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/UFLEX_SIGNED_NSEBSE_IP_16NOV25.pdf",
                },
            ],
        },
        {
            date: "15/11/2025",
            items: [
                {
                    text: "Publication of Financial Results",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_PUBLICATION_30SEP25.pdf",
                },
            ],
        },
        {
            date: "14/11/2025",
            items: [
                {
                    text: "Recording of earnings conference call conducted on November 14, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AUDREC_14NOV25.pdf",
                },
                {
                    text: "Updates on Earnings Conference Call under the SEBI (Listing Obligations & Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_IP_14NOV25.pdf",
                },
            ],
        },
        {
            date: "13/11/2025",
            items: [
                {
                    text: "Earnings Release for the Quarter Ended September 30, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_ER_Q2FY26.pdf",
                },
                {
                    text: "Outcome of Board Meeting held on 13th November, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_QTRLYRES_30SEP25.pdf",
                },
            ],
        },
        {
            date: "10/11/2025",
            items: [
                {
                    text: "Intimation of Earnings Conference Call under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AM_14NOV25.pdf",
                },
            ],
        },
        {
            date: "04/11/2025",
            items: [
                {
                    text: "Board Meeting to consider the Unaudited Financial Results of the Company for the quarter and six months ended 30th September 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_BM_04NOV25.pdf",
                },
            ],
        },
        {
            date: "18/10/2025",
            items: [
                {
                    text: "Disclosure under Regulation 30 of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 - Resignation of Senior Management Personnel",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_18OCT25.pdf",
                },
            ],
        },
        {
            date: "03/10/2025",
            items: [
                {
                    text: "Disclosures under Regulation 30 of the SEBI (Listing Obligations & Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_03OCT25.pdf",
                },
            ],
        },
        {
            date: "25/09/2025",
            items: [
                {
                    text: "Closure of Trading Window",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_TW_25SEP25.pdf",
                },
            ],
        },
        {
            date: "23/09/2025",
            items: [
                {
                    text: "Updates on In-person Non-Deal Roadshow (NDR) of Investor Meetings",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_INVPRE_23SEP25.pdf",
                },
            ],
        },
        {
            date: "22/09/2025",
            items: [
                {
                    text: "Intimation of Schedule of Analyst/Institutional Investor Meet under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AMD_REG30_22SEP25.pdf",
                },
            ],
        },
        {
            date: "18/09/2025",
            items: [
                {
                    text: "Intimation of participation in Arihant Bharat Connect Conference: Rising Stars – September 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_AM_18SEP25.pdf",
                },
            ],
        },
        {
            date: "01/09/2025",
            items: [
                {
                    text: "Disclosures under Regulation 30 (Part-A Para A) of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 – Appointment of Senior Management Personnel",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_SRMGMT_01SEP25.pdf",
                },
            ],
        },
        {
            date: "28/08/2025",
            items: [
                {
                    text: "36th Annual General Meeting Updates: Disclosure Under Regulation 30 of the SEBI (Listing Obligations & Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_36AGM.pdf",
                },
                {
                    text: "36th Annual General Meeting Updates: Voting Results",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG44_36AGM.pdf",
                },
                {
                    text: "36th Annual General Meeting Updates: Submission of Scrutinizer’s Report",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_SCR_36AGM.pdf",
                },
                {
                    text: "36th Annual General Meeting Updates: Proceedings of the 36th Annual General Meeting held on 28th August, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AGM_PROCEEDINGS.pdf",
                },
            ],
        },
        {
            date: "22/08/2025",
            items: [
                {
                    text: "Transcript of the earnings conference call conducted on August 18, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_EC_TRANSCRIPT_18AUG25.pdf",
                },
            ],
        },
        {
            date: "18/08/2025",
            items: [
                {
                    text: "Intimation of participation in “Centrum - Orion IV Virtual Investor Conference”",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AM_21AUG25.pdf",
                },
                {
                    text: "Recording of earnings conference call conducted on August 18, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AM_AR_18AUG25.pdf",
                },
                {
                    text: "Updates on Earnings Conference Call under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_INVPRES_18AUG25.pdf",
                },
            ],
        },
        {
            date: "14/08/2025",
            items: [
                {
                    text: "Publication of Financial Results",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_NEWP_14AUG25.pdf",
                },
            ],
        },
        {
            date: "13/08/2025",
            items: [
                {
                    text: "Earnings Release for the Quarter Year Ended 30th June, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_PR_13AUG25.pdf",
                },
                {
                    text: "Outcome of Board Meeting held on 13th August, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_QTRLYRES_30JUN25.pdf",
                },
            ],
        },
        {
            date: "11/08/2025",
            items: [
                {
                    text: "Intimation of Earnings Conference Call under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AM_18AUG25.pdf",
                },
            ],
        },
        {
            date: "04/08/2025",
            items: [
                {
                    text: "Board Meeting to consider the Unaudited Financial Results of the Company for the quarter ended 30th June 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_BM_13AUG25.pdf",
                },
            ],
        },
        {
            date: "02/08/2025",
            items: [
                {
                    text: "Disclosure under Regulation 30 read with Schedule III, Part A, Para A of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_INC_02AUG25.pdf",
                },
            ],
        },
        {
            date: "24/06/2025",
            items: [
                {
                    text: "Closure of Trading Window",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_TW_24JUN25.pdf",
                },
            ],
        },
        {
            date: "17/06/2025",
            items: [
                {
                    text: "Updates on non-deal roadshow of Investor Meetings",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AMINVP_17JUN25.pdf",
                },
            ],
        },
        {
            date: "13/06/2025",
            items: [
                {
                    text: "Intimation of Schedule of Analyst/Institutional Investor Meet under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AM_13JUN25.pdf",
                },
            ],
        },
        {
            date: "26/05/2025",
            items: [
                {
                    text: "Transcript of the earnings conference call conducted on 20th May, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AMTRNS_26MAY25.pdf",
                },
            ],
        },
        {
            date: "20/05/2025",
            items: [
                {
                    text: "Recording of earnings conference call conducted on May 20, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AM_AR_20MAY25.pdf",
                },
                {
                    text: "Updates on Earnings Conference Call under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30IV_20MAY25.pdf",
                },
            ],
        },
        {
            date: "19/05/2025",
            items: [
                {
                    text: "Earnings Release for the Quarter Year Ended 31st March, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_ER_4QFY25.pdf",
                },
            ],
        },
        {
            date: "17/05/2025",
            items: [
                {
                    text: "Outcome of Board Meeting held on 17th May, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_QTRLYRES_31MAR2025.pdf",
                },
            ],
        },
        {
            date: "15/05/2025",
            items: [
                {
                    text: "Disclosure under Regulation 30 read with Schedule III, Part A, Para A of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_15MAY25.pdf",
                },
                {
                    text: "Intimation of Earnings Conference Call under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AM_20MAY25.pdf",
                },
            ],
        },
        {
            date: "08/05/2025",
            items: [
                {
                    text: "Intimation in respect of re-affirmation of Credit Ratings under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_CREDITRATING_08MAY25.pdf",
                },
                {
                    text: "Board Meeting Intimation - Notice of Board Meeting scheduled on May 17, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEXS_NSEBSE_EBMINT_08MAY2025.pdf",
                },
            ],
        },
        {
            date: "24/04/2025",
            items: [
                {
                    text: "Disclosure under Regulation 30 read with Schedule III, Part A, Para A of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_24APR25.pdf",
                },
            ],
        },
        {
            date: "27/03/2025",
            items: [
                {
                    text: "Disclosures under Regulation 30 of the SEBI (Listing Obligations & Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_27MAR25.pdf",
                },
            ],
        },
        {
            date: "25/03/2025",
            items: [
                {
                    text: "Intimation of Schedule of Analyst/Institutional Investor Meet under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AMU_25MAR25.pdf",
                },
            ],
        },
        {
            date: "24/03/2025",
            items: [
                {
                    text: "Updates on Participation in Arihant Bharat Connect Conference: Rising Stars – March 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AMU_24MAR25.pdf",
                },
            ],
        },
        {
            date: "21/03/2025",
            items: [
                {
                    text: "Closure of Trading Window",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_TW_21MAR25.pdf",
                },
            ],
        },
        {
            date: "20/03/2025",
            items: [
                {
                    text: "Intimation of Participation in Arihant Bharat Connect Conference: Rising Stars – March 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_CONF_20MAR25.pdf",
                },
            ],
        },
        {
            date: "18/03/2025",
            items: [
                {
                    text: "Disclosure under Regulation 30 read with Schedule III, Part A, Para A of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 – Incorporation of Step down Wholly owned subsidiary FLEX FILMS AZB AFEZCO., in Azerbaijan",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_REG30_IOC.pdf",
                },
                {
                    text: "Disclosure under Regulation 30 read with Schedule III, Part A, Para A of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_18MAR25.pdf",
                },
            ],
        },
        {
            date: "03/03/2025",
            items: [
                {
                    text: "Updates on non-deal roadshow of Investor Meetings",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_IP_03MAR24.pdf",
                },
                {
                    text: "Disclosures under Regulation 30 (Part-A Para A) of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 – Appointment of Senior Management Personnel",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_03MAR25.pdf",
                },
            ],
        },
        {
            date: "27/02/2025",
            items: [
                {
                    text: "Intimation of Schedule of Analyst/Institutional Investor Meet under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_INVESTORMEET_040325.pdf",
                },
            ],
        },
        {
            date: "21/02/2025",
            items: [
                {
                    text: "Transcript of the earnings conference call conducted on February 17, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_TRANSCRIPT_21FEB25.pdf",
                },
            ],
        },
        {
            date: "17/02/2025",
            items: [
                {
                    text: "Recording of earnings conference call conducted on February 17, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBS_AREC_17FEB25.pdf",
                },
                {
                    text: "Updates on Earnings Conference Call under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_PRESENTATION_17FEB25.pdf",
                },
                {
                    text: "Publication of Financial Results",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_ADVT_15FEB25.pdf",
                },
            ],
        },
        {
            date: "14/02/2025",
            items: [
                {
                    text: "Earnings Release for the Quarter Year Ended 31st December, 2024",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_ER_3QFY25.pdf",
                },
                {
                    text: "Outcome of Board Meeting held on 14th February, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_QTRLYRES_31DEC2024.pdf",
                },
            ],
        },
        {
            date: "12/02/2025",
            items: [
                {
                    text: "Intimation of Earnings Conference Call under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_AM_17FEB25.pdf",
                },
            ],
        },
        {
            date: "04/02/2025",
            items: [
                {
                    text: "Board Meeting Intimation - Notice of Board Meeting scheduled on February 14, 2025",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_BMINT_14FEB25.pdf",
                },
                {
                    text: "Disclosures under Regulation 30 (Part-A Para A) of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 – Appointment of Senior Management Personnel",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_04FEB25.pdf",
                },
            ],
        },
        {
            date: "15/01/2025",
            items: [
                {
                    text: "Disclosures under Regulation 30 (Part-A Para A) of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 – Incorporation of Wholly-owned subsidiary Company under Section-8 of the Companies Act, 2013 — UFlex Charitable Foundation.PDF",
                    link: "https://www.uflexltd.com/pdf/announcements/2025/SIGNED_UFLEX_NSEBSE_REG30_15JAN25.pdf",
                },

            ],
        },
    ],

    "shareholding-pattern": [

    ],
    "unpaid-dividend": [],
    "transfer-to-iepF": [],
    registrar: [],
    "governance-structure": [],
    "grievance-redressal": [],
    "kmp-contacts": [],
    "credit-ratings": [],
    "annual-return": [],
    "business-responsibility": [],
    "secretarial-compliance": [],
    "memorandum-articles": [],
};

/* --------------------------------- Page -------------------------------- */

export default function Page() {
    const [activeTabId, setActiveTabId] = useState<TabId>("announcements");

    const activeTab = tabs.find((t) => t.id === activeTabId)!;
    const items = tabItems[activeTabId] || [];
    const groups = tabItems[activeTabId] || [];

    return (
        <div>
            <SiteHeader />

            <main className="bg-white">
                {/* HERO */}
                <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
                    <Image
                        src="/images/investors/na.png"
                        alt="Notices and Announcements"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-1">
                            Notices and Announcements
                        </h1>
                    </div>
                </section>

                {/* BREADCRUMB */}
                <div className="bg-[#EFEFEF] border-b border-[#d6d6d6]">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
                        <span className="text-black text-xs lato-600">
                            Investors Relations &gt; IR Announcements &amp; Updates
                        </span>
                    </div>
                </div>

                {/* TAB BAR */}

                <div className="bg-white ]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-20 lg:px-28 py-4">

                        {/* Mobile: horizontal scroll */}
                        <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 snap-x snap-mandatory">
                            {tabs.map((tab: any) => {
                                const isActive = tab.id === activeTabId;
                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveTabId(tab.id)}
                                        className={[
                                            "relative snap-start px-4 py-2 text-[13px] lato-400 whitespace-nowrap lato-400  bg-gray-200 hover:bg-[#f7f7f7]  transition",
                                            isActive ? "text-[#000000] lato-400 " : "text-[#000000] lato-400",
                                        ].join(" ")}
                                    >
                                        {tab.label}
                                        {isActive && (
                                            <span className="absolute left-0 right-0 -bottom-[3px] h-[3px] bg-[#117ABA]" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Desktop: grid (no scroll, 3 per row, wraps to multiple rows) */}
                        <div className="hidden lg:grid grid-cols-4 gap-2">
                            {tabs.map((tab) => {
                                const isActive = tab.id === activeTabId;
                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveTabId(tab.id)}
                                        className={[
                                            "relative px-4 py-2 text-[16px] lato-400  bg-gray-200 hover:bg-[#f7f7f7] transition text-left",
                                            isActive ? "text-[#000000] lato-400 " : "text-[#000000] lato-400",

                                        ].join(" ")}
                                    >
                                        {tab.label}
                                        {isActive && (
                                            <span className="absolute left-0 right-0 -bottom-[3px] h-[3px] bg-[#117ABA]" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                    </div>
                </div>



                {/* CONTENT: BLUE HEADER + LIST */}
                <section className="max-w-6xl mx-auto px-4 sm:px-12 md:px-20 lg:px-28 py-8">
                    {/* Blue Header */}
                    <div className="w-full bg-[#117ABA] py-3 px-6">
                        <h2 className="text-white text-sm sm:text-[16px] lato-400 text-center">
                            {activeTab.header}
                        </h2>
                    </div>

                    {/* List */}
                    <div className="mt-1">
                        {groups.length === 0 ? (
                            <div className="w-full bg-[#F7F7F7] py-6 px-6 text-center text-[13px] text-gray-500">
                                Documents will be listed here.
                            </div>
                        ) : (
                            groups.map((group) => (
                                <div
                                    key={group.date}
                                    className="bg-gray-200  mb-1"  // << gray block + spacing
                                >
                                    {/* Date row */}
                                    <div className="flex items-center gap-2 text-[#CF3438] font-semibold text-[15px] pt-4 px-4">
                                        <Calendar />
                                        <span>{group.date}</span>
                                    </div>

                                    {/* blue line under date */}
                                    <div className="mt-1 h-[3px] bg-[#117ABA] mx-4" />

                                    {/* items under this date */}
                                    <div className="px-4 pb-4">
                                        {group.items.map((doc, idx) => (
                                            <Link key={idx} href={doc.link} target="_blank">
                                                <div className="flex items-start justify-between border-b border-dashed border-[#CF3438] py-2 bg-white px-2 rounded">
                                                    {/* left: arrow + text */}
                                                    <div className="flex items-start gap-2 pr-4">
                                                        <span className="mt-[2px] text-[#555]">&raquo;</span>
                                                        <span className="text-[14px] text-black leading-snug">
                                                            {doc.text}
                                                        </span>
                                                    </div>

                                                    {/* PDF icon */}
                                                    <Image
                                                        src="/images/vector.png"
                                                        alt="PDF"
                                                        width={22}
                                                        height={22}
                                                        className="shrink-0"
                                                    />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>


                </section>
            </main>

            <SiteFooter />
        </div>
    );
}
