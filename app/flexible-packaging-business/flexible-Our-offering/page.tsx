// app/products/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import ProductCategorySection from "./product-reusable";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion } from "framer-motion";
import { ReadMoreDialog } from "@/components/expandabletext";
import Image from 'next/image';
import Breadcrumb from "@/components/breadcrumb";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
    const productsData: any = {
        flexible: {
            key: "flexible",
            title: "FLEXIBLE LAMINATES",
            // overview:
            //     "UFlex offers a comprehensive range of flexible laminates made from various combinations of plastic, aluminum, and paper to suit diverse packaging needs. These include structures like PET/PE, PET/Foil/PE, PET/BOPP, BOPP/CPP, and advanced multilayer laminates such as PET/Extr/Foil/Extr/PE and AlOx PET/BON/CPP for retort applications. ",
            overview:"Our flexible laminate solutions are available in a wide range of plastic, aluminium, and paper combinations, including:",
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
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
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
            // overview:
            //     "UFlex offers a wide array of flexible pouches designed to cater to diverse product categories and packaging needs across industries. Our portfolio includes advanced formats such as slider zipper pouches, ideal for powders and granules, and pouring spout pouches, perfectly suited for liquid applications.",
            overview:"Our product portfolio includes flexible pouches in various formats, including:",
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
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],



        },
        flexoPrinted: {
            key: "flexo",
            title: "FLEXO PRINTED ROLLS & BAGS",
            overview:"We offer Flexo Surface Printed bags for Baby and Feminine Hygiene products made of various formats such as:",
            // overview:
            //     "Our Flexo printed rolls and bags are a key offering within our Flexible Packaging business, designed to meet the specific needs of the baby and feminine hygiene product segments. We provide high-quality flexo surface printed bags in a variety of formats, including surface printed poly rolls, bottom gusset bags, wicketed bottom gusset bags, and handle gusseted bags.",
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
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],
        },
        wpp: {
            key: "wpp",
            title: "LAMINATED WOVEN POLY PROPYLENE (WPP) BAGS",
            overview:
                "Our range of laminated Woven Polypropylene (WPP) bags offers high strength, durability, and superior printability—making them ideal for a wide variety of industrial and consumer applications.",
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
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],
        },
        electronBeam: {
            key: "eb-cnc",
            title: "ELECTRON BEAM & CAST N CURE",
            overview:
                "UFlex offers advanced print finishing solutions using electron beam (e-beam) and Cast n Cure technologies, enhancing the visual and functional appeal of flexible packaging. Our portfolio includes a variety of premium finishes such as super gloss for high-impact shelf presence, matte finish for a premium tactile feel, and registered cast n cure for precise, design-specific effects.",
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
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],
        },

        pharmaceutical: {
            key: "pharma",
            title: "PHARMACEUTICAL PACKAGING",
            overview:
                "UFlex offers a comprehensive range of high-performance packaging materials designed specifically for the pharmaceutical industry. Our offerings include cold form alu laminates, strip foil, blister foil, child-resistant foil, and suppository films—each engineered to ensure superior protection against moisture, oxygen, and light.",
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
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],
        },
        HYGIENE: {
            key: "HYGIENE",
            title: "HYGIENE FILMS",
            overview:
                "UFlex offers high-performance hygiene films designed to meet the critical requirements of the personal care industry. Our range includes breathable films for diapers and back sheet films for sanitary napkins, engineered for comfort, protection, and reliability. ",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-09042740427.jpg",
            brandTag: "HYGIENE FILMS",

            highlightText:
                "We offer several options in Hygiene Films for use in :",

            bulletList: [
                "Diaper Breathable Films",
                "Sanitary Napkin Back Sheet Films",
            ],

            categories: [
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],
        },
        flexfresh: {
            key: "flexfresh",
            title: "FLEXFRESH™ MODIFIED ATMOSPHERE PACKAGING",
            overview:
                "MAP solution is a breakthrough innovation designed to extend the shelf life of perishable goods such as fresh vegetables, fruits, and flowers. By regulating the internal atmosphere without the use of chemicals, FlexFreshTM helps slow spoilage and preserve freshness for up to 30 days. ",
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
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],
        },
        flexitubes: {
            key: "FlexiTubes",
            title: "FlexiTubes",
            overview:
                "",
            heroImageUrl: "https://www.uflexltd.com/assets/images/packaging/flexi-tubes.jpg",
            brandTag: "FlexiTubes",
            highlightText: "",
            bulletList: [],
            learnlink: "https://www.uflexltd.com/pdf/FlexitubeBrochure.pdf",
            categories: [
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],

        },
        premium: {
            key: "premium",
            title: "Premium Shower Proof Bag",
            overview:
                "UFlex’s premium shower-proof bag is an advanced packaging solution tailored for the building materials industry, combining durability, safety, and high-performance design. Made from polypropylene-based multi-component block bottom structures, the bag features nano technology that prevents water ingress—validated through a stringent “Shower Test”—thereby extending shelf life and eliminating lumping in humid conditions.",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item6-09042750427.jpg",
            brandTag: "Premium Shower Proof Bag",
            highlightText: "",
            bulletList: [],
            categories: [
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],

        },


        n95: {
            key: "n95",
            title: "Six Layered Cotton N95 Mask",
            overview:
                "Six Layered Cotton N95 Mask",
            heroImageUrl: "https://www.uflexltd.com/assets/images/packaging/UFlex_N95_Masks.jpg",
            brandTag: "Six Layered Cotton N95 Mask",
            highlightText: "",
            learnlink: "https://www.uflexltd.com/pdf/UFlex_N95_Masks_Brochure.pdf",
            bulletList: [],
            categories: [
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],

        },
        Zipouch: {
            key: "Zipouch",
            title: "Zipouch",
            overview:
                "Zipouch is a versatile range of reclosable and reusable pouches made from high-quality laminated films, designed to meet the everyday food storage needs of modern consumers. Ideal for storing and refrigerating vegetables, fruits, meats, breads, and even reheating food, Zipouch offers convenience from shelf to refrigerator to microwave.",
            heroImageUrl: "https://www.uflexltd.com/assets/images/packaging/UFlex_N95_Masks.jpg",
            brandTag: "Zipouch",
            highlightText: "",
            learnlink: "",
            bulletList: [],
            categories: [
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            

            ],

        },


        injection: {
            key: "injection",
            title: "Injection Moulding Products",
            overview:
                "UFlex offers a wide range of precision-engineered injection moulded plastic packaging components such as caps, spouts, tube caps, shoulders, zippers, sliders, and core plugs. Manufactured using machines with capacities of 150, 180, and 250 tons, these products are designed to meet the diverse requirements of the packaging industry.",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item8-09042770427.jpg",
            brandTag: "Injection Moulding Products",
            highlightText: "",
            bulletList: [],
            categories: [
                { name: "Flexible Laminates", productKey: "flexible" },
                { name: "Pre-formed Pouches", productKey: "pre-formed" },
                { name: "Flexo Printed Rolls & Bags", productKey: "flexo" },
                { name: "Laminated Woven Polypropylene (WPP) Bags", productKey: "wpp" },
                { name: "Electron Beam & Cast N Cure", productKey: "eb-cnc" },
                { name: "Pharmaceutical Packaging", productKey: "pharma" },
                 { name: "Zipouch", productKey: "Zipouch" },

                { name: "Hygiene Films", productKey: "hygiene" },
                { name: "Flexfresh™ Modified Atmosphere Packaging", productKey: "flexfresh" },
                { name: "Premium Shower Proof Bag", productKey: "premium" },
                { name: "Six Layered Cotton N95 Mask", productKey: "n95" },
                { name: "Injection Moulding Products", productKey: "injection" },
            ],

        }


    };
const searchParams = useSearchParams();
const catFromUrl = searchParams.get('cat')?.toLowerCase() || null;

const validKeys = [
  'flexible',
  'pre-formed',
  'flexo',
  'wpp',
  'eb-cnc',
  'pharma',
  'hygiene',
  'flexfresh',
  'premium',
  'n95',
  'Zipouch',
  'injection',
  // add 'FlexiTubes' if you want to support it later
] as const;

const initialKey = catFromUrl && validKeys.includes(catFromUrl as any)
  ? catFromUrl
  : 'flexible';
console.log("intial ket",initialKey ,catFromUrl)
const [selectedKey, setSelectedKey] = useState(initialKey);
const sectionRef = useRef<HTMLDivElement>(null);

// Sync when URL changes (back/forward button, direct link)

    // const [selectedKey, setSelectedKey] = useState("flexible");

    const product =
        Object.values(productsData).find(
            (p: any) => p.key === selectedKey
        ) ?? productsData.flexible;

    const { key: _ignored, ...productProps } = product;


    // const handleCategoryClick = (productKey: string) => {
    //     setSelectedKey(productKey);
    // };

    const handleCategoryClick = (productKey: string) => {
  setSelectedKey(productKey);

  // Update URL without reload (clean & shareable)
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('cat', productKey);
    window.history.replaceState({}, '', url.toString());
    if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
  }
};

    const enhancedCategories = product.categories.map((cat: any) => ({
        ...cat,
        // isActive: cat.productKey === selectedKey,
        isActive: cat.productKey.toLowerCase().trim() === selectedKey.toLowerCase().trim(),
        onClick: () => handleCategoryClick(cat.productKey),
    }));

useEffect(() => {
  const currentCat = searchParams.get('cat')?.toLowerCase();
  if (currentCat && validKeys.includes(currentCat as any)) {
    setSelectedKey(currentCat);
    if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
  }
}, [searchParams]);
    return (
        <>

            <SiteHeader />
            <section className='bg-white '>
                <div className="">
                    <div className="space-y-0">





                        <section className="relative w-full h-[580px] sm:h-[451px] overflow-hidden">

                            <Image
                                src="/images/flexi.png"
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


                                {/* <motion.div
                                    className="bg-[#117ABA] lato-400 text-left w-[450px] h-[350px] sm:w-[706px] sm:h-[351px] text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[20px] pl-4 pt-2 pb-4 pr-4 md:pl-24 lg:pl-28 sm:pt-8 sm:pb-4 sm:pr-12 mb-12 sm:mb-12"
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                >
                                    <div className="w-[300px] sm:w-[537px]">


                                        <h1 className="text-white text-[24px] lato-700  md:text-[42px]">
                                            Flexible Packaging

                                        </h1>
                                        UFlex’s Flexible Packaging Business’s products range from Flexible Laminates, Pre-Formed Pouches, Flexo Printed Rolls & Bags, Laminated Woven Polypropylene (WPP) Bags, Electron Beam & Cast N Cure, Pharmaceutical Packaging, FlexiTubes, Hygiene Films, Flexfresh™ Modified Atmosphere Packaging, Big Bags and N-95 Mask.
                                    </div>
                                </motion.div> */}


                            </motion.div>
                        </section>
                        <Breadcrumb
                            items={[
                                { label: "Flexible Packaging", href: "/flexible-packaging-business" },
                                { label: "Flexible Packaging Products" },
                            ]}
                        />
                        <div ref={sectionRef} className="scroll-mt-20">

                        <ProductCategorySection
                            {...productProps}
                            categories={enhancedCategories}
                            />
                            </div>
                    </div>
                </div>
            </section>
            <SiteFooter />
        </>

    );
}