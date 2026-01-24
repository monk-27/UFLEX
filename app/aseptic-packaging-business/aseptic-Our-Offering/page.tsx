
"use client";

import { useState } from "react";
import ProductCategorySection from "./product-reusable";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/breadcrumb";

export default function ProductsPage() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const productsData: Record<string, any> = {
    "aseptic-cartons": {
      key: "aseptic-cartons",
      title: "Aseptic Cartons",
      heroImageUrl: "/images/aseptic/asepproduct.png",
      brandTag: "ASEPTO",
      overview: `Asepto innovatively incorporates the 3P's of Packaging - PRESERVE, PROTECT and PROMOTE. Our aseptic liquid packaging cartons encompass six layers of protection that keeps the freshness preserved in varieties of beverages, be it dairy and dairy-based beverages, nectar-based beverages, or beverages from the distillery industry. We augment your product positioning through innovative design aesthetics. Our state-of-the-art converting process and manufacturing facilities help us materialize our thoughts into reality. They are advanced, automated, and human-touch-free.`,

      quickLinks: [
        { label: "Aseptic Packaging Website", href: "https://www.asepto.com", external: true },
        { label: "Request Quote", href: "#" },
        { label: "Download Catalog", href: "#" },
      ],
    },
    "a-sip": {
      key: "a-sip",
      title: "A SIP",
      heroImageUrl: "/images/aseptic/asepproduct.png", // your screenshot hero
      brandTag: "A SIP",
      overview: `Asip is an upshot of UFlex Asepto’s core philosophy – Nature First. Asip, the u-shaped portion-pack paper straw from the house of UFlex, is the first ‘Made-in-India’ U-shaped paper straw. Asip u-shaped paper straw is the natural and the most viable alternative to plastic straws. It consists high-quality edible-grade paper that meets global standards. The adhesive used to keep the paper intact is ultra-premium and lab-tested – it helps the paper to maintain its shape. Asip u-shaped paper straw is environmentally friendly and in line with UFlex’s commitments towards nature.`,

      whyAsip: `Packaging is your key salesperson and we at Asepto believe that "All that Glitters is Sold". Our Holography and Foil Stamping Technology is definitely going to add edge to your brand and make it attractive on the retail shelf.`,

      keyFeatures: [
        "Superior Quality",
        "Unique Origami Technology",
        "Available in 125mm, 140mm and 160mm sizes",
        "Compatible with your existing straw applicator",
        "Used for Dairy & Dairy alternatives, Juices, Nectars, Still Drinks",
        "Suitable for PPH – Straw Hole",
      ],

      technology: `UFlex Asepto has implemented fully automated Dutch technology at its flagship plant in Sanand, Gujarat. This technology processes high-quality food-grade paper with ultra-premium lab-tested food-grade adhesive to roll out u-shaped paper straws. This technology scientifically twists the straws to create the origami spiral effect giving the straws their natural U shape. Production capacity approximately 2.4 billion annually.`,

      quickLinks: [
        { label: "Aseptic Packaging Website", href: "https://www.asepto.com", external: true },
        { label: "Request Quote", href: "#" },
        { label: "Download Catalog", href: "#" },
      ],
    },
    "filling-machines": {
      key: "filling-machines",
      title: "Filling Machines",
      heroImageUrl: "/images/filling-machines-hero.jpg", // your hero image
      brandTag: "ASEPTO",
      overview: "Filling machines are the core of the aseptic beverage production and packaging line...",
      quickLinks: [
        { label: "Aseptic Packaging Website", href: "https://www.asepto.com", external: true },
        { label: "Request Quote", href: "#" },
        { label: "Download Catalog", href: "#" },
      ],
    },
    "asepto-pro": {
      key: "asepto-pro",
      title: "Asepto Pro",
      heroImageUrl: "/images/asepto-pro-hero-map.jpg", // your map background image
      brandTag: "Asepto Pro",
      overview: "A minute of downtime can cause hours of losses to you...",
      quickLinks: [
        { label: "Aseptic Packaging Website", href: "https://www.asepto.com", external: true },
        { label: "Request Quote", href: "#" },
        { label: "Download Catalog", href: "#" },
      ],
    },
    "asepto-design": {
      key: "asepto-design",
      title: "Asepto Design",
      heroImageUrl: "/images/asepto-design-hero-fruits.jpg", // your hero with fruits & carton
      brandTag: "Asepto Design",
      overview: "Asepto Designs is the creative powerhouse within Asepto...",
      quickLinks: [
        { label: "Aseptic Packaging Website", href: "https://www.asepto.com", external: true },
        { label: "Request Quote", href: "#" },
        { label: "Download Catalog", href: "#" },
      ],
    },
    // Add other categories later...
  };

  const categories = [
    { name: "Aseptic Cartons", productKey: "aseptic-cartons" },
    { name: "A SIP", productKey: "a-sip" },
    { name: "Filling Machines", productKey: "filling-machines" },
    { name: "Asepto Pro", productKey: "asepto-pro" },
    { name: "Asepto Design", productKey: "asepto-design" },
  ];

  const enhancedCategories = categories.map((cat) => ({
    ...cat,
    isActive: cat.productKey === selectedKey,
    onClick: () => setSelectedKey(cat.productKey),
  }));

  // Default view: Overview (no nav selected) - exact first screenshot
  if (!selectedKey) {
    return (
      <>
        <SiteHeader />
        <div>
          <section className="relative w-full h-[580px] sm:h-[451px] overflow-hidden">

            <Image
              src="/images/3.png"
              alt="Investors Relations"
              fill
              className="object-cover w-full h-full"
              priority
            />

            <div className="absolute inset-0 bg-black/40"></div>


            <motion.div
              className="absolute inset-0 flex flex-col justify-end  text-white"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delayChildren: 0.3, staggerChildren: 0.3 },
                },
              }}
            >


              <motion.div
                className="bg-[#117ABA] lato-400 text-left w-[450px] h-[350px] sm:w-[706px] sm:h-[391px] text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[20px] pl-4 pt-2 pb-4 pr-4 md:pl-24 lg:pl-24 sm:pt-2 sm:pb-4 sm:pr-6 mb-12 sm:mb-8"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="w-[300px] sm:w-[537px] pl-4">


                  <h1 className="text-white text-[24px] lato-700  md:text-[42px]">
                    Aseptic Packaging


                  </h1>
                  As a leading provider of end-to-end aseptic liquid packaging solutions, we offer innovative designs, six-layered cartons, highly advanced filling machines, and exceptional service from highly trained engineers. In alignment with the Government’s Make in India initiative, our state- of-the-art manufacturing facility in Sanand, Gujarat, spans 21 acres within a 72-acre land parcel and boasts a production capacity of 12 billion packs annually.    {/* As an end-to-end flexible packaging solutions company, UFlex also holds the expertise to develop flexible tube Tube Packaging for a large number of FMCG brands in India and overseas */}
                </div>
              </motion.div>


            </motion.div>
          </section>
          <Breadcrumb
            items={[
              { label: "Aseptic Packaging", href: "/aseptic-packaging-business" },
              { label: "Aseptic Packaging Products" },
            ]}
          />

          <section className="bg-white pt-4 sm:pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left sidebar */}
                <aside className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white overflow-hidden hidden lg:block sticky top-6"
                  >
                    <div className="rounded-xl border border-gray-200">
                      <div className="bg-[#117ABA] text-white px-6 py-5">
                        <h2 className="text-lg lato-700 tracking-wide">PRODUCT CATEGORIES</h2>
                      </div>
                      <nav className="divide-y divide-gray-100">
                        {enhancedCategories.map((cat) => (
                          <motion.button
                            key={cat.name}
                            onClick={cat.onClick}
                            className="w-full flex items-center justify-between px-6 py-4 text-left text-black hover:bg-blue-50 border-l-4 border-transparent"
                          >
                            <span className="lato-400 text-[16px] sm:text-[18px]">{cat.name}</span>
                            <ChevronRight size={18} />
                          </motion.button>
                        ))}
                      </nav>
                    </div>

                   
                  </motion.div>
                </aside>

                {/* Default Overview - exact first screenshot */}
                <main className="lg:col-span-3 space-y-10">
                  <div className="relative h-[388px] overflow-hidden bg-[#8BB2C1]">
                    <Image src="/images/aseptic/asepproduct.png" alt="Aseptic Cartons" fill className="object-cover" priority />
                  </div>

                  <div className="bg-white ">
                    <h2 className="text-3xl font-bold text-[#117ABA] mb-6">Overview</h2>
                    <p className="text-lg leading-relaxed text-gray-800 mb-8">
                     Asepto innovatively incorporates the 3P’s of Packaging – PRESERVE, PROTECT and PROMOTE. Our aseptic liquid packaging cartons encompass six layers of protection that keeps the freshness preserved in varieties of beverages, be it dairy and dairy-based beverages, nectar-based beverages, or beverages from the distillery industry. We augment your product positioning through innovative design aesthetics. Our state-of-the-art converting process and manufacturing facilities help us materialize our thoughts into reality. They are advanced, automated, and human-touch-free.  </p>

                    <h3 className="text-2xl font-bold text-[#117ABA] mb-4">Our Innovation</h3>
                    <p className="text-lg leading-relaxed text-gray-800 mb-8">
                     Packaging is your key salesperson and we at Asepto believe that “All that Glitters is Sold“. Our Holography and Foil Stamping Technology is definitely going to add edge to your brand and make it attractive on the retail shelf.      </p>

                    <h3 className="text-2xl font-bold text-[#117ABA] mb-4">What We do for International Market</h3>
                    <p className="text-lg leading-relaxed text-gray-800 mb-8">
                     En route to its global vision and to meet its growing demand, Asepto has two state-of-the-art manufacturing plants. Its Sanand, Gujarat plant is attuned to the Government of India’s ‘Make in India’ mission. It is spread over 21 acres of the total 72 acres of land parcel and has an annual production capacity of 12 billion packs.

The second plant in Sokhna, Egypt, is about to be commissioned. Once operational, it will be the world’s most advanced aseptic liquid carton manufacturing unit with unmatched facilities. Asepto will produce an additional 18 billion packs from the Egypt manufacturing plant.
 </p>
                    <div className="mb-10">
                      <div className="relative h-[452px]  overflow-hidden bg-gray-50">
                        <Image src="/images/aseptic/world.png" alt="Our Presence" fill className="object-cover" />
                      </div>
                      
                    </div>

                    <div className="flex gap-6 justify-end">
                      <button className="bg-[#117ABA] text-white px-8 py-4 rounded-lg font-medium">Learn More</button>
                      <button className="border-2 border-[#117ABA] text-[#117ABA] px-8 py-4 rounded-lg font-medium">Request Sample</button>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </section>
        </div>
        <SiteFooter />
      </>
    );
  }

  // When any category is selected
  const product = productsData[selectedKey] || productsData["aseptic-cartons"];
  const { key: itemKey, ...restProps } = product;

  return (
    <>
      <SiteHeader />
      <section className="bg-white ">
        <section className="relative w-full h-[580px] sm:h-[451px] overflow-hidden">

          <Image
            src="/images/3.png"
            alt="Investors Relations"
            fill
            className="object-cover w-full h-full"
            priority
          />

          <div className="absolute inset-0 bg-black/40"></div>


          <motion.div
            className="absolute inset-0 flex flex-col justify-end  text-white"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.3, staggerChildren: 0.3 },
              },
            }}
          >


            <motion.div
                className="bg-[#117ABA] lato-400 text-left w-[450px] h-[350px] sm:w-[706px] sm:h-[391px] text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[20px] pl-4 pt-2 pb-4 pr-4 md:pl-24 lg:pl-24 sm:pt-2 sm:pb-4 sm:pr-6 mb-12 sm:mb-8"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="w-[300px] sm:w-[537px] pl-4">


                  <h1 className="text-white text-[24px] lato-700  md:text-[42px]">
                    Aseptic Packaging


                  </h1>
                  As a leading provider of end-to-end aseptic liquid packaging solutions, we offer innovative designs, six-layered cartons, highly advanced filling machines, and exceptional service from highly trained engineers. In alignment with the Government’s Make in India initiative, our state- of-the-art manufacturing facility in Sanand, Gujarat, spans 21 acres within a 72-acre land parcel and boasts a production capacity of 12 billion packs annually.    {/* As an end-to-end flexible packaging solutions company, UFlex also holds the expertise to develop flexible tube Tube Packaging for a large number of FMCG brands in India and overseas */}
                </div>
              </motion.div>


          </motion.div>
        </section>
        <Breadcrumb
            items={[
              { label: "Aseptic Packaging", href: "/aseptic-packaging-business" },
              { label: "Aseptic Packaging Products" },
            ]}
          />
        <div className="max-w-7xl mx-auto px-4">
          <ProductCategorySection
            key={itemKey}
            {...restProps}
            categories={enhancedCategories}
          />
        </div>
      </section>
      <SiteFooter />
    </>
  );
}