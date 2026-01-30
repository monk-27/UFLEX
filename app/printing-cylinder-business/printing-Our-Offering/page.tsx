"use client";

import { useEffect, useRef, useState } from "react";
import ProductCategorySection from "./product-reusable";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/breadcrumb";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const printingCylindersData = {
    title: "Printing Cylinders",
    heroImageUrl:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05492704927.jpg",

    overview:
      "Our product range extends from rotogravure cylinders to Anilox rollers, lamination and coating rollers, embossing rollers to mica & wood-grain cylinders.\n\nUFlex’ Printing Cylinders business products range includes a variety of Gravure Printing Cylinders, Flexo Plates and Flexo Printing Sleeves.",

    categories: [
      { name: "Gravure Cylinders", key: "gravure" },
      { name: "CTP Flexo Plates", key: "ctp" },
      { name: "Flexo Printing Sleeves", key: "sleeves" },
    ],

    sections: {
      gravure: {
        heroImageUrl:
          "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05492704927.jpg",
        blocks: [
          {
            heading: "1. Printing Cylinders:",
            text:
              "With a vast infrastructure, talented manpower and advanced technology, the Cylinders business of UFlex has carved an irreproachable reputation for itself. UFlex has been recognized as the most trusted manufacturer of rotogravure cylinders or Gravure Printing Cylinders for packaging & other industries. Whether you are printing for the first time or printing through a re-engraved cylinder, our technologies make sure that the brand identity of the product remains intact maintaining absolute consistency in sharpness, contrast and gamma levels.",
            images: [
              "https://www.uflexltd.com/assets/images/Cylinder-Gravure-Cylinders-1.jpg",
              "https://www.uflexltd.com/assets/images/Cylinder-Gravure-Cylinders-2.jpg",
              "https://www.uflexltd.com/assets/images/Cylinder-Gravure-Cylinders-3.jpg",
              //   "https://www.uflexltd.com/assets/images/gravure-cylinder-4.jpg",
            ],
            subText:
              "Top of the line machines from Europe & USA have been installed for Film less Digital Engraving on the cylinders. After viewing the final layout including press marks through a Plotter printout, the digital file is transferred onto the engraver. The technically advanced engraving machines have the capability to generate different cell profiles and the provision of using customer defined Gamma Levels, thereby ensuring exact reproduction for specialized applications.\n\nThe diamond stylus of the Engraver produces up to 8500 cells per second during a high-speed process of engraving that meets various printing requirements. Accuracy of engraving in terms of cell geometry (cell width, cell wall and depth) for each cylinder is ensured that yields sharpness on the prints.\n\nHard Chrome Electroplating is finally carried out on the engraved Gravure Printing Cylinder that best meets printing requirements. For varied printing requirements, engravers are used both on hollow and shafted gravure printing cylinders of up to 2500 mm length and 1250 mm circumference.",
          },
          {
            heading: "2. Coating Cylinders:",
            bullets: [
              "Anilox Coating",
              "Specialty Coating",
              "Hot Melt Coating (High GSM)",
              "Lamination Coating",
              "Lacquer Coating",
              "Low GSM Coating Cylinder",
            ],
            images: [
              "https://www.uflexltd.com/assets/images/Cylinder-Coating-Cylinders-1.jpg",
              "https://www.uflexltd.com/assets/images/Cylinder-Coating-Cylinders.jpg",
            ],
          },
          {
            heading: "3. Special Purpose Cylinders:",
            subBlocks: [
              {
                title: "Embossing Cylinders by Laser Engraving",
                image:
                  "https://www.uflexltd.com/assets/images/Cylinder-Embossing-Cylinders.jpg",
              },
              {
                title: "Cylinders for Wooden Laminates",
                image:
                  "https://www.uflexltd.com/assets/images/Cylinders-Wooden-Laminates.jpg",
              },
              {
                title:
                  "Wall paper Design, Gift wrapper & Greeting Cards etc",
                image:
                  "https://www.uflexltd.com/assets/images/Cylinder-Wallpaper-Design.jpg",
              },
            ],
          },
        ],
      },

      ctp: {
        title: "CTP FLEXO PLATES",
        heroImageUrl:
          "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-05492714927.jpg",
        overview:
          "The advanced flexo plate manufacturing set-up with laser imaging can produce high definition images.",
        bullets: [
          "A new standard for the production of flexographic plates or flexo plates.",
          "A dry thermal technology that allows the development of analogue and digital flexographic plates without using a solvent.",
          "Productivity- Marked improvement in pressroom, flexo plate preparation, thereby reducing overall cycle time.",
        ],
        image:
          "https://www.uflexltd.com/assets/images/Cylinder-CTP-Flexo-Plates.jpg",
      },

      sleeves: {
        title: "FLEXO PRINTING SLEEVES",
        heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-05492724927.jpg",
        overview:
          "Flexography printing has been gaining popularity due to its impeccable print quality, easy operability and lower costs as compared to gravure printing. Flexo printing sleeves technology has brought an acceleration in speed, simplification in processes and lower costs when replacing a printing form and within printing itself for that matter.",
        bullets: [
          "Allows excellent transfer of all printing inks",
          "Possibility of printing seamless motives / Joint-less printing",
          "High resistance to solvents (ethyl acetate, ethanol, Methyl Ethyl Ketone MEK)",
        ],
        images: [
          "https://www.uflexltd.com/assets/images/Cylinder-Flexo-Printing-Sleeves.jpg",
          "https://www.uflexltd.com/assets/images/Cylinder-Flexo-Printing-Sleeves-1.jpg",
        ],
      },
    },
  };

  // const [activeKey, setActiveKey] =
  //   useState<"gravure" | "ctp" | "sleeves">("gravure");

  // const enhancedCategories = printingCylindersData.categories.map((c) => ({
  //   name: c.name,
  //   productKey: c.key,
  //   isActive: c.key === activeKey,
  //   onClick: () => setActiveKey(c.key as any),
  // }));
const searchParams = useSearchParams();
const catFromUrl = searchParams.get('cat')?.toLowerCase() || null;

const validKeys = ["gravure", "ctp", "sleeves"] as const;

const initialKey:any = catFromUrl && validKeys.includes(catFromUrl as any)
  ? catFromUrl
  : "gravure"; // default to gravure

const [activeKey, setActiveKey] = useState<typeof validKeys[number]>(initialKey);
const sectionRef = useRef<HTMLDivElement>(null);

// Sync when URL changes (browser back/forward, direct link)
useEffect(() => {
  const currentCat = searchParams.get('cat')?.toLowerCase();
  if (currentCat && validKeys.includes(currentCat as any)) {
    setActiveKey(currentCat as any);
    if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
  } else if (!currentCat) {
    setActiveKey("gravure");
  }
}, [searchParams]);

const handleCategoryClick = (key: string) => {
  setActiveKey(key as any);

  // Update URL without reload
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('cat', key);
    window.history.replaceState({}, '', url.toString());
    if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
  }
};

const enhancedCategories = printingCylindersData.categories.map((c) => ({
  name: c.name,
  productKey: c.key,
  isActive: c.key === activeKey,
  onClick: () => handleCategoryClick(c.key),
}));
  return (
    <>
      <SiteHeader />

      <section className="bg-white">
        <div className="">




          <section className="relative w-full h-[380px] sm:h-[451px] overflow-hidden">

            <Image
              src="/images/heroprinting.png"
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
                                    className="bg-[#117ABA] lato-400 text-left w-[450px] h-[250px] sm:w-[706px] sm:h-[311px] text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[20px] pl-4 pt-2 pb-4 pr-4 md:pl-24 lg:pl-28 sm:pt-8 sm:pb-4 sm:pr-12 mb-12 sm:mb-16"
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                >
                                    <div className="w-[300px] sm:w-[537px]">


                                        <h1 className="text-white text-[24px] lato-700  md:text-[42px]   ">
                                                            Printing Cylinders

                                        </h1>
                                        Our product range extends from rotogravure cylinders to Anilox rollers, lamination and coating rollers, embossing rollers to mica & wood-grain cylinders.

UFlex’ Printing Cylinders business products range includes a variety of Gravure Printing Cylinders, Flexo Plates and Flexo Printing Sleeves
            </div>
                                </motion.div>


                            </motion.div> */}
          </section>
          <Breadcrumb
            items={[
              { label: "Printing Cylinders", href: "/printing-cylinder-business" },
              { label: "Printing Cylinders Products" },
            ]}
          />
<div ref={sectionRef} className="scroll-mt-20">

          <ProductCategorySection
            title={printingCylindersData.title}
            heroImageUrl={printingCylindersData.heroImageUrl}
            overview={printingCylindersData.overview}
            categories={enhancedCategories}
            activeKey={activeKey}
            sectionData={printingCylindersData.sections[activeKey]}
            />
            </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
