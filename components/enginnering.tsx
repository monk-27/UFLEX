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




const SliderItems: SliderItem[] = [
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-07180601806.jpg",
        title: "Packaging Machines",
        desc: "A range of packaging machines and special purpose machines for wrapping of products of any shape and size and with specialised requirements.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-07180611806.jpg",
        title: "Converting Machines",
        desc: "A wide range of machines for various printing, lamination, slitting/rewinding, doctoring, and pouch making as per a client's requirement.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-07180621806.jpg",
        title: "Speciality Products ",
        desc: "A range of specialized ancillary products essential for packaging applications.",
    },




];

const modules: OverlayModule[] = [
    {
        title: "Solvent free pigmented white PU adhesive",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-07185901859.jpg",
        description:
            "Designed a cost effective and sustainable adhesive that provides opacity with adhesive lamination.The challenge before us was to disperse the pigment in SF PU adhesive without impacting the lay and the wettability. The...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "POWERING SUSTAINABLE LABEL PRINTING AT KUMAR LABELS",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-07190011900.jpg",
        description:
            "Industry: Label Printing & Packaging Customer: Kumar Labels, India Total sales volume in FY24-25 of Flexgreen LED inks: 59 MT Challenge Kumar Labels, a forward-thinking label converter known for quality and innov...",
        cta: { label: "Read More", href: "/culture" },
    },

];
const buismodules: OverlayModule[] = [
    {
        title: "Double Head Coating-1650",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-07255502555.jpg",
        description:
            "  UFlex's Engineering Business meets market demand with coating machines covering up to 2500mm web widths. Recent offerings include a 1650mm double-headed model applying various coatings with methods like gravure and kiss ...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "PFS-4U",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-07255512555.jpg",
        description:
            "UFlex launched the LPFS-4U (4 UP Linear, Pick, Fill, and Seal) machine in Q3, 2022. This machine, driven entirely by servos, ensures speed, performance, safety, hygiene, and environmental sustainability for brands.With...",
        cta: { label: "Read More", href: "/culture" },
    },
];

const awards: AwardItem[] = [
    {
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/banners/Aseptic-Packaging-Business-banner54.jpg",
        title: "Recognized for our sustainability efforts",
        description:
            "UFlex's Holography Business has received several accreditations and certifications for its innovative and sustainable products and solutions.",
        cta: { label: "View More", href: "/awards/sustainability" },
    },

];




const keyPeopleMany: Leader[] = [
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(Eng)-1.-Mr.-Ravi-Sharma-38.jpg",
        name: "Mr. Ravi Sharma ",
        role: "Joint President - Engineering and Solutions Delivery, Engineering Business",
        summary:
            "Mr. Ravi Sharma, joining in 1992, brings over 12 years of manufacturing experience, including tenure with notable multinationals like Allied Signals, Molins India Limited, and a subsidiary of Philips ...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(Eng)-1.-Mr.-Akash-Khandelwal-58.jpg",
        name: "Mr. Sumeet Arora ",
        role: "Senior Vice President - Sales and Marketing, Engineering Business",
        summary:
            "With over three decades of invaluable experience, Mr. G.P. Pathak has established himself as a seasoned professional in the Holography and Anti-Counterfeiting industry. Throughout his career, he has b...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(Eng)-3.-Mr.-Sumeet-Arora-13.jpg",
        name: "Mr. Akash Khandelwal ",
        role: "Vice President - Sales and Marketing, Holography Business",
        summary:
            "With over 35 years of rich experience in Sales and Marketing, Mr. Rakesh Khazanchi brings deep expertise in strategy, brand building, and sales management processes. Before joining UFlex’s Holograph...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
];
const accreditations: AccreditationItem[] = [
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_T-V-Rheinland-Certificate-of-Compliance-UFlex-2015-002-Hologram-Security-Safety-Management-Standard-HSSMS.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_LMS-Certificate-ISO-9001-2015-Design-manufacturing-of-holograms-paper-holograms-and-paper-labels.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-ISO-14001-2015-Certificate-Design-and-manufacture-of-security-hologram-paper-labels-including-holographic-film-and-hologram-laminated-product.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_OEKO-TEX-Certificate-2018-19-Polyster-Films-used-for-sequins-hot-melt-films-fancy-yarns-stamping-foils-glitter-powder-in-lacquered-coated-colours.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_BQC-Certification-for-Graphic-Technology-Management-of-Security-Printing-Process-ISO-14298-2013-Manufacturing-of-Holograms-paper-holograms-Paper-Labels.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_International-Tax-Stamp-Association-ITSA-Certification-of-Membership-2018.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_International-Hologram-Manufacturers-Association-IHMA-Certification-of-Membership-2018.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Authentication-Solution-Provider-Association-ASPA-Certification-of-Membership-2018-19.jpg" },





];
const EngComp = () => {
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
                            Engineering

                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="manrope-400 mt-5 space-y-4 text-slate-700"
                        >
                            <p>
                                A leading manufacturer specializing in top-tier packaging, printing, and allied machines, catering to diverse needs across industries.

                                Established in 1985, UFlex Engineering is a leading manufacturer specializing in top-tier packaging, printing, and allied machines. Our commitment to delivering high-performance machines and tailored solutions has propelled us to the forefront of the industry. We offer a comprehensive range of products and cater to diverse needs across various sectors.
                            </p>
                            <p>
                                With high-end CAD software, streamlined processes, and collaborative efforts across departments, we deliver tailored products to meet evolving global demands. This dedication, coupled with our state-of-the-art facilities, positions UFlex as a leading provider capable of fulfilling our clients' diverse needs with precision and efficiency. </p>
                            <p>
                                At UFlex Engineering, we prioritize client satisfaction by maintaining rigorous quality standards throughout our production process. Our dedication to innovation, productivity, and globalization has solidified our position as a trusted manufacturer, exporter, and supplier in the global market.</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-blue-400 shadow ring-4 ring-blue-200"
                    >
                        <Image
                            src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Engineering-Business49.jpg"
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
                        <p className=''>
                            At UFlex, we prioritise environmental responsibility across our operations. UFlex engineering has undertaken several initiatives focussed on water conservation, waste management and enhancing biodiversity surrounding our facilities.</p>
                        

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

export default EngComp
