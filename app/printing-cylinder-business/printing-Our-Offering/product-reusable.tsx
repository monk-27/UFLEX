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
    <section className="py-10 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= SIDEBAR (FROM YOUR APPROVED NAV) ================= */}
        <aside className="lg:col-span-1">
                    {/* Desktop Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white  overflow-hidden hidden lg:block sticky top-6"
                    >
                        <div className="">

                            <div className="bg-[#117ABA] text-white px-6 py-5">
                                <h2 className="text-lg lato-700 tracking-wide">PRODUCT CATEGORIES</h2>
                            </div>

                            <nav className="divide-y divide-gray-100">

                                {categories.map((category: any) => (
                                    <motion.button
                                        key={category.name}
                                        onClick={category.onClick}
                                        whileTap={{ scale: 0.98 }}
                                        className={`
      w-full flex items-center justify-between px-6 py-4
      text-left transition-colors duration-200
      bg-white
      hover:bg-[#F9F9F9]
     
      ${category.isActive
                                                ? " text-[#117ABA]"
                                                : " text-black"
                                            }
    `}
                                    >
                                        <span
                                            className={`
        lato-400 text-[16px] sm:text-[18px] leading-relaxed
        ${category.isActive ? "text-[#117ABA] " : "text-black"}
      `}
                                        >
                                            {category.name}
                                        </span>

                                        <ChevronRight
                                            size={18}
                                            className={`
        transition-transform duration-300
        ${category.isActive ? "rotate-90 text-[#117ABA]" : "text-gray-500"}
      `}
                                        />
                                    </motion.button>
                                ))}
                            </nav>


                        </div>

                     
                    </motion.div>

                    {/* Mobile Accordion */}
                    <div className="lg:hidden bg-white   overflow-hidden">
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="w-full flex items-center justify-between bg-[#117ABA] text-white px-6 py-5 lato-400 text-[16px] sm:text-[18px] leading-relaxed "
                        >
                            <span>PRODUCT CATEGORIES</span>
                            {isMobileOpen ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                        </button>

                        <AnimatePresence>
                            {isMobileOpen && (
                                <motion.nav
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden"
                                >
                                    <div className="divide-y divide-gray-100">
                                        {categories.map((category) => (
                                            <motion.button
                                                key={category.name}
                                                onClick={category.onClick}
                                                whileTap={{ scale: 0.98 }}
                                                className={`
      w-full flex items-center justify-between px-6 py-4
      text-left transition-colors duration-200
      bg-white
      hover:bg-gray-100
     
      ${category.isActive
                                                        ? "bg-blue-100  text-[#117ABA]"
                                                        : "border-l-transparent text-black"
                                                    }
    `}
                                            >
                                                <span
                                                    className={`
        lato-400 text-[16px] sm:text-[18px] leading-relaxed
        ${category.isActive ? "text-[#117ABA]" : "text-black"}
      `}
                                                >
                                                    {category.name}
                                                </span>

                                                <ChevronRight
                                                    size={18}
                                                    className={`
        transition-transform duration-300
        ${category.isActive ? "rotate-90 text-[#117ABA]" : "text-gray-500"}
      `}
                                                />
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.nav>
                            )}
                        </AnimatePresence>


                    </div>
                    
                </aside>

        {/* ================= MAIN ================= */}
        <main className="lg:col-span-3 space-y-8">

          {/* HERO */}
          <div className="relative h-[420px]  overflow-hidden">
            <Image
  src={sectionData.heroImageUrl}
  alt={title}
  fill
  className="object-cover"
/>

            <div className="absolute inset-0 bg-black/50" />
            
          </div>

          {/* OVERVIEW */}
          <div className="flex gap-2">
                                {/* <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" /> */}
                                <h3 className="lato-700 text-[20px] sm:text-[24px] text-[#117ABA]">
                                    Overview
                                </h3>
                            </div>
                            <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                                {overview
                                }
                            </p>

          {/* ================= GRAVURE (SPECIAL LAYOUT) ================= */}
          {activeKey === "gravure" &&
            sectionData.blocks.map((block: any, i: number) => (
              <div key={i} className="border border-gray-200">

                <div className="bg-[#117ABA] text-white px-4 py-3 lato-700">
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
