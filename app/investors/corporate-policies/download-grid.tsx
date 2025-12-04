"use client";

import { FileText } from "lucide-react";

type DownloadItem = {
  label: string;
  file: string;
};

export default function DownloadCorporateGrid({
  items,
}: {
  items: DownloadItem[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.file}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 border border-[#FF6400] px-4 py-4  hover:bg-orange-50 transition"
        >
          {/* Icon */}
          <FileText size={32} strokeWidth={2} className="text-[#FF6400]" />

          {/* Label */}
          <span className="text-black lato-700 text-sm sm:text-base">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}
