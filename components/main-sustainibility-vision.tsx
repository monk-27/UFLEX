

"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

/* ============================= Data ============================= */

type SustainabilityItem = {
  id: number;
  title: string;
  summary: string;
  // imageLink: string;
};

const DATA: SustainabilityItem[] = [
  {
    id: 1,
    title: "Project Plastic Fix",
    summary:
      "UFlex’s global sustainability initiative, ‘Project Plastic Fix’, is designed to develop solutions that keep plastic in the economy and out of the environment.",

  },
  {
    id: 2,
    title: "Restoring Biodiversity",
    summary:
      "Beyond our internal operations, we have actively engaged with local communities and stakeholders to implement collaborative water management initiatives.",

  },
  {
    id: 3,
    title: "Waste Water Management",
    summary:
      "To ensure efficiency with water consumption and water withdrawal, the company has implemented Effluent Treatment Plants (ETPs) and Sewage Treatment Plants (STPs) in manufacturing plants.",

  },
  {
    id: 4,
    title: "Waste Management",
    summary:
      "The company generated a total of 31,172 MT of waste in FY24, which was 1,112 MT lesser than the total waste generated in FY23.",

  },
  {
    id: 5,
    title: "Solar Power Initiatives",
    summary:
      "UFlex is constantly innovating to ensure that the company maintains energy-efficient operations. As a testament to this, UFlex has entered into a strategic commitment with a third-party to supply solar power to the company’s Dharwad plant.",


  },
  {
    id: 6,
    title: "Communities",
    summary:
      "CSR programs that enable livelihoods, education, and health outcomes.",

  },
]

/* ============================= Chevron ============================= */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className={`ml-2 h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ============================= Dropdown (measured height + CSS transition) ============================= */

function DropdownList({ items }: { items: SustainabilityItem[] }) {
  const [openId, setOpenId] = useState<number | null>(null);

  // refs for each content block so we can measure (for pixel-perfect height)
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [measuredHeights, setMeasuredHeights] = useState<Record<number, number>>({});

  // measure all items on mount and whenever window resizes (helps first-open)
  useLayoutEffect(() => {
    const measureAll = () => {
      const map: Record<number, number> = {};
      for (const it of items) {
        const el = contentRefs.current[it.id];
        if (el) map[it.id] = el.scrollHeight;
        else map[it.id] = 0;
      }
      setMeasuredHeights(map);
    };

    measureAll();
    window.addEventListener("resize", measureAll);
    return () => window.removeEventListener("resize", measureAll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // also observe changes to each open content so we adjust if inner content changes (images, fonts)
  useEffect(() => {
    const observers: ResizeObserver[] = [];
    for (const it of items) {
      const el = contentRefs.current[it.id];
      if (!el) continue;
      const ro = new ResizeObserver(() => {
        setMeasuredHeights((prev) => ({ ...prev, [it.id]: el.scrollHeight }));
      });
      ro.observe(el);
      observers.push(ro);
    }
    return () => observers.forEach((r) => r.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div className="w-full">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const heightPx = measuredHeights[item.id] ?? 0;

        return (
          <div key={item.id} className="mb-4 rounded">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between rounded bg-white px-6 py-4 text-left font-medium text-[#111] shadow-sm transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">

                <div className="text-[15px] font-semibold text-[#111]">{item.title}</div>
              </div>

              <Chevron open={isOpen} />
            </button>

            {/* animated container using CSS transitions on height + opacity */}
            <div
              aria-hidden={!isOpen}
              style={{
                height: isOpen ? `${heightPx}px` : 0,
                opacity: isOpen ? 1 : 0,
                transition: "height 360ms cubic-bezier(.22,.06,.12,.95), opacity 220ms linear",
                overflow: "hidden",
                willChange: "height, opacity",
                background: "white",
              }}
              className="px-6 pb-4"
            >
              <div
                ref={(el) => {
                  contentRefs.current[item.id] = el;
                }}
                className="py-1"
              >
                <p className="text-[14px] leading-relaxed text-slate-700">{item.summary}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ============================= Main Component (no Framer Motion) ============================= */

export default function SustainabilityShowcase() {
  // const sectionRef = useRef<HTMLDivElement | null>(null);

  const colHeightClass = "min-h-[680px] h-[680px]";


  return (
    <section className="bg-[#E6E7E7] py-12 lg:py-20 ">
      {/* Desktop layout */}
      {/* Desktop layout */}
      <div className="hidden sm:flex gap-8 items-start max-w-7xl ">
        {/* Left panel */}
        <div className="h-[680px] w-1/2 bg-[#E6E7E7] py-8 overflow-auto rounded no-scrollbar">
          <div className="max-w-[520px]">
            <DropdownList items={DATA} />
            <div className="h-6" />
          </div>
        </div>

        {/* Right panel — STICKY */}
        <div className="h-[680px] w-1/2 sticky top-24 flex items-center justify-center">
          <div className="w-full max-w-[680px]">
            <div className="overflow-hidden">
              <div className="relative h-[680px] w-full rounded-sm">
                <Image
                  src="/images/susworld.png"
                  alt="sustainability"
                  fill
                  className="object-contain rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile layout */}
      <div className="sm:hidden">
        <div className="relative h-[44vh] w-full overflow-hidden rounded-lg">
          <Image src="/images/susworld.png" alt="sustainability" fill className="object-cover" />
        </div>

        <div className="mt-4">

        </div>

        <div className="mt-4">
          <DropdownList items={DATA} />
        </div>
      </div>

      {/* hide scrollbar visually but keep scrolling functionality */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
