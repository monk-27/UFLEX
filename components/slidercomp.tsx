import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* -------------------- Types -------------------- */
export type SliderItem = {
  img: string;
  title: string;
  desc: string;
  dynamiclink?: string;
};

export type SliderCarouselProps = {
  heading?: string;
  subheading?: string;
  items: SliderItem[];
  className?: string;
  imageHeight?: number;
  desktopShow?: number;
  tabletShow?: number;
  autoplayMs?: number | false;
};

/* -------------------- Component -------------------- */
export default function SliderCarousel({
  heading,
  subheading,
  items,
  className = "",
  imageHeight = 280,
  desktopShow = 3,
  tabletShow = 2,
  autoplayMs = false,
}: SliderCarouselProps) {
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  const slidesToShow = useMemo(() => {
    if (typeof window === "undefined") return desktopShow;
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1280) return tabletShow;
    return desktopShow;
  }, [desktopShow, tabletShow]);

  const maxIndex = Math.max(0, items.length - slidesToShow);

  useEffect(() => {
    const onResize = () => {
      const w = containerRef.current?.clientWidth ?? window.innerWidth;
      setContainerWidth(w);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setIndex((cur) => Math.min(cur, Math.max(0, items.length - slidesToShow)));
  }, [slidesToShow, items.length]);

  const goto = (i: number) => setIndex(() => Math.max(0, Math.min(i, maxIndex)));
  const next = () => setIndex((cur) => (cur >= maxIndex ? 0 : cur + 1));
  const prev = () => setIndex((cur) => (cur <= 0 ? maxIndex : cur - 1));

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchCurrentX.current == null) return;
    const dx = touchStartX.current - touchCurrentX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  const itemWidth = containerWidth && slidesToShow ? containerWidth / slidesToShow : 0;

  return (
    <section ref={containerRef} className={`mx-auto max-w-7xl px-4 relative bg-white py-8 ${className}`}>
      <div className="text-center mb-6">
        {heading && <h2 className="text-[28px] lato-400 text-[#000000]">{heading}</h2>}
        {subheading && <p className="mx-auto mt-2 max-w-3xl text-gray-700">{subheading}</p>}
      </div>

      <div
        className="relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * itemWidth}px)` }}
          >
            {items.map((card, i) => {
              const isActive = i >= index && i < index + slidesToShow;
              return (
                <div
                  key={`${card.title}-${i}`}
                  style={{ minWidth: itemWidth || undefined, maxWidth: itemWidth || undefined }}
                  className="px-3 pb-6 flex-shrink-0"
                >
                  <motion.article
                    layout
                    animate={{ scale: isActive ? 1.02 : 1, y: isActive ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col`}
                  >
                    <div style={{ height: imageHeight }} className="relative w-full">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        sizes={slidesToShow === 1 ? "100vw" : slidesToShow === 2 ? "50vw" : "33vw"}
                        style={{ objectFit: "cover" }}
                        className="block"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg lato-400 text-[#117ABA] mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-600">{card.desc}</p>
                      </div>

                      {card.dynamiclink ? (
                        <div className="mt-4">
                          <Link href={card.dynamiclink} className="inline-block text-sm lato-500 text-[#117ABA] hover:underline">
                            Read more →
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>

        {/* arrows */}
        
      </div>

      {/* dots */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
          <button
            key={dot}
            onClick={() => goto(dot)}
            aria-label={`Go to slide ${dot + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${dot === index ? "scale-125 bg-[#117ABA]" : "bg-gray-300"}`}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-6">

          <button
            onClick={prev}
            aria-label="Previous slide"
            className="z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm opacity-50 hover:opacity-100 transition md:left-0"
          >
            <ChevronLeft className="h-5 w-5 text-gray-400" />
          </button>


          <button
            onClick={next}
            aria-label="Next slide"
            className="z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm opacity-50 hover:opacity-100 transition md:right-0"
          >
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>

        </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mx-auto { padding-left: 1rem; padding-right: 1rem; }
        }
      `}</style>
    </section>
  );
}
