"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import { motion } from "framer-motion"
import AsepticComp from "@/components/aseptic"
import PackageComp from "@/components/packaging"
import ReusablePropsCOMMComp from "@/components/reusableoffering"
import DynamicHero from "@/components/dynamic-hero"
import DynamicCarouselModal from "@/components/dynamic-caraousal"
import SustainabilityTabs, { TabConfig } from "@/components/offeringstab"

import Image from "next/image"
import OfferingsTabs from "@/components/offeringstab"


const TAB_DATA = [
    {
        id: "offerings",
        label: "Our Offerings",
        items: [
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-08511505115.jpg",

                title: "Flexible Laminates",
                description: "UFlex offers a wide array of flexible pouches designed to cater to diverse product categories and packaging needs across industries. Our portfolio includes advanced formats such as slider zipper pouches, ideal for powders and granules, and pouring spout pouches, perfectly suited for liquid applications. We also offer innovative solutions like Innolok™ pouches, 3D (quad-seal) pouches, and 4D pouches that provide enhanced shelf appeal and functionality."
            },
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-08533105331.jpg",


                title: "Pre-formed pouches",
                description: "UFlex offers a wide array of flexible pouches designed to cater to diverse product categories and packaging needs across industries. Our portfolio includes advanced formats such as slider zipper pouches, ideal for powders and granules, and pouring spout pouches, perfectly suited for liquid applications. We also offer innovative solutions like Innolok™ pouches, 3D (quad-seal) pouches, and 4D pouches that provide enhanced shelf appeal and functionality. To support consumer convenience and brand differentiation, our offerings include stand-up pouches, centre-sealed, three-side sealed, and gusseted pouches, along with carry bags, flexi bottles, and reclosable press-to-close pouches. In addition, we also manufacture flexi tubes, offering flexible yet durable packaging for products in the personal care and FMCG sectors. With such a comprehensive range, UFlex’s flexible pouch solutions combine innovation, visual appeal, and functionality to meet evolving market demands.",
            },
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-08533115331.jpg",


                title: "FlexFreshTM – Active & Modified Atmosphere Packaging (AMAP)",
                description: "MAP solution is a breakthrough innovation designed to extend the shelf life of perishable goods such as fresh vegetables, fruits, and flowers. By regulating the internal atmosphere without the use of chemicals, FlexFreshTM helps slow spoilage and preserve freshness for up to 30 days. This enables businesses to strengthen domestic distribution and tap into international export markets with confidence. FlexFreshTM liner bags and films have already made a significant impact, empowering litchi farmers in Bihar to supply their produce across India and beyond. Thanks to MAP technology, fresh Indian litchis have reached markets in Dubai and Doha, packed under APEDA’s supervision and displayed in leading retail chains like Lulu Mall. This innovative solution is not only redefining freshness but also creating new economic opportunities for farmers and exporters, making India’s premium produce truly global.",
            },
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-09042700427.jpg",


                title: "Flexo printed rolls and bags",
                description:"Our Flexo printed rolls and bags are a key offering within our Flexible Packaging business, designed to meet the specific needs of the baby and feminine hygiene product segments. We provide high-quality flexo surface printed bags in a variety of formats, including surface printed poly rolls, bottom gusset bags, wicketed bottom gusset bags, and handle gusseted bags. These solutions combine functional performance with superior print clarity, ensuring both product protection and enhanced shelf appeal."
                },
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-09042710427.jpg",

                title: "Laminated Woven Poly Propylene (WPP) bags",
                description: "Our range of laminated Woven Polypropylene (WPP) bags offers high strength, durability, and superior printability—making them ideal for a wide variety of industrial and consumer applications. Available in multiple formats such as block bottom bags for cement, building materials, chemicals, fertilizers, and seeds; pinch bottom bags for rice, pet food, and other granulated items; and handle bags for easy carrying of rice, grains, and other commodities. We also provide business promotion bags and reusable shopping bags that combine utility with branding, as well as bulk bags for collation, tailored for large-scale storage and logistics. Designed to withstand demanding conditions while ensuring product integrity and visual appeal, our WPP bags offer a sustainable and efficient packaging solution.",
            },
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-09042720427.jpg",

                title: "Electron beam and Cast n Cure",
                description: "UFlex offers advanced print finishing solutions using electron beam (e-beam) and Cast n Cure technologies, enhancing the visual and functional appeal of flexible packaging. Our portfolio includes a variety of premium finishes such as super gloss for high-impact shelf presence, matte finish for a premium tactile feel, and registered cast n cure for precise, design-specific effects. We also provide holography cast n cure for added security and visual differentiation, and registered e-beam coatings that deliver consistent curing with superior clarity and durability. These finishes not only elevate the aesthetics of packaging but also contribute to improved performance and brand value.",
            },
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-09042730427.jpg",

                title: "Pharmaceutical Packaging",
                description: "UFlex offers a comprehensive range of high-performance packaging materials designed specifically for the pharmaceutical industry. Our offerings include cold form alu laminates, strip foil, blister foil, child-resistant foil, and suppository films—each engineered to ensure superior protection against moisture, oxygen, and light. These materials help maintain the efficacy and shelf life of sensitive formulations while supporting safety, compliance, and ease of use. With a focus on quality, reliability, and precision, our pharmaceutical packaging solutions cater to a wide range of dosage forms and global regulatory requirements.",
            },

            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-09042740427.jpg",

                title: "Hygiene Films",
                description: "UFlex offers high-performance hygiene films designed to meet the critical requirements of the personal care industry. Our range includes breathable films for diapers and back sheet films for sanitary napkins, engineered for comfort, protection, and reliability. These films provide excellent breathability, softness, and barrier properties, ensuring user comfort while maintaining product integrity. With a strong focus on hygiene, safety, and quality, our hygiene films are developed using advanced manufacturing processes to support leading global and regional brands in delivering trusted hygiene solutions.",
            },

            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item6-09042750427.jpg",

                title: "Premium shower-proof bag",
                description: "UFlex’s premium shower-proof bag is an advanced packaging solution tailored for the building materials industry, combining durability, safety, and high-performance design. Made from polypropylene-based multi-component block bottom structures, the bag features nano technology that prevents water ingress—validated through a stringent “Shower Test”—thereby extending shelf life and eliminating lumping in humid conditions. Nano perforations minimize product loss and environmental impact by reducing oozing. The bag also offers advanced anti-counterfeit and tamper-proof features, along with scratch-resistant surfaces and specialized printing of up to eight colors, enabling high-definition graphics and enhanced shelf appeal. This innovative packaging sets new benchmarks in protecting product integrity while elevating brand visibility.",
            },

            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item7-09042760427.jpg",

                title: "Zipouch",
                description: "Zipouch is a versatile range of reclosable and reusable pouches made from high-quality laminated films, designed to meet the everyday food storage needs of modern consumers. Ideal for storing and refrigerating vegetables, fruits, meats, breads, and even reheating food, Zipouch offers convenience from shelf to refrigerator to microwave. Its unique material composition and secure slider-lock or zipper-lock systems help retain freshness and preserve nutritional value for longer periods. Available in specialized formats such as Fresh-n-loc (slider pouches) and Press-n-loc (zipper pouches), Zipouch bags provide superior oxygen barrier properties and high tensile strength, making them a reliable and sustainable solution for households and foodservice applications alike.",
            },

            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item8-09042770427.jpg",

                title: "Injection Moulding Products",
                description: "UFlex offers a wide range of precision-engineered injection moulded plastic packaging components such as caps, spouts, tube caps, shoulders, zippers, sliders, and core plugs. Manufactured using machines with capacities of 150, 180, and 250 tons, these products are designed to meet the diverse requirements of the packaging industry. The unit is equipped with advanced technology to produce biodegradable (enzyme-based) moulding products, supporting eco-friendly packaging solutions. Backed by a dedicated quality lab and skilled professionals, all products undergo stringent inspection and testing to ensure high performance, durability, and compliance with industry standards.",
            },
        ],
    },
    {
        id: "featured",
        label: "Featured Products",
        items: [

        ],
    },
    {
        id: "new",
        label: "New Arrivals",
        items: [

        ],
    },
] satisfies TabConfig[];


export default function Page() {
    return (
        <>
            <SiteHeader />
            <div className="bg-gradient-to-b from-white to-slate-50">
                <section className="relative w-full h-[260px] sm:h-[549px] overflow-hidden">
                    <Image
                        src="/images/sus/fp.png"
                        alt="Investors Relations"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/40" />


                </section>


                <OfferingsTabs tabs={TAB_DATA} />
            </div>



            <SiteFooter />

        </>
    )
}
