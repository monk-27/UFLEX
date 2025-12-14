import { motion } from 'framer-motion'
import React from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import SimpleCarousel, { SliderItem } from './slidercomp'
import { OverlayModule, OverlayModules } from './overlay'
import { Leader, LeaderSpotlight } from './leader'
import { AwardItem, AwardsAccolades } from './awards'
import Accreditions, { AccreditationItem } from './accredition'
import AccreditationsSlider from './accredition'
import ExpandableText from './expandabletext'

import { InnovationSlider } from './buissnessreusbales/InnovationSlider'
import { SustainabilitySection } from './buissnessreusbales/SustainabilitySection'
import Keypeople from './buissnessreusbales/keypeople'
import { CaseStudySection } from './buissnessreusbales/case-studies'
import { AwardsSection } from './buissnessreusbales/AwardsSection'
import { BusinessConfig } from '@/app/business/data'



const SliderItems: SliderItem[] = [
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-07011400114.jpg",
        dynamiclink: "/holography-business/holography-Our-Offerings",
        title: "Products",
        desc: "High-performance inks for superior print quality, compliant with global food safety and sustainability standards.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-07110501105.jpg",
        dynamiclink: "/holography-business/holography-Our-Offerings",

        title: "Applications",
        desc: "A range of adhesives that ensure strong bonding, efficient processing, and compliance with global food safety and sustainability standards.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-07110511105.jpg",
        dynamiclink: "/holography-business/holography-Our-Offerings",

        title: "Industries",
        desc: "A diverse range of coatings that provide visual appeal and meet diverse industry needs while supporting compliance and sustainability.",
    },




];






export const businesses: BusinessConfig[] = [
    {
        key: "holography",
        label: "Holography",
        hero: {
            heading: "Holography",
            image: "/images/holographyhero.png", // replace with your actual image
            body:
                "The UFlex holography business is India's largest and most trusted provider of brand protection and anti-counterfeiting solutions, as well as an emerging global player in the industry. The Holography Business offers a comprehensive range of holographic solutions, including Advanced Security Holograms, Security Paper Labels & Tax Stamps, Wide Web Holographic Films, Stamping Foils, Transfer Holographic Metallized Paper & Paperboard, Security documents, & Textile Application Films for Sequins, Hot Melt, and Glitter Powder.",
        },

        offerings: {
            heading: "Our Offerings",
            items: [
                {
                    id: "stamping-foils",
                    title: "Stamping Foils",
                    image: "/images/stamping.png"
                },
                {
                    id: "security-documents",
                    title: "Security Documents",
                    image: "/images/security.png"
                },
                {
                    id: "textile-application",
                    title: "Textile Application",
                    image: "/images/textile.png"
                },
                {
                    id: "holographic-paper",
                    title: "Holographic Metallized Paper",
                    image: "/images/holographic.png"
                },
                {
                    id: "transfer-holographic-metallized-paper",
                    title: "Stamping Foils ",
                    image: "/images/digital.png"
                },
                {
                    id: "transfer-paper-board",
                    title: "Transfer Paper/ Board",
                    image: "/images/transfer.png"
                },
                {
                    id: "wide-web-holographic-films",
                    title: "Wide Web Holographic Films ",
                    image: "/images/wide.png"
                },
                {
                    id: "stamping-foils-2",
                    title: "Stamping Foils",
                    image: "/images/stampingfoil.png"
                }
            ]
        },

        innovations: {
            heading: "Business Highlights and Innovations",
            items: [
                {
                    id: "digital-stamp-foiling",
                    title: "Digital Stamp Foiling",
                    description:
                        "Digital Stamping Foil, a product designed for seamless compatibility with all digital presses. This high-performance foil offers a high-gloss finish, fine detailing, and versatile application on coated/uncoated paperboard and plastics. Ideal for premium decorative applications, it enhances aesthetics with embellishment effects, including 2D and embossed designs,ensuring a sophisticated and high-end appeal",
                    image: "/images/digital.png"
                },
                {
                    id: "holography-and-stamping",
                    title: "Holography and Stamping Foils",
                    description:
                        "Flex continues to set global benchmarks through advanced infrastructure, technical excellence, advanced R&D, and deep market intelligence, ensuring world-class quality and innovation across its offerings. Our state-of-the-art in-house manufacturing facilities, equipped with Origination, Coatings, Metallizers, and Slitting machines, enable advanced transfer technology, enhancing both surface appeal and tactile experience.",
                    image: "/images/foils.png"
                },
                {
                    id: "alu-alu-blister",
                    title: "Holographic Alu-Alu Blister",
                    description:
                        "With a growing demand for secure and overt packaging solutions, UFlex’s Holographic Alu-Alu Blister is making a significant impact, with sustained adoption expected among pharmaceutical companies seeking advanced anti-counterfeiting measures.",
                    image: "/images/blister.png"
                },
                {
                    id: "decorative-products",
                    title: "Decorative Products Segment",
                    description:
                        "Designed using specialized holographic foils and intricate patterns, these products create vibrant multi-dimensional effects. Their surfaces capture and reflect light from various angles, delivering a premium and dynamic visual appeal.",
                    image: "/images/decorative.png"
                },
                {
                    id: "advanced-blister-packs",
                    title: "Advanced holographic blister packs",
                    description:
                        "UFlex’s enhanced holographic blister packs are engineered with advanced security features, making replication virtually impossible. In the pharmaceutical industry- where safety and efficacy are critical- UFlex's cutting-edge holographic technology offers unparalleled protection for both brands and consumers.",
                    image: "/images/advanced.png"
                },
                {
                    id: "high-refractive-sequins",
                    title: "High-Refractive Holographic Sequins Film",
                    description:
                        "UFlex’s high-refractive holographic sequins film delivers exceptional brilliance and luster. Targeted at premium markets, it combines advanced holographic technology with precision coatings to create stunning light and color effects.",
                    image: "/images/refractive.png"
                },
                {
                    id: "3d-flipogram",
                    title: "3D Flipogram – Advanced Visual Anti-Counterfeiting Technology",
                    description:
                        "UFlex’s 3D Flipogram revolutionizes brand protection with its advanced micro-optical technology, delivering unparalleled visual anti-counterfeiting solutions. Comprising hundreds of thousands of micro-lenses, this highly secure technology, also used in currency notes, creates a unique and dynamic 3D visual effect that is virtually impossible to replicate.",
                    image: "/images/flipogram.png"
                }
            ]
        },

        sustainability: {
            title: "Sustainability",
            description:
                "In the process of providing the best fraud-preventive infallible seals of full-proof product security, we ensure that all emissions are well below the permissible levels. We continuously strive for minimum process waste generation and optimally recycle the same. We have many solutions of sustainability segment- holographic transfer on paper and board, cold transfer foils, recycled RSC certified sequins film, cast and cure holographic films among many other",
            image: "/images/sus.png",
            linkLabel: "Know more",
            linkHref: "#"
        },

        keypeople: {
            title: "Key People",
            details: [
                {
                    photo: "/images/vinod.png",
                    name: "Mr. Vinod Hariharan",
                    role: "Executive Vice President – Holography Business",
                    summary:
                        "Mr. Vinod Hariharan plays a key leadership role in driving innovation and excellence in the Holography Business.",
                    cta: { label: "Read More", href: "/leadership/vinod-hariharan" }
                },
                {
                    photo: "/images/pathak.png",
                    name: "Mr. G.P. Pathak",
                    role: "Vice President – Operations and New Product Development, Holography Business",
                    summary:
                        "Mr. Pathak oversees operations and product development, ensuring technological advancement and strong process control.",
                    cta: { label: "Read More", href: "/leadership/gp-pathak" }
                },
                {
                    photo: "/images/rakesh.png",
                    name: "Mr. Rakesh Khazanchi",
                    role: "Vice President – Sales and Marketing, Holography Business",
                    summary:
                        "Mr. Khazanchi leads sales and marketing initiatives, strengthening global market reach and customer engagement.",
                    cta: { label: "Read More", href: "/leadership/rakesh-khazanchi" }
                }
            ]
        },

        awards: {
            title: "Awards & Accolades",
            description:
                "Over the last several years, UFlex’s Flexible Packaging business has received various awards and certifications for its innovative and sustainable packaging solutions.",
            image: "/images/awards.png",
            linkLabel: "Know more",
            linkHref: "/hall-of-fame"
        },

        accreditation: [
            { image: "/images/accc12.png" },
            { image: "/images/accc13.png" },
            { image: "/images/accc14.png" },
            { image: "/images/accc15.png" }
        ]
    },





];

const packagingData = [
    {
        "id": "holography",
        title: "Holography Business",
        image: "/images/advanced.png",
        "imageAlt": "UFlex Holography Solutions",
        paragraphs: [
            "The UFlex holography business is India’s largest and most trusted provider of brand protection and anti-counterfeiting solutions, as well as an emerging global player in the industry.\n\nThe Holography Business offer a comprehensive range of holographic solutions, including, Advanced Security Holograms, Security Paper Labels & Tax Stamps, Wide Web Holographic Films, Stamping Foils, Transfer Holographic Metallized Paper & Paperboard, Security documents, & Textile Application Films for Sequins, Hot Melt, and Glitter Powder.",
            "UFlex Limited’s advanced manufacturing facilities in Noida and Jammu are equipped with advanced in-house capabilities, enabling high-volume production while maintaining the highest quality standards. Specializing in holography-based anti-counterfeiting packaging and brand protection solutions, our facilities empower brands to combat counterfeiting threats and safeguard their business interests.\n\nWith support from NABL-accredited labs and manufacturing sites in Noida and Jammu, India, boasting certifications such as ISO 9001:2015, ISO 14001:2015, ISO45001:2018, ISO 50001:2018, and ISO 31000:2018, we consistently uphold global standards.",
            "Our commitment to quality, security, and sustainability is reinforced by globally recognized certifications, including, ISO 9001:2015 – Quality Management System (QMS), ISO 14001:2015 – Environmental Management System, ISO/IEC 27001:2022 – Information Security Management System, ISO 14298:2021 – Graphic Technology & Security Printing Management, HSSMS Certification – Health & Safety Management System, & IBA Certified Security Printer\n\nAs an industry leader, UFlex is a proud member of ITSA, IOTA (IHMA), and ASPA, actively contributing to the advancement of security printing and brand protection."
        ]
    }

];


type Props = {
    business: BusinessConfig;
};
const HoloGraphyComp: React.FC<Props> = ({ business }) => {
    return (




        <div>


            {/* HERO */}
            <section className='bg-white pt-12'>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="space-y-4">
                        <div className="grid py-12 lg:grid-cols-2 lg:py-1 gap-10">
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[24px] lato-400 text-[#117ABA] md:text-[28px] "
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
                                className="relative aspect-[16/10] w-full overflow-hidden "
                            >
                                <Image
                                    src="/images/advanced.png"
                                    alt="UFlex capabilities across the value chain"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                            </motion.div>
                        </div>
                        <SimpleCarousel heading="Our Offerings" items={SliderItems} imageHeight={280} />


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

export default HoloGraphyComp
