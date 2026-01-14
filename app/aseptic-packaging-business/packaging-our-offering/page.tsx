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
        bopet: {
            key: "bopet",
            title: "Biaxially Oriented Polyethylene Terephthalate (BOPET) Films",
            heroImageUrl:
                "/images/bopet.png",
            brandTag: "FLEXPET",
            overview: `Our Packaging Films Business produces 3,50,000 TPA of BOPET films on its ten State-of-the-art BOPET film producing lines worldwide. The BOPET films come in a thickness range of 6.5 – 75 microns and are available in plain, surface treated, chemically coated, matte, heat sealable, metallisable, green, clear and extra clear varieties.`,

            categories: [
                { name: "BOPET Films", productKey: "bopet" },
                { name: "BOPP Films", productKey: "bopp" },
                { name: "CPP Films", productKey: "cpp" },
                { name: "Metallised Films", productKey: "metallised" },
                { name: "Special Effects Films", productKey: "special" },
                { name: "AlOx Coated Films", productKey: "alox-coated" },
            ],

            performanceProperties: [
                "Good mechanical strength",
                "Improved resistance to chemicals",
                "Good barrier against oxygen",
                "Dimensional stability at elevated temperatures",
                "Good optical clarity",
                "Excellent surface treatment and coatings",
                "Excellent surface smoothness",
                "Resistance to abrasion",
            ],

            applications: [
                "Printing & Lamination",
                "Metallising",
                "Industrial Coating",
                "Thermal Lamination",
                "Encapsulation",
                "Hot Stamping",
                "Cable Wrapping",
                "Metallic Yarn",
                "Electrical Insulation",
                "Pressure Sensitive Tapes",
                "Holography",
                "Heat Sealable Films",
                "Lidding",
                "Release Film",
                "Retort Applications",
                "Siliconised Coating",
            ],

            innovations: [
                {
                    title: "Green PET films (containing 30% of Green Input)",
                    description:
                        "Mono-Ethylene Glycol (MEG) constitutes 30% of the input Polyethylene Terephthalate (PET) resin from which our BOPET films are made. In Green PET films, conventional MEG that is made from scarce non-renewable petro based feedstock has been totally replaced by green MEG that is sourced from bio-ethanol made from renewable agro-inputs. Green PET films made are approved for direct food contact by the US Food and Drug Administration (USFDA) and European Union Authorities and have the same properties as conventional BOPET films. This is the world's first green polyester product that has won several international awards for sustainability.",
                },
                {
                    title: "rPET films (contain up to 30% of Post Consumer Waste Recyclate Resin)",
                    description:
                        "rPET is another green innovation that contains up to 30% post-consumer consumer recycle PET (rPET) resins obtained by re-processing post-consumer PET waste such as used PET bottles. This waste would otherwise be consigned to landfills. rPET films comply with the US Food and Drug Administration (USFDA) and European Union authority norms for direct food contact and have the same properties as films made from virgin PET resins.",
                },
                {
                    title: "Down-gauged Conversion Substrates",
                    description:
                        "We have developed world's first 6.5 micron BOPET film that is suitable for printing and lamination that run at the same speed of as conventional higher thickness films during conversion. It leaves a much reduced carbon footprint than the films they replace.",
                },
                {
                    title: "Bio & Oxo Degradable BOPET Films",
                    description: [
                        "To support our sustainability drives, we have developed various grades of Bio & Oxo Degradable BOPET films.\n\n•Biodegradable Films: Made from agricultural or fossil fuel sources with one-step biodegradation (ASTM 6400/6868 & EU 13432).\n\n•Oxo-biodegradable Films: Made from conventional fossil fuel sources and modified with additives for controlled life; two-step process involving disintegration followed by biodegradation (ASTM 6954-04)."
                    ]

                },
                {
                    title: "Universal Coated PET Films",
                    description:
                        "Converters normally use 7 or 8 different customized coated films to carry out operations such as printing, laminating, metallization, extrusion coating/lamination or subsequent end-user processing conditions like dry-filling, liquid filling, hot fill, pasteurizing / sterilization, retorting, frozen storage, boiling, microwave heating/cooking, etc. to achieve and retain adequate bond strength. Our Universal Coated PET film is a single drop-in replacement for all the different coated grades doing away with the complexity and costs of stocking and managing multiple input film substrates. This film also provides higher bond strength.",
                },
                {
                    title: "Antimony-free PET Films",
                    description:
                        "Conventional PET products have a residual antimony content which is minute but nevertheless a concern for packaging liquid products like drinking water and fruit juices. This variant of the film has no antimony content whatsoever.",
                },
                {
                    title: "Antistatic PET Film for Twist Wrapping",
                    description:
                        "This film has excellent twist wrapping operations. It delivers up to 50% higher packing speed than cellophane and more than double of those obtained from Poly Vinyl Chloride (PVC films) besides being environment friendly.",
                },
                {
                    title: "Direct Extrusion Coatable PET Film",
                    description:
                        "These films can be directly used for extrusion coating and lamination without priming thus simplifying machine design and substantially reduced operational costs.",
                },
                {
                    title: "Special Heat-sealable PET Films",
                    description:
                        "One side of this printable film is specially modified to seal to itself. Amorphous Polyethylene Terephthalate (APET) and Crystalline PET (CPET) over a wide sealing temperature range with high heat-seal strength.",
                },
                {
                    title: "Coloured Metallised PET Film",
                    description:
                        "This is a high barrier metallised film with a special customized overall background for special market requirements.",
                },
                {
                    title: "White PET Films",
                    description:
                        "White PET films with excellent opacity in various thickness ranges is suitable for lidding, labels & surface printing. It is generally used where white background is required.",
                },
                {
                    title: "Isotropic & surface PET film",
                    description:
                        "It is generally used where uniform background is required in dairy products especially yoghurt cups.",
                },
                {
                    title: "Extrusion Coatable BOPP Films",
                    description:
                        "These are suitable for direct extrusion coating and extrusion lamination operations without priming.",
                },
                {
                    title: "Direct Embossable PET Film",
                    description:
                        "This film is co-extruded with a special surface layer that can be embossed directly without any off-line coating, an expensive process. The embossing can be carried out at lower temperatures (lower energy costs) and leaves deep and sharp impressions. This surface can be metallised with excellent metal adhesion and is ideal for holographic applications.",
                },
            ],

            quickLinks: [
                { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
                { label: "Request Quote", href: "https://www.flexfilm.com/" },
                { label: "Download Catalog", href: "https://www.flexfilm.com/" },
            ],
        },

        bopp: {
            key: "bopp",
            title: "Biaxially Oriented Polypropylene (BOPP) Films",
            heroImageUrl:
                "/images/bopp.png",
            brandTag: "FLEXOPP",
            overview: `Flexible Packaging Films Business at UFLEX produces over 1,49,000 TPA of BOPP films on its three State-of-the-art lines. These films come in the thickness range of 8 – 75 microns and are available in plain, heat-sealable, metallisable, matte, pearlised, cavitated, overwrap, white opaque and speciality film grades variety.`,

            categories: [
                { name: "BOPET Films", productKey: "bopet" },
                { name: "BOPP Films", productKey: "bopp" },
                { name: "CPP Films", productKey: "cpp" },
                { name: "Metallised Films", productKey: "metallised" },
                { name: "Special Effects Films", productKey: "special" },
                { name: "AlOx Coated Films", productKey: "alox-coated" },
            ],

            performanceProperties: [
                "Good mechanical strength",
                "Good chemical resistance",
                "Good dimensional stability",
                "Excellent barrier against moisture",
                "Superior optical clarity",
                "One or both side heat sealable",
                "Good stiffness",
                "Resistance to tear and abrasion",
            ],

            applications: [
                "Metallising",
                "Industrial Coating",
                "Printing & Lamination",
                "Release Films",
                "Encapsulation",
                "Photo Albums",
                "Overwraps (CDs, Cigarettes, Cartons)",
                "Packaging & Conversion",
                "Synthetic Papers",
                "Holography",
                "Adhesive Tapes",
                "Textile Bags",
                "Hot & Cold Antifog",
                "Cable Overwrap",
                "Confectionery Packaging",
                "Biscuit / Sandwich Overwrap",
                "Inner Wrap",
                "Embossing",
                "Anti-fog (Food products)",
                "Thermal Lamination",
                "Shrink Wrap",
                "Reams / Sheets wrapping",
            ],

            innovations: [
                {
                    title: "Down-gauged Conversion Substrates",
                    description:
                        "We have developed world's first 8 micron plain / heat-sealable BOPP films. We have also developed heat-sealable 12 micron metalized BOPPP films that are suitable for printing and lamination. These run at the same speeds during conversion as conventional higher thickness films and provide significant source reduction ranging from 33% to 47%. They have much lower carbon footprint than the films they replace.",
                },
                {
                    title: "High Coefficient of Friction (COF) BOPP Films",
                    description:
                        "The film surface is modified to deliver a high COF to enable anti-slip and good stack-ability when used as the outside surface of Woven Polypropylene (WPP) bags and other bulk packs. The film surface can also be tailored to have very precise COF values (less than ±10% variation) for superior and consistent performance on packaging machines.",
                },
                {
                    title: "Low Seal Initiation Temperature (SIT) & High Seal Strength Matt Films",
                    description:
                        "The matt film is designed with Low SIT (105°C), high seal strength (>450 gm/25mm) with high haze (>70%), good contact clarity (gloss <8), excellent matt dispersion for growing bottom pinch jobs of PET Foods, Rice Bags etc.",
                },
                {
                    title: "High COF Matt Films",
                    description:
                        "This matt film is designed with excellent Antiskid properties (COF > 0.5) and having good contact clarity (Gloss < 10), excellent matt homogeneity. Because of good esthetic appeal combined with excellent antiskid properties, this film is more preferred for bulk bag applications for PET Foods & Rice Bags.",
                },
                {
                    title: "Bio & Oxo Degradable BOPP Films",
                    description: [
                        "To support our drives for sustainability, we have developed various grades of Bio & Oxo Degradable BOPP films.\n\n• Biodegradable Films: Made from agricultural sources or fossil fuel sources & One – step bio-degradation (ASTM 6400/6868 & EU 13432)\n\n• Oxo-biodegradable Films: Made from conventional fossil fuel sources & modified with additives for 'controlled life'. It entails two steps: disintegration and then biodegradation (ASTM 6954 04)",

                    ]
                },
                {
                    title: "Anti-fog BOPP Films",
                    description:
                        "Fog formation inside the sealed transparent packaging film because of the high amount of water in food causes poor visibility of the packed product and thus less attractive to potential buyer. Anti-fog BOPP films for both hot & cold applications don't allow fog formation on film surface and hence we can achieve clear visibility of packed products. These are largely used for fresh vegetables & chicken bags.",
                },
                {
                    title: "General Note on BOPP Films",
                    description:
                        "Biaxially Oriented Polypropylene or BOPP Films is largely used packaging Film material worldwide. At UFLEX, we make sure the process is optimised for the development of better quality BOPP film which best meets brand's packaging requirements.",
                },
            ],

            quickLinks: [
                { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
                { label: "Request Quote", href: "https://www.flexfilm.com/" },
                { label: "Download Catalog", href: "https://www.flexfilm.com/" },
            ],
        },

        cpp: {
            key: "cpp",
            title: "Cast Polypropylene (CPP) Films",
            heroImageUrl:
                "/images/cpp.png",
            brandTag: "FLEXCPP",
            overview: `Film Business of UFLEX produces over 11,000 TPA of CPP films which can be supplied in widths up to 3000mm. These films come in thickness range of 18 – 200 microns and can be offered with corona treatment on one or both sides. These films are available in plain, heat-sealable, metallisable, polished, mirror finish, embossed surface, glossy/ matte finish, high stiffness, flexible, clear and opaque varieties.`,

            categories: [
                { name: "BOPET Films", productKey: "bopet" },
                { name: "BOPP Films", productKey: "bopp" },
                { name: "CPP Films", productKey: "cpp" },
                { name: "Metallised Films", productKey: "metallised" },
                { name: "Special Effects Films", productKey: "special" },
                { name: "AlOx Coated Films", productKey: "alox-coated" },
            ],

            performanceProperties: [
                "Good gloss, transparency and heat-sealability",
                "Versatile structural properties",
                "New aesthetic possibilities for enhanced shelf appeal",
                "Good oxygen and moisture barrier",
                "Customizable for special applications",
            ],

            applications: [
                "Packaging & Conversion",
                "Food Wraps",
                "Bakery Products",
                "Lamination",
                "Anti-fog",
                "Candy/ Confectionery Wrap",
                "Garment Bags",
                "Retort Packaging",
                "Stationery Packaging",
                "Vacuum Metallization",
                "Deep Freeze Application",
                "Over Wrap",
                "Floral Wraps",
            ],

            innovations: [
                {
                    title: "Retortable CPP Films",
                    description:
                        "This film is designed with excellent impact & high seal strength and can withstand high retort conditions (135° C for 30 min). It can be used towards direct contact with foods. This variant withstands retort processing.",
                },
                {
                    title: "Peelable CPP Films",
                    description:
                        "This film is functionally modified CPP film with consistent peel & seal performance with PP substrate and is used for lidding in both sterilisable & non sterilisable applications.",
                },
                {
                    title: "Bread Packaging CPP Films",
                    description:
                        "This film is designed with optimum combination of optical, frictional, impact & sealing properties to use as a single substrate (printed) for high speed bread packaging machines.",
                },
                {
                    title: "Anti-fog CPP Films",
                    description:
                        "Fog formation inside the sealed transparent packaging film because of the high amount of water in food causes poor visibility of the packed product and thus appear less attractive to potential buyer. Anti-fog CPP films for both hot & cold applications don't allow fog formation on film surface and hence we can get clear visibility of packed products. This variant is largely used for heavy duty fresh vegetables & chicken bags.",
                },
            ],

            quickLinks: [
                { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
                { label: "Request Quote", href: "https://www.flexfilm.com/" },
                { label: "Download Catalog", href: "https://www.flexfilm.com/" },
            ],
        },

        metallised: {
            key: "metallised",
            title: "Metallised BOPP, BOPET & CPP Films",
            heroImageUrl:
                "/images/metallized.png",
            brandTag: "FLEXMETPROTECT",
            overview: `With its fourteen State-of-the-art metallizers with plasma treatment facilities for better metal to film adhesion and superior metal coverage, Film Business of UFLEX produces over 45,000 TPA (100 million lbs) of High Barrier Metalized films per annum with optical density ranging from 0.4 to 3.5 in widths up to 2,850 mm. These films come in the thickness range 6.5 – 75 microns for BOPET; 8 – 75 microns for BOPP and 18-200 microns for CPP.`,

            categories: [
                { name: "BOPET Films", productKey: "bopet" },
                { name: "BOPP Films", productKey: "bopp" },
                { name: "CPP Films", productKey: "cpp" },
                { name: "Metallised Films", productKey: "metallised" },
                { name: "Special Effects Films", productKey: "special" },
                { name: "AlOx Coated Films", productKey: "alox-coated" },
            ],

            performanceProperties: [
                "Offers high barrier properties",
                "Caters to shelf appeal requirements",
                "Superior metal to film adhesion",
                "Excellent metal coverage with plasma treatment",
            ],

            applications: [
                "Converting & Laminating",
                "Synthetic Zari & Metallic Yarn",
                "Electronic Goods Packaging",
                "Insulation Ducting",
                "Decorative Applications",
                "Lidding Applications",
                "Embossing & Holograms",
                "Sandwich Lamination",
                "Twist Wrap & Confectionery",
            ],

            innovations: [
                {
                    title: "Retortable CPP Films",
                    description:
                        "This film is designed with excellent impact & high seal strength and can withstand high retort conditions (135° C for 30 min). It can be used towards direct contact with foods. This variant withstands retort processing.",
                },
                {
                    title: "Peelable CPP Films",
                    description:
                        "This film is functionally modified CPP film with consistent peel & seal performance with PP substrate and is used for lidding in both sterilisable & non sterilisable applications.",
                },
                {
                    title: "Bread Packaging CPP Films",
                    description:
                        "This film is designed with optimum combination of optical, frictional, impact & sealing properties to use as a single substrate (printed) for high speed bread packaging machines.",
                },
                {
                    title: "Anti-fog CPP Films",
                    description:
                        "Fog formation inside the sealed transparent packaging film because of the high amount of water in food causes poor visibility of the packed product and thus appear less attractive to potential buyer. Anti-fog CPP films for both hot & cold applications don't allow fog formation on film surface and hence we can get clear visibility of packed products. This variant is largely used for heavy duty fresh vegetables & chicken bags.",
                },
            ],

            quickLinks: [
                { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
                { label: "Request Quote", href: "https://www.flexfilm.com/" },
                { label: "Download Catalog", href: "https://www.flexfilm.com/" },
            ],
        },

        special: {
            key: "special",
            title: "Special Effects Films",
            heroImageUrl:
                "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-06130331303.jpg",
            brandTag: "Special Effects",
            overview: `Special Effects Films are a range of films that have been embellished with special optical effects. The films are especially processed to get special optical effects, customized patterns and proprietary designs on their surface. These can also be metalized and/or printed to further enhance appearance.`,

            categories: [
                { name: "BOPET Films", productKey: "bopet" },
                { name: "BOPP Films", productKey: "bopp" },
                { name: "CPP Films", productKey: "cpp" },
                { name: "Metallised Films", productKey: "metallised" },
                { name: "Special Effects Films", productKey: "special" },
                { name: "AlOx Coated Films", productKey: "alox-coated" },
            ],

            // No Performance Properties section in screenshot → omitted
            //   performanceProperties: [],

            applications: [
                "Wraps where superior aesthetics are required",
                "Labels, tags and stickers",
                "Holographic and optically variable applications",
                "Overt and covert brand security and anti-counterfeiting",
                "Niche decorative applications (danglers, spangles, point of purchase materials, mobiles/stables etc.)",
                "Gift wraps",
                "Brand authentication",
                "Decorative tapes and ribbons",
                "Decorative panels and posters",
                "Decorative boxes and cartons",
                "Decorative yarn",
                "Document Authentication",
            ],

            // No Innovations section in screenshot → omitted
            //   innovations: [],

            quickLinks: [
                { label: "Flex Films Website ↗", href: "https://www.flexfilm.com/", external: true },
                { label: "Request Quote", href: "/request-quote" },
                { label: "Download Catalog", href: "/catalog.pdf" },
            ],
        },


        "alox-coated": {
  key: "alox-coated",
  title: "AlOx Coated Films",
  heroImageUrl:
    "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-06130321303.jpg", // suitable transparent/high-tech film image
  brandTag: "AlOx Coated",
  overview: `AlOx coating is the application of a thin and highly transparent aluminium oxide on packaging films that imparts high moisture and gas barrier properties giving a tough fight to aluminium foils and metalized films. It is the only true high-barrier flexible packaging material available, that is transparent and allows packaged product to be clearly visible. AlOx coating is a cutting edge technology that only a very select/ handful of film manufacturers are equipped with.`,

  categories: [
    { name: "BOPET Films", productKey: "bopet" },
    { name: "BOPP Films", productKey: "bopp" },
    { name: "CPP Films", productKey: "cpp" },
    { name: "Metallised Films", productKey: "metallised" },
    { name: "Special Effects Films", productKey: "special-effects" },
    { name: "AlOx Coated Films", productKey: "alox-coated" },
  ],

  performanceProperties: [
    "Facilitates operations like optical scanning/ inspection and metal detection during and after the packaging process – a property which is not achievable with aluminium foils or metalized films",
    "Enhanced barrier level in comparison to other transparent flexible packaging materials like Polyvinylidene Chloride (PVDC) based structures and Ethylene Vinyl Alcohol (EVOH) co-extrusions",
    "Moisture and gas permeability is not affected by high levels of temperature or relative humidity and are independent of the base film thickness thus enabling maximum down-gauging of packaging materials",
    "These films are microwavable unlike aluminium foils and metalized films",
  ],

  // No applications section in screenshot → omitted
//   applications: [],

  // No innovations section in screenshot → omitted
//   innovations: [],

  quickLinks: [
    { label: "Flex Films Website ↗", href: "https://www.flexfilms.com", external: true },
    { label: "Request Quote", href: "https://www.flexfilm.com/" },
    { label: "Download Catalog", href: "https://www.flexfilm.com/" },
  ],
},
    };

    const [selectedKey, setSelectedKey] = useState("bopet");

    const product = productsData[selectedKey] || productsData.bopet;

    const { key: productKey, ...productProps } = product;

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
                                    Packaging Films Products
                                </motion.h1>

                                <p className=" text-wrap max-w-xl lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f]">
                                    Flex’s Packaging Films Business’s products range from Biaxially Oriented Polyethylene Terepthalate (BOPET) Films "F L E X P E T", Biaxially Oriented Polypropylene (BOPP) Films "F L E X O P P", Cast Polypropylene (CPP) Films "F L E X C P P", Metallised BOPP, BOPET & CPP Films "F L E X M E T P R O T E C T", Special Effects Films, AIOx Coated Films.
                                </p>

                                {/* <button
                                onClick={() => setOpen(true)}
                                className="mt-4 lato-700 text-[14px] text-[#117ABA]  hover:underline"
                            >
                                Read more
                                <span aria-hidden>↗</span>

                            </button>

                            <ReadMoreDialog
                                open={open}
                                onClose={() => setOpen(false)}
                                title={packagingData[0].title}
                                imageSrc={packagingData[0].image}
                                imageAlt={packagingData[0].title}
                                paragraphs={packagingData[0].paragraphs}
                            /> */}

                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[16/10] w-full overflow-hidden  "
                            >
                                <Image
                                    src="/images/resin.png"
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