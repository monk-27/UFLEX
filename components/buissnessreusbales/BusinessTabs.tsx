// src/components/buissnessreusbales/BusinessTabs.tsx
"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TabDef = {
  id: string;
  label: string;
  hero?: ReactNode;          // 👈 per-tab hero
  render: () => ReactNode;   // main content
};

type Props = {
  tabs: TabDef[];
  defaultId: string;
};

export function BusinessTabs({ tabs, defaultId }: Props) {
  const [activeId, setActiveId] = useState(defaultId);
  const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section className="bg-white">
      <div className=" section section-y pt-6 pb-4">
        {/* Tabs row */}
        <div className=" border-b border-[#e0e0e0] flex gap-6 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className="relative px-1 pb-3 pt-1 flex-shrink-0 lato-400 text-[13px] md:text-[14px]"
              >
                {/* <span
                  className={
                    isActive
                      ? "text-[#117ABA] font-semibold"
                      : "text-[#4f4f4f]"
                  }
                >
                  {tab.label}
                </span> */}
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


                {/* red underline for active */}
                {/* {isActive && (
                  <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[#CF2328]" />
                )} */}
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

        {/* 👇 per-tab hero just below the tabs */}
        {activeTab.hero && (
          <div className="mt-6">
            {activeTab.hero}
          </div>
        )}

        {/* Animated content below hero */}
        <div className="mt-6">
          {/* <AnimatePresence mode="wait"> */}
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {activeTab.render()}
            </motion.div>
          {/* </AnimatePresence> */}
        </div>
      </div>
    </section>
  );
}
// src/components/buissnessreusbales/BusinessTabs.tsx
// "use client";

// import { ReactNode, useState } from "react";
// import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

// type TabDef = {
//   id: string;
//   label: string;
//   hero?: ReactNode;
//   render: () => ReactNode;
// };

// type Props = {
//   tabs: TabDef[];
//   defaultId: string;
// };

// export function BusinessTabs({ tabs, defaultId }: Props) {
//   const [activeId, setActiveId] = useState(defaultId);
//   const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];

//   return (
//     <section className="bg-white">
//       <div className="section section-y pt-6 pb-4">
//         {/* Tabs row */}
//         <LayoutGroup id="business-tabs">
//           <div className="border-b border-[#e0e0e0] flex gap-6 overflow-x-auto">
//             {tabs.map((tab) => {
//               const isActive = tab.id === activeId;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveId(tab.id)}
//                   className="relative px-1 pb-3 pt-1 flex-shrink-0 lato-400 text-[13px] md:text-[14px]"
//                 >
//                   <motion.span
//                     animate={{
//                       color: isActive ? "#117ABA" : "#4f4f4f",
//                       scale: isActive ? 1.05 : 1,
//                     }}
//                     transition={{ duration: 0.25 }}
//                     className={isActive ? "font-semibold" : ""}
//                   >
//                     {tab.label}
//                   </motion.span>

//                   {isActive && (
//                     <motion.span
//                       layoutId="underline"
//                       className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[#CF2328]"
//                       transition={{ duration: 0.25, ease: "easeOut" }}
//                     />
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </LayoutGroup>

//         {/* hero */}
//         {activeTab.hero && <div className="mt-6">{activeTab.hero}</div>}

//         {/* Animated content */}
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
