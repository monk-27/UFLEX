// components/ProductCategorySection.tsx
"use client";

import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

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
    overview?: string;
    highlightText?: string | string[];
    bulletList?: string[];
    learnlink?: string
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
    learnlink = "",
    bulletList = [],
    highlightText = "",
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
    const router = useRouter();
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
                    <div className=" py-6 space-y-6">
                        <motion.div variants={itemVariants}>
                            {title?.toLowerCase() != "flexitubes" &&
                                (
                                    <div className="flex gap-2">
                                {/* <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" /> */}
                                <h3 className="lato-700 text-[20px] sm:text-[24px] text-[#117ABA]">
                                    Overview
                                </h3>
                            </div>
                            
                                )
                            }

                            {highlightText && (
                                <div className="mt-4 bg-[#117ABA] text-white px-4 py-3 lato-700 text-[16px] sm:text-[18px]">
                                    {highlightText}
                                </div>
                            )}

                            {/* BULLET LIST */}
                            {bulletList && bulletList.length > 0 && (
                                <ul className="mt-4 list-disc pl-6 space-y-3">
                                    {bulletList.map((item, i) => (
                                        <li
                                            key={i}
                                            className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#2f2f2f]"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>


                        {title?.toLowerCase() === "flexitubes" && (
                            <div className="space-y-8">

                                {/* IMAGE BLOCK */}
                                {/* <div className="border border-[#117ABA] rounded-sm p-3">
                                    <Image
                                        src="https://www.uflexltd.com/assets/images/packaging/flexi-tubes.jpg" // replace with actual image path
                                        alt="FlexiTubes Overview"
                                        width={900}
                                        height={420}
                                        className="w-full object-contain"
                                    />
                                </div> */}

                                {/* PRIME FEATURES */}
                                <div>
                                    <div className="flex gap-2">
                                        {/* <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" /> */}
                                        <h3 className="lato-400 text-[20px] md:text-[24px] text-[#117ABA]">
                                            Prime Features
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-[15px] text-[#2f2f2f]">
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Anti-Counterfeit features</li>
                                            <li>Lens on Front Panel</li>
                                            <li>Holographic Effects</li>
                                            <li>Excellent Brand differentiation / Visibility</li>
                                            <li>Reverse printing – infinite graphics</li>
                                            <li>Uninterrupted 360 degree & Top to Bottom Printing</li>
                                            <li>Customized Thickness & Barrier Substrate</li>
                                            <li>Range of 175u to 350µ</li>
                                            <li>Aluminium, EVOH, Nylon & Combination of all</li>
                                        </ul>

                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Deco seam Technology</li>
                                            <li>Zero Overlap</li>
                                            <li>Invisible Seam</li>
                                            <li>Barrier Seam</li>
                                            <li>Enhanced Product Quality</li>
                                            <li>Dual Barrier</li>
                                            <li>Seal strength</li>
                                            <li>Burst strength</li>
                                            <li>Unmatched Stiffness / Bounce Back</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* A MUST FOR SEGMENTS */}
                                <div>
                                    <div className="flex gap-2">
                                        {/* <span className="mt-1 h-6 w-[4px] rounded-full bg-[#117ABA]" /> */}
                                        <h3 className="lato-400 text-[20px] md:text-[24px] text-[#117ABA]">
                                            A must for Segments
                                        </h3>
                                    </div>

                                    <div className="bg-[#117ABA] text-white px-4 py-3 mb-4 text-[15px] lato-700">
                                        We offer Flexi Tubes in different diameters and combinations for use in:
                                    </div>

                                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-[#2f2f2f]">
                                        <li><strong>Beauty:</strong> Face Wash, Face Scrub, Fairness Cream, Face Mask, Face Pack, Lip Colorant, Lip Balm</li>
                                        <li><strong>Personal Grooming:</strong> Shaving Cream, Hair Remover</li>
                                        <li><strong>Hair Care:</strong> Hair Cream, Hair Gel, Hair Colorant</li>
                                        <li><strong>Pharmaceutical:</strong> Cosme Pharma, Derma Care, Other Pharma OTC and Non OTC products</li>
                                        <li><strong>Traditional & Custom Applications:</strong> Henna Paste</li>
                                        <li><strong>Oral Care:</strong> Niche Products, Prescribed Products</li>
                                    </ul>
                                </div>



                            </div>
                        )}

                        {title?.toLowerCase() === "premium shower proof bag" && (
                            <div className="space-y-6">

                                {/* Overview text */}
                                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                                    An excellent example of packaging innovation at its best; UFlex presents a
                                    winner in building material packaging due to excellence in technological
                                    advancements. With the impressive use of nano technology to address
                                    multiple industry challenges such as preventing waste, enhancing brand
                                    equity, and increasing worker safety. UFlex has set an example of the use
                                    of sophisticated technology in an emerging region.
                                </p>

                                {/* Key Features bar */}
                                <div className="bg-[#117ABA] text-white px-4 py-3 lato-700 text-[16px] sm:text-[18px]">
                                    Key features:
                                </div>

                                {/* Features list */}
                                <ul className="list-disc pl-6 space-y-3 lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#2f2f2f]">
                                    <li>
                                        Specialized printing up to 8 colours, capable of printing Half Tone
                                        images/Vignettes with high definition graphics and high gloss finish.
                                    </li>
                                    <li>The bag is scratch proof.</li>
                                    <li>
                                        No Water Ingress as – evident by conducting a “Shower Test” thereby
                                        increasing Shelf Life of the product. This eliminates lumping in areas
                                        of high relative humidity.
                                    </li>
                                    <li>
                                        Nano perforation reduces product loss due to oozing leading to reduced
                                        environmental pollution & lesser product loss.
                                    </li>
                                    <li>Excellent Anti Counterfeit features.</li>
                                    <li>Tamper Proof Bags.</li>
                                    <li>Polypropylene based Multi Component Block Bottom Bags.</li>
                                </ul>

                            </div>
                        )}


                        {title?.toLowerCase() === "six layered cotton n95 mask" && (
                            <div className="space-y-6">

                                {/* Red highlight bar */}
                                <div className="bg-[#117ABA] text-white px-4 py-3 lato-700 text-[16px] sm:text-[18px]">
                                    We offer Safety solutions Products for use in:
                                </div>

                                {/* Blue heading */}
                                <h4 className="text-[#117ABA] lato-700 text-[16px] sm:text-[18px]">
                                    Developed Six-layered Cotton N95 Mask to Prevent COVID Spread
                                </h4>

                                {/* Description paragraph */}
                                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                                    The company responded with innovative pivot to its line of business by
                                    venturing into manufacturing of safety solutions like N95 Masks. These
                                    are 6-layered personal protection masks without valve which are capable
                                    of filtering out bacteria and other particles greater than 0.3
                                    micrometre so that the wearer can protect themselves from respiratory
                                    diseases. UFlex N95 masks have greater resistance against splashes and
                                    strong resistance against PM 2.5. The raw material, which is
                                    indigenously manufactured, provides best safety from harmful bacteria
                                    and virus.
                                </p>

                                {/* Image container (you can wire actual images later) */}
                                <div className=" p-1 grid grid-cols-1 md:grid-cols-2 gap-2">

                                    <div className="relative h-[380px] bg-gray-100 border-2 border-[#117ABA]">
                                        <Image
                                            src="https://www.uflexltd.com/assets/images/packaging/UFlex_N95_Masks_3.jpg"
                                            alt={title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                    <div className="relative h-[380px] bg-gray-100 border-2 border-[#117ABA]">
                                        <Image
                                            src="https://www.uflexltd.com/assets/images/packaging/UFlex_N95_Masks_4.jpg"
                                            alt={title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                    <div className="relative h-[380px] bg-gray-100 border-2 border-[#117ABA]">
                                        <Image
                                            src="https://www.uflexltd.com/assets/images/packaging/UFlex_N95_Masks_1.jpg"
                                            alt={title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                    <div className="relative h-[380px] bg-gray-100 border-2 border-[#117ABA]">
                                        <Image
                                            src="https://www.uflexltd.com/assets/images/packaging/UFlex_N95_Masks_2.jpg"
                                            alt={title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                </div>


                                {/* Bullet points */}
                                <ul className="list-disc pl-6 space-y-3 lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#2f2f2f]">
                                    <li>
                                        Masks are 6 layered Masks with 2 layers of Melt blown Fabric ( Both
                                        Poly Propylene and Cotton fabric )
                                    </li>
                                    <li>Certified by BIS and DRDO</li>
                                    <li>Particle filtration efficiency &gt; 95%</li>
                                    <li>Bacterial filtration efficiency &gt; 95%</li>
                                    <li>
                                        Available in multiple colors like white, orange, red, red check,
                                        Light Gray, blue, purple
                                    </li>
                                    <li>Breathability Parameter &gt;97%</li>
                                    <li>Available in Ear Loop and Head Loop Options</li>
                                </ul>

                                {/* CTA buttons */}
                                <div className="flex flex-wrap gap-4 pt-4">

                                    <button className="bg-[#117ABA] text-white px-5 py-2 rounded-full text-sm lato-700">
                                        <a href="https://www.uflexltd.com/pdf/UFlex_N95_Masks_Technical_Specifications.pdf" target="_blank">

                                            N95 Masks' Technical Specifications
                                        </a>
                                    </button>
                                    <button className="bg-[#117ABA] text-white px-5 py-2 rounded-full text-sm lato-700">
                                        <a href="https://www.uflexltd.com/pdf/UFlex_N95_Masks_Layer_Wise_Properties.pdf" target="_blank">

                                            N95 Masks' Layer Wise Properties

                                        </a>
                                    </button>
                                </div>

                            </div>
                        )}


                        {title?.toLowerCase() === "injection moulding products" && (
                            <div className="space-y-6">

                                {/* Overview paragraph */}
                                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                                    The operations for Moulding Business started in the year 2017 with the aim
                                    of building Injection Moulded products of Flexible Packaging as well as
                                    other industries like Electricals, Auto, Home appliances, Industrial,
                                    Medical etc. The unit now supplies plastic packaging products like caps,
                                    spouts, tube caps, shoulders, zippers and sliders etc. to other businesses
                                    of UFlex well as external customers including well-known brands such as ITC.
                                </p>

                                {/* Quote block 1 */}
                                <div className=" pl-4 italic lato-400 text-[16px] sm:text-[18px] text-black">
                                    Our avant-garde Moulding plant Noida is equipped with world-class machines
                                    including Injection Moulding Machines from manufacturers like Arburg,
                                    Toshiba and Milacron; and has an able technical workforce that caters to
                                    brands in India and beyond.
                                </div>

                                {/* Paragraph */}
                                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                                    Machine capacities available are of 150 Tons, 180 Tons and 250 Tons. The
                                    unit comes armed with capabilities to make all moulding products
                                    biodegradable (enzymes based) also. It has its own well equipped Quality
                                    Lab with required testing equipment for plastic products where inspection
                                    & testing is performed under the guidance of a highly skilled team.
                                </p>

                                {/* Quote block 2 */}
                                <div className=" pl-4 italic lato-400 text-[16px] sm:text-[18px] text-black">
                                    We, at UFlex, provide customized range of Precision Plastic Components for
                                    various segments like Packaging, Industrial, Electrical, Automobile,
                                    Medical and Home Appliances using the latest technology and well-equipped
                                    machinery at competitive price.
                                </div>

                                {/* Red bar */}
                                <div className="bg-[#117ABA] text-white px-4 py-3 lato-700 text-[16px] sm:text-[18px]">
                                    We offer Range of Products for use in:
                                </div>

                                {/* Section 1 */}
                                <h4 className="text-[#117ABA] lato-700 text-[16px] sm:text-[18px]">
                                    1) Various types of Caps and Spouts used for Different types of Pouches
                                </h4>

                                <div className="border-2 border-[#117ABA] p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative h-[240px] ">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_Pouches_1.jpg" alt={title} fill className="object-contain" />
                                    </div>
                                    <div className="relative h-[240px] ">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_Pouches_2.jpg" alt={title} fill className="object-contain" />
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <h4 className="text-[#117ABA] lato-700 text-[16px] sm:text-[18px]">
                                    2) Various sizes and types of Caps/ Shoulders used for Tubes
                                </h4>

                                <div className="border-2 border-[#117ABA] p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative h-[240px] bg-[#f2eded]">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_Tubes_1.jpg" alt={title} fill className="object-contain" />
                                    </div>
                                    <div className="relative h-[240px] bg-[#f2eded]">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_Tubes_2.jpg" alt={title} fill className="object-contain" />
                                    </div>


                                    <div className="relative h-[240px] bg-[#f2eded]">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_Tubes_3.jpg" alt={title} fill className="object-contain" />
                                    </div>
                                    <div className="relative h-[240px] bg-[#f2eded]">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_Tubes_4.jpg" alt={title} fill className="object-contain" />
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <h4 className="text-[#117ABA] lato-700 text-[16px] sm:text-[18px]">
                                    3) Various range of Zippers and sliders
                                </h4>

                                <div className="border-2 border-[#117ABA] p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative h-[240px] bg-black">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_Zippers_1.jpg" alt={title} fill className="object-contain" />
                                    </div>
                                    <div className="relative h-[240px] bg-black">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_Zippers_2.jpg" alt={title} fill className="object-contain" />
                                    </div>
                                    <div className="relative h-[240px] bg-black">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_Zippers_3.jpg" alt={title} fill className="object-contain" />
                                    </div>
                                    <div className="relative h-[240px] bg-black">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_Zippers_4.jpg" alt={title} fill className="object-contain" />
                                    </div>
                                </div>

                                {/* Section 4 */}
                                <h4 className="text-[#117ABA] lato-700 text-[16px] sm:text-[18px]">
                                    4) Core plug used for film rolls
                                </h4>

                                <div className="border-2 border-[#117ABA] p-4">
                                    <div className="relative h-[260px] bg-[#f2eded]">
                                        <Image src="https://www.uflexltd.com/assets/images/packaging/IMP/UFLEX_Moulded_Products_FilmRolls_1.jpg" alt={title} fill className="object-contain" />
                                    </div>
                                </div>

                                {/* Footer link */}
                                <p className="text-[15px] text-[#2f2f2f]">
                                    👉 To Know More About Injection Moulding Products, Visit UFlex Moulding Website :
                                    <a
                                        href="https://www.uflexmoulding.com"
                                        target="_blank"
                                        className="text-[#117ABA] ml-1 underline"
                                    >
                                        www.uflexmoulding.com
                                    </a>
                                </p>

                            </div>
                        )}






                        {/* CTA */}
                        <motion.div
                            variants={itemVariants}
                            className="flex gap-5 pt-6"
                        >
                            {
                                learnlink && (
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-[#117ABA] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#117ABA] transition-all shadow-md"
                                    >
                                        <a

                                            target="_blank"
                                            href={learnlink}
                                        // onClick={
                                        //     () => {
                                        //         router.push(`${learnlink}`)
                                        //     }
                                        // }
                                        >
                                            Learn More ↗
                                        </a>
                                    </motion.div>
                                )
                            }

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="border-2 border-[#117ABA] text-[#117ABA] px-4 py-2 rounded-xl font-semibold hover:bg-blue-50 transition-all"
                            >
                                Request Sample
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#117ABA] text-white px-4 py-2 rounded-sm lato-700 hover:bg-[#117ABA] transition-all shadow-md"

                            >
                                Download Catalogue
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.main>
            </div>
        </section>
    );
}