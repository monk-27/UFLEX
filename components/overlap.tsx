// "use client"

// import React from "react"
// import { cn } from "@/lib/utils"

// type Slide = {
//   title: string
//   subtitle?: string
//   image?: string
//   alt?: string
//   content?: React.ReactNode
// }

// type ScrollTransitionProps = {
//   slides: Slide[]
//   className?: string
// }

// function clamp01(v: number) {
//   return Math.max(0, Math.min(1, v))
// }

// function easeInOutQuad(t: number) {
//   return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
// }

// export function ScrollTransition({ slides, className }: ScrollTransitionProps) {
//   const sectionRefs = React.useRef<Array<HTMLDivElement | null>>([])
//   const [progresses, setProgresses] = React.useState<number[]>(() => new Array(slides.length).fill(0))

//   // Resize-aware viewport height
//   const vhRef = React.useRef(0)
//   React.useEffect(() => {
//     const setVh = () => {
//       vhRef.current = window.innerHeight
//     }
//     setVh()
//     window.addEventListener("resize", setVh)
//     return () => window.removeEventListener("resize", setVh)
//   }, [])

//   // rAF-throttled scroll listener
//   const tickingRef = React.useRef(false)
//   React.useEffect(() => {
//     const measure = () => {
//       const scrollY = window.scrollY || window.pageYOffset
//       const vh = vhRef.current || window.innerHeight
//       const next: number[] = []

//       for (let i = 0; i < sectionRefs.current.length; i++) {
//         const el = sectionRefs.current[i]
//         if (!el) {
//           next[i] = 0
//           continue
//         }
//         // Each section is 200vh with a sticky child at h-screen.
//         // Progress runs from 0 (enter) to 1 (exit).
//         const start = el.offsetTop
//         const end = start + el.offsetHeight - vh
//         const raw = (scrollY - start) / Math.max(1, end - start)
//         next[i] = clamp01(raw)
//       }

//       setProgresses(next)
//       tickingRef.current = false
//     }

//     const onScroll = () => {
//       if (!tickingRef.current) {
//         tickingRef.current = true
//         requestAnimationFrame(measure)
//       }
//     }

//     // Initial measure and listeners
//     requestAnimationFrame(measure)
//     window.addEventListener("scroll", onScroll, { passive: true })
//     window.addEventListener("resize", onScroll)
//     return () => {
//       window.removeEventListener("scroll", onScroll)
//       window.removeEventListener("resize", onScroll)
//     }
//   }, [])

//   return (
//     <main className={cn("relative w-full", className)}>
//       <div className="relative">
//         {slides.map((slide, i) => {
//           const p = progresses[i] ?? 0
//           const eased = easeInOutQuad(p)
//           const scale = 0.92 + 0.08 * eased
//           const y = (1 - eased) * 24
//           const contentOpacity = 0.2 + 0.8 * eased
//           const bgOpacity = 0.3 + 0.7 * eased

//           return (
//             <section
//               key={i}
//               ref={el => { sectionRefs.current[i] = el as HTMLDivElement | null }}
//               className="relative h-[200vh]"
//               aria-label={slide.title}
//             >
//               <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ zIndex: 10 + i }}>
//                 {slide.image ? (
//                   <div
//                     className="absolute inset-0 will-change-transform"
//                     aria-hidden="true"
//                     style={{ opacity: bgOpacity, transition: "opacity 0.12s linear" }}
//                   >
//                     <img
//                       src={slide.image || "/placeholder.svg"}
//                       alt={slide.alt ?? ""}
//                       className="h-full w-full object-cover"
//                       draggable={false}
//                     />
//                     <div className="absolute inset-0 bg-background/20" />
//                   </div>
//                 ) : null}

//                 <div
//                   className="relative flex h-full w-full items-center justify-center px-6"
//                   style={{
//                     transform: `translateY(${y}px) scale(${scale})`,
//                     opacity: contentOpacity,
//                     willChange: "transform, opacity",
//                   }}
//                 >
//                   {slide.content ? (
//                     <div className="relative h-full w-full">{slide.content}</div>
//                   ) : (
//                     <div className="mx-auto max-w-3xl text-center">
//                       <h1 className="text-balance text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
//                         {slide.title}
//                       </h1>
//                       {slide.subtitle ? (
//                         <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg">
//                           {slide.subtitle}
//                         </p>
//                       ) : null}
//                       <div className="mt-8 flex items-center justify-center gap-3">
//                         <a
//                           href="#"
//                           className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
//                         >
//                           Learn more
//                         </a>
//                         <a
//                           href="#"
//                           className="rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground"
//                         >
//                           Our impact
//                         </a>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </section>
//           )
//         })}
//       </div>
//     </main>
//   )
// }

// export default ScrollTransition
"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Slide = {
  title: string;
  subtitle?: string;
  image?: string;
  alt?: string;
  content?: React.ReactNode;
};

type ScrollTransitionProps = {
  slides: Slide[];
  className?: string;
  /** height per panel in vh; increase for longer pin/overlap */
  wrapperHeightVh?: number; // default 200
};

export default function ScrollTransition({
  slides,
  className,
  wrapperHeightVh = 200,
}: ScrollTransitionProps) {
  return (
    <main className={cn("relative w-full", className)}>
      {slides.map((slide, i) => (
        <StickyPanel
          key={i}
          index={i}
          slide={slide}
          zIndex={10 + i}
          wrapperHeightVh={wrapperHeightVh}
        />
      ))}
    </main>
  );
}

function StickyPanel({
  slide,
  index,
  zIndex,
  wrapperHeightVh,
}: {
  slide: Slide;
  index: number;
  zIndex: number;
  wrapperHeightVh: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  // progress: 0 when wrapper enters viewport bottom, 1 when it leaves viewport top
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // damp the progress for silky motion
  const prog = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.55,
  });

  // transforms (tiny parallax + lift)
  const y = useTransform(prog, [0, 1], [24, -24]);
  const scale = useTransform(prog, [0, 0.5, 1], [0.96, 1, 0.96]);
  const contentOpacity = useTransform(prog, [0, 0.08, 0.92, 1], [0, 1, 1, 0.95]);
  const bgOpacity = useTransform(prog, [0, 1], [0.35, 1]);

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: `${wrapperHeightVh}vh` }}
      aria-label={slide.title}
    >
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          zIndex,
          // iOS/gpu hints
          willChange: "transform, opacity",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Background Image (optional) */}
        {slide.image && (
          <motion.div
            className="absolute inset-0 -z-10"
            style={{ opacity: bgOpacity, willChange: "opacity" }}
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.image}
              alt={slide.alt ?? ""}
              className="h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        )}

        {/* Content wrapper */}
        <motion.div
          className="relative flex h-full w-full items-center justify-center px-6"
          style={{ y, scale, opacity: contentOpacity, willChange: "transform, opacity" }}
        >
          {slide.content ? (
            <div className="relative h-full w-full">
              {slide.content}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
                {slide.title}
              </h1>
              {slide.subtitle ? (
                <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg">
                  {slide.subtitle}
                </p>
              ) : null}
              <div className="mt-8 flex items-center justify-center gap-3">
                <a
                  href="#"
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  Learn more
                </a>
                <a
                  href="#"
                  className="rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground"
                >
                  Our impact
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
