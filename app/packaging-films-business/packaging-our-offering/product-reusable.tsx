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
    const [openInnovation, setOpenInnovation] = useState<string | null>(null);

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
        <section className="py-10 min-h-screen max-w-7xl mx-auto px-4">

            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
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

                        {quickLinks.length > 0 && (
                            <div className="hidden lg:block p-6 bg-[#F9F9F9] mt-4">
                                <h3 className="text-sm lato-700 text-gray-800 mb-3 uppercase tracking-wider">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2">
                                    {quickLinks.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-black hover:text-[#117ABA] text-sm flex items-center gap-1.5 transition-colors"
                                                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                                            >
                                                {link.label}
                                                {/* {link.external && <span aria-hidden>↗</span>} */}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
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
                    {quickLinks.length > 0 && (
                        <div className="block lg:hidden p-6 mt-4 bg-[#F9F9F9]">
                            <h3 className="text-sm lato-700 text-gray-800 mb-3 uppercase tracking-wider">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <ul className="space-y-2">
                                        {quickLinks.map((link) => (
                                            <li key={link.label}>
                                                <a
                                                    href={link.href}
                                                    className="text-black hover:text-[#117ABA] text-sm flex items-center gap-1.5 transition-colors"
                                                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                                                >
                                                    {link.label}
                                                    {/* {link.external && <span aria-hidden>↗</span>} */}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </ul>
                        </div>
                    )}
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
                    <motion.div variants={itemVariants} className="relative h-80 md:h-[420px]  overflow-hidden shadow-xl">
                        <Image
                            src={heroImageUrl}
                            alt={`${title} film rolls`}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 75vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    </motion.div>

                    {/* Overview */}
                    <div className=" py-6">
                        <motion.div variants={itemVariants}>
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
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
                            {/* Performance Properties */}
                            {performanceProperties.length > 0 && (<div>
                                <motion.div variants={itemVariants}>

                                    <div className="flex gap-2  py-6 pb-4">
                                        {/* <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" /> */}
                                        <h3 className="lato-700 text-[20px] sm:text-[24px] text-[#117ABA]">
                                            Performance Properties
                                        </h3>
                                    </div>
                                    <ul className="space-y-1">
                                        {performanceProperties.map((prop, i) => (
                                            <motion.li
                                                key={prop}
                                                variants={itemVariants}
                                                custom={i}
                                                className="flex items-start gap-3 text-black"
                                            >
                                                <span className="text-black lato-400 text-xl leading-none mt-1">•</span>
                                                <span className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">{prop}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            )}


                            {/* Applications */}
                            {applications.length > 0 && (<div>

                                <motion.div variants={itemVariants}>

                                    <div className="flex gap-2  py-6 pb-4">
                                        {/* <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" /> */}
                                        <h3 className="lato-700 text-[20px] sm:text-[24px] text-[#117ABA]">
                                            Applications
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-2">
                                        {applications.map((app, i) => (
                                            <motion.div
                                                key={app}
                                                variants={cardVariants}
                                                custom={i}
                                                whileHover={{ scale: 1.03, y: -4 }}
                                                className={`
        flex flex-col items-center justify-center text-center
         h-[60px]  
        px-4 py-4 sm:px-5 sm:py-0
        bg-[#F9F9F9] hover:bg-blue-50
        text-black 
        text-[13px] sm:text-[12px] 
        leading-tight lato-400
        transition-all duration-200
      `}
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
                            <div className="">
                                <div className="flex gap-2  py-6">
                                    {/* <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" /> */}
                                    <h3 className="lato-400 text-[20px] md:text-[24px] text-[#117ABA]">
                                        Special Innovations
                                    </h3>
                                </div>

                                <div className="space-y-3 py-1">
                                    {innovations.map((item) => {
                                        const isOpen = openInnovation === item.title;
                                        const description = Array.isArray(item.description)
                                            ? item.description
                                            : [item.description];

                                        return (
                                            <div
                                                key={item.title}
                                                className="bg-[#F9F9F9] overflow-hidden  "
                                            >
                                                <button
                                                    onClick={() => setOpenInnovation(isOpen ? null : item.title)}
                                                    className="border-white border-[1px] w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-3 text-left hover:bg-gray-50 transition-colors"
                                                    aria-expanded={isOpen}
                                                >
                                                    <h3 className="lato-700 text-[15px] sm:text-[16px] md:text-[18px] text-[#117ABA] pr-4 leading-tight">
                                                        {item.title}
                                                    </h3>

                                                    <motion.button
                                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm "
                                                    >
                                                        <ChevronDown className="w-3 h-3 text-white" />
                                                    </motion.button>
                                                </button>

                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 ">
                                                                <div className="lato-400 text-[14px] sm:text-[15px] md:text-[16px] text-black space-y-2.5 whitespace-pre-line leading-relaxed">
                                                                    {description.map((text, idx) => (
                                                                        <p key={idx}>{text}</p>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* CTA */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center justify-center gap-5 pt-6"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#117ABA] text-white px-4 py-2 rounded-sm lato-700 hover:bg-[#117ABA] transition-all shadow-md"
                            >
                                Learn More
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#117ABA] text-white px-4 py-2 rounded-sm lato-700 hover:bg-[#117ABA] transition-all shadow-md"
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