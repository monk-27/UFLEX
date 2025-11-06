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
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-07011400114.jpg",
        title: "Products",
        desc: "High-performance inks for superior print quality, compliant with global food safety and sustainability standards.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-07110501105.jpg",
        title: "Applications",
        desc: "A range of adhesives that ensure strong bonding, efficient processing, and compliance with global food safety and sustainability standards.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-07110511105.jpg",
        title: "Industries",
        desc: "A diverse range of coatings that provide visual appeal and meet diverse industry needs while supporting compliance and sustainability.",
    },




];

const modules: OverlayModule[] = [
    {
        title: "Solvent free pigmented white PU adhesive",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-06445504455.jpg",
        description:
            "Designed a cost effective and sustainable adhesive that provides opacity with adhesive lamination.The challenge before us was to disperse the pigment in SF PU adhesive without impacting the lay and the wettability. The...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "POWERING SUSTAINABLE LABEL PRINTING AT KUMAR LABELS",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-06445514455.jpg",
        description:
            "Industry: Label Printing & Packaging Customer: Kumar Labels, India Total sales volume in FY24-25 of Flexgreen LED inks: 59 MT Challenge Kumar Labels, a forward-thinking label converter known for quality and innov...",
        cta: { label: "Read More", href: "/culture" },
    },

];
const buismodules: OverlayModule[] = [
    {
        title: "Digital Stamping Foil",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-06435704357.jpg",
        description:
            "  Digital Stamping Foil, a product designed for seamless compatibility with all digital presses. This high-performance foil offers a high-gloss finish, fine detailing, and versatile application on coated/uncoated paperboar...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "Holography and Stamping Foils ",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-06435714357.jpg",
        description:
            " Flex continues to set global benchmarks through advanced infrastructure, technical excellence, advanced R&D, and deep market intelligence, ensuring world-class quality and innovation across its offerings. Our state-o...",
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
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(Holo)-1.-Mr.-Vinod-Hariharan-45.jpg",
        name: "Mr. Vinod Hariharan ",
        role: "Executive Vice President – Holography Business",
        summary:
            "With almost three decades of rich and diverse experience, Mr. Vinod Hariharan is a seasoned professional with deep expertise in strategic planning, business development, channel management, digital ma...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(Holo)-1.-Mr.-G.P.-Pathak-09.jpg",
        name: "Mr. G.P. Pathak ",
        role: "Vice President - Operations and New Product Development, Holography Business",
        summary:
            "With over three decades of invaluable experience, Mr. G.P. Pathak has established himself as a seasoned professional in the Holography and Anti-Counterfeiting industry. Throughout his career, he has b...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(Holo)-3.-Mr.-Rakesh-Khazanchi-33.jpg",
        name: "Mr. Rakesh Khazanchi ",
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


const packagingData = [
    {
        "id": "holography",
        title: "Holography Business",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Holography-Business58.jpg",
        "imageAlt": "UFlex Holography Solutions",
        paragraphs: [
            "The UFlex holography business is India’s largest and most trusted provider of brand protection and anti-counterfeiting solutions, as well as an emerging global player in the industry.\n\nThe Holography Business offer a comprehensive range of holographic solutions, including, Advanced Security Holograms, Security Paper Labels & Tax Stamps, Wide Web Holographic Films, Stamping Foils, Transfer Holographic Metallized Paper & Paperboard, Security documents, & Textile Application Films for Sequins, Hot Melt, and Glitter Powder.",
            "UFlex Limited’s advanced manufacturing facilities in Noida and Jammu are equipped with advanced in-house capabilities, enabling high-volume production while maintaining the highest quality standards. Specializing in holography-based anti-counterfeiting packaging and brand protection solutions, our facilities empower brands to combat counterfeiting threats and safeguard their business interests.\n\nWith support from NABL-accredited labs and manufacturing sites in Noida and Jammu, India, boasting certifications such as ISO 9001:2015, ISO 14001:2015, ISO45001:2018, ISO 50001:2018, and ISO 31000:2018, we consistently uphold global standards.",
            "Our commitment to quality, security, and sustainability is reinforced by globally recognized certifications, including, ISO 9001:2015 – Quality Management System (QMS), ISO 14001:2015 – Environmental Management System, ISO/IEC 27001:2022 – Information Security Management System, ISO 14298:2021 – Graphic Technology & Security Printing Management, HSSMS Certification – Health & Safety Management System, & IBA Certified Security Printer\n\nAs an industry leader, UFlex is a proud member of ITSA, IOTA (IHMA), and ASPA, actively contributing to the advancement of security printing and brand protection."
        ]
    }

];
const HoloGraphyComp = () => {
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
                            Holography

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
                        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
                    >
                        <Image
                            src="/images/holographys.png"
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
                                src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Holography-Sustainability18.jpg"
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
                            In the process of providing the best fraud-preventive infallible seals of full-proof product security, we ensure that all emissions are well below the permissible levels. We continuously strive for minimum process waste generation and optimally recycle the same.
                        </p>
                        <p>
                            We have many solutions of sustainability segment- holographic transfer on paper and board, cold transfer foils, recycled RSC certified sequins film, cast and cure holographic films among many other.</p>


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

export default HoloGraphyComp
