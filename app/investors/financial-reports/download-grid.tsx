"use client";

import { FileText } from "lucide-react";

type DownloadItem = {
  label: string;
  file: string;
};

type Section = {
  title: string;
  items: DownloadItem[];
};

export default function DownloadGrid({ sections }: { sections: Section[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-4">
          {/* Section title */}
          <h3 className="text-black lato-700 text-sm sm:text-base">
            {section.title}
          </h3>

          {/* Items */}
          <div className="space-y-4">
            {section.items.map((item, j) => (
              <a
                key={j}
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-[#FF6400] px-4 py-4  hover:bg-orange-50 transition"
              >
                {/* Orange Icon */}
                <FileText
                  size={32}
                  strokeWidth={2}
                  className="text-[#FF6400]"
                />

                <span className="text-black lato-700 text-sm sm:text-base">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
