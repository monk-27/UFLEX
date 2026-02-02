
"use client";

import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Category {
  name: string;
  productKey: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface ProductCategorySectionProps {
  title: string;
  heroImageUrl: string;
  overview?: string;
  categories: Category[];
  brandTag?: string;
  // Add more props if needed later
}

export default function ProductCategorySection({
  title,
  heroImageUrl,
  overview = "",
  categories = [],
  brandTag = "",
}: ProductCategorySectionProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <section className="py-10 min-h-screen max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar – unchanged */}
        <aside className="lg:col-span-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white  overflow-hidden hidden lg:block sticky top-6"
                    >
                        <div className="">

                            <div className="bg-[#117ABA] text-white px-6 py-5">
                                <h2 className="text-lg lato-700 tracking-wide">Product Categories</h2>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-3 space-y-10"
        >
          {/* Hero – same as before */}
          {/* <div className="relative h-80 md:h-[420px] overflow-hidden "> */}
            {/* <Image
              src={heroImageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            /> */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" /> */}
            
          {/* </div> */}

          {/* Conditional Layouts per Category */}
          {title === "HOLOGRAM" && (
            <div className="bg-white  space-y-10">
              <div>
                {/* <h2 className="lato-700 text-[20px] sm:text-[24px] text-[#117ABA] mb-6">Overview:</h2> */}
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                  UFLEX offers best-in-class holograms that are available with 2D/3D, Dot Matrix & High-resolution Kinemax technology. Our range is reckoned for its vibrant color combination, print clarity and uncompromised quality. Further, these are offered in standard and customized shapes to the clients at most competitive price coordinates.
                </p>
              </div>

              <div className="bg-[#117ABA] text-white px-6 py-4 ">
                <h3 className="lato-700 text-[16px] sm:text-[18px] leading-relaxed text-white">
                  UFLEX offers hologram using the following technologies:
                </h3>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <h4 className="lato-700 text-[20px]  text-[#117ABA]">
                    1. ANALOG 2D/3D CONVENTIONAL:
                  </h4>
                  <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                    Primitive technology (conventional system) requires manual efforts in shooting masters. This technology produces holograms with two or three layers that includes background, middle ground and foreground.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="lato-700 text-[20px]  text-[#117ABA]">
                    2. DOT MATRIX (up to 24,000 dpi):
                  </h4>
                  <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                    Dot Matrix is considered to be one of the most secured holograms world-over. It easily helps to create, edit and expose digital holograms. A broad range of holographic effects such as kinetic and colour animation, 2D/3D modulation of the background, stereographic background, true colour images, single and animated hidden images, micro text, special texture images etc. can be obtained using this technology. All effects are easily accessible through the holographic softwares.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="lato-700 text-[20px]  text-[#117ABA]">
                    3. NON-DIFFRACTIVE LITHO (up to 1,20,000 DPI):
                  </h4>
                  <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                    In this technique, the system combines flexible diffraction gratings with generalized Fresnel lens calculation technique and optical lithography recording, allowing extreme freedom of designing diffractive structures, including Fresnel-type elements.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="lato-700 text-[20px] text-[#117ABA]">
                    4. E-BEAM:
                  </h4>
                  <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                    The holograms produced using E-Beam technology are considered to be the most secured holograms internationally. These holograms are made using very expensive and highly sophisticated technology called Electron Beams. This kind of technology allows the creation of originals of holograms with a resolution of up to 4 microns.
                  </p>
                </div>
              </div>

              <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black ">
                UFLEX offers a number of innovative security features (Mastering & Non-Mastering) that makes its holograms near to counter proof. Due to proprietary reasons, we haven't presented the details of security features on the website. Please contact us for your requirements related to security holograms. Our contact details are provided in the Contact us section, please visit the Contact us section.
              </p>

              {/* Sample Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className=" overflow-hidden ">
                  <Image
                    src="https://www.uflexltd.com/assets/images/holo/HOLOGRAM-1.jpg"
                    alt="Hologram Sample 1"
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
                <div className=" overflow-hidden ">
                  <Image
                    src="https://www.uflexltd.com/assets/images/holo/HOLOGRAM-2.jpg"
                    alt="Sample A"
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
                <div className=" overflow-hidden ">
                  <Image
                    src="https://www.uflexltd.com/assets/images/holo/HOLOGRAM-3.jpg"
                    alt="Sample B"
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-6 justify-start pt-6">
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Learn More
                </button>
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Request Sample
                </button>
              </div>
            </div>
          )}

          {title === "HOLOGRAPHIC FILM (Wide Web Films)" && (
            <div className="bg-white space-y-10">
              {/* Overview */}
              <div>
                {/* <h2 className="lato-700 text-[20px] sm:text-[24px] text-[#117ABA] mb-6">Overview:</h2> */}
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                  We produce high quality holographic films for the purpose of security and aesthetic value, ranging from 12 to 50 microns. These films can be used for wrapping gifts. The film can also be laminated with paper board and printed polyester in order to make pouches or boxes. It increases the aesthetic value of the product and evokes buyers interest at the point of sale (POS).
                </p>
              </div>

              {/* Red Heading Bar */}
              <div className="bg-[#117ABA] text-white px-6 py-4 lato-700 text-[16px] sm:text-[18px]">
                UFLEX offers best in quality holographic wide web films.
              </div>

              {/* Technologies – accordion style */}
              <div className="space-y-6">
                {/* 1. SOFT EMBOSSING FILM */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer text-[16px] sm:text-[18px] lato-700 text-[#117ABA]">
                    <span>1. SOFT EMBOSSING FILM:</span>
                    <ChevronDown className="w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm  text-white transition-transform group-open:rotate-180" size={24} />
                  </summary>
                  <div className="mt-4 pl-4 space-y-4">
                    <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                      Soft embossing film is manufactured in metalized, transparent and semi-transparent variants. This is used for promotional activities and secure packaging needs. This film is widely used in various industries viz. automobiles, food, FMCG, Pharmaceuticals & cosmetics, etc.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className=" overflow-hidden ">
                        <Image
                          src="https://www.uflexltd.com/assets/images/holo/SOFT-EMBOSSING-FILM.jpg"
                          alt="Soft Embossing Sample 1"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {/* Add 2 more if you have */}
                    </div>
                  </div>
                </details>

                {/* 2. HARD EMBOSSING FILM */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer text-[16px] sm:text-[18px] lato-700 text-[#117ABA]">
                    <span>2. HARD EMBOSSING FILM</span>
                    <ChevronDown className="w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm text-white transition-transform group-open:rotate-180" size={24} />
                  </summary>
                  <div className="mt-4 pl-4 space-y-4">
                    <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                      Hard embossing film is manufactured in metalized and semi-transparent variants having shim joint less laser pillar of light. This film is used for promotional activities and secure packaging needs. This film is widely used in various industries viz. automobiles, food, FMCG, Pharmaceuticals & cosmetics. Hard Embossing film has better chemical & heat resistivity than soft embossing film.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="overflow-hidden">
                        <Image
                          src="https://www.uflexltd.com/assets/images/holo/HARD-EMBOSSING-FILM.jpg"
                          alt="Hard Embossing Sample"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </details>

                {/* 3. UV EMBOSSING FILM */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer text-[16px] sm:text-[18px] lato-700 text-[#117ABA]">
                    <span>3. UV EMBOSSING FILM</span>
                    <ChevronDown className="text-white w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm transition-transform group-open:rotate-180" size={24} />
                  </summary>
                  <div className="mt-4 pl-4 space-y-4">
                    <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                      UV embossing film is manufactured in metalized, transparent and semi-transparent variants. This is used for promotional activities and secure packaging needs. This film is widely used in various industries viz. automobiles, food, FMCG, Pharmaceuticals & cosmetics. The brightness/gloss effect & chemical resistivity is far better than soft embossing film.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className=" overflow-hidden ">
                        <Image
                          src="https://www.uflexltd.com/assets/images/holo/UV-EMBOSSING-FILM.jpg"
                          alt="UV Embossing Sample"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </details>

                {/* 4. HRI HOLOGRAPHIC FILM */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer text-[16px] sm:text-[18px] lato-700 text-[#117ABA]">
                    <span>4. HRI HOLOGRAPHIC FILM</span>
                    <ChevronDown className="text-white w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm transition-transform group-open:rotate-180" size={24} />
                  </summary>
                  <div className="mt-4 pl-4 space-y-4">
                    <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                      High Reflective Index film is also called as Zinc metalized film is available in transparent form. This film is used specially for overlay/lamination on the printed substrate. After lamination, both print matter and holographic effects are clearly visible. This film is used for promotional activities and secure packaging needs. This film is widely used in various industries viz. automobiles, food, FMCG, Pharmaceuticals & cosmetics.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="overflow-hidden">
                        <Image
                          src="https://www.uflexltd.com/assets/images/holo/HRI-Holographic-FILM.jpg"
                          alt="HRI Sample"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </details>

                {/* 5. LENS FILM (F1 & F2) – 3 images */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer text-[16px] sm:text-[18px] lato-700 text-[#117ABA]">
                    <span>5. LENS FILM (F1 & F2)</span>
                    <ChevronDown className="w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-sm text-white transition-transform group-open:rotate-180" size={24} />
                  </summary>
                  <div className="mt-4 pl-4 space-y-4">
                    <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                      Lens effect is one of the advanced secured packaging features solutions. Various industries viz. automobiles, food, FMCG, Pharmaceuticals, cosmetics, etc are using this effect for their secured packaging needs. UFLEX offers different various sizes & shapes of lens to the customers.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className=" overflow-hidden ">
                        <Image
                          src="https://www.uflexltd.com/assets/images/holo/HOLOGRAPHIC-LENS-FILM-1.jpg"
                          alt="Lens Film F1"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className=" overflow-hidden ">
                        <Image
                          src="https://www.uflexltd.com/assets/images/holo/HOLOGRAPHIC-LENS-FILM-2.jpg"
                          alt="Lens Film F2"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className=" overflow-hidden ">
                        <Image
                          src="https://www.uflexltd.com/assets/images/holo/HOLOGRAPHIC-LENS-FILM-3.jpg"
                          alt="Lens Film Sample 3"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </details>

                {/* 6. HOLOGRAPHIC PVC FILM */}
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-[16px] sm:text-[18px] lato-700 text-[#117ABA]">
                    <span>6. HOLOGRAPHIC PVC FILM</span>
                    <ChevronDown className="text-white w-6 h-6 rounded-full bg-[#117ABA] flex items-center justify-center shadow-smtransition-transform group-open:rotate-180" size={24} />
                  </summary>
                  <div className="mt-4 pl-4 space-y-4">
                    <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                      Holographic PVC Film is developed targeting packaging requirement of various pharma companies which are using this product to make blister packs for medicines, capsules etc. Different Holographic features can be incorporated to provide protection against counterfeiting.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className=" overflow-hidden ">
                        <Image
                          src="https://www.uflexltd.com/assets/images/holo/Holographic-PVC-FILM.jpg"
                          alt="Holographic PVC Blister Sample"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-wrap gap-6 justify-start pt-8">
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Learn More
                </button>
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Request Sample
                </button>
              </div>
            </div>
          )}
          {title === "TEXTILE VALUE ADDITION PRODUCT" && (
            <div className="bg-white space-y-12">
              {/* Overview */}
              <div>
                {/* <h2 className="lato-700 text-[20px] sm:text-[24px] text-[#117ABA] mb-6">Overview:</h2> */}
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                  UFLEX understands the needs of embroidered and high fashion garment export houses. UFLEX is the only manufacturer in India that provides OEKO-TEX CERTIFIED Material to fashion houses. Due to our quality processes, our sequin films are widely accepted for computerized and hand embroidery processes. The thickness range varies from 91μ to 175μ. We provide about 800 plus colours and exclusive printed designs.
                </p>
              </div>

              {/* Red Heading Bar */}
              <div className="bg-[#117ABA] text-white px-6 py-4 lato-700 text-[16px] sm:text-[18px]">
                UFLEX offers following types of sequin films:
              </div>

              {/* Bullet list of types */}
              <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-3">
                <li>Matt colours</li>
                <li>Pearl colours</li>
                <li>Exclusive premium colours</li>
                <li>Metal/shiny colours</li>
                <li>Fluorescent colours</li>
                <li>Opaque colours</li>
                <li>Holographic Colours</li>
                <li>Rainbow colours</li>
                <li>Transparent colours</li>
              </ul>

              <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                UFLEX exports a large quantity of PVC free sequin film with more than 400 shades and design options. It is next to impossible to counterfeit our exclusive & innovative designs. UFLEX is equipped with world-class in-house manufacturing facilities to develop the best quality sequin films.
              </p>

              {/* Thickness Range */}
              <div>
                <h3 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA] mb-4">Thickness range:</h3>
                <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-2">
                  <li>FOR COMPUTERIZED EMBROIDERY: 90-150 Microns</li>
                  <li>FOR HAND EMBROIDERY: 130-250 Microns</li>
                </ul>
              </div>

              {/* New Developments – Soft Sequins */}
              <div className="space-y-8">
                <div className="bg-[#117ABA] text-white px-6 py-4 lato-700 text-[16px] sm:text-[18px]">
                  NEW DEVELOPMENTS: SOFT SEQUINS
                </div>

                {/* Sequins for Sublimation Printing */}
                <div className="space-y-4">
                  <h4 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">SEQUINS FOR SUBLIMATION PRINTING</h4>
                  <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-2">
                    <li>Special coating for good printing Result</li>
                    <li>High heat resistant</li>
                    <li>No shrinkage</li>
                    <li>No change in shape</li>
                  </ul>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=" overflow-hidden ">
                      <Image
                        src="https://www.uflexltd.com/assets/images/holo/SEQUINS-FOR-SUBLIMATION-PRINTING.jpg" // replace with your actual image
                        alt="Sublimation Printing Sample"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Soft Sequins for Kids Wear */}
                <div className="space-y-4">
                  <h4 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">SOFT SEQUINS FOR KIDS WEAR</h4>
                  <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-2">
                    <li>Specially developed for new born & kids wear</li>
                    <li>Sequins Film softer than standard Regular raw material</li>
                    <li>No sharp edges</li>
                    <li>Soft & smooth embroidery result</li>
                  </ul>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=" overflow-hidden ">
                      <Image
                        src="https://www.uflexltd.com/assets/images/holo/SOFT-SEQUINS-FOR-KIDS-WEAR.jpg"
                        alt="Soft Sequins Kids Wear Sample"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {/* <div className=" overflow-hidden ">
                      <Image
                        src="/images/textile/kids-wear-2.jpg"
                        alt="Soft Sequins Kids Wear Sample 2"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div> */}
                  </div>
                </div>

                {/* Soft Touch Sequins */}
                <div className="space-y-4">
                  <h4 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">SOFT TOUCH SEQUINS</h4>
                  <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-2">
                    <li>Soft-touch Sequins to replace Velvet Fabric Laminated Sequins</li>
                    <li>Single Layer Sequins</li>
                    <li>Available in Multiple Opaque Colours</li>
                    <li>Smooth Embroidery Effect</li>
                    <li>Ideal for Kids-wear & T-Shirts</li>
                  </ul>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=" overflow-hidden ">
                      <Image
                        src="https://www.uflexltd.com/assets/images/holo/SOFT-TOUCH-SEQUINS.jpg"
                        alt="Soft Touch Sequins Unicorn"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Ombre Print Sequins */}
                <div className="space-y-4">
                  <h4 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">OMBRE PRINT SEQUINS</h4>
                  <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-2">
                    <li>Multi-colour Embroidery possible with single sequins</li>
                    <li>Economical / Productivity</li>
                    <li>More options for creativity</li>
                  </ul>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=" overflow-hidden ">
                      <Image
                        src="https://www.uflexltd.com/assets/images/holo/OMBRE-PRINT-SEQUINS.jpg"
                        alt="Ombre Print Sequins Butterflies"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* FDS Double Colour Sequins */}
                <div className="space-y-4">
                  <h4 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">FDS DOUBLE COLOUR SEQUINS</h4>
                  <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-2">
                    <li>Double colour Top Hole Sequins in Trend</li>
                    <li>Available More than 120 combination</li>
                    <li>Lots of unique combination like one side white/rainbow other side metal/matt colour one side holo/other plain</li>
                  </ul>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=" overflow-hidden ">
                      <Image
                        src="https://www.uflexltd.com/assets/images/holo/FDS-DOUBLE-COLOUR-SEQUINS.jpg"
                        alt="FDS Double Colour Heart Sample"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 3D Lens Sequins */}
                <div className="space-y-4">
                  <h4 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">3D LENS SEQUINS</h4>
                  <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-2">
                    <li>New 3D / Lens Sequins for Unique Fancy look</li>
                    <li>Possible in Multi-colour</li>
                  </ul>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=" overflow-hidden ">
                      <Image
                        src="https://www.uflexltd.com/assets/images/holo/3D-LENS-SEQUINS.jpg"
                        alt="3D Lens Sequins Bow"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hot Melt Film */}
              <div className="space-y-6 pt-8">
                <h3 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">2. HOT MELT FILM (50 MICRON.)</h3>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                  Hot Melt Film is a thick film (holographic or non-holographic) on which heat activated glues (hot melt glue) are applied to use them on fabrics. Hot Melt Film are mostly used in decorative and textile products and are available in multiple colours
                </p>

                <div className="bg-[#117ABA] text-white px-6 py-4  lato-700 text-lg">
                  Production available:
                </div>

                <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-2">
                  <li>MAX SIZE (Width): 40", 42", 44" & 52" (any size less than 52")</li>
                  <li>THICKNESS: 23μ-140μ, 44" & 52" (any size less than 52")</li>
                  <li>MATERIAL: PET</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className=" overflow-hidden ">
                    <Image
                      src="https://www.uflexltd.com/assets/images/holo/HOT-MELT-FILM-1.jpg"
                      alt="Hot Melt Film Sample 1"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className=" overflow-hidden ">
                    <Image
                      src="https://www.uflexltd.com/assets/images/holo/HOT-MELT-FILM-2.jpg"
                      alt="Hot Melt Film Sample 2"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className=" overflow-hidden ">
                    <Image
                      src="https://www.uflexltd.com/assets/images/holo/HOT-MELT-FILM-3.jpg"
                      alt="Hot Melt on Fabric Sample"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Holographic Glitter Film */}
              <div className="space-y-6 pt-8">
                <h3 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">3. HOLOGRAPHIC GLITTER FILM (23 Micron)</h3>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                  UFLEX is specialized in manufacturing holographic glitter films for metallic yarns in a variety of colors & designs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" overflow-hidden ">
                    <Image
                      src="https://www.uflexltd.com/assets/images/holo/HOLOGRAPHIC-GLITTER-FILM.jpg"
                      alt="Holographic Glitter Reel"
                      width={500}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-wrap gap-6 justify-end pt-10">
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Learn More
                </button>
                <button className="border-2 border-[#117ABA] text-[#117ABA] px-8 py-4  font-medium hover:bg-blue-50 transition">
                  Request Sample
                </button>
              </div>
            </div>
          )}


          {title === "Hot Stamping Foil" && (
            <div className="bg-white space-y-12">
              {/* Overview */}
              <div>
                {/* <h2 className="lato-700 text-[20px] sm:text-[24px] text-[#117ABA] mb-6">Overview:</h2> */}
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                  UFLEX is a pioneer in producing holographic/non-holographic hot stamping foils for printing, packaging and textile industry. Hot stamping foils is primarily used to enhance visual appeal and brand protection. Our hot stamping foils are suitable for a wide range of substrates and good for fine details to solid patch jobs.
                </p>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black mt-4">
                  UFLEX offers various ranges of Hot Stamping Foils which all are suitable for over printing. Available in both Holographic & Non Holographic Colours for all grades.
                </p>
              </div>

              {/* Red Heading Bar */}
              <div className="bg-[#117ABA] text-white px-6 py-4 lato-700 text-[16px] sm:text-[18px]">
                UFLEX hot stamping foils can be used on a wide assortment of products in:
              </div>

              {/* Textile Grade */}
              <div className="space-y-6">
                <h3 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">TEXTILE GRADE – Regular and Multi Wash:</h3>
                <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-3">
                  <li>Suitable for Cotton & Synthetic fabric with pre-coated adhesives for finest line design and solid area application</li>
                  <li>Application in Decorative textiles, T-shirts, Evening dresses, Dress Materials, Furnishing Fabrics & Swimwear etc.</li>
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" overflow-hidden ">
                    <Image
                      src="https://www.uflexltd.com/assets/images/holo/HOT-STAMPING-FOIL-TEXTILE-GRADE.jpg" // replace with your actual image
                      alt="Textile Grade Hot Stamping Sample"
                      width={500}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Graphic Grade */}
              <div className="space-y-6">
                <h3 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">GRAPHIC GRADE – Hot Stamping & Cold Foil:</h3>
                <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-3">
                  <li>Easy release, excellent coverage and adhesion on glossy and Matt Opp laminated paper and board</li>
                  <li>Suitable for both fine line and medium to large area stamping designs.</li>
                  <li>Application in Wine & Spirit labels, Cosmetics, Greeting cards, Varnished Paper, Cigarette packs, Book Covers and Carton etc.</li>
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" overflow-hidden ">
                    <Image
                      src="https://www.uflexltd.com/assets/images/holo/HOT-STAMPING-FOIL-GRAPHIC-GRADE.jpg"
                      alt="Graphic Grade Hot Stamping Sample"
                      width={500}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Plastic Grade */}
              <div className="space-y-6">
                <h3 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">PLASTIC GRADE:</h3>
                <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-3">
                  <li>Suitable for PS, PP, HIPS, Moulded Plastic Parts</li>
                  <li>Wall clocks, Cosmetic Containers, Toys, Plastic File Covers / Folders and Diary cover, Plastic Photo Frame etc.</li>
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" overflow-hidden ">
                    <Image
                      src="https://www.uflexltd.com/assets/images/holo/HOT-STAMPING-FOIL-PLASTIC-INDUSTRY.jpg"
                      alt="Plastic Grade Hot Stamping Sample"
                      width={500}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-wrap gap-6 justify-start pt-10">
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Learn More
                </button>
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Request Sample
                </button>
              </div>
            </div>
          )}
          {title === "HOLOGRAPHIC METALIZED PAPER & BOARD TRANSFER" && (
            <div className="bg-white space-y-12">
              {/* Overview */}
              <div>
                {/* <h2 className="lato-700 text-[20px] sm:text-[24px] text-[#117ABA] mb-6">Overview:</h2> */}
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                  Transfer metalizing process refers to adding a thin layer of Aluminium (with or without holographic Lacquer or the color) to a substrate namely paper, board or a film. The layer of aluminium adds a bright metallic and high gloss effect. These metalized substrates are used as base materials for packaging, labels, promotions & publications.
                </p>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black mt-4">
                  Metalizing can be done in 2 ways namely:
                </p>
                <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-3 mt-2">
                  <li>
                    <strong>Direct Metalizing:</strong> The substrates are directly put into the Metallizers to transfer thin layer onto the surface, this is also called as vacuum metalizing. UFLEX do not make direct metalized paper/board at the moment.
                  </li>
                  <li>
                    <strong>Transfer Metalizing:</strong> The aluminium layer/lacquers are first transferred to the surface of a carrier film, usually by engraved cylinders. This carrier film is then laminated to the substrates onto which the transfer is to be done. The carrier film is then removed after curing followed by transfer of fine aluminium layer.
                  </li>
                </ul>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black mt-4">
                  Transfer metalizing offers a greater mirror effect, especially suitable for increasing aesthetic appeal and also used for decorative purposes. With Transfer metalizing almost any surface can be metalized as its applications are more versatile.
                </p>
              </div>

              {/* Product Range Red Bar */}
              <div className="bg-[#117ABA] text-white px-6 py-4 lato-700 text-[16px] sm:text-[18px]">
                Product Range:
              </div>

              {/* Transfer Metalized Materials */}
              <div className="space-y-6">
                <h3 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">Transfer Metalized materials can be supplied in:</h3>
                <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-3">
                  <li><strong>Silver:</strong> Hi gloss surface with the shiny silver surface</li>
                  <li><strong>Gold:</strong> A gold effect is created by adding pigment to the release coating prior to metalizing.</li>
                  <li><strong>Holographic:</strong> An extra glitter/brand protection/ security effect is created by pre-embossing the release coating prior to metalizing.</li>
                  <li><strong>Matt Designs:</strong> Matt designs are available in Silver, Gold, and Holographic designs/ colours, by doing an extra matt coating to the carrier layer of transfer.</li>
                  <li><strong>Lens Transfer:</strong> We produce beautiful lens transfer paper & boards, the lens transfer designs can be in a continuous running form or these can be registered as per the customer's layout of given format of label or a carton.</li>
                </ul>

                {/* Sample Products Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" overflow-hidden ">
                    <Image
                      src="https://www.uflexltd.com/assets/images/holo/Holography-Product-Range.jpg"
                      alt="Transfer Metalized Products"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Benefits Red Bar */}
              <div className="bg-[#117ABA] text-white px-6 py-4 lato-700 text-[16px] sm:text-[18px]">
                BENEFITS OF TRANSFER PAPER/BOARD
              </div>

              {/* Benefits List */}
              <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-3">
                <li>No Swarf, improved die-cutting and less machine wear as compared to other metalized products like films or the foil in some cases</li>
                <li>Bright metallic effect will offer a luxury and high quality image.</li>
                <li>Supplied in hi gloss silver, gold and holographic patterns.</li>
                <li>Everyone do not like the glossy & glittery stuff so, we have more elegant products with matt effects in silver, gold and in holographic patterns</li>
                <li>Our recent & new product is the lens transfer paper/ board, with beautiful holographic lens patters as per customized designs with the glossy or matt backgrounds</li>
                <li>Excellent printability across various processes like Flexo, Gravure, Offset UV, Screen & digital</li>
                <li>Excellent print finishing: Process-ability in folding, gluing, die-cutting, embossing, twisting, less machine wear, no white lines/fibre appearance on creases.</li>
                <li>Weight saving: only 4-5 GSM is added to the base weight of the substrate.</li>
                <li>Environmental friendly as there is no plastic component in the structure of the paper and gives excellent aesthetic & anti-counterfeit solution. This is completely biodegradable and decomposes in the soil along with main substrate of paper/ board</li>
              </ul>

              {/* Benefits Sample Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className=" overflow-hidden ">
                  <Image
                    src="https://www.uflexltd.com/assets/images/holo/BENEFITS-OF-TRANSFER-PAPER-BOARD.jpg" // replace with your actual image
                    alt="Fercee Red Syrup Box"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Product Categories, Applications & Industries Table */}
              <div className="space-y-6">
                {/* Red Heading Bar – exact match */}
                <div className="bg-[#117ABA] text-white px-6 py-4 rounded-t-lg lato-700 text-[16px] sm:text-[18px]">
                  Product Categories, Applications & Industries:
                </div>

                {/* Categories Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-left">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-6 py-4 lato-700 text-[#117ABA] text-center font-bold">Categories</th>
                        <th className="border border-gray-300 px-6 py-4 lato-700 text-[#117ABA] text-center font-bold">Labelling</th>
                        <th className="border border-gray-300 px-6 py-4 lato-700 text-[#117ABA] text-center font-bold">Publishing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Packaging</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Labelling</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Publishing</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Paper & Board</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Paper & Film</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Paper & Board</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Applications Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-left">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-6 py-4 lato-700 text-[#117ABA] text-center font-bold">Applications</th>
                        <th className="border border-gray-300 px-6 py-4 lato-700 text-[#117ABA] text-center font-bold">Self-Adhesive Paper Stock</th>
                        <th className="border border-gray-300 px-6 py-4 lato-700 text-[#117ABA] text-center font-bold">Cartons</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Folding Cartons</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Self-Adhesive Paper Stock</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Cartons</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Food pouches</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Wet glue labels</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Labels</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Blister Cards</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Box wrap</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Registered Lens projects</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Industries Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-left">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-6 py-4 lato-700 text-[#117ABA] text-center font-bold">Industries</th>
                        <th className="border border-gray-300 px-6 py-4 lato-700 text-[#117ABA] text-center font-bold">Wire & cables</th>
                        <th className="border border-gray-300 px-6 py-4 lato-700 text-[#117ABA] text-center font-bold">Publishing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Tobacco</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Wire & cables</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Publishing</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Wine & spirits</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Health & Beauty</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Advertising</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Food & FMCG</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Pharmaceutical</td>
                        <td className="border border-gray-300 px-6 py-4 lato-400 text-center text-black">Lubricants</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>



              {/* Bottom Buttons */}
              <div className="flex flex-wrap gap-6 justify-start pt-10">
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Learn More
                </button>
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Request Sample
                </button>
              </div>
            </div>
          )}

          {title === "Labeling Solution" && (
            <div className="bg-white space-y-12">
              {/* Overview */}
              <div>
                {/* <h2 className="lato-700 text-[20px] sm:text-[24px] text-[#117ABA] mb-6">Overview:</h2> */}
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                  UFLEX is one of the leading organizations providing the most popular labeling solutions to various industry verticals. UFLEX’s pressure-sensitive labels/self-adhesive labels are an excellent choice for various products in homecare, pharmaceuticals, personal care, wine/liquor, food & beverages, automobile and several other products in other industry verticals. Our label production facility customize labels and printing in a variety of stocks, inks and processes.
                </p>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black mt-4">
                  We can print on virtually anything, including:
                </p>
                <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-2 mt-2">
                  <li>Paper</li>
                  <li>Foil</li>
                  <li>Synthetic materials</li>
                  <li>PET/PP/PE Clear and Opaque film</li>
                  <li>Metalized paper/film</li>
                </ul>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black mt-4">
                  Our State-of-the-art manufacturing facilities cater large volume of production orders, and also ensure highest quality standards, aesthetic appeal & brand enhancement.
                </p>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black mt-4">
                  We offer customized solutions to our clients and provide several options in terms of variety of papers and film substrate that attract end-users attention at the point sale.
                </p>
              </div>

              {/* Red Heading Bar – Various Labeling Solutions */}
              <div className="bg-[#117ABA] text-white px-6 py-4 lato-700 text-[16px] sm:text-[18px]">
                VARIOUS LABELING SOLUTIONS THAT WE OFFER ARE:
              </div>

              {/* List of Labeling Solutions */}
              <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-3">
                <li>Printed Labels (Product Label)</li>
                <li>Anti-Counterfeit Labels</li>
                <li>Scratch Labels</li>
                <li>Serial No. Labels</li>
                <li>Tamper Evident Security Labels</li>
                <li>Barcode Label</li>
                <li>Thermal Transfer Labels</li>
                <li>Holographic Labels</li>
                <li>Labels with registered lens technology & Screen Printing</li>
                <li>Security coupons for promotional activities.</li>
              </ul>

              {/* Nikhar Amla Oil Sample Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className=" overflow-hidden ">
                  <Image
                    src="https://www.uflexltd.com/assets/images/holo/VARIOUS-LABELING.jpg" // replace with your actual image
                    alt="Nikhar Amla Oil Labeled Bottle"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Additional Description */}
              <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                UFLEX provides pressure-sensitive labels for industry specific solutions meeting customers’ requirements. Our range of solutions contains high-durability Prime Labels, Drum Labels, Performance Labels, Security/Tamper Evident Labels and Promotional Label.
              </p>

              {/* Taggant Security Label Diagram */}
              <div className="space-y-6">
                <div className=" overflow-hidden">
                  <Image
                    src="https://www.uflexltd.com/assets/images/holo/pressure-sensitive-labels.jpg" // replace with your actual diagram image
                    alt="Taggant Security Label Features Diagram"
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Industries Served */}
              <div className="space-y-6">
                <h3 className="lato-700 text-[16px] sm:text-[18px] text-[#117ABA]">We are serving labelling solutions to almost all industry verticals.</h3>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                  Our expert and experienced professionals specialize in providing solutions to a varied range of customers.
                </p>
                <ul className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black list-disc pl-8 space-y-2">
                  <li>White Goods Appliances</li>
                  <li>Foods & Beverages</li>
                  <li>Healthcare & Pharmaceuticals</li>
                  <li>Automobiles</li>
                  <li>Mobile & Telecom</li>
                  <li>Cosmetics</li>
                  <li>Liquor</li>
                  <li>Ecommerce</li>
                  <li>FMCG</li>
                </ul>

                {/* Brand Protection Sample Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" overflow-hidden ">
                    <Image
                      src="https://www.uflexltd.com/assets/images/holo/range-of-customers.jpg"
                      alt="Brand Protection Label Sample 1"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {/* <div className=" overflow-hidden ">
                    <Image
                      src="/images/labeling/brand-protection-2.jpg"
                      alt="Brand Protection Label Sample 2"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div> */}
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-wrap gap-6 justify-start pt-10">
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Learn More
                </button>
                <button className="bg-[#117ABA] text-white px-8 py-4  font-medium  transition rounded-sm">
                  Request Sample
                </button>
              </div>
            </div>
          )}


        </motion.main>
      </div>
    </section>
  );
}