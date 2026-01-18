
"use client";

import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Category {
    name: string;
    productKey?: string;
    isActive?: boolean;
    onClick?: () => void;
}

interface SectionItem {
    label: string;
    text: string;
    moreLink: string;
}

interface SectionGroup {
    groupTitle: string;
    items: SectionItem[];
}

interface SubSection {
    title: string;
    intro?: string;
    items: SectionItem[];
}
interface StandardSection {
    type: "standard";
    title: string;
    intro?: string;
    subTitle?: string;
    bullets?: string[];
    items: SectionItem[];
}

interface GroupedSection {
    type: "grouped";
    title: string;
    intro?: string;
    subTitle?: string;
    groups: SectionGroup[];
}

interface MultiSubSection {
    type: "multi-sub";
    title: string;
    intro?: string;
    subTitle?: string;
    subSections: SubSection[];
}


// interface Section {
//     title: string;
//     intro?: string;
//     subTitle?: string;
//     bullets?: string[];
//     items: SectionItem[];
// }

interface ProductCategorySectionProps {
    title: string;
    heroImageUrl: string;
    overview: string;
    categories: Category[];
    sections?: Section[];
}
interface ImageSectionItem {
  label: string;
  description: string;
  image: string;
}

interface ImageGridSection {
  type: "image-grid";
  title?: string;
  intro?: string;
  items: ImageSectionItem[];
}
type Section =
  | StandardSection
  | GroupedSection
  | MultiSubSection
  | ImageGridSection;
export default function ProductCategorySection({
    title,
    heroImageUrl,
    overview,
    categories,
    sections = [],
}: ProductCategorySectionProps) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <section className="py-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* LEFT SIDEBAR */}
                <aside className="lg:col-span-1">
                    {/* Desktop Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white  overflow-hidden hidden lg:block sticky top-6"
                    >
                        <div className="rounded-xl border-[1px] border-gray-200">

                            <div className="bg-[#117ABA] text-white px-6 py-5">
                                <h2 className="text-lg lato-700 tracking-wide">PRODUCT CATEGORIES</h2>
                            </div>

                            <nav className="divide-y divide-gray-100">
                                {categories.map((category) => (
                                    <motion.button
                                        key={category.name}
                                        onClick={category.onClick}
                                        // whileHover={{ backgroundColor: "#eff6ff" }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full flex items-center justify-between px-6 py-4
  transition-colors text-left border-l-4
  ${category.isActive
                                                ? "bg-blue-100 border-l-[#117ABA] text-[#117ABA]"
                                                : " border-[1px] border-gray-200  text-gray-800 hover:bg-blue-50"
                                            }`}

                                    >
                                        <span
                                            className={`lato-400 text-[16px] sm:text-[18px] leading-relaxed ${category.isActive ? "text-[#117ABA]" : "text-black"
                                                }`}
                                        >
                                            {category.name}</span>
                                        <ChevronRight
                                            size={18}
                                            className={`transition-transform duration-300 ${category.isActive ? "rotate-90" : ""
                                                }`}
                                        />
                                    </motion.button>
                                ))}
                            </nav>


                        </div>


                    </motion.div>

                    {/* Mobile Accordion */}
                    <div className="lg:hidden bg-white rounded-xl border-[1px] border-gray-200  overflow-hidden">
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
                                            <button
                                                key={category.name}
                                                onClick={() => {
                                                    category.onClick?.();
                                                    setIsMobileOpen(false);
                                                }}
                                                className={`w-full flex items-center justify-between px-6 py-4 transition-colors text-left border-l-4
                                                    ${category.isActive
                                                        ? "bg-blue-100 border-l-[#117ABA] text-[#117ABA]"
                                                        : "border-transparent text-gray-800 hover:bg-blue-50"
                                                    }`}

                                            >
                                                {category.name}
                                            </button>
                                        ))}
                                    </div>
                                </motion.nav>
                            )}
                        </AnimatePresence>


                    </div>

                </aside>

                {/* MAIN CONTENT */}
                <main className="lg:col-span-3">

                    {/* HERO */}
                    <div className="relative h-[420px] rounded-t-xl overflow-hidden">
                        <Image src={heroImageUrl} alt={title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/50" />
                        <h1 className="absolute bottom-4 left-4 text-white text-2xl lato-800">
                            {title}
                        </h1>
                    </div>

                    {/* OVERVIEW */}
                    <div className="border border-gray-200 p-6">
                        <div className="flex gap-2">
                            <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" />
                            <h3 className="lato-400 text-[20px] md:text-[24px] text-[#117ABA]">
                                Overview:
                            </h3>
                        </div>
                        <p className="text-black whitespace-pre-line leading-relaxed">
                            {overview}
                        </p>
                    </div>

                    {/* SECTIONS A–D */}
                    {sections.map((section, idx) => (
                        <div key={idx} className="mt-8 border border-gray-200">

                            {/* SECTION TITLE BAR */}
                            <div className="bg-[#117ABA] text-white px-4 py-3 lato-700 text-lg">
                                {section.title}
                            </div>

                            <div className="p-6 space-y-4">

                                {/* INTRO TEXT */}
                                {section.intro && (
                                    <p className="text-black leading-relaxed">
                                        {section.intro}
                                    </p>
                                )}

                                {/* BLUE SUBTITLE */}
                                {section.type !== "image-grid" && section.subTitle && (
  <p className="text-[#117ABA] lato-700">
    {section.subTitle}
  </p>
)}


                                <div className="space-y-6">
                                    <div className="space-y-6">

                                        {section.type !== "grouped" && section.type !== "multi-sub"&& section.type !== "image-grid" && section.items && (
                                            <div className="space-y-6">
                                                {section.items.map((item, i) => (
                                                    <div key={i}>
                                                        <p className="text-gray-800 leading-relaxed">
                                                            <span className="lato-700">
                                                                {i + 1}. {item.label}
                                                            </span>{" "}
                                                            {item.text}
                                                        </p>

                                                        <div className="mt-3">
                                                            <a
                                                                href={item.moreLink}
                                                                className="inline-block bg-[#117ABA] text-white px-5 py-2 rounded-full text-sm"
                                                            >
                                                                MORE ABOUT THE MACHINE
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {section.type === "standard" && section.bullets && (
                                            <ul className="list-disc pl-6 space-y-1 text-black">
                                                {section.bullets.map((bullet, i) => (
                                                    <li key={i}>{bullet}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {section.type === "image-grid" && (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {section.items.map((item, i) => (
      <div key={i} className="text-center">
        <div className="relative w-full h-[220px] border-2 border-[#117ABA]">
          <Image
            src={item.image}
            alt={item.label}
            fill
            className="object-contain bg-white"
          />
        </div>

        <h4 className="mt-4 text-lg lato-700 text-gray-800">
          {item.label}
        </h4>

        <p className="mt-2 text-black leading-relaxed">
          {item.description}
        </p>
      </div>
    ))}
  </div>
)}

                                        {section.type === "multi-sub" && (
                                            <div className="space-y-10">
                                                {section.subSections.map((sub, sIdx) => (
                                                    <div key={sIdx}>

                                                        {/* RED MARKER + SUB TITLE */}
                                                        <div className="flex gap-3 items-start mb-4">
                                                            <span className="w-[4px] bg-[#117ABA]" />
                                                            <h4 className="italic text-lg text-gray-800">
                                                                {sub.title}
                                                            </h4>
                                                        </div>

                                                        {/* SUB INTRO */}
                                                        {sub.intro && (
                                                            <p className="text-black leading-relaxed mb-4">
                                                                {sub.intro}
                                                            </p>
                                                        )}

                                                        {/* SUB ITEMS */}
                                                        <div className="space-y-6">
                                                            {sub.items.map((item, i) => (
                                                                <div key={i}>
                                                                    <p className="text-gray-800 leading-relaxed">
                                                                        <span className="lato-700">
                                                                            {i + 1}. {item.label}
                                                                        </span>{" "}
                                                                        {item.text}
                                                                    </p>

                                                                    <div className="mt-3">
                                                                        <a
                                                                            href={item.moreLink}
                                                                            className="inline-block bg-[#117ABA] text-white px-5 py-2 rounded-full text-sm"
                                                                        >
                                                                            MORE ABOUT THE MACHINE
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.type === "grouped" && section.groups && (
                                            <div className="space-y-10">
                                                {section.groups.map((group, gIdx) => (
                                                    <div key={gIdx}>
                                                        {/* RED MARKER + GROUP TITLE */}
                                                        <div className="flex gap-3 items-start mb-4">
                                                            <span className="w-[4px] bg-[#117ABA]" />
                                                            <h4 className="italic text-lg text-gray-800">
                                                                {group.groupTitle}
                                                            </h4>
                                                        </div>

                                                        {/* GROUP ITEMS */}
                                                        <div className="space-y-6">
                                                            {group.items.map((item, i) => (
                                                                <div key={i}>
                                                                    <p className="text-gray-800 leading-relaxed">
                                                                        <span className="lato-700">
                                                                            {i + 1}. {item.label}
                                                                        </span>{" "}
                                                                        {item.text}
                                                                    </p>

                                                                    <div className="mt-3">
                                                                        <a
                                                                            href={item.moreLink}
                                                                            className="inline-block bg-[#117ABA] text-white px-5 py-2 rounded-full text-sm"
                                                                        >
                                                                            MORE ABOUT THE MACHINE
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                    </div>


                                </div>

                            </div>
                        </div>
                    ))}

                </main>

            </div>
        </section>
    );
}
