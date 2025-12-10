
"use client";

import React, { ReactNode, useEffect, useState } from "react";

type TabDef = {
  id: string;
  label: string;
  hero?: ReactNode;        // per-tab hero
  render: () => ReactNode; // main content
};

type Props = {
  tabs: TabDef[];
  defaultId: string;
};

export function BusinessTabs({ tabs, defaultId }: any) {
  // console.log("tavs+++",tabs)
  const safeTabs = Array.isArray(tabs) ? tabs : [];
  // console.log("safeTabs", safeTabs);

  // Initial tab: default if exists, otherwise first
  const [activeId, setActiveId] = useState<string>(() => {
    if (safeTabs.length === 0) return "";
    const hasDefault = safeTabs.some((t) => t.id === defaultId);
    // console.log("hasdefault",hasDefault)
    return hasDefault ? defaultId : safeTabs[0].id;
  });
useEffect(() => {
    if (!safeTabs.length) return;
    const hasDefault = safeTabs.some((t) => t.id === defaultId);
    setActiveId(hasDefault ? defaultId : safeTabs[0].id);
  }, [defaultId, safeTabs]);
  const activeTab = safeTabs.find((t) => t.id === activeId) ?? safeTabs[0];
// console.log("activetab",activeTab)
  // No tabs at all – simple fallback
  if (!activeTab) {
    if (typeof window !== "undefined") {
      console.warn("[BusinessTabs] No active tab resolved", {
        tabs: safeTabs,
        defaultId,
      });
    }
    return (
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500">
          No business tabs available.
        </div>
      </section>
    );
  }

  let content: ReactNode = null;
  try {
    content = activeTab.render();
  } catch (err) {
    console.error("[BusinessTabs] Error rendering tab", activeTab.id, err);
    content = (
      <div className="mt-6 text-sm text-red-600">
        Something went wrong while loading this section.
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-1 sm:px-0 pt-6 pb-4">
        {/* Tabs row */}
        <div className="border-b border-[#e0e0e0] flex gap-6 overflow-x-hidden overflow-y-hidden ">
          {safeTabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className={[
                  "relative px-1 pb-3 pt-1 flex-shrink-0 lato-400 text-[13px] md:text-[16px]",
                  isActive ? "text-[#117ABA] lato-700" : "text-[#4f4f4f]",
                ].join(" ")}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[#CF2328] rounded-md" />
                )}
              </button>
            );
          })}
        </div>

        {/* per-tab hero just below the tabs */}
        {activeTab.hero && <div className="mt-6">{activeTab.hero}</div>}

        {/* Content */}
        <div className="mt-6">{content}</div>
      </div>
    </section>
  );
}
