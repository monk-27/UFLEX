// src/components/investors/AnnualReportsSection.tsx
"use client";

import { FileText } from "lucide-react";

type ReportItem = {
  label: string;
  file: string;
};

type Props = {
  reports: ReportItem[][];
};

export function AnnualReportsSection({ reports }: Props) {
  // flatten nested arrays for grid layout while keeping your data structure input
  const flatReports = reports.flat();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl lato-700 text-black mb-8">
          Annual Reports
        </h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {flatReports.map((item, idx) => (
            <a
              key={idx}
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-[#FF6400] px-5 py-4  hover:bg-orange-50 transition group"
            >
              {/* Icon */}
              <FileText
                size={32}
                strokeWidth={2}
                className="text-[#FF6400] flex-shrink-0"
              />

              {/* Label */}
              <span className="text-black lato-700 text-sm sm:text-base">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
