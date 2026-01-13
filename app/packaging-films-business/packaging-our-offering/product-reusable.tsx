// components/ProductCategorySection.tsx
"use client";

import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Interfaces (unchanged)
interface Category {
    name: string;
    href?: string;
    productKey?: string;
    isActive?: boolean;
    onClick?: () => void;
}

interface Innovation {
    title: string;
    description: string | string[];
}

interface QuickLink {
    label: string;
    href: string;
    external?: boolean;
}

interface ProductCategorySectionProps {
    title: string;
    heroImageUrl: string;
    overview: string;
    categories: Category[];
    performanceProperties: string[];
    applications: string[];
    innovations: Innovation[];
    quickLinks?: QuickLink[];
    brandTag?: string;
    thicknessRange?: string;
    productionCapacity?: string;
}

export default function ProductCategorySection({
    title,
    heroImageUrl,
    overview = "",
    categories = [],
    performanceProperties = [],
    applications = [],
    innovations = [],
    quickLinks = [],
    brandTag = "",
    thicknessRange = "",
    productionCapacity = "",
}: ProductCategorySectionProps) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };


    return (
        <section className="py-10 min-h-screen">

            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="lg:col-span-1">
                    {/* Desktop Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden hidden lg:block sticky top-6"
                    >
                        <div className="bg-[#117ABA] text-white px-6 py-5">
                            <h2 className="text-lg font-semibold tracking-wide">PRODUCT CATEGORIES</h2>
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
                                            : "border-transparent text-gray-800 hover:bg-blue-50"
                                        }`}

                                >
                                    <span
                                        className={`lato-400 text-[16px] sm:text-[18px] leading-relaxed ${category.isActive ? "text-[#117ABA]" : "text-[#4f4f4f]"
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

                        {/* {quickLinks.length > 0 && (
              <div className="p-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-blue-700 hover:text-[#117ABA] text-sm flex items-center gap-1.5 transition-colors"
                        {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        {link.label}
                        {link.external && <span aria-hidden>↗</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
                    </motion.div>

                    {/* Mobile Accordion */}
                    <div className="lg:hidden bg-white rounded-xl shadow-md overflow-hidden">
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
                                                className={`w-full flex items-center justify-between px-6 py-4
  transition-colors text-left border-l-4
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

                        {/* {quickLinks.length > 0 && (
              <div className="p-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#117ABA] hover:text-[#117ABA] text-sm flex items-center gap-1.5 transition-colors"
                        {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        {link.label}
                        {link.external && <span aria-hidden>↗</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
                    </div>
                </aside>

                {/* Main Content */}
                <motion.main
                    key={title} // Re-animate when product changes
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="lg:col-span-3  "
                >
                    {/* Hero */}
                    <motion.div variants={itemVariants} className="relative h-80 md:h-[420px] rounded-t-xl overflow-hidden shadow-xl">
                        <Image
                            src={heroImageUrl}
                            alt={`${title} film rolls`}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 75vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-2 md:p-4 text-white">
                            {brandTag && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-block bg-[#117ABA]/90 px-5 py-2 rounded text-sm lato-700 mb-4 tracking-wide"
                                >
                                    {brandTag}
                                </motion.div>
                            )}
                            <h1 className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-white lato-400">{title}</h1>
                        </div>
                    </motion.div>

                    {/* Overview */}
                    <div className="border-[1px] border-gray-200 rounded-b-xl p-2 md:p-4 space-y-6">
                        <motion.div variants={itemVariants}>
                            <div className="flex gap-2">
                                <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" />
                                <h3 className="lato-400 text-[20px] md:text-[24px] text-[#117ABA]">
                                    Overview
                                </h3>
                            </div>
                            <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f]">
                                {overview
                                }
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
                            {/* Performance Properties */}
                            {performanceProperties.length > 0 && (<div>
                                <motion.div variants={itemVariants}>

                                    <div className="flex gap-2">
                                        <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" />
                                        <h3 className="lato-400 text-[20px] md:text-[24px] text-[#117ABA]">
                                            Performance Properties
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {performanceProperties.map((prop, i) => (
                                            <motion.li
                                                key={prop}
                                                variants={itemVariants}
                                                custom={i}
                                                className="flex items-start gap-3 text-gray-700"
                                            >
                                                <span className="text-[#117ABA] lato-400 text-xl leading-none mt-1">✓</span>
                                                <span className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f]">{prop}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            )}


                            {/* Applications */}
                            {applications.length > 0 && (<div>

                                <motion.div variants={itemVariants}>

                                    <div className="flex gap-2">
                                        <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" />
                                        <h3 className="lato-400 text-[20px] md:text-[24px] text-[#117ABA]">
                                            Applications
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                        {applications.map((app, i) => (
                                            <motion.div
                                                key={app}
                                                variants={cardVariants}
                                                custom={i}
                                                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                                                className="bg-blue-50 text-[#117ABA] px-2 py-2 rounded-xl lato-400 text-[12px] sm:text-[10px] leading-relaxed  border border-blue-100 shadow-sm"
                                            >
                                                {app}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            )}

                        </div>

                        {/* Special Innovations */}
                        {innovations.length > 0 && (
                            <div className="flex gap-2 py-4">
                                <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" />
                                <h3 className="lato-400 text-[20px] md:text-[24px] text-[#117ABA]">
                                    Special Innovations
                                </h3>
                            </div>
                        )}
                        {innovations.map((item, i) => {
                            const description = Array.isArray(item.description)
                                ? item.description
                                : [item.description];

                            return (
                                <div>

                                    <motion.div
                                        key={item.title}
                                        variants={cardVariants}
                                        custom={i}
                                        whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                                        className="bg-gray-100 p-6 rounded-xl shadow-md border-l-4 border-[#117ABA] transition-all duration-300"
                                    >
                                        <h3 className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#117ABA] mb-3">
                                            {item.title}
                                        </h3>

                                        <div className="lato-400 text-[16px] sm:text-[18px] text-[#4f4f4f] whitespace-pre-line">

                                            {description.map((text, index) => (
                                                <p key={index} className="leading-relaxed">
                                                    {text}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                            );
                        })}



                        {/* CTA */}
                        <motion.div
                            variants={itemVariants}
                            className="flex gap-5 pt-6"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#117ABA] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#117ABA] transition-all shadow-md"
                            >
                                Learn More ↗
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="border-2 border-[#117ABA] text-[#117ABA] px-4 py-2 rounded-xl font-semibold hover:bg-blue-50 transition-all"
                            >
                                Request Sample
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.main>
            </div>
        </section>
    );
}