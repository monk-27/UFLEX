"use client";

import { memo } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type OverlayModule = {
  /** Visible title shown above the card and in overlay */
  title: string;
  /** Card image URL */
  image: string;
  /** Short description for overlay */
  description?: string;
  /** Optional CTA under overlay (desktop + mobile) */
  cta?: { label: string; href: string };
  /** Optional: priority image (Next.js) */
  priority?: boolean;
  /** Optional alt attribute (defaults to title) */
  alt?: string;
};

export type OverlayModulesProps = {
  /** Section title */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Cards */
  modules: OverlayModule[];
  /** Height of the media (px) across breakpoints */
  heights?: { base?: number; sm?: number; lg?: number };
  /** Grid columns at lg breakpoint (default 2) */
  lgCols?: 1 | 2 | 3;
  /** Wrap section with background, paddings, etc. */
  className?: string;
  /** Optional: custom image sizes for responsive loading */
  imageSizes?: string;
  /** Optional: disable animated stagger */
  disableStagger?: boolean;
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.05 * i },
  }),
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function _OverlayModules({
  heading = "Overlay at UFlex",
  subheading = "Where Innovation Meets Community",
  modules,
  heights = { base: 360, sm: 420, lg: 520 },
  lgCols = 2,
  className = "",
  imageSizes = "(max-width:1024px) 100vw, 50vw",
  disableStagger = false,
}: OverlayModulesProps) {
  const lgGridClass =
    lgCols === 1 ? "lg:grid-cols-1" : lgCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <motion.section
      className={`mt-[60px] px-4 py-0 text-center sm:mt-16 sm:bg-gray-100 sm:py-20 md:px-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title block */}
      <div className="mx-auto max-w-4xl">
        {heading && (
          <h2 className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl">
            {heading}
          </h2>
        )}
        {subheading && (
          <h3
            className="font-EB-extrabold mt-0 text-[16px] text-[#117ABA] sm:mt-2 md:text-3xl"
            style={{ lineHeight: "124%" }}
          >
            {subheading}
          </h3>
        )}
      </div>

      {/* Grid */}
      <motion.div
        className={`mx-auto mt-8 grid max-w-6xl gap-8 sm:pt-12 ${lgGridClass}`}
        initial={disableStagger ? undefined : "hidden"}
        whileInView={disableStagger ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={disableStagger ? undefined : stagger}
      >
        {modules.map((m, idx) => {
          const alt = m.alt ?? m.title;
          // responsive inline height via CSS variables (keeps layout stable)
          const style = {
            "--h-base": `${heights.base ?? 360}px`,
            "--h-sm": `${heights.sm ?? heights.base ?? 420}px`,
            "--h-lg": `${heights.lg ?? heights.sm ?? heights.base ?? 520}px`,
          } as React.CSSProperties;

          return (
            <motion.article
              key={`${m.title}-${idx}`}
              className="group w-full overflow-hidden rounded-lg text-left"
              variants={disableStagger ? undefined : item}
            >
              <h3 className="text-center manrope-800 mb-3 text-[18px] text-[#117ABA] md:text-2xl">
                {m.title}
              </h3>

              {/* Media card */}
              <div
                className="relative h-[var(--h-base)] sm:h-[var(--h-sm)] lg:h-[var(--h-lg)]"
                style={style}
              >
                <Image
                  src={m.image}
                  alt={alt}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                  sizes={imageSizes}
                  priority={m.priority}
                />

                {/* Desktop overlay */}
                <motion.div
                  className="absolute inset-0 hidden lg:flex flex-col justify-end rounded-lg p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  initial={{ y: 220, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="relative">
                    <h4 className="manrope-800 text-white text-2xl md:text-3xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                      {m.title}
                    </h4>
                    {m.description && (
                      <p className="mt-2 text-white/95 text-sm md:text-base leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                        {m.description}
                      </p>
                    )}
                    {m.cta && (
                      <Link
                        href={m.cta.href}
                        className="mt-3 inline-flex items-center rounded-md bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-900 shadow hover:bg-white"
                      >
                        {m.cta.label}
                      </Link>
                    )}
                  </div>
                </motion.div>

                {/* Mobile/tablet overlay */}
                <div className="absolute inset-0 flex lg:hidden flex-col justify-end rounded-lg p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  <div className="relative">
                    <h4 className="text-[24px] manrope-600 text-[#117ABA] md:text-[36px] md:text-5xl">{m.title}</h4>
                    {m.description && (
                      <p className="mt-1 text-white/95 text-sm">{m.description}</p>
                    )}
                    {m.cta && (
                      <Link
                        href={m.cta.href}
                        className="mt-2 inline-flex items-center rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-900 shadow hover:bg-white"
                      >
                        {m.cta.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export const OverlayModules = memo(_OverlayModules);
