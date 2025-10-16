
"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useMemo, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import type { EmblaOptionsType } from "embla-carousel"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Item = {
  title: string
  href: string
  desc: string
  img: string
}

const items: Item[] = [
  {
    title: "Packaging Films Business",
    href: "/packaging-films-business",
    desc: "High-performance BOPET/BOPP films for diverse applications.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Packaging-Films-Business-faq-icon21.svg",
  },
  {
    title: "Flexible Packaging Business",
    href: "/flexible-packaging-business",
    desc: "Custom structures for brand impact and efficiency.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Flexible-Packaging-Business-faq-icon36.svg",
  },
  {
    title: "Aseptic Packaging Business",
    href: "/aseptic-packaging-business",
    desc: "Safe, shelf-stable solutions with extended freshness.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Aseptic-Packaging-Business-faq-icon56.svg",
  },
  {
    title: "Chemicals",
    href: "/chemicals-business",
    desc: "Speciality chemicals powering packaging performance.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Chemicals-Business-faq-icon20.svg",
  },
  {
    title: "Holography Business",
    href: "/holography-business",
    desc: "Security and decorative holographic solutions.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Holography-Business-faq-icon47.svg",
  },
  {
    title: "Engineering Business",
    href: "/engineering-business",
    desc: "Turnkey packaging machinery and systems.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Engineering-Business-faq-icon45.svg",
  },
  {
    title: "Printing Cylinders Business",
    href: "/printing-cylinder-business",
    desc: "Precision cylinders for consistent print quality.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Printing-Cylinder-Business-faq-icon03.svg",
  },
  {
    title: "FlexiTubes Business",
    href: "/flexitube-business",
    desc: "Durable, brandable tubes for personal care and more.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/FlexiTube-Business-faq-icon59.svg",
  },
]

/** 1 card @ xs, 2 @ sm, 3 @ lg, 4 @ xl */
const slideClass = "embla__slide basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 shrink-0"

export function WhatWeDoCarousel({ options, className }: { options?: EmblaOptionsType; className?: string }) {
  // theme tokens (picked to match your screenshot)
  // const themeVars: React.CSSProperties = {
  //   // soft rose card
  //   // bg: #F7EFEC, border: #E7D6D1
  //   // headings: deep maroon #7A1B14, text: slate #3A3F4A
  //   // accents/dots: same maroon
  //   ["--card-bg" as any]: "#F7EFEC",
  //   ["--card-border" as any]: "#E7D6D1",
  //   ["--card-heading" as any]: "#7A1B14",
  //   ["--card-text" as any]: "#3A3F4A",
  //   ["--chip-bg" as any]: "rgba(122,27,20,0.08)",
  //   ["--chip-border" as any]: "rgba(122,27,20,0.25)",
  //   ["--dot-active" as any]: "#7A1B14",
  // }
  const themeVars: React.CSSProperties = {
    //   // bg: #F7EFEC, border: #E7D6D1
    ["--card-bg" as any]: "#E7D6D1",
    ["--card-border" as any]: "rgba(13, 27, 62, 0.08)",
    ["--card-heading" as any]: "#0B3C7D",
    ["--card-text" as any]: "#2B2F38",
    ["--chip-bg" as any]: "rgba(11,60,125,0.07)",
    ["--chip-border" as any]: "rgba(11,60,125,0.18)",
    ["--dot-active" as any]: "#0B3C7D",
  }

  const plugins = useMemo(
    () => [
      Autoplay({
        delay: 3500,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
    [],
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: "trimSnaps", ...options },
    plugins,
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollTo = (i: number) => emblaApi?.scrollTo(i)
  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className={cn("relative", className)} style={themeVars}>
      <div className="embla group">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4 will-change-transform">
            {items.map((it, i) => (
              <motion.article
                key={it.href}
                className={cn(
                  slideClass,
                  "relative rounded-xl overflow-hidden border",
                  "bg-[var(--card-bg)] border-[var(--card-border)]",
                )}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                {/* Image well: soft background, subtle inner ring */}
                <div className="relative aspect-[4/3] w-full bg-white/70">
                  <div className="absolute inset-0 ring-1 ring-black/5 rounded-none pointer-events-none" />
                  {/* SVGs: use object-contain for crisp edges */}
                  <Image
                    src={it.img}
                    alt={it.title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={i === 0}
                    unoptimized
                  />
                  {/* soft top gradient to anchor content area */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.02] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <h4 className="font-semibold text-lg leading-tight text-[color:var(--card-heading)]">{it.title}</h4>
                  <p className="text-sm mt-1 text-[color:var(--card-text)]/90">{it.desc}</p>

                  <div className="mt-3 flex items-center gap-2">
                    <Link
                      href={it.href}
                      className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs md:text-sm transition
                                 bg-[var(--chip-bg)] border-[color:var(--chip-border)] text-[color:var(--card-heading)] hover:brightness-95"
                    >
                      Learn more <span className="ml-1">→</span>
                    </Link>
                    {/* <Link
                      href={it.href}
                      className="inline-flex items-center rounded-full px-3 py-1.5 text-xs md:text-sm transition
                                 text-[color:var(--card-heading)] hover:underline underline-offset-4"
                    >
                      Read more
                    </Link> */}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* arrows */}
        <button
          aria-label="Previous"
          onClick={scrollPrev}
          className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/10 text-[color:var(--card-heading)] backdrop-blur hover:bg-black/20"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={scrollNext}
          className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/10 text-[color:var(--card-heading)] backdrop-blur hover:bg-black/20"
        >
          ›
        </button>

        {/* dots */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === selectedIndex ? "true" : "false"}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition",
                idx === selectedIndex
                  ? "bg-[var(--dot-active)]"
                  : "bg-[color:var(--card-border)] hover:bg-[var(--dot-active)]/50",
              )}
              onClick={() => scrollTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
