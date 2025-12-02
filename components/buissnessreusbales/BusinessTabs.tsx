// // src/components/buissnessreusbales/BusinessTabs.tsx
// "use client";

// import { ReactNode, useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// type TabDef = {
//   id: string;
//   label: string;
//   hero?: ReactNode;          // 👈 per-tab hero
//   render: () => ReactNode;   // main content
// };

// type Props = {
//   tabs: TabDef[];
//   defaultId: string;
// };

// export function BusinessTabs({ tabs, defaultId }: Props) {
//   const initialId = useMemo(() => {
//     if (!tabs || tabs.length === 0) return "";
//     return tabs.some((t) => t.id === defaultId) ? defaultId : tabs[0].id;
//   }, [tabs, defaultId]);

//   const [activeId, setActiveId] = useState(initialId);

//   const activeTab = useMemo(
//     () => tabs.find((t) => t.id === activeId) ?? tabs[0],
//     [tabs, activeId]
//   );

//   // If still no tab, render nothing instead of crashing
//   if (!activeTab) return null;
//   return (
//     <section className="bg-white">
//       <div className=" section section-y pt-6 pb-4">
//         {/* Tabs row */}
//         <div className=" border-b border-[#e0e0e0] flex gap-6 overflow-x-auto">
//           {tabs.map((tab) => {
//             const isActive = tab.id === activeId;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveId(tab.id)}
//                 className="relative px-1 pb-3 pt-1 flex-shrink-0 lato-400 text-[13px] md:text-[14px]"
//               >
//                 {/* <span
//                   className={
//                     isActive
//                       ? "text-[#117ABA] font-semibold"
//                       : "text-[#4f4f4f]"
//                   }
//                 >
//                   {tab.label}
//                 </span> */}
//                 <motion.span
//                   animate={{
//                     color: isActive ? "#117ABA" : "#4f4f4f",
//                     scale: isActive ? 1.05 : 1,
//                   }}
//                   transition={{ duration: 0.25 }}
//                   className={isActive ? "font-semibold" : ""}
//                 >
//                   {tab.label}
//                 </motion.span>


//                 {/* red underline for active */}
//                 {/* {isActive && (
//                   <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[#CF2328]" />
//                 )} */}
//                 {isActive && (
//                   <motion.span
//                     layoutId="underline"
//                     className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[#CF2328]"
//                     transition={{ duration: 0.25, ease: "easeOut" }}
//                   />
//                 )}

//               </button>
//             );
//           })}

//         </div>

//         {/* 👇 per-tab hero just below the tabs */}
//         {activeTab.hero && (
//           <div className="mt-6">
//             {activeTab.hero}
//           </div>
//         )}

//         {/* Animated content below hero */}
//         <div className="mt-6">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab.id}
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -8 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//             >
//               {activeTab.render()}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/components/buissnessreusbales/BusinessTabs.tsx
// src/components/buissnessreusbales/BusinessTabs.tsx
"use client";

import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TabErrorBoundary } from "./errorboundary";

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

export function BusinessTabs({ tabs, defaultId }: Props) {
  // Always work with a safe array
  const safeTabs = Array.isArray(tabs) ? tabs : [];

  // Initial activeId – only computed once
  const [activeId, setActiveId] = useState<string>(() => {
    if (safeTabs.length === 0) return "";
    const hasDefault = safeTabs.some((t) => t.id === defaultId);
    return hasDefault ? defaultId : safeTabs[0].id;
  });

  const activeTab = safeTabs.find((t) => t.id === activeId) ?? safeTabs[0];

  // Extra guard – no tabs at all
  if (!activeTab) {
    console.warn("[BusinessTabs] No tabs available", { tabs: safeTabs, defaultId });
    return (
      <section className="bg-white">
        <div className="section section-y pt-6 pb-4 text-sm text-gray-500">
          No business tabs available.
        </div>
      </section>
    );
  }

  // Debug logging – remove later if you want
  if (typeof window !== "undefined") {
    console.debug("[BusinessTabs] activeId", activeId, "activeTab", activeTab.id);
  }

  return (
    <section className="bg-white">
      <div className="section section-y pt-6 pb-4">
        {/* Tabs row */}
        <div className="border-b border-[#e0e0e0] flex gap-6 overflow-x-auto">
          {safeTabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className="relative px-1 pb-3 pt-1 flex-shrink-0 lato-400 text-[13px] md:text-[14px]"
              >
                <motion.span
                  animate={{
                    color: isActive ? "#117ABA" : "#4f4f4f",
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className={isActive ? "font-semibold" : ""}
                >
                  {tab.label}
                </motion.span>

                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[#CF2328]"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Wrap hero + content with ErrorBoundary */}
        <TabErrorBoundary>
          {/* per-tab hero just below the tabs */}
          {activeTab.hero && <div className="mt-6">{activeTab.hero}</div>}

          {/* Animated content below hero */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {activeTab.render()}
              </motion.div>
            </AnimatePresence>
          </div>
        </TabErrorBoundary>
      </div>
    </section>
  );
}
