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
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-07180601806.jpg",
        dynamiclink: "/engineering-business/engineering-Our-Offerings",
        title: "Packaging Machines",
        desc: "A range of packaging machines and special purpose machines for wrapping of products of any shape and size and with specialised requirements.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-07180611806.jpg",
        dynamiclink: "/engineering-business/engineering-Our-Offerings",

        title: "Converting Machines",
        desc: "A wide range of machines for various printing, lamination, slitting/rewinding, doctoring, and pouch making as per a client's requirement.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-07180621806.jpg",
        dynamiclink: "/engineering-business/engineering-Our-Offerings",

        title: "Speciality Products ",
        desc: "A range of specialized ancillary products essential for packaging applications.",
    },




];




const packagingData = [
    {
        "id": "Engineering",
        title: "Engineering",
        image: "/images/heroengg.png",
        "imageAlt": "UFlex Engineering",
        paragraphs: [
            " A leading manufacturer specializing in top-tier packaging, printing, and allied machines, catering to diverse needs across industries. Established in 1985, UFlex Engineering is a leading manufacturer specializing in top-tier packaging, printing, and allied machines. Our commitment to delivering high-performance machines and tailored solutions has propelled us to the forefront of the industry. We offer a comprehensive range of products and cater to diverse needs across various sectors.",
            " With high-end CAD software, streamlined processes, and collaborative efforts across departments, we deliver tailored products to meet evolving global demands. This dedication, coupled with our state-of-the-art facilities, positions UFlex as a leading provider capable of fulfilling our clients' diverse needs with precision and efficiency.",
            " At UFlex Engineering, we prioritize client satisfaction by maintaining rigorous quality standards throughout our production process. Our dedication to innovation, productivity, and globalization has solidified our position as a trusted manufacturer, exporter, and supplier in the global market."
        ]
    }

];


export const businesses: BusinessConfig[] = [
    {
        key: "engineering",
        label: "Engineering",
        hero: {
            heading: "Engineering",
            image: "/images/heroengg.png",
            body:
                "A leading manufacturer specializing in top-tier packaging, printing, and allied machines, catering to diverse needs across industries. Established in 1985, UFlex Engineering is a leading manufacturer specializing in top-tier packaging, printing, and allied machines. Our commitment to delivering high-performance machines and tailored solutions has propelled us to the forefront of the industry. We offer a comprehensive range of products and cater to diverse needs across various sectors.",
        },
        offerings: {
            heading: "Our Offerings",
            items: [
                {
                    id: "packaging-machines",
                    title: "Packaging Machines",
                    image: "/images/packagingmacines.png",
                    description: "",
                },
                {
                    id: "converting-machines",
                    title: "Converting Machines",
                    image: "/images/converting.png",
                    description: "",
                },
            ],
        },
        innovations: {
            heading: "Business Highlights and Innovations",
            items: [
                {
                    id: "double-head-coating-1650",
                    title: "Double Head Coating-1650",
                    description:
                        "UFlex's Engineering Business meets market demand with coating machines covering up to 2500mm web widths. Recent offerings include a 1650mm double-headed model applying various coatings with methods like gravure and kiss coating.",
                    image: "/images/double.png",
                },
                {
                    id: "pfs-4u",
                    title: "PFS-4U",
                    description:
                        "UFlex launched the LPFS-4U (4 UP Linear, Pick, Fill, and Seal) machine in Q3, 2022. This machine, driven entirely by servos, ensures speed, performance, safety, hygiene, and environmental sustainability for brands. With an operator-friendly interface and efficient filling system, it accommodates various applications, running up to 20 PPM per track with four channels.",
                    image: "/images/pfs4u.png",
                },
                {
                    id: "rotary-horizontal-high-speed-form-fill-and-seal",
                    title: "Rotary Horizontal High-Speed Form Fill and Seal Machine with Gripper",
                    description:
                        "UFlex Engineering's innovative design for a Rotary Horizontal High-Speed Form Fill and Seal machine features grippers that hold pouches without conveyor belts, enhancing pouch quality and preventing leaks.",
                    image: "/images/rotary.png",
                },
                {
                    id: "accu-slit-3300",
                    title: "Accu Slit-3300",
                    description:
                        "After the successful performance of Accu Slit2500 and Accu Eco Slit-3000, the UFlex Engineering Business design team developed Accu Slit-3300, the new slitter of width 3300, for slitting Metalized BOPP and other substrates in FY23.",
                    image: "/images/accu.png",
                },
                {
                    id: "asepto-speed-25000",
                    title: "Asepto Speed 25000 machine",
                    description:
                        "UFlex, under the flagship of Asepto, introduced the next-gen, superpower Asepto Speed 25000 machine, an innovative engineering marvel that can process 25,000 aseptic liquid cartons per hour. It is the next-generation aseptic liquid filling machine with state-of-the-art technology that works at lightning speed with the convenience of an all-in-one portion-pack filling facility.",
                    image: "/images/asepto.png",
                },
                {
                    id: "uflex-flexi-liquid-double-head",
                    title: "UFlex-flexi-liquid (double head)",
                    description:
                        "The newly introduced machinery boasts an array of features designed to optimize operation efficiency. Its user-friendly interface ensures easy operation, while its low maintenance requirements minimize downtime. Despite its compact design and small footprint, it integrates seven servos, enabling high-speed performance.",
                    image: "/images/flexiuflex.png",
                },
            ],
        },
        sustainability: {
            title: "Sustainability",
            description:
                "At UFlex, we prioritise environmental responsibility across our operations. UFlex engineering has undertaken several initiatives focussed on water conservation, waste management and enhancing biodiversity surrounding our facilities.",
            image: "/images/sus.png",
            linkLabel: "Know more",
            linkHref: "#",
        },
        keypeople: {
            title: "Key People",
            details: [
                {
                    photo: "/images/ravi.png",
                    name: "Mr. Ravi Sharma",
                    role: "Joint President - Engineering and Solutions Delivery, Engineering Business",
                    summary:
                        "Mr. Ravi Sharma is responsible for leading Engineering and Solutions Delivery for the Engineering Business.",
                    cta: { label: "Read More", href: "/leadership/ravi-sharma" },
                },
                {
                    photo: "/images/akash.png",
                    name: "Mr. Akash Khandelwal",
                    role: "Executive Vice President – Operations, Engineering Business",
                    summary:
                        "Mr. Akash Khandelwal leads Operations for the Engineering Business as Executive Vice President.",
                    cta: { label: "Read More", href: "/leadership/akash-khandelwal" },
                },
                {
                    photo: "/images/summet.png",
                    name: "Mr. Sumeet Arora",
                    role: "Senior Vice President - Sales and Marketing, Engineering Business",
                    summary:
                        "Mr. Sumeet Arora heads Sales and Marketing for the Engineering Business as Senior Vice President.",
                    cta: { label: "Read More", href: "/leadership/sumeet-arora" },
                },
            ],
        },
        awards: {
            title: "Awards & Accolades",
            description: "Over the last several years, UFlex’s Flexible Packaging business has received various awards and certifications for its innovative and sustainable packaging solutions.",
            image: "/images/awards.png",
            linkLabel: "Know more",
            linkHref: "/hall-of-fame",
        },
        accreditation: [
            { image: "/images/accc13.png" },
            { image: "/images/accc14.png" },
        ],
    },





];


type Props = {
    business: BusinessConfig;
};
const EngComp: React.FC<Props> = ({ business }) => {
    return (




        <div>


            {/* HERO */}
            <section className='bg-white pt-12'>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="space-y-4">
                        <div className="grid py-12 lg:grid-cols-2 lg:py-1 pt-12 gap-10">
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[24px] lato-400 text-[#117ABA] md:text-[28px] "
                                >
                                    Engineering


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
                                    src="/images/heroengg.png"
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

export default EngComp
