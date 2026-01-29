// // app/products/page.tsx
// "use client";

// import { useState } from "react";
// import ProductCategorySection from "./product-reusable";
// import { SiteHeader } from "@/components/site-header";
// import { SiteFooter } from "@/components/site-footer";
// import { motion } from "framer-motion";
// import { ReadMoreDialog } from "@/components/expandabletext";
// import Image from 'next/image';

// export default function ProductsPage() {
//     const productsData: any = {
//         bopet: {
//             key: "bopet",
//             title: "Biaxially Oriented Polyethylene Terephthalate (BOPET) Films",
//             heroImageUrl:
//                 "/images/bopet.png",
//             brandTag: "FLEXPET",
//             overview: `Our Packaging Films Business produces 3,50,000 TPA of BOPET films on its ten State-of-the-art BOPET film producing lines worldwide. The BOPET films come in a thickness range of 6.5 – 75 microns and are available in plain, surface treated, chemically coated, matte, heat sealable, metallisable, green, clear and extra clear varieties.`,

//             categories: [
//                 { name: "BOPET Films", productKey: "bopet" },
//                 { name: "BOPP Films", productKey: "bopp" },
//                 { name: "CPP Films", productKey: "cpp" },
//                 { name: "Metallised Films", productKey: "metallised" },
//                 { name: "Special Effects Films", productKey: "special" },
//                 { name: "AlOx Coated Films", productKey: "alox-coated" },
//             ],

//             performanceProperties: [
//                 "Good mechanical strength",
//                 "Improved resistance to chemicals",
//                 "Good barrier against oxygen",
//                 "Dimensional stability at elevated temperatures",
//                 "Good optical clarity",
//                 "Excellent surface treatment and coatings",
//                 "Excellent surface smoothness",
//                 "Resistance to abrasion",
//             ],

//             applications: [
//                 "Printing & Lamination",
//                 "Metallising",
//                 "Industrial Coating",
//                 "Thermal Lamination",
//                 "Encapsulation",
//                 "Hot Stamping",
//                 "Cable Wrapping",
//                 "Metallic Yarn",
//                 "Electrical Insulation",
//                 "Pressure Sensitive Tapes",
//                 "Holography",
//                 "Heat Sealable Films",
//                 "Lidding",
//                 "Release Film",
//                 "Retort Applications",
//                 "Siliconised Coating",
//             ],

//             innovations: [
//                 {
//                     title: "Green PET films (containing 30% of Green Input)",
//                     description:
//                         "Mono-Ethylene Glycol (MEG) constitutes 30% of the input Polyethylene Terephthalate (PET) resin from which our BOPET films are made. In Green PET films, conventional MEG that is made from scarce non-renewable petro based feedstock has been totally replaced by green MEG that is sourced from bio-ethanol made from renewable agro-inputs. Green PET films made are approved for direct food contact by the US Food and Drug Administration (USFDA) and European Union Authorities and have the same properties as conventional BOPET films. This is the world's first green polyester product that has won several international awards for sustainability.",
//                 },
//                 {
//                     title: "rPET films (contain up to 30% of Post Consumer Waste Recyclate Resin)",
//                     description:
//                         "rPET is another green innovation that contains up to 30% post-consumer consumer recycle PET (rPET) resins obtained by re-processing post-consumer PET waste such as used PET bottles. This waste would otherwise be consigned to landfills. rPET films comply with the US Food and Drug Administration (USFDA) and European Union authority norms for direct food contact and have the same properties as films made from virgin PET resins.",
//                 },
//                 {
//                     title: "Down-gauged Conversion Substrates",
//                     description:
//                         "We have developed world's first 6.5 micron BOPET film that is suitable for printing and lamination that run at the same speed of as conventional higher thickness films during conversion. It leaves a much reduced carbon footprint than the films they replace.",
//                 },
//                 {
//                     title: "Bio & Oxo Degradable BOPET Films",
//                     description: [
//                         "To support our sustainability drives, we have developed various grades of Bio & Oxo Degradable BOPET films.\n\n•Biodegradable Films: Made from agricultural or fossil fuel sources with one-step biodegradation (ASTM 6400/6868 & EU 13432).\n\n•Oxo-biodegradable Films: Made from conventional fossil fuel sources and modified with additives for controlled life; two-step process involving disintegration followed by biodegradation (ASTM 6954-04)."
//                     ]

//                 },
//                 {
//                     title: "Universal Coated PET Films",
//                     description:
//                         "Converters normally use 7 or 8 different customized coated films to carry out operations such as printing, laminating, metallization, extrusion coating/lamination or subsequent end-user processing conditions like dry-filling, liquid filling, hot fill, pasteurizing / sterilization, retorting, frozen storage, boiling, microwave heating/cooking, etc. to achieve and retain adequate bond strength. Our Universal Coated PET film is a single drop-in replacement for all the different coated grades doing away with the complexity and costs of stocking and managing multiple input film substrates. This film also provides higher bond strength.",
//                 },
//                 {
//                     title: "Antimony-free PET Films",
//                     description:
//                         "Conventional PET products have a residual antimony content which is minute but nevertheless a concern for packaging liquid products like drinking water and fruit juices. This variant of the film has no antimony content whatsoever.",
//                 },
//                 {
//                     title: "Antistatic PET Film for Twist Wrapping",
//                     description:
//                         "This film has excellent twist wrapping operations. It delivers up to 50% higher packing speed than cellophane and more than double of those obtained from Poly Vinyl Chloride (PVC films) besides being environment friendly.",
//                 },
//                 {
//                     title: "Direct Extrusion Coatable PET Film",
//                     description:
//                         "These films can be directly used for extrusion coating and lamination without priming thus simplifying machine design and substantially reduced operational costs.",
//                 },
//                 {
//                     title: "Special Heat-sealable PET Films",
//                     description:
//                         "One side of this printable film is specially modified to seal to itself. Amorphous Polyethylene Terephthalate (APET) and Crystalline PET (CPET) over a wide sealing temperature range with high heat-seal strength.",
//                 },
//                 {
//                     title: "Coloured Metallised PET Film",
//                     description:
//                         "This is a high barrier metallised film with a special customized overall background for special market requirements.",
//                 },
//                 {
//                     title: "White PET Films",
//                     description:
//                         "White PET films with excellent opacity in various thickness ranges is suitable for lidding, labels & surface printing. It is generally used where white background is required.",
//                 },
//                 {
//                     title: "Isotropic & surface PET film",
//                     description:
//                         "It is generally used where uniform background is required in dairy products especially yoghurt cups.",
//                 },
//                 {
//                     title: "Extrusion Coatable BOPP Films",
//                     description:
//                         "These are suitable for direct extrusion coating and extrusion lamination operations without priming.",
//                 },
//                 {
//                     title: "Direct Embossable PET Film",
//                     description:
//                         "This film is co-extruded with a special surface layer that can be embossed directly without any off-line coating, an expensive process. The embossing can be carried out at lower temperatures (lower energy costs) and leaves deep and sharp impressions. This surface can be metallised with excellent metal adhesion and is ideal for holographic applications.",
//                 },
//             ],

//             quickLinks: [
//                 { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
//                 { label: "Request Quote", href: "https://www.flexfilm.com/" },
//                 { label: "Download Catalog", href: "https://www.flexfilm.com/" },
//             ],
//         },

//         bopp: {
//             key: "bopp",
//             title: "Biaxially Oriented Polypropylene (BOPP) Films",
//             heroImageUrl:
//                 "/images/bopp.png",
//             brandTag: "FLEXOPP",
//             overview: `Flexible Packaging Films Business at UFLEX produces over 1,49,000 TPA of BOPP films on its three State-of-the-art lines. These films come in the thickness range of 8 – 75 microns and are available in plain, heat-sealable, metallisable, matte, pearlised, cavitated, overwrap, white opaque and speciality film grades variety.`,

//             categories: [
//                 { name: "BOPET Films", productKey: "bopet" },
//                 { name: "BOPP Films", productKey: "bopp" },
//                 { name: "CPP Films", productKey: "cpp" },
//                 { name: "Metallised Films", productKey: "metallised" },
//                 { name: "Special Effects Films", productKey: "special" },
//                 { name: "AlOx Coated Films", productKey: "alox-coated" },
//             ],

//             performanceProperties: [
//                 "Good mechanical strength",
//                 "Good chemical resistance",
//                 "Good dimensional stability",
//                 "Excellent barrier against moisture",
//                 "Superior optical clarity",
//                 "One or both side heat sealable",
//                 "Good stiffness",
//                 "Resistance to tear and abrasion",
//             ],

//             applications: [
//                 "Metallising",
//                 "Industrial Coating",
//                 "Printing & Lamination",
//                 "Release Films",
//                 "Encapsulation",
//                 "Photo Albums",
//                 "Overwraps (CDs, Cigarettes, Cartons)",
//                 "Packaging & Conversion",
//                 "Synthetic Papers",
//                 "Holography",
//                 "Adhesive Tapes",
//                 "Textile Bags",
//                 "Hot & Cold Antifog",
//                 "Cable Overwrap",
//                 "Confectionery Packaging",
//                 "Biscuit / Sandwich Overwrap",
//                 "Inner Wrap",
//                 "Embossing",
//                 "Anti-fog (Food products)",
//                 "Thermal Lamination",
//                 "Shrink Wrap",
//                 "Reams / Sheets wrapping",
//             ],

//             innovations: [
//                 {
//                     title: "Down-gauged Conversion Substrates",
//                     description:
//                         "We have developed world's first 8 micron plain / heat-sealable BOPP films. We have also developed heat-sealable 12 micron metalized BOPPP films that are suitable for printing and lamination. These run at the same speeds during conversion as conventional higher thickness films and provide significant source reduction ranging from 33% to 47%. They have much lower carbon footprint than the films they replace.",
//                 },
//                 {
//                     title: "High Coefficient of Friction (COF) BOPP Films",
//                     description:
//                         "The film surface is modified to deliver a high COF to enable anti-slip and good stack-ability when used as the outside surface of Woven Polypropylene (WPP) bags and other bulk packs. The film surface can also be tailored to have very precise COF values (less than ±10% variation) for superior and consistent performance on packaging machines.",
//                 },
//                 {
//                     title: "Low Seal Initiation Temperature (SIT) & High Seal Strength Matt Films",
//                     description:
//                         "The matt film is designed with Low SIT (105°C), high seal strength (>450 gm/25mm) with high haze (>70%), good contact clarity (gloss <8), excellent matt dispersion for growing bottom pinch jobs of PET Foods, Rice Bags etc.",
//                 },
//                 {
//                     title: "High COF Matt Films",
//                     description:
//                         "This matt film is designed with excellent Antiskid properties (COF > 0.5) and having good contact clarity (Gloss < 10), excellent matt homogeneity. Because of good esthetic appeal combined with excellent antiskid properties, this film is more preferred for bulk bag applications for PET Foods & Rice Bags.",
//                 },
//                 {
//                     title: "Bio & Oxo Degradable BOPP Films",
//                     description: [
//                         "To support our drives for sustainability, we have developed various grades of Bio & Oxo Degradable BOPP films.\n\n• Biodegradable Films: Made from agricultural sources or fossil fuel sources & One – step bio-degradation (ASTM 6400/6868 & EU 13432)\n\n• Oxo-biodegradable Films: Made from conventional fossil fuel sources & modified with additives for 'controlled life'. It entails two steps: disintegration and then biodegradation (ASTM 6954 04)",

//                     ]
//                 },
//                 {
//                     title: "Anti-fog BOPP Films",
//                     description:
//                         "Fog formation inside the sealed transparent packaging film because of the high amount of water in food causes poor visibility of the packed product and thus less attractive to potential buyer. Anti-fog BOPP films for both hot & cold applications don't allow fog formation on film surface and hence we can achieve clear visibility of packed products. These are largely used for fresh vegetables & chicken bags.",
//                 },
//                 {
//                     title: "General Note on BOPP Films",
//                     description:
//                         "Biaxially Oriented Polypropylene or BOPP Films is largely used packaging Film material worldwide. At UFLEX, we make sure the process is optimised for the development of better quality BOPP film which best meets brand's packaging requirements.",
//                 },
//             ],

//             quickLinks: [
//                 { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
//                 { label: "Request Quote", href: "https://www.flexfilm.com/" },
//                 { label: "Download Catalog", href: "https://www.flexfilm.com/" },
//             ],
//         },

//         cpp: {
//             key: "cpp",
//             title: "Cast Polypropylene (CPP) Films",
//             heroImageUrl:
//                 "/images/cpp.png",
//             brandTag: "FLEXCPP",
//             overview: `Film Business of UFLEX produces over 11,000 TPA of CPP films which can be supplied in widths up to 3000mm. These films come in thickness range of 18 – 200 microns and can be offered with corona treatment on one or both sides. These films are available in plain, heat-sealable, metallisable, polished, mirror finish, embossed surface, glossy/ matte finish, high stiffness, flexible, clear and opaque varieties.`,

//             categories: [
//                 { name: "BOPET Films", productKey: "bopet" },
//                 { name: "BOPP Films", productKey: "bopp" },
//                 { name: "CPP Films", productKey: "cpp" },
//                 { name: "Metallised Films", productKey: "metallised" },
//                 { name: "Special Effects Films", productKey: "special" },
//                 { name: "AlOx Coated Films", productKey: "alox-coated" },
//             ],

//             performanceProperties: [
//                 "Good gloss, transparency and heat-sealability",
//                 "Versatile structural properties",
//                 "New aesthetic possibilities for enhanced shelf appeal",
//                 "Good oxygen and moisture barrier",
//                 "Customizable for special applications",
//             ],

//             applications: [
//                 "Packaging & Conversion",
//                 "Food Wraps",
//                 "Bakery Products",
//                 "Lamination",
//                 "Anti-fog",
//                 "Candy/ Confectionery Wrap",
//                 "Garment Bags",
//                 "Retort Packaging",
//                 "Stationery Packaging",
//                 "Vacuum Metallization",
//                 "Deep Freeze Application",
//                 "Over Wrap",
//                 "Floral Wraps",
//             ],

//             innovations: [
//                 {
//                     title: "Retortable CPP Films",
//                     description:
//                         "This film is designed with excellent impact & high seal strength and can withstand high retort conditions (135° C for 30 min). It can be used towards direct contact with foods. This variant withstands retort processing.",
//                 },
//                 {
//                     title: "Peelable CPP Films",
//                     description:
//                         "This film is functionally modified CPP film with consistent peel & seal performance with PP substrate and is used for lidding in both sterilisable & non sterilisable applications.",
//                 },
//                 {
//                     title: "Bread Packaging CPP Films",
//                     description:
//                         "This film is designed with optimum combination of optical, frictional, impact & sealing properties to use as a single substrate (printed) for high speed bread packaging machines.",
//                 },
//                 {
//                     title: "Anti-fog CPP Films",
//                     description:
//                         "Fog formation inside the sealed transparent packaging film because of the high amount of water in food causes poor visibility of the packed product and thus appear less attractive to potential buyer. Anti-fog CPP films for both hot & cold applications don't allow fog formation on film surface and hence we can get clear visibility of packed products. This variant is largely used for heavy duty fresh vegetables & chicken bags.",
//                 },
//             ],

//             quickLinks: [
//                 { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
//                 { label: "Request Quote", href: "https://www.flexfilm.com/" },
//                 { label: "Download Catalog", href: "https://www.flexfilm.com/" },
//             ],
//         },

//         metallised: {
//             key: "metallised",
//             title: "Metallised BOPP, BOPET & CPP Films",
//             heroImageUrl:
//                 "/images/metallized.png",
//             brandTag: "FLEXMETPROTECT",
//             overview: `With its fourteen State-of-the-art metallizers with plasma treatment facilities for better metal to film adhesion and superior metal coverage, Film Business of UFLEX produces over 45,000 TPA (100 million lbs) of High Barrier Metalized films per annum with optical density ranging from 0.4 to 3.5 in widths up to 2,850 mm. These films come in the thickness range 6.5 – 75 microns for BOPET; 8 – 75 microns for BOPP and 18-200 microns for CPP.`,

//             categories: [
//                 { name: "BOPET Films", productKey: "bopet" },
//                 { name: "BOPP Films", productKey: "bopp" },
//                 { name: "CPP Films", productKey: "cpp" },
//                 { name: "Metallised Films", productKey: "metallised" },
//                 { name: "Special Effects Films", productKey: "special" },
//                 { name: "AlOx Coated Films", productKey: "alox-coated" },
//             ],

//             performanceProperties: [
//                 "Offers high barrier properties",
//                 "Caters to shelf appeal requirements",
//                 "Superior metal to film adhesion",
//                 "Excellent metal coverage with plasma treatment",
//             ],

//             applications: [
//                 "Converting & Laminating",
//                 "Synthetic Zari & Metallic Yarn",
//                 "Electronic Goods Packaging",
//                 "Insulation Ducting",
//                 "Decorative Applications",
//                 "Lidding Applications",
//                 "Embossing & Holograms",
//                 "Sandwich Lamination",
//                 "Twist Wrap & Confectionery",
//             ],

//             innovations: [
//                 {
//                     title: "Retortable CPP Films",
//                     description:
//                         "This film is designed with excellent impact & high seal strength and can withstand high retort conditions (135° C for 30 min). It can be used towards direct contact with foods. This variant withstands retort processing.",
//                 },
//                 {
//                     title: "Peelable CPP Films",
//                     description:
//                         "This film is functionally modified CPP film with consistent peel & seal performance with PP substrate and is used for lidding in both sterilisable & non sterilisable applications.",
//                 },
//                 {
//                     title: "Bread Packaging CPP Films",
//                     description:
//                         "This film is designed with optimum combination of optical, frictional, impact & sealing properties to use as a single substrate (printed) for high speed bread packaging machines.",
//                 },
//                 {
//                     title: "Anti-fog CPP Films",
//                     description:
//                         "Fog formation inside the sealed transparent packaging film because of the high amount of water in food causes poor visibility of the packed product and thus appear less attractive to potential buyer. Anti-fog CPP films for both hot & cold applications don't allow fog formation on film surface and hence we can get clear visibility of packed products. This variant is largely used for heavy duty fresh vegetables & chicken bags.",
//                 },
//             ],

//             quickLinks: [
//                 { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
//                 { label: "Request Quote", href: "https://www.flexfilm.com/" },
//                 { label: "Download Catalog", href: "https://www.flexfilm.com/" },
//             ],
//         },

//         special: {
//             key: "special",
//             title: "Special Effects Films",
//             heroImageUrl:
//                 "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-06130331303.jpg",
//             brandTag: "Special Effects",
//             overview: `Special Effects Films are a range of films that have been embellished with special optical effects. The films are especially processed to get special optical effects, customized patterns and proprietary designs on their surface. These can also be metalized and/or printed to further enhance appearance.`,

//             categories: [
//                 { name: "BOPET Films", productKey: "bopet" },
//                 { name: "BOPP Films", productKey: "bopp" },
//                 { name: "CPP Films", productKey: "cpp" },
//                 { name: "Metallised Films", productKey: "metallised" },
//                 { name: "Special Effects Films", productKey: "special" },
//                 { name: "AlOx Coated Films", productKey: "alox-coated" },
//             ],

//             // No Performance Properties section in screenshot → omitted
//             //   performanceProperties: [],

//             applications: [
//                 "Wraps where superior aesthetics are required",
//                 "Labels, tags and stickers",
//                 "Holographic and optically variable applications",
//                 "Overt and covert brand security and anti-counterfeiting",
//                 "Niche decorative applications (danglers, spangles, point of purchase materials, mobiles/stables etc.)",
//                 "Gift wraps",
//                 "Brand authentication",
//                 "Decorative tapes and ribbons",
//                 "Decorative panels and posters",
//                 "Decorative boxes and cartons",
//                 "Decorative yarn",
//                 "Document Authentication",
//             ],

//             // No Innovations section in screenshot → omitted
//             //   innovations: [],

//             quickLinks: [
//                 { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
//                 { label: "Request Quote", href: "/request-quote" },
//                 { label: "Download Catalog", href: "/catalog.pdf" },
//             ],
//         },


//         "alox-coated": {
//   key: "alox-coated",
//   title: "AlOx Coated Films",
//   heroImageUrl:
//     "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-06130321303.jpg", // suitable transparent/high-tech film image
//   brandTag: "AlOx Coated",
//   overview: `AlOx coating is the application of a thin and highly transparent aluminium oxide on packaging films that imparts high moisture and gas barrier properties giving a tough fight to aluminium foils and metalized films. It is the only true high-barrier flexible packaging material available, that is transparent and allows packaged product to be clearly visible. AlOx coating is a cutting edge technology that only a very select/ handful of film manufacturers are equipped with.`,

//   categories: [
//     { name: "BOPET Films", productKey: "bopet" },
//     { name: "BOPP Films", productKey: "bopp" },
//     { name: "CPP Films", productKey: "cpp" },
//     { name: "Metallised Films", productKey: "metallised" },
//     { name: "Special Effects Films", productKey: "special-effects" },
//     { name: "AlOx Coated Films", productKey: "alox-coated" },
//   ],

//   performanceProperties: [
//     "Facilitates operations like optical scanning/ inspection and metal detection during and after the packaging process – a property which is not achievable with aluminium foils or metalized films",
//     "Enhanced barrier level in comparison to other transparent flexible packaging materials like Polyvinylidene Chloride (PVDC) based structures and Ethylene Vinyl Alcohol (EVOH) co-extrusions",
//     "Moisture and gas permeability is not affected by high levels of temperature or relative humidity and are independent of the base film thickness thus enabling maximum down-gauging of packaging materials",
//     "These films are microwavable unlike aluminium foils and metalized films",
//   ],

//   // No applications section in screenshot → omitted
// //   applications: [],

//   // No innovations section in screenshot → omitted
// //   innovations: [],

//   quickLinks: [
//     { label: "Flex Films Website ↗", href: "https://www.flexfilms.com", external: true },
//     { label: "Request Quote", href: "https://www.flexfilm.com/" },
//     { label: "Download Catalog", href: "https://www.flexfilm.com/" },
//   ],
// },
//     };

//     const [selectedKey, setSelectedKey] = useState("bopet");

//     const product = productsData[selectedKey] || productsData.bopet;

//     const { key: productKey, ...productProps } = product;

//     const handleCategoryClick = (productKey: string) => {
//         setSelectedKey(productKey);
//     };

//     const enhancedCategories = product.categories.map((cat: any) => ({
//         ...cat,
//         isActive: cat.productKey === selectedKey,
//         onClick: () => handleCategoryClick(cat.productKey),
//     }));


//     return (
//         <>

//             <SiteHeader />
//             <section className='bg-white pt-4 sm:pt-12'>
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="space-y-0">
//                         <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">

//                             <div>
//                                 <motion.h1
//                                     initial={{ opacity: 0, y: 10 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     className="text-[18px] lato-700 text-[#117ABA] md:text-[28px]"
//                                 >
//                                     Packaging Films Products
//                                 </motion.h1>

//                                 <p className=" text-wrap max-w-xl lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
//                                     UFlex’s Packaging Films Business’s products range from Biaxially Oriented Polyethylene Terepthalate (BOPET) Films "F L E X P E T", Biaxially Oriented Polypropylene (BOPP) Films "F L E X O P P", Cast Polypropylene (CPP) Films "F L E X C P P", Metallised BOPP, BOPET & CPP Films "F L E X M E T P R O T E C T", Special Effects Films, AIOx Coated Films.
//                                 </p>

//                                 {/* <button
//                                 onClick={() => setOpen(true)}
//                                 className="mt-4 lato-400 text-[16px] sm:text-[20px]  text-[#117ABA]  hover:underline"
//                             >
//                                 Read More
//                                 <span aria-hidden>↗</span>

//                             </button>

//                             <ReadMoreDialog
//                                 open={open}
//                                 onClose={() => setOpen(false)}
//                                 title={packagingData[0].title}
//                                 imageSrc={packagingData[0].image}
//                                 imageAlt={packagingData[0].title}
//                                 paragraphs={packagingData[0].paragraphs}
//                             /> */}

//                             </div>

//                             <motion.div
//                                 initial={{ opacity: 0, scale: 0.98 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 viewport={{ once: true }}
//                                 className="relative aspect-[16/10] w-full overflow-hidden  "
//                             >
//                                 <Image
//                                     src="/images/resin.png"
//                                     alt="UFlex capabilities across the value chain"
//                                     fill
//                                     className="object-cover rounded-sm"
//                                     priority
//                                 />

//                                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
//                             </motion.div>
//                         </div>
//                         <ProductCategorySection
//                             {...productProps}
//                             categories={enhancedCategories}
//                         />
//                     </div>
//                 </div>
//             </section>
//             <SiteFooter />
//         </>

//     );
// }

"use client";

import { useEffect, useState } from "react";
import ProductCategorySection from "./product-reusable"; // adjust path if needed
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "@/components/breadcrumb";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const catFromUrl = searchParams.get("cat")?.toLowerCase() || null;

  const validKeys = [
    "water-based-inks",
    "water-based-adhesives",
    "water-based-coatings",
    "solvent-free-adhesives",
    "solvent-based-adhesives",
    "solvent-based-coatings",
    "radiation-curable-inks",
    "pu-ink-binders",
    "radiation-curable-coatings",
  ] as const;

  const initialKey =
    catFromUrl && validKeys.includes(catFromUrl as any)
      ? catFromUrl
      : "water-based-inks";

  const [selectedKey, setSelectedKey] = useState<string>(initialKey);

  useEffect(() => {
    const currentCat = searchParams.get("cat")?.toLowerCase();
    if (currentCat && validKeys.includes(currentCat as any)) {
      setSelectedKey(currentCat);
    } else if (!currentCat) {
      setSelectedKey("water-based-inks");
    }
  }, [searchParams]);

  const handleCategoryClick = (productKey: string) => {
    setSelectedKey(productKey);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("cat", productKey);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const categories = [
    { name: "Water Based Inks", productKey: "water-based-inks" },
    { name: "Water Based Adhesives", productKey: "water-based-adhesives" },
    { name: "Water Based Coatings", productKey: "water-based-coatings" },
    { name: "Solvent Free Adhesives", productKey: "solvent-free-adhesives" },
    { name: "Solvent Based Adhesives", productKey: "solvent-based-adhesives" },
    { name: "Solvent Based Coatings", productKey: "solvent-based-coatings" },
    { name: "Radiation Curable Inks", productKey: "radiation-curable-inks" },
    { name: "PU Ink Binders", productKey: "pu-ink-binders" },
    { name: "Radiation Curable Coatings", productKey: "radiation-curable-coatings" },
  ];

  const enhancedCategories = categories.map((cat) => ({
    ...cat,
    isActive: cat.productKey === selectedKey,
    onClick: () => handleCategoryClick(cat.productKey),
  }));

  // ────────────────────────────────────────────────
  // COMPLETE productsData – EVERY product from your document
  // ────────────────────────────────────────────────
  const productsData: Record<string, any> = {
    "water-based-inks": {
      key: "water-based-inks",
      title: "Water Based Inks",
      heroImageUrl: "/images/water-based-inks-hero.jpg", // ← replace with real image
      overview: "Water-based inks are environmentally friendly alternatives to solvent-based inks, offering excellent print quality with reduced VOC emissions. They are suitable for various substrates and printing processes including gravure, flexo, and narrow-web applications.",
      sections: [
        {
          name: "FLEX AQUAPAP INKS",
          description:
            "They are designed for paper surface printing application. Inks are suitable for printing on coated and uncoated paper/ paper cups with Gravure & Flexo printing process."
        },
        {
          name: "FLEX MARINELAM INKS",
          description:
            "These Inks are designed for reverse printing/ lamination application. These inks are suitable for Gravure & Flexo printing on PET & OPP films."
        },
        {
          name: "FLEX AQUASEPTIC INKS",
          description:
            "Inks are formulated for surface printing on paper board especially for liquid food packaging. Inks are suitable for printing on paper and board for PE extrusion lamination."
        },
        {
          name: "FLEX AQUACORE INKS",
          description:
            "They are suitable for surface printing on kraft & uncoated paper. These inks have high strength and low viscosity and has excellent rub resistance."
        },
        {
          name: "FLEX AQUALABEL INKS",
          description:
            "These Inks are designed for surface printing application on metallised paper, primed foil & 2PE paper cups. Inks are suitable for NW flexo printing and have excellent adhesion on primed foil & metallized paper."
        },
        {
          name: "FLEX AQUAGLOSS INKS",
          description:
            "Inks are formulated for flexo surface printing application on PE, CPP & BOPP films. Inks are suitable for general purpose surface printing jobs like, hygiene & LDPE carry bags."
        }
      ]
    },

    "water-based-adhesives": {
      key: "water-based-adhesives",
      title: "Water Based Adhesives",
      heroImageUrl: "/images/water-based-adhesives-hero.jpg",
      overview: "Water-based adhesives provide strong bonding with low environmental impact, ideal for food-safe and sustainable packaging applications.",
      sections: [
        {
          name: "FLEXBOND FP DRY LAM F2F AEM 36 P",
          description:
            "A waterborne acrylic adhesive designed for use in the manufacture of flexible film laminates for food packaging. This is a one-component, formaldehyde-free, all acrylic adhesive. It can be applied by conventional gravure cylinder coating technique."
        },
        {
          name: "FLEXBOND FP DRY LAM AEM 36",
          description:
            "A waterborne acrylic adhesive designed for use in the manufacture of flexible film laminates of paper to aluminium foil, m-CPP & m-PET structures for food packaging. This is one-component, formaldehyde-free, all-acrylic adhesive. It can be applied by conventional gravure cylinder coating techniques."
        },
        {
          name: "FLEXBOND FP DRY LAM HR AEM 90",
          description:
            "A single component water-based acrylic adhesive for manufacture of flexible film laminates of Paper to aluminium foil, m-CPP and m-PET structures with excellent heat resistance properties."
        },
        {
          name: "FLEXBOND FP two component Dry Lam HR AER with Flexcross FP two-component hardener AEK 3%",
          description:
            "Two Component water - based acrylic adhesive for the manufacture of flexible film laminates of paper to PET or BOPP film & paper to aluminium foil, metallised film to paper with excellent heat resistance properties."
        },
        {
          name: "FLEXBOND FP DRY LAM AEM 36(H)",
          description:
            "It is a waterborne acrylic adhesive used for the manufacture of flexible film laminates of paper to PET or BOPP film and paper to aluminium foil, metallised film to paper structures with high heat resistance properties. It can be used as single component or two component with Flexcross FP two component hardener VF/12K 3%."
        },
        {
          name: "FLEXBOND SF DRY LAM FB",
          description:
            "A water based acrylic adhesive having excellent bond strength, mainly designed for lamination of films (Clear PET or BOPP, Matt BOPP) and metallised films to paper / duplex board for offset industries. It is recommended for dry bond lamination process."
        },
        {
          name: "FLEXBOND SF DRY LAM F2B",
          description:
            "A water based acrylic adhesive designed primarily for lamination of films (clear PET or BOPP, Matt BOPP) and metallised or holo metallized film to paper/ duplex board for offset industries. It provides good dimensional stability on sheets after lamination. It is recommended for dry bond lamination process."
        },
        {
          name: "FLEXBOND FB DL 500",
          description:
            "A water based acrylic designed primarily for lamination of films (clear PET or BOPP, Matt BOPP) and metallised films to paper/duplex board for offset industries. It provides excellent gloss and bond strength after lamination. This product is primarily recommended for dual metal rollers dry lamination machines."
        },
        {
          name: "FLEXBOND SF WET BOND LAM-HSW 55",
          description:
            "A water based synthetic resin emulsion adhesive, primarily used for wet lamination of PET, BOPP films (clear or metallized) and matt BOPP to paper/duplex board."
        },
        {
          name: "FLEXBOND SF WET BOND LM 35",
          description:
            "A water based synthetic adhesive used for wet lamination of clear BOPP and PVC film to paper/duplex board on manual or semi-automatic machine application. This product provides good gloss and bond strength after lamination with paperboard substrate."
        },
        {
          name: "FLEXBOND SF SIDE PASTING SPA",
          description:
            "A water based synthetic resin emulsion adhesive designed mainly for carton making in side pasting application. It is recommended for BOPP, PET or metallised PET laminated with paperboard for side pasting application. It can be used on all standard wheel/roller applicators."
        },
        {
          name: "FLEXBOND SF WET LAM-1178",
          description:
            "A water based synthetic adhesive designed mainly for side pasting and flap sealing application in carton box making. It is recommended for BOPP, PET or metallised PET laminated with paperboard for side pasting & flap sealing application. It is also suitable for inner side metallised film liner pasting in mono cartons and can be used on all standard nozzle applicators."
        },
        {
          name: "FLEXBOND 666",
          description:
            "It is a water based high performance synthetic adhesive designed mainly for paper bag making in side , bottom and handle pasting applications. It gives excellent bonding with fast setting time, stability and flow behavior. It can be used on all standard wheel / roller applicators."
        },
        {
          name: "FLEXBOND SPA (LV)",
          description:
            "It is a water-based synthetic adhesive designed mainly for paper bag and corrugation box making in side pasting application. It gives excellent bonding with fast setting time, stability and flow behavior. It is suitable for application by nozzle applicators."
        },
        {
          name: "FLEXBOND PB 40",
          description:
            "It is a water based medium performance synthetic adhesive designed for paper bag making by roller coater for bottom pasting and by wheel roller in corrugation box side pasting application."
        },
        {
          name: "FLEXBOND WET LAM 1080",
          description:
            "It is a water based medium performance synthetic adhesive for paper bag side pasting application by both nozzle & wheel applicator due to medium viscosity and for bottom and handle pasting by roller coater."
        },
        {
          name: "FLEXBOND SF-E Flute LAM –LF",
          description:
            "A water-based synthetic resin emulsion adhesive designed mainly for lamination of flute board to paper/ duplex board. It can be applied by roller coater on fully/ semiautomatic machine."
        },
        {
          name: "FLEXBOND SF WET BOND HSW56",
          description:
            "It is water-based synthetic resin emulsion adhesive used for wet lamination of paper to paper/duplex boards. It is recommended for rigid boxes applications. The product displays excellent bond strength. It can be applied by roller coater on fully automatic machine."
        }
      ]
    },

    "water-based-coatings": {
      key: "water-based-coatings",
      title: "Water Based Coatings",
      heroImageUrl: "/images/water-based-coatings-hero.jpg",
      overview: "Water-based coatings deliver high-performance surface enhancement with excellent gloss, scuff resistance, barrier properties, and compliance for food-contact applications.",
      sections: [
        {
          name: "FLEXCOAT SUPER GLOSS OPV-1000",
          description:
            "waterborne copolymer emulsion for over printing of printed-paper and board. It is designed to give extremely super gloss properties with good flow & leveling on the substrate. It creates an even, smooth surface with good slip properties"
        },
        {
          name: "FLEXCOAT HIGH GLOSS OPV-1001 / FLEXCOAT HIGH GLOSS OPV 1011 (High Viscosity Version)",
          description:
            "A waterborne copolymer emulsion for over printing of printed-paper and board. It creates an even, smooth surface with high gloss and high scuff properties."
        },
        {
          name: "FLEXCOAT GP GLOSS OPV-1002 / FLEXCOAT GP GLOSS OPV 1012 (High Viscosity Version)",
          description:
            "A waterborne copolymer emulsion for over printing of printed-paper and board. It creates an even, smooth surface with good gloss and good scuff properties."
        },
        {
          name: "FLEXCOAT MATT OPV-1006",
          description:
            "A waterborne copolymer emulsion for over printing of printed-paper and board. It is designed to give an even, smooth surface with excellent matt effect."
        },
        {
          name: "FLEXCOAT HIGH SCUFF WR OPV-1007",
          description:
            "A waterborne copolymer emulsion for over printing of printed-paper and board. It provides excellent scuff resistance with good water resistance properties. It creates an even, smooth surface with good slip properties."
        },
        {
          name: "FLEXCOAT ECO WR OPV - 1008",
          description:
            "A waterborne copolymer emulsion for over printing of printed-paper and paper board. It is specially designed to give excellent scuff resistance and water resistance properties. It is also suitable for deep freeze resistance application. It creates an even, smooth surface with good slip properties. It is suitable for paper cups and ice-cream cones."
        },
        {
          name: "FLEXCOAT PC OPV-1009",
          description:
            "A waterborne copolymer emulsion for over printing of printed-paper and paper board. It is specially designed to give excellent slip property with very low COF value. It is best suitable for coating on playing card due to nonstop sliding effect. It can be applied by both inline and offline process by Anilox roller or coater applicators."
        },
        {
          name: "FLEXCOAT NEUTRAL OPV–1010",
          description:
            "A waterborne copolymer emulsion for over printing of printed-paper and board. It is designed to give an even, smooth surface with semi-gloss finish. It has a good transparency and anti-blocking properties and good scuff resistance and good slip properties. This coating is designed to be applied through coating unit of offset machine. It can be applied by both inline and offline process by anilox roller or coater applicators."
        },
        {
          name: "FLEXCOAT HIGH GLOSS HIGH SLIP OPV–1016",
          description:
            "A waterborne copolymer emulsion for over printing of printed-paper and paper board. It is specially designed to give high gloss and high slip property with low coefficient of friction and best suitable for playing card application. It has smooth lay and anti-blocking properties. This coating is designed to be applied through coating unit of offset machine. It can be applied by both inline and offline process by anilox roller or coater applicators."
        },
        {
          name: "FLEXPRIME Inline Primer-1004",
          description:
            "A waterborne copolymer dispersion for primer coating on printed-paper and board with oil based inks. It is suitable as a top coat on oil base inks for varnishing with UV coatings."
        },
        {
          name: "FLEXPRIME METPET Basecoat 1005",
          description:
            "A waterborne copolymer dispersion designed for primer coating on MET-PET or metallised board. It exhibits good transparency and adhesion properties with strong anchoring of UV inks."
        },
        {
          name: "FLEXSEAL BLISTER COATING",
          description:
            "Water based blister board coating is a solventfree aqueous polyurethane dispersion specially designed as heat sealable paper board overprint varnish for sealing PET or PVC blisters and fold-over package applications. FLEXSEAL BLISTER COATING can be applied offline by roller coater or anilox and it can also be applied in-line over wet inks."
        },
        {
          name: "FLEXSEAL HSL WBHS 36",
          description:
            "An aqueous dispersion, environment-friendly heat seal coating designed to give good adhesion and heat sealing property on substrates such as paper to paper and aluminium foil to aluminium foil. It has good oil and water resistance properties."
        },
        {
          name: "FLEXBOND FP BARRIER COAT UF007",
          description:
            "An aqueous dispersion, environment-friendly, barrier coating designed to offer good oxygen barrier to metallised PET and BOPP & CPP film."
        },
        {
          name: "FLEXCOAT FP BARRIER COAT-UF008",
          description:
            "A water based, environmental friendly barrier coating designed to offer high oxygen barrier to clear BOPP, CPP & PE film."
        },
        {
          name: "FLEXCOAT FP BARRIER COAT - UF009",
          description:
            "A water based , environmental friendly barrier coating designed to offer high oxygen barrier to clear BOPET Film."
        },
        {
          name: "FLEXCOAT WR COATING-1020",
          description:
            "A waterborne environment friendly coating specially designed to provide good water repellent properties on kraft paper applications. It has excellent water repellency with water beading effect. It is primarily used on different types of kraft papers after printing and can be applied by gravure roller application. WR Coating 1040 is high viscosity version, suitable for roller coater application."
        },
        {
          name: "FLEXSEAL HSL OGR",
          description:
            "A solvent free, environment friendly aqueous dispersion coating specially designed as oil and grease resistant heat sealable coating for kraft paper applications. It is primarily used on different types of Kraft papers and can be applied by air knife coater or gravure roller application. OGR-HV is high viscosity version, suitable for roller coater application."
        },
        {
          name: "FLEXSEAL HSL 1025(G)",
          description:
            "It is an environment-friendly, solvent free aqueous dispersion specially designed as heat sealable coating for Kraft papers used in e-commerce paper bags applications. This coating is primarily used on paper for coating-to-coating side sealing on registered area via rotogravure process."
        },
        {
          name: "FLEXSEAL HSL 1024(F)",
          description:
            "It is an environment-friendly, solvent free aqueous dispersion specially designed as heat sealable coating for Kraft papers used in e-commerce paper bags applications. This coating is primarily used on paper for coating-to-coating side sealing on registered area via flexo process."
        },
        {
          name: "FLEXCOAT AQUABAN",
          description:
            "A waterborne environment friendly coating, specially designed as water repellent coating for kraft paper applications used in corrugated boxes. This product provides good moisture resistance with excellent gluability on coating side to uncoated side and printability on uncoated side. This coating is primarily applied at the corrugator machine by roller & blade coater. This product has FDA compliance for direct food contact application."
        },
        {
          name: "FLEXSEAL ECOCOAT",
          description:
            "This coating is an eco-friendly aqueous dispersion, specially designed for paper cup inner side application as replacement of PE coating. This product offers excellent heat seal property with hot & cold liquid resistance property. It is environmentally friendly, recyclable coating and complies FDA direct food contact regulation. This coating is primarily used on paperboard via air knife coater application process."
        },
        {
          name: "FLEXCOAT GR COATING 1026",
          description:
            "It is an environment - friendly, solvent free aqueous dispersion coating specially designed to provide good oil and grease barrier properties on paper board used in food packaging applications. This coating is non-heat sealable and can be applied on inner side of paper boards via roller coater in offline coating process. This product has FDA compliance for direct food contact application."
        },
        {
          name: "FLEXCOAT GR COATING 1027",
          description:
            "It is an environment - friendly, solvent free aqueous dispersion coating specially designed to provide good oil and grease barrier properties on paper used in food packaging applications. This coating is non-heat sealable and can be applied on paper via air knife coater. This product has FDA compliance for direct food contact application."
        }
      ]
    },

    "solvent-free-adhesives": {
      key: "solvent-free-adhesives",
      title: "Solvent Free Adhesives",
      heroImageUrl: "/images/solvent-free-adhesives-hero.jpg",
      overview: "Solvent-free adhesives deliver high performance lamination with zero VOC emissions, excellent adhesion, and energy-efficient processing.",
      sections: [
        {
          name: "FLEXBON 146A/146C",
          description:
            "Two-component SL PU adhesive for general performance application not recommended for nitrogen flushing. Low viscosity product, with excellent wettability on metallised structures. Energy efficient product operated at low temperatures. Recommended on various substrates such as PET/MET PET/BOPP/MET BOPP/CPP/MET CPP/ Pearlized BOPP. Not recommended for PE films."
        },
        {
          name: "FLEXBON 801A/888C",
          description:
            "Two-component SL PU adhesive for general to medium performance. Excellent results on metallised and PE substrates. Based on polyester chemistry, imparts good heat and chemical resistant properties. Recommended on various substrates such as PET/MET PET/BOPP/MET BOPP/ Pearlized BOPP/CPP/MET CPP/PE."
        },
        {
          name: "FLEXBON – 777A/777C",
          description:
            "A general to medium performance — 2 Component solvent-free — adhesive and has an excellent adhesion on a variety of metallised films. It is suitable for high-speed lamination with BOPP/BOPP, OPP/OPP, PET/PE and PE upto 70 microns. Offers higher chemical and heat resistance with excellent bond strength."
        },
        {
          name: "FLEXBON 777A/999C",
          description:
            "A general to medium performance, two component solvent-free adhesive that is a combination of polyether and polyester chain chemistry with no COF increase. It offers excellent bond and seal strength. Recommended for PE up to 100 microns. It offers fast curing, adhesion and good bond strength. Suitable for BOPP/BOPP, BOPP/MCPP and BOPP/MBOPP."
        },
        {
          name: "FLEXBON 702A/702C",
          description:
            "Two-component SL PU adhesive for general to medium performance. Excellent results on metallised and PE substrates. Based on polyester chemistry, imparts good heat and chemical resistant properties. Recommended on various substrates such as PET/MET PET/BOPP/MET BOPP/ Pearlized BOPP/CPP/MET CPP/PE."
        },
        {
          name: "FLEX BON 401A/401C",
          description:
            "Two-component SL medium to high performance. Based on polyester & polyether chemistries, it is recommended on various substrates such as PET/MET PET/ BOPP/ MET BOPP/CPP/ MET CPP/ PE up to 120 micron."
        },
        {
          name: "FLEXBON 555A/555C",
          description:
            "Two-component SL medium to high performance. Based on polyester & polyether chemistries, it is recommended on various substrates such as PET/MET PET/ BOPP/ MET BOPP/CPP/ MET CPP/ PE up to 100 micron."
        },
        {
          name: "FLEXBON OC 512",
          description:
            "It is a one component solvent-free (moisture curing type) adhesives based on PU, designed for laminating film to printed and unprinted board and film to printed and unprinted paper."
        },
        {
          name: "FLEXBON OC 512/OC 512 OP/ OC 512FP",
          description:
            "It is a conventional single component adhesive. OC512OP is for the offset application for paper to board, PET, METPET and BOPP. OC512FP is for the flexible packaging paper to foil."
        },
        {
          name: "FLEXBON 301A/301C",
          description:
            "It is a medium to high performance- 2-component solvent-free adhesive based on PU chemistry. This product is suitable for given temperature 42 –45° and has an excellent adhesion on a variety of films. It has good heat and chemical resistance properties and is suitable for high speed lamination."
        },
        {
          name: "FLEXBON 601A/ 601W",
          description:
            "White Solvent free PU adhesive, recommended for general to medium performance. Compatible with NCPU inks. Suitable for PET/ METPET, BOPP/ MBOPP, OPP/MCPP."
        },
        {
          name: "FLEXBON – 901A/901W",
          description:
            "White Adhesive A general performance to medium performance — Two component solvent free —Pigmented PU adhesive. It has a good opacity and gloss with white pigment concentration. The product is suitable for low temperature (35–45˚C) applications and has an excellent adhesion on a variety of films. It is suitable for high-speed lamination, adjusting the opacity. Recommended for film-to-film application in order to reduce the cost of white ink and the process cost of printing inks and solvents. Suitable for BOPP, METBOPP, MCPP."
        }
      ]
    },

    "solvent-based-adhesives": {
      key: "solvent-based-adhesives",
      title: "Solvent Based Adhesives",
      heroImageUrl: "/images/solvent-based-adhesives-hero.jpg",
      overview: "Solvent-based adhesives offer high bond strength and excellent resistance properties for demanding flexible packaging applications.",
      sections: [
        {
          name: "FLEXCOTE- 480 FC/ 9081L (80% / 75% solids)",
          description:
            "Based on Polyester polyol chemistry. Two-component SB general performance PU adhesive recommended for non-aggressive applications. Good performance on metallised substrates, and PE substrates. Not recommended for Nitrogen flushing applications. Recommended for various substrates like PET/ MET PET/ BOPP/MET BOPP /CPP/Pearlized BOPP/PE upto 60 microns."
        },
        {
          name: "FLEXCOTE 672E/75/ 9062L (75%/ 50% solids)",
          description:
            "Based on polyurethane chemistry. Can run on the higher speed with good solvent release. Two-component SB general performance PU adhesive recommended for nonaggressive applications. Good performance on metallised substrates, and PE substrates. Recommended for various substrates like PET/ MET PET/ BOPP/ MET BOPP/ CPP/ Pearlized BOPP/ PE up to 60 microns."
        },
        {
          name: "FLEXCOTE 432E/ FLEXCOTE 9062L",
          description:
            "Two-component SB general to medium performance PU adhesive. Designed for release transfer of metallised print to fabric and gives excellent bond on fabric with excellent gloss."
        },
        {
          name: "FLEXCOTE 1152/ 9062L (66%/50% Solids)",
          description:
            "Two-component SB medium performance PU adhesive, recommended to use in nitrogen flushing and aggressive applications. It is recommended on various substrates such as PET/ MET PET/ AL FOIL/ NYLON/ BOPP/ MET BOPP/ CPP/ PE up to 130 microns."
        },
        {
          name: "FLEXCOTE 3511/ 9062L (66%/50% Solids)",
          description:
            "Two-component SB medium performance PU adhesive with higher crystallization rate increased curing with higher HR recommended to use on aggressive applications. It has better drying properties. Recommended on various substrates such as PET/ MET PET/ AL FOIL/ NYLON/ BOPP/ MET BOPP/ CPP/ PE upto 110 microns."
        },
        {
          name: "FLEXCOTE 3511M1/ 9062L (66%/50% Solids)",
          description:
            "Two-component SB medium performance PU adhesive with excellent results on metallised jobs. It is recommended on various substrates such as PET/ MET PET/ BOPP/ MET BOPP/ Pearlized BOPP, Met CPP."
        },
        {
          name: "FLEXCOTE MH 785/ 9081L",
          description:
            "Two-component SB medium to high performance PU adhesive with higher solids. It is recommended on various substrates such as PET/ MET PET/ AL FOIL/ NYLON/ BOPP/ MET BOPP/ CPP/ PE up to 130 microns."
        },
        {
          name: "FLEXCOTE 1154R/ 1154A (60%/50% Solids)",
          description:
            "High performance reverse system two-component SB PU reverse chemistry adhesive, designed for hot filling applications, has good HR, chemical and heat resistant, can be used for frozen foods as well. Recommended on various substrates such as PET/ MET PET/ AL FOIL/ NYLON/ BOPP/ MET BOPP/ CPP/ PE up to 150 microns. Not recommended for retort applications."
        },
        {
          name: "FLEXCOTE HP875/9081L/HP75",
          description:
            "High performance two-component solvent-based adhesive designed for boiling to pasteurization applications. Recommended on various substrates such as PET/ MET PET/ AL FOIL/ NYLON/ BOPP/ MET BOPP/ CPP/PE up to 150 microns."
        },
        {
          name: "FLEXCOTE HSLV 1170/ HF0200",
          description:
            "High performance two-component SB Adhesive High solid and low viscosity, it is suitable for high end aggressive jobs. Can be used for boiling, can be applied at 50% solid."
        },
        {
          name: "FLEXCOTE 80W/ 9081L White Adhesive (72%/75% solids)",
          description:
            "Based on Polyester polyol white pigmented chemistry. Two-component SB general performance PU adhesive recommended for nonaggressive applications. Good performance on metallised substrates. Enhances the opacity and reduces the cost of white ink. Not recommended for nitrogen flushing applications. Recommended for various substrates like PET/ MET PET/ BOPP/MET BOPP/ CPP/ Pearlized BOPP/ Paper."
        },
        {
          name: "FLEXCOTE 1152W/ 9062L White Adhesive (62%/ 50% solids)",
          description:
            "Based on Polyurethane white pigmented chemistry. Two-component SB medium performance PU adhesive recommended for aggressive applications. Good performance on metallised substrates, and PE substrates. Enhances the opacity and reduces the cost of white ink. Recommended for various substrates like PET/ MET PET/ BOPP/MET BOPP /CPP/Pearlized BOPP."
        },
        {
          name: "FLEXCOTE 3511M1W/ 9062L",
          description:
            "Two-component SB medium performance white adhesives. Suitable for food/snack packaging with 2 ply structures. Excellent bond on metal substrates with better opacity. Recommended for various substrates like PET/MET PET/ OPP/PE/ MCPP films etc. It gives better bond strength on the metallised film."
        },
        {
          name: "FLEXCOTE 180W/9081L",
          description:
            "Based on Polyester polyol white pigmented chemistry. Two component SB general performance PU adhesive with high opacity. Good performance on metallised substrates. Not recommended for nitrogen flushing applications. Recommended for various substrates like PET/ MET PET/ BOPP/MET BOPP/ CPP/ Pearlized BOPP/ Paper."
        },
        {
          name: "FLEXCOTE 985 / HF 200",
          description:
            "Two component solvent based Adhesive for Alu - Alu application in blister packaging for pharma applications."
        }
      ]
    },

    "solvent-based-coatings": {
      key: "solvent-based-coatings",
      title: "Solvent Based Coatings",
      heroImageUrl: "/images/solvent-based-coatings-hero.jpg",
      overview: "Solvent-based coatings provide superior gloss, heat resistance, and chemical resistance for high-performance packaging and decorative applications.",
      sections: [
        {
          name: "HRK7426 & HRK7427",
          description:
            "HRK- 7426 FLEXSHEEN 2K HIGH GLOSS OPV / HRK-7427 FLEXSHEEN 2K OPV HARDENER – Very high gloss/ very high resistance to high heat, high chemical resistance and product resistance."
        },
        {
          name: "HRK9729 & HRK7596",
          description:
            "HRK-9729 FLEXMATT NTNK 2K OP INK/ HRK7596 HARDENER is a toluene-ketone free, twocomponent gravure matt OPV suitable for PET and BOPP films."
        },
        {
          name: "FGK-6946 FLEXSHEEN GLOSS OPV",
          description:
            "High gloss oil resistance OPV suitable for Flexo and Gravure."
        },
        {
          name: "HRK 9976 FLEXMATT NTNK 1K MATT COAT",
          description:
            "HRK09976 FLEXMATT single component OP ink is a toluene/ketone free NC-PA based matt coat suitable for PET & BOPP films."
        },
        {
          name: "HRK7138",
          description:
            "Solvent Based heat-seal coating suitable for sealing between Foil/ Foil, Paper/ Foil, Foil/ PVC, Paperboard/ PVC and Paperboard/ PET application."
        },
        {
          name: "HRK7597 FLEXFOIL UNIVERSAL HEAT SEAL LACQUER",
          description:
            "It is a Toluene-free heat seal lacquer used for sealing of various substrates and applied through gravure cylinder/drum coater."
        },
        {
          name: "HRK-6837",
          description:
            "Flex Wash Primer Shellac wash for foil-one component."
        },
        {
          name: "BRK 10186",
          description:
            "FLEXGLIDE PP Extrusion Primer."
        }
      ]
    },

    "radiation-curable-inks": {
      key: "radiation-curable-inks",
      title: "Radiation Curable Inks",
      heroImageUrl: "/images/radiation-curable-inks-hero.jpg",
      overview: "Radiation curable inks (UV/LED/EB) offer instant curing, high definition print quality, low migration, and excellent resistance properties for premium packaging and label applications.",
      sections: [
        {
          name: "Flexcure Sheetfed “XP” Series for Offset Application (accordance to ISO 2846-1)",
          description:
            "Flexcure Sheetfed “XP” series represents a new generation of our premium UV inks for offset printing. This series is a special development for premium jobs/ export market high end packaging jobs like liquor, FMCG, Pharma, cosmetics etc. at high press speeds."
        },
        {
          name: "Flexcure Sheetfed “HC” Series (for Paper Board & Met Pet)",
          description:
            "Flexcure Sheetfed “HC” series represents a new generation of our UV inks for offset printing. This series is a special development for high end packaging jobs like liquor, FMCG, Pharma, cosmetics etc. at high press speeds."
        },
        {
          name: "Flexcure Sheetfed “HF” Series (for SME printers)",
          description:
            "Flexcure Sheetfed HF series represents a dedicated customized series for SME printers (without duct agitators) on low speed machines – where high flow is critical requirement."
        },
        {
          name: "Flexcure Sheetfed “PP” Series (for PP sheets)",
          description:
            "Flexcure Sheetfed PP series represents a new generation of our UV inks for offset printing. This series is a special development for PP sheets for high end packaging jobs and stationery jobs."
        },
        {
          name: "Flexcure Sheetfed “MT” Series (for Metal Decoration)",
          description:
            "Flexcure Sheetfed MT series represents a new generation UV inks for metal decoration. This series is a special development for printing on aluminium & tin plate sheets – 2 piece & 3 piece cans for high end packaging for industrial, decoration, body care and non-food packaging applications."
        },
        {
          name: "Flexcure Sheetfed “Card” Series (for PVC sheets)",
          description:
            "Flexcure Sheetfed card series represents a new generation of our UV inks for offset printing especially designed considering stringent requirements of PVC cards – for debit/ credit/ SIM/ promotional cards."
        },
        {
          name: "Flexcure Sheetfed “Bio” Series for Offset Application (with >40% BRC)",
          description:
            "Flexcure Sheetfed “Bio” series represents a new generation of our UV inks for offset printing especially designed using high bio-renewable content ingredients, providing an environmentally friendly alternative to standard UV offset ink. It is a low odor ink series and well suited for all kinds of paper & board substrates."
        },
        {
          name: "Flexcure “LP” Series",
          description:
            "Flexcure LP series represents a new generation radical curing mechanism series developed especially for high end labels, lamitubes & plastic cups on high speed rotary letterpress printing machines."
        },
        {
          name: "Flexcure NW “F” Series - (High strength inks)",
          description:
            "Flexcure NW F series represents new generation radical mechanism cured inks for paper, in-line Corona treated polyethylene, primered PE, PVC and other substrates. This series is suitable for processing with all flexo label printing machines equipped with an UV-curing system. And suitable for HD flexo and finer anilox. These inks are BP and ITX free."
        },
        {
          name: "Flexcure Opaque White for Shrink Sleeve Application",
          description:
            "Flexcure Shrink Sleeve White represents dedicated flexo white for shrink sleeves with maximum ability to shrink on a wide range of shrink sleeve films. Silicon /Silicon free and Matt options available"
        },
        {
          name: "Flexgreen  \"GL Screen\" inks",
          description:
            "Dual cure inks designed for printing on frosted glass thru screen printing."
        },
        {
          name: "Flexcure NW FS Series (Standard Series)",
          description:
            "Flexcure NW series represents high performance UV flexo inks for paper, in-line Corona treated polyethylene, primered PE, PVC and other substrates. This series produce outstanding printing results over a wide range of applications, conditions and substrates. And suitable for HD flexo printing. These inks are BP and ITX free."
        },
        {
          name: "Flexcure ECG (Extended color Gamut) Series",
          description:
            "Flexcure ECG series represents new generation radical mechanism designed especially for flexo printers which provides complete predictability on the gamut and to enable them to print faster with superb quality, while lowering their printing costs. With these inks you can cover max pantone shades."
        },
        {
          name: "Flexcure “Nutri Series” for Pharma / Food & Aseptic Application",
          description:
            "Flexcure Nutri series represents new generation radical mechanism Low migration and Low odor inks, designed especially for Food Packaging, pharma & hygiene applications. For a wide range of plastic materials and other substrates (lacquered aluminium), suitable for processing with all in-line types of UV Flexo label or packaging printing."
        },
        {
          name: "Flexcure “Web” Series for Web Offset Application (especially for high speed machines)",
          description:
            "Flexcure Web Offset series represents a new generation of our UV inks for Web offset printing especially designed considering stringent requirements of high speed web printing on absorbent substrates like paper, thermal paper and plastic substrates – for continuous forms, newspaper, high end publication, catalogues, brochures etc."
        },
        {
          name: "Flexgreen Sheetfed Series",
          description:
            "Flexgreen Sheetfed series represents the new generation of our LED inks for offset printing. This series is a special development for high end packaging jobs like liquor, FMCG, Pharma, cosmetics etc. at high press speeds."
        },
        {
          name: "Flexgreen NW Series",
          description:
            "Flexgreen NW series represents new generation radical mechanism cured inks for paper, in-line Corona treated polyethylene, primered PE, PVC and other substrates. This series is suitable for processing with all flexo label printing machines equipped with an UV-LED curing system."
        },
        {
          name: "Flexgreen CI Series for CI Flexo Application",
          description:
            "Flexgreen CI series represents new innovative concept of radical mechanism cured inks for coated art paper, in-line Corona treated polyethylene, primered PE, Nylon/Milk Poly and other substrates. This series is suitable for processing with all CI Flexo/ Comexi machines equipped with an UV-LED curing system 385-395nm. (retrofitted)."
        },
        {
          name: "Flexbeam Series for Ci8 Offset Application",
          description:
            "Flexbeam Offset series represents new innovative concept of radical mechanism cured inks for coated art paper, in-line Corona treated polyethylene, primered PE, Nylon/Milk Poly and other substrates. This series is suitable for processing with all CI Flexo/ Comexi machines equipped with EB curing mechanism thru offset route."
        }
      ]
    },

    "pu-ink-binders": {
      key: "pu-ink-binders",
      title: "PU Ink Binders",
      heroImageUrl: "/images/pu-ink-binders-hero.jpg",
      overview: "Polyurethane ink binders provide excellent adhesion, flexibility, and resistance properties for high-performance printing inks.",
      sections: [
        {
          name: "FLEXPAK 5678",
          description:
            "Non-reactive plasticizing PU polymer ±75% solids Low viscosity Suitable for packaging printing inks (indirect contact)"
        },
        {
          name: "FLEXPAK 5679",
          description:
            "Non-reactive plasticizing PU polymer ±75% solids Moderate viscosity Suitable for packaging printing inks (indirect contact)"
        },
        {
          name: "FLEXPAK 2754",
          description:
            "±30% Solid content Viscosity 500-1000 cPs Suitable for food packaging (indirect contact)"
        },
        {
          name: "FLEXPAK 2756",
          description:
            "±37% Solid content Viscosity 200-400 cPs Suitable for food packaging (indirect contact)"
        },
        {
          name: "FLEXPAK 2757",
          description:
            "±50% Solid content Viscosity 600-1000 cPs High solids low viscosity Suitable for food packaging (indirect contact)"
        },
        {
          name: "FLEXPAK 5100",
          description:
            "±70% Solid content 1200-1700 cps Suitable for CI flexo ink system with high HR value."
        },
        {
          name: "FLEXPAK 6002",
          description:
            "Plasticizing PU ink binder, good water and fat resistance NCPU & PU inks for surface printing"
        },
        {
          name: "FLEXPAK 5300",
          description:
            "±30% Solid content For flexo application"
        },
        {
          name: "FLEXPAK 2763",
          description:
            "For flexo application H2O2 resistant"
        },
        {
          name: "FLEXPAK 2765",
          description:
            "Elastomeric PU Solvent based matt Coating"
        }
      ]
    },

    "radiation-curable-coatings": {
      key: "radiation-curable-coatings",
      title: "Radiation Curable Coatings",
      heroImageUrl: "/images/radiation-curable-coatings-hero.jpg",
      overview: "Radiation curable coatings (UV/LED/EB) offer instant curing, high gloss/matt effects, excellent resistance, and low migration properties for premium packaging and specialty applications.",
      sections: [
        { name: "Flexcure High Gloss Coating" },
        { name: "Flexcure High Gloss High Slip Coating" },
        { name: "Flexcure High Scuff Flexi Coating – high scuff requirements" },
        { name: "Flexcure Duct High gloss coating for duct application" },
        { name: "Flexcure Gloss Lamitube Coating for Lamitubes" },
        { name: "Flexcure High Gloss Low odor Coating" },
        { name: "Flexcure Drip Off Texture Matt Low Viscosity – finer grain" },
        { name: "Flexcure Drip Off Texture Matt High Viscosity – coarser grain" },
        { name: "Flexcure Texture Gloss Top Coat (std./ more grain)" },
        { name: "Flexcure Drip Off Gloss Coat (with extra slip)" },
        { name: "Flexcure Inline Texture Gloss Top Coat (high flexible)" },
        { name: "Flexcure Duct Texture Gloss Top Coat HV (high viscosity)" },
        { name: "Flexcure Duct Texture Gloss Top Coat medium viscosity thru duct" },
        { name: "Flexcure Texture Gloss Coating for high speed machines" },
        { name: "Flexcure Matt finish smooth feel coating through coater" },
        { name: "Flexcure Duct Matt Coating" },
        { name: "Flexcure Super Slip PC Coating - for Playing cards" },
        { name: "Flexcure HFS gloss coating - for hot foil stamping requirements" },
        { name: "Flexcure Cast-N-Cure Coating" },
        { name: "Flexcure BP/ITX free Coating" },
        { name: "Flexcure SF Nutri Gloss Coating - for Low Migration & Low Odour requirements" },
        { name: "Flexcure Duct Primer" },
        { name: "Flexcure Super Glide Coating" },
        { name: "Flexcure Tactile Effect Coating - nylo-plate application" },
        { name: "Flexcure Super Matt Coating" },
        { name: "Flexcure Over printable gloss coating" },
        { name: "Flexcure release coating" },
        { name: "Flexcure Laminating adhesive" },
        { name: "Flexcure Cold Foil adhesive" },
        { name: "Flexcure Single Component Texture" },
        { name: "Flexcure BP/ITX free Coating" },
        { name: "Flexcure NW Nutri Gloss Coating for Low Migration & Low Odour requirements" },
        { name: "Flexcure In-Line Primer" },
        { name: "Flexcure Heat Resistant Coating" },
        { name: "Flexcure Texture Matt & Gloss" },
        { name: "Flexcure IML High gloss coating" },
        { name: "Flexcure Deep freeze resistant coating" },
        { name: "Flexcure Super Glide coating for nail & scratch resistant on plastic substrates" },
        { name: "Flexcure High Gloss PVC Coating" },
        { name: "Flexcure Texture Gloss PVC Coating" },
        { name: "Flexcure PVC Matt Coating" },
        { name: "Flexcure Gloss PEB Coating" },
        { name: "Flexcure Matt PEB Coating" },
        { name: "Flexcure PVC Tile Coating" },
        { name: "Flexcure PVC Structure Coating" },
        { name: "Flexcure PVC Sand effect Coating" },
        { name: "Flexcure Wrinkle effect gloss Coating" },
        { name: "Flexcure SPC Flooring Matt Coating" },
        { name: "Flexcure SPC High Gloss Coating" },
        { name: "Flexcure Curtain Gloss Coating" },
        { name: "Flexcure Spray able Gloss Coating for metal /almirah/ wood" },
        { name: "Flexgreen SF Duct Texture Matt" },
        { name: "Flexgreen Texture Gloss Top Coat" },
        { name: "Flexgreen LED Duct Gloss Coating for duct application" },
        { name: "Flexgreen Gloss NY Coating" },
        { name: "Flexgreen NW Matt Coating" },
        { name: "Flexgreen NW High Gloss Coating" },
        { name: "Flexgreen Inline Gloss Coating" },
        { name: "Flexgreen Cast-N-Cure Coating" },
        { name: "Flexgreen High Gloss LO Coating" },
        { name: "Flexgreen NW Primer" },
        { name: "Flexgreen NW Texture Matt Coating" },
        { name: "Flexgreen NW Laminating Adhesive" },
        { name: "Flexgreen NW Cold Foil Adhesive" },
        { name: "Flexgreen Hot Foil Stampable Coating thru screen" },
        { name: "Flexgreen Emboss Coating" },
        { name: "Flexgreen High Flexible Coating" },
        { name: "Flexgreen Glitter Gold Coating" },
        { name: "Flexbeam High Gloss Coating" },
        { name: "Flexbeam High Gloss High Slip Coating" },
        { name: "Flexbeam Non Skid Coating" },
        { name: "Flexbeam High Flexible Coating" },
        { name: "Flexbeam Cast n Cure Coating" },
        { name: "Flexbeam Matt Coating" },
        { name: "Flexbeam High Scuff Coating" },
        { name: "Flexbeam Hot Foil Stampable Coating" }
      ]
    }
  };

  const product = productsData[selectedKey] ?? productsData["water-based-inks"];

  const { key: _ignored, ...productProps } = product;

  return (
    <>
      <SiteHeader />

      <section className="bg-white">
        <div className="">
          {/* Hero */}
          <section className="relative w-full h-[580px] sm:h-[451px] overflow-hidden">
            <Image
              src="/images/inks-coatings-hero.jpg" // ← Replace with your actual hero image
              alt="Inks, Adhesives & Coatings"
              fill
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </section>

          <Breadcrumb
                                  items={[
                                      { label: "Chemical Business", href: "/chemicals-business" },
                                      { label: "Chemical Business Products" },
                                  ]}
                              />

          <ProductCategorySection
            {...productProps}
            categories={enhancedCategories}
          />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}