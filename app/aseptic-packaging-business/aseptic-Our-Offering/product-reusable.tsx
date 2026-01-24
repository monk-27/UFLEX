
"use client";

import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductCategorySection(props: any) {
  const {
    title,
    heroImageUrl,
    brandTag,
    overview,
    quickLinks = [],
    categories = [],
    whyAsip,
    keyFeatures = [],
    technology,
  } = props;

  const [activeTab, setActiveTab] = useState<"cartons" | "innovations" | "process">("cartons");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isAsepticCartons = title === "Aseptic Cartons";
  const isASip = title === "A SIP";
  const isFillingMachines = title === "Filling Machines";
  const isAseptoPro = title === "Asepto Pro";
  const isAseptoDesign = title === "Asepto Design";


  const shapeImageMap: Record<string, string> = {
    "BASE": "/images/aseptic/base.png",
    "SLIM": "/images/aseptic/slim.png",
    "ULTRA LEAN": "/images/aseptic/ulytralean.png",
    "SQUARE": "/images/aseptic/square.png",
    "CURVE": "/images/aseptic/curve.png",
    "WEDGE": "/images/aseptic/wedge.png",
    "TRIO": "/images/aseptic/trio.png",
    "PILLOW": "/images/aseptic/pillow.png",
    "SPECTRA": "/images/aseptic/spectra.png",
    "MID": "/images/aseptic/mid.png",
  };

  const foilStamps: any = [
    {
      name: "Gold Foil Stamp",
      image: "/images/aseptic/gold.png",
    },
    {
      name: "Green Foil Stamp",
      image: "/images/aseptic/green.png",
    },
    {
      name: "Red Foil Stamp",
      image: "/images/aseptic/red.png",
    },
    {
      name: "Silver Foil Stamp",
      image: "/images/aseptic/gray.png",
    },
  ];

  const Stamps: any = [
    {
      name: "Cracked Ice Holography",
      image: "/images/aseptic/cracked.png",
    },
    {
      name: "Multi Lens Holography",
      image: "/images/aseptic/multi.png",
    },
    {
      name: "Pillar of Light Holography",
      image: "/images/aseptic/pillar.png",
    },
    {
      name: "Sparkle Holography",
      image: "/images/aseptic/sparkle.png",
    },
  ];

  const [openSections, setOpenSections] = useState<any>({
    carePro: false,
    maxPro: false,
    ultraPro: false,
  });

  const toggleSection: any = (section: any) => {
    setOpenSections((prev: any) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const [openSection, setOpenSection] = useState({
    briefing: false,
    ideation: false,
    design: false,
  });

  const toggleSections = (key: any) => {
    setOpenSection((prev: any) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const topRow = ["BASE", "SLIM", "ULTRA LEAN", "SQUARE", "CURVE"];
  const bottomRow = ["WEDGE", "TRIO", "PILLOW", "SPECTRA", "MID"];
  return (
    <section className="py-10 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left sidebar */}
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
                    {categories.map((category: any) => (
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

        {/* Main content */}
        <motion.main key={title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:col-span-3 space-y-10 pb-8">



          {/* Aseptic Cartons 3-tab layout */}
          {isAsepticCartons ? (
            <div className="space-y-12">
              <div className="relative h-[388px] overflow-hidden bg-[#8BB2C1]">
                <Image src={heroImageUrl} alt="Aseptic Cartons" fill className="object-cover" priority />
              </div>
              {/* Tabs */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab("cartons")}
                  className={`px-10 py-5 rounded-lg font-medium text-lg transition-all ${activeTab === "cartons" ? "bg-[#117ABA] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  ASEPTIC CARTONS
                </button>
                <button
                  onClick={() => setActiveTab("innovations")}
                  className={`px-10 py-5 rounded-lg font-medium text-lg transition-all ${activeTab === "innovations" ? "bg-[#117ABA] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  OUR INNOVATIONS
                </button>
                <button
                  onClick={() => setActiveTab("process")}
                  className={`px-10 py-5 rounded-lg font-medium text-lg transition-all ${activeTab === "process" ? "bg-[#117ABA] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  CONVERTING PROCESS
                </button>
              </div>

              {/* Tab 1: ASEPTIC CARTONS */}
              {activeTab === "cartons" && (
                <div className="bg-white space-y-12">
                  <div>
                    <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Explore our Packaging Solutions</h2>
                    <p className="text-lg leading-relaxed text-gray-800 mb-8">
                      Asepto innovatively incorporates the 3P's of Packaging - PRESERVE, PROTECT and PROMOTE. Our aseptic liquid packaging cartons encompass six layers of protection that keeps the freshness preserved in varieties of beverages, be it dairy and dairy-based beverages, nectar-based beverages, or beverages from the distillery industry. We augment your product positioning through innovative design aesthetics. Our state-of-the-art converting process and manufacturing facilities help us materialize our thoughts into reality. They are advanced, automated, and human-touch-free.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#117ABA] mb-6">Shapes we offer</h3>
                    <p className="text-lg leading-relaxed text-gray-800 mb-8">
                      Asepto offers a complete range of on-the-go packs and in-home consumption packs in all shapes and dimensions that our customers and consumers asks. Our aseptic liquid cartons address two important aspects – what is suitable to the customers and consumers, and how innovatively the branding can be done.
                    </p>

                    {/* Shapes with connecting lines */}
                    <div className="relative py-12">
                      {/* Horizontal line between rows */}
                      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[#117ABA] transform -translate-y-1/2 hidden md:block" />

                      {/* Combined grid for both rows */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 auto-rows-fr">
                        {[...topRow, ...bottomRow].map((shape, index) => (
                          <div
                            key={shape}
                            className="relative text-center border-r border-[#117ABA] last:border-r-0 md:border-r md:last:border-r-0"
                          >
                            {/* Vertical line - only on desktop, between columns */}
                            {index % 5 !== 4 && (
                              <div className="absolute right-0 top-0 bottom-0 w-px  hidden md:block" />
                            )}

                            <div className="aspect-[3/4] relative mb-3 rounded-lg overflow-hidden  bg-white p-2">
                              <Image
                                src={shapeImageMap[shape]}
                                alt={shape}
                                fill
                                className="object-contain"
                              />
                            </div>

                            <p className="font-medium text-gray-800 text-sm md:text-base">{shape}</p>

                            {/* Horizontal line only between top and bottom row on mobile */}
                            {index === 4 && (
                              <div className="h-0.5 bg-[#117ABA] my-8 md:hidden" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 justify-start">
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Learn More</button>
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Request Sample</button>
                  </div>
                </div>
              )}

              {/* Tab 2: OUR INNOVATIONS */}
              {activeTab === "innovations" && (
                <div className="bg-white  space-y-12">
                  <div>
                    <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Our Innovations</h2>
                    <p className="text-lg leading-relaxed text-gray-800 mb-8">
                      Innovation is the essence of evolution. For a brand, the packaging is the most visible depiction of its evolution story. Packaging is your key salesperson and we at Asepto believe that "All that Glitters is Sold". Our Holography and Foil Stamping Technology are the innovation milestones in the aseptic liquid packaging industry. They add differentiating edge to your brand and make it attractive on the retail shelf.
                    </p>
                  </div>

                  {/* ASEPTO PREMIUM */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-[#117ABA]">ASEPTO PREMIUM</h3>
                    <p className="text-2xl font-bold text-[#117ABA]">Create the premium positioning for your brand.</p>

                    <p className="text-lg leading-relaxed text-gray-800">
                      Asepto Premium is a design innovation that decorates the packaging with a luxurious shiny finish to elevate the product’s aesthetic presence. This innovative technology augments the packaging with distinct adornments that demarcate the product, making it visibly impacting. Asepto Premium influences a customer’s perceived notion about the brand and encourages premium positioning. It comes with a wide range of customizable colour combinations. We encourage our clients to contact our Sales Team and ask for customizations that best suit their requirements. We are always eager to add value to our client’s journeys and experiences.
                    </p>

                    {/* Foil stamps grid - FIXED */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6">
                      {foilStamps.map((foils: any, index: number) => (
                        <div key={index} className="text-center">
                          <p className="text-start mt-3 font-medium text-[#117ABA]">{foils.name}</p>

                          <div className="relative aspect-square overflow-hidden  bg-gray-50">
                            <Image
                              src={foils.image}                     // ← FIXED: use foil.image (the string path)
                              alt={foils.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 50vw, 25vw" // helps responsiveness & performance
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ASEPTO SPARK */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-[#117ABA]">ASEPTO SPARK</h3>
                    <p className="text-2xl font-bold text-[#117ABA]">Add the spark to propel the product growth engine.</p>

                    <p className="text-lg leading-relaxed text-gray-800">
                      Asepto Spark is an outcome of a rigorous research and development process involving innovative techniques to apply holography on an aseptic liquid packaging carton. This ostentatious packaging is achieved with sparkling holographic and metallic looks, giving brands endless possibilities to give an evolutionary edge to their line of products. A product inside Asepto Spark packaging will beat the shelf competition to reach out to customers’ and consumers’ shopping lists. Asepto Spark makes the packaging ultra-attractive and exceptionally outstanding. Similar to Asepto Premium, it also comes with a wide range of customizable colour combinations and innovative design patterns. We encourage our clients to contact our Sales Team and ask for customizations that best suit their requirements. We are always eager to add value to our client’s journeys and experiences.
                    </p>

                    {/* Spark holography grid - with real images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-4">
                      {Stamps.map((foil: any, index: number) => (
                        <div key={index} className="text-center">
                          <p className="text-start mt-3 font-medium text-[#117ABA]">{foil.name}</p>

                          <div className="relative aspect-square  overflow-hidden  ">
                            <Image
                              src={foil.image}                     // ← FIXED: use foil.image (the string path)
                              alt={foil.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 50vw, 25vw" // helps responsiveness & performance
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-6 justify-start">
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Learn More</button>
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Request Sample</button>
                  </div>
                </div>
              )}

              {/* Tab 3: CONVERTING PROCESS */}
              {activeTab === "process" && (
                <div className="bg-white  space-y-12">
                  <div className="relative h-[388px] overflow-hidden">
                    <Image
                      src="/images/aseptic/3c.png"
                      alt="Six layers of protection"
                      height={388}
                      width={100}
                      className="object-contain h-[388px] w-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Packaging that keeps it all safe</h2>
                    <p className="text-lg leading-relaxed text-gray-800 mb-8">
                      Our aseptic liquid packaging cartons comprise six layers of protection that keep the beverage unexposed to the outer world, i.e., sunlight, air, moisture, etc.
                    </p>
                  </div>


                  <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">

                    {/* TEXT */}
                    <div className="text-center sm:text-left max-w-lg ">
                      <AnimatePresence mode="wait">
                        <div>
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[18px] lato-700 text-[#117ABA] md:text-[24px] "
                          >
                            Packaging that keeps it all safe
                          </motion.span>

                          <p className=" text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                            The six-layered shield helps us ensure that your product travels miles without any damage and deliver the original freshness to your consumers to add to their delight.
                            These layers help the cartons preserve the natural texture and essence of the product till the last drop. As these layers contain FSC-grade paperboard that provides the pack with the desired shape and required durability, it becomes tough enough to resist shock, thrust and any other forceful impact that could damage the carton.
                          </p>




                        </div>
                      </AnimatePresence>
                    </div>


                    <div className="flex flex-col items-center">

                      {/* IMAGE */}
                      <div className="mt-0 sm:mt-4 relative w-full aspect-square overflow-hidden group cursor-pointer">
                        {/* Image */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <Image
                              src="/images/aseptic/packaging.png"
                              alt="Hall of Fame"
                              height={460}
                              width={460}
                              className="object-contain h-full w-full"
                              priority
                            />
                          </motion.div>
                        </AnimatePresence>



                      </div>


                    </div>
                  </div>

                  <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">

                    {/* TEXT */}
                    <div className="text-center sm:text-left max-w-lg ">
                      <AnimatePresence mode="wait">
                        <div>
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[18px] lato-700 text-[#117ABA] md:text-[24px] "
                          >
                            12 Billion Packs per annum
                          </motion.span>

                          <p className=" text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                            Asepto’s converting process is equipped with some of the most advanced machinery that is fast-paced automation with precision and innovative adaptations. Asepto is now manufacturing 12 billion packs per annum.
                            With a product portfolio suitable to a complete range of beverages available in the market, we have gradually gained the trust of some of the leading beverage companies in India and abroad to become their end-to-end packaging partner. In addition to aesthetic augmentation, we also provide sterility and counterfeiting assurance to our clients.
                            {/* The fact that we are now successfully packing some of the trickiest items like Ghee (purified butter) comfortably describes our ability and approach as a packaging innovator. */}
                          </p>




                        </div>
                      </AnimatePresence>
                    </div>


                    <div className="flex flex-col items-center">

                      {/* IMAGE */}
                      <div className="mt-0 sm:mt-4 relative w-full aspect-square overflow-hidden group cursor-pointer">
                        {/* Image */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <Image
                              src="/images/aseptic/sol.png"
                              alt="Hall of Fame"
                              height={320}
                              width={320}
                              className="object-cover h-full w-full"
                              priority
                            />
                          </motion.div>
                        </AnimatePresence>



                      </div>


                    </div>
                  </div>

                  <div className="flex gap-6 justify-start">
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Learn More</button>
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Request Sample</button>
                  </div>
                </div>
              )}
            </div>
          ) : isASip ? (
            // A SIP exact layout from your latest screenshot
            <div className="bg-white  space-y-12">
              <div className="relative h-[388px] overflow-hidden bg-[#8BB2C1]">
                <Image src={heroImageUrl} alt="Aseptic Cartons" fill className="object-cover" priority />
              </div>
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Overview</h2>
                <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                  {overview}
                </p>
              </div>

              {/* WHY A SIP ? */}


              <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">

                {/* TEXT */}
                <div className="text-center sm:text-left max-w-lg ">
                  <AnimatePresence mode="wait">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[18px] lato-700 text-[#117ABA] md:text-[24px] "
                      >
                        WHY A SIP ?

                      </motion.h3>
                      <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                        {whyAsip}
                      </p>






                    </div>
                  </AnimatePresence>
                </div>


                <div className="flex flex-col items-center">

                  {/* IMAGE */}
                  <div className="mt-0 sm:mt-4 relative w-full aspect-square h-[292px] overflow-hidden group cursor-pointer">
                    {/* Image */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src="/images/aseptic/dsip.png"
                          alt="Hall of Fame"
                          height={292}
                          width={292}
                          className="object-cover h-full w-full"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>



                  </div>


                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-[#117ABA] mb-4">Key Features :</h3>
                <ul className="list-disc pl-8 space-y-3 text-lg text-gray-800">
                  {keyFeatures.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Our Technology */}
              <div>
                <h3 className="text-2xl font-bold text-[#117ABA] mb-4">Our Technology</h3>
                <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                  {technology}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-6 justify-start">
                <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition">
                  Learn More
                </button>
                <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Request Sample</button>

              </div>
            </div>
          ) : isFillingMachines ? (
            // NEW: Filling Machines exact layout from your screenshot
            <div >

              <div className="space-y-16">
                <div className="relative h-[388px] overflow-hidden ">
                  <Image src={heroImageUrl} alt="Aseptic Cartons" fill className="object-contain" priority />
                </div>
                {/* Machine 1: SPEED PLUS 25SK */}
                <div>
                  <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Overview</h2>
                  <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                    {overview}
                  </p>
                </div>
                <div className="bg-white  relative overflow-hidden">


                  <h3 className="text-center text-3xl font-bold text-[#117ABA]">SPEED PLUS 25SK</h3>
                  <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                    {/* Left: Text */}
                    <div className="lg:w-1/2 space-y-1">

                      <h4 className="text-2xl font-bold mt-6 text-[#117ABA]">Key Features :</h4>
                      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                        <li>High Speed Machine – 25,000 Packs per hour</li>
                        <li>Advanced Integration with HMI & PLC</li>
                        <li>Operator-Friendly HMI</li>
                        <li>Highly Automated</li>
                        <li>Optimum for Packaging Dairy & Dairy Alternatives, Fruit-Based Beverages, Alcohol</li>
                      </ul>
                    </div>

                    {/* Right: Image */}
                    <div className="lg:w-1/2 height-[183px]">
                      <Image
                        src="/images/aseptic/speed.png" // replace with your actual image
                        alt="SPEED PLUS 25SK"
                        width={550}
                        height={183}
                        className=" object-cover height-[183px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Machine 2: Flexpress 10,000 */}
                <div className="bg-white ">
                  <h3 className="text-center text-3xl font-bold text-[#117ABA]">Flexpress 10,000</h3>
                  <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                    <div className="lg:w-1/2 space-y-6">
                      <h4 className="text-2xl font-bold mt-6 text-[#117ABA]">Key Features :</h4>
                      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                        <li>More packs per hour</li>
                        <li>More varieties from the same filling machines</li>
                        <li>Easy to operate and low maintenance cost</li>
                        <li>Plug-and-play concept</li>
                        <li>The most advanced technology</li>
                      </ul>
                    </div>

                    <div className="lg:w-1/2 height-[283px]">
                      <Image
                        src="/images/aseptic/flexpress.png" // replace with your actual image
                        alt="SPEED PLUS 25SK"
                        width={550}
                        height={283}
                        className="object-contain height-[283px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Machine 3: Smart 78 */}
                <div className="bg-white ">
                  <h3 className="text-center text-3xl font-bold text-[#117ABA]">Smart 78</h3>
                  <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                    <div className="lg:w-1/2 space-y-6">
                      <h4 className="text-2xl font-bold mt-6 text-[#117ABA]">Key Features :</h4>
                      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                        <li>High Speed Machine – 7,800 Packs per hour</li>
                        <li>Advanced Integration with HMI & PLC</li>
                        <li>Operator-Friendly HMI</li>
                        <li>Highly Automated</li>
                        <li>Optimum for Packaging Dairy & Dairy Alternatives, Fruit-Based Beverages, Alcohol</li>
                      </ul>
                    </div>

                    <div className="lg:w-1/2 height-[183px]">
                      <Image
                        src="/images/aseptic/smart.png" // replace with your actual image
                        alt="SPEED PLUS 25SK"
                        width={550}
                        height={183}
                        className=" object-cover height-[183px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 justify-start mt-10">
                <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition">
                  Learn More
                </button>
                <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">
                  Request Sample
                </button>
              </div>
            </div>
          ) :
            isAseptoPro ? (
              <div className="space-y-12">
                <div className="relative h-[388px] overflow-hidden ">
                  <Image src={heroImageUrl} alt="Aseptic Cartons" fill className="object-contain" priority />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Overview</h2>
                  <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                    {overview}
                  </p>
                </div>

                <div className="bg-white">
                  <h2 className="text-3xl font-bold text-[#117ABA] mb-6">WHY CHOOSE ASEPTO PRO?</h2>
                  <p className="text-lg leading-relaxed text-gray-800">
                    For any machinery-dependent manufacturing unit, maintenance is one of the biggest challenges. Machinery requires regular check-ups; it may stop functioning at any point in time if not attended to regularly. More than non-functionality, any malfunction in the machinery might cause irreversible damage to the overall set-up, the human resource, or the business at large. Asepto Pro offers Technical Assistance, Skill Enhancement services, Quality assurance, Performance Management & Remote assistance. Asepto Pro is available in more than 12 countries and is fast-growing as the preferred after-sale maintenance partner assisting beverage manufacturers to run their business with continuity.
                  </p>

                  {/* 8 icons grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    {[
                      { icon: "/images/aseptic/1.png", label: "Machine Material Integration (MMI)" },
                      { icon: "/images/aseptic/2.png", label: "Quality Assurance" },
                      { icon: "/images/aseptic/3.png", label: "System-Specific Engineers" },
                      { icon: "/images/aseptic/4.png", label: "Technical Assistance" },
                      { icon: "/images/aseptic/5.png", label: "Remote Assistance" },
                      { icon: "/images/aseptic/6.png", label: "Authentic Spare Parts Delivered" },
                      { icon: "/images/aseptic/7.png", label: "Performance Management" },
                      { icon: "/images/aseptic/8.png", label: "Skill Enhancement Services" },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
                          <Image src={item.icon} alt={item.label} width={48} height={48} />
                        </div>
                        <p className="text-sm font-medium text-black">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions We Offer - Dropdowns */}
                <div className="bg-white">
                  <h2 className="text-3xl font-bold text-[#117ABA] mb-8">Solutions We Offer</h2>

                  {/* CarePro Dropdown */}
                  <details
                    onToggle={() => toggleSection('carePro')}
                    className="bg-[#F9F9F9]  px-2 py-2 mb-4  pb-4 border-white border-[1px] text-left hover:bg-gray-50 transition-colors">
                    <summary className="flex items-center justify-between cursor-pointer text-xl font-bold text-[#117ABA]">
                      <span>CarePro</span>
                      <motion.button
                        animate={{ rotate: openSections.carePro ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm"
                      >
                        <ChevronDown className="w-3 h-3 text-white" />
                      </motion.button>
                    </summary>
                    <div className="mt-4 pl-6">
                      <p className="text-lg text-gray-800 mb-4">
                        Laminate business with:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-800">
                        <li>Tech Support (Remote and At Site)</li>
                        <li>Spare Parts</li>
                      </ul>
                      <p className="mt-4 text-lg text-gray-800">
                        <strong>Description:</strong> Avail the Asepto Pro Care through round-the-clock technical assistance with genuine spare parts.
                      </p>
                    </div>
                  </details>

                  {/* MaxPro Dropdown */}
                  <details
                    onToggle={() => toggleSection('maxPro')}
                    className="bg-[#F9F9F9]  px-2 py-2 mb-4  pb-4 border-white border-[1px]   text-left hover:bg-gray-50 transition-colors">

                    <summary className="flex items-center justify-between cursor-pointer text-xl font-bold text-[#117ABA]">
                      <span>MaxPro</span>
                      <motion.button
                        animate={{ rotate: openSections.maxPro ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm"
                      >
                        <ChevronDown className="w-3 h-3 text-white" />
                      </motion.button>
                    </summary>
                    <div className="mt-4 pl-6">
                      <p className="text-lg text-gray-800 mb-4">
                        Laminate business with:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-800">
                        <li>Machine AMC</li>
                        <li>Comprehensive Service Engineer + Spare Parts</li>
                        <li>Performance Assurance</li>
                      </ul>
                      <p className="mt-4 text-lg text-gray-800">
                        <strong>Description:</strong> MaxPro's annual package assures quality assistance throughout the year with guaranteed performance.
                      </p>
                    </div>
                  </details>

                  {/* UltraPro Dropdown */}
                  <details
                    onToggle={() => toggleSection('ultraPro')}
                    className="bg-[#F9F9F9]  px-2 py-2 mb-4  pb-4 border-white border-[1px]   text-left hover:bg-gray-50 transition-colors">

                    <summary className="flex items-center justify-between cursor-pointer text-xl font-bold text-[#117ABA]">
                      <span>UltraPro</span>
                      <motion.button
                        animate={{ rotate: openSections.ultraPro ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm"
                      >
                        <ChevronDown className="w-3 h-3 text-white" />
                      </motion.button>
                    </summary>
                    <div className="mt-4 pl-6">
                      <p className="text-lg text-gray-800 mb-4">
                        Laminate business with:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-800">
                        <li>UFLEX Machine Installation</li>
                      </ul>
                      <p className="mt-4 text-lg text-gray-800">
                        <strong>Description:</strong> Avail the Ultra assistance combined with the installation and maintenance of UFLEX machine.
                      </p>
                    </div>
                  </details>
                </div>

                {/* Bottom Buttons */}
                <div className="flex flex-wrap gap-6 justify-start">
                  <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium ">
                    Learn More
                  </button>
                  <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium ">
                    Request Sample
                  </button>
                </div>
              </div>
            ) :
              isAseptoDesign ? (
                <div className="space-y-16">
                  {/* Hero Section */}
                 <div className="relative h-[388px] overflow-hidden ">
                  <Image src={heroImageUrl} alt="Aseptic Cartons" fill className="object-contain" priority />
                </div>

                  {/* We Think as Strategists We Do as Designers */}
                  <div className="bg-white ">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#117ABA] mb-8 text-start">
                      We Think as Strategists We Do as Designers
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-4xl mx-auto">
                      Asepto Designs is the creative powerhouse within Asepto, dedicated to shaping the visual identity of your products. With a keen understanding of market dynamics and consumer preferences, Asepto Designs formulates strategic design concepts that cater to the unique requirements of each product. Our team of talented designers harnesses their creativity and expertise to craft contemporary packaging designs that are not only visually appealing but also highly effective in capturing the attention of consumers. Our ultimate goal is to transform every product we touch into a hot seller, ensuring that it stands out on the shelves and resonates with the target audience. Asepto Designs is committed to making products not just visually appealing, but also synonymous with quality and innovation in the eyes of consumers.
                    </p>
                  </div>

                  {/* Design that Speaks */}
                  <div className="bg-white ">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#117ABA] mb-8 text-start">
                      Design that Speaks
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-4xl mx-auto">
                      At Asepto Design, our process is as innovative as our packaging. We immerse ourselves in your brand, crafting designs that blend aesthetics and functionality. Every line, curve, and color is meticulously chosen to reflect your identity. Quality is our obsession; our designs undergo rigorous testing. We create masterpieces that tell your story, captivate your audience, and leave lasting impressions. Welcome to the future of packaging design, where creativity knows no bounds, and excellence is our tradition.
                    </p>
                  </div>

                  {/* Some of Our Work - Gallery */}
                  <div className="bg-white ">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#117ABA] mb-10 text-center">
                      Some of Our Work
                    </h2>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

                      {/* LEFT SIDE (9,10,11) */}
                      <div className="flex flex-col gap-2">

                        {/* 9 */}
                        <div className="w-full">
                          <Image
                            src="/images/aseptic/9.png"
                            alt="Design 9"
                            width={280}
                            height={280}
                            className="w-full h-full object-cover "
                          />
                        </div>

                        {/* 10 */}
                        <div className="w-full">
                          <Image
                            src="/images/aseptic/10.png"
                            alt="Design 10"
                            width={280}
                            height={280}
                            className="w-full h-full object-cover "
                          />
                        </div>

                        {/* 11 (full width like collage style) */}
                        <div className="sm:col-span-2 w-full">
                          <Image
                            src="/images/aseptic/11.png"
                            alt="Design 11"
                            width={280}
                            height={280}
                            className="w-full h-full object-cover "
                          />
                        </div>
                      </div>

                      {/* RIGHT SIDE (12,13) */}
                      <div className="flex flex-col gap-2">

                        {/* 12 - Tall image */}
                        <div className="flex-1">
                          <Image
                            src="/images/aseptic/12.png"
                            alt="Design 12"
                            width={800}
                            height={1200}
                            className="w-full h-full object-cover "
                          />
                        </div>

                        {/* 13 */}
                        <div className="flex-1">
                          <Image
                            src="/images/aseptic/13.png"
                            alt="Design 13"
                            width={800}
                            height={800}
                            className="w-full h-full object-cover "
                          />
                        </div>

                      </div>
                    </div>
                  </div>


                  {/* How we Design - Expandable Steps */}
                  <div className="">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#117ABA] mb-10 text-start">
                      How we Design
                    </h2>

                    <div className="space-y-6">
                      <details
                        open={openSection.briefing}
                        onToggle={() => toggleSections('briefing')}
                                            className="bg-[#F9F9F9]  px-2 py-2 mb-4  pb-4 border-white border-[1px]   text-left hover:bg-gray-50 transition-colors">

                      
                        <summary className="flex items-center justify-between cursor-pointer text-2xl font-bold text-[#117ABA]">
                          <span>Briefing</span>
                          <motion.div
                            animate={{ rotate: openSection.briefing ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm"

                          >
                            <ChevronDown className="inline-block w-8 h-8 text-white" />
                          </motion.div>
                        </summary>
                        <div className="mt-6 pl-6 text-lg leading-relaxed text-gray-800">
                          At the heart of the design process lies the art of briefing—a pivotal moment where the creative journey begins. It sets the stage, offering essential guidelines that ignite the sparks of strategy and concept design. Like a compass in uncharted waters, it guides our vision, ensuring that every stroke, pixel, or detail aligns with the essence of the project. The briefing is our North Star, illuminating the path to design brilliance, and it's where the magic begins.
                        </div>
                      </details>

                      {/* Step 2: Ideation */}
                      <details
                        open={openSections.ideation}
                        onToggle={() => toggleSections('ideation')}
                                            className="bg-[#F9F9F9]  px-2 py-2 mb-4  pb-4 border-white border-[1px]   text-left hover:bg-gray-50 transition-colors">

                      
                        <summary className="flex items-center justify-between cursor-pointer text-2xl font-bold text-[#117ABA]">
                          <span>Ideation</span>
                          <motion.div
                            animate={{ rotate: openSection.ideation ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm"

                          >
                            <ChevronDown className="inline-block w-8 h-8 text-white" />
                          </motion.div>
                        </summary>
                        <div className="mt-6 pl-6 text-lg leading-relaxed text-gray-800">
                          In the ideation phase, we embark on a captivating journey driven by the client's brief. Our compass is market research that helps us decode category trends and geographic nuances. Armed with this treasure trove of insights, we assemble the pieces of the puzzle, crafting conceptual ideas on our drawing board that breathe life into each project. It's here, amidst the creative swirl, that innovation takes its bold step, transforming ideas into unforgettable designs.
                        </div>
                      </details>

                      {/* Step 3: Design & Mockups */}
                      <details
                        open={openSection.design}
                        onToggle={() => toggleSections('design')}
                                            className="bg-[#F9F9F9]  px-2 py-2 mb-4  pb-4 border-white border-[1px]   text-left hover:bg-gray-50 transition-colors">

                        <summary className="flex items-center justify-between cursor-pointer text-2xl font-bold text-[#117ABA]">
                          <span>Design & Mockups</span>
                          <motion.div
                            animate={{ rotate: openSection.design ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm"

                          >
                            <ChevronDown className="inline-block w-8 h-8 text-white" />
                          </motion.div>
                        </summary>
                        <div className="mt-6 pl-6 text-lg leading-relaxed text-gray-800">
                          In the final frontier of our creative voyage, we embark on the exhilarating journey of crafting designs and lifelike mock-ups, tailored to resonate with the brand's soul and connect deeply with its intended audience. Our designs are not mere visual wonders; they are the architects of a brand's persona, each line and colour chosen with precision to tell a compelling story. With every stroke and pixel, we breathe life into an identity that doesn't just speak but roars. We don't just design; we orchestrate the rise of a product into the ranks of Supermarket Superstars.
                        </div>
                      </details>
                    </div>
                  </div>

                  {/* Bottom Buttons */}
                  <div className="flex flex-wrap gap-6 justify-start">
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium ">
                      Learn More
                    </button>
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium ">
                      Request Sample
                    </button>
                  </div>
                </div>
              ) :

                (
                  // Fallback for other categories
                  <div className="bg-white p-8 rounded-xl border">
                    <h2 className="text-3xl font-bold text-[#117ABA] mb-6">{title}</h2>
                    <p className="text-lg leading-relaxed text-gray-800">Content coming soon...</p>
                  </div>
                )}
        </motion.main>
      </div>
    </section>
  );
}
