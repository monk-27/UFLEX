
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

  // Now we store only ONE open group at a time (or null if all closed)
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleGroup = (groupName: string) => {
    setOpenGroup((prev) => (prev === groupName ? null : groupName));
  };

  const groupedCategories = [
    {
      group: "Inks",
      items: categories.filter((c) =>
        ["water-based-inks", "solvent-based-inks", "radiation-curable-inks"].includes(
          c.productKey!
        )
      ),
    },
    {
      group: "Adhesives",
      items: categories.filter((c) =>
        ["water-based-adhesives", "solvent-free-adhesives", "solvent-based-adhesives"].includes(
          c.productKey!
        )
      ),
    },
    {
      group: "Coatings",
      items: categories.filter((c) =>
        ["water-based-coatings", "solvent-based-coatings", "radiation-curable-coatings"].includes(
          c.productKey!
        )
      ),
    },
    {
      group: "Specialty Chemicals",
      items: categories.filter((c) => c.productKey === "pu-ink-binders"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Desktop – single open group accordion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white overflow-hidden hidden lg:block sticky top-6 rounded-sm"
          >
            <div className="bg-[#117ABA] text-white px-6 py-5 rounded-t-lg">
              <h2 className="text-lg lato-700 tracking-wide">Product Categories</h2>
            </div>

            <nav className="divide-y divide-gray-100">
              {groupedCategories.map((group) => {
                const isOpen = openGroup === group.group;
                const hasItems = group.items.length > 0;

                return (
                  <div key={group.group}>
                    <button
                      onClick={() => hasItems && toggleGroup(group.group)}
                      className={`
                        w-full flex items-center justify-between 
                        px-6 py-3.5 bg-gray-50 text-[18px] sm:text-[22px] 
                        text-gray-800 lato-400 hover:bg-gray-100 transition-colors
                        ${hasItems ? "cursor-pointer" : "cursor-default"}
                      `}
                    >
                      <span>{group.group}</span>
                      {hasItems && (
                        <ChevronDown
                          size={22}
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                            }`}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {group.items.map((cat) => (
                            <motion.button
                              key={cat.name}
                              onClick={cat.onClick}
                              whileTap={{ scale: 0.98 }}
                              className={`
                                w-full flex items-center justify-between px-10 py-3.5
                                text-left transition-colors
                                hover:bg-[#F9F9F9]
                                ${cat.isActive
                                  ? "bg-gray-50 text-[#117ABA] lato-400"
                                  : "text-black lato-400"
                                }
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </motion.div>

          {/* Mobile version – kept as simple expand-all for now */}
          {/* Mobile grouped accordion – now with single open group */}
          <div className="lg:hidden bg-white overflow-hidden border border-gray-200 rounded-lg">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-full flex items-center justify-between bg-[#117ABA] text-white px-6 py-5 text-[16px] sm:text-[18px] rounded-t-lg"
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
                  {groupedCategories.map((group) => {
                    const isOpen = openGroup === group.group;
                    const hasItems = group.items.length > 0;

                    return (
                      <div key={group.group}>
                        <button
                          onClick={() => hasItems && toggleGroup(group.group)}
                          className={`
                  w-full flex items-center justify-between px-6 py-3.5 
                  bg-gray-50 text-gray-800 font-medium text-[16px] 
                  hover:bg-gray-100 transition-colors
                  ${hasItems ? "cursor-pointer" : "cursor-default"}
                `}
                        >
                          <span>{group.group}</span>
                          {hasItems && (
                            <ChevronDown
                              size={20}
                              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                }`}
                            />
                          )}
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              {group.items.map((cat) => (
                                <motion.button
                                  key={cat.name}
                                  onClick={() => {
                                    cat.onClick?.();
                                    // Optional: close mobile menu after selecting a category
                                    // setIsMobileOpen(false);
                                  }}
                                  className={`
                          w-full flex items-center justify-between px-10 py-4
                          text-left transition-colors
                          hover:bg-gray-50
                          ${cat.isActive
                                      ? "bg-[#E6F0FA] text-[#117ABA]"
                                      : "text-gray-700"
                                    }
                        `}
                                >
                                  <span className="pl-2 text-[15px]">{cat.name}</span>
                                  {cat.isActive && (
                                    <ChevronRight size={16} className="text-[#117ABA]" />
                                  )}
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </aside>

        {/* Main Content – unchanged */}
        <motion.main
          key={title}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="lg:col-span-3 pb-12"
        >
          {overview && (
            <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-gray-800 max-w-4xl mb-10">
              {overview}
            </p>
          )}

          {sections.length > 0 && (
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-48 w-full bg-gray-100">
                      <Image
                        src={section.image}
                        alt={section.name}
                        fill
                        className="object-cover"
                      />
                    </div>
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