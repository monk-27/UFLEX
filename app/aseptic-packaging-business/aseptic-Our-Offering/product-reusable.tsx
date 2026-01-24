
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
                                        {categories.map((category:any) => (
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
        <motion.main key={title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:col-span-3 space-y-10">
          {/* Hero */}
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image src={heroImageUrl} alt={title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <div className="inline-block bg-[#117ABA]/90 px-6 py-2 rounded-full text-sm mb-3">{brandTag}</div>
              <h1 className="text-6xl font-bold">{title}</h1>
            </div>
          </div>

          {/* Aseptic Cartons 3-tab layout */}
          {isAsepticCartons ? (
            <div className="space-y-12">
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
                <div className="bg-white p-8 rounded-xl border space-y-12">
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
                    <div className="relative">
                      {/* Top row */}
                      <div className="grid grid-cols-5 gap-8 mb-12">
                        {["BASE", "SLIM", "ULTRA LEAN", "SQUARE", "CURVE"].map((shape) => (
                          <div key={shape} className="text-center">
                            <Image src={`/images/shapes/${shape.toLowerCase()}.png`} alt={shape} width={180} height={240} className="mx-auto" />
                            <p className="mt-3 font-medium">{shape}</p>
                          </div>
                        ))}
                      </div>

                      {/* Connecting line */}
                      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-400 transform -translate-y-1/2" />

                      {/* Bottom row */}
                      <div className="grid grid-cols-5 gap-8">
                        {["WEDGE", "TRIO", "PILLOW", "SPECTRA", "MID"].map((shape) => (
                          <div key={shape} className="text-center">
                            <Image src={`/images/shapes/${shape.toLowerCase()}.png`} alt={shape} width={180} height={240} className="mx-auto" />
                            <p className="mt-3 font-medium">{shape}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 justify-end">
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Learn More</button>
                    <button className="border-2 border-[#117ABA] text-[#117ABA] px-8 py-4 rounded-lg font-medium">Request Sample</button>
                  </div>
                </div>
              )}

              {/* Tab 2: OUR INNOVATIONS */}
              {activeTab === "innovations" && (
                <div className="bg-white p-8 rounded-xl border space-y-12">
                  <div>
                    <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Our Innovations</h2>
                    <p className="text-lg leading-relaxed text-gray-800 mb-8">
                      Innovation is the essence of evolution. For a brand, the packaging is the most visible depiction of its evolution story. Packaging is your key salesperson and we at Asepto believe that "All that Glitters is Sold". Our Holography and Foil Stamping Technology are the innovation milestones in the aseptic liquid packaging industry. They add differentiating edge to your brand and make it attractive on the retail shelf.
                    </p>
                  </div>

                  {/* ASEPTO PREMIUM */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">ASEPTO PREMIUM</h3>
                    <p className="text-lg leading-relaxed text-gray-800">
                      Create the premium positioning for your brand. Asepto Premium is a design innovation that decorates the packaging with a luxurious shiny finish to elevate the product’s aesthetic presence. This innovative technology augments the packaging with distinct adornments that demarcate the product, making it visibly impacting. Asepto Premium influences a customer’s perceived notion about the brand and encourages premium positioning. It comes with a wide range of customizable colour combinations. We encourage our clients to contact our Sales Team and ask for customizations that best suit their requirements. We are always eager to add value to our client’s journeys and experiences.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                      {["Gold Foil Stamp", "Green Foil Stamp", "Red Foil Stamp", "Silver Foil Stamp"].map((foil) => (
                        <div key={foil} className="text-center">
                          <div className="h-32 rounded bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center shadow-sm">
                            <span className="font-medium">{foil}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ASEPTO SPARK */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">ASEPTO SPARK</h3>
                    <p className="text-lg leading-relaxed text-gray-800">
                      Add the spark to propel the product growth engine. Asepto Spark is an outcome of a rigorous research and development process involving innovative techniques to apply holography on an aseptic liquid packaging carton. This ostentatious packaging is achieved with sparkling holographic and metallic looks, giving brands endless possibilities to give an evolutionary edge to their line of products. A product inside Asepto Spark packaging will beat the shelf competition to reach out to customers’ and consumers’ shopping lists. Asepto Spark makes the packaging ultra-attractive and exceptionally outstanding. Similar to Asepto Premium, it also comes with a wide range of customizable colour combinations and innovative design patterns. We encourage our clients to contact our Sales Team and ask for customizations that best suit their requirements. We are always eager to add value to our client’s journeys and experiences.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                      {["Cracked Ice Holography", "Multi Lens Holography", "Pillar of Light Holography", "Sparkle Holography"].map((holo) => (
                        <div key={holo} className="text-center">
                          <div className="h-32 rounded bg-gradient-to-br from-purple-300 via-blue-300 to-pink-300 flex items-center justify-center shadow-sm">
                            <span className="font-medium">{holo}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-6 justify-end">
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Learn More</button>
                    <button className="border-2 border-[#117ABA] text-[#117ABA] px-8 py-4 rounded-lg font-medium">Request Sample</button>
                  </div>
                </div>
              )}

              {/* Tab 3: CONVERTING PROCESS */}
              {activeTab === "process" && (
                <div className="bg-white p-8 rounded-xl border space-y-12">
                  <div>
                    <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Packaging that keeps it all safe</h2>
                    <p className="text-lg leading-relaxed text-gray-800 mb-8">
                      Our aseptic liquid packaging cartons comprise six layers of protection that keep the beverage unexposed to the outer world, i.e., sunlight, air, moisture, etc. These layers help the cartons preserve the natural texture and essence of the product till the last drop. As these layers contain FSC-grade paperboard that provides the pack with the desired shape and required durability, it becomes tough enough to resist shock, thrust and any other forceful impact that could damage the carton. The six-layered shield helps ensure that your product travels miles without any damage and deliver the original freshness to your consumers to add to their delight.
                    </p>
                  </div>

                  {/* Layered structure */}
                  <div className="relative h-[400px] rounded-xl border overflow-hidden bg-gray-50">
                    <Image
                      src="/images/asepto-6-layers-diagram.jpg"
                      alt="Six layers of protection"
                      fill
                      className="object-contain p-6"
                    />
                  </div>

                  {/* Converting process flow */}
                  <div className="relative h-[300px] rounded-xl border overflow-hidden bg-gray-50">
                    <Image
                      src="/images/converting-process-flow.jpg"
                      alt="Printing → Slitting → Lamination → Packaging"
                      fill
                      className="object-contain p-6"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#117ABA] mb-4">12 Billion Packs per annum</h3>
                    <p className="text-lg leading-relaxed text-gray-800 mb-6">
                      Asepto’s converting process is equipped with some of the most advanced machinery that is fast-paced with precision and innovative adaptations. Asepto is now manufacturing 12 billion packs per annum. With a product portfolio suitable to a complete range of beverages available in the market, we have gradually gained the trust of some of the leading beverage companies in India and abroad to become their end-to-end packaging partner. In addition to aesthetic augmentation, we also provide sterility and counterfeiting assurance to our clients. The fact that we are now successfully packing some of the trickiest items like Ghee (purified butter) comfortably describes our ability and approach as a packaging innovator.
                    </p>

                    {/* Blue solution graphic */}
                    <div className="relative h-[200px] rounded-xl overflow-hidden">
                      <Image
                        src="/images/we-believe-in-solution-ship.jpg"
                        alt="We Believe in SolutionShip"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex gap-6 justify-end">
                    <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Learn More</button>
                    <button className="border-2 border-[#117ABA] text-[#117ABA] px-8 py-4 rounded-lg font-medium">Request Sample</button>
                  </div>
                </div>
              )}
            </div>
          ) : isASip ? (
            // A SIP exact layout from your latest screenshot
            <div className="bg-white p-8 rounded-xl border space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Overview</h2>
                <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                  {overview}
                </p>
              </div>

              {/* WHY A SIP ? */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                    {/* Blue silhouette icon - replace with actual SVG or image */}
                    <Image src="/images/asip-silhouette.png" alt="Silhouette" width={80} height={80} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#117ABA] mb-4">WHY A SIP ?</h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    {whyAsip}
                  </p>
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
              <div className="flex flex-wrap gap-6 justify-end">
                <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition">
                  Learn More
                </button>
                <button className="border-2 border-[#117ABA] text-[#117ABA] px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition">
                  Request Sample
                </button>
              </div>
            </div>
          ) : isFillingMachines ? (
            // NEW: Filling Machines exact layout from your screenshot
            <div >

              <div className="space-y-16">
                {/* Machine 1: SPEED PLUS 25SK */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 relative overflow-hidden">
                  {/* NEWLY LAUNCHED tag */}
                  <div className="absolute -top-4 right-8 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase shadow-md">
                    NEWLY LAUNCHED
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                    {/* Left: Text */}
                    <div className="lg:w-1/2 space-y-6">
                      <h3 className="text-3xl font-bold text-[#117ABA]">SPEED PLUS 25SK</h3>
                      <div className="inline-block bg-[#117ABA] text-white px-6 py-3 rounded-lg text-xl font-bold">
                        25,000 PACKS PER HOUR
                      </div>
                      <h4 className="text-2xl font-bold mt-6">Key Features :</h4>
                      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                        <li>High Speed Machine – 25,000 Packs per hour</li>
                        <li>Advanced Integration with HMI & PLC</li>
                        <li>Operator-Friendly HMI</li>
                        <li>Highly Automated</li>
                        <li>Optimum for Packaging Dairy & Dairy Alternatives, Fruit-Based Beverages, Alcohol</li>
                      </ul>
                    </div>

                    {/* Right: Image */}
                    <div className="lg:w-1/2">
                      <Image
                        src="/images/speed-plus-25sk.jpg" // replace with your actual image
                        alt="SPEED PLUS 25SK"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-lg object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Machine 2: Flexpress 10,000 */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                    <div className="lg:w-1/2 space-y-6">
                      <h3 className="text-3xl font-bold text-[#117ABA]">Flexpress 10,000</h3>
                      <h4 className="text-2xl font-bold mt-6">Key Features :</h4>
                      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                        <li>More packs per hour</li>
                        <li>More varieties from the same filling machines</li>
                        <li>Easy to operate and low maintenance cost</li>
                        <li>Plug-and-play concept</li>
                        <li>The most advanced technology</li>
                      </ul>
                    </div>

                    <div className="lg:w-1/2">
                      <Image
                        src="/images/flexpress-10000.jpg" // replace with your actual image
                        alt="Flexpress 10,000"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-lg object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Machine 3: Smart 78 */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                    <div className="lg:w-1/2 space-y-6">
                      <h3 className="text-3xl font-bold text-[#117ABA]">Smart 78</h3>
                      <h4 className="text-2xl font-bold mt-6">Key Features :</h4>
                      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                        <li>High Speed Machine – 7,800 Packs per hour</li>
                        <li>Advanced Integration with HMI & PLC</li>
                        <li>Operator-Friendly HMI</li>
                        <li>Highly Automated</li>
                        <li>Optimum for Packaging Dairy & Dairy Alternatives, Fruit-Based Beverages, Alcohol</li>
                      </ul>
                    </div>

                    <div className="lg:w-1/2">
                      <Image
                        src="/images/smart-78.jpg" // replace with your actual image
                        alt="Smart 78"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-lg object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 justify-end mt-10">
                <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition">
                  Learn More
                </button>
                <button className="border-2 border-[#117ABA] text-[#117ABA] px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition">
                  Request Sample
                </button>
              </div>
            </div>
          ) :
            isAseptoPro ? (
              <div className="space-y-12">
                {/* Hero with hexagons */}
                <div className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                  <Image
                    src="/images/asepto-pro-hero-map.jpg" // replace with your actual map background
                    alt="Asepto Pro Global Support"
                    fill
                    className="object-cover opacity-40"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                      <h2 className="text-4xl md:text-5xl font-bold text-[#117ABA] mb-8">Asepto Pro</h2>

                      {/* Hexagonal icons with connecting lines */}
                      <div className="relative flex flex-wrap justify-center gap-6 md:gap-12">
                        {/* Connecting lines (curved paths - use SVG or CSS) */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <svg className="w-full h-full" viewBox="0 0 800 400">
                            <path d="M200 100 Q 400 200 600 100" fill="none" stroke="#117ABA" strokeWidth="2" strokeDasharray="5,5" />
                            <path d="M200 100 Q 400 0 600 100" fill="none" stroke="#117ABA" strokeWidth="2" strokeDasharray="5,5" />
                          </svg>
                        </div>

                        {/* Individual hexagons */}
                        {[
                          { icon: "🤝", label: "Technical Assistance" },
                          { icon: "👥", label: "Skill Enhancement Services" },
                          { icon: "🛡️", label: "Quality Assurance" },
                          { icon: "⚙️", label: "Performance Management" },
                          { icon: "💻", label: "Remote Assistance" },
                        ].map((item, index) => (
                          <div key={index} className="relative w-40 h-44 md:w-48 md:h-52 transform rotate-30">
                            <div className="absolute inset-0 bg-[#117ABA]/10 rounded-[20%] flex items-center justify-center border-2 border-[#117ABA]">
                              <div className="text-center -rotate-30">
                                <span className="text-4xl">{item.icon}</span>
                                <p className="text-sm font-medium mt-2">{item.label}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div className="bg-white p-8 rounded-xl border">
                  <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Overview</h2>
                  <p className="text-lg leading-relaxed text-gray-800 mb-8">
                    A minute of downtime can cause hours of losses to you. We will not let that happen. Our team of engineers spread across geographies look after your filling machines, their technical overhauling, spare parts assistance, and the technical training to the on-ground team for enhanced operations.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-800">
                    Asepto Pro provides services to a complete range of filling machines across brands.
                  </p>
                </div>

                {/* WHY CHOOSE ASEPTO PRO? */}
                <div className="bg-white p-8 rounded-xl border">
                  <h2 className="text-3xl font-bold text-[#117ABA] mb-6">WHY CHOOSE ASEPTO PRO?</h2>
                  <p className="text-lg leading-relaxed text-gray-800">
                    For any machinery-dependent manufacturing unit, maintenance is one of the biggest challenges. Machinery requires regular check-ups; it may stop functioning at any point in time if not attended to regularly. More than non-functionality, any malfunction in the machinery might cause irreversible damage to the overall set-up, the human resource, or the business at large. Asepto Pro offers Technical Assistance, Skill Enhancement services, Quality assurance, Performance Management & Remote assistance. Asepto Pro is available in more than 12 countries and is fast-growing as the preferred after-sale maintenance partner assisting beverage manufacturers to run their business with continuity.
                  </p>

                  {/* 8 icons grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    {[
                      { icon: "/icons/machine-integration.png", label: "Machine Material Integration (MMI)" },
                      { icon: "/icons/quality-assurance.png", label: "Quality Assurance" },
                      { icon: "/icons/system-engineers.png", label: "System-Specific Engineers" },
                      { icon: "/icons/technical-assistance.png", label: "Technical Assistance" },
                      { icon: "/icons/remote-assistance.png", label: "Remote Assistance" },
                      { icon: "/icons/authentic-spare-parts.png", label: "Authentic Spare Parts Delivered" },
                      { icon: "/icons/performance-management.png", label: "Performance Management" },
                      { icon: "/icons/skill-enhancement.png", label: "Skill Enhancement Services" },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                          <Image src={item.icon} alt={item.label} width={48} height={48} />
                        </div>
                        <p className="text-sm font-medium">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions We Offer - Dropdowns */}
                <div className="bg-white p-8 rounded-xl border">
                  <h2 className="text-3xl font-bold text-[#117ABA] mb-8">Solutions We Offer</h2>

                  {/* CarePro Dropdown */}
                  <details className="mb-4 border-b pb-4">
                    <summary className="flex items-center justify-between cursor-pointer text-xl font-bold text-[#117ABA]">
                      <span>CarePro</span>
                      <span className="text-2xl">↓</span>
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
                  <details className="mb-4 border-b pb-4">
                    <summary className="flex items-center justify-between cursor-pointer text-xl font-bold text-[#117ABA]">
                      <span>MaxPro</span>
                      <span className="text-2xl">↓</span>
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
                  <details className="mb-4">
                    <summary className="flex items-center justify-between cursor-pointer text-xl font-bold text-[#117ABA]">
                      <span>UltraPro</span>
                      <span className="text-2xl">↓</span>
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
                <div className="flex flex-wrap gap-6 justify-end">
                  <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition">
                    Learn More
                  </button>
                  <button className="border-2 border-[#117ABA] text-[#117ABA] px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition">
                    Request Sample
                  </button>
                </div>
              </div>
            ) :
            isAseptoDesign ? (
  <div className="space-y-16">
    {/* Hero Section */}
    <div className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Image
        src="/images/asepto-design-hero-fruits.jpg" // replace with your actual hero image
        alt="Asepto Design Hero"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
        <div className="text-center max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
            {/* A Design Shop Logo */}
            <div className="text-6xl md:text-8xl font-black text-[#117ABA] tracking-wider">
              A<span className="text-5xl md:text-7xl">DESIGN</span>SHOP
            </div>
            {/* Floating elements - fruits & carton */}
            <div className="relative w-48 h-48 md:w-64 h-64">
              <Image
                src="/images/blue-carton-floating.png"
                alt="Blue Carton"
                width={200}
                height={300}
                className="absolute top-0 left-1/2 -translate-x-1/2 rotate-12 shadow-2xl"
              />
              {/* Add more floating fruits if needed */}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#117ABA] mb-4">
            NOT ONLY WE DESIGN! WE CREATE BRANDS
          </h1>
        </div>
      </div>
    </div>

    {/* We Think as Strategists We Do as Designers */}
    <div className="bg-white p-8 md:p-12 rounded-xl border shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-[#117ABA] mb-8 text-center">
        We Think as Strategists We Do as Designers
      </h2>
      <p className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-4xl mx-auto">
        Asepto Designs is the creative powerhouse within Asepto, dedicated to shaping the visual identity of your products. With a keen understanding of market dynamics and consumer preferences, Asepto Designs formulates strategic design concepts that cater to the unique requirements of each product. Our team of talented designers harnesses their creativity and expertise to craft contemporary packaging designs that are not only visually appealing but also highly effective in capturing the attention of consumers. Our ultimate goal is to transform every product we touch into a hot seller, ensuring that it stands out on the shelves and resonates with the target audience. Asepto Designs is committed to making products not just visually appealing, but also synonymous with quality and innovation in the eyes of consumers.
      </p>
    </div>

    {/* Design that Speaks */}
    <div className="bg-white p-8 md:p-12 rounded-xl border shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-[#117ABA] mb-8 text-center">
        Design that Speaks
      </h2>
      <p className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-4xl mx-auto">
        At Asepto Design, our process is as innovative as our packaging. We immerse ourselves in your brand, crafting designs that blend aesthetics and functionality. Every line, curve, and color is meticulously chosen to reflect your identity. Quality is our obsession; our designs undergo rigorous testing. We create masterpieces that tell your story, captivate your audience, and leave lasting impressions. Welcome to the future of packaging design, where creativity knows no bounds, and excellence is our tradition.
      </p>
    </div>

    {/* Some of Our Work - Gallery */}
    <div className="bg-white p-8 md:p-12 rounded-xl border shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-[#117ABA] mb-10 text-center">
        Some of Our Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Row 1 */}
        <div className="space-y-4">
          <Image src="/images/lemon-juice-pack.jpg" alt="Lemon Juice" width={400} height={600} className="rounded-xl shadow-lg" />
          <Image src="/images/aam-ras-pack-1.jpg" alt="Aam Ras" width={400} height={600} className="rounded-xl shadow-lg" />
        </div>

        <div className="space-y-4">
          <Image src="/images/strawberry-milk-pack.jpg" alt="Strawberry Milk" width={400} height={600} className="rounded-xl shadow-lg" />
          <Image src="/images/aam-ras-pack-2.jpg" alt="Aam Ras" width={400} height={600} className="rounded-xl shadow-lg" />
        </div>

        <div className="space-y-4">
          <Image src="/images/orange-juice-pack.jpg" alt="Orange Juice" width={400} height={600} className="rounded-xl shadow-lg" />
          <Image src="/images/mango-juice-pack.jpg" alt="Mango Juice" width={400} height={600} className="rounded-xl shadow-lg" />
        </div>
      </div>
    </div>

    {/* How we Design - Expandable Steps */}
    <div className="bg-white p-8 md:p-12 rounded-xl border shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-[#117ABA] mb-10 text-center">
        How we Design
      </h2>

      <div className="space-y-6">
        {/* Step 1: Briefing */}
        <details className="group border-b pb-6">
          <summary className="flex items-center justify-between cursor-pointer text-2xl font-bold text-[#117ABA]">
            <span>Briefing</span>
            <span className="transition-transform group-open:rotate-180">↓</span>
          </summary>
          <div className="mt-6 pl-6 text-lg leading-relaxed text-gray-800">
            At the heart of the design process lies the art of briefing—a pivotal moment where the creative journey begins. It sets the stage, offering essential guidelines that ignite the sparks of strategy and concept design. Like a compass in uncharted waters, it guides our vision, ensuring that every stroke, pixel, or detail aligns with the essence of the project. The briefing is our North Star, illuminating the path to design brilliance, and it's where the magic begins.
          </div>
        </details>

        {/* Step 2: Ideation */}
        <details className="group border-b pb-6">
          <summary className="flex items-center justify-between cursor-pointer text-2xl font-bold text-[#117ABA]">
            <span>Ideation</span>
            <span className="transition-transform group-open:rotate-180">↓</span>
          </summary>
          <div className="mt-6 pl-6 text-lg leading-relaxed text-gray-800">
            In the ideation phase, we embark on a captivating journey driven by the client's brief. Our compass is market research that helps us decode category trends and geographic nuances. Armed with this treasure trove of insights, we assemble the pieces of the puzzle, crafting conceptual ideas on our drawing board that breathe life into each project. It's here, amidst the creative swirl, that innovation takes its bold step, transforming ideas into unforgettable designs.
          </div>
        </details>

        {/* Step 3: Design & Mockups */}
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer text-2xl font-bold text-[#117ABA]">
            <span>Design & Mockups</span>
            <span className="transition-transform group-open:rotate-180">↓</span>
          </summary>
          <div className="mt-6 pl-6 text-lg leading-relaxed text-gray-800">
            In the final frontier of our creative voyage, we embark on the exhilarating journey of crafting designs and lifelike mock-ups, tailored to resonate with the brand's soul and connect deeply with its intended audience. Our designs are not mere visual wonders; they are the architects of a brand's persona, each line and colour chosen with precision to tell a compelling story. With every stroke and pixel, we breathe life into an identity that doesn't just speak but roars. We don't just design; we orchestrate the rise of a product into the ranks of Supermarket Superstars.
          </div>
        </details>
      </div>
    </div>

    {/* Bottom Buttons */}
    <div className="flex flex-wrap gap-6 justify-end">
      <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition">
        Learn More
      </button>
      <button className="border-2 border-[#117ABA] text-[#117ABA] px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition">
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
