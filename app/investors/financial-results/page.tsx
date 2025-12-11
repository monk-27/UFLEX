"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Breadcrumb from "../breadcrumb";

/* ----------------------------- Types ----------------------------- */

type FrTabId =
  | "consolidated"
  | "standalone"
  | "subsidiaries"
  | "advertisement";

type FrTab = {
  id: FrTabId;
  label: string;
};

type DocItem = {
  text: string;
  link: string;
};

export type SubsidiaryItem = {
  title: string;
  link: string;
};

export type AdFYId =
  | "FY2025-2026"
  | "FY2024-2025"
  | "FY2023-2024"
  | "FY2022-2023"
  | "FY2021-2022"
  | "FY2020-2021"
  | "FY2019-2020";

export type AdDocument = {
  label: string; // "Hindi", "English"
  href: string;  // PDF URL
};

export type AdQuarterCard = {
  id: string;
  quarterLabel: string; // "QUARTER ENDED - 30th September, 2025"
  docs: AdDocument[];
};

export type AdvertisementFY = {
  id: AdFYId;
  label: string; // "FY2025–2026"
  cards: AdQuarterCard[];
};

/* -------------------------- Static data -------------------------- */

/* Quarterly Results – Consolidated */
const quarterlyConsolidated: DocItem[] = [
  {
    text: "Financial results for the Quarter ended 30.09.2025",
    link: "https://www.uflexltd.com/pdf/financials/Consolidated/UFLEX_NSEBSE_CONS_RESULTS_30SEP2025.pdf",
  },
  {
    text: "Financial results for the Quarter ended 30.06.2025",
    link: "https://www.uflexltd.com/pdf/financials/Consolidated/UFLEX_NSEBSE_CONS_RESULTS_30JUN2025.pdf",
  },
  {
    text: "Financial results for the Quarter and Year ended 31.03.2025 (Audited)",
    link: "https://www.uflexltd.com/pdf/financials/Consolidated/UFLEX_NSEBSE_CONS_RESULTS_31MAR2025.pdf",
  },
  {
    text: "Financial results for the Quarter ended 31.12.2024",
    link: "https://www.uflexltd.com/pdf/financials/Consolidated/UFLEX_NSEBSE_CONS_RESULTS_31DEC2024.pdf",
  },
  {
    text: "Financial results for the Quarter ended 30.09.2024",
    link: "https://www.uflexltd.com/pdf/financials/Consolidated/UFLEX_NSEBSE_CONS_RESULTS_30SEP2024.pdf",
  },
  {
    text: "Financial results for the Quarter ended 30.06.2024",
    link: "https://www.uflexltd.com/pdf/financials/Consolidated/UFLEX_NSEBSE_CONS_RESULTS_30JUN2023.pdf",
  },
  {
    text: "Financial results for the Quarter and Year ended 31.03.2024 (Audited)",
    link: "https://www.uflexltd.com/pdf/financials/Consolidated/UFLEX_NSEBSE_CONS_AUDITED_RESULTS_31MAR2023.pdf",
  },
];

/* Quarterly Results – Standalone */
const quarterlyStandalone: DocItem[] = [
  {
    text: "Financial results for the Quarter ended 30.09.2025",
    link: "https://www.uflexltd.com/pdf/financials/Standalone/UFLEX_NSEBSE_QTRLY_RES_STA_30092025.pdf",
  },
  {
    text: "Financial results for the Quarter ended 30.06.2025",
    link: "https://www.uflexltd.com/pdf/financials/Standalone/UFLEX_NSEBSE_QTRLY_RES_STA_30062025.pdf",
  },
  {
    text: "Financial results for the Quarter and Year ended 31.03.2025 (Audited)",
    link: "https://www.uflexltd.com/pdf/financials/Standalone/UFLEX_NSEBSE_QTRLY_RES_STA_31032025.pdf",
  },
  {
    text: "Financial results for the Quarter ended 31.12.2024",
    link: "https://www.uflexltd.com/pdf/financials/Standalone/UFLEX_NSEBSE_QTRLY_RES_STA_31122024.pdf",
  },
  {
    text: "Financial results for the Quarter ended 30.09.2024",
    link: "https://www.uflexltd.com/pdf/financials/Standalone/UFLEX_NSEBSE_QTRLY_RES_STA_30092024.pdf",
  },
  {
    text: "Financial results for the Quarter ended 30.06.2024",
    link: "https://www.uflexltd.com/pdf/financials/Standalone/UFLEX_NSEBSE_QTRLY_RES_STA_30062024.pdf",
  },
  {
    text: "Financial results for the Quarter and Year ended 31.03.2024 (Audited)",
    link: "https://www.uflexltd.com/pdf/financials/Standalone/UFLEX_NSEBSE_STA_AUDITED_RESULTS_31MAR2024.pdf",
  },
];

/* Subsidiaries */
export const subsidiariesData: SubsidiaryItem[] = [
  {
    title: "UFlex Packaging Inc., USA",
    link: "https://www.uflexltd.com/",
  },
  {
    title: "Flex Films (USA) Inc., Kentucky, USA",
    link: "https://www.uflexltd.com/",
  },
  {
    title: "UFlex Europe Limited, UK",
    link: "https://www.uflexltd.com/",
  },
  {
    title: "Flex Middle East FZE, UAE",
    link: "https://www.uflexltd.com/",
  },
  {
    title: "Flex P. Films (Egypt) S.A.E., Egypt",
    link: "https://www.uflexltd.com/",
  },
  {
    title: "Flex Films Europa Sp.zo.o., Poland",
    link: "https://www.uflexltd.com/",
  },
];

/* Advertisements – FY-wise cards */
export const advertisementFYData: AdvertisementFY[] = [
  {
    id: "FY2025-2026",
    label: "FY2025–2026",
    cards: [
      {
        id: "2025-09",
        quarterLabel: "QUARTER ENDED - 30th September, 2025",
        docs: [
          {
            label: "Hindi",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2025-26/ADV-FR-30092025-JS.pdf",
          },
          {
            label: "English",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2025-26/ADV-FR-30092025-FE.pdf",
          },
        ],
      },
      {
        id: "2025-06",
        quarterLabel: "QUARTER ENDED - 30th June, 2025",
        docs: [
          {
            label: "Hindi",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2025-26/ADV-FR-30062025-JS.pdf",
          },
          {
            label: "English",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2025-26/ADV-FR-30062025-FE.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "FY2024-2025",
    label: "FY2024–2025",
    cards: [
      {
        id: "2025-03",
        quarterLabel: "QUARTER ENDED - 31st March, 2025",
        docs: [
          {
            label: "Hindi",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2024-25/ADV-FR-31032025-JS.pdf",
          },
          {
            label: "English",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2024-25/ADV-FR-31032025-FE.pdf",
          },
        ],
      },
      {
        id: "2024-12",
        quarterLabel: "QUARTER ENDED - 31st December, 2024",
        docs: [
          {
            label: "Hindi",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2024-25/ADV-FR-31122024-JS.pdf",
          },
          {
            label: "English",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2024-25/ADV-FR-31122024-FE.pdf",
          },
        ],
      },
      {
        id: "2024-09",
        quarterLabel: "QUARTER ENDED - 30th September, 2024",
        docs: [
          {
            label: "Hindi",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2024-25/ADV-FR-30092024-JS.pdf",
          },
          {
            label: "English",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2024-25/ADV-FR-30092024-FE.pdf",
          },
        ],
      },
      {
        id: "2024-06",
        quarterLabel: "QUARTER ENDED - 30th June, 2024",
        docs: [
          {
            label: "Hindi",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2024-25/ADV-FR-30062024-JS.pdf",
          },
          {
            label: "English",
            href: "https://www.uflexltd.com/pdf/financials/advertisements/2024-25/ADV-FR-30062024-FE.pdf",
          },
        ],
      },
    ],
  },
];

/* Tabs for this page */
const tabs: FrTab[] = [
  { id: "consolidated", label: "Quarterly Results - Consolidated" },
  { id: "standalone", label: "Quarterly Results – Standalone" },
  { id: "subsidiaries", label: "Subsidiary Companies" },
  { id: "advertisement", label: "Advertisements" },
];

/* -------------------------- Helper UI pieces -------------------------- */

const renderRow = (item: DocItem, idx: number) => (
  <Link key={idx} href={item.link} target="_blank" className="group block">
    <div
      className={[
        "w-full flex items-center justify-between px-6 py-2",
        "bg-[#F8F8F8] group-hover:bg-[#EDEDED]",
        "border-b border-white",
      ].join(" ")}
    >
      <span className="text-[14px] text-[#000000] lato-400">{item.text}</span>
      <Image
        src="/images/pdf.png"
        alt="PDF"
        width={20}
        height={20}
        className="shrink-0"
      />
    </div>
  </Link>
);

const renderSubsidiaryRow = (item: SubsidiaryItem, idx: number) => (
  <Link key={idx} href={item.link} target="_blank" className="group block">
    <div
      className={[
        "w-full flex items-center justify-between px-6 py-4",
        "bg-[#F8F8F8] group-hover:bg-[#EDEDED]",
        "border-b border-white",
      ].join(" ")}
    >
      <span className="text-[14px] text-[#000000] lato-400">{item.title}</span>
      <Image
        src="/images/pdf.png"
        alt="PDF"
        width={20}
        height={20}
        className="shrink-0"
      />
    </div>
  </Link>
);

/* Card for each quarter in Advertisements */
const QuarterCard: React.FC<{ card: AdvertisementFY["cards"][number] }> = ({
  card,
}) => {
  return (
    <div className="border border-[#E3E3E3] bg-[#FDFDFD]">
      {/* Grey quarter header */}
      <div className="bg-[#E6E6E6] px-4 py-2">
        <h4 className="text-[#000000] text-[13px] sm:text-sm lato-700">
          {card.quarterLabel}
        </h4>
      </div>

      {/* Card body */}
      <div className="px-4 py-3 bg-white">
        <div className="text-[#000000] text-[13px] sm:text-sm lato-700 mb-2">
          Financial Results
        </div>
        <div className="h-[2px] bg-gray-300 mb-1" />

        <div className="mt-1">
          {card.docs.map((doc, idx) => (
            <Link key={idx} href={doc.href} target="_blank">
              <div className="flex items-center justify-between border-t border-dashed border-[#D95E52] first:border-t-0 py-2">
                <span className="text-[13px] text-[#000000] lato-400">
                  {doc.label}
                </span>
                <Image
                  src="/images/pdf.png"
                  alt="PDF"
                  width={20}
                  height={20}
                  className="shrink-0"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Advertisements section with FY pills */
const AdvertisementsSection: React.FC = () => {
  const [activeFY, setActiveFY] = useState<AdFYId>(advertisementFYData[0].id);
  const fy = advertisementFYData.find((f) => f.id === activeFY)!;

  return (
    <div className="mt-4">
      {/* FY pills */}
      <div className="flex flex-wrap gap-3 mb-5">
        {advertisementFYData.map((year) => {
          const active = year.id === activeFY;
          return (
            <button
              key={year.id}
              type="button"
              onClick={() => setActiveFY(year.id)}
              className={[
                "px-4 py-2 rounded-full border text-xs sm:text-sm md:text-base lato-600 transition-all",
                active
                  ? "bg-[#117ABA] text-white border-[#117ABA]"
                  : "bg-white text-[#000000] border-[#117ABA]",
              ].join(" ")}
            >
              {year.label}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      {fy.cards.length === 0 ? (
        <div className="border border-[#E3E3E3] bg-white px-4 py-8 text-center text-[13px] text-gray-500">
          Financial results advertisements for this financial year will be
          uploaded in due course.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {fy.cards.map((card) => (
            <QuarterCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------------------------- Page component ---------------------------- */

const Page = () => {
  const [activeTab, setActiveTab] = useState<FrTabId>("consolidated");

  const isConsolidated = activeTab === "consolidated";
  const isStandalone = activeTab === "standalone";
  const isSubsidiary = activeTab === "subsidiaries";
  const isAdvertisement = activeTab === "advertisement";

  return (
    <div>
      <SiteHeader />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
          <Image
            src="/images/investors/fr.png"
            alt="Investors Relations"
            fill
            className="object-cover w-full h-full"
            priority
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
            <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
              Financial Results
            </h1>
          </div>
        </section>

        {/* BREADCRUMB */}
        {/* <div className="bg-[#EFEFEF]">
          <div className="max-w-7xl mx-auto pl-2 h-12 flex items-center">
            <span className="text-black text-xs lato-700">
              Investors Relations &gt; Financial Results
            </span>
          </div>
        </div> */}
        <Breadcrumb
          items={[
            { label: "Investors Relations", href: "/investors" },
            { label: "Financial Results" },
          ]}
        />

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-4 sm:px-12 md:px-20 lg:px-28 pt-6 pb-10">
          {/* TOP TAB STRIP */}
          <div className="flex w-fit border border-[#d6d6d6] rounded-sm overflow-hidden mb-4">
            {tabs.map((tab) => {
              const active = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "relative px-6 py-2 text-sm lato-400 border-r border-[#d6d6d6] last:border-r-0",
                    active ? "bg-white text-black" : "bg-[#F5F5F5] text-[#555]",
                  ].join(" ")}
                >
                  {tab.label}
                  {active && (
                    <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#117ABA]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CONSOLIDATED TAB */}
          {isConsolidated && (
            <>
              <div className="w-full bg-[#117ABA] py-3 px-4">
                <h2 className="text-white text-sm sm:text-base lato-700 text-center">
                  Quarterly Results - Consolidated
                </h2>
              </div>

              <div className="bg-white">
                {quarterlyConsolidated.map((item, idx) => renderRow(item, idx))}
              </div>
            </>
          )}

          {/* STANDALONE TAB */}
          {isStandalone && (
            <>
              <div className="w-full bg-[#117ABA] py-3 px-4">
                <h2 className="text-white text-sm sm:text-base lato-700 text-center">
                  Quarterly Results – Standalone
                </h2>
              </div>

              <div className="bg-white">
                {quarterlyStandalone.map((item, idx) => renderRow(item, idx))}
              </div>
            </>
          )}

          {/* SUBSIDIARY COMPANIES TAB */}
          {isSubsidiary && (
            <>
              <div className="w-full bg-[#117ABA] py-3 px-4">
                <h2 className="text-white text-sm sm:text-base lato-700 text-center sm:text-left">
                  Subsidiary Companies
                </h2>
              </div>

              <div className="bg-white">
                {subsidiariesData.map((item, idx) =>
                  renderSubsidiaryRow(item, idx)
                )}
              </div>
            </>
          )}

          {/* ADVERTISEMENTS TAB */}
          {isAdvertisement && (
            <>
              <div className="w-full bg-[#117ABA] py-3 px-4">
                <h2 className="text-white text-sm sm:text-base lato-700 text-center">
                  Advertisements – Financial Results
                </h2>
              </div>
              <AdvertisementsSection />
            </>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Page;
