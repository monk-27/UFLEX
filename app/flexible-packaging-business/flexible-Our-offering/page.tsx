// app/products/page.tsx
"use client";

import { useState } from "react";
import ProductCategorySection from "./product-reusable";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion } from "framer-motion";
import { ReadMoreDialog } from "@/components/expandabletext";
import Image from 'next/image';

export default function ProductsPage() {
    const productsData: any = {
        flexible: {
            key: "flexible",
            title: "FLEXIBLE LAMINATES",
            heroImageUrl:
                "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-08511505115.jpg",
            brandTag: "FLEXIBLE LAMINATES",
            highlightText:
                "We offer flexible laminates made of various Plastic, Aluminum and Paper combinations such as :",
            bulletList: [
                "PET/PE, PET/MET PET/PE, PET/Foil/PE, PET/CPP, PET/BOPP (Nat, White & Metalized), PET/Extr/Foil/Extr/PE",
                "PET/Foil/BON/CPP, AlOx Pet/BON/CPP (Retort)",
                "BOPP/BOPP, BOPP/CPP, BOPP/PE (Nat, White & Metalized), BOPP/Extr/Met Pet/PE",
                "BON/PE, PE/Tie/PA/Tie/PE",
                "CPP/PP Thermoformable Laminates",
                "Paper/Al. Foil/HS Coating, Paper/Extr/Foil/Extr/PE",
                "Al. Foil/Paper (Embossed)",
                "PET/HS, Foil/HS (Lids)",
                "BOPP/Extr/WPP, BOPP/Extr/Met Pet/WPP",
                "Zip Pouch and Zip Foil (Consumer Business)",
            ],

            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],



            quickLinks: [
                { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
                { label: "Request Quote", href: "https://www.flexfilm.com/" },
                { label: "Download Catalog", href: "https://www.flexfilm.com/" },
            ],
        },
        preFormedPouches: {
            key: "pre-formed",
            title: "PRE-FORMED POUCHES",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-08533105331.jpg",
            brandTag: "PRE-FORMED POUCHES",

            highlightText:
                "We offer Flexible Pouches made of various formats such as :",

            bulletList: [
                "Slider Zipper Pouches (for powder and granules)",
                "Innolok™ Pouches",
                "Pouring Spout Pouches (for liquids)",
                "3D Pouches (Quad-Seal Bags)",
                "4D Pouches",
                "Carry bags",
                "Flexi Bottles",
                "Stand-up",
                "Centre sealed",
                "Three side sealed",
                "Gusseted pouches",
                "Reclosable-Press to Close",
                "Flexi Tubes",
            ],

            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],



        },
        flexoPrinted: {
            key: "flexo",
            title: "FLEXO PRINTED ROLLS & BAGS",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-09042700427.jpg",
            brandTag: "FLEXO PRINTED",

            highlightText:
                "We offer Flexo Surface Printed bags for Baby and Feminine Hygiene products made of various formats such as:",

            bulletList: [
                "Surface Printed Poly Rolls",
                "Bottom Gusset Bags",
                "Wicketed Bottom Gusset Bags",
                "Handle Gusseted Bags",
            ],

            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],
        },
        wppBags: {
            key: "wpp",
            title: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-09042710427.jpg",
            brandTag: "WPP BAGS",

            highlightText:
                "We offer WPP Bags made of various formats such as:",

            bulletList: [
                "Block Bottom Bags for Cement, Building Materials, Chemicals, Fertilizers, Seeds etc.",
                "Pinch Bottom Bags for Pet Foods, Rice etc.",
                "Handle Bags for Rice, Commodities etc.",
                "Business Promotion Bags",
                "Reusable Shopping Bags",
                "Bulk Bags for Collation",
            ],

            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],
        },
        electronBeam: {
            key: "eb-cnc",
            title: "ELECTRON BEAM & CAST N CURE",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-09042720427.jpg",
            brandTag: "E BEAM & CNC",

            highlightText:
                "We offer various print finishes in Electron Beam and Cast n Cure technologies in Flexible Packaging:",

            bulletList: [
                "Super Gloss Finish",
                "Matte Finish",
                "Registered Cast n Cure",
                "Holography Cast n Cure",
                "Registered E Beam",
            ],

            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],
        },

        pharmaceutical: {
            key: "pharma",
            title: "PHARMACEUTICAL PACKAGING",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-09042730427.jpg",
            brandTag: "PHARMA PACKAGING",

            highlightText:
                "We offer various products for the Pharmaceutical Industry such as:",

            bulletList: [
                "Cold Form",
                "Alu Laminates",
                "Strip Foil",
                "Blister Foil",
                "Child Resistant Foil",
                "Suppository Film",
            ],

            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],
        },
        hygieneFilms: {
            key: "hygiene",
            title: "HYGIENE FILMS",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-09042740427.jpg",
            brandTag: "HYGIENE FILMS",

            highlightText:
                "We offer several options in Hygiene Films for use in :",

            bulletList: [
                "Diaper Breathable Films",
                "Sanitary Napkin Back Sheet Films",
            ],

            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],
        },
        flexfresh: {
            key: "flexfresh",
            title: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-08533115331.jpg",
            brandTag: "FLEXFRESH™",

            highlightText:
                "We offer Flexfresh Liner Bags and Films offering shelf Life Extension solution for use in :",

            bulletList: [
                "Fresh Vegetables",
                "Fresh Fruits",
                "Fresh Flowers",
            ],

            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],
        },
        flexitubes: {
            key: "FlexiTubes",
            title: "FlexiTubes",
            heroImageUrl: "https://www.uflexltd.com/assets/images/packaging/flexi-tubes.jpg",
            brandTag: "FlexiTubes",
            highlightText: "",
            bulletList: [],
            learnlink:"https://www.uflexltd.com/pdf/FlexitubeBrochure.pdf",
            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],

        },
        premium: {
            key: "premium",
            title: "Premium Shower Proof Bag",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item6-09042750427.jpg",
            brandTag: "Premium Shower Proof Bag",
            highlightText: "",
            bulletList: [],
            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],

        },


        n95: {
            key: "n95",
            title: "Six Layered Cotton N95 Mask",
            heroImageUrl: "https://www.uflexltd.com/assets/images/packaging/UFlex_N95_Masks.jpg",
            brandTag: "Six Layered Cotton N95 Mask",
            highlightText: "",
            learnlink :"https://www.uflexltd.com/pdf/UFlex_N95_Masks_Brochure.pdf",
            bulletList: [],
            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],

        },


        injection: {
            key: "injection",
            title: "Injection Moulding Products",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item8-09042770427.jpg",
            brandTag: "Injection Moulding Products",
            highlightText: "",
            bulletList: [],
            categories: [
                { name: "FLEXIBLE LAMINATES", productKey: "flexible" },
                { name: "PRE-FORMED POUCHES", productKey: "pre-formed" },
                { name: "FLEXO PRINTED ROLLS & BAGS", productKey: "flexo" },
                { name: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS", productKey: "wpp" },
                { name: "ELECTRON BEAM & CAST N CURE", productKey: "eb-cnc" },
                { name: "PHARMACEUTICAL PACKAGING", productKey: "pharma" },
                { name: "FlexiTubes", productKey: "FlexiTubes" },
                { name: "HYGIENE FILMS", productKey: "HYGIENE" },
                { name: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },


            ],

        }


    };

    const [selectedKey, setSelectedKey] = useState("flexible");

    const product =
        Object.values(productsData).find(
            (p: any) => p.key === selectedKey
        ) ?? productsData.flexible;

    const { key: _ignored, ...productProps } = product;


    const handleCategoryClick = (productKey: string) => {
        setSelectedKey(productKey);
    };

    const enhancedCategories = product.categories.map((cat: any) => ({
        ...cat,
        isActive: cat.productKey === selectedKey,
        onClick: () => handleCategoryClick(cat.productKey),
    }));


    return (
        <>

            <SiteHeader />
            <section className='bg-white pt-4 sm:pt-12'>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="space-y-0">
                        <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">

                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[18px] lato-700 text-[#117ABA] md:text-[28px]"
                                >
                                    Flexible Packaging Products
                                </motion.h1>

                                <p className=" text-wrap max-w-xl lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f]">
                                    UFlex’s Flexible Packaging Business’s products range from Flexible Laminates, Pre-Formed Pouches, Flexo Printed Rolls & Bags, Laminated Woven Polypropylene (WPP) Bags, Electron Beam & Cast N Cure, Pharmaceutical Packaging, FlexiTubes, Hygiene Films, Flexfresh™ Modified Atmosphere Packaging, Big Bags and N-95 Mask. As an end-to-end flexible packaging solutions company, UFlex also holds the expertise to develop flexible tube Tube Packaging for a large number of FMCG brands in India and overseas
                                </p>



                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[16/10] w-full overflow-hidden  "
                            >
                                <Image
                                    src="/images/flexi.png"
                                    alt="UFlex capabilities across the value chain"
                                    fill
                                    className="object-cover rounded-sm"
                                    priority
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                            </motion.div>
                        </div>
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