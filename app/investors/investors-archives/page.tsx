
// "use client"

// import React from 'react'
// import Image from "next/image";
// import { SiteHeader } from '@/components/site-header';
// import { SiteFooter } from '@/components/site-footer';
// export type ComplianceReportItem = {
//   title: string;   // "Report for the Quarter Ended 30.09.2015"
//   link: string;    // PDF link
// };

// export type ComplianceReportsData = {
//   heading: string;              // "Quarterly Corporate Governance Compliance Report"
//   reports: ComplianceReportItem[];
// };


// const page = () => {
//     return (
//         <div>
//             <SiteHeader />

//             <main className="bg-white">

//                 <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

//                     <Image
//                         src="/images/investors/archives.png"
//                         alt="Investors Relations"
//                         fill
//                         className="object-cover w-full h-full"
//                         priority
//                     />

//                     <div className="absolute inset-0 bg-black/40"></div>

//                     <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
//                         <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
//                             Archive
//                         </h1>


//                     </div>
//                 </section>
//                 <div className="bg-[#EFEFEF]">
//                     <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
//                         <span className="text-black text-xs lato-700 lato-600">
//                             Investors Relations &gt; Archive
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

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LinkIcon } from "lucide-react";
import Breadcrumb from "../breadcrumb";

// archiveData.ts (or same file)

export type ComplianceReportItem = {
    title: string;
    link: string;
};

export type ComplianceReportsData = {
    heading: string;
    reports: ComplianceReportItem[];
};


export type ArchiveItem = {
    title: string;
    link: string;
};
export type ArchiveSection = {
    heading: string;
    reports: ArchiveItem[];
};
export const complianceReports: ComplianceReportsData = {
    heading: "Quarterly Corporate Governance Compliance Report",
    reports: [
        { title: "Report for the Quarter Ended 30.09.2015", link: "https://www.uflexltd.com/pdf/CR/UFLEX_BSE_C49_30092015.pdf" },
        { title: "Report for the Quarter Ended 30.06.2015", link: "https://www.uflexltd.com/pdf/CR/UFLEX_BSE_C49_30062015.pdf" },
        { title: "Report for the Quarter Ended 31.03.2015", link: "https://www.uflexltd.com/pdf/CR/UFLEX_BSE_C49_31032015.pdf" },
        { title: "Report for the Quarter Ended 31.12.2014", link: "https://www.uflexltd.com/pdf/CR/UFLEX_BSE_C49_31122014.pdf" },
        { title: "Report for the Quarter Ended 30.09.2014", link: "https://www.uflexltd.com/pdf/CR/UFLEX_BSE_C49_30092014.pdf" },
        { title: "Report for the Quarter Ended 30.06.2014", link: "https://www.uflexltd.com/pdf/CR/UFLEX_BSE_C49_30062014.pdf" },
        { title: "Report for the Quarter Ended 31.03.2014", link: "https://www.uflexltd.com/pdf/CR/UFLEX_BSE_C49_31032014.pdf" },
        { title: "Report for the Quarter Ended 31.12.2013", link: "#" },
        { title: "Report for the Quarter Ended 30.09.2013", link: "#" },
        { title: "Report for the Quarter Ended 30.06.2013", link: "#" },
        { title: "Report for the Quarter Ended 31.03.2013", link: "#" },
        { title: "Report for the Quarter Ended 31.12.2012", link: "#" },
        { title: "Report for the Quarter Ended 30.09.2012", link: "#" },
        { title: "Report for the Quarter Ended 30.06.2012", link: "#" },
        { title: "Report for the Quarter Ended 31.03.2012", link: "#" },
        { title: "Report for the Quarter Ended 31.12.2011", link: "#" },
        { title: "Report for the Quarter Ended 30.09.2011", link: "#" },
        { title: "Report for the Quarter Ended 30.06.2011", link: "#" },
        { title: "Report for the Quarter Ended 31.03.2011", link: "#" },
        { title: "Report for the Quarter Ended 31.12.2010", link: "#" },
        { title: "Report for the Quarter Ended 30.09.2010", link: "#" },
        { title: "Report for the Quarter Ended 30.06.2010", link: "#" },
    ],
};

export const companyRelease: ArchiveSection = {
    heading: "Company release",
    reports: [
        { title: "Communiqué August 2022", link: "https://www.uflexltd.com/pdf/Company-Release/Communique-August-2022.pdf" },
        { title: "Communiqué May 2022", link: "https://www.uflexltd.com/pdf/Company-Release/Communique-May-2022.pdf" },
        { title: "Communiqué February 2022", link: "https://www.uflexltd.com/pdf/Company-Release/Communique-February-2022.pdf" },
        { title: "Communiqué November 2021", link: "https://www.uflexltd.com/pdf/Company-Release/Communique-November-2021.pdf" },
        { title: "Communiqué August 2021", link: "https://www.uflexltd.com/pdf/Company-Release/Communique-August-2021.pdf" },
        { title: "Communiqué June 2021", link: "https://www.uflexltd.com/pdf/Company-Release/Communique-June-2021.pdf" },
        { title: "Communiqué February 2021", link: "#" },
        { title: "Communiqué November 2020", link: "#" },
        { title: "Communiqué August 2020", link: "#" },
        { title: "Communiqué June 2020", link: "#" },
        { title: "Communiqué February 2020", link: "#" },
        { title: "Communiqué November 2019", link: "#" },
        { title: "Communiqué August 2019", link: "#" },
        { title: "Communiqué May 2019", link: "#" },
        { title: "Communiqué February 2019", link: "#" },
        { title: "Communiqué November 2018", link: "#" },
        { title: "Communiqué August 2018", link: "#" },
        { title: "Communiqué May 2018", link: "#" },
        { title: "Communiqué February 2018", link: "#" },
        { title: "Communiqué November 2017", link: "#" },
        { title: "Communiqué August 2017", link: "#" },
        { title: "Communiqué May 2017", link: "#" },
        { title: "Communiqué February 2017", link: "#" },
        { title: "Communiqué August 2016", link: "#" },
        { title: "Communiqué May 2016", link: "#" },
        { title: "Communiqué February 2016", link: "#" },
        { title: "Communiqué November 2015", link: "#" },
        { title: "Communiqué August 2015", link: "#" },
    ],
};
const stockPriceLinks = {
    bseWatch: "#",
    bseMoreInfo: "https://www.bseindia.com/stock-share-price/uflex-ltd/uflex/500148/",
    nseWatch: "#",
    nseMoreInfo: "https://www.nseindia.com/get-quote/equity/UFLEX/UFLEX-Limited",
    nseArchive: "https://www.nseindia.com/products/content/equities/equities/eq_security.htm",
    bseArchive: "https://www.bseindia.com/stock-share-price/uflex-ltd/uflex/500148/",
};
type ArchiveTabId = "compliance" | "company-release" | "stock-price";

const tabs: { id: ArchiveTabId; label: string }[] = [
    { id: "compliance", label: "Compliance Reports" },
    { id: "company-release", label: "Company Release" },
    { id: "stock-price", label: "Stock Price Data" },
];

const ArchivePage = () => {
    const [activeTab, setActiveTab] = useState<ArchiveTabId>("compliance");

    const isCompliance = activeTab === "compliance";
    const isCompany = activeTab === "company-release"
    const isStock = activeTab === "stock-price";

    const renderRow = (item: ArchiveItem, idx: number) => (
        <Link key={idx} href={item.link} target="_blank">
            <div className="flex items-center justify-between px-6 border-t-[2px] border-white py-3 bg-[#F7F7F7]">
                <span className="text-[14px] text-[#000000] lato-400 leading-snug">
                    {item.title}
                </span>
                <Image src="/images/pdf.png" alt="PDF" width={22} height={22} />
            </div>
        </Link>
    );

    return (
        <div>
            <SiteHeader />

            <main className="bg-white">
                {/* HERO */}
                <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
                    <Image
                        src="/images/investors/archives.png"
                        alt="Investors Relations"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
                            Archive
                        </h1>
                    </div>
                </section>

                {/* BREADCRUMB */}
                {/* <div className="bg-[#EFEFEF]">
                    <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
                        <span className="text-black text-xs lato-600">
                            Investors Relations &gt; Archive
                        </span>
                    </div>
                </div> */}
                <Breadcrumb
                          items={[
                            { label: "Investors Relations", href: "/investors" },
                            { label: "Archive" },
                          ]}
                        />

                {/* CONTENT */}
                <section className="max-w-6xl mx-auto px-4 sm:px-12 md:px-20 lg:px-28 pt-6 pb-10">
                    {/* Top tab bar */}
                    <div className="flex w-fit border border-[#d6d6d6] rounded-sm overflow-hidden mb-4">
                        {tabs.map((tab) => {
                            const active = tab.id === activeTab;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={[
                                        "px-6 py-2 text-sm lato-400 relative",
                                        tab.id !== "company-release" && "border-r border-[#d6d6d6]",
                                        active ? "bg-white text-black" : "bg-[#F5F5F5] text-[#555]",
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                >
                                    {tab.label}
                                    {active && (
                                        <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#117ABA]" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Main blue header */}
                    <div className="w-full bg-[#117ABA] py-3 px-4">
                        <h2 className="text-white text-sm sm:text-base lato-700 text-center">
                            {activeTab === "compliance"
                                ? "Compliance Reports"
                                : activeTab === "stock-price"
                                    ? "Stock Price Data"
                                    : "Company Release"}
                        </h2>
                    </div>

                    {/* Tab content */}
                    <div className="mt-1 bg-white">
                        {isCompliance && (
                            <>
                                <div className="py-3">
                                    <p className="text-center text-[13px] sm:text-sm text-[#117ABA] lato-400">
                                        {complianceReports.heading}
                                    </p>
                                </div>
                                {complianceReports.reports.map(renderRow)}
                            </>
                        )}

                        {isCompany && (
                            <>
                                <div className="py-3">
                                    <p className="text-center text-[13px] sm:text-sm text-[#117ABA] lato-400">
                                        {companyRelease.heading}
                                    </p>
                                </div>
                                {companyRelease.reports.map(renderRow)}
                            </>
                        )}

                       

                        {isStock && (
                            <div
                                className="relative mt-[-10px] bg-cover bg-center text-white"
                                style={{
                                    backgroundImage:
                                        "url('/images/hall/stock.png')", // put your bg here
                                }}
                            >
                                {/* dark overlay for readability */}
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="relative px-6 py-8 sm:px-10 sm:py-10">
                                    {/* Top two red cards */}
                                    <div className="block sm:hidden">

                                        <div className=" grid gap-6 md:grid-cols-2">
                                            {/* BSE card */}
                                            <div className="bg-[#CF3438] px-6 py-5">
                                                <p className="text-sm sm:text-base">
                                                    <span className="text-[#FFE14A] lato-600">Live </span>
                                                    <a
                                                        href={stockPriceLinks.bseWatch}
                                                        target="_blank"
                                                        className="underline lato-600"
                                                    >
                                                        BSE Stock Watch Page
                                                    </a>{" "}
                                                    <span>( BSE )</span>
                                                </p>


                                            </div>
                                            <div className="mt-6 text-[12px] leading-relaxed">
                                                <p className="lato-600">Disclaimer:</p>
                                                <p className="mt-1">
                                                    This stock watch page has been provided directly by Bombay
                                                    Stock Exchange (BSE).
                                                </p>
                                                <p className="mt-1">
                                                    For latest information on the stock please{" "}
                                                    <a
                                                        href={stockPriceLinks.bseMoreInfo}
                                                        target="_blank"
                                                        className="underline"
                                                    >
                                                        Click Here
                                                    </a>
                                                </p>
                                            </div>

                                            {/* NSE card */}
                                            <div className="bg-[#CF3438] px-6 py-5">
                                                <p className="text-sm sm:text-base">
                                                    <span className="text-[#FFE14A] lato-600">Live </span>
                                                    <a
                                                        href={stockPriceLinks.nseWatch}
                                                        target="_blank"
                                                        className="underline lato-600"
                                                    >
                                                        NSE Stock Watch Page
                                                    </a>{" "}
                                                    <span>( NSE )</span>
                                                </p>


                                            </div>
                                            <div className="mt-6 text-[12px] leading-relaxed">
                                                <p className="lato-600">Disclaimer:</p>
                                                <p className="mt-1">
                                                    This stock watch page has been provided directly by National
                                                    Stock Exchange (NSE).
                                                </p>
                                                <p className="mt-1">
                                                    For latest information on the stock please{" "}
                                                    <a
                                                        href={stockPriceLinks.nseMoreInfo}
                                                        target="_blank"
                                                        className="underline"
                                                    >
                                                        Click Here
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="hidden sm:block">

                                        <div className=" grid gap-2 md:grid-cols-2">
                                            {/* BSE card */}
                                            <div className="bg-[#CF3438] px-6 py-3">
                                                <p className="text-sm sm:text-base">
                                                    <span className="text-[#FFE14A] lato-600">Live </span>
                                                    <a
                                                        href={stockPriceLinks.bseWatch}
                                                        target="_blank"
                                                        className="underline lato-600"
                                                    >
                                                        BSE Stock Watch Page
                                                    </a>{" "}
                                                    <span>( BSE )</span>
                                                </p>


                                            </div>
                                            

                                            {/* NSE card */}
                                            <div className="bg-[#CF3438] px-6 py-3">
                                                <p className="text-sm sm:text-base">
                                                    <span className="text-[#FFE14A] lato-600">Live </span>
                                                    <a
                                                        href={stockPriceLinks.nseWatch}
                                                        target="_blank"
                                                        className="underline lato-600"
                                                    >
                                                        NSE Stock Watch Page
                                                    </a>{" "}
                                                    <span>( NSE )</span>
                                                </p>


                                            </div>
                                            <div className="mt-0 text-[12px] leading-relaxed">
                                                <p className="lato-600 text-[10px]">Disclaimer:</p>
                                                <p className="mt-1 text-[10px]">
                                                    This stock watch page has been provided directly by Bombay
                                                    Stock Exchange (BSE).
                                                </p>
                                                <p className="mt-1 text-[10px]">
                                                    For latest information on the stock please{" "}
                                                    <a
                                                        href={stockPriceLinks.bseMoreInfo}
                                                        target="_blank"
                                                        className="underline"
                                                    >
                                                        Click Here
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="mt-0 text-[12px] leading-relaxed">
                                                <p className="lato-600 text-[10px]">Disclaimer:</p>
                                                <p className="mt-1 text-[10px]">
                                                    This stock watch page has been provided directly by National
                                                    Stock Exchange (NSE).
                                                </p>
                                                <p className="mt-1 text-[10px]">
                                                    For latest information on the stock please{" "}
                                                    <a
                                                        href={stockPriceLinks.nseMoreInfo}
                                                        target="_blank"
                                                        className="underline"
                                                    >
                                                        Click Here
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Stock Archive Data section */}
                                    <div className="mt-10 mb-2 bg-[#2A6BB0]">
                                        <div className="py-3 px-4 text-center text-sm sm:text-base lato-600">
                                            Stock Archive Data
                                        </div>
                                    </div>

                                    <div className="bg-white text-black">
                                        {/* NSE archive row */}
                                        <a
                                            href={stockPriceLinks.nseArchive}
                                            target="_blank"
                                            className="flex items-center justify-between px-6 py-4 border-b border-[#E3E3E3] hover:bg-[#F7F7F7] transition"
                                        >
                                            <span className="text-[14px] lato-400">
                                                NSE Stock Archive Data
                                            </span>
                                            <LinkIcon className="w-5 h-5 text-[#245CA5]" />
                                        </a>

                                        {/* BSE archive row */}
                                        <a
                                            href={stockPriceLinks.bseArchive}
                                            target="_blank"
                                            className="flex items-center justify-between px-6 py-4 hover:bg-[#F7F7F7] transition"
                                        >
                                            <span className="text-[14px] lato-400">
                                                BSE Stock Archive Data
                                            </span>
                                            <LinkIcon className="w-5 h-5 text-[#245CA5]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
};

export default ArchivePage;

