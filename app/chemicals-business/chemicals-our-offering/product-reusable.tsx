
// "use client";

// import Image from "next/image";
// import { ChevronRight, ChevronDown } from "lucide-react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface Category {
//   name: string;
//   productKey?: string;
//   isActive?: boolean;
//   onClick?: () => void;
// }

// interface Section {
//   name: string;
//   description: string;
// }

// interface ProductCategorySectionProps {
//   title: string;
//   heroImageUrl: string;
//   overview: string;
//   categories: Category[];
//   sections?: Section[];           // ← NEW: for sub-products
// }

// export default function ProductCategorySection({
//   title,
//   heroImageUrl,
//   overview = "",
//   categories = [],
//   sections = [],
// }: ProductCategorySectionProps) {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Sidebar */}
//         <aside className="lg:col-span-1">
//           {/* Desktop Sidebar */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white overflow-hidden hidden lg:block sticky top-20"
//           >
//             <div className="rounded-xl border border-gray-200 shadow-sm">
//               <div className="bg-[#117ABA] text-white px-6 py-5 rounded-t-xl">
//                 <h2 className="text-lg lato-700 tracking-wide">PRODUCT CATEGORIES</h2>
//               </div>

//               <nav className="divide-y divide-gray-100">
//                 {categories.map((category) => (
//                   <motion.button
//                     key={category.name}
//                     onClick={() => {
//                       category.onClick?.();
//                       // Optional: close mobile if needed (already handled)
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     className={`
//                       w-full flex items-center justify-between px-6 py-4
//                       text-left transition-all duration-200
//                       hover:bg-blue-50
//                       ${category.isActive
//                         ? "bg-blue-50 border-l-4 border-[#117ABA] text-[#117ABA] font-medium"
//                         : "text-gray-800 border-l-4 border-transparent"
//                       }
//                     `}
//                   >
//                     <span className="lato-400 text-[16px] sm:text-[18px] leading-relaxed">
//                       {category.name}
//                     </span>
//                     <ChevronRight
//                       size={18}
//                       className={`transition-transform duration-300 ${
//                         category.isActive ? "rotate-90 text-[#117ABA]" : "text-gray-400"
//                       }`}
//                     />
//                   </motion.button>
//                 ))}
//               </nav>
//             </div>
//           </motion.div>

//           {/* Mobile Accordion */}
//           <div className="lg:hidden bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
//             <button
//               onClick={() => setIsMobileOpen(!isMobileOpen)}
//               className="w-full flex items-center justify-between bg-[#117ABA] text-white px-6 py-5 lato-400 text-[16px] sm:text-[18px]"
//             >
//               <span>PRODUCT CATEGORIES</span>
//               {isMobileOpen ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
//             </button>

//             <AnimatePresence>
//               {isMobileOpen && (
//                 <motion.nav
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="divide-y divide-gray-100">
//                     {categories.map((category) => (
//                       <button
//                         key={category.name}
//                         onClick={() => {
//                           category.onClick?.();
//                           setIsMobileOpen(false); // close after selection
//                         }}
//                         className={`
//                           w-full flex items-center justify-between px-6 py-4
//                           text-left transition-colors
//                           ${category.isActive
//                             ? "bg-blue-50 text-[#117ABA] border-l-4 border-[#117ABA]"
//                             : "text-gray-800 hover:bg-gray-50"
//                           }
//                         `}
//                       >
//                         <span className="lato-400 text-[16px] leading-relaxed">
//                           {category.name}
//                         </span>
//                       </button>
//                     ))}
//                   </div>
//                 </motion.nav>
//               )}
//             </AnimatePresence>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <motion.main
//           key={title}
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="lg:col-span-3 space-y-10"
//         >
//           {/* Hero Image (optional per category) */}
//           {heroImageUrl && (
//             <motion.div
//               variants={itemVariants}
//               className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
//             >
//               <Image
//                 src={heroImageUrl}
//                 alt={title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
//               <div className="absolute bottom-6 left-6 text-white">
//                 <h1 className="text-3xl md:text-4xl font-bold lato-700 mb-2">{title}</h1>
//               </div>
//             </motion.div>
//           )}

//           {/* Overview */}
//           {overview && (
//             <motion.div variants={itemVariants} className="prose max-w-none">
//               <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-gray-800">
//                 {overview}
//               </p>
//             </motion.div>
//           )}

//           {/* Sub-products / Sections */}
//           {sections.length > 0 && (
//             <motion.div variants={itemVariants} className="space-y-8">
//               <div className="flex items-center gap-3">
//                 <div className="h-8 w-1.5 bg-[#117ABA] rounded-full" />
//                 <h2 className="text-2xl md:text-3xl lato-700 text-[#117ABA]">
//                   Products
//                 </h2>
//               </div>

//               <div className="grid gap-6">
//                 {sections.map((section, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.08 }}
//                     className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
//                   >
//                     <h3 className="text-xl lato-700 text-gray-900 mb-3">
//                       {section.name}
//                     </h3>
//                     <p className="lato-400 text-[15px] sm:text-[17px] leading-relaxed text-gray-700">
//                       {section.description}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </motion.main>
//       </div>
//     </section>
//   );
// }
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

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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

                        {/* {quickLinks.length > 0 && (
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
                                                
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )} */}
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
                    {/* {quickLinks.length > 0 && (
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
                                                   
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </ul>
                        </div>
                    )} */}
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
                <h2 className="text-[18px] md:text-[24px] lato-700 text-gray-900">Products</h2>
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