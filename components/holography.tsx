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
import { BusinessConfig } from '@/app/business/data'
import { ReadMoreDialog } from './expandabletext'



const SliderItems: SliderItem[] = 
[
   {
        img: "/images/holography/h1.png",
        dynamiclink: "/holography-business/holography-Our-Offering",
        title: "Security Paper Labels & Tax Stamps",
        desc: "",
    },
    {
        img: "/images/holography/h2.png",
        dynamiclink: "/holography-business/holography-Our-Offering",
        title: "Security Documents",
        desc: "",
    },
    {
        img: "/images/holography/h3.png",
        dynamiclink: "/holography-business/holography-Our-Offering",
        title: "Textile Application Films for: Sequins ,Hot Melt ,Glitter Powder",
        desc: "",
    },
    {
        img: "/images/holography/h4.png",
        dynamiclink: "/holography-business/holography-Our-Offering",
        title: "Wide Web Holographic Films",
        desc: "",
    },
    {
        img: "/images/holography/h5.png",
        dynamiclink: "/holography-business/holography-Our-Offering",
        title: "Transfer Holographic Metallized Paper & Paperboard",
        desc: "",
    },
    {
        img: "/images/holography/h6.png",
        dynamiclink: "/holography-business/holography-Our-Offering",
        title: "Stamping Foils",
        desc: "",
    },
    {
        img: "/images/holography/h7.png",
        dynamiclink: "/holography-business/holography-Our-Offering",
        title: "Advanced Security Holograms",
        desc: "",
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
                        "UFlex continues to set global benchmarks through advanced infrastructure, technical excellence, advanced R&D, and deep market intelligence, ensuring world-class quality and innovation across its offerings. Our state-of-the-art in-house manufacturing facilities, equipped with Origination, Coatings, Metallizers, and Slitting machines, enable advanced transfer technology, enhancing both surface appeal and tactile experience.",
                    image: "/images/foils.png"
                },
                {
                    id: "alu-alu-blister",
                    title: "Holographic Alu-Alu Blister",
                    description: "Holographic Alu-Alu Blister marks a major breakthrough in pharmaceutical packaging, reinforcing UFlex’s commitment to industry-leading brand protection. Integrated with covert security features, this innovative solution provides an enhanced layer of anti-counterfeiting protection, ensuring product authenticity and consumer safety."

                    ,image: "/images/blister.png"
                },
                {
                    id: "decorative-products",
                    title: "Decorative Products Segment",
                    description: "As part of UFlex’s strategic diversification, the decorative holographic calendar represents a distinctive offering within the holographic product segment. This unique application combines high-end aesthetics with functional design, creating a visually striking product ideal for festive and promotional use.",
                    image: "/images/decorative.png"
                },
                {
                    id: "advanced-blister-packs",
                    title: "Advanced holographic blister packs",
                    description: "UFlex’s enhanced holographic blister packs are engineered with advanced security features, making replication virtually impossible.", image: "/images/advanced.png"
                },
                {
                    id: "high-refractive-sequins",
                    title: "High-Refractive Holographic Sequins Film",
                    description: "UFlex’s high-refractive holographic sequins film delivers exceptional brilliance and luster. Targeted at premium markets, it combines advanced holographic technology with precision coatings to create stunning light and color effects. Ideally suited for premium fashion, accessories, haute couture, and upscale décor, this cutting-edge sequins film enhances embellishments with a touch of luxury and sophistication. With this high-performance solution, UFlex Holography continues to set industry benchmarks, demonstrating its ongoing commitment to innovation, quality, and excellence in high-end decorative applications.",

                    image: "/images/refractive.png"
                },
                {
                    id: "3d-flipogram",
                    title: "3D Flipogram – Advanced Visual Anti-Counterfeiting Technology",
                    description: "UFlex’s 3D Flipogram revolutionizes brand protection with its advanced micro-optical technology, delivering unparalleled visual anti-counterfeiting solutions. Comprising hundreds of thousands of micro-lenses, this highly secure technology—also used in currency notes—creates a unique and dynamic 3D visual effect that is virtually impossible to replicate. Effortless to use, the Flipogram effect allows consumers to instantly verify authenticity by simply viewing the imagery, with no special lighting or devices required. Beyond its powerful security benefits, this innovation also enhances product appeal, reinforcing trust and elevating brand value.",

                    image: "/images/flipogram.png"
                }
            ]
        },

        sustainability: {
            title: "Sustainability",

            description: `In the process of providing the
best fraud-preventive
infallible seals of full-proof
product security, we ensure
that all emissions are well
below the permissible levels.
We continuously strive for
minimum process waste
generation and optimally
recycle the same. \n\n We have many solutions of sustainability segment- holographic transfer on paper and board, cold transfer foils, recycled RSC certified sequins film, cast and cure holographic films among many other.`,
            image: "/images/sus.png",
            linkLabel: "Know More",
            linkHref: "/holography-business/sustainability"
        },

        keypeople: {
            title: "Key People",
            details: [
              
                {
                    photo: "/images/vinod.png",
                    name: "Mr. Vinod Hariharan",
                    role: "Executive Vice President – Holography Business",
                    summary: `With almost three decades of
rich and diverse experience,
Mr. Vinod Hariharan is a
seasoned professional with
deep expertise in strategic
planning, business
development, channel
management, digital
marketing, sales, and general
management. He has held key
leadership roles in reputed
international organizations,
including American and
European companies, several

of which are part of the
Fortune 500 group. His
extensive global exposure and
well-rounded skill set have
consistently contributed to
business growth and
operational excellence. Mr.
Hariharan holds a B.Tech in
Mechanical Engineering from
NIT Kozhikode and has further
strengthened his leadership
credentials through the Senior
Management Program at IIM
Kolkata.`,
                    cta: { label: "Read More", href: "/leadership/vinod-hariharan" }
                },
                  {
                    photo: "/images/pathak.png",
                    name: "Mr. G.P. Pathak",
                    role: "Vice President – Operations and New Product Development, Holography Business",
                    summary: `With over three decades of
                    invaluable experience, Mr.
                    G.P. Pathak has established
                    himself as a seasoned
                    professional in the Holography
                    and Anti-Counterfeiting
                    industry. Throughout his
                    career, he has been associated
                    with several leading
                    organizations, bringing deep
                    expertise and innovative
                    thinking to every role. For the
                    past 14 years, he has been an
                    integral part of UFlex, where
                    he is a founding member of
                    the company’s Holography
                    Business. Mr. Pathak has
                    played a pivotal role in driving
                    UFlex’s ambitious growth
                    strategy, leveraging his ability
                    to blend new ideas and
                    spearhead product
                    innovation. His forward-
                    thinking approach has
                    significantly contributed to
                    positioning the business as a
                    prominent player in the global
                    holography anti-counterfeiting
                    space. Mr. Pathak holds a
                    Master of Science (M.Sc.)
                    degree, underscoring his
                    strong academic foundation.`,
                    cta: { label: "Read More", href: "/leadership/gp-pathak" }
                },
                {
                    photo: "/images/rakesh.png",
                    name: "Mr. Rakesh Khazanchi",
                    role: "Vice President – Sales and Marketing, Holography Business",
                    summary: `With over 35 years of rich
                    
                    Pics of G.P. Pathak and Rakesh
                    Khazanchi
                    
                    experience in Sales and
                    Marketing, Mr. Rakesh
                    Khazanchi brings deep
                    expertise in strategy, brand
                    building, and sales
                    management processes.
                    Before joining UFlex’s
                    Holography business in 2012
                    as AVP-Marketing, he held key
                    roles at several prestigious
                    organizations, including
                    Escorts Limited and Xerox
                    INDIA LTD., where he honed
                    his leadership and strategic
                    acumen. In his current role,
                    Mr. Khazanchi heads the Sales
                    &amp; Marketing team of the
                    Holography Business, driving
                    transformational growth
                    through a sharp focus on
                    customer-centric solutions.
                    Under his dynamic leadership,
                    the business has witnessed
                    remarkable three-digit growth
                    and is well on its path to
                    becoming a global leader in
                    Holographic Solutions. Mr.
                    Khazanchi holds a
                    postgraduate degree, which
                    complements his extensive
                    professional experience.`,
                    cta: { label: "Read More", href: "/leadership/rakesh-khazanchi" }
                },
            ]
        },

        awards: {
            title: "Awards & Accolades",
            description:
                "Over the last several years, UFlex’s Flexible Packaging business has received various awards and certifications for its innovative and sustainable packaging solutions.",
            image: "/images/awards.png",
            linkLabel: "Know More",
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

// const packagingData = [
//     {
//         "id": "holography",
//         title: "Holography Business",
//         image: "/images/advanced.png",
//         "imageAlt": "UFlex Holography Solutions",
//         paragraphs: [
//             `Holography business of UFlex
// is India’s largest and most
// trusted provider of brand
// protection and anti-
// counterfeiting solutions, as
// well as an emerging global
// player in the industry.`,
//             `UFlex Limited’s advanced manufacturing facilities in Noida and Jammu are equipped with advanced in-house capabilities, enabling high-volume production while maintaining the highest quality standards. Specializing in holography-based anti-counterfeiting packaging and brand protection solutions, our facilities empower brands to combat counterfeiting threats and safeguard their business interests.\n\nWith support from NABL-accredited labs and manufacturing sites in Noida and Jammu, India, boasting certifications such as ISO 9001:2015, ISO 14001:2015, ISO45001:2018, ISO 50001:2018, and ISO 31000:2018, we consistently uphold global standards.`,
//             `Our commitment to quality, security, and sustainability is reinforced by globally recognized certifications, including, ISO 9001:2015 – Quality Management System (QMS), ISO 14001:2015 – Environmental Management System, ISO/IEC 27001:2022 – Information Security Management System, ISO 14298:2021 – Graphic Technology & Security Printing Management, HSSMS Certification – Health & Safety Management System, & IBA Certified Security Printer\n\nAs an industry leader, UFlex is a proud member of ITSA, IOTA (IHMA), and ASPA, actively contributing to the advancement of security printing and brand protection.`
//         ]
//     }

// ];
const packagingData = [
    {
        id: "holography",
        title: "Holography Business",
        image: "/images/holography/hall.png",
        imageAlt: "UFlex Holography Solutions",

        content: [
            {
                type: "paragraph",
                text:"The UFlex holography business is India’s largest and most trusted provider of brand protection and anti-counterfeiting solutions, as well as an emerging global player in the industry.",
                strong: ["Holography Business of UFlex"]
            },
            {
                type: "paragraph",
                text: "The Holography Business of UFlex offers a comprehensive range of holographic solutions, including advanced security holograms, security paper labels & tax stamps, wide web holographic films, stamping foils, transfer holographic metallized paper & paperboard, security documents, and textile application films for sequins, hot melt, and glitter powder.",
                strong: ["Holography Business of UFlex"]
            },
            {
                type: "paragraph",
                text: "UFlex Limited’s advanced manufacturing facilities in Noida and Jammu are equipped with advanced in-house capabilities, enabling high-volume production while maintaining the highest quality standards. Specializing in holography-based anti-counterfeiting packaging and brand protection solutions, our facilities empower brands to combat counterfeiting threats and safeguard their business interests.",
                strong: ["UFlex Limited’s advanced manufacturing facilities"]
            },
            {
                type: "heading",
                text: "Global Certifications & Industry Recognition"
            },
            {
                type: "paragraph",
                text: "Our commitment to quality, security, and sustainability is reinforced by globally recognized certifications, including:",
                strong: ["quality, security, and sustainability"]
            },
            {
                type: "list",
                items: [
                    { label: "ISO 9001:2015", value: "Quality Management System (QMS)" },
                    { label: "ISO 14001:2015", value: "Environmental Management System" },
                    { label: "ISO/IEC 27001:2022", value: "Information Security Management System" },
                    { label: "ISO 14298:2021", value: "Graphic Technology & Security Printing Management" },
                    { label: "HSSMS Certification", value: "Health & Safety Management System" },
                    { label: "IBA Certified Security Printer" }
                ]
            },
            {
                type: "paragraph",
                text: "As an industry leader, UFlex is a proud member of ITSA, IOTA (IHMA), and ASPA, actively contributing to the advancement of security printing and brand protection.",
                strong: ["industry leader", "ITSA", "IOTA (IHMA)", "ASPA"]
            }
        ]
    }
];




type Props = {
    business: BusinessConfig;
};
const HoloGraphyComp: React.FC<Props> = ({ business }) => {
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
                            </div> */}
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
                                >
                                    Holography
                                </motion.h1>

                                <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                                    {packagingData[0].content[0].text}
                                </p>

                                {/* <div className="text-wrap max-w-xl space-y-3  text-gray-800 lato-400 text-[16px] sm:text-[18px] leading-relaxed">
                                    <p>
                                        The Holography Business offers a <strong>comprehensive range of holographic solutions</strong>, including:
                                    </p>

                                    <ul className="list-disc space-y-1 pl-5">
                                        <li><strong>Advanced Security Holograms</strong></li>
                                        <li><strong>Security Paper Labels &amp; Tax Stamps</strong></li>
                                        <li><strong>Wide Web Holographic Films</strong></li>
                                        <li><strong>Stamping Foils</strong></li>
                                        <li><strong>Transfer Holographic Metallized Paper &amp; Paperboard</strong></li>
                                        <li><strong>Security Documents</strong></li>
                                        <li>
                                            <strong>Textile Application Films for: Sequins ,Hot Melt ,Glitter Powder</strong>
                                        </li>
                                    </ul>
                                </div> */}


                                <button
                                    onClick={() => setOpen(true)}
                                    className="mt-4 lato-400 text-[16px] sm:text-[20px]  text-[#117ABA]  hover:underline"
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
                                    imageAlt={packagingData[0].imageAlt}
                                    content={packagingData[0].content}
                                />



                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[16/10] w-full overflow-hidden "
                            >
                                <Image
                                    src="/images/holography/hall.png"
                                    alt="UFlex capabilities across the value chain"
                                    fill
                                    className="object-cover rounded-sm"
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
