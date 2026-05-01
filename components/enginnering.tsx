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

import { InnovationSlider } from './buissnessreusbales/InnovationSlider'
import { SustainabilitySection } from './buissnessreusbales/SustainabilitySection'
import Keypeople from './buissnessreusbales/keypeople'
import { CaseStudySection } from './buissnessreusbales/case-studies'
import { AwardsSection } from './buissnessreusbales/AwardsSection'
import { ReadMoreDialog } from './expandabletext'
import { title } from 'process'




const SliderItems: SliderItem[] = [
    {
        img: "/images/new/e1.png",
        dynamiclink: "/engineering-business/engineering-Our-Offering",
        title: "Packaging Machines",
        desc: "A range of packaging machines and special purpose machines for wrapping of products of any shape and size and with specialised requirements.",
    },
    {
        img: "/images/new/e2.png",
        dynamiclink: "/engineering-business/engineering-Our-Offering",

        title: "Converting Machines",
        //         desc: `UFlex brings the latest innovations in
        // printing and packaging technology, offering
        // state-of-the-art solutions such as high-
        // performance CI Flexo presses, advanced
        // ELS printing machines, and extrusion
        // lamination machines. These machines are
        // designed to enhance both the efficiency
        // and quality of the final product.`,
        desc: `A wide range of machines for various printing, lamination, slitting/rewinding, doctoring, and pouch making as per a client's requirement.`,
    },
    {
        img: "/images/new/e3.jpg",
        dynamiclink: "/engineering-business/engineering-Our-Offering",

        title: "Speciality Products ",
        desc: "A range of specialized ancillary products essential for packaging applications.",
    },




];




const packagingData = [
    {
        "id": "Engineering",
        title: "Engineering",
        image: "/images/new/ceruflex.jpeg",
        "imageAlt": "UFlex Engineering",
        paragraphs: [
            `A leading manufacturer specializing in top-tier
packaging, printing, and allied machines,
catering to diverse needs across industries. Established in 1985, UFlex Engineering is
committed to delivering high-performance
machines and tailored solutions, which has
propelled us to the forefront of the
industry. We offer a comprehensive range
of products and cater to diverse needs
across various sectors.`,

            `With high-end CAD software, streamlined
processes, and collaborative efforts across
departments, we deliver tailored products
to meet evolving global demands. This
dedication, coupled with our state-of-the-
art facilities, positions UFlex as a leading
provider capable of fulfilling our clients
diverse needs with precision and efficiency.`,
            `At UFlex Engineering, we prioritize client
satisfaction by maintaining rigorous quality
standards throughout our production
process. Our dedication to innovation,
productivity, and globalization has
solidified our position as a trusted
manufacturer, exporter, and supplier in the
global market.`
        ]
    }

];


export const businesses: any[] = [
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
                    id: "ceruflex",
                    title: "Ceruflex 500",
                    description: `UFlex has introduced the CERUFLEX 500, its next-generation high-speed gravure printing machine developed in collaboration with Italy’s Gravtech.
\n The machine delivers printing speeds of up to 500 m/min and features advanced technologies such as a shaftless cylinder system, intelligent inking, and trolley-based job change overs for superior efficiency and quality. 
\n Designed with sustainability in mind,CERUFLEX 500 reduces energy, ink, and solvent usage while enhancing productivity and print precision for flexible packaging converters.`,
                    image: "/images/new/fy261.jpeg"

                },
                {
                    id: "asepto-speed-25000",
                    title: "Asepto Speed 25000 machine",
                    description:
                        `UFlex, under its flagship brand Asepto, introduced the next-generation Asepto Speed 25000, an advanced aseptic liquid filling machine capable of processing 25,000 cartons per hour.
                        \nDesigned as an all-in-one portion-pack solution, it converts paper rolls into finished cartons automatically. The machine features integrated chambers for splicing, sterilizing, filling, sealing, and dispensing, all controlled via a user-friendly human-machine interface. Engineered for efficiency, it significantly enhances productivity, delivering more than double the output of conventional production systems.
`,
                    image: "/images/new/asepto.png",
                },
                {
                    id: "accu-slit-3300",
                    title: "Accu Slit-3300",
                    description:
                        "UFlex developed Accu Slit-3300, the new slitter of width 3300, for slitting Metalized BOPP and other substrates. This is secondary slitters for packaging film manufacturing Industry with a working width of models from 2500 mm to 3300 mm. This slitter can slit BOPET, BOPP, CPP and Plain film and can run at a maximum speed of 800 mpm.",
                    image: "/images/accu.png",
                },
                {
                    id: "rotoflex",
                    title: "Rotoflex ELS Standard Special -1300 Printing Machine",
                    description:
                        "Rotoflex ELS Standard Special-1300 is engineered for reliable, high-quality printing on flexible packaging materials, with a maximum web width of 1320 mm. It features a robust main drive system for smooth and stable performance, along with precision side lay assembly for accurate web alignment. Equipped with a shafted printing cylinder, doctor blade assembly, and individual ink trolley system, it ensures consistent print quality. Advanced motorized controls enable precise registration, uniform ink transfer, and faster job changeovers.",
                    image: "/images/new/els.png",
                },
                {
                    id: "solvent-less-lamination-machines",
                    title: "Solvent-less Lamination Machines:",
                    image: "/images/new/solventless.png",
                    description: "Solventless Super-550 is a high-speed, eco-friendly laminating machine with a maximum web width of 1320 mm, designed for flexible packaging applications. It features independent motors at both unwind and rewind sections for precise web tension control, smooth material handling, and stable operation across diverse substrates. Equipped with sleeve-type transport rollers, it ensures uniform web support and high running accuracy. An integrated sleeve cleaning system removes adhesive residue, maintaining consistent lamination quality and reducing downtime.",

                },
                {
                    id: "slit",
                    title: "High Speed Duplex Slitter Model: TRU SLIT-600",
                    description: `TRU SLIT-600 is a high-performance slitting machine designed for productivity,safety, and efficient workflow in flexible packaging operations. It features automatic roll unloading and stacking to reduce manual handling. A separated unwind stand with floor pick-up and motorized roll clamping ensures safe jumbo roll loading. With speeds up to 600 MPM and a maximum rewind diameter of 600 mm, it enables precision slitting through multiple cutting options. An advanced trim conveying system ensures clean, stable, high-speed performance.`,
                    image: "/images/new/sliter.png"
                },
                //                 {
                //                     id: "double-head-coating-1650",
                //                     title: "Double Head Coating-1650",
                //                     description:
                //                         `UFlex's Engineering Business meets market demand with coating machines covering up to 2500mm web widths. Recent offerings include a 1650mm double-headed model applying various coatings with methods like gravure and kiss coating. 
                //                         \n Ceramic IR heaters ensure smooth coating, while safety measures like the LEL system are integrated. Additional features like floor lifting unwind, sleeve-type impression rollers, and chamber doctor blades enhance versatility. With corona treaters, these machines offer coatings from 0.2 to 6 GSM, adding value to substrates.
                //  `,
                //                     image: "/images/double.png",
                //                 },
                // {
                //     id: "pfs-4u",
                //     title: "LPFS-4U",
                //     description:
                //         `UFlex launched the LPFS-4U (4 UP Linear, Pick, Fill, and Seal) machine in Q3, 2022. This machine, driven entirely by servos, ensures speed, performance, safety, hygiene, and environmental sustainability for brands. 
                //         \nWith an operator-friendly interface and efficient filling system, it accommodates various applications, running up to 20 PPM per track with four channels. `,
                //     image: "/images/new/lpfs.png",
                // },
                {
                    id: "relam-50",
                    title: "ReLAM 50:",
                    image: "/images/new/relam.png",

                    description: `ReLAM 50 is a decentralized recycling system designed to process up to 50 kg of mixed flexible waste per hour, offering an efficient solution for hard-to-recycle materials. Ideal for start-ups, rural enterprises, local recycling units, waste management companies, NGOs, and municipalities, the system converts mixed flexible waste into recycled granules or panels. These outputs can be reused to manufacture household plastic products, plastic lumber, tiles, and other non-critical applications. Compact and versatile, ReLAM 50 enables grassroots participation in the circular economy while advancing sustainable waste management practices`,
                },
                {
                    id: "rotary-horizontal-high-speed-form-fill-and-seal",
                    title: "Rotary Horizontal High-Speed Form Fill and Seal Machine with Gripper",
                    description: "UFlex Engineering new design for a rotary horizontal high-speed form fill and seal machine features grippers that hold pouches without conveyor belts, enhancing Picture of Highlight and Innovation pouch quality and preventing leaks."
                    , image: "/images/new/rotary.png",
                },


                //                 {
                //                     id: "uflex-flexi-liquid-double-head",
                //                     title: "UFlex-flexi-liquid (double head)",
                //                     description:
                //                         `The newly introduced machinery boasts an array of features designed to optimize operation efficiency. Its user-friendly interface ensures easy operation, while its low maintenance requirements minimize downtime. 
                //                         \nDespite its compact design and small footprint, it integrates seven servos, enabling high-speed performance. A specialized forming tool ensures uniform and superior forming, while the engineered filling system with positive cut-off guarantees precision. Additionally, a servo-controlled continuous sealing mechanism maximizes sealing time, enhancing sealing quality and strength. The servo-pulling method ensures accurate and uniform eye-mark-to-eye-mark pulling. Notably, the machine facilitates seamless roll changes without halting operations. Optional features include an auto splicing system, online coding system, and outfeed conveyor, further enhancing productivity. Customer color preferences are accommodated, and pouch-making capacity varies depending on film material and thickness. The equipment improvements may lead to changes in appearance and optional features are sold separately from standard equipment.
                // `,
                //                     image: "/images/flexiuflex.png",
                //                 },
            ],
        },
        sustainability: {
            title: "Sustainability",
            description:
                "At UFlex, we prioritise environmental responsibility across our operations. UFlex engineering has undertaken several initiatives focussed on water conservation, waste management and enhancing biodiversity surrounding our facilities.",
            image: "/images/new/sus1.jpeg",
            linkLabel: "Know More",
            linkHref: "/engineering-business/sustainability",
        },
        keypeople: {
            title: "Leadership",
            details: [
                {
                    photo: "/images/ravi.png",
                    name: "Mr. Ravi Sharma",
                    role: "Joint President - Engineering and Solutions Delivery, Engineering Business",
                    summary: `Mr. Ravi Sharma, joining in 1992, brings over 12 years of manufacturing experience, including tenure with notable multinationals like Allied Signals, Molins India Limited, and a subsidiary of Philips Carbon Black Limited (RPG Group). Holding a mechanical engineering degree from Thapar Institute of Engineering & Technology, Patiala, Ravi has attended numerous management and leadership seminars globally. His expertise spans plant management, R&D, innovation, supply chain, and customer relations. Ravi's leadership has significantly enhanced the company's production of reliable, high-quality packaging machines. Guiding a team of skilled technocrats, his innovative initiatives have bolstered sales. His experience, dedication, and motivational skills inspire the organization's workforce.`,
                    cta: { label: "Read More", href: "/leadership/ravi-sharma" },
                },
                {
                    photo: "/images/akash.png",
                    name: "Mr. Akash Khandelwal",
                    role: "Executive Vice President – Operations, Engineering Business",
                    summary: `With nearly three decades of experience across manufacturing operations, strategy, project management, and quality. He drives operational excellence and business growth at engineering business. He brings strong expertise in manufacturing, product development, and business expansion, with a proven ability to enhance processes, improve efficiency, and boost productivity.`,
                    cta: { label: "Read More", href: "/leadership/akash-khandelwal" },
                },
                {
                    photo: "/images/new/sum.jpg",

                    name: "Mr. Sumeet Arora",
                    role: "Senior Vice President - Sales and Marketing, Engineering Business",
                    summary:
                        "A seasoned business leader with over three decades of experience in SBU operations, P&L management, and driving market growth for capital equipment across domestic and international markets. Prior to joining UFlex, he served as Managing Director at Uhlmann India and held leadership positions with renowned organizations including Cenlub Industries, SS Packaging, ACG Worldwide, and Hassia Packaging. His extensive career reflects deep expertise in engineering and packaging, with a strong record of establishing new markets and strengthening existing ones. He holds a B.Tech in Mechanical Engineering from YMCA, Faridabad.",
                    cta: { label: "Read More", href: "/leadership/sumeet-arora" },
                },
            ],
        },
        awards: {
            title: "Awards & Accolades",
            description: "Over the last several years, UFlex’s Flexible Packaging business has received various awards and certifications for its innovative and sustainable packaging solutions.",
            image: "/images/awards.png",
            linkLabel: "Know More",
            linkHref: "/hall-of-fame",
        },
        accreditation: [
            { image: "/images/accc13.png" },
            { image: "/images/accc14.png" },
        ],
    },





];


type Props = {
    business: any;
};
const EngComp: React.FC<Props> = ({ business }) => {
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
                                    className="text-[24px] lato-400 text-[#173366] md:text-[28px] "
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
                            </div> */}
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[24px] lato-700 text-[#173366] md:text-[42px] "
                                >
                                    Engineering
                                </motion.h1>

                                <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                                    {packagingData[0].paragraphs[0]}
                                </p>

                                <button
                                    onClick={() => setOpen(true)}
                                    className="mt-4 lato-400 text-[16px] sm:text-[20px]  text-[#173366]  hover:underline"
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
                                    src="/images/new/ceruflex.jpeg"
                                    alt="UFlex capabilities across the value chain"
                                    fill
                                    className="object-cover rounded-sm"
                                    priority
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                            </motion.div>
                        </div>
                        <SimpleCarousel heading="Our Offerings"
                            // items={SliderItems}
                            items={SliderItems.map(item => {
                                const titleLower = item.title.toLowerCase();

                                let catKey = "packaging"; // default

                                if (titleLower.includes("packaging")) {
                                    catKey = "packaging";
                                } else if (titleLower.includes("converting")) {
                                    catKey = "converting";
                                } else if (titleLower.includes("speciality") || titleLower.includes("special")) {
                                    catKey = "speciality";
                                }

                                return {
                                    ...item,
                                    dynamiclink: `/engineering-business/engineering-Our-Offering?cat=${catKey}`,
                                };
                            })}
                            imageHeight={280} />


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
                        {/* <AwardsSection data={business.awards} /> */}

                        <AccreditationsSlider items={business.accreditation ?? []} />
                    </div>
                </div>






            </section>
        </div>
    )
}

export default EngComp
