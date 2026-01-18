"use client";

import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Category {
  name: string;
  productKey: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface ProductCategorySectionProps {
  title: string;
  heroImageUrl: string;
  overview: string;
  categories: Category[];
  activeKey: "gravure" | "ctp" | "sleeves";
  sectionData: any;
}

export default function ProductCategorySection({
  title,
  heroImageUrl,
  overview,
  categories,
  activeKey,
  sectionData,
}: ProductCategorySectionProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= SIDEBAR (FROM YOUR APPROVED NAV) ================= */}
        <aside className="lg:col-span-1">

          {/* Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block sticky top-6"
          >
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-[#117ABA] text-white px-6 py-5">
                <h2 className="text-lg lato-700 tracking-wide">
                  PRODUCT CATEGORIES
                </h2>
              </div>

              <nav className="divide-y divide-gray-100">
                {categories.map((category) => (
                  <motion.button
                    key={category.productKey}
                    onClick={category.onClick}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-between px-6 py-4
                      transition-colors text-left border-l-4
                      ${
                        category.isActive
                          ? "bg-blue-100 border-l-[#117ABA] text-[#117ABA]"
                          : "border-transparent text-gray-800 hover:bg-blue-50"
                      }`}
                  >
                    <span className="lato-400 text-[16px]">
                      {category.name}
                    </span>

                    <ChevronRight
                      size={18}
                      className={`transition-transform ${
                        category.isActive ? "rotate-90" : ""
                      }`}
                    />
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Mobile */}
          <div className="lg:hidden bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-full flex items-center justify-between bg-[#117ABA]
                text-white px-6 py-5 lato-400 text-[16px]"
            >
              <span>PRODUCT CATEGORIES</span>
              {isMobileOpen ? <ChevronDown /> : <ChevronRight />}
            </button>

            <AnimatePresence>
              {isMobileOpen && (
                <motion.nav
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {categories.map((category) => (
                    <button
                      key={category.productKey}
                      onClick={() => {
                        category.onClick?.();
                        setIsMobileOpen(false);
                      }}
                      className={`w-full px-6 py-4 text-left border-l-4
                        ${
                          category.isActive
                            ? "bg-blue-100 border-l-[#117ABA] text-[#117ABA]"
                            : "border-transparent"
                        }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="lg:col-span-3 space-y-8">

          {/* HERO */}
          <div className="relative h-[420px] rounded-t-xl overflow-hidden">
            <Image
  src={sectionData.heroImageUrl}
  alt={title}
  fill
  className="object-cover"
/>

            <div className="absolute inset-0 bg-black/50" />
            <h1 className="absolute bottom-4 left-4 text-white text-2xl lato-800">
              {title}
            </h1>
          </div>

          {/* OVERVIEW */}
          <div className="border border-gray-200 p-6">
            <div className="flex gap-2 mb-2">
              <span className="h-6 w-[4px] bg-[#117ABA]" />
              <h3 className="text-[#117ABA] lato-700 text-xl">Overview</h3>
            </div>
            <p className="whitespace-pre-line text-black leading-relaxed">
              {overview}
            </p>
          </div>

          {/* ================= GRAVURE (SPECIAL LAYOUT) ================= */}
          {activeKey === "gravure" &&
            sectionData.blocks.map((block: any, i: number) => (
              <div key={i} className="border border-gray-200">

                <div className="bg-[#E06F65] text-white px-4 py-3 lato-700">
                  {block.heading}
                </div>

                <div className="p-6 space-y-6">
                  {block.text && (
                    <p className="whitespace-pre-line text-black">
                      {block.text}
                    </p>
                  )}

                  {block.bullets && (
                    <ul className="list-disc pl-6 text-black">
                      {block.bullets.map((b: string, i: number) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {block.images && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {block.images.map((img: string, i: number) => (
                        <div
                          key={i}
                          className="relative h-[220px] border-2 border-[#117ABA] bg-white"
                        >
                          <Image
                            src={img}
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {block.subText && (
                    <p className="whitespace-pre-line text-black">
                      {block.subText}
                    </p>
                  )}

                  {block.subBlocks && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {block.subBlocks.map((sb: any, i: number) => (
                        <div key={i}>
                          <div className="relative h-[200px] border-2 border-[#117ABA] bg-white">
                            <Image
                              src={sb.image}
                              alt=""
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="mt-2 lato-700 text-gray-800">
                            {sb.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

          {/* ================= SIMPLE LAYOUT (CTP / SLEEVES) ================= */}
          {activeKey !== "gravure" && (
            <div className="border border-gray-200 p-6 space-y-6">
              <h3 className="lato-700 text-xl text-black">{sectionData.title}</h3>
              <p className="text-black">{sectionData.overview}</p>

              {sectionData.bullets && (
                <ul className="list-disc pl-6 text-black">
                  {sectionData.bullets.map((b: string, i: number) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {sectionData.images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectionData.images.map((img: string, i: number) => (
                    <div
                      key={i}
                      className="relative h-[220px] border-2 border-[#117ABA] bg-white"
                    >
                      <Image src={img} alt="" fill className="object-contain" />
                    </div>
                  ))}
                </div>
              )}

              {sectionData.image && (
                <div className="relative h-[240px] border-2 border-[#117ABA] bg-white">
                  <Image
                    src={sectionData.image}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
