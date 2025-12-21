"use client";

import { useState } from "react";
import OfferingsGrid, { OfferingsCardItem } from "./business-offerings";


/* ---------------- Types ---------------- */

type TabId = "offerings" | "featured" | "new";

export type TabConfig = {
  id: TabId;
  label: string;
  items: OfferingsCardItem[];
};

/* ---------------- Component ---------------- */

type Props = {
  tabs: TabConfig[];
};

export default function OfferingsTabs({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>(tabs[0].id);

  const activeTabData =
    tabs.find((tab) => tab.id === activeTab)?.items ?? [];

  return (
    <section>
      {/* Tabs */}
      <div className="max-w-7xl flex justify-start pt-12 pb-4">
        <div
          className="mb-10 flex gap-3 overflow-x-auto whitespace-nowrap px-1 md:justify-center">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`lato-400 shrink-0 px-6 py-2 text-[21px] ${isActive
                  ? "bg-[#E6E6E6] text-black border-b-2 border-[#117ABA]"
                  : "bg-[#E6E6E6] text-black"
                  }`}
              >
                {tab.label}
            </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <OfferingsGrid items={activeTabData} />
    </section>
  );
}
