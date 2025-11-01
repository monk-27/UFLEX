"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mediaData = [
  {
    title: "August 2025",
    image:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/Earnings-release-for-the-quarter-ended-June-30,-2025-%7C-Stable-growth-amidst-tariff-challenges35.jpg",
    description:
      "Earnings release for the quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
  },
  {
    title: "August 2025",
    image:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/UFlex-Limited-recognised-as-a-Top-Employer-2025-in-India45.jpg",
    description: "UFlex Limited recognised as a Top Employer 2025 in India",
  },
  {
    title: "July 2025",
    image:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/UFlex-secures-Indian-patent-for-sustainable-waterborne-heat-seal-coating-for-food-and-consumer-goods-packaging37.jpg",
    description:
      "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
  },
];

export default function MediaReleasesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByStep = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const gap = 24; // must match gap-x-6
    const isMobile = window.innerWidth < 768;
    const step = isMobile ? el.clientWidth : el.clientWidth / 2;
    el.scrollBy({ left: dir * (step + gap), behavior: "smooth" });
  };

  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-3xl poppins-700 text-[#117ABA] mb-6">
        Media Releases
      </h2>

      <div className="relative max-w-6xl mx-auto overflow-x-hidden">
        {/* Desktop/tablet arrows (NOT on images) */}
        <button
          onClick={() => scrollByStep(-1)}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md z-10"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={trackRef}
          className="
            flex gap-6 overflow-x-auto scroll-smooth px-2 md:px-0
            snap-x snap-mandatory
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          "
        >
          {mediaData.map((item, i) => (
            <article
              key={i}
              className="
                snap-start shrink-0
                w-full md:w-[calc(50%-12px)]
                border border-gray-200 rounded-2xl overflow-hidden
                shadow-md hover:shadow-lg transition-all duration-300 bg-white
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={650}
                className="w-full h-[220px] md:h-[280px] object-cover"
                priority={i === 0}
              />
              <div className="p-5 text-center">
                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-2">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => scrollByStep(1)}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md z-10"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Mobile controls BELOW the cards (so nothing overlays images) */}
      <div className="mt-4 flex md:hidden items-center justify-center gap-3">
        <button
          onClick={() => scrollByStep(-1)}
          className="bg-black text-white px-3 py-2 rounded-full shadow"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scrollByStep(1)}
          className="bg-black text-white px-3 py-2 rounded-full shadow"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <p className="text-center text-sm mt-8 text-gray-600">
        For any media queries, please email{" "}
        <a href="mailto:corpcomm@uflexltd.com" className="text-[#117ABA] underline">
          corpcomm@uflexltd.com
        </a>
      </p>
    </section>
  );
}
