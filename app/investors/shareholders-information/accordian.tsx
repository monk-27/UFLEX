// src/components/investors/InvestorAccordion.tsx
"use client";

import { useState, useRef } from "react";
import { Plus } from "lucide-react";

type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

export function InvestorAccordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full border-t border-[#117ABA]">
      {items.map((item) => {
        const isOpen = item.id === openId;
        const contentRef = useRef<HTMLDivElement | null>(null);

        return (
          <div key={item.id} className="border-b border-[#117ABA]">
            {/* Row */}
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between py-3 sm:py-3.5 pr-4"
              aria-expanded={isOpen}
            >
              <span className="lato-700 text-[12px] sm:text-[13px] text-[#001B3F] text-left">
                {item.title}
              </span>

              <Plus className="h-4 w-4 text-[#CF5928]" strokeWidth={2} />
            </button>

            {/* Animated content */}
            <div
              ref={contentRef}
              className={`
                overflow-hidden pr-10
                transition-[max-height,opacity] duration-300 ease-in-out
                text-[12px] sm:text-[13px] text-[#444444] lato-400
              `}
              style={{
                maxHeight: isOpen
                  ? `${contentRef.current?.scrollHeight ?? 0}px`
                  : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="pb-4">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
