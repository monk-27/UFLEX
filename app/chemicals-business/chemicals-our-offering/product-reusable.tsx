
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

interface Section {
  name: string;
  image: string;
  description: string;
}

interface ProductCategorySectionProps {
  title: string;
  overview: string;
  categories: Category[];
  sections?: Section[];
}

export default function ProductCategorySection({
  title,
  overview = "",
  categories = [],
  sections = [],
}: ProductCategorySectionProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  // Inside ProductCategorySection function, before return:
  const groupedCategories = [
    {
      group: "Inks",
      items: categories.filter(c =>
        ["water-based-inks", "solvent-based-inks", "radiation-curable-inks"].includes(c.productKey!)
      ),
    },
    {
      group: "Coatings",
      items: categories.filter(c =>
        ["water-based-coatings", "solvent-based-coatings", "radiation-curable-coatings"].includes(c.productKey!)
      ),
    },
    {
      group: "Adhesives",
      items: categories.filter(c =>
        ["water-based-adhesives", "solvent-free-adhesives", "solvent-based-adhesives"].includes(c.productKey!)
      ),
    },
    {
      group: "Specialty Chemicals",
      items: categories.filter(c => c.productKey === "pu-ink-binders"),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Desktop grouped sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white overflow-hidden hidden lg:block sticky top-6"
          >
            <div className="bg-[#117ABA] text-white px-6 py-5">
              <h2 className="text-lg lato-700 tracking-wide">PRODUCT CATEGORIES</h2>
            </div>

            <nav className="divide-y divide-gray-100">
              {groupedCategories.map((group) => (
                <div key={group.group} className="mb-1">
                  <div className="px-6 py-3 bg-gray-50 text-[18px] sm:text-[22px] text-gray-800 lato-700">
                    {group.group}
                  </div>
                  {group.items.map((cat) => (
                    <motion.button
                      key={cat.name}
                      onClick={cat.onClick}
                      whileTap={{ scale: 0.98 }}
                      className={`
                w-full flex items-center justify-between px-10 py-3.5
                text-left transition-colors
                hover:bg-[#F9F9F9]
                ${cat.isActive ? "bg-gray-50 text-[#117ABA] lato-400" : "text-black lato-400"}
              `}
                    >
                      <span className="pl-2 text-[15px] sm:text-[16px] lato-400">
                        {cat.name}
                      </span>
                      
                    <ChevronRight
                      size={18}
                      className={`
        transition-transform duration-300
        ${cat.isActive ? "rotate-90 text-[#117ABA]" : "text-gray-500"}
      `}
                    />
                    </motion.button>
                  ))}
                </div>
              ))}
            </nav>
          </motion.div>

          {/* Mobile grouped accordion */}
          <div className="lg:hidden bg-white overflow-hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-full flex items-center justify-between bg-[#117ABA] text-white px-6 py-5 text-[16px] sm:text-[18px]"
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
                  className="overflow-hidden divide-y divide-gray-100"
                >
                  {groupedCategories.map((group) => (
                    <div key={group.group}>
                      <div className="px-6 py-3 bg-gray-50 font-medium text-gray-800">
                        {group.group}
                      </div>
                      {group.items.map((cat) => (
                        <motion.button
                          key={cat.name}
                          onClick={cat.onClick}
                          className={`
                    w-full flex items-center justify-between px-10 py-4
                    text-left hover:bg-gray-50
                    ${cat.isActive ? "bg-[#E6F0FA] text-[#117ABA]" : "text-gray-700"}
                  `}
                        >
                          <span className="pl-2 text-[15px]">{cat.name}</span>
                          {cat.isActive && <ChevronRight size={16} className="text-[#117ABA]" />}
                        </motion.button>
                      ))}
                    </div>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </aside>

        {/* Main Content */}
        <motion.main
          key={title}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="lg:col-span-3 pb-12"
        >
          {/* Title */}
          {/* <h1 className="text-3xl md:text-4xl lato-700 text-[#117ABA]">{title}</h1> */}

          {/* Overview */}
          {overview && (
            <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-gray-800 max-w-4xl">
              {overview}
            </p>
          )}

          {/* Products Grid */}
          {sections.length > 0 && (
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                {/* <div className="h-8 w-1.5 bg-[#117ABA] rounded-full" /> */}
                {/* <h2 className="text-[18px] md:text-[24px] lato-700 text-gray-900">Products</h2> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                  >
                    {/* Product Image */}
                    <div className="relative h-48 w-full bg-gray-100">
                      <Image
                        src={section.image}
                        alt={section.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl lato-700 text-gray-900 mb-3 line-clamp-2">
                        {section.name}
                      </h3>
                      <p className="lato-400 text-[15px] leading-relaxed text-gray-700 flex-grow">
                        {section.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.main>
      </div>
    </section>
  );
}