// src/components/investors/ImpactStats.tsx
"use client";

import { Briefcase, Leaf, Handshake, Globe2 } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "20+",
    label: "Active Projects",
    icon: Briefcase,
  },
  {
    id: 2,
    value: "5M+",
    label: "Tons CO₂ Reduced",
    icon: Leaf,
  },
  {
    id: 3,
    value: "80+",
    label: "Global Partners",
    icon: Handshake,
  },
  {
    id: 4,
    value: "15+",
    label: "Countries",
    icon: Globe2,
  },
];

export function ImpactStats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* Heading + subheading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[30xl]  lato-700 text-[#111827] mb-3">
            Driving Global Impact
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-[18px] text-[#4B5563] leading-relaxed lato-400">
            Our investments create measurable change in sustainability and
            innovation, building a cleaner future for generations to come.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((item, index) => {
            const Icon = item.icon;
            const isPrimary = index === 0;

            return (
              <div
                key={item.id}
                className={
                  "group flex flex-col justify-between rounded-2xl min-h-[150px] sm:min-h-[160px] px-6 py-6 shadow-sm transition " +
                //   (isPrimary
                //     ? "bg-[#117ABA] text-white"
                //     : 
                    "bg-white text-[#117ABA] border border-[#D1D5DB] hover:bg-[#117ABA] hover:text-white hover:border-[#117ABA]"
                // )
                }
              >
                {/* top: icon */}
                <div className="mb-4">
                  <Icon
                    className={
                      "h-8 w-8 transition " +
                    //   (isPrimary
                    //     ? "text-white"
                    //     : 
                        "text-[#117ABA] group-hover:text-white"
                    // )
                    }
                    strokeWidth={2}
                  />
                </div>

                {/* middle: number */}
                <div className="mb-1">
                  <div
                    className={
                      "text-2xl sm:text-[24px] lato-700 transition " +
                    //   (isPrimary
                    //     ? "text-white"
                    //     : 
                        "text-[#117ABA] group-hover:text-white"
                    // )
                    }
                  >
                    {item.value}
                  </div>
                </div>

                {/* bottom: label */}
                <div>
                  <p
                    className={
                      "text-sm sm:text-[16px] lato-400 transition " +
                    //   (isPrimary
                    //     ? "text-white/90"
                    //     : 
                        "text-[#117ABA] group-hover:text-white/90"
                    // )
                    }
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
