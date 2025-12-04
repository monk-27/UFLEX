// src/components/investors/FYQuarterAccordion.tsx
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type QuarterItem = {
  id: string;
  title: string;
  content: string;
};

type YearData = {
  year: string; // e.g. "FY 26"
  quarters: QuarterItem[];
};

// Dummy data – replace content with real links/text later
const YEAR_DATA: YearData[] = [
  {
    year: "FY 26",
    quarters: [
      {
        id: "fy26-q1",
        title: "Quarter 1",
        content:
          "Lorem ipsum dolor sit amet, FY 26 Q1 details go here.",
      },
      {
        id: "fy26-q2",
        title: "Quarter 2",
        content:
          "Lorem ipsum dolor sit amet, FY 26 Q2 details go here.",
      },
    ],
  },
  {
    year: "FY 25",
    quarters: [
      {
        id: "fy25-q1",
        title: "Quarter 1",
        content:
          "Lorem ipsum dolor sit amet, FY 25 Q1 details go here.",
      },
      {
        id: "fy25-q2",
        title: "Quarter 2",
        content:
          "Lorem ipsum dolor sit amet, FY 25 Q2 details go here.",
      },
    ],
  },
  {
    year: "FY 24",
    quarters: [
      {
        id: "fy24-q1",
        title: "Quarter 1",
        content:
          "Lorem ipsum dolor sit amet, FY 24 Q1 details go here.",
      },
      {
        id: "fy24-q2",
        title: "Quarter 2",
        content:
          "Lorem ipsum dolor sit amet, FY 24 Q2 details go here.",
      },
    ],
  },
  {
    year: "FY 23",
    quarters: [
      {
        id: "fy23-q1",
        title: "Quarter 1",
        content:
          "Lorem ipsum dolor sit amet, FY 23 Q1 details go here.",
      },
      {
        id: "fy23-q2",
        title: "Quarter 2",
        content:
          "Lorem ipsum dolor sit amet, FY 23 Q2 details go here.",
      },
    ],
  },
];

export function FYQuarterAccordion() {
  const [activeYear, setActiveYear] = useState<string>(YEAR_DATA[0].year);
  const [openQuarterId, setOpenQuarterId] = useState<string | null>(null);

  const current = YEAR_DATA.find((y) => y.year === activeYear)!;

  const toggleQuarter = (id: string) => {
    setOpenQuarterId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl">
      {/* FY buttons */}
      <div className="flex flex-wrap gap-3 mb-3">
        {YEAR_DATA.map((y) => {
          const isActive = y.year === activeYear;
          return (
            <button
              key={y.year}
              type="button"
              onClick={() => {
                setActiveYear(y.year);
                setOpenQuarterId(null);
              }}
              className={`px-3 py-1 text-xs lato-700 border rounded-sm ${
                isActive
                  ? "bg-[#117ABA] text-white border-[#117ABA]"
                  : "border-[#117ABA] text-[#001B3F] bg-white"
              }`}
            >
              {y.year}
            </button>
          );
        })}
      </div>

      {/* Blue underline */}
      <div className="h-[2px] w-40 bg-[#117ABA] mb-6" />

      {/* Quarters accordion */}
      <div className="w-full border-t border-[#117ABA]">
        {current.quarters.map((q) => {
          const isOpen = q.id === openQuarterId;

          return (
            <div key={q.id} className="border-b border-[#117ABA]">
              <button
                type="button"
                onClick={() => toggleQuarter(q.id)}
                className="flex w-full items-center justify-between py-3 pr-4"
              >
                <span className="lato-700 text-[14px] text-[#001B3F]">
                  {q.title}
                </span>
                <Plus className="h-4 w-4 text-[#CF5928]" strokeWidth={2} />
              </button>

              {isOpen && (
                <div className="pb-4 pr-10 text-[12px] text-[#444444] lato-400">
                  {q.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
