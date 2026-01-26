import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import SimpleCarousel, { SliderItem } from './slidercomp'
import { OverlayModule, OverlayModules } from './overlay'
import { Leader, LeaderSpotlight } from './leader'
import { AwardItem, AwardsAccolades } from './awards'
import Accreditions, { AccreditationItem } from './accredition'
import AccreditationsSlider from './accredition'
import { ReadMoreDialog } from './expandabletext'
import { InnovationSlider } from './buissnessreusbales/InnovationSlider'
import { SustainabilitySection } from './buissnessreusbales/SustainabilitySection'
import Keypeople from './buissnessreusbales/keypeople'
import { CaseStudySection } from './buissnessreusbales/case-studies'
import { AwardsSection } from './buissnessreusbales/AwardsSection'
import { BusinessConfig } from '@/app/business/data'




const SliderItems: SliderItem[] = [
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-08511505115.jpg",
        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",
        title: "Flexible Laminates",
        desc: "UFlex offers a comprehensive range of flexible laminates made from various combinations of plastic, aluminum, and paper to suit diverse packaging needs. These include structures like PET/PE, PET/Foil/PE, PET/BOPP, BOPP/CPP, and advanced multilayer laminates such as PET/Extr/Foil/Extr/PE and AlOx PET/BON/CPP for retort applications. ",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-08533105331.jpg",
        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",

        title: "Pre-formed pouches",
        desc: "UFlex offers a wide array of flexible pouches designed to cater to diverse product categories and packaging needs across industries. Our portfolio includes advanced formats such as slider zipper pouches, ideal for powders and granules, and pouring spout pouches, perfectly suited for liquid applications.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-08533115331.jpg",
        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",

        title: "FlexFreshTM – Active & Modified Atmosphere Packaging (AMAP)",
        desc: "MAP solution is a breakthrough innovation designed to extend the shelf life of perishable goods such as fresh vegetables, fruits, and flowers. By regulating the internal atmosphere without the use of chemicals, FlexFreshTM helps slow spoilage and preserve freshness for up to 30 days. ",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-09042700427.jpg",
        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",

        title: "Flexo printed rolls and bags",
        desc: "Our Flexo printed rolls and bags are a key offering within our Flexible Packaging business, designed to meet the specific needs of the baby and feminine hygiene product segments. We provide high-quality flexo surface printed bags in a variety of formats, including surface printed poly rolls, bottom gusset bags, wicketed bottom gusset bags, and handle gusseted bags.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-09042710427.jpg",

        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",
        title: "Laminated Woven Poly Propylene (WPP) bags",
        desc: "Our range of laminated Woven Polypropylene (WPP) bags offers high strength, durability, and superior printability—making them ideal for a wide variety of industrial and consumer applications.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-09042720427.jpg",

        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",
        title: "Electron beam and Cast n Cure",
        desc: "UFlex offers advanced print finishing solutions using electron beam (e-beam) and Cast n Cure technologies, enhancing the visual and functional appeal of flexible packaging. Our portfolio includes a variety of premium finishes such as super gloss for high-impact shelf presence, matte finish for a premium tactile feel, and registered cast n cure for precise, design-specific effects.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-09042730427.jpg",

        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",
        title: "Pharmaceutical Packaging",
        desc: "UFlex offers a comprehensive range of high-performance packaging materials designed specifically for the pharmaceutical industry. Our offerings include cold form alu laminates, strip foil, blister foil, child-resistant foil, and suppository films—each engineered to ensure superior protection against moisture, oxygen, and light.",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-09042740427.jpg",

        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",
        title: "Hygiene Films",
        desc: "UFlex offers high-performance hygiene films designed to meet the critical requirements of the personal care industry. Our range includes breathable films for diapers and back sheet films for sanitary napkins, engineered for comfort, protection, and reliability. ",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item6-09042750427.jpg",

        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",
        title: "Premium shower-proof bag",
        desc: "UFlex’s premium shower-proof bag is an advanced packaging solution tailored for the building materials industry, combining durability, safety, and high-performance design. Made from polypropylene-based multi-component block bottom structures, the bag features nano technology that prevents water ingress—validated through a stringent “Shower Test”—thereby extending shelf life and eliminating lumping in humid conditions.",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item7-09042760427.jpg",

        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",
        title: "ZipouchR",
        desc: "ZipouchR is a versatile range of reclosable and reusable pouches made from high-quality laminated films, designed to meet the everyday food storage needs of modern consumers. Ideal for storing and refrigerating vegetables, fruits, meats, breads, and even reheating food, ZipouchR offers convenience from shelf to refrigerator to microwave.",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item8-09042770427.jpg",
        dynamiclink: "/flexible-packaging-business/flexible-Our-offering",

        title: "Injection Moulding Products",
        desc: "UFlex offers a wide range of precision-engineered injection moulded plastic packaging components such as caps, spouts, tube caps, shoulders, zippers, sliders, and core plugs. Manufactured using machines with capacities of 150, 180, and 250 tons, these products are designed to meet the diverse requirements of the packaging industry.",
    },





];




const packagingData = [
    {
        "id": "flexible-packaging",
        title: "Flexible Packaging",
        image: "/images/flexi.png",
        "imageAlt": "UFlex Flexible Packaging Solutions",
        paragraphs: [
            `UFlex Limited is India’s largest flexible packaging company, headquartered in Noida, Delhi NCR. With
a legacy of innovation and excellence, we operate three advanced manufacturing facilities across
India, including Noida and Jammu, and serve a diverse clientele both domestically and globally. Our
robust international footprint spans North America, Europe, Africa, Southeast Asia, and the Middle
East, positioning us as a leading manufacturer and exporter in the flexible packaging space.`,
            `With a manufacturing capacity of over 100,000 MTPA, UFlex offers a comprehensive range of
flexible packaging solutions and laminated roll stocks. Our versatile portfolio includes a wide variety
of pouch formats such as 3D and 4D pouches with re-closable options, wicketed bags for hygiene
products, pet food pinch bottom bags, cement block bottom bags, FlexiTubes, and innovative
offerings like innolock pouches, zip pouches, embossed foils, pocket PTC zippers, and Cast n Cure
technologies. Whether it’s packaging for household use or industrial applications, our products are
designed to combine functionality with visual appeal.`,
            `What sets UFlex apart is our full backward integration across every key vertical—films (BOPET, BOPP,
CPP, metalized films), chemicals (inks, coatings, adhesives), engineering (converting and packing
machines), holography, and cylinders. This integration enables us to offer customized, end-to-end
packaging solutions tailored to the evolving needs of our customers.`,
            `Our four in-house R&amp;D labs, approved by the Ministry of Industries, Government of India, are
equipped with state-of-the-art instruments like FTIR, UTM, gas chromatograph, and differential
scanning calorimeter. This empowers us to stay at the forefront of packaging innovation, driving
quality, sustainability, and performance.`,
            `At UFlex, we don’t just deliver packaging—we deliver excellence, innovation, and value with every
solution we create.`



        ]
    }

];

export const businesses: BusinessConfig[] = [
    {
        key: "flexible-packaging",
        label: "Flexible Packaging",
        hero: {
            heading: "Our Businesses",
            image: "/images/flexi.png",
            body:
                "We offer a comprehensive range of products, including flexible laminates, pre-formed pouches, Flexo-printed rolls and bags, laminated woven polypropylene (WPP) bags, electron beam and Cast n Cure technology, pharmaceutical packaging, Flexible Tubes, hygiene films, Flexfresh™ modified atmosphere packaging, and big bags. At UFlex, we don’t just deliver packaging—we deliver excellence, innovation.",
        },
        innovations: {
            heading: "Business Highlights and Innovations",
            items: [
                {
                    id: "itc-rte-pouch-ulp-pet",
                    title: "ITC RTE Pouch – ULP PET pouches",
                    image: "/images/flexiblelaminates.png",
                    description: "These pouches are designed for convenient microwave heating and are ideal for hot-fill applications such as gravies, ketchups, sauces, jams, and marinades. They are also well-suited for packaging meat, cheese, frozen foods, and dry fruits.",
                },
                {
                    id: "flexitube-laminate-metallica-holographic",
                    title: "FlexiTube Laminate",
                    image: "/images/preformpouches.png",
                    description: "Silver and Gold Metallica 280 Micron: This laminate consists of multiple layers, including 70-micron natural PE, 34-micron extruded PE, 12-micron special-grade metallized PET, another 34-micron extruded PE, and 130-micron natural EVOH PE. Silver Holographic Laminate: The silver holographic laminate features a multilayer structure comprising 70-micron natural PE, 13-micron metallized holographic film, 30-micron extruded PE, 12-micron aluminum foil, another 30-micron extruded PE, and 130-micron natural PE.",
                },
                {
                    id: "jay-baba-bakreswar-farm-house-rice-bag",
                    title: "Jay Baba Bakreswar – Farm House rice bag",
                    image: "/images/preformpouches.png",
                    description: "UFlex has developed packaging for Jay Baba Bakreswar Rice Mill Pvt. Ltd. under the Farm House brand. This marks a significant milestone, as it is the first 50 kg SKU rice bag developed by UFlex, highlighting the company’s advancement in bulk packaging solutions.",
                },
                {
                    id: "itc-eco-friendly-packaging-savlon",
                    title: "ITC’s eco-friendly packaging",
                    image: "/images/preformpouches.png",
                    description: "UFlex has developed a sustainable packaging solution for Savlon brand of ITC Limited, featuring an 8.2g SKU designed for the domestic market. A key highlight is the use of a PCR-based laminate, reinforcing ITC’s commitment to eco-friendly packaging solutions.",
                },
                {
                    id: "double-spout-pouch-clean-drinking-water",
                    title: "10 Litre Double Spout Pouch for clean drinking water",
                    image: "/images/preformpouches.png",
                    description: "UFlex has developed an innovative pouch for a start-up focused on tackling the critical issue of clean drinking water availability for underprivileged communities. The 10-litre double spout pouch is a portable water filtration solution equipped with a durable plastic handle for easy carrying. It features a laminate structure comprising 12μ PET, 15μ BON, and 165μ natural PE, offering both strength and sustainability. A 40 mm spout enables convenient water dispensing, while the brand’s patented natural filter ensures safe drinking water reaches those who need it most.",
                },
                {
                    id: "50mm-oval-tubes-packaging",
                    title: "50mm dia Oval tubes",
                    image: "/images/elctron.png",
                    description: "These oval tubes offer 20% more space on the front and back panels compared to traditional round tubes, giving brands additional room to effectively communicate their message to consumers. The unique shape also enables more efficient use of retail shelf space, allowing brand owners to display more units at the same cost. Furthermore, the ability to accommodate more tubes per pallet contributes to reduced transportation costs. This innovation underscores UFlex’s commitment to helping brands succeed through superior and efficient packaging solutions.",
                },
                {
                    id: "matte-effect-hair-dye-sachets",
                    title: "New Packaging Solution for Frozen Food",
                    image: "/images/elctron.png",
                    description: "UFlex supported Hygienic Research Institute Pvt. Ltd. to develop innovative gel-based hair dye sachets in 24ml and 45ml sizes. This premium packaging solution features a unique matte effect, a first in the hair dye segment. The design is further enhanced with elegant touches such as detailed hair graphics and a gold-colored logo, adding to the pouch’s overall visual appeal and shelf presence.",
                },
                {
                    id: "vacuum-sealed-marinated-chicken-packaging",
                    title: "New Packaging Solution for Frozen Food",
                    image: "/images/elctron.png",
                    description: "UFlex has partnered with Jubilant FoodWorks to enhance the packaging of their marinated chicken, which is distributed in 500 gm packs from their Bangalore facility. The innovative laminate used in this packaging is thermoformed and vacuum-sealed, featuring a barrier film that protects the food from contamination by preventing exposure to air.",
                },
            ]


        },
        offerings: {
            heading: "Our Offerings",
            items: [
                {
                    id: "flexible-laminates",
                    title: "ITC RTE Pouch – UL PET pouches",
                    image: "/images/flexiblelaminates.png",
                    description:
                        "High-performance polyester films for diverse packaging applications.",
                },
                {
                    id: "pre-formed-pouches",
                    title: "Pre Formed Pouches",
                    image: "/images/preformpouches.png",
                    description:
                        "Biaxially oriented polypropylene films for flexible packaging.",
                },
                {
                    id: "electron-bar",
                    title: "Electron Bar",
                    image: "/images/elctron.png",
                    description:
                        "Cast polypropylene films for specialty and general packaging.",
                },
            ],
        },

        sustainability: {
            title: "Sustainability",
            description: `UFlex is deeply committed to environmental sustainability and has undertaken several impactful
initiatives across India to reduce its carbon footprint and enhance operational productivity. The
company consistently invests in advanced technologies that consume less energy per ton of flexible
packaging, promoting more efficient and responsible manufacturing practices. All in-house
production waste is recycled and reintegrated into the manufacturing cycle, significantly reducing
landfill pressure and helping curb pollution.`,
            image: "/images/sus.png",
            linkLabel: "Know more",
            linkHref: "/flexible-packaging-business/sustainability",
        },

        keypeople: {
            title: "Key People",
            details: [
                {
                    photo:
                        "/images/jeevaraj.png",
                    name: "Mr. Jeevaraj Gopal Pillai",
                    role: "Whole Time Director, President - Flexible Packaging and New Product Development and Director– Sustainability",
                    summary:
                        "Mr. Jeevaraj Pillai brings close to four decades of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director-Sustainability, he leads the development and implementation of the company’s ESG strategy, along with the development of sustainable products and solutions. He has been serving on the board of UFlex Limited as a whole-time director since November 14, 2023. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                //     {
                //     photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(FP)-2.-Mr.-Amit-Shah38.jpg",
                //     name: "Mr. Amit Shah",
                //     role: "President and Chief Marketing Officer, Flexible Packaging Business",
                //     summary:
                //         "Mr. Amit Shah brings close to three decades of experience, including nearly a decade in the FMCG sector. As a member of the UFlex leadership team, he plays a key role in driving strategic growth and l...",
                //     cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                // },
            ],
        },

        awards: {
            title: "Awards & Accolades",
            description:
                "Over the last several years, UFlex’s Flexible Packaging business has received various awards and certifications for its innovative and sustainable packaging solutions.",
            image: "/images/awards.png",
            linkLabel: "Know more",
            linkHref: "/hall-of-fame",
        },

        accreditation: [
            { image: "/images/accc8.png" },
            { image: "/images/accc9.png" },
            { image: "/images/accc10.png" },
            { image: "/images/accc11.png" },
        ],
    },





];
type Props = {
    business: BusinessConfig;
};
const FlexibleComp: React.FC<Props> = ({ business }) => {
    const [open, setOpen] = useState(false);

    return (
    <div>


            {/* HERO */}
            <section className='bg-white pt-4 sm:pt-12'>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="space-y-4">
                        <div className="grid py-4 lg:grid-cols-2 lg:py-1  gap-10">
                            {/* <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[24px] lato-400 text-[#117ABA] md:text-[28px] "
                                >
                                    Flexible Packaging


                                </motion.h1>

                                {packagingData.map((section, idx) => (
                                    <ExpandableText
                                        key={idx}
                                        modalTitle={section.title}
                                        imageSrc={section.image}
                                        imageAlt={section.title}
                                        paragraphs={section.paragraphs}
                                    />
                                ))}
                            </div> */}

                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
                                >
                                    Flexible Packaging
                                </motion.h1>

                                <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                                    {packagingData[0].paragraphs[0]}
                                </p>

                                <button
                                    onClick={() => setOpen(true)}
                                    className="mt-4 lato-400 text-[16px] sm:text-[20px]text-[#117ABA]  hover:underline"
                                >
                                    Read More
                                    <span aria-hidden>↗</span>

                                </button>

                                {/* ---- Modal ---- */}
                                <ReadMoreDialog
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    title={packagingData[0].title}
                                    imageSrc={packagingData[0].image}
                                    imageAlt={packagingData[0].title}
                                    paragraphs={packagingData[0].paragraphs}
                                />

                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[16/10] w-full overflow-hidden "
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
                        <SimpleCarousel heading="Our Offerings" items={SliderItems} imageHeight={360} />


                        {business.innovations && (
                            <InnovationSlider
                                heading={business.innovations.heading}
                                items={business.innovations.items}
                            />
                        )}
                        <SustainabilitySection data={business.sustainability} />

                        {(business.keypeople) && (
                            <Keypeople
                                title={business.keypeople.title}
                                people={business.keypeople.details}
                            />
                        )}

                        {business.caseStudies && business.caseStudies.length > 0 && (
                            <CaseStudySection
                                sectionTitle="Case Studies"
                                imageSrc="/images/chemcase.png"
                                items={business.caseStudies}
                            />
                        )}
                        <AwardsSection data={business.awards} />

                        <AccreditationsSlider items={business.accreditation ?? []} />
                    </div>
                </div>






            </section>
        </div>
    )
}

export default FlexibleComp
