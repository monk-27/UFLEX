import { motion } from 'framer-motion'
import React from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import { SliderCarousel, SliderItem } from './slidercomp'
import { OverlayModule, OverlayModules } from './overlay'
import { Leader, LeaderSpotlight } from './leader'
import { AwardItem, AwardsAccolades } from './awards'
import Accreditions, { AccreditationItem } from './accredition'
import AccreditationsSlider from './accredition'
import ExpandableText from './expandabletext'




const SliderItems: SliderItem[] = [
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05492704927.jpg",
        title: "Gravure Cylinders",
        desc: "High-precision gravure, printing, coating, and special-purpose cylinders for diverse applications, including rotogravure (gravure) cylinders.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-05492714927.jpg",
        title: "CTP Flexo Plates",
        desc: "An advanced manufacturing setup, featuring laser imaging with 5080 DPI, for high-definition flexographic plates.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-05492724927.jpg",
        title: "Flexo Printing Sleeves",
        desc: "Our flexo printing sleeves offer superior print quality, operational ease, and cost-efficiency in flexography printing.",
    },




];

const modules: OverlayModule[] = [
    {
        title: "Solvent free pigmented white PU adhesive",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05503205032.jpg",
        description:
            "Designed a cost effective and sustainable adhesive that provides opacity with adhesive lamination.The challenge before us was to disperse the pigment in SF PU adhesive without impacting the lay and the wettability. The...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "POWERING SUSTAINABLE LABEL PRINTING AT KUMAR LABELS",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-05503215032.jpg",
        description:
            "Industry: Label Printing & Packaging Customer: Kumar Labels, India Total sales volume in FY24-25 of Flexgreen LED inks: 59 MT Challenge Kumar Labels, a forward-thinking label converter known for quality and innov...",
        cta: { label: "Read More", href: "/culture" },
    },

];
const buismodules: OverlayModule[] = [
    {
        title: "Holographic effect on leatherettes through steel embossed cylinders",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05583505835.jpg",
        description:
            " The holographic effect on leatherettes like PU and PVC-based materials through steel embossed cylinders have multiple applications that enhance the aesthetics of products used for home decor, handbags, car seat cover, an...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "Twining effect on leatherettes and steel through laser embossed cylinders",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-05583515835.jpg",
        description:
            " The twining effect on leatherettes and steel provides an array of applications and enhances the product finish and aesthetics in fashion, lift wall decorations, curtains, handbags, car seat covers, flooring, shopping mal...",
        cta: { label: "Read More", href: "/culture" },
    },
    {
        title: "Carving effect through laser embossing on PVC",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-05583525835.jpg",
        description:
            "  Carving effect through laser embossing on PVC has many attractive applications for home decoration. It can enhance the attractiveness and aesthetics of home interiors like modular kitchens, table covers, door mats, floor...",
        cta: { label: "Read More", href: "/culture" },
    },
    {
        title: "Laser embossing on the shoe soles",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-05583535835.jpg",
        description:
            "  Laser embossing on the soles of shoes, making them skid-free. Lack of friction on the bottom of shoes is a common issue faced by consumers. UFlex’s laser embossing solution, for shoe soles addresses this issue, mak...",
        cta: { label: "Read More", href: "/culture" },
    },
    {
        title: "Aesthetic effect on shoe foxing through laser embossing",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-05583545835.jpg",
        description:
            " Solutions that make footwear more attractive and appealing to customers. The aesthetic effect of shoe foxing (the upper layer of shoe sides) makes footwear more attractive and appealing to customers. This effect helps sh...",
        cta: { label: "Read More", href: "/culture" },
    },
    {
        title: "Anti-skidding pattern on foot mat through laser embossing",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item6-05583555835.jpg",
        description:
            "  3D anti-skidding effect on PVC sheets through laser embossing. This innovation creates a 3D anti-skidding effect on PVC sheets through laser embossing. Such skid-free embossing can be used in the manufacturing of foot ma...",
        cta: { label: "Read More", href: "/culture" },
    },
];

const awards: AwardItem[] = [
    {
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/banners/Aseptic-Packaging-Business-banner54.jpg",
        title: "Recognized for our sustainability efforts",
        description:
            "Over the last several years, UFlex’s Printing Cylinder business has received various awards and certifications.",
        cta: { label: "View More", href: "/awards/sustainability" },
    },

];




const keyPeopleMany: Leader[] = [
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PC)-1.-Mr.-Parwez-Izhar41.jpg",
        name: "Mr. Parwez Izhar",
        role: "Executive Vice President - Printing Cylinders Business",
        summary:
            "With nearly three decades of experience in strategic planning, project management, and business excellence, Mr. Izhar currently leads UFlex’s Printing cylinders business. His previous roles incl...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },

];
const accreditations: AccreditationItem[] = [
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-Management-System-Certificate-ISO-14001-2015-for-Manufacture-of-cylinder-for-rotogravure-printing-applications.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-Management-System-Certificate-ISO-9001-2015-for-Manufacture-of-cylinder-and-flexo-plates-for-rotogravure-flexo-printing-applications.jpg" },




];

const packagingData = [
    {
        "id": "Printing Cylinders Business",
        title: "Printing Cylinders Business",
        image: "/images/cyls.png",
        "imageAlt": "UFlex Flexible Packaging Solutions",
        paragraphs: [
            "UFlex printing cylinders business enforces stringent quality control at every stage of production to deliver world-class cylinders. With advanced technology, the business manages the complete cylinder production process, starting from the steel base, copper plating, and surface finishing to digital engraving, chrome plating, and final proof printing.",
            "With high-end CAD software, streamlined processes, and collaborative efforts across departments, we deliver tailored products to meet evolving global demands. This dedication, coupled with our state-of-the-art facilities, positions UFlex as a leading provider capable of fulfilling our clients' diverse needs with precision and efficiency.",
            "Our production facilities, located in Noida, Uttar Pradesh, and Jammu, J&K, India, are equipped with the latest innovations, including the Flexo ‘Xlarge’ laser for high-definition imaging up to 5080 DPI, and the Schepers laser for superior precision. These advancements place UFlex at the forefront of packaging, corrugated printing, specialized coatings, embossing, decorative laminates, and security features.\n\nOur digital processing technology ensures perfect registration during rotogravure production, offering a powerful combination of electronically engraved and chemically etched embossing cylinders. With ongoing innovations, UFlex continues to lead in delivering unparalleled quality and efficiency for all printing applications.",
            "We enforce stringent quality control at every stage of production to deliver world-class cylinders. Our meticulous practices include regular calibration of scanners, monitors, and prepress digital-cylinder proofs, as well as detailed inspection of H/T images on color-calibrated monitors. We dynamically balance each cylinder at 500 RPM and ensure precise accuracy in cone and bore blueprints."
        ]
    }

];
const CylComp = () => {
    return (
        <div>


            {/* HERO */}
            <section className="bg-gradient-to-b from-white to-slate-50">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl"
                        >
                            Printing Cylinders

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
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl "
                    >
                        <Image
                            src="/images/cyls.png"
                            alt="UFlex capabilities across the value chain"
                            fill
                            className="object-cover"
                            priority
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                    </motion.div>
                </div>
                <SliderCarousel
                    heading="Our Offerings"
                    subheading=""
                    items={SliderItems}
                    imageHeight={280}

                />
                <OverlayModules
                    heading="Case Studies"
                    subheading=""
                    modules={modules}
                    heights={{ base: 360, sm: 420, lg: 520 }}
                    lgCols={2}
                    imageSizes="(max-width:1024px) 100vw, 50vw"
                    className=""
                />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12 text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl"
                        >
                            Sustainability

                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-blue-400 shadow ring-4 ring-blue-200"

                        >

                            <Image
                                src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Engineering-Sustainability48.jpg"
                                alt="UFlex capabilities across the value chain"
                                fill
                                className="object-cover"
                                priority
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="manrope-400 mt-5 space-y-4 text-slate-700"

                    >
                        <p className='manrope-800'>
                            Acting today for a sustainable tomorrow</p>

                        <p>
                            Through energy-efficient technologies, eco-friendly processes, and responsible waste management, we are proud to foster an eco-friendly environment at our plants.
                        </p>
                    </motion.div>
                </div>
                <OverlayModules
                    heading="Business Highlights and Innovations"
                    subheading=""
                    modules={buismodules}
                    heights={{ base: 360, sm: 420, lg: 520 }}
                    lgCols={2}
                    imageSizes="(max-width:1024px) 100vw, 50vw"
                    className=""
                />
                <LeaderSpotlight people={keyPeopleMany} />


                <AwardsAccolades
                    heading="Awards & Accolades"
                    subheading="Milestones that celebrate our ambition and execution."
                    items={awards}
                    split       // feature the first award as a hero row; remove to show pure grid
                    gridColsLg={2}
                />
                <AccreditationsSlider items={accreditations} />;
            </section>






        </div>
    )
}

export default CylComp
