
// "use client"

// import React from 'react'
// import Image from "next/image";
// import { SiteHeader } from '@/components/site-header';
// import { SiteFooter } from '@/components/site-footer';
// import { FYQuarterAccordion } from './year';

// const page = () => {
//     return (
//         <div>
//             <SiteHeader />

//             <main className="bg-white">

//                 <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

//                     <Image
//                         src="/images/investors/ir.png"
//                         alt="Investors Relations"
//                         fill
//                         className="object-cover w-full h-full"
//                         priority
//                     />

//                     <div className="absolute inset-0 bg-black/40"></div>

//                     <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
//                         <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
//                            IR Presentations & Quarterly Earnings Reports
//                         </h1>


//                     </div>
//                 </section>
//                 <div className="bg-[#EFEFEF]">
//                     <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
//                         <span className="text-black text-xs lato-700 lato-600">
//                             Investors Relations &gt; IR Presentations & Quarterly Earnings Reports

//                         </span>
//                     </div>
//                 </div>
// <div className="bg-white max-w-7xl mx-auto px-4 sm:px-0 pt-4 pb-4 ">

//                 <FYQuarterAccordion />
//                 </div>
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
import Breadcrumb from "../breadcrumb";

/* ----------------------------- Types & data ----------------------------- */

type TabId = "presentations-updates" | "quarterly-earnings";


// quarterlyData.ts

export type QuarterId = "Q1" | "Q2" | "Q3" | "Q4";

export type QuarterlyFileType = "pdf" | "video";

export type QuarterlyFile = {
    /** Replace "#" with the actual URL */
    href: string;
    type: QuarterlyFileType;
};

export type QuarterlyCell = {
    /** Single file (Transcript, Webcast, Presentation, Release, Invite) */
    file?: QuarterlyFile;

    /** For Financial Results row: Consolidated + Standalone */
    cons?: QuarterlyFile;
    stand?: QuarterlyFile;

    /** For Earnings Date row */
    text?: string;
};

export type QuarterlyRowId =
    | "transcript"
    | "webcast"
    | "presentation"
    | "release"
    | "financial-results"
    | "invite"
    | "date";

export type QuarterlyRow = {
    id: QuarterlyRowId;
    /** Exact row label as in screenshots */
    label: string;
    cells: Record<QuarterId, QuarterlyCell>;
};

export type FinancialYearId =
    | "FY2025-2026"
    | "FY2024-2025"
    | "FY2023-2024"
    | "FY2022-2023"
    | "FY2021-2022"
    | "FY2020-2021"
    | "FY2019-2020"
    | "FY2018-2019"
    | "FY2017-2018";

export type FinancialYearQuarterly = {
    id: FinancialYearId;
    /** Button label text (must match screenshots) */
    label: string;
    rows: QuarterlyRow[];
};

type DocItem = {
    text: string;
    link: string;
};


export const quarterlyEarningsData: FinancialYearQuarterly[] = [
    /* ───────────────────── FY2025–2026 ───────────────────── */
    {
        id: "FY2025-2026",
        label: "FY2025–2026",
        rows: [
            {
                id: "transcript",
                label: "Earnings Conference Call - Transcript",
                cells: {
                    Q1: { file: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Q1FY26_Transcript.pdf", type: "pdf" } },
                    Q2: { file: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Q2FY26_Transcript.pdf", type: "pdf" } },
                    Q3: { file: { href: "#", type: "pdf" } }, // fill when available
                    Q4: { file: { href: "#", type: "pdf" } },
                },
            },
            {
                id: "webcast",
                label: "Earnings Conference Call - Webcast",
                cells: {
                    Q1: { file: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Q1FY26_Earnings_Call.mp3", type: "video" } },
                    Q2: { file: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Q2FY26_Earnings_Call.mp3", type: "video" } },
                    Q3: { file: { href: "#", type: "video" } },
                    Q4: { file: { href: "#", type: "video" } },
                },
            },
            {
                id: "presentation",
                label: "Earnings Presentation",
                cells: {
                    Q1: { file: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Q1FY26_Presentation.pdf", type: "pdf" } },
                    Q2: { file: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Q2FY26_Presentation.pdf", type: "pdf" } },
                    Q3: { file: { href: "#", type: "pdf" } },
                    Q4: { file: { href: "#", type: "pdf" } },
                },
            },
            {
                id: "release",
                label: "Earnings Release",
                cells: {
                    Q1: { file: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Q1FY26_Earnings_Release.pdf", type: "pdf" } },
                    Q2: { file: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Q2FY26_Earnings_Release.pdf", type: "pdf" } },
                    Q3: { file: { href: "#", type: "pdf" } },
                    Q4: { file: { href: "#", type: "pdf" } },
                },
            },
            {
                id: "financial-results",
                label: "Financial Results",
                cells: {
                    Q1: {
                        cons: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Cons_30JUN2025.pdf", type: "pdf" },
                        stand: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_STA_30062025.pdf", type: "pdf" },
                    },
                    Q2: {
                        cons: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_CONS_30SEP2025.pdf", type: "pdf" },
                        stand: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_STA_30092025.pdf", type: "pdf" },
                    },
                    Q3: {
                        cons: { href: "#", type: "pdf" },
                        stand: { href: "#", type: "pdf" },
                    },
                    Q4: {
                        cons: { href: "#", type: "pdf" },
                        stand: { href: "#", type: "pdf" },
                    },
                },
            },
            {
                id: "invite",
                label: "Earnings Conference Call - Invite",
                cells: {
                    Q1: { file: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Q1FY26_Invite.pdf", type: "pdf" } },
                    Q2: { file: { href: "https://www.uflexltd.com/pdf/QER/2025-26/UFlex_Q2FY26_Invite.pdf", type: "pdf" } },
                    Q3: { file: { href: "#", type: "pdf" } },
                    Q4: { file: { href: "#", type: "pdf" } },
                },
            },
            {
                id: "date",
                label: "Earnings Date",
                cells: {
                    Q1: { text: "August 13, 2025" },
                    Q2: { text: "November 13, 2025" },
                    Q3: { text: "" },
                    Q4: { text: "" },
                },
            },
        ],
    },

    /* ───────────────────── FY2024–2025 ───────────────────── */
    {
        id: "FY2024-2025",
        label: "FY2024–2025",
        rows: [
            {
                id: "transcript",
                label: "Earnings Conference Call - Transcript",
                cells: {
                    Q1: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q1FY25_Transcript.pdf", type: "pdf" } },
                    Q2: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q2FY25_Transcript.pdf", type: "pdf" } },
                    Q3: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q3FY25_Transcript.pdf", type: "pdf" } },
                    Q4: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q4FY25_Transcript.pdf", type: "pdf" } },
                },
            },
            {
                id: "webcast",
                label: "Earnings Conference Call - Webcast",
                cells: {
                    Q1: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q1FY25_Earnings_Call.mp3", type: "video" } },
                    Q2: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q2FY25_Earnings_Call.mp3", type: "video" } },
                    Q3: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q3FY25_Earnings_Call.mp3", type: "video" } },
                    Q4: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q4FY25_Earnings_Call.mp3", type: "video" } },
                },
            },
            {
                id: "presentation",
                label: "Earnings Presentation",
                cells: {
                    Q1: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q1FY25_Presentation.pdf", type: "pdf" } },
                    Q2: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q2FY25_Presentation.pdf", type: "pdf" } },
                    Q3: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q3FY25_Presentation.pdf", type: "pdf" } },
                    Q4: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q4FY25_Presentation.pdf", type: "pdf" } },
                },
            },
            {
                id: "release",
                label: "Earnings Release",
                cells: {
                    Q1: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q1FY25_Earnings_Release.pdf", type: "pdf" } },
                    Q2: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q2FY25_Earnings_Release.pdf", type: "pdf" } },
                    Q3: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q3FY25_Earnings_Release.pdf", type: "pdf" } },
                    Q4: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q4FY25_Earnings_Release.pdf", type: "pdf" } },
                },
            },
            {
                id: "financial-results",
                label: "Financial Results",
                cells: {
                    Q1: {
                        cons: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Cons_30JUN2024.pdf", type: "pdf" },
                        stand: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_STA_30062024.pdf", type: "pdf" },
                    },
                    Q2: {
                        cons: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_CONS_30SEP2024.pdf", type: "pdf" },
                        stand: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_STA_30092024.pdf", type: "pdf" },
                    },
                    Q3: {
                        cons: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_CONS_31DEC2024.pdf", type: "pdf" },
                        stand: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_STA_31122024.pdf", type: "pdf" },
                    },
                    Q4: {
                        cons: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_CONS_31MAR2025.pdf", type: "pdf" },
                        stand: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_STA_31MAR2025.pdf", type: "pdf" },
                    },
                },
            },
            {
                id: "invite",
                label: "Earnings Conference Call - Invite",
                cells: {
                    Q1: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q1FY25_Invite.pdf", type: "pdf" } },
                    Q2: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q2FY25_Invite.pdf", type: "pdf" } },
                    Q3: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q3FY25_Invite.pdf", type: "pdf" } },
                    Q4: { file: { href: "https://www.uflexltd.com/pdf/QER/2024-25/UFlex_Q4FY25_Invite.pdf", type: "pdf" } },
                },
            },
            {
                id: "date",
                label: "Earnings Date",
                cells: {
                    Q1: { text: "August 12, 2024" },
                    Q2: { text: "November 13, 2024" },
                    Q3: { text: "February 14, 2025" },
                    Q4: { text: "May 17, 2025" },
                },
            },
        ],
    },

    /* ───────────────────── FY2023–2024 ───────────────────── */
    // {
    //     id: "FY2023-2024",
    //     label: "FY2023–2024",
    //     rows: [
    //         {
    //             id: "transcript",
    //             label: "Earnings Conference Call - Transcript",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "webcast",
    //             label: "Earnings Conference Call - Webcast",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "video" } },
    //                 Q2: { file: { href: "#", type: "video" } },
    //                 Q3: { file: { href: "#", type: "video" } },
    //                 Q4: { file: { href: "#", type: "video" } },
    //             },
    //         },
    //         {
    //             id: "presentation",
    //             label: "Earnings Presentation",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "release",
    //             label: "Earnings Release",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "financial-results",
    //             label: "Financial Results",
    //             cells: {
    //                 Q1: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q2: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q3: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q4: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //             },
    //         },
    //         {
    //             id: "invite",
    //             label: "Earnings Conference Call - Invite",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "date",
    //             label: "Earnings Date",
    //             cells: {
    //                 Q1: { text: "August 14, 2023" },
    //                 Q2: { text: "November 14, 2023" },
    //                 Q3: { text: "February 10, 2024" },
    //                 Q4: { text: "May 28, 2024" },
    //             },
    //         },
    //     ],
    // },

    /* ───────────────────── FY2022–2023 ───────────────────── */
    // {
    //     id: "FY2022-2023",
    //     label: "FY2022–2023",
    //     rows: [
    //         {
    //             id: "transcript",
    //             label: "Earnings Conference Call - Transcript",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "webcast",
    //             label: "Earnings Conference Call - Webcast",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "video" } },
    //                 Q2: { file: { href: "#", type: "video" } },
    //                 Q3: { file: { href: "#", type: "video" } },
    //                 Q4: { file: { href: "#", type: "video" } },
    //             },
    //         },
    //         {
    //             id: "presentation",
    //             label: "Earnings Presentation",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "release",
    //             label: "Earnings Release",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "financial-results",
    //             label: "Financial Results",
    //             cells: {
    //                 Q1: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q2: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q3: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q4: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //             },
    //         },
    //         {
    //             id: "invite",
    //             label: "Earnings Conference Call - Invite",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "date",
    //             label: "Earnings Date",
    //             cells: {
    //                 Q1: { text: "August 10, 2022" },
    //                 Q2: { text: "November 14, 2022" },
    //                 Q3: { text: "February 14, 2023" },
    //                 Q4: { text: "May 30, 2023" },
    //             },
    //         },
    //     ],
    // },

    /* ───────────────────── FY2021–2022 ───────────────────── */
    // {
    //     id: "FY2021-2022",
    //     label: "FY2021–2022",
    //     rows: [
    //         {
    //             id: "transcript",
    //             label: "Earnings Conference Call - Transcript",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "webcast",
    //             label: "Earnings Conference Call - Webcast",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "video" } },
    //                 Q2: { file: { href: "#", type: "video" } },
    //                 Q3: { file: { href: "#", type: "video" } },
    //                 Q4: { file: { href: "#", type: "video" } },
    //             },
    //         },
    //         {
    //             id: "presentation",
    //             label: "Earnings Presentation",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "release",
    //             label: "Earnings Release",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "financial-results",
    //             label: "Financial Results",
    //             cells: {
    //                 Q1: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q2: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q3: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q4: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //             },
    //         },
    //         {
    //             id: "invite",
    //             label: "Earnings Conference Call - Invite",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "date",
    //             label: "Earnings Date",
    //             cells: {
    //                 Q1: { text: "August 14, 2021" },
    //                 Q2: { text: "November 03, 2021" },
    //                 Q3: { text: "February 11, 2022" },
    //                 Q4: { text: "May 28, 2022" },
    //             },
    //         },
    //     ],
    // },

    /* ───────────────────── FY2020–2021 ───────────────────── */
    // {
    //     id: "FY2020-2021",
    //     label: "FY2020–2021",
    //     rows: [
    //         {
    //             id: "transcript",
    //             label: "Earnings Conference Call - Transcript",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "webcast",
    //             label: "Earnings Conference Call - Webcast",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "video" } },
    //                 Q2: { file: { href: "#", type: "video" } },
    //                 Q3: { file: { href: "#", type: "video" } },
    //                 Q4: { file: { href: "#", type: "video" } },
    //             },
    //         },
    //         // No Presentation / Release rows in screenshot for 2020-21
    //         {
    //             id: "financial-results",
    //             label: "Financial Results",
    //             cells: {
    //                 Q1: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q2: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q3: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q4: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //             },
    //         },
    //         {
    //             id: "invite",
    //             label: "Earnings Conference Call - Invite",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "date",
    //             label: "Earnings Date",
    //             cells: {
    //                 Q1: { text: "August 18, 2020" },
    //                 Q2: { text: "November 11, 2020" },
    //                 Q3: { text: "February 11, 2021" },
    //                 Q4: { text: "June 29, 2021" },
    //             },
    //         },
    //     ],
    // },

    /* ───────────────────── FY2019–2020 ───────────────────── */
    // {
    //     id: "FY2019-2020",
    //     label: "FY2019–2020",
    //     rows: [
    //         {
    //             id: "transcript",
    //             label: "Earnings Conference Call - Transcript",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "webcast",
    //             label: "Earnings Conference Call - Webcast",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "video" } },
    //                 Q2: { file: { href: "#", type: "video" } },
    //                 Q3: { file: { href: "#", type: "video" } },
    //                 Q4: { file: { href: "#", type: "video" } },
    //             },
    //         },
    //         {
    //             id: "financial-results",
    //             label: "Financial Results",
    //             cells: {
    //                 Q1: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q2: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q3: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //                 Q4: {
    //                     cons: { href: "#", type: "pdf" },
    //                     stand: { href: "#", type: "pdf" },
    //                 },
    //             },
    //         },
    //         {
    //             id: "invite",
    //             label: "Earnings Conference Call - Invite",
    //             cells: {
    //                 Q1: { file: { href: "#", type: "pdf" } },
    //                 Q2: { file: { href: "#", type: "pdf" } },
    //                 Q3: { file: { href: "#", type: "pdf" } },
    //                 Q4: { file: { href: "#", type: "pdf" } },
    //             },
    //         },
    //         {
    //             id: "date",
    //             label: "Earnings Date",
    //             cells: {
    //                 Q1: { text: "August 13, 2019" },
    //                 Q2: { text: "November 13, 2019" },
    //                 Q3: { text: "February 13, 2020" },
    //                 Q4: { text: "June 30, 2020" },
    //             },
    //         },
    //     ],
    // },

    /* ───────────────────── FY2018–2019 / FY2017–2018 (buttons only for now) ───────────────────── */
    // {
    //     id: "FY2018-2019",
    //     label: "FY2018–2019",
    //     rows: [], // fill later if you add historical tables
    // },
    // {
    //     id: "FY2017-2018",
    //     label: "FY2017–2018",
    //     rows: [],
    // },
];


const investorPresentations: DocItem[] = [
    {
        text: "Investor Presentation - February 17, 2026",
        link: "https://www.uflexltd.com/pdf/IR/Investor_Presentation_17Feb_2026.pdf",
    },
    {
        text: "Investor Presentation - December 08, 2025",
        link: "https://www.uflexltd.com/pdf/IR/Investor_Presentation_08Dec_2025.pdf",
    },
    {
        text: "Investor Presentation – September 23, 2025",
        link: "https://www.uflexltd.com/pdf/IR/Investor_Presentation_23Sep_2025.pdf",
    },
    {
        text: "Investor Presentation – June 17, 2025",
        link: "https://www.uflexltd.com/pdf/IR/Investor_Presentation_23Jun_2025.pdf",
    },
    {
        text: "Investor Presentation – March 24, 2025",
        link: "https://www.uflexltd.com/pdf/IR/Investor_Presentation_24Mar_2025.pdf",
    },
    {
        text: "Investor Presentation – March 03, 2025",
        link: "https://www.uflexltd.com/pdf/IR/Investor_Presentation_03Mar_2025.pdf",
    },
    {
        text: "Investor Presentation – December 2024",
        link: "https://www.uflexltd.com/pdf/IR/Investor_Presentation_Dec_2024.pdf",
    },
    {
        text: "Investor Presentation – September 2024",
        link: "https://www.uflexltd.com/pdf/IR/Investor_Presentation_Sep_2024.pdf",
    },
    {
        text: "Investor Presentation – April 2022",
        link: "https://www.uflexltd.com/pdf/Investor_Presentation_April_2022.pdf",
    },
];

const investorUpdates: DocItem[] = [
    {
        text:
            "Setting Up of a New Packaging Films Manufacturing Line at Dharwad, Karnataka",
        link: "https://www.uflexltd.com/pdf/IR/IU/UFlex_SU_NPFML_Dharwad_Karnataka_NOV2025.pdf",
    },
    {
        text:
            "Intimation of Schedule of Analysts/Institutional Investor Meet under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
        link: "https://www.uflexltd.com/pdf/IR/IU/SIGNED_UFLEX_NSEBSE_AMD_REG30_22SEP25.pdf",
    },
    {
        text:
            "Intimation of participation in Arihant Bharat Connect Conference: Rising Stars – September 2025",
        link: "https://www.uflexltd.com/pdf/IR/IU/SIGNED_UFLEX_NSEBSE_REG30_AM_18SEP25.pdf",
    },
    {
        text:
            'Intimation of participation in "Centrum - Orion IV Virtual Investor Conference"',
        link: "https://www.uflexltd.com/pdf/IR/IU/SIGNED_UFLEX_NSEBSE_AM_21AUG25.pdf",
    },
    {
        text:
            "Intimation of Schedule of Analysts/Institutional Investor Meet under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
        link: "https://www.uflexltd.com/pdf/IR/IU/SIGNED_UFLEX_NSEBSE_IM_13JUN25.pdf",
    },
    {
        text:
            "Flex Americas, S.A. de C.V. Commences Commercial Operations of New 18,000 MTPA CPP Films Line in Mexico",
        link: "https://www.uflexltd.com/pdf/IR/IU/SIGNED_UFLEX_NSEBSE_CCOM_27MAR25.pdf",
    },
    {
        text: "Intimation of Participation in Group Virtual Meeting",
        link: "https://www.uflexltd.com/pdf/IR/IU/SIGNED_UFLEX_NSEBSE_GVM_25MAR25.pdf",
    },
    {
        text:
            "Intimation of Participation in Arihant Bharat Connect Conference: Rising Stars – March 2025",
        link: "https://www.uflexltd.com/pdf/IR/IU/SIGNED_UFLEX_NSEBSE_CONF_20MAR25.pdf",
    },
    {
        text:
            "Intimation of Participation in Dolat Capital Conference 2024 On September 18, 2024",
        link: "https://www.uflexltd.com/pdf/announcements/2024/SIGNED_UFLEX_NSEBSE_CONF_18SEP24.pdf",
    },
    {
        text:
            "Intimation of Schedule of Analysts/Institutional Investor Meet under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
        link: "https://www.uflexltd.com/pdf/announcements/2024/SIGNED_UFLEX_NSEBSE_AM_12SEP24.pdf",
    },
];

/* ----------------------------- Page component ----------------------------- */

const Page = () => {
    const [activeTab, setActiveTab] = useState<TabId>("presentations-updates");

    const isPresentations = activeTab === "presentations-updates";
    const isQuarterly = activeTab === "quarterly-earnings";

    const [activeFY, setActiveFY] = useState<FinancialYearId>(
        quarterlyEarningsData[0].id
    );

    const fy = quarterlyEarningsData.find((f) => f.id === activeFY)!;

    const QUARTERS: { id: QuarterId; label: string }[] = [
        { id: "Q1", label: "Quarter 1" },
        { id: "Q2", label: "Quarter 2" },
        { id: "Q3", label: "Quarter 3" },
        { id: "Q4", label: "Quarter 4" },
    ];

   const renderFileIcon = (file?: QuarterlyFile) => {
  if (!file || !file.href) return null;

  const icon =
    file.type === "pdf" ? (
      <Image
        src="/images/pdf.png"
        alt="PDF"
        width={22}
        height={22}
        className="mx-auto"
      />
    ) : (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-black text-white text-[10px]">
        ▶
      </span>
    );

  return (
    <Link href={file.href} target="_blank">
      {icon}
    </Link>
  );
};



    return (
        <div>
            <SiteHeader />

            <main className="bg-white">
                {/* HERO */}
                <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
                    <Image
                        src="/images/investors/ir.png"
                        alt="Investors Relations"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="max-w-7xl mx-auto absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
                            IR Presentations &amp; Quarterly Earnings Reports
                        </h1>
                    </div>
                </section>

                {/* BREADCRUMB */}
                {/* <div className="bg-[#EFEFEF]">
                    <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
                        <span className="text-black text-xs lato-600">
                            Investors Relations &gt; IR Presentations &amp; Quarterly Earnings
                            Reports
                        </span>
                    </div>
                </div> */}
                <Breadcrumb
                          items={[
                            { label: "Investors Relations", href: "/investors" },
                            { label: "IR Presentation & Quarterly Earnings" },
                          ]}
                        />

                {/* TABS + CONTENT */}
                <section className="max-w-6xl mx-auto px-4 sm:px-12 md:px-20 lg:px-28 pt-6 pb-10">
                    {/* TAB WRAPPER */}
                    <div className="flex w-fit border border-[#d6d6d6] rounded-sm overflow-hidden mb-4">

                        {/* TAB 1 */}
                        <button
                            type="button"
                            onClick={() => setActiveTab("presentations-updates")}
                            className={[
                                "px-6 py-2 text-sm lato-400 border-r border-[#d6d6d6] relative",
                                isPresentations ? "bg-white text-black" : "bg-[#F5F5F5] text-[#555]",
                            ].join(" ")}
                        >
                            Investor Presentations & Updates

                            {/* BLUE UNDERLINE */}
                            {isPresentations && (
                                <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#117ABA]" />
                            )}
                        </button>

                        {/* TAB 2 */}
                        <button
                            type="button"
                            onClick={() => setActiveTab("quarterly-earnings")}
                            className={[
                                "px-6 py-2 text-sm lato-400 relative",
                                isQuarterly ? "bg-white text-black" : "bg-[#F5F5F5] text-[#555]",
                            ].join(" ")}
                        >
                            Quarterly Earnings Reports

                            {/* BLUE UNDERLINE */}
                            {isQuarterly && (
                                <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#117ABA]" />
                            )}
                        </button>
                    </div>


                    {/* MAIN BLUE HEADER (changes per tab) */}
                    <div className="w-full bg-[#117ABA] py-3 px-4">
                        <h2 className="text-white text-sm sm:text-base lato-700 text-center">
                            {isPresentations
                                ? "Investor Presentations & Updates"
                                : "Quarterly Earnings Reports"}
                        </h2>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-1 bg-[#F7F7F7]">
                        {isPresentations && (
                            <div>
                                {/* Investor Presentations sub-header */}
                                <div className="py-3">
                                    <p className="text-center text-[13px] sm:text-sm text-[#245CA5] lato-400">
                                        Investor Presentations
                                    </p>
                                </div>

                                {/* Investor Presentations list */}
                                {investorPresentations.map((item, idx) => (
                                    <Link key={idx} href={item.link} target="_blank">
                                        <div className="flex items-center justify-between px-6 py-3 border-t border-white">
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

                                {/* Investor Updates sub-header */}
                                <div className="py-4 border-t border-white">
                                    <p className="text-center text-[13px] sm:text-sm text-[#245CA5] lato-400">
                                        Investor Updates
                                    </p>
                                </div>

                                {/* Investor Updates list */}
                                {investorUpdates.map((item, idx) => (
                                    <Link key={idx} href={item.link} target="_blank">
                                        <div className="flex items-center justify-between px-6 py-3 border-t border-white">
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
                        )}

                        {isQuarterly && (
                            <div className="bg-white border border-[#d6d6d6]">
                                {/* FY buttons row */}
                                <div className="flex flex-wrap gap-2 px-4 py-3 border-b border-[#d6d6d6]">
                                    {quarterlyEarningsData.map((year) => {
                                        const active = year.id === activeFY;
                                        return (
                                            <button
                                                key={year.id}
                                                type="button"
                                                onClick={() => setActiveFY(year.id)}
                                                className={[
                                                    "px-3 py-1 text-xs sm:text-sm lato-400 rounded-sm border",
                                                    active
                                                        ? "bg-[#117ABA] border-[#117ABA] text-white"
                                                        : "bg-white border-[#117ABA] text-[#117ABA]",
                                                ].join(" ")}
                                            >
                                                {year.label}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* If no rows (older FYs) */}
                                {fy.rows.length === 0 ? (
                                    <div className="px-4 py-8 text-center text-[13px] text-gray-500">
                                        Quarterly information for this financial year will be updated in due
                                        course.
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-[13px] lato-400">
                                            <thead>
                                                <tr className="bg-white border-b border-[#d6d6d6]">
                                                    <th className="w-[220px] text-left px-4 py-3"></th>
                                                    {QUARTERS.map((q) => (
                                                        <th key={q.id} className="px-4 py-3 text-center text-[#000000]">
                                                            {q.label}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {fy.rows.map((row, rowIndex) => {
                                                    const stripe =
                                                        rowIndex % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white";

                                                    return (
                                                        <tr key={row.id} className={stripe}>
                                                            {/* Row label */}
                                                            <td className="text-[#000000] px-4 py-3 border-t border-[#E3E3E3] align-middle">
                                                                {row.label}
                                                            </td>

                                                            {/* Cells for Q1–Q4 */}
                                                            {QUARTERS.map((q) => {
                                                                const cell = row.cells[q.id];

                                                                return (
                                                                    <td
                                                                        key={q.id}
                                                                        className="px-4 py-3 border-t border-[#E3E3E3] text-center align-middle"
                                                                    >
                                                                        {/* Financial Results special layout */}
                                                                        {row.id === "financial-results" ? (
                                                                            cell?.cons || cell?.stand ? (
                                                                                <div className="inline-flex gap-4">
                                                                                    {cell.cons && (
                                                                                        <div className="bg-[#EDEDED] text-black px-3 py-1 text-center">
                                                                                            <div className="text-[11px] mb-1 text-black">
                                                                                                Cons.
                                                                                            </div>
                                                                                            {renderFileIcon(cell.cons)}
                                                                                        </div>
                                                                                    )}
                                                                                    {cell.stand && (
                                                                                        <div className="bg-[#EDEDED] px-3 py-1 text-center text-black">
                                                                                            <div className="text-[11px] mb-1">
                                                                                                Stand.
                                                                                            </div>
                                                                                            {renderFileIcon(cell.stand)}
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            ) : null
                                                                        ) : row.id === "date" ? (
                                                                            // Earnings Date row
                                                                            <span className="text-[#000000] text-[12px]">
                                                                                {cell?.text || ""}
                                                                            </span>
                                                                        ) : (
                                                                            // All simple file rows
                                                                            renderFileIcon(cell?.file)
                                                                        )}
                                                                    </td>
                                                                );
                                                            })}
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
};

export default Page;

