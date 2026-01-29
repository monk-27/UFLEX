
"use client";

import { useEffect, useState } from "react";
import ProductCategorySection from "./product-reusable";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Breadcrumb from "@/components/breadcrumb";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
    // const [selectedKey, setSelectedKey] = useState<string>("hologram");

    const productsData: Record<string, any> = {
        hologram: {
            key: "hologram",
            title: "HOLOGRAM",
            heroImageUrl: "/images/holography/h7.png", // replace with actual hero
            brandTag: "HOLOGRAM",
            overview: `UFLEX offers best-in-class holograms that are available with 2D/3D, Dot Matrix & High-resolution Kinemax technology. Our range is reckoned for its vibrant color combination, print clarity and uncompromised quality. Further, these are offered in standard and customized shapes to the clients at most competitive price coordinates.`,

            technologiesHeading: "UFLEX offers hologram using the following technologies:",

            technologies: [
                {
                    title: "1. ANALOG 2D/3D CONVENTIONAL:",
                    description:
                        "Primitive technology (conventional system) requires manual efforts in shooting masters. This technology produces holograms with two or three layers that includes background, middle ground and foreground.",
                },
                {
                    title: "2. DOT MATRIX (up to 24,000 dpi):",
                    description:
                        "Dot Matrix is considered to be one of the most secured holograms world-over. It easily helps to create, edit and expose digital holograms. A broad range of holographic effects such as kinetic and colour animation, 2D/3D modulation of the background, stereographic background, true colour images, single and animated hidden images, micro text, special texture images etc. can be obtained using this technology. All effects are easily accessible through the holographic softwares.",
                },
                {
                    title: "3. NON-DIFFRACTIVE LITHO (up to 1,20,000 DPI):",
                    description:
                        "In this technique, the system combines flexible diffraction gratings with generalized Fresnel lens calculation technique and optical lithography recording, allowing extreme freedom of designing diffractive structures, including Fresnel-type elements.",
                },
                {
                    title: "4. E-BEAM:",
                    description:
                        "The holograms produced using E-Beam technology are considered to be the most secured holograms internationally. These holograms are made using very expensive and highly sophisticated technology called Electron Beams. This kind of technology allows the creation of originals of holograms with a resolution of up to 4 microns.",
                },
            ],

            securityNote:
                "UFLEX offers a number of innovative security features (Mastering & Non-Mastering) that makes its holograms near to counter proof. Due to proprietary reasons, we haven't presented the details of security features on the website. Please contact us for your requirements related to security holograms. Our contact details are provided in the Contact us section, please visit the Contact us section.",

            samples: [
                "/images/hologram/sample-1.jpg",
                "/images/hologram/sample-a.jpg",
                "/images/hologram/sample-b.jpg",
            ],

            categories: [
  { name: "Hologram",                              productKey: "hologram" },
  { name: "Holographic Film (Wide Web Films)",     productKey: "holographic-film" },
  { name: "Textile Value Addition Product",        productKey: "textile" },
  { name: "Hot Stamping Foil",                     productKey: "hot-stamping" },
  { name: "Holographic Metalized Paper & Board Transfer", productKey: "metalized-paper" },
  { name: "Labeling Solution",                     productKey: "labeling" },
],

            quickLinks: [
                { label: "Aseptic Packaging Website", href: "https://www.asepto.com", external: true },
                { label: "Request Quote", href: "#" },
                { label: "Download Catalog", href: "#" },
            ],
        },
        "holographic-film": {
            key: "holographic-film",
            title: "HOLOGRAPHIC FILM (Wide Web Films)",
            heroImageUrl: "/images/holography/h4.png", // your hero
            brandTag: "HOLOGRAPHIC FILM",
            categories: [
  { name: "Hologram",                              productKey: "hologram" },
  { name: "Holographic Film (Wide Web Films)",     productKey: "holographic-film" },
  { name: "Textile Value Addition Product",        productKey: "textile" },
  { name: "Hot Stamping Foil",                     productKey: "hot-stamping" },
  { name: "Holographic Metalized Paper & Board Transfer", productKey: "metalized-paper" },
  { name: "Labeling Solution",                     productKey: "labeling" },
],
        },
        "textile": {
            key: "textile",
            title: "TEXTILE VALUE ADDITION PRODUCT",
            heroImageUrl: "/images/holography/h3.png", // add your hero
            brandTag: "TEXTILE VALUE ADDITION",
            categories: [
  { name: "Hologram",                              productKey: "hologram" },
  { name: "Holographic Film (Wide Web Films)",     productKey: "holographic-film" },
  { name: "Textile Value Addition Product",        productKey: "textile" },
  { name: "Hot Stamping Foil",                     productKey: "hot-stamping" },
  { name: "Holographic Metalized Paper & Board Transfer", productKey: "metalized-paper" },
  { name: "Labeling Solution",                     productKey: "labeling" },
],
        },
        "hot-stamping": {
            key: "hot-stamping",
            title: "Hot Stamping Foil",
            heroImageUrl: "/images/holography/h6.png", // add your hero image
            brandTag: "HOT STAMPING FOIL",
           categories: [
  { name: "Hologram",                              productKey: "hologram" },
  { name: "Holographic Film (Wide Web Films)",     productKey: "holographic-film" },
  { name: "Textile Value Addition Product",        productKey: "textile" },
  { name: "Hot Stamping Foil",                     productKey: "hot-stamping" },
  { name: "Holographic Metalized Paper & Board Transfer", productKey: "metalized-paper" },
  { name: "Labeling Solution",                     productKey: "labeling" },
],
        },
        "metalized-paper": {
            key: "metalized-paper",
            title: "HOLOGRAPHIC METALIZED PAPER & BOARD TRANSFER",
            heroImageUrl: "/images/holography/h5.png", // add your hero image
            brandTag: "METALIZED PAPER & BOARD TRANSFER",
            categories: [
  { name: "Hologram",                              productKey: "hologram" },
  { name: "Holographic Film (Wide Web Films)",     productKey: "holographic-film" },
  { name: "Textile Value Addition Product",        productKey: "textile" },
  { name: "Hot Stamping Foil",                     productKey: "hot-stamping" },
  { name: "Holographic Metalized Paper & Board Transfer", productKey: "metalized-paper" },
  { name: "Labeling Solution",                     productKey: "labeling" },
],
        },
        "labeling": {
            key: "labeling",
            title: "Labeling Solution",
            heroImageUrl: "/images/holography/h1.png", // add your hero image
            brandTag: "LABELING SOLUTION",
            categories: [
  { name: "Hologram",                              productKey: "hologram" },
  { name: "Holographic Film (Wide Web Films)",     productKey: "holographic-film" },
  { name: "Textile Value Addition Product",        productKey: "textile" },
  { name: "Hot Stamping Foil",                     productKey: "hot-stamping" },
  { name: "Holographic Metalized Paper & Board Transfer", productKey: "metalized-paper" },
  { name: "Labeling Solution",                     productKey: "labeling" },
],
        },
        // Add more products later with different layouts
        // "holographic-film": { ... },
    };


    const product =
        Object.values(productsData).find(
            (p: any) => p.key === selectedKey
        ) ?? productsData.hologram;

    const { key: _ignored, ...productProps } = product;
    //   const product = productsData[selectedKey] || productsData.hologram;


    const searchParams = useSearchParams();
const catFromUrl = searchParams.get('cat')?.toLowerCase() || null;

const validKeys = [
  "hologram",
  "holographic-film",
  "textile",
  "hot-stamping",
  "metalized-paper",
  "labeling",
] as const;

const initialKey = catFromUrl && validKeys.includes(catFromUrl as any)
  ? catFromUrl
  : "hologram"; // default to hologram when no/invalid ?cat

const [selectedKey, setSelectedKey] = useState<string>(initialKey);

// Sync state when URL changes (back/forward navigation, direct link)
useEffect(() => {
  const currentCat = searchParams.get('cat')?.toLowerCase();
  if (currentCat && validKeys.includes(currentCat as any)) {
    setSelectedKey(currentCat);
  } else if (!currentCat) {
    setSelectedKey("hologram"); // reset to default when param removed
  }
}, [searchParams]);
    // // const enhancedCategories = product.categories.map((cat: any) => ({
    // //     ...cat,
    // //     isActive: cat.productKey === selectedKey,
    // //     onClick: () => setSelectedKey(cat.productKey),
    // }));
    const handleCategoryClick = (productKey: string) => {
  setSelectedKey(productKey);

  // Update URL without reload (makes links shareable + back button works)
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('cat', productKey);
    window.history.replaceState({}, '', url.toString());
  }
};

const enhancedCategories = product.categories.map((cat: any) => ({
  ...cat,
  isActive: cat.productKey === selectedKey,
  onClick: () => handleCategoryClick(cat.productKey),
}));

    return (
        <>

            <SiteHeader />
            <section className='bg-white '>
                <div className="">
                    <div className="space-y-0">





                        <section className="relative w-full h-[580px] sm:h-[451px] overflow-hidden">

                            <Image
                                src="/images/holography/hall.png"
                                alt="Investors Relations"
                                fill
                                className="object-cover w-full h-full"
                                priority
                            />

                            <div className="absolute inset-0 bg-black/40"></div>


                            {/* <motion.div
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
                                    className="bg-[#117ABA] lato-400 text-left w-[450px] h-[350px] sm:w-[706px] sm:h-[361px] text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[20px] pl-4 pt-2 pb-4 pr-4 md:pl-24 lg:pl-28 sm:pt-2 sm:pb-4 sm:pr-12 mb-12 sm:mb-12"
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                >
                                    <div className="w-[300px] sm:w-[537px]">


                                        <h1 className="text-white text-[24px] lato-700  md:text-[42px]">
                                            Holography

                                        </h1>
                                        UFlex’ Holography business offers a wide range of holographic products & solutions that includes Holograms, Holographic Scratch, Holographic Wads, Self-adhesive labels, Printed Labels to Holographic Paper Labels, Holographic Strips, Holographic Pouches, Hologram Sticker Printing, Holographic Films, HSF Foil, Glitter Film, Sequins Films, Hot Melt Film, Fancy Yarn Films & Security Documents</div>
                                </motion.div>


                            </motion.div> */}
                        </section>
                        <Breadcrumb
                            items={[
                                { label: "Holography", href: "/holography-business" },
                                { label: "Holography Products" },
                            ]}
                        />
                        <ProductCategorySection
                            {...productProps}
                            categories={enhancedCategories}
                        />
                    </div>
                </div>
            </section>
            <SiteFooter />
        </>

    );
}